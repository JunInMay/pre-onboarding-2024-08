import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('tb_user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'user_id',
    type: 'varchar',
    length: 255,
    unique: true,
  })
  userId: string;

  @Column({
    name: 'user_email',
    type: 'varchar',
    length: 255,
    unique: true,
  })
  userEmail: string;

  @Column({
    name: 'password',
    type: 'varchar',
    length: 255,
  })
  password: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'datetime',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'datetime',
    nullable: true,
  })
  updatedAt: Date;
}
