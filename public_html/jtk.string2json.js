/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var jtk = window.jtk || {};
    
    jtk.string2json = (function () {
        if (JSON && JSON.parse) {
            return JSON.parse;
        } else {
            return function (_string) {
                try {
                    return eval("(" + _string + ")");
                } catch (e) {

                }
            };
        }
    }());

    window.jtk = jtk;
}());