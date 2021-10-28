import {
  Entity,
  ObjectIdColumn,
  Column,
} from "typeorm";
// import { Stock } from "./stock";

@Entity("articulos")
/**
 * Clase para la tabla Articulos
 * @export
 * @class Articulo
 */
export class Articulo {
  @ObjectIdColumn()
  codart!: number;

  @Column()
  uniart!: number;
  @Column()
  descrip!: string;
  @Column()
  valor!: number;
  @Column()
  resto!: number;
  @Column()
  unipaq!: number;
  @Column()
  unidmin!: number;
  @Column()
  peso!: number;
  @Column()
  codprecan!: string;
  @Column()
  codpreres!: string;
  @Column()
  factor!: number;

  /* @OneToMany(() => Stock, (identificador: Stock) => identificador.codart)
  stock!: Stock[];*/
}
