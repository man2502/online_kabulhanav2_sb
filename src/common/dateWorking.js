

export const dateWorking = () => {
    const zeroFill = (number, width) => {
        width -= number.toString().length;
        if (width > 0) {
            return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
    
        }
        return number + ""; // always return a string
    }
    return {
        zeroFill: (number, width) => {
            width -= number.toString().length;
            if (width > 0) {
                return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;

            }
            return number + ""; // always return a string
        },
        createDate: (date) => {
            // debugger
            var a = date.getFullYear()
            var b = zeroFill(date.getMonth() + 1, 2)
            var c = zeroFill(date.getDate(), 2)
            return a + '-' + b + '-' + c

        }
    }
}

