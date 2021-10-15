import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import InfoIcon from '@material-ui/icons/Info';
import GestureIcon from '@material-ui/icons/Gesture';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Material from "./material/Material";
import Home from "./home/Home";
import Galery from "./galery/Galery";
import Products from "./products/Products";
import DirectBuy from "./directBuy/DirectBuy";
import AboutMe from "./aboutMe/AboutMe";
import Contact from "./contact/Contact";

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
            <AppBar position="sticky" color="default">
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
                    <Tab label="Produkte" icon={<ShoppingBasket/>} {...a11yProps(6)} />
                    <Tab label="Material" icon={<GestureIcon/>} {...a11yProps(1)} />
                    <Tab label="Sofortkäufe" icon={<AddShoppingCartIcon/>} {...a11yProps(2)} />
                    <Tab label="Galerie" icon={<InsertPhotoIcon/>} {...a11yProps(3)} />
                    <Tab label="Über mich" icon={<InfoIcon/>} {...a11yProps(4)} />
                    <Tab label="Kontakt" icon={<MailOutlineIcon/>} {...a11yProps(5)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Home/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Products/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Material/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <DirectBuy/>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Galery/>
            </TabPanel>
            <TabPanel value={value} index={5}>
                <AboutMe/>
            </TabPanel>
            <TabPanel value={value} index={6}>
                <Contact/>
            </TabPanel>

        </div>
    );
}
