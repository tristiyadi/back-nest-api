import { Table, Column, Model, DataType, HasMany, IsDate, CreatedAt, UpdatedAt, DeletedAt, IsBefore  } from 'sequelize-typescript';
import { Orders } from './orders.entity';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;
  @Column({
    type: DataType.ENUM,
    values: ['male', 'female'],
    allowNull: false,
  })
  gender: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  role_id: number;

  @IsDate  
  @IsBefore(Date())
  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  verified_at: Date;

  @HasMany(() => Orders)
  orders: Orders[];
}
