type Product = {
  id: string;
  name: string;
  category: string;
  img: string;
  price: number;
  quantity: number;
  created_at: string;
};

type CartProduct = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  total_price: number;
};

type Filter = {
  name: string;
  category: string;
}
