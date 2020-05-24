import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import StoffComponent from "./StoffComponent";
import {Grid} from "@material-ui/core";
import {stoffe} from "./StoffProvider";
import {GalleryData} from "../gallery/Gallery";
import {getInstagramFeed, getInstagramStoffe} from "../instagram/getInstagram";
import {mapInstagramDataToGallery} from "../gallery/GalleryMapper";
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
        if(newGalleryData.length === 0) {
            return undefined;
        }
        return newGalleryData;
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <Container>
                    <Typography component="div">
                        <h1>Meine Stoffe</h1>
                        Meine Stoffauswahl wird immer regelmäßig aktualisiert. Bitte hab Verständnis dafür, dass nicht
                        jeder
                        Stoff für jedes Lieblingsteil geeignet oder in ausreichender Menge vorhanden ist. Kontaktiere
                        mich
                        gern und ich prüfe, wie ich dir deinen Wunsch erfüllen kann. </Typography>
                    <p/>

                    <Grid container spacing={1}>
                        {stoffe.map(tile => (
                            <Grid item sm={4}>
                                <StoffComponent stoff={tile} images={this.filterImagesForHashtag(tile.hashtag)} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </React.Fragment>
        )
    }
}


export default Stoffe;


