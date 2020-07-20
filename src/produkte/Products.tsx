import React, {Component} from "react";
import './Products.css'
import CategorySelector from "./CategorySelector";
import CategoryDisplay from "./CategoryDisplay";
import {ProductCategory} from "./ProductCategory";
import {getInstagramFeed} from "../instagram/getInstagram";
import {mapPostsToProducts, Product} from "./mapPostsToProducts";
import {filterProducts} from "./filterProducts";
import {returnEmptyProductIfUndefined} from "../utils/Undefined";
import {CircularProgress} from "@material-ui/core";

class Products extends Component {
    state = {
        showSpinner: true as boolean,
        productSelection: undefined as ProductCategory | undefined,
        allData: undefined as Product[] | undefined,
        babyData: undefined as Product[] | undefined,
        adultData: undefined as Product[] | undefined,
        childData: undefined as Product[] | undefined,
        searchFilter: "" as string,
        applySearch: true as boolean,
    };

    setSelectedCategory = (newCategory: ProductCategory | undefined) => {
        this.setState({
            productSelection: newCategory
        })
    }

    selectProductsToShow = (): Product[] => {
        if(this.state.applySearch) {
            return this.selectProductsBySelection();
        }
        else {
            return this.selectProductsBySelection().filter(products => {
                return products.hashtags.includes(this.state.searchFilter)
            })
        }
    }

    selectProductsBySelection = (): Product[] => {
        switch (this.state.productSelection) {
            case undefined:
                return returnEmptyProductIfUndefined(this.state.allData);
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

    setSearchFilter = (searchFilter: string) => {
        this.setState({
            searchFilter: searchFilter
        })
    }

    applySearch = () => {
        this.setState({
            applySearch: !this.state.applySearch
        })
    }

    async componentDidMount() {
        const products: Product[] = await getInstagramFeed().then(mapPostsToProducts);
        this.setState({
            allData: products,
            babyData: filterProducts(products, ProductCategory.baby),
            childData: filterProducts(products, ProductCategory.child),
            adultData: filterProducts(products, ProductCategory.adult),
            showSpinner: false,
        })
    }

    render() {
        return (

            <div>
                <CategorySelector applySearch={this.applySearch} setSelectionType={this.setSelectedCategory} setSearchFilter={this.setSearchFilter}/>

                {this.state.showSpinner ?
                    <div className={"spinner"}>
                        <CircularProgress/>
                    </div>
                    :
                    <CategoryDisplay productsToShow={this.selectProductsToShow()}/>
                }
            </div>
        )
    };
}

export default Products;