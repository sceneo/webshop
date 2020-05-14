import React from 'react';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Dialog from '@material-ui/core/Dialog';
import {getInstagramFeed, Post} from "../instagram/getInstagram";

const mapInstagramDataToGallery = (post: Post) => ({
    img: post.url,
    title: post.caption,
    author: post.owner,
})
const galleryData = [{img:"", title:"",author:""}];

//getInstagramFeed().then(feed => feed.map(mapInstagramDataToGallery));

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            overflow: 'hidden',
        },
        gridList: {
            width: '100%',
            height: '100%',
        },
        icon: {
            color: 'rgba(255, 255, 255, 0.54)',
        },
    }),
);


export default function Gallery() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState("");

    const selectPicture = (image: string) => {
        setSelectedValue(image);
        setOpen(true);
    };

    const handleClose = (value: string) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                {galleryData.map(tile => (
                    <GridListTile key={tile.img}>
                        <img src={"gallery/"+tile.img} alt={tile.title} onClick={() => selectPicture(tile.img)}/>
                        <GridListTileBar
                            title={tile.title}
                            subtitle={<span>{tile.author}</span>}
                        />
                    </GridListTile>
                ))}
            </GridList>
            <Dialog open={open} onClose={handleClose}>
                <img src={"gallery/"+selectedValue} alt={""}/>
            </Dialog>
        </div>
    );
}
