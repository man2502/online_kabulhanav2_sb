import React from 'react'
import { Loading } from 'src/App'
import Actions from '../docsPage/Room/Actions/Actions'
// import { Jumbotrons } from '../base'
import s from './MainPage.module.css'
const Jumbotrons = React.lazy(() => import('./../base/jumbotrons/Jumbotrons'))


const MainPage = (props) => {
    const newData = () => { return (props.offeredDocData.concat(props.offeredCardData)) }
    const newDataLast  = newData().concat(props.offeredCreditData) 
    newDataLast.sort((a,b)=>{return new Date(b.date) - new Date(a.date)})
    
    var counter = 0
    const mainArr =  newDataLast.map((i) => {
        counter = counter + 1
        return {
            ...i,
            orderId: counter
        }
    })


    return (

        <React.Suspense fallback={<Loading />}>
            {props.setIsFetching && <Loading />}
            <div className={s.wrapper}>
                <Jumbotrons {...props} />

                <Actions data={mainArr} noDoc={'Tabşyrylan resminamalar ýok'} />
            </div>
        </React.Suspense>
    )
}


export default React.memo(MainPage)