import React, {Component} from 'react';
import './Gallery.css';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Dialog from '@material-ui/core/Dialog';
import {getInstagramFeed} from "../instagram/getInstagram";
import {CircularProgress} from "@material-ui/core";
import {mapInstagramDataToGallery} from "./GalleryMapper";

export interface GalleryData {
    img: string;
    description: string;
}

class Gallery extends Component {

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
                    <CircularProgress />
                </div>
                :
            <div>

                <GridList >
                    {this.state.galleryData.map(tile => (
                        <GridListTile className={"tile"}  key={tile.img} >
                            <img src={tile.img} alt={"some alt text, maybe the hashtags?"}
                                 onClick={() => selectPicture(tile)}/>
                            <GridListTileBar
                                title={tile.description}
                            />
                        </GridListTile>
                    ))}
                </GridList>
                <Dialog open={this.state.isDialogOpen} onClose={handleClose}>
                    <GridListTile>
                        <img src={this.state.selectedInstagramItem?.img} alt={"some alt text, maybe the hashtags?"} onClick={handleClose}/>
                        <GridListTileBar
                            title={this.state.selectedInstagramItem?.description}
                        />
                    </GridListTile>
                </Dialog>
            </div>
        );
    }
}

export default Gallery;