export class Yacht {
  id: number;
  productName: string;
  productTagLine: string;
  productImg: string;
  description: string;
  dailyCost: number;
  onOffer: boolean;

  constructor(
    id: number,
    productName: string,
    productTagLine: string,
    productImg: string,
    description: string,
    dailyCost: number,
    onOffer: boolean
  ) {
    this.id = id;
    this.productName = productName;
    this.productTagLine = productTagLine;
    this.productImg = productImg;
    this.description = description;
    this.dailyCost = dailyCost;
    this.onOffer = onOffer;
  }
}
