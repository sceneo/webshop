import React, {Component} from "react";
import './Products.css'
import CategorySelector from "./CategorySelector";
import CategoryDisplay from "./CategoryDisplay";
import {ProductCategory} from "./ProductCategory";
import {getInstagramFeed} from "../instagram/getInstagram";
import {mapPostsToProducts, Product} from "./mapPostsToProducts";
import {filterProducts} from "./filterProducts";
import {returnEmptyProductIfUndefined} from "../utils/Undefined";

class Products extends Component {
    state = {
        productSelection: undefined as ProductCategory | undefined,
        babyData: undefined as Product[] | undefined,
        adultData: undefined as Product[] | undefined,
        childData: undefined as Product[] | undefined
    };

    setSelectedCategory = (newCategory: ProductCategory | undefined) => {
        this.setState({
            productSelection: newCategory
        })
    }

    selectProductsToShow = (): Product[] => {
        switch(this.state.productSelection){
            case undefined:
                return [];
            case ProductCategory.baby:
                return returnEmptyProductIfUndefined(this.state.babyData);
            case ProductCategory.child:
                return returnEmptyProductIfUndefined(this.state.childData)
            case ProductCategory.adult:
                return returnEmptyProductIfUndefined(this.state.adultData);
            default:
                return [];
        }
    }

    async componentDidMount() {
        const products : Product[] = await getInstagramFeed().then(mapPostsToProducts);
        this.setState({
            babyData: filterProducts(products, ProductCategory.baby),
            adultData: filterProducts(products, ProductCategory.adult),
            childData: filterProducts(products, ProductCategory.child),
        })
    }

    render() {
        return (
                <div>
                    <CategorySelector setSelectionType={this.setSelectedCategory}/>
                    <CategoryDisplay productsToShow={this.selectProductsToShow()}/>
                </div>
        )
    };
}

export default Products;