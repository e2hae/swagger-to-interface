#!/usr/bin/env node
import { Command } from 'commander';
import { generate } from 'swagger-typescript';
import path from 'path';
import url from 'url';

const swaggerOption = {
  language: 'typescript',
};

const commander = new Command();
commander
  .arguments('<url>')
  .arguments('<dir>')
  .action((url, dir) => {
    return generate({ ...swaggerOption, url, dir: path.join(process.cwd(), dir) })
      .then(() => console.log('Success Swagger to Typescript Interface'))
      .catch(console.error);
  })
  .parse(process.argv);