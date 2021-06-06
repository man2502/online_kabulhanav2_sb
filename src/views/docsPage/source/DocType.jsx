import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    needsItem: {
        fontWeight: 'bold'
    },
    table: {
        width:'100%'
    },
    leftPart:{
        textAlign:'left',
        textTransform:'initial'
    }
}))

const DocType = (props) => {
    // console.log('render doctype')

    const classes = useStyles()
    return (
        <div style={{ width: '100%', textAlign: 'center', }}>
            {props.activeItem.length<=0&&<div>

                {/* <Description style={{color:'#2D4FCB', fontSize:'10rem',}}/> */}
            
            </div>}
            {props.activeItem.length > 0 && <div>
                {/* <div className='h3'>{props.docModeData.length > 0 && props.activeItem.length > 0 ? props.docModeData[Number(props.activeItem)].name + ' karty' : ''}</div> */}
            </div>}
        </div>
    )
}



export default DocType