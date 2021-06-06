import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Help, ListAlt, Payment } from '@material-ui/icons';
import PublicTable from './PublicTable/PublicTable';
import PayType from './PayType/PayType';
import PublicHelp from './PublicHelp/PublicHelp';

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
                <Box style={{ marginTop: '15px' }}>
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
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,

    },
    headItem: {
        fontWeight: 'normal'
    },
    indicator: {
        backgroundColor: '#fff'
    },
    tabs: {
        paddingLeft: '10px',
        paddingRight: '10px',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center'

        }
    },
    tabsCentered: {
        justifyContent: 'flex-start',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center'

        }
    },
    style: {
        padding: '0'
    }


}));

export default function PublicPay() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);

    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color='primary'>
                <Tabs value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                    indicatorColor='secondary'
                    textColor='default'
                    // variant='fullWidth',
                    classes={{ indicator: classes.indicator, root: classes.tabs, centered: classes.tabsCentered }}
                    centered
                >
                    <Tab classes={{ wrapper: classes.headItem }} icon={<ListAlt />} label="Töleglerim" {...a11yProps(0)} />
                    <Tab classes={{ wrapper: classes.headItem }} icon={<Payment />} label="Täze töleg" {...a11yProps(1)} />
                    <Tab classes={{ wrapper: classes.headItem }} icon={<Help />} label="Nädip tölemeli ?" {...a11yProps(2)} />
                    {/* <div style={{width:'50%', display:'flex' ,alignItems:'center', justifyContent:'flex-end', float:'right'}}>

                        <div style={{display:'inline-block'}}>sdsd</div>
                        <div style={{display:'inline-block'}}>sdsd</div>
                        <div style={{display:'inline-block'}}>sdsd</div>
                    </div> */}

                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} >
                <PublicTable />
            </TabPanel>
            <TabPanel value={value} index={1} >
                <PayType />
            </TabPanel>
            <TabPanel value={value} index={2} >
                <PublicHelp />
            </TabPanel>

        </div>
    );
}
