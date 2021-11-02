/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { injectable } from "inversify";
import Order from "../models/order";

@injectable()
export class OrderRepository {
  async getOrderById(order: number): Promise<any> {
    return await Order.findOne({
      "articulo.codart": order,
    });
  }

  async getOrders(callback): Promise<void> {
    await Order.find().exec(callback);
  }

  async save(orderDto: any): Promise<any> {
    const entity = new Order(orderDto);
    return await entity.save();
  }

  async saveMany(orderDto: any[]): Promise<any[]> {
    return await Order.insertMany(orderDto);
  }
}
