import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {removeHashtag} from "../utils/Hashtag";


interface ProductComponentProps {
    img: string;
    description: string;
}


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 600,
            maxHeight: 800,
        },
        frame: {
            allowTransparency: false,
            backgroundColor: 'white',
            height: 600,
            width: 600,
            position: 'relative',
            top: 0,
            left: 0,
        },
        picture: {
            height: 300,
            width: 300,
            position: 'relative',
            top: -485,
            left: 150,
        },
        description: {
            position: 'relative',
            top: -300,
        },
        size: {
            position: 'relative',
            top: -300,
        },
        price: {
            position: 'relative',
            top: -300,
        }

    }),
);

export default function ProductComponent(props: ProductComponentProps) {
    const classes = useStyles();

    return (
        <div>

            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <img className={classes.frame} src={"content/PolaroidFrame.png"} alt={"Frame"}/>
                    <img className={classes.picture} src={props.img} alt={"Product"}/>
                    <Typography className={classes.description}>
                        {removeHashtag(props.description)}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}