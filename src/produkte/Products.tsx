import React, {Component} from "react";
import './Products.css'
import CategorySelector from "./CategorySelector";
import CategoryDisplay from "./CategoryDisplay";

// TODO: Find good icons
class Products extends Component {
    state = {
        selectedCategory: "none" as string,
    };


    setSelectedCategory = (newCategory: string) => {
        // TODO: check for unknown categories
        this.setState({
            selectedCategory: "none"
        })
    }

    render() {

        const isSelectionNeeded = (): boolean => {
            return this.state.selectedCategory === "none";
        }

        return (
            isSelectionNeeded() ?
                <div>
                    <CategorySelector />
                </div>
                :
                <div>
                    <CategoryDisplay/>
                </div>
        )
    };
}

export default Products;