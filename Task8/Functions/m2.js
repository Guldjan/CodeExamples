exports.printProperties = function (object) {
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            console.log(key + " : " + object[key]);
        }
    }
}