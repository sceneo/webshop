import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {CardActions, Collapse, IconButton} from "@material-ui/core";
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {GaleryData} from "../galery/Galery";
import {Material} from "../material/MaterialProvider";
import {isUndefined} from "../utils/Undefined";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import {checkGalleryDataNotUndefined} from "../utils/NullChecker";
import Dialog from "@material-ui/core/Dialog";
import '../design/Background.css';
import {getFirstImageOrImageBackup} from "../material/MaterialSelector";
import '../design/Images.css'

interface MaterialComponentProps {
    material: Material;
    images: GaleryData[] | undefined;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
    }),
);

export default function MaterialComponent(props: MaterialComponentProps) {
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);
    const [dialogOpen, setDialogOpen] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const openDialog = () => {
        setDialogOpen(false); // always closed -> set to true if we want the dialog to be openable
    }

    const closeDialog = () => {
        setDialogOpen(false);
    }

    return (
        <div >
            <Dialog className={"popupBackground"} open={dialogOpen} onClose={closeDialog}>
                <Typography variant="h6" component="h3">
                    {props.material.art}
                </Typography>
                <Typography  variant="h6" component="h4">
                    {props.material.description}
                </Typography>
            </Dialog>
            <Card className={'cardBackground'}>
                <CardContent className={'cardBackground'}>
                    <img className={'stoffe'} src={getFirstImageOrImageBackup(props.images, props.material.art)} alt="Material" onClick={openDialog}/>
                    <Typography variant="h5" component="h3">
                        {props.material.art}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing className={'cardBackground'}>
                    Verfügbare Varianten
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="Mehr Infos"
                    >
                        <ExpandMoreIcon/>
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent className={'cardBackground'} >
                        {isUndefined(props.images)
                            ?
                            <Typography component="h6">
                                Leider habe ich aktuell keine Stoffe dieses Typs auf Lager.
                            </Typography>
                            :
                            <div>
                                <Typography component="h6">
                                    Hier die Auswahl meiner aktuell verfügbaren Stoffe:
                                </Typography>
                                <GridList>
                                    {checkGalleryDataNotUndefined(props.images).map(tile => (
                                        <GridListTile key={tile.img}>
                                            <img className={"picture"} src={"material/" + tile.img} alt={props.material.hashtag}/>
                                        </GridListTile>
                                    ))}
                                </GridList>
                            </div>
                        }
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    );
}
