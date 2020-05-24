import React, {Component} from "react";
import {AppBar} from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

class CategoryDisplay extends Component {


    render() {
        return (
            <div className={"root"}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={"menuButton"}
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <ArrowBackIcon />
                        </IconButton>
                        <Typography className={"title"} variant="h6" noWrap>
                            Zurück zur Auswahl
                        </Typography>
                        <div className={"search"}>
                            <div className={"searchIcon"}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Suche nach #Hashtag"
                                classes={{
                                    root: "inputRoot",
                                    input: "inputInput",
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )};
}

export default CategoryDisplay;