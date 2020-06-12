import React, {Component} from "react";
import {Product} from "./mapPostsToProducts";
import {Grid} from "@material-ui/core";
import ProductComponent from "../components/ProductComponent";

interface CategorySelectorState {

}

interface CategorySelectorProps {
    productsToShow: Product[];
}
class CategoryDisplay extends Component<CategorySelectorProps, CategorySelectorState> {


    render() {
        return (
            <div className={"root"}>
                <Grid container>
                    {this.props.productsToShow.map(product => (
                        <Grid item sm={4}>
                            <ProductComponent img={product.url} description={product.description}/>
                            <br/>
                        </Grid>
                    ))}
                </Grid>




            </div>
        )
    };
}

export default CategoryDisplay;