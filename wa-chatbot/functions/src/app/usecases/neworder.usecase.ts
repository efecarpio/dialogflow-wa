/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { inject, injectable } from "inversify";
import { Result } from "../../core/domain";
import { TYPES_REPOSITORIES } from "../../core/types";
import { INewOrderUseCase } from "../handlers";
import exportToFile from "../../app/services/exportfile.service";

import {
  OrderRepository,
  ArticuloRepository,
} from "./../../infra/mongoose/repository";

@injectable()
export class NewOrderUseCase implements INewOrderUseCase {
  constructor(
    @inject(TYPES_REPOSITORIES.OrderRepository)
    private readonly repository: OrderRepository,
    @inject(TYPES_REPOSITORIES.ArticuloRepository)
    private readonly articuloRepository: ArticuloRepository
  ) { }

  async execute(request: any): Promise<Result<any>> {
    try {
      const orders = request.order;
      const phone = request.phone;
      const ordersNew = [];
      const ordersNotFound = [];

      for (let i = 0; i < orders.length; i++) {
        const order = orders[i];
        const quantity = order.number[0];
        const articuloNumber = order.number[1];

        const articulo = await this.articuloRepository
            .getOrderById(articuloNumber);

        if (articulo !== null) {
          ordersNew.push(this.createOrder(articulo, quantity, phone));
        } else {
          ordersNotFound.push(articuloNumber);
        }
      }

      await this.repository.saveMany(ordersNew);
      await this.getOrders();

      return Result.ok<any>(ordersNotFound);
    } catch (e) {
      let errorMessage = "An error has ocurred";
      if (e instanceof Error) {
        errorMessage = e.message;
      }
      const obj = "NewOrder " + errorMessage;
      return Result.fail<any>(obj);
    }
  }

  private createOrder(
      { codart, descrip, valor }: any, quantity: number, phone: string
  ) {
    return {
      codord: 0,
      phone: phone,
      quantity: quantity,
      articulo: {
        codart: codart,
        descrip: descrip,
        valor: valor,
      },
    };
  }

  private async getOrders() {
    let row = "";
    await this.repository.getOrders((err, orders) => {
      if (err) throw err;
      orders.forEach((order: any) => {
        row += `\n${order.codord},${order.articulo.codart},` +
        `${order.quantity},${order.articulo.descrip},` +
        `${order.articulo.valor},${order.phone}`;
      });
      exportToFile(row);
    });
  }
}
