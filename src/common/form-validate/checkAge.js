export default function checkAge(birthDay) {
    
    var a = birthDay
    var b = new Date()
    var c = (b-a)/1000/60/60/24/365 
    
    // console.log('b-a', b-a)
    if ((c >= 20)&&(c<=60)){
        return true
    }else return false
}