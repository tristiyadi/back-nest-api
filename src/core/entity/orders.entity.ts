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

import { User } from './user.entity';
import { Promotions } from './promotions.entity';

@Table({
  tableName: 'orders',
})
export class Orders extends Model<Orders> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: number;

  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  transaction_code: string;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  total_cart: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  tgl_pengiriman: Date;

  @Length({
    min: 3,
    msg: `The length of notes can't be shorter than 3`,
  })
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  notes: string;
   
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  total_cart_before: number;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  total_cart_after: number;

  @CreatedAt
  @Column({ field: 'created_at' })
  created_at: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  updated_at: Date;

  @DeletedAt
  @Column({ field: 'deleted_at' })
  deleted_at: Date;

  @ForeignKey(() => User)
  @Column({
    allowNull: false,
    type: DataType.UUID,
    field: 'user_id',
  })
  user_id: string;

  @ForeignKey(() => Promotions)
  @Column({
    allowNull: false,
    type: DataType.BIGINT,
    field: 'promotions_id',
  })
  promotions_id: number;

  @BelongsTo(() => User)
  user: User[];
  @BelongsTo(() => Promotions)
  promotions: Promotions[];
}
