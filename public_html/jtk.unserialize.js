/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    var jtk = window.jtk || {};
    
    jtk.unserialize = function (_string, _equal, _separator, _escape) {
        var i;

        _equal = _equal || "=";
        _separator = _separator || "&";
        _escape = !!_escape;

        var params = _string.split(_separator);
        var result = {};

        jtk.foreach(params, function (index, value) {
            var param = params[i].split(_equal);
            result[index] = param[0];
        });
        return result;
    };

    window.jtk = jtk;
}());