# neo4j-graphql-bug

**This repo is created for [this issue](https://github.com/neo4j-graphql/neo4j-graphql-js/issues/395) only and not for demo purpose**

## Setup

- Download this realease to \$HOME/neo4j/plugins

  - <https://github.com/neo4j-contrib/neo4j-apoc-procedures/releases/tag/4.0.0.2>

- Run the image

  ```shell
  docker run \
   --name testneo4j \
   -p7474:7474 -p7687:7687 \
   -d \
   -v $HOME/neo4j/data:/data \
    -v $HOME/neo4j/logs:/logs \
   -v $HOME/neo4j/import:/var/lib/neo4j/import \
    -v $HOME/neo4j/plugins:/plugins \
   --env NEO4J_AUTH=neo4j/test \
   -e NEO4J_dbms_security_procedures_unrestricted=apoc.\* \
   neo4j:latest
  ```

- This docker image runs with (username: neo4j/ pass: test)
