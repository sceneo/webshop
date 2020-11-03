import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Groesse} from "../products/ProductList";
import {isDefined} from "../utils/Undefined";
import {List, ListItemText, Table, TableBody, TableCell, TableRow} from "@material-ui/core";


interface ProductComponentProps {
    title: string;
    stoffe: string[] | undefined;
    aussenstoffe: string[] | undefined;
    futterstoffe: string[] | undefined;
    varianten: string | undefined;
    groessen: Groesse[] | undefined;
    bild: string;
    details: string | undefined;
}

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const getListFromArray = (list: string[] | undefined): string => {
    if (list === undefined) {
        return "";
    }
    return list.join(", ");
}

const getDefinedObjectFrom = (groessen: Groesse[] | undefined): Groesse[] => {
    if (groessen !== undefined) {
        return groessen;
    }
    return [];
}

export default function ProductComponent(props: ProductComponentProps) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={"products/" + props.bild}
                    title={props.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Table size="small">
                        <TableBody>
                            {isDefined(props.groessen) ?
                                getDefinedObjectFrom(props.groessen).map((row) => (
                                    <TableRow key={row.size}>
                                        <TableCell align="left">{row.size}</TableCell>
                                        <TableCell align="left">{row.price}€</TableCell>
                                    </TableRow>
                                )) : <></>
                            }
                            {isDefined(props.stoffe) ?
                                    <TableRow key={"Stoffe"}>
                                        <TableCell align="left">Mögliche Stoffe</TableCell>
                                        <TableCell align="left">{getListFromArray(props.stoffe)}</TableCell>
                                    </TableRow>
                                :
                                <></>
                            }
                            {isDefined(props.aussenstoffe) ?
                                <TableRow key={"Außenstoff"}>
                                    <TableCell align="left">Außenstoff</TableCell>
                                    <TableCell align="left">{getListFromArray(props.aussenstoffe)}</TableCell>
                                </TableRow>
                                :
                                <></>
                            }
                            {isDefined(props.futterstoffe) ?
                                <TableRow key={"Futterstoff"}>
                                    <TableCell align="left">Wende-/Futterstoff</TableCell>
                                    <TableCell align="left">{getListFromArray(props.futterstoffe)}</TableCell>
                                </TableRow>
                                :
                                <></>
                            }
                            {isDefined(props.varianten) ?
                                <TableRow key={"Varianten"}>
                                    <TableCell align="left">Varianten</TableCell>
                                    <TableCell align="left">{props.varianten}</TableCell>
                                </TableRow>
                                :
                                <></>
                            }
                            {isDefined(props.details) ?
                                <TableRow key={"Details"}>
                                    <TableCell align="left">{props.details}</TableCell>
                                </TableRow>
                                :
                                <></>
                            }
                        </TableBody>
                    </Table>

                </CardContent>
            </CardActionArea>
        </Card>
    );
}