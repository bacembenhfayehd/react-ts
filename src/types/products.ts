export const Category = {
  Men: "men",
  Women: "women",
  Kids: "kids"
} as const;

export type Category = keyof typeof Category;

export const Size = {
  S: "S",
  M: "M",
  L: "L",
  XL: "XL"
} as const;

export type Size = keyof typeof Size;

export interface Product {
    id:number,
    title:string,
    description:string,
    price:number,
    image:string,
    category:Category,
    availableSizes:Size[]
}


export type ProductProps = Pick<Product, 'id' |'title'|'price' |'image'>


