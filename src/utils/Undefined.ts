import {Product} from "../produkte/mapPostsToProducts";

export const isUndefined = (input: any): boolean => {
    return input === undefined;
}

export const returnEmptyProductIfUndefined = (input: Product[] | undefined): Product[] => {
    if(input === undefined){
        return [];
    }
    return input;
}