/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { GraphQLSchemaHost } from '@nestjs/graphql';
import { printSubgraphSchema } from '@apollo/subgraph';

import fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3001;
  await app.listen(port);
  const gqlSchemaFactory = app.get(GraphQLSchemaHost);
  fs.writeFileSync(
    './artists.graphql',
    printSubgraphSchema(gqlSchemaFactory.schema),
    'utf8'
  );
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
