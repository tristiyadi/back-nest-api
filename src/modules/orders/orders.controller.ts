import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
  UseGuards,
  Req,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiOkResponse, ApiBearerAuth, ApiParam } from '@nestjs/swagger';

import { OrdersService } from './orders.service';
import { Orders as OrdersEntity } from './../../core/entity/orders.entity';
import { OrdersDto } from './../../core/dto/orders.dto';

@Controller('orders')
@ApiTags('orders')
export class OrdersController {
  constructor(private readonly orderService: OrdersService) {}

  @Get()
  @ApiOkResponse({ type: [OrdersDto] })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async findAll() {
    // get all orders in the db
    return await this.orderService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: OrdersDto })
  @ApiParam({ name: 'id', required: true })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async findOne(@Param('id') id: number): Promise<OrdersEntity> {
    // find the orders with this id
    const orders = await this.orderService.findOne(id);

    // if the orders doesn't exit in the db, throw a 404 error
    if (!orders) {
      throw new NotFoundException("This Orders doesn't exist");
    }

    // if orders exist, return the orders
    return orders;
  }

  @Post()
  @ApiOkResponse({ type: OrdersDto })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async create(
    @Body() orders: OrdersDto,
    @Req() req,
  ): Promise<OrdersEntity> {
    // create a new orders and return the newly created orders
    return await this.orderService.create(orders, req.user.id);
  }

  @Put(':id')
  @ApiOkResponse({ type: OrdersDto })
  @ApiParam({ name: 'id', required: true })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async update(
    @Param('id') id: number,
    @Body() orders: OrdersDto,
    @Req() req,
  ): Promise<OrdersEntity> {
    // get the number of row affected and the updated orders
    const {
      numberOfAffectedRows,
      updatedOrders,
    } = await this.orderService.update(id, orders, req.user.id);

    // if the number of row affected is zero, it means the orders doesn't exist in our db
    if (numberOfAffectedRows === 0) {
      throw new NotFoundException("This orders doesn't exist");
    }

    // return the updated orders
    return updatedOrders;
  }

  @Delete(':id')
  @ApiOkResponse({ type: OrdersDto })
  @ApiParam({ name: 'id', required: true })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async remove(@Param('id') id: number, @Req() req) {
    // delete the orders with this id
    const deleted = await this.orderService.delete(id, req.user.id);

    // if the number of row affected is zero, then the orders doesn't exist in our db
    if (deleted === 0) {
      throw new NotFoundException("This orders doesn't exist");
    }

    // return success message
    return 'Successfully deleted';
  }
}
