import React, {Component} from "react";

import {Grid, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ChildCareIcon from '@material-ui/icons/ChildCare';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import './Products.css'

type SelectionTypes = "none" | "adult" | "child" | "baby";

interface ProductState {
    selectedCategory: SelectionTypes;
}

interface ProductSelectionProps {
    selectionTypes: SelectionTypes;
}


// TODO: Find good icons
class CategorySelector extends Component{

    render() {
        return (
            <div>
                <Typography>
                    <h1>Produkte</h1>
                    <p>
                        Alle meine Produkte sind handgenäht in Seefelden (Deutschland).
                    </p>
                </Typography>
                <Grid container spacing={1}>
                    <Grid item sm={2}>
                        <Button
                            variant="contained"
                            color="default"
                            startIcon={<AccessibilityIcon className={"svgs"} />}
                            className={"avatare"}
                        >
                            Erwachsene
                        </Button>
                    </Grid>
                    <Grid item sm={2}>
                        <Button
                            variant="contained"
                            color="default"
                            startIcon={<ChildCareIcon className={"svgs"}/>}
                            className={"avatare"}
                        >
                            Kind
                        </Button>
                    </Grid>
                    <Grid item sm={2}>
                        <Button
                            variant="contained"
                            color="default"
                            startIcon={<ChildFriendlyIcon className={"svgs"} />}
                            className={"avatare"}
                        >
                            Baby
                        </Button>
                    </Grid>
                </Grid>

            </div>
        )
    };
}

export default CategorySelector;