#!/bin/bash

rover supergraph compose --config ./supergraph.yaml > ./supergraph.gql
./router --supergraph supergraph.gql -c config.yaml --log trace