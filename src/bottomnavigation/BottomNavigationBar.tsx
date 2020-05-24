import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ImpressumDialog from "./ImpressumDialog";
import DatenschutzDialog from "./DatenschutzDialog";
import CookierichtlinieDialog from "./CookierichtlinieDialog";
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export interface PopUpDialogProps {
    currentDialogState: string;
    closeDialog: () => void;
}

export interface DialogProps {
    closeDialog: () => void;
}

function PopUpDialog(props: PopUpDialogProps) {
    if (props.currentDialogState === "Impressum") {
        return <ImpressumDialog closeDialog={props.closeDialog}/>;
    }
    if (props.currentDialogState === "Datenschutz") {
        return <DatenschutzDialog closeDialog={props.closeDialog}/>;
    }
    if (props.currentDialogState === "Cookierichtlinie") {
        return <CookierichtlinieDialog closeDialog={props.closeDialog}/>;
    }
    return <></>;
};


export default function BottomNavigationBar() {
    const classes = useStyles();
    const [currentDialog, setDialogState] = React.useState("");

    const handleClose = () => {
        setDialogState("");
    }

    return (
        <BottomNavigation showLabels className={classes.root}>
            <BottomNavigationAction onClick={(event) => {setDialogState("Impressum")}} label="Impressum" />
            <BottomNavigationAction onClick={(event) => {setDialogState("Datenschutz")}} label="Datenschutz" />
            <BottomNavigationAction onClick={(event) => {setDialogState("Cookierichtlinie")}} label="Cookierichtlinie"/>
            <PopUpDialog currentDialogState={currentDialog} closeDialog={handleClose}/>

        </BottomNavigation>


    );


}
