export class Yacht {
  productName: string;
  productTagLine: string;
  productImg: string;
  description: string;
  dailyCost: number;
  onOffer: boolean;
  id?: number;

  constructor(
    productName: string,
    productTagLine: string,
    productImg: string,
    description: string,
    dailyCost: number,
    onOffer: boolean,
    id?: number
  ) {
    this.productName = productName;
    this.productTagLine = productTagLine;
    this.productImg = productImg;
    this.description = description;
    this.dailyCost = dailyCost;
    this.onOffer = onOffer;
    this.id = id;
  }
}
