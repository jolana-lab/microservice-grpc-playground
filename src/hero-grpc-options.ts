import { join } from 'path';

export const heroGrpcOptions = {
  package: 'hero', // ['hero', 'hero2']
  protoPath: join(__dirname, './hero/hero.proto'), // ['./hero/hero.proto', './hero/hero2.proto']
};
