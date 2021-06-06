export default function getCurrentDate (){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var hour = String(today.getHours()).padStart(2, '0')
    var minutes = String(today.getMinutes()).padStart(2, '0')
    return  (yyyy + "-" + mm + "-" + dd + "T" + hour + ":" + minutes)
    
}