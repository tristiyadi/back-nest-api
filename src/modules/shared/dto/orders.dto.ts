import {
  IsNotEmpty,
  MinLength,
  IsEmail,
  IsEnum,
  IsBoolean,
  isDate,
} from 'class-validator';


export class OrdersDto {
  @IsNotEmpty()
  @MinLength(8)
  readonly transaction_code: string;

  @IsNotEmpty()
  readonly total_cart: string;

  @IsNotEmpty()
  readonly tgl_pengiriman: string;

  @IsNotEmpty()
  readonly notes: string;

  @IsNotEmpty()
  readonly created_by: string;

  readonly created_at: Date;
  readonly updated_nt: Date;
  readonly deleted_at: Date;
}
