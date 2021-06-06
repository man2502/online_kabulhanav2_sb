import { makeStyles, Paper } from '@material-ui/core'
import { Help } from '@material-ui/icons'
import React from 'react'

const useStyles = makeStyles((theme) =>({
    wrapper: {
        padding: theme.spacing(3)
    },
    title:{
        color: theme.palette.primary.dark,
        textTransform: 'uppercase',
        letterSpacing: '1px',
        display:'flex',
        alignItems:'center'
        
    },
    icon:{
        fontSize: 40
    }
}))

const PublicHelp = (props) =>{
    const classes = useStyles()
    return(
        <div>
            <Paper elevation={3} className={classes.wrapper}>
                <h2 className={classes.title}><Help className={classes.icon}/><span style={{marginLeft:'5px'}}>Nädip tölemeli ?</span></h2>

                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore asperiores, assumenda saepe ipsa ipsam fuga necessitatibus, aliquid voluptatibus ratione eligendi eum autem atque perferendis id!
                </div>
            </Paper>
        </div>
    )
}


export default PublicHelp