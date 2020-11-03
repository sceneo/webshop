import React, {Component} from 'react';
import '../design/Spinner.css';
import Dialog from '@material-ui/core/Dialog';
import {getInstagramFeed} from "../instagram/getInstagram";
import {CircularProgress, Grid} from "@material-ui/core";
import {mapInstagramDataToGallery} from "./GaleryMapper";
import GaleryComponent from "../components/GaleryComponent";
import {getDefinedOrReturnNotFound} from "../utils/Undefined";
import Typography from "@material-ui/core/Typography";
import "../design/Text.css"

export interface GalleryData {
    img: string;
    description: string;
}

class Galery extends Component {

    state = {
        showSpinner: true as boolean,
        galleryData: [] as GalleryData[],
        isDialogOpen: false as boolean,
        selectedInstagramItem: undefined as undefined | GalleryData,
    };


    async componentDidMount() {
        this.setState({
            galleryData: (await getInstagramFeed()).map(mapInstagramDataToGallery),
            showSpinner: false,
        })
    }

    render() {
        const handleClose = () => {
            this.setState({
                isDialogOpen: false,
                selectedInstagramItem: undefined,
            });
        }

        const selectPicture = (pic: GalleryData) => {
            this.setState({
                isDialogOpen: true,
                selectedInstagramItem: pic,
            });
        }

        return (

            this.state.showSpinner ?
                <div className={"spinner"}>
                    <CircularProgress/>
                </div>
                :
                <div>
                    <Typography component="div">
                        <h1 className={"headerText"}>Galerie</h1>
                        <div className={"mainText"}>
                            Stöbern unbedingt erwünscht! 😊
                        </div>
                        <div className={"mainText"}>
                            Alle Artikel, die du hier findest, sind Teile, welche ich auf Kundenwunsch angefertigt habe
                            und die bereits verkauft sind. Lass dich inspirieren von Stoffen und Schnitten, um deine
                            eigene individuelle Kombination zusammen zu stellen!
                        </div>
                        <div className={"mainText"}>
                            Du brauchst ein Last-Minute-Geschenk oder möchtest lieber nicht selbst zusammenstellen?
                            Schau doch mal in der Rubrik „Sofortkäufe“ vorbei – vielleicht wartet dort schon das
                            perfekte Teil/Set!
                        </div>
                    </Typography>

                    <Grid container spacing={1}>
                        {this.state.galleryData.map(direct => (
                            <Grid item sm={4} onClick={() => selectPicture(direct)}>
                                <GaleryComponent img={direct.img}
                                />
                            </Grid>
                        ))}
                    </Grid>
                    <Dialog open={this.state.isDialogOpen} onClose={handleClose}>
                        <GaleryComponent img={getDefinedOrReturnNotFound(this.state.selectedInstagramItem?.img)}
                                         description={getDefinedOrReturnNotFound(this.state.selectedInstagramItem?.description)}
                        />
                    </Dialog>
                </div>
        );
    }
}

export default Galery;