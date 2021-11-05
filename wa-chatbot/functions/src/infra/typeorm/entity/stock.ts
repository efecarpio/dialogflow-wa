/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Entity,
  Column,
} from "typeorm";
import { Articulo } from "./articulo";

@Entity("stock")
/**
 * Stock de productos
 * @export
 * @class Stock
 */
export class Stock {
  @Column()
  stock!: number;
  @Column()
  fecha!: string;

  @Column((type: Partial<Articulo>) => Articulo)
  codart: Partial<Articulo>;
}
