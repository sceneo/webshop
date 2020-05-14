import React from "react";

import {Avatar, createStyles, Grid, Theme, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {ReactComponent as AdultIcon} from './icons/adult.svg'
import {ReactComponent as ChildIcon} from './icons/child.svg'
import {ReactComponent as BabyIcon} from './icons/baby.svg'

const useStyles = makeStyles((theme: Theme) => {
    const avatarSize = 12;
    return createStyles({
        avatar: {
            width: theme.spacing(avatarSize),
            height: theme.spacing(avatarSize),
        },
    })
});

export default function Products() {
    const classes = useStyles();

    return (
        <div>
            <Typography>
                <h1>Kontakt</h1>
                <p>
                    Alle meine Produkte sind handgenäht in Seefelden (Deutschland).
                </p>
            </Typography>
            <Grid container spacing={1}>
                <Grid item sm={2}>
                    <Avatar variant="rounded" className={classes.avatar}>
                        <AdultIcon/>
                    </Avatar>
                    <Typography>
                        Erwachsene
                    </Typography>
                </Grid>
                <Grid item sm={2}>
                    <Avatar variant="rounded" className={classes.avatar}>
                        <ChildIcon/>
                    </Avatar>
                    <Typography>
                        Kind
                    </Typography>
                </Grid>
                <Grid item sm={2}>
                    <Avatar variant="rounded" className={classes.avatar}>
                        <BabyIcon/>
                    </Avatar>
                    <Typography>
                        Baby
                    </Typography>
                </Grid>
            </Grid>

        </div>
    );
}
