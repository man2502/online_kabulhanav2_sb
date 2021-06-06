import { Button } from '@material-ui/core'
import { Error } from '@material-ui/icons'
import React from 'react'

const OfferError = (props) => {
    return (
        <div>

            <div style={{ textAlign: 'center' }}>
                <Error style={{ color: 'dd0000', fontSize: '10rem' }} />

            </div>

            <h2 style={{ color: '#dd0000', textAlign: 'center' }}>Amal ýerine ýetmedi</h2>
            <h2 style={{textAlign:'center', fontWeight:'lighter'}}>Täzeden synanyşyp görüň</h2>


            <div style={{ textAlign: 'center' }}>
                <Button onClick={async () => {
                    props.handleReset()
                    props.setOpen(false)

                }} variant='contained' style={{ backgroundColor: '#dd0000', color: '#fff', marginTop: '20px', }}>OK</Button>

            </div>
        </div>
    )
}



export default OfferError