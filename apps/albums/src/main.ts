/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { GraphQLSchemaHost } from '@nestjs/graphql';
import fs from 'fs';
import { printSubgraphSchema } from '@apollo/subgraph';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  const gqlSchemaFactory = app.get(GraphQLSchemaHost);
  fs.writeFileSync(
    './albums.graphql',
    printSubgraphSchema(gqlSchemaFactory.schema),
    'utf8'
  );
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
