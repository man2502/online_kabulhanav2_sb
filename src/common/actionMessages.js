
export default function actionMessages() {
    return {
        required: 'Bu hökmany',
        minLength: function (min) {
            return `Azyndan ${min} simwol`
        },
        maxLength: function (max) {
            return `Maksimum ${max} simwol`
        },
        correctDate:'Senäni dogry giriziň',
        email: 'Email-i dogry giriziň',
        emailValidation: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/    
    }
}



