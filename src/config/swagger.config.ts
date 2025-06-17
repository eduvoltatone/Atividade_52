import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle('User Management API')
    .setDescription('API para gerenciamento de usuários com JWT e RBAC seguindo princípios SOLID')
    .setVersion('1.0')
    .addTag('users', 'Operações relacionadas aos usuários')
    .addBearerAuth()
    .setContact(
      'Suporte',
      'http://localhost:3000',
      'suporte@exemplo.com'
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
} 