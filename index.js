const { ApolloServer } = require("apollo-server");
const { readGqlFiles } = require("./loadSchema");

const {
  makeAugmentedSchema
} = require("neo4j-graphql-js");
const neo4j = require("neo4j-driver");

const AppSchema = readGqlFiles();

// TODO: Add load schema and a readme to run neo4j with docker

// ! typeDefs == AppSchema
const typeDefs = `
type Query {
  rootQuery: String @cypher(statement: "WITH 'Wooorking 🐈 🐈 🐈 🐈' AS value RETURN value")
 }

 type Movie {
  title: String
  movieTestBase: String @cypher(statement: "WITH 'Wooorking 🐈 🐈 🐈 🐈' AS value RETURN value")
 }

 extend type Movie {
  movieTestExtend: String @cypher(statement: "WITH 'Wooorking 🐈 🐈 🐈 🐈' AS value RETURN value")
 }

 extend type Query {
  extendQuery: String @cypher(statement: "WITH 'NOT WORKING 😞 😞 😞 😞' AS value RETURN value")
 }
`;

// Generate executable schema with auto-generated resolvers
const schema = makeAugmentedSchema({
  typeDefs: AppSchema
});

// Instantiate a Neo4j database driver
const driver = neo4j.driver(
  "bolt://localhost:7687",
  neo4j.auth.basic("neo4j", "test")
);

// Create a new ApolloServer, injecting the database driver
// into the context
const server = new ApolloServer({
  context: { driver },
  schema
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
