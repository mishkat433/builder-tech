

export interface IProduct {
  _id: number;
  image: string;
  productName: string
  category: string;
  status: "In Stock" | "Out of stock";
  price: number;
  description: string;
  keyFeatures: {
    brand: string;
    model: string;
    port: string;
    type: string;
    voltage: string
    resolution: string;
    warranty: string;
  };
  averageRating: number;
  reviews?: [
    {
      userId?: string
      rating?: number,
      says?: string
    }
  ]
  quantity?: number;

}
