import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { Container, Grid } from '@material-ui/core';
import { CachedOutlined, DevicesOtherOutlined, LockOutlined, Security } from '@material-ui/icons';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { sbColors } from 'src/common/config';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        fontFamily: 'Montserrat',
    },
    itemTitle: {
        padding: '15px',
        paddingLeft: '25px',
        [theme.breakpoints.down('xs')]: {
            padding: '0px'
        },
        fontSize: '1.17rem',
        // color: sbColors.main.primary,
        color:'green',
        textAlign: 'left'
    },
    iconWrapper: {
        
    },
    icon: {
        fontSize: '2.5rem',
       // color: sbColors.main.primary,
       color:'green',
        

    },
    h1:{
        fontWeight:'700',
        fontFamily:'Montserrat',
        [theme.breakpoints.down('sm')]:{
            marginTop:'125px'
        },
        [theme.breakpoints.down('xs')]:{
            marginTop:'50px'
        }
    },
    itemContent:{
        textAlign:'right'
    }
}))
const Accordion = withStyles({
    root: {
        border: '1px solid #ddd',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        marginBottom: -1,
        minHeight: 56,
        // display:'block',
        '&$expanded': {
            borderBottom: `1px solid ${sbColors.main.primary}`,
            minHeight: 56,
        },
    },
    content: {
        display:'block',
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
    
}))(MuiAccordionDetails);

export default function InfoBlock() {
    const [expanded, setExpanded] = React.useState('');
    const classes = useStyles()

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className={classes.wrapper} style={{ backgroundColor: '#fff', padding: '5px' }}>
            <br />
            <h1 className={classes.h1}>Howpsuzlyk maslahatlary</h1>
            <br />
            <Container>
                <Grid container justify='center'>
                    <Grid item lg={8} md={10} sm={12}>
                        <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary aria-controls="panel1d-content" expandIcon={<ArrowDropDownIcon/>} id="panel1d-header1">
                                <div className={classes.itemTitle}>
                                    <Grid container spacing={1} alignItems='center'>
                                        <Grid item  lg={1} md={1} sm={1} xs={2}>
                                            <Security className={classes.icon} />
                                        </Grid>
                                        <Grid item  lg={6} md={6} sm={6} xs={9}>
                                            <span>Безопасное использование сервиса </span>
                                        </Grid>

                                    </Grid>
                                </div>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className={classes.itemContent}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header2" expandIcon={<ArrowDropDownIcon/>}>
                                <div className={classes.itemTitle}>
                                    <Grid container spacing={1} alignItems='center'>
                                        <Grid item xs={2} lg={1} md={1} sm={1}>
                                            <LockOutlined className={classes.icon} />
                                        </Grid>
                                        <Grid item xs={10} lg={11} md={11} sm={11}>
                                            <span>
                                            Хранить реквизити банковской карты в тайне

                                            </span>
                                         </Grid>
                                    </Grid>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className={classes.itemContent}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header3" expandIcon={<ArrowDropDownIcon/>}>
                                <div className={classes.itemTitle}>
                                    <Grid container spacing={1} alignItems='center'>
                                        <Grid item xs={2} lg={1} md={1} sm={1}>
                                            <DevicesOtherOutlined className={classes.icon} />   
                                        </Grid>
                                        <Grid item xs={10} lg={11} md={11} sm={11}>
                                            <span>
                                            Работайте со своих устройств
                                            </span>
                                </Grid>

                                    </Grid>
                                </div>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className={classes.itemContent}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header4" expandIcon={<ArrowDropDownIcon/>}>
                                <div className={classes.itemTitle}>
                                    <Grid container spacing={1} alignItems='center'>
                                        <Grid item xs={2} lg={1} md={1} sm={1}>
                                            <CachedOutlined className={classes.icon} />
                                        </Grid>
                                        <Grid item xs={10} lg={11} md={11} sm={11}>
                                            <span>

                                            Обновляйте программы
                                            </span>
                                         </Grid>

                                    </Grid>
                                </div>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className={classes.itemContent}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>
                <br />
                <br />
            </Container>
        </div>
    );
}
