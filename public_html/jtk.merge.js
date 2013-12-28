/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var jtk = window.jtk || {};
    
    jtk.merge = function (object1, object2) {
        var prop;
        for (prop in object2) {
            if (object2.hasOwnProperty(prop)) {
                object1[prop] = object2[prop];
            }
        }
        return object1;
    };
    
    window.jtk = jtk;
}());