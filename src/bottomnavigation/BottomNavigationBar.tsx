import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ImpressumDialog from "./dialog/ImpressumDialog";
import DataProtectionDialog from "./dialog/DataProtectionDialog";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {BottomNavigationType} from "./BottomNavigationType";


const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export interface PopUpDialogProps {
    currentDialogState: BottomNavigationType;
    closeDialog: () => void;
}

export interface DialogProps {
    closeDialog: () => void;
}

function PopUpDialog(props: PopUpDialogProps) {
    if (props.currentDialogState === BottomNavigationType.IMPRESSUM) {
        return <ImpressumDialog closeDialog={props.closeDialog}/>;
    }
    if (props.currentDialogState === BottomNavigationType.DATA_PRIVACY) {
        return <DataProtectionDialog closeDialog={props.closeDialog}/>;
    }
    return <></>;
}


export default function BottomNavigationBar() {
    const classes = useStyles();
    const [currentDialog, setDialogState] = React.useState(BottomNavigationType.NONE);

    const handleClose = () => {
        setDialogState(BottomNavigationType.NONE);
    }

    return (
        <BottomNavigation showLabels className={classes.root}>
            <BottomNavigationAction onClick={(event) => {setDialogState(BottomNavigationType.IMPRESSUM)}} label="Impressum" />
            <BottomNavigationAction onClick={(event) => {setDialogState(BottomNavigationType.DATA_PRIVACY)}} label="Datenschutz" />
            <PopUpDialog currentDialogState={currentDialog} closeDialog={handleClose}/>

        </BottomNavigation>


    );
}
