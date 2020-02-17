const {
  readdirSync,
  readFileSync
} = require("fs");

module.exports.readGqlFiles = (
  dirname = "./schema/",
  baseFileName = "base.gql"
) => {
  const schemaFiles = readdirSync(dirname);
  let schemaFilesArray = {};

  for (
    let index = 0;
    index < schemaFiles.length;
    index++
  ) {
    const schemaFile = schemaFiles[index];
    schemaFilesArray[schemaFile] = readFileSync(
      dirname + "/" + schemaFile,
      "utf-8"
    );
  }

  let concatenatedGql =
    schemaFilesArray[baseFileName];
  const otherSchemas = Object.keys(
    schemaFilesArray
  ).filter(k => k != baseFileName);
  otherSchemas.forEach(otherSchema => {
    concatenatedGql +=
      schemaFilesArray[otherSchema];
  });
  return concatenatedGql;
};
