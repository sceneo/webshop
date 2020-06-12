import {ProductCategory} from "./ProductCategory";
import {Product} from "./mapPostsToProducts";


export const filterProducts = (allProducts: Product[], category: ProductCategory): Product[] => {
    return allProducts.filter(element => element.category === category)
}
