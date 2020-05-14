import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {CardActions, Collapse, IconButton} from "@material-ui/core";
import clsx from 'clsx';
import {red} from "@material-ui/core/colors";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

interface LiveDateProps {
    art: string;
    picture: string;
    description: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
        },
    }),
);

export default function StoffComponent(props: LiveDateProps) {
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                        <Typography variant="h5" component="h2">
                            {props.art}
                        </Typography>
                        <img height="150" width="150" src={"stoffe/"+props.picture} alt="Material"/>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="Mehr Infos"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="h5" component="h5">
                        Beschreibung
                    </Typography>
                    <Typography component="h5">
                        {props.description}
                        <p/>
                        Foto und Text:  https://www.wikipedia.org/
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
