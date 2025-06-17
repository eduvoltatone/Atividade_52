import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';

export class UserEntity {
  @ApiProperty({ example: 'cuid1234567890', description: 'ID único do usuário' })
  id: string;

  @ApiProperty({ example: 'João Silva', description: 'Nome do usuário' })
  name: string;

  @ApiProperty({ example: 'user@example.com', description: 'Email do usuário' })
  email: string;

  @ApiProperty({ example: 'USER', description: 'Role do usuário', enum: Role })
  role: Role;

  @ApiProperty({ example: '2023-01-01T00:00:00.000Z', description: 'Data de criação' })
  createdAt: Date;

  @ApiProperty({ example: '2023-01-01T00:00:00.000Z', description: 'Data de atualização' })
  updatedAt: Date;
} 