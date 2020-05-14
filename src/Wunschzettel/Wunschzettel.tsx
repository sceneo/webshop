import React from "react";
import {Button, FormControl, Grid, InputLabel, MenuItem, Select, Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

export default function Wunschzettel() {
    const [size, setSize] = React.useState<string | number>('');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSize(event.target.value as number);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <Typography>
                <h1>Wunschzettel</h1>
            </Typography>

            <FormControl>
                <div>
                    <Typography>
                        Persönliche Daten
                    </Typography>
                    <Grid container spacing={1}>
                        <Grid item sm={6}>
                            <TextField id="filled-basic-Name" label="Name" placeholder="Vorname Nachname"
                                       variant="filled"/>
                        </Grid>
                        <Grid item sm={6}>
                            <TextField id="filled-basic-Email" label="Email" placeholder="Max@Mustermann.de"
                                       variant="filled"/>
                        </Grid>
                        <p/>
                        <Grid item sm={12}>
                            <TextField id="filled-basic-Name" label="Straße" placeholder="Straße"
                                       variant="filled"/>
                        </Grid>
                        <Grid item sm={6}>
                            <TextField id="filled-basic-Name" label="Postleitzahl" placeholder="PLZ"
                                       variant="filled"/>
                        </Grid>
                        <Grid item sm={6}>
                            <TextField id="filled-basic-Name" label="Ort" placeholder="Ort"
                                       variant="filled"/>
                        </Grid>
                    </Grid>
                </div>
                <p/>
                <p/>
                <div>
                    <Typography>
                        Wunschkleidungsstück
                    </Typography>
                    <Grid container>

                        <Grid item sm={1}>

                            <FormControl variant="filled" >
                                <InputLabel id="demo-simple-select-filled-label">Größe</InputLabel>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    value={size}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={'S'}>S</MenuItem>
                                    <MenuItem value={'M'}>M</MenuItem>
                                    <MenuItem value={'L'}>L</MenuItem>
                                    <MenuItem value={'XL'}>XL</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item sm={1}>

                            <FormControl variant="filled" >
                                <InputLabel id="demo-simple-select-filled-label">Stoff</InputLabel>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={'Wolle'}>Wolle</MenuItem>
                                    <MenuItem value={'Leinen'}>Leinen</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item sm={1}>

                            <FormControl variant="filled" >
                                <InputLabel id="demo-simple-select-filled-label">Art</InputLabel>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={'Jacke'}>Jacke</MenuItem>
                                    <MenuItem value={'Hose'}>Hose</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                    </Grid>
                </div>
                <p/>
                <div>
                    <Button variant="contained" color="primary">
                        Anfrage abschicken
                    </Button>
                </div>
            </FormControl>
        </
            div>
    )
        ;
}
