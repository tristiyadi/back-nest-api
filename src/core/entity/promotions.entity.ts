import {
  Table,
  PrimaryKey,
  AutoIncrement,
  Column,
  DataType,
  Model,
  ForeignKey,
  Unique,
  Length,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  BelongsTo,
} from 'sequelize-typescript';

import { Orders } from './orders.entity';
  

@Table({
  tableName: 'promotions',
})

export class Promotions extends Model<Promotions> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: number;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  discount: number;

  @CreatedAt
  @Column({ field: 'created_at' })
  created_at: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  updated_at: Date;

  @DeletedAt
  @Column({ field: 'deleted_at' })
  deleted_at: Date;

  // @ForeignKey(() => Orders)
  // @Column({
  //   type: DataType.INTEGER,
  //   allowNull: false,
  // })
  // orders_id: number;

  // @BelongsTo(() => Orders)
  // orders: Orders[];
}
  