import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import MaterialComponent from "../components/MaterialComponent";
import {Grid} from "@material-ui/core";
import {stoffe} from "./MaterialProvider";
import {GaleryData} from "../galery/Galery";
import {getInstagramStoffe} from "../instagram/getInstagram";
import {mapInstagramDataToGallery} from "../galery/GaleryMapper";
import {hasHashtag} from "../utils/Hashtag";
import "../design/Text.css"

class Material extends Component {

    state = {
        showSpinner: true as boolean,
        galleryData: [] as GaleryData[],
    };


    async componentDidMount() {
        this.setState({
            galleryData: (await getInstagramStoffe()).map(mapInstagramDataToGallery),
        })
    }

    filterImagesForHashtag = (hashtag: string): GaleryData[] | undefined => {
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
                    <h1 className={"headerText"}>Stoffauswahl</h1>
                    <div className={"mainText"}>
                        Meine Stoffauswahl wird regelmäßig aktualisiert. Bitte hab Verständnis dafür, dass nicht jeder Stoff
                        für jedes Lieblingsteil geeignet oder in ausreichender Menge vorhanden ist.
                    </div>
                    <div className={"mainText"}>
                        Kontaktiere mich gern und ich prüfe, wie ich dir deinen Wunsch erfüllen kann.
                    </div>
                </Typography>
                <p/>
                <Grid container spacing={1}>
                    {stoffe.map(tile => (
                        <Grid item sm={4}>
                            <MaterialComponent material={tile} images={this.filterImagesForHashtag(tile.hashtag)}/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        )
    }
}


export default Material;


