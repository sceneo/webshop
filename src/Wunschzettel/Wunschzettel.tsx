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
                        <p></p>
                        Bitet gib hier möglichst viele Informationen für dein neues Lieblingsteil ein:
                    </Typography>
                    <Grid container>

                        <Grid item sm={1}>

                            <FormControl variant="filled" >
                                <InputLabel id="demo-simple-select-filled-label">Für wen?</InputLabel>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    value={size}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={'Adult'}>Erwachsene</MenuItem>
                                    <MenuItem value={'Child'}>Kind</MenuItem>
                                    <MenuItem value={'Baby'}>Baby</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>


                        <Grid item sm={1}>
                            <FormControl variant="filled" >
                                <InputLabel id="demo-simple-select-filled-label">Größe (Erwachsene)</InputLabel>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    value={size}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={'XS'}>XS</MenuItem>
                                    <MenuItem value={'S'}>S</MenuItem>
                                    <MenuItem value={'M'}>M</MenuItem>
                                    <MenuItem value={'L'}>L</MenuItem>
                                    <MenuItem value={'XL'}>XL</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        {/*TODO: Ausgrauen oder conditional rendering, wenn nicht das entsprechende ausgewählt ist*/}
                        <Grid item sm={1}>
                            <FormControl variant="filled" >
                                <InputLabel id="demo-simple-select-filled-label">Größe (Kinder)</InputLabel>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    value={size}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={'44'}>44</MenuItem>
                                    <MenuItem value={'50'}>50</MenuItem>
                                    <MenuItem value={'56'}>56</MenuItem>
                                    <MenuItem value={'62'}>62</MenuItem>
                                    <MenuItem value={'68'}>68</MenuItem>
                                    <MenuItem value={'74'}>74</MenuItem>
                                    <MenuItem value={'80'}>80</MenuItem>
                                    <MenuItem value={'86'}>86</MenuItem>
                                    <MenuItem value={'92'}>92</MenuItem>
                                    <MenuItem value={'98'}>98</MenuItem>
                                    <MenuItem value={'104'}>104</MenuItem>
                                    <MenuItem value={'110'}>110</MenuItem>
                                    <MenuItem value={'116'}>116</MenuItem>
                                    <MenuItem value={'122'}>122</MenuItem>
                                    <MenuItem value={'128'}>128</MenuItem>
                                    <MenuItem value={'134'}>134</MenuItem>
                                    <MenuItem value={'140'}>140</MenuItem>
                                    <MenuItem value={'146'}>146</MenuItem>
                                    <MenuItem value={'152'}>152</MenuItem>
                                    <MenuItem value={'158'}>158</MenuItem>
                                    <MenuItem value={'164'}>164</MenuItem>
                                    <MenuItem value={'170'}>170</MenuItem>
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

                        {/*    TODO: Farbauswahl liste mit farbkacheln, namen und dann eine checkbox zum klicken.*/}
                        </Grid>
                        <Grid item sm={1}>
                        <FormControl variant="filled" >
                            <InputLabel id="demo-simple-select-filled-label">Farbe</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={'Gelb'}>Gelb</MenuItem>
                                <MenuItem value={'Rot'}>Rot</MenuItem>
                                <MenuItem value={'Schwarz'}>Schwarz</MenuItem>
                                <MenuItem value={'Blau'}>Blau</MenuItem>
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
