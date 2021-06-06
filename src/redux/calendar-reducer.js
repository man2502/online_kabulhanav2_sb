import axios from "axios"
import { calendarAPI } from "src/api/api"
import { auth, setIsFetching, refreshToken, setIsConnected } from "./profilePage-reducer"
const SET_SCHEDULE = 'SET_SCHEDULE'
const SET_CREDIT_BRONS = 'SET_CREDIT_BRONS'
const SET_CARD_BRONS = 'SET_CARD_BRONS'
const SET_DOCUMENT_BRONS = 'SET_DOCUMENT_BRONS'



const initialState = {
    schedule: [],
    // schedule: [
    //     {
    //         id: 3,
    //         start_time_card: "10:00:00",
    //         end_time_card: "18:00:00",
    //         start_time_credit: "12:00:00",
    //         end_time_credit: "16:00:00",
    //         start_time_document: "13:00:00",
    //         end_time_document: "20:00:00",
    //         start_time_kabulhana: "09:00:00",
    //         end_time_kabulhana: "16:00:00",
    //         day_of_week: 2,
    //         updated_at: "2021-05-09 12:25:27",
    //         created_at: "2021-05-08 18:29:07",
    //         deleted_at: null
    //     },
    //     {
    //         id: 4,
    //         start_time_card: "10:00:00",
    //         end_time_card: "18:00:00",
    //         start_time_credit: "12:00:00",
    //         end_time_credit: "16:00:00",
    //         start_time_document: "13:00:00",
    //         end_time_document: "20:00:00",
    //         start_time_kabulhana: "09:00:00",
    //         end_time_kabulhana: "16:00:00",
    //         day_of_week: 3,
    //         updated_at: "2021-05-09 12:25:27",
    //         created_at: "2021-05-08 18:29:07",
    //         deleted_at: null
    //     },
    //     {
    //         id: 6,
    //         start_time_card: "10:00:00",
    //         end_time_card: "18:00:00",
    //         start_time_credit: "12:00:00",
    //         end_time_credit: "16:00:00",
    //         start_time_document: "13:00:00",
    //         end_time_document: "20:00:00",
    //         start_time_kabulhana: "09:00:00",
    //         end_time_kabulhana: "16:00:00",
    //         day_of_week: 4,
    //         updated_at: "2021-05-09 12:25:27",
    //         created_at: "2021-05-08 18:29:07",
    //         deleted_at: null
    //     },
    //     {
    //         id: 5,
    //         start_time_card: "10:00:00",
    //         end_time_card: "18:00:00",
    //         start_time_credit: "12:00:00",
    //         end_time_credit: "16:00:00",
    //         start_time_document: "13:00:00",
    //         end_time_document: "20:00:00",
    //         start_time_kabulhana: "09:00:00",
    //         end_time_kabulhana: "16:00:00",
    //         day_of_week: 5,
    //         updated_at: "2021-05-09 12:25:27",
    //         created_at: "2021-05-08 18:29:07",
    //         deleted_at: null
    //     },
    //     {
    //         id: 1,
    //         start_time_card: "10:00:00",
    //         end_time_card: "18:00:00",
    //         start_time_credit: "12:00:00",
    //         end_time_credit: "16:00:00",
    //         start_time_document: "13:00:00",
    //         end_time_document: "20:00:00",
    //         start_time_kabulhana: "09:00:00",
    //         end_time_kabulhana: "16:00:00",
    //         day_of_week: 6,
    //         updated_at: "2021-05-09 12:25:27",
    //         created_at: "2021-05-08 18:29:07",
    //         deleted_at: null
    //     },
    // ],
    bron_times_offered_card: [
        // {
        //     date: '2021-05-21 16:00'
        // },
        // {
        //     date: '2021-05-21 10:00'
        // },
        // {
        //     date: '2021-05-25 10:00'
        // },
    ],
    bron_times_offered_credit: [
        // {
        //     date: '2021-05-21 14:00'
        // },
    ],
    bron_times_offered_document: [
        //     {
        //         date: '2021-05-21 15:00'
        //     },
        // ]
    ]
}

const setSchedule = (data) => {
    return { type: SET_SCHEDULE, schedule: data }
}

const setCreditBrons = (creditBrons) => ({ type: SET_CREDIT_BRONS, creditBrons })
const setCardBrons = (cardBrons) => ({ type: SET_CARD_BRONS, cardBrons })
const setDocumentBrons = (documentBrons) => ({ type: SET_DOCUMENT_BRONS, documentBrons })

export default function calendarReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SCHEDULE:
            return {
                ...state,
                schedule: action.schedule
            }
        case SET_CREDIT_BRONS:
            return {
                ...state,
                bron_times_offered_credit: action.creditBrons
            }
        case SET_CARD_BRONS:
            return {
                ...state,
                bron_times_offered_card: action.cardBrons
            }
        case SET_DOCUMENT_BRONS:
            return {
                ...state,
                bron_times_offered_document: action.documentBrons
            }
        default: return state
    }
}


export const setScheduleThunk = () => {
    return async dispatch => {
        try {
            dispatch(setIsFetching(true))
            const response = await calendarAPI.getSchedule()
            // debugger
            if (response.status === 200) {
                dispatch(setSchedule(response.data.schedule))
            }
            dispatch(setIsFetching(false))
        }
        catch (e) {
            if (e.message === 'Network Error') {
                alert('Internet baglanyşygyňyzy barlaň')
                dispatch(setIsConnected(false))
                dispatch(auth(false))
                localStorage.clear()
            }
            else if (e.response) {
                if (e.response.status === 401) {
                    dispatch(refreshToken(e.response.status, '', setScheduleThunk))
                }
            }
        }
    }
}

export const getBronsThunk = () => {
    return async dispatch => {
        try {
            dispatch(setIsFetching(true))
            const response = await calendarAPI.getBrons()
            if (response.status === 200) {
                dispatch(setCardBrons(response.data.bron_times_offered_card.bron_times_offered_card))
                dispatch(setCreditBrons(response.data.bron_times_offered_credit.bron_times_offered_credit))
                dispatch(setDocumentBrons(response.data.bron_times_offered_document.bron_times_offered_document))

            }
            dispatch(setIsFetching(false))
        }
        catch (e) {
            if (e.message === 'Network Error') {
                alert('Internet baglanyşygyňyzy barlaň')
                dispatch(setIsConnected(false))
                dispatch(auth(false))
                localStorage.clear()
                dispatch(setIsFetching(false))
            }
            else if (e.response) {
                if (e.response.status === 401) {
                    dispatch(refreshToken(e.response.status, '', getBronsThunk))
                }
                dispatch(setIsFetching(false))

            }
            else if (axios.isCancel(e)) {
                alert('cansel brons')
            }
            dispatch(setIsFetching(false))
        }
    }
}