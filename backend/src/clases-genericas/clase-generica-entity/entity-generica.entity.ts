import { CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm/index';

@Entity()
export class EntityGenericaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'create_at',
    nullable: false,
  })
  createAt: Date = null;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'update_at',
    nullable: false,
  })
  updateAt: Date = null;

}
