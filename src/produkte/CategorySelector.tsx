import React, {Component} from "react";

import {AppBar} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ChildCareIcon from '@material-ui/icons/ChildCare';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import './Products.css'
import {ProductCategory} from "./ProductCategory";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import "./Products.css"

type SelectionTypes = "none" | "adult" | "child" | "baby";

interface CategorySelectorState {
    adultButton: "default" | "inherit" | "primary" | "secondary" | undefined;
    childButton: "default" | "inherit" | "primary" | "secondary" | undefined;
    babyButton: "default" | "inherit" | "primary" | "secondary" | undefined;
    currentSelection: ProductCategory | undefined;
}

interface CategorySelectorProps {
    setSelectionType: (pc: ProductCategory | undefined) => void;
}

const initialState = {
    adultButton: "primary" as "default" | "inherit" | "primary" | "secondary" | undefined,
    childButton: "primary" as "default" | "inherit" | "primary" | "secondary" | undefined,
    babyButton: "primary" as "default" | "inherit" | "primary" | "secondary" | undefined,
    currentSelection: undefined
}

class CategorySelector extends Component<CategorySelectorProps, CategorySelectorState> {

    state = initialState;

    handleClick = (cat: ProductCategory): void => {
        this.setState({
            ...initialState,
        })
        const selectedColor = "secondary";
        switch (cat) {
            case ProductCategory.adult:
                this.setState({
                    adultButton: selectedColor
                })
                break;
            case ProductCategory.child:
                this.setState({
                    childButton: selectedColor
                })
                break;
            case ProductCategory.baby:
                this.setState({
                    babyButton: selectedColor
                })
                break;
            default:
                console.log("Error - button selection could not be found");
        }
        this.setState({
            currentSelection: cat
        })
        this.props.setSelectionType(cat);
    }

    handleClickOnBackArrow = () => {
        this.setState(initialState);
        this.props.setSelectionType(undefined);
    }


    render() {
        return (
            <div>
                <AppBar className={'appBar'}>
                    <Toolbar>
                        {this.state.currentSelection === undefined ? <></>:
                            <IconButton
                                edge="start"
                                className={"menuButton"}
                                color="inherit"
                                aria-label="open drawer"
                                onClick={this.handleClickOnBackArrow}
                            >
                                <ArrowBackIcon />
                            </IconButton>
                        }
                        <Button
                            variant="contained"
                            color={this.state.adultButton}
                            startIcon={<AccessibilityIcon className={"svgs"}/>}
                            className={"avatare"}
                            onClick={() => this.handleClick(ProductCategory.adult)}
                        >
                            Erwachsene
                        </Button>
                        <Button
                            variant="contained"
                            color={this.state.childButton}
                            startIcon={<ChildCareIcon className={"svgs"}/>}
                            className={"avatare"}
                            onClick={() => this.handleClick(ProductCategory.child)}
                        >
                            Kind
                        </Button>
                        <Button
                            variant="contained"
                            color={this.state.babyButton}
                            startIcon={<ChildFriendlyIcon className={"svgs"}/>}
                            className={"avatare"}
                            onClick={() => this.handleClick(ProductCategory.baby)}
                        >
                            Baby
                        </Button>

                        <div className={"search"}>
                            <div className={"searchIcon"}>
                                <SearchIcon/>
                            </div>
                            <InputBase
                                placeholder="Suche nach #Hashtag"
                                classes={{
                                    root: "inputRoot",
                                    input: "inputInput",
                                }}
                                inputProps={{'aria-label': 'search'}}
                            />
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    };
}

export default CategorySelector;