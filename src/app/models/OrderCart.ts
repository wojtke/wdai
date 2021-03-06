export interface OrderCart {
  dish_id: string;
  name: string;
  quantity: number;
  unit_price: {
    value: number;
    currency: string;
  };
}
