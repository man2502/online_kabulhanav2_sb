import { Button, makeStyles } from "@material-ui/core"
import { CheckCircle, GetApp } from "@material-ui/icons"
import React, { useMemo } from "react"
import logoPNG from './../../../assets/img/logo.png'
import { jsPDF } from "jspdf"

const useStyles = makeStyles((theme) => ({
    wrapper: {
        padding:0,
        border:'none',
        boxShadow:'none',
        [theme.breakpoints.up('xs')]:{
            padding: '15px',
            border: '1px solid #ccc',
            boxShadow: '0 12px 48px 0 rgb(14 40 135 / 12%)'

        }

    },
    header: {
        marginBottom: '30px'
    },
    title: {
        display: 'block',
        marginBottom: theme.spacing(1)
    },
    btnItem:{
        [theme.breakpoints.up('xs')]:{
            margin:'10px'
            
        }
    }
}))

const OfferSuccess = (props) => {
    const pdfGenerate = (data) => {
        const base = props.data.length > 0 ? props.data[0] : {
            name: '', id: 0, date: '00/00/0000'
        }
        var doc = new jsPDF()
        doc.addImage(logoPNG, "PNG", 10, 10, 50, 10)
        doc.setFontSize(22);
        doc.setTextColor(0, 0, 0);
        doc.text(10, 40, 'ID:' + base.id);

        doc.setFontSize(16);
        doc.setTextColor(10, 10, 10);
        doc.text(10, 50, 'Amalyn gornusi: ' + base.name);
        doc.text(10, 60, 'Amalyn senesi: ' + base.date);
        doc.text(10, 70, 'Jogapkar isgar: ' + 'Aman Amanow');
        doc.text(10, 80, 'Bizin bankymyzy saylap alanynyz ucin sag bolun:');
        doc.save(base.id + ".pdf");
    }
    const classes = useStyles()

    return (
        <div className={classes.wrapper}>
            <header className={classes.header}>
                <div style={{ textAlign: 'center', }}>
                    <CheckCircle style={{ color: '00dd00', fontSize: '10rem' }} />
                </div>

                <div className='h2' style={{ color: '#00dd00', textAlign: 'center', textTransform: 'capitalize' }}>Üstünlikli tabşyryldy</div>
                {/* <span style={{ textAlign: 'center', display: 'block', }}>Biziň hyzmatymyzdan peýdalananyňyz üçin sag boluň</span> */}

            </header>
            <div>
                {props.contacts.length > 0 ? <span className={classes.title}>Size jogapkär işgär</span> : ''}
                {props.contacts.length > 0 ? props.contacts.map(c => {
                    return (
                        <table cellPadding={5} >
                            <tr><th className='h4' style={{ fontWeight: 'bold' }}>Işgär: </th><td>{c.name}</td></tr>
                            <tr><th className='h4' style={{ fontWeight: 'bold' }}>Email: </th><td >{c.email}</td></tr>
                        </table>

                    )
                }) : ''}


            </div>

            <div style={{textAlign:'center', marginTop: '40px' }}>
                <Button className={classes.btnItem} onClick={async () => {
                    props.handleReset()
                    props.setOpen(false)

                }} variant='contained' color='primary' style={{ marginTop: '20px', width: '175px' }}>OK</Button>
                <Button className={classes.btnItem} onClick={() => { pdfGenerate() }} color='primary' style={{ marginTop: '20px', width: '175px' }} variant='contained' startIcon={<GetApp />}>Göçürip al</Button>

            </div>
        </div>
    )
}


export default OfferSuccess