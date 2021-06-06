import { Button, makeStyles } from "@material-ui/core"
import React from "react"
import { Col, Row } from "react-bootstrap"
// import InfoPageContainer from "../Infopage/InfoPageContainer"
import Actions from "./Actions/Actions"
import s from "./Room.module.css"
import AddIcon from '@material-ui/icons/Add';
import { Loading } from "src/App"


const useStyles = makeStyles((theme) => ({
    button: {
        textAlign: 'right',
        [theme.breakpoints.down('xs')]: {
            textAlign: 'left'
        }
    },
    buttonSize: {
        width:'100%',
        padding:'10px',
        border:'none',
        borderRadius:'8px',
        outline:'none',
        fontSize:'1.3rem',
        color:'#fff',
        [theme.breakpoints.down('xs')]: {
            marginTop: '20px',
            marginBottom: '20px'
        },
        
        [theme.breakpoints.up('lg')]:{
            width:'40%'

        },
        [theme.breakpoints.down('lg')]:{
            width:'60%'

        },
        [theme.breakpoints.down('md')]:{
            width:'80%'

        },
        [theme.breakpoints.down('md')]:{
            width:'100%'

        },
        
        
        

    },

}))

const Room = (props) => {
    // const [display, setDisplay] = useState('none')
    
    const classes = useStyles()
    
    return (
        <div className={s.wrapper}>
            {props.isFetching&&<Loading />}
            <div className={s.header}>
                {/* <Container> */}
                <Row>
                    <Col md={6} lg={6} sm={6}>
                        <div className='h1'>{props.titles.headerTitle}</div>
                    </Col>
                
                    <Col  md={6} lg={6} sm={6} className={classes.button}>
                        <Button color='primary' variant='contained' onClick={() => {
                            props.docToggle(true)
                            props.getBronsThunk()
                        }} className={classes.buttonSize}><AddIcon style={{ marginRight: '15px' }} />{props.titles.buttonTitle}</Button>
                    </Col>

                </Row>
                {/* </Container> */}
            </div>
            <br />
            <div className={s.content}>
                {/* <Container> */}
                <Actions data={props.offeredData} noDoc={props.titles.noDoc} />
                {/* </Container> */}


            </div>

        </div>
    )
}

export default Room