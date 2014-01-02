/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function (jtk) {
    var i;
    var jtk = window.jtk || {};
    function apply (self, index, value, func) {
        return func.call(self, [index, value]);
    }
    
    jtk.foreach = function (object, func) {
        if (jtk.isArray(object)) {
            for (i = 0; i < object.length; i++) {
                apply(object[i], i, object[i], func);
            }
        } else if (jtk.isObject(object)) {
            for (i in object) {
                if (object.hasOwnProperty(i))
                apply(object[i], i, object[i], func);
            }
        }
    }
    window.jtk = jtk;
}());