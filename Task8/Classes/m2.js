exports.M2 = class {
     printProperties (object) {
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                console.log(key + " : " + object[key]);
            }
        }
    }
}
//export {M2}