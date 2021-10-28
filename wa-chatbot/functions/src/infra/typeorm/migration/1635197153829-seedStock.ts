import {
  MigrationInterface,
  QueryRunner,
} from "typeorm";

import { Stock } from "./../entity/stock";

export class seedStock1635197153829 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const stock: Stock[] = [
      {
        "codart": {
          "codart": 470,
          "descrip": "SEMOLA MOLITALIA 20UN*200GR",
          "resto": 20,
          "peso": 4,
        },
        "stock": 59,
        "fecha": "2/29/20",
      },
      {
        "codart": {
          "codart": 471,
          "descrip": "ALACENA MAYON 12UN*475GR",
          "resto": 12,
          "peso": 6,
        },
        "stock": 141.694,
        "fecha": "2/29/20",
      },
      {
        "codart": {
          "codart": 481,
          "descrip": "3 OSITO AV/ MACA 12UN*170GR",
          "resto": 12,
          "peso": 2.04,
        },
        "stock": 351,
        "fecha": "2/29/20",
      },
      {
        "codart": {
          "codart": 515,
          "descrip": "FANNY MERM SCH FRS 6DP*12U*100GR",
          "resto": 6,
          "peso": 7.2,
        },
        "stock": 0.125,
        "fecha": "2/29/20",
      },
      {
        "codart": {
          "codart": 539,
          "descrip": "POMAROLA SALS/TOM 24UN*160GR",
          "resto": 24,
          "peso": 3.84,
        },
        "stock": 470.001,
        "fecha": "2/29/20",
      },
      {
        "codart": {
          "codart": 545,
          "descrip": "FANNY MERM DOY PACK 8UN*800GR",
          "resto": 8,
          "peso": 6.4,
        },
        "stock": 82.625,
        "fecha": "2/29/20",
      },
      {
        "codart": {
          "codart": 550,
          "descrip": "FRUNA BLOCKS 12DP*20U*25GR",
          "resto": 12,
          "peso": 6,
        },
        "stock": 55.674,
        "fecha": "2/29/20",
      },
      {
        "codart": {
          "codart": 564,
          "descrip": "3 OSITO AV/ KIWICH 12UN*170GR",
          "resto": 12,
          "peso": 2.04,
        },
        "stock": 0.003,
        "fecha": "2/29/20",
      },
      {
        "codart": {
          "codart": 566,
          "descrip": "FRUGOS TETRAPACK  1.5 LT X 8UN",
          "resto": 8,
          "peso": 12,
        },
        "stock": 324,
        "fecha": "2/29/20",
      },
      {
        "codart": {
          "codart": 609,
          "descrip": "COCOA WINTERS 12DSP*50UN*11GR",
          "resto": 12,
          "peso": 6.6,
        },
        "stock": 0.06,
        "fecha": "2/29/20",
      },
      {
        "codart": {
          "codart": 614,
          "descrip": "COCOA WINTERS 30UN*160GR",
          "resto": 30,
          "peso": 4.8,
        },
        "stock": 0.03,
        "fecha": "2/29/20",
      },
      {
        "codart": {
          "codart": 655,
          "descrip": "3 OSITO AV/ CLASS 12UN*220GR",
          "resto": 12,
          "peso": 2.64,
        },
        "stock": 10.583,
        "fecha": "2/29/20",
      },
      {
        "codart": {
          "codart": 669,
          "descrip": "COCOA WINTERS 60UN*45GR",
          "resto": 60,
          "peso": 2.7,
        },
        "stock": 0.1,
        "fecha": "2/29/20",
      },
      {
        "codart": {
          "codart": 710,
          "descrip": "MILO ACTIGEN-DOYPAK 200G*48UN",
          "resto": 48,
          "peso": 9.6,
        },
        "stock": 71.81,
        "fecha": "2/29/20",
      },
      {
        "codart": {
          "codart": 728,
          "descrip": "FANNY MERM VASO FRS 12UN*310GR",
          "resto": 12,
          "peso": 3.72,
        },
        "stock": 3.334,
        "fecha": "2/29/20",
      },
      {
        "codart": {
          "codart": 756,
          "descrip": "FANNY MERM BARRIL FRS 6UN*1KG",
          "resto": 6,
          "peso": 6,
        },
        "stock": 53.993,
        "fecha": "2/29/20",
      },
      {
        "codart": {
          "codart": 787,
          "descrip": "HENO D PRAVI /AMRILLO 36UN*150GR",
          "resto": 36,
          "peso": 5.4,
        },
        "stock": 0.055,
        "fecha": "2/29/20",
      },
      {
        "codart": {
          "codart": 853,
          "descrip": "TRIKIS C/CHISPAS CHOC X10SIXPAX32G",
          "resto": 10,
          "peso": 1.92,
        },
        "stock": 29.8,
        "fecha": "2/29/20",
      },
      {
        "codart": {
          "codart": 865,
          "descrip": "DON VICTORI/FETTUCCINI 12UN*1KG",
          "resto": 12,
          "peso": 12,
        },
        "stock": 0,
        "fecha": "2/29/20",
      },
    ];
    await queryRunner.manager.save(Stock, stock);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DELETE * FROM stock");
  }
}
