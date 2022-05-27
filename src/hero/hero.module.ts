import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { heroGrpcOptions } from 'src/hero-grpc-options';
import { HeroController } from './hero.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HERO_PACKAGE',
        transport: Transport.GRPC,
        options: heroGrpcOptions,
      },
    ]),
  ],
  controllers: [HeroController],
})
export class HeroModule {}
