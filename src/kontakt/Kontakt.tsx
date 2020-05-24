import React from "react";
import {Button, Grid, Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

export default function Kontakt() {
    return (
        <div>
            <Typography>
                <h1>Kontakt</h1>
            </Typography>
            <Grid container spacing={1}>
                <Grid item sm={12}>
                    <TextField id="filled-basic-Name" label="Name" placeholder="Vorname Nachname" variant="filled"/>
                </Grid>
                <Grid item sm={12}>
                    <TextField id="filled-basic-Email" label="Email" placeholder="Max@Mustermann.de" variant="filled"/>
                </Grid>
                <Grid item sm={12}>
                    <TextField
                        id="filled-textarea"
                        label="Ihre Anfrage"
                        placeholder="Anfrage"
                        multiline
                        rowsMax="8"
                        variant="filled"
                    />
                </Grid>
                <Grid item sm={12}>
                    <Button variant="contained" color="primary">
                        Anfrage abschicken
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}
