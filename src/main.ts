import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { setupSwagger } from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração global de validação
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Configuração do CORS
  app.enableCors();

  // Configuração do Swagger
  setupSwagger(app);

  await app.listen(3000);
  console.log('🚀 Aplicação rodando em http://localhost:3000');
  console.log('📚 Documentação Swagger em http://localhost:3000/api/docs');
}
bootstrap(); 