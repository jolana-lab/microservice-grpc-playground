import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { heroGrpcOptions } from './hero-grpc-options';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: heroGrpcOptions,
  });

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
