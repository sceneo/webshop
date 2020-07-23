import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import InfoIcon from '@material-ui/icons/Info';
import GestureIcon from '@material-ui/icons/Gesture';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Stoffe from "./stoffe/Stoffe";
import Home from "./home/Home";
import Galery from "./galery/Galery";
import Products from "./produkte/Products";
import Sofortkaufen from "./sofortkaufen/Sofortkaufen";
import AboutMe from "./aboutMe/AboutMe";
import Kontakt from "./kontakt/Kontakt";
import Wunschzettel from "./Wunschzettel/Wunschzettel";

// TODO
const FEATURE_TOGGLE_USE_WUNSCHLISTE: boolean = false;
const FEATURE_TOGGLE_USE_PRODUKTE: boolean = false;

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

function a11yProps(index: any) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

export default function Menu() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={'invisibleBackground'}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="scrollable force tabs example"
                >
                    <Tab label="Home" icon={<HomeIcon/>} {...a11yProps(0)} />
                    {FEATURE_TOGGLE_USE_PRODUKTE ?
                        <Tab label="Produkte" icon={<ShoppingBasket/>} {...a11yProps(1)} /> : <></>}
                    <Tab label="Stoffe" icon={<GestureIcon/>} {...a11yProps(2)} />
                    <Tab label="Sofortkäufe" icon={<AddShoppingCartIcon/>} {...a11yProps(3)} />
                    <Tab label="Galerie" icon={<InsertPhotoIcon/>} {...a11yProps(4)} />
                    <Tab label="Über mich" icon={<InfoIcon/>} {...a11yProps(5)} />
                    <Tab label="Kontakt" icon={<MailOutlineIcon/>} {...a11yProps(6)} />
                    {FEATURE_TOGGLE_USE_WUNSCHLISTE ?
                        <Tab label="Wunschzettel" icon={<FavoriteIcon/>} {...a11yProps(7)} /> : <></>}
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Home/>
            </TabPanel>
            {FEATURE_TOGGLE_USE_PRODUKTE ?
                <>
                    <TabPanel value={value} index={1}>
                        <Products/>
                    </TabPanel>
                </>
                :
                <></>
            }

            <TabPanel value={value} index={2}>
                <Stoffe/>
            </TabPanel>

            <TabPanel value={value} index={3}>
                <Sofortkaufen/>
            </TabPanel>

            <TabPanel value={value} index={4}>
                <Galery/>
            </TabPanel>

            <TabPanel value={value} index={5}>
                <AboutMe/>
            </TabPanel>
            <TabPanel value={value} index={6}>
                <Kontakt/>
            </TabPanel>
            {FEATURE_TOGGLE_USE_WUNSCHLISTE ?
                <>
                    <TabPanel value={value} index={7}>
                        <Wunschzettel/>
                    </TabPanel>
                </>
                :
                <></>
            }
        </div>
    );
}
