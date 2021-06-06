import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import s from "./AutoAnswer.module.css"
import TableItem from './TableItem/TableItem';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        content: '',
        display: 'block'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        // fontWeight: "bold"
    },
    item: {
        marginBottom: "15px",
        boxShadow: "none",
        border: "1px solid #ddd",
        borderRadius: "15px",
    }
}));

const AutoAnswer = (props) => {
    const classes = useStyles();
    const [state, setState] = useState({
        panel1: {
            expand: false,
            count: 0
        },
        panel2: {
            expand: false,
            count: 0
        },
        panel3: {
            expand: false,
            count: 0
        }

    })

    const handleChange = (panel) => {

        switch (panel) {
            case 'panel1':
                if (state.panel1.count + 1 === 2) setState({
                    ...state,
                    panel1: {
                        expand: false,
                        count: 0
                    }
                })
                else {
                    setState({
                        ...state,
                        panel1: {
                            expand: true,
                            count: state.panel1.count + 1
                        }
                    })
                }
                break
            case 'panel2':
                if (state.panel2.count + 1 === 2) setState({
                    ...state,
                    panel2: {
                        expand: false,
                        count: 0
                    }
                })
                else {
                    setState({
                        ...state,
                        panel2: {
                            expand: true,
                            count: state.panel2.count + 1
                        }
                    })
                } break
            case 'panel3':
                if (state.panel3.count + 1 === 2) setState({
                    ...state,
                    panel3: {
                        expand: false,
                        count: 0
                    }
                })
                else {
                    setState({
                        ...state,
                        panel3: {
                            expand: true,
                            count: state.panel3.count + 1
                        }
                    })
                } break
        }
    }
    const iconStyle ={
        // backgroundColor: 'rgba(0,55,255, 0.2)',
        color: '#1774C4',
        border: "none",
        fontSize :"2rem"
    }

    return (

        <div className={classes.root}>
            <Accordion expanded={state.panel1.expand} onChange={() => { handleChange('panel1') }} className={classes.item} square={false}>
                <AccordionSummary
                    expandIcon={state.panel1.expand ? <RemoveCircleOutlineIcon style={iconStyle}/> : <ControlPointIcon style={iconStyle}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"

                >
                    <Typography className={classes.heading}>Kredit sertleri</Typography>
                </AccordionSummary>
                <AccordionDetails style={{display: 'block'}}>
                    <Typography>
                        <TableItem {...props}/>
          </Typography>
                </AccordionDetails>
            </Accordion>



            <Accordion expanded={state.panel2.expand} onChange={() => { handleChange('panel2') }} className={classes.item}>
                <AccordionSummary
                    expandIcon={state.panel2.expand ? <RemoveCircleOutlineIcon style={iconStyle}/> : <ControlPointIcon style={iconStyle}/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"

                >
                    <Typography className={classes.heading}>kredit prosentleri</Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion expanded={state.panel3.expand} className={classes.item} onChange={() => { handleChange('panel3') }} >
                <AccordionSummary
                    expandIcon={state.panel3.expand ? <RemoveCircleOutlineIcon style={iconStyle}/> : <ControlPointIcon style={iconStyle}/>}
                    aria-controls="panel3a-content"
                    id="panel3a-header"

                >
                    <Typography className={classes.heading}>Ätiýaçlandyrma</Typography>
                </AccordionSummary>
            </Accordion>
        </div>
    );
}


export default AutoAnswer