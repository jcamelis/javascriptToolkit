/* 
 * Part of this algorithm was taken and modified from MDN examples https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * 
 * 
 */
jtk.random = function (min, max) {
    var random = Math.random;
    
    function getRandom() {
        return Math.random();
    }

    // Returns a random number between min and max
    function getRandomArbitrary(min, max, add) {
        add = add || 0;
        return getRandom() * (max - min + add) + min;
    }

    // Returns a random integer between min and max
    // Using Math.round() will give you a non-uniform distribution!
    function getRandomInt(min, max, add) {
        add = add || 1;
        return Math.floor(getRandomArbitrary(min, max, add));
    }
    
    function getRandomString (charset, _length) {
        if (!_length) {
            return '';
        } else {
            var position = getRandomInt(0, charset.length, 0);
            return charset.substring(position, position + 1) + getRandomString(charset, _length - 1);
        }
    }
    
    if (jtk.isNumber(min) && jtk.isNumber(max) && min < max) {
        return getRandomInt(min, max);
    } else if (jtk.isString(min)) {
        return getRandomString (min, max || 1);
    }
};