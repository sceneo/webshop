import React, {Component} from 'react';
import '../design/Spinner.css';
import Dialog from '@material-ui/core/Dialog';
import {getInstagramFeed} from "../instagram/getInstagram";
import {CircularProgress, Grid} from "@material-ui/core";
import {mapInstagramDataToGallery} from "./GaleryMapper";
import GaleryComponent from "../components/GaleryComponent";
import {getDefinedOrReturnNotFound} from "../utils/Undefined";

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