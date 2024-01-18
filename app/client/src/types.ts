export type Item = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  soldout: boolean;
  selected: boolean;
  link?: string;
};
