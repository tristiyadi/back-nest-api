import { ApiProperty } from '@nestjs/swagger';
import { Orders } from './../entity/orders.entity';

export class OrdersDto {
    @ApiProperty()
    readonly id: number;

    @ApiProperty()
    readonly transaction_code: string;

    @ApiProperty()
    readonly total_cart: number;

    @ApiProperty()
    readonly tgl_pengiriman: Date;

    @ApiProperty()
    readonly notes: string;

    @ApiProperty()
    readonly total_cart_before: number;

    @ApiProperty()
    readonly total_cart_after: number;
    
    @ApiProperty()
    readonly created_at: Date;

    @ApiProperty()
    readonly updated_at: Date;

    @ApiProperty()
    readonly user: any;

    @ApiProperty()
    readonly promotions: any;

    constructor(_d: Orders) {
        this.id = _d.id;
        this.transaction_code = _d.transaction_code;
        this.total_cart = _d.total_cart;
        this.tgl_pengiriman = _d.tgl_pengiriman;
        this.notes = _d.notes;
        this.total_cart_before = _d.total_cart_before;
        this.total_cart_after = _d.total_cart_after;
        this.created_at = _d.created_at;
        this.updated_at = _d.updated_at;
        this.user = _d.user;
        this.promotions = _d.promotions;
    }
}
