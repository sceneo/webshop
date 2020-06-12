import {isUndefined} from "../utils/Undefined";

export enum ProductCategory {
    baby,
    child,
    adult
}

export const isProductCategoryUndefined = (cat: ProductCategory): boolean => {
    return isUndefined(cat);
}