# Music

This is a federated graphql based app. It is comprised of `Albums` and `Artists`. The goal was to expose multiple services with resolvers close by, and to expose that via a traversable graph with 1 to many relationships.

To Run

- Install the graphql router
  - `curl -sSL https://router.apollo.dev/download/nix/latest | sh`
- Install rover
  - `npm install -g @apollo/rover`
- Run each project target. This will generate graphql schemas.
- Run `./startup.sh` to start stitch together each graph and the router
- Go to a graphql explorer https://studio.apollographql.com/sandbox/explorer
