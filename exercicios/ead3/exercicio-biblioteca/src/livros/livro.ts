import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('livros')
export class Livro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  autor: string;

  @Column()
  ano: number;
}
