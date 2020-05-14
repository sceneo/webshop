import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import StoffComponent from "./StoffComponent";
import {Grid} from "@material-ui/core";
import {stoffe} from "./StoffProvider";

export default function Stoffe() {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container>
                <Typography component="div">
                    <h1>Meine Stoffe</h1>
                    Meine Stoffauswahl wird immer regelmäßig aktualisiert. Bitte hab Verständnis dafür, dass nicht jeder
                    Stoff für jedes Lieblingsteil geeignet oder in ausreichender Menge vorhanden ist. Kontaktiere mich
                    gern und ich prüfe, wie ich dir deinen Wunsch erfüllen kann. </Typography>
                <p/>

                <Grid container spacing={1}>
                    {stoffe.map(tile => (
                        <Grid item sm={4}>
                            <StoffComponent art={tile.art} description={tile.description} picture={tile.img}/>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    );
}


