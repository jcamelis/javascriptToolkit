
jtk.copy = function (origin) {
    var destination;

    if (jtk.isArray(origin)) {
        destination = [];
        jtk.foreach(origin, function(index, value) {
            destination.push(jtk.copy(value));
        });
        return destination;
    }
    
    if (jtk.isPlainObject(origin)) {
        destination = {};
        jtk.foreach(origin, function(index, value) {
            destination[index] = jtk.copy(value);
        });
        return destination;
    }

    if (jtk.isDate(origin)) {
        return new Date(origin.getTime());
    }
    return origin;
}