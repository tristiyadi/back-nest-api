import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  IsDate, CreatedAt, UpdatedAt, DeletedAt, IsBefore
} from 'sequelize-typescript';

import { User } from './user.entity';

@Table
export class Orders extends Model<Orders> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  transaction_code: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  total_cart: string;

  @IsDate  
  @IsBefore(Date())
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  tgl_pengiriman: Date;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  notes: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  created_by: string;

  @IsDate  
  @IsBefore(Date())
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  created_at: Date;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id: number;

  @BelongsTo(() => User)
  user: User;
}
