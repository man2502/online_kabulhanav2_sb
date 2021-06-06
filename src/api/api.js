import * as axios from "axios"
import { dateWorking } from "src/common/dateWorking"


const instanceAxios = axios.create({
    // baseURL: ",
    baseURL: "https://online.turkmenturkbank.com.tm/api",
    timeout:10000,
    header: {
        'Access-Control-Allow-Origin': '*',
    }
})


export const authAPI = {
    async postRefreshToken(ttb_refresh_token){
        return await instanceAxios.post('/oauth/token', { refresh_token:ttb_refresh_token, grant_type:'refresh_token' })
    },
    async postLogin(username, password) {
        return await instanceAxios.post('/oauth/token', { username, password })
    },
    async postRegister(data) {
        return await instanceAxios.post('/register', { username: data.username, password: data.password, c_password: data.password, name: data.user_name, surname: data.user_surname, phone: delFirst(data.user_phone), email: data.email })

    },
    async postLogout() {
        return await instanceAxios.post('/logout', {}, { headers: { Authorization: `Bearer ${localStorage.getItem('ttbToken')}` } })
    },
    async postResetEmail(data) {
        return await instanceAxios.post('/password/email', { email: data.reset_email })
    },
    async postResetPasswordOut(data) {
        return await instanceAxios.post('/password/reset', { email: data.email, password: data.password, password_confirmation: data.password_repeat, token: data.token })

    },
    async postChangePassword(data) {
        return await instanceAxios.post('/new-password', { old_password: data.old_password, new_password: data.password, c_password: data.password_repeat }, { headers: { Authorization: `Bearer ${localStorage.getItem('ttbToken')}` } })
    }

}

export const userDataAPI = {
    async postFeedBack(data) {
        return await instanceAxios.post('/org/feedback', { type: data.type, content: data.content }, { headers: { Authorization: `Bearer ${localStorage.getItem('ttbToken')}` } })
    },
    async postReception(data) {
        return await instanceAxios.post('/org/reception', { section_id: data.type, why: data.why, meet_time: data.date }, { headers: { Authorization: `Bearer ${localStorage.getItem('ttbToken')}` } })
    },
    async getUserData() {

        return await instanceAxios.get('/org', { headers: { Authorization: `Bearer ${localStorage.getItem('ttbToken')}` } })


    },
}


export const calendarAPI = {
    async getSchedule(){
        return await instanceAxios.get('/org/schedule',{ headers: { Authorization: `Bearer ${localStorage.getItem('ttbToken')}` } })
    },
    async getBrons(){
        return await instanceAxios.get('/org/schedule/brons',{ headers: { Authorization: `Bearer ${localStorage.getItem('ttbToken')}` } })
    }
}

const delFirst = (el) => {
    var s = '';
    for (var i = 0; i < el.length; ++i) {

        if (el[i] !== ' ' && el[i] !== '(' && el[i] !== ')' && el[i] !== '+' && el[i] !== '-') {
            s = s + el[i]
        }

    }

    // console.log(s)
    return s

}


export const documentAPI = {
    async postDocData(data_total) {
        var data = data_total.data
        var path = data_total.path
        // debugger
        if (!!data && !!path) {
            
            try {
                if (path === '/org/offer-credit') {
                    return await instanceAxios.post(path, {
                        docMode: data.docMode, name: data.name, surname: data.surname, thirdName: data.thirdName, passport:
                        data.passport.toUpperCase(), address: data.address, workName: data.workName, salary: data.salary, amount_credit:data.credit,
                        passport_given_date: dateWorking().createDate(data.passportDate), passport_given_place: data.passportGiven, work_expirience: data.experience, birth_date: dateWorking().createDate(data.birthDay),
                        phone: delFirst(data.phone), home_phone: data.homePhone, workPosition: data.workPosition,prepared_time: dateWorking().createDate(data.preparedDate)+" "+data.preparedTime+":00"
                    }, { headers: { Authorization: `Bearer ${localStorage.getItem('ttbToken')}` } })
                    
                }
                else if (path === '/org/offer-card') {
                    return await instanceAxios.post(path, { docMode: data.docMode, name: data.name, surname: data.surname, thirdName: data.thirdName, 
                        passport: data.passport.toUpperCase() ,
                        address: data.address, 
                        passport_given_date:dateWorking().createDate(data.passportDate), 
                        passport_given_place: data.passportGiven,phone: delFirst(data.phone), 
                        home_phone: data.homePhone, birth_date: dateWorking().createDate(data.birthDay),
                        is_hurry:data.is_hurry, 
                        will_delivered:data.will_delivered,
                        branch_id:data.branch_id,
                        nationality_tm:data.nationality==='true',
                        nationality_other: data.nationality!=='true',
                        nationality:data.nationality!=='true'?data.nationality:'turkmen',
                        birth_place:data.birthPlace,
                        prepared_time: dateWorking().createDate(data.preparedDate)+" "+data.preparedTime+":00",
                        name_latin:data.nameLatin,
                        surname_latin:data.surnameLatin,
                        note:data.note,
                        code_word_to_define: data.secretWord,
                        gender:data.gender,
                        message:data.message
                    }, 
                        { headers: { Authorization: `Bearer ${localStorage.getItem('ttbToken')}` } })
                    
                }
                else if (path === '/org/offer-document') {
                    return await instanceAxios.post(path, { docMode: data.docMode,is_bussinessman:data.is_bussinessman, is_hurry:data.isHurry, name: data.name, surname: data.surname, thirdName: data.thirdName, passport: data.passport.toUpperCase(),
                        address: data.address, passport_given_date:dateWorking().createDate(data.passportDate), passport_given_place: data.passportGiven,phone: delFirst(data.phone), home_phone: data.homePhone, birth_date: dateWorking().createDate(data.birthDay),
                        prepared_time: dateWorking().createDate(data.preparedDate)+" "+data.preparedTime+":00"
                    }, { headers: { Authorization: `Bearer ${localStorage.getItem('ttbToken')}` } })
                    
                }
            }
            catch (e) {

            }

        }
    }
}


