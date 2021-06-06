import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AutoAnswer from './AutoAnswer/AutoAnswer';
import { Container } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
import { VerifiedUser } from '@material-ui/icons';
import AssignmentTurnedInSharpIcon from '@material-ui/icons/AssignmentTurnedInSharp';
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
        backgroundColor: '#fff',
        width: "100%",
        marginBottom: theme.TabPanel
    },
    tabItem:{
        fontWeight: "bold",
        width: "100%",
        maxWidth: "30%",
        outline :'none'
        
    },

    navigation:{
        background: "#F0F0F0",
        border: "none",
        boxShadow: "none"
        
    },
   


}));

const InfoSection = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default" className={classes.navigation}>
                <Container>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs"  indicatorColor="none"
                    textColor="primary" variant="fullwidth" centered> 
                    <Tab label="SORAG -JOGAP" icon={<HelpIcon />} {...a11yProps(0)} style={{ marginRight: "25px" }} className={classes.tabItem} />
                    <Tab label="HOWSUZLYK MASLAHATLARY" icon={<VerifiedUser />} style={{ marginRight: "25px" }} className={classes.tabItem}{...a11yProps(1)} />
                    <Tab label="NÄDIP HASABA ALYNMALY" icon={<AssignmentTurnedInSharpIcon />} style={{ marginRight: "25px" }} className={classes.tabItem}{...a11yProps(2)} />
                </Tabs>

                </Container>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Container >
                    <AutoAnswer />
                </Container>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Container >
                    <AutoAnswer />
                </Container>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Container >
                    <AutoAnswer />
                </Container>
            </TabPanel>
        </div>
    );
}


export default InfoSection