export default function onlyDate (fulldate) {
        let s = ''
        for (var i = 0; i < 10; i++) {
            s = s + fulldate[i]
        }
        return s
    }
