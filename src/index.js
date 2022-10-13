#!/usr/bin/env node
import { Command } from 'commander';
import { generate } from 'swagger-typescript';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const swaggerOption = {
  language: 'typescript',
};

const commander = new Command();
commander
  .arguments('<url>')
  .arguments('<dir>')
  .action((url, dir) => {
    return generate({ ...swaggerOption, url, dir: path.join(__dirname, dir) })
      .then(() => console.log('Success Swagger to Typescript Interface'))
      .catch(console.error);
  })
  .parse(process.argv);