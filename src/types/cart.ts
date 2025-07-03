import type { Product } from "./products";


export interface CartItem {
    product:Product,
    quantity:number

}

export interface CartContextType {
    cart:CartItem[],
    addToCart:(product:Product) => void;
    removeFromCart: (id:number) => void
}