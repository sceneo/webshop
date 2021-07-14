import React, {Component} from 'react';
import '../design/Spinner.css';
import Dialog from '@material-ui/core/Dialog';
import {getInstagramFeed} from "../instagram/getInstagram";
import {Grid} from "@material-ui/core";
import {mapInstagramDataToGallery} from "./GaleryMapper";
import GaleryComponent from "../components/GaleryComponent";
import {getDefinedOrReturnNotFound} from "../utils/Undefined";
import Typography from "@material-ui/core/Typography";
import "../design/Text.css"
import {
    MAXIMUM_LOADING_TIME,
    SITE_UNDER_CONSTRUCTION_ALL,
    SITE_UNDER_CONSTRUCTION_GALERY,
} from "../GlobalSettings";
import SiteUnderConstructionComponent from "../components/SiteUnderConstructionComponent";
import LoadingDataComponent from "../components/LoadingDataComponent";
import {delay} from "../utils/time";

export interface GaleryData {
    img: string;
    description: string;
}

class Galery extends Component {

    state = {
        isLoading: true as boolean,
        loadingTimer: 0 as number,
        galleryData: [] as GaleryData[],
        isDialogOpen: false as boolean,
        selectedInstagramItem: undefined as undefined | GaleryData,
    };


    async componentDidMount() {
        this.doTimer();
        this.setState({
            galleryData: (await getInstagramFeed()).map(mapInstagramDataToGallery),
            isLoading: false,
        })
    }

    async doTimer() {
        for (let i = 0; i < MAXIMUM_LOADING_TIME + 1; i++) {
            const currentTime = this.state.loadingTimer;
            await delay(1000);
            this.setState({
                loadingTimer: currentTime + 1
            })
        }
    }

    render() {
        const handleClose = () => {
            this.setState({
                isDialogOpen: false,
                selectedInstagramItem: undefined,
            });
        }

        const selectPicture = (pic: GaleryData) => {
            this.setState({
                isDialogOpen: true,
                selectedInstagramItem: pic,
            });
        }

        return (
            SITE_UNDER_CONSTRUCTION_ALL || SITE_UNDER_CONSTRUCTION_GALERY ?
                <SiteUnderConstructionComponent/>
                :

                this.state.isLoading ?
                    <LoadingDataComponent isStillLoading={this.state.loadingTimer <= MAXIMUM_LOADING_TIME}/>
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