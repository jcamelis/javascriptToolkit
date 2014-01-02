/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var jtk = window.jtk || {};
    
    jtk.serialize = function (_object, _equal, _separator, _escape) {
        _equal = _equal || "=";
        _separator = _separator || "&";
        _escape = !!_escape;

        var result = [];

        jtk.foreach(_object, function(index, value) {
            var pair = [index, value].join(_equal);
            result.push(pair);
        });
        return result.join(_separator);
    }

    window.jtk = jtk;
}());