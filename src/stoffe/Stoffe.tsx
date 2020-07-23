import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import StoffComponent from "./StoffComponent";
import {Grid} from "@material-ui/core";
import {stoffe} from "./StoffProvider";
import {GalleryData} from "../galery/Galery";
import {getInstagramStoffe} from "../instagram/getInstagram";
import {mapInstagramDataToGallery} from "../galery/GaleryMapper";
import {hasHashtag} from "../utils/Hashtag";

class Stoffe extends Component {

    state = {
        showSpinner: true as boolean,
        galleryData: [] as GalleryData[],
    };


    async componentDidMount() {
        this.setState({
            galleryData: (await getInstagramStoffe()).map(mapInstagramDataToGallery),
        })
    }

    filterImagesForHashtag = (hashtag: string): GalleryData[] | undefined => {
        const newGalleryData = this.state.galleryData.filter(item => hasHashtag(item, hashtag));
        if (newGalleryData.length === 0) {
            return undefined;
        }
        return newGalleryData;
    }

    render() {
        return (

            <div>
                <Typography component="div">
                    <h1>Meine Stoffe</h1>
                    Meine Stoffauswahl wird immer regelmäßig aktualisiert. Bitte hab Verständnis dafür, dass nicht
                    jeder Stoff für jedes Lieblingsteil geeignet oder in ausreichender Menge vorhanden ist. Kontaktiere
                    mich gern und ich prüfe, wie ich dir deinen Wunsch erfüllen kann.
                </Typography>
                <p/>

                <Grid container spacing={1}>
                    {stoffe.map(tile => (
                        <Grid item sm={4}>
                            <StoffComponent stoff={tile} images={this.filterImagesForHashtag(tile.hashtag)}/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        )
    }
}


export default Stoffe;


