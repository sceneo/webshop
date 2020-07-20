import React, {Component} from "react";

import {AppBar, Grid} from "@material-ui/core";
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
import {grey} from "@material-ui/core/colors";

interface CategorySelectorState {
    adultButton: "buttonInactive" | "buttonActive" | undefined,
    childButton: "buttonInactive" | "buttonActive" | undefined,
    babyButton: "buttonInactive" | "buttonActive" | undefined,
    currentSelection: ProductCategory | undefined;
}

interface CategorySelectorProps {
    setSelectionType: (pc: ProductCategory | undefined) => void;
    setSearchFilter: (searchFilter: string) => void;
    applySearch: () => void;
}

const initialState = {
    adultButton: "buttonInactive" as "buttonInactive" | "buttonActive" | undefined,
    childButton: "buttonInactive" as "buttonInactive" | "buttonActive" | undefined,
    babyButton: "buttonInactive" as "buttonInactive" | "buttonActive" | undefined,
    currentSelection: undefined,
    search: "" as string,
}

class CategorySelector extends Component<CategorySelectorProps, CategorySelectorState> {

    state = initialState;
    handleClick = (cat: ProductCategory): void => {
        this.setState({
            ...initialState,
        })
        const selectedColor = "buttonActive";
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

    handleSearchInput = (input: any) => {

    }

    render() {
        return (
            <div>
                <AppBar className={'appBar'}>
                    <Toolbar>
                        <Grid container spacing={1}>
                            <Grid item>
                                {this.state.currentSelection === undefined ? <></> :
                                    <IconButton
                                        edge="start"
                                        className={"menuButton"}
                                        color="inherit"
                                        aria-label="open drawer"
                                        onClick={this.handleClickOnBackArrow}
                                    >
                                        <ArrowBackIcon style={{color: grey[500]}}/>
                                    </IconButton>
                                }
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    startIcon={<AccessibilityIcon className={"svgs"}/>}
                                    className={this.state.adultButton}
                                    onClick={() => this.handleClick(ProductCategory.adult)}
                                >
                                    Erwachsene
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    startIcon={<ChildCareIcon className={"svgs"}/>}
                                    className={this.state.childButton}
                                    onClick={() => this.handleClick(ProductCategory.child)}
                                >
                                    Kind
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    startIcon={<ChildFriendlyIcon className={"svgs"}/>}
                                    className={this.state.babyButton}
                                    onClick={() => this.handleClick(ProductCategory.baby)}
                                >
                                    Baby
                                </Button>
                            </Grid>
                            <Grid item>
                                <div className={"search"}>
                                    <InputBase
                                        placeholder=" Suche nach #Hashtag"
                                        classes={{
                                            root: "inputRoot",
                                            input: "inputInput",
                                        }}
                                        inputProps={{'aria-label': 'search'}}
                                        onChange={this.handleSearchInput}
                                    />
                                    <SearchIcon style={{color: grey[500]}} onClick={this.props.applySearch}/>
                                </div>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        )
    };
}

export default CategorySelector;