import React, {Component} from "react";
import {
    Button, Checkbox,
    FormControl,
    InputLabel,
    List,
    ListItem,
    ListItemSecondaryAction, ListItemText,
    MenuItem,
    Select,
    Typography
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {assembleWishlistEmail} from "../notification/Notification";
import './Wunschzettel.css'
import {Colors, getColorFromString, getColorIdFromString} from "./Colors";
import StopIcon from '@material-ui/icons/Stop';
import {blue, brown, green, grey, red, yellow} from "@material-ui/core/colors";

class Wunschzettel extends Component {
    state = {
        name: undefined as string | undefined,
        email: undefined as string | undefined,
        street: undefined as string | undefined,
        city: undefined as string | undefined,
        isButtonDisabled: true as boolean,
        showAdultSize: false as boolean,
        adultSize: undefined as undefined | string,
        showStoff: false as boolean,
        stoff: undefined as undefined | string,
        showArt: false as boolean,
        art: undefined as undefined | string,
        forWho: undefined as string | undefined,
        plz: undefined as string | undefined,
        checked: Array(Object.keys(Colors).length).fill(false) as boolean[],
    }

    handleSubmit = () => {
        if (this.state.email === undefined || this.state.name === undefined) {
            throw  Error("Email/name/something else not defined");
        } else {
            window.open(assembleWishlistEmail(this.state.email, this.state.name, "bla"));
        }
        this.setState({
            name: '',
            email: '',
            request: '',
            isButtonDisabled: true,
        })
    }

    handleChangeForWho = (event: any) => {
        this.setState({
            forWho: event.target.value
        });
        this.checkCurrentForm();
    };

    handleChangeAdultSize = (event: any) => {
        this.setState({
            adultSize: event.target.value
        });
        this.checkCurrentForm();
    };

    handleChangeStoff = (event: any) => {
        this.setState({
            stoff: event.target.value
        });
        this.checkCurrentForm();
    };

    handleChangeArt = (event: any) => {
        this.setState({
            art: event.target.value
        });
        this.checkCurrentForm();
    };

    handleChangeEmail = (event: any) => {
        this.setState({
            email: event.target.value
        });
        this.checkCurrentForm();
    };

    handleChangePlz = (event: any) => {
        this.setState({
            plz: event.target.value
        });
        this.checkCurrentForm();
    };

    handleChangeName = (event: any) => {
        this.setState({
            name: event.target.value
        });
        this.checkCurrentForm();
    };

    handleChangeStreet = (event: any) => {
        this.setState({
            street: event.target.value
        });
        this.checkCurrentForm();
    };

    handleChangeCity = (event: any) => {
        this.setState({
            city: event.target.value
        });
        this.checkCurrentForm();
    };

    checkCurrentForm = () => {
        this.isFormFinished()
        this.checkAdultSize();
        this.checkStoff();
        this.checkArt();
    };

    checkAdultSize = (): void => {
        const showAdultSize = (this.state.forWho === "Adult")
        this.setState({
            showAdultSize: showAdultSize
        })
    }

    checkStoff = (): void => {
        const showStoff = (this.state.adultSize !== undefined && this.state.showAdultSize);
        this.setState({
            showStoff: showStoff
        })
    }

    checkArt = (): void => {
        const showArt = (this.state.stoff !== undefined && this.state.showStoff);
        this.setState({
            showArt: showArt
        })
    }

    isFormFinished = (): void => {
        const isButtonDisabled = (this.state.name === "" ||
            this.state.email === "");

        this.setState({
            isButtonDisabled: isButtonDisabled
        });
    }


    disableButton = () => {
        this.setState({
            isButtonDisabled: true
        })
    };

    enableButton = () => {
        this.setState({
            isButtonDisabled: false
        })
    };

    handleToggle = (value: string) => () => {
        let oldState = this.state.checked;
        oldState[getColorIdFromString(value)] = !oldState[getColorIdFromString(value)];
        this.setState({
            checked: oldState
        })

    };

    isColorChecked = (value: string): boolean => {
        return this.state.checked[getColorIdFromString(value)];
    }

    getIconByColor = (value: string) => {
        if (value === 'red') {
            return <StopIcon style={{color: red[500]}}/>
        }
        if (value === 'yellow') {
            return <StopIcon style={{color: yellow[500]}}/>
        }
        if (value === 'green') {
            return <StopIcon style={{color: green[500]}}/>
        }
        if (value === 'blue') {
            return <StopIcon style={{color: blue[500]}}/>
        }

        if (value === 'black') {
            return <StopIcon style={{color: "black"}}/>
        }
        if (value === 'brown') {
            return <StopIcon style={{color: brown[500]}}/>
        }


        // default
        return <StopIcon style={{color: grey[500]}}/>
    }


    render() {
        return (
            <div>
                <Typography>
                    <h1>Wunschzettel</h1>
                </Typography>

                <FormControl>
                    <div>
                        <Typography>
                            <h2>Persönliche Daten</h2>
                        </Typography>

                        <TextField id="filled-basic-Name"
                                   onChange={this.handleChangeName}
                                   className={'personalData'}
                                   label="Name"
                                   placeholder="Vorname Nachname"
                                   variant="filled"/>

                        <TextField id="filled-basic-Email"
                                   onChange={this.handleChangeEmail}
                                   className={'personalData'}
                                   label="Email"
                                   placeholder="Max@Mustermann.de"
                                   variant="filled"/>

                        <TextField id="filled-basic-Street"
                                   onChange={this.handleChangeStreet}
                                   className={'personalData'}
                                   label="Straße"
                                   placeholder="Straße"
                                   variant="filled"/>

                        <TextField id="filled-basic-Name"
                                   onChange={this.handleChangePlz}
                                   className={'personalData'}
                                   label="Postleitzahl"
                                   placeholder="PLZ"
                                   variant="filled"/>

                        <TextField id="filled-basic-City"
                                   onChange={this.handleChangeCity}
                                   className={'personalData'}
                                   label="Ort"
                                   placeholder="Ort"
                                   variant="filled"/>

                    </div>
                    <p/>
                    <div>
                        <Typography>
                            <h2>Wunschkleidungsstück</h2>
                        </Typography>

                        {/*The Journey starts here*/}
                        <Typography>
                            Für wen soll das Kleidungsstück sein?
                        </Typography>
                        <FormControl className={'wishlistDropdown'} variant="filled">
                            <InputLabel id="demo-simple-select-filled-label">Für wen?</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                // value={this.state.forWho}
                                onChange={this.handleChangeForWho}
                            >
                                <MenuItem value={undefined}>
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={'Adult'}>Erwachsene</MenuItem>
                                <MenuItem value={'Child'}>Kind</MenuItem>
                                <MenuItem value={'Baby'}>Baby</MenuItem>
                            </Select>
                        </FormControl>
                        <span>
                            <Typography>
                                Welche Größe benötigst du?
                            </Typography>
                            <FormControl className={'wishlistDropdown'} variant="filled">
                                <InputLabel id="demo-simple-select-filled-label">Größe (Erwachsene)</InputLabel>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    onChange={this.handleChangeAdultSize}
                                >
                                    <MenuItem value={undefined}>
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={'XS'}>XS</MenuItem>
                                    <MenuItem value={'S'}>S</MenuItem>
                                    <MenuItem value={'M'}>M</MenuItem>
                                    <MenuItem value={'L'}>L</MenuItem>
                                    <MenuItem value={'XL'}>XL</MenuItem>
                                </Select>
                            </FormControl>
                        </span>


                        {/*TODO: Ausgrauen oder conditional rendering, wenn nicht das entsprechende ausgewählt ist*/}
                        {/*<FormControl variant="filled">*/}
                        {/*    <InputLabel id="demo-simple-select-filled-label">Größe (Kinder)</InputLabel>*/}
                        {/*    <Select*/}
                        {/*        labelId="demo-simple-select-filled-label"*/}
                        {/*        id="demo-simple-select-filled"*/}
                        {/*        value={this.state.size}*/}
                        {/*        onChange={this.handleChangeForWho}*/}
                        {/*    >*/}
                        {/*        <MenuItem value="">*/}
                        {/*            <em>None</em>*/}
                        {/*        </MenuItem>*/}
                        {/*        <MenuItem value={'44'}>44</MenuItem>*/}
                        {/*        <MenuItem value={'50'}>50</MenuItem>*/}
                        {/*        <MenuItem value={'56'}>56</MenuItem>*/}
                        {/*        <MenuItem value={'62'}>62</MenuItem>*/}
                        {/*        <MenuItem value={'68'}>68</MenuItem>*/}
                        {/*        <MenuItem value={'74'}>74</MenuItem>*/}
                        {/*        <MenuItem value={'80'}>80</MenuItem>*/}
                        {/*        <MenuItem value={'86'}>86</MenuItem>*/}
                        {/*        <MenuItem value={'92'}>92</MenuItem>*/}
                        {/*        <MenuItem value={'98'}>98</MenuItem>*/}
                        {/*        <MenuItem value={'104'}>104</MenuItem>*/}
                        {/*        <MenuItem value={'110'}>110</MenuItem>*/}
                        {/*        <MenuItem value={'116'}>116</MenuItem>*/}
                        {/*        <MenuItem value={'122'}>122</MenuItem>*/}
                        {/*        <MenuItem value={'128'}>128</MenuItem>*/}
                        {/*        <MenuItem value={'134'}>134</MenuItem>*/}
                        {/*        <MenuItem value={'140'}>140</MenuItem>*/}
                        {/*        <MenuItem value={'146'}>146</MenuItem>*/}
                        {/*        <MenuItem value={'152'}>152</MenuItem>*/}
                        {/*        <MenuItem value={'158'}>158</MenuItem>*/}
                        {/*        <MenuItem value={'164'}>164</MenuItem>*/}
                        {/*        <MenuItem value={'170'}>170</MenuItem>*/}
                        {/*    </Select>*/}
                        {/*</FormControl>*/}

                        <span>
                            <Typography>
                                Aus welchem Stoff soll dein neues Lieblingsteil sein?
                            </Typography>
                            <FormControl className={'wishlistDropdown'} variant="filled">
                                <InputLabel id="demo-simple-select-filled-label">Stoff</InputLabel>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    onChange={this.handleChangeStoff}>
                                    <MenuItem value={undefined}>
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={'Wolle'}>Wolle</MenuItem>
                                    <MenuItem value={'Leinen'}>Leinen</MenuItem>
                                </Select>
                            </FormControl>
                        </span>

                        <span>
                            <Typography>
                                Was für ein Lieblingsteil soll es genau sein?
                            </Typography>
                            <FormControl className={'wishlistDropdown'} variant="filled">

                                <InputLabel id="demo-simple-select-filled-label">Art</InputLabel>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    onChange={this.handleChangeArt}>
                                    <MenuItem value={undefined}>
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={'Jacke'}>Jacke</MenuItem>
                                    <MenuItem value={'Hose'}>Hose</MenuItem>
                                </Select>
                            </FormControl>
                        </span>

                        <span>
                             <List dense className={'colorList'}>

            {Object.keys(Colors).map(value => {
                return (
                    <FormControl className={'wishlistDropdown'} variant="filled">
                        <ListItem className={'wishlistColor'} button onClick={this.handleToggle(value)}>
                            {this.getIconByColor(value)}
                            <ListItemText primary={getColorFromString(value)} onChange={this.handleToggle(value)}/>
                            <ListItemSecondaryAction>
                                <Checkbox
                                    onChange={this.handleToggle(value)}
                                    checked={this.isColorChecked(value)}
                                />
                            </ListItemSecondaryAction>
                        </ListItem>
                    </FormControl>
                );
            })}
        </List>
                        </span>


                    </div>
                    <p/>
                    <div>
                        <Button onClick={this.handleSubmit} color="primary" disabled={this.state.isButtonDisabled}>
                            Anfrage erstellen
                        </Button>
                    </div>
                </FormControl>
                <Typography>
                    <br/>
                    <br/>
                    <br/>
                    Aus rechtlichen Gründen (DSGVO) stellen wir lediglich eine Email für dich zusammen - der Versand
                    erfolgt dann wie gewohnt über dein Mailprogramm.
                </Typography>
            </div>
        );
    }
}

export default Wunschzettel;