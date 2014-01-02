/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function (jtk, undefined) {

    function isType (object, type) {
        return typeof object === type;
    }

    function isObjectType (object, type) {
        return Object.prototype.toString.call(object) === '[object ' + type + ']';
    }
    
    var types = {
        isNumber: function (_number) {
            return isType(_number, "number");
        },
        isFunction: function (_function) {
            return isType(_function, "function");
        },
        isString: function (string) {
            return isType(string, "string");
        },
        isBoolean: function (_boolean) {
            return isType(_boolean, "boolean");
        },
        isUndefined: function (object) {
            return object === undefined;
        },
        isDefined: function (object) {
            return !types.isUndefined(object);
        },
        isObject: function (object) {
            return object !== null && isType(object, 'object');
        },
        isDate: function (_date) {
            return isObjectType(_date, "Date");
        },
        isArray: function (_array) {
            return isObjectType(_array, "Array");
        },
        isRegExp: function (_regExp) {
            return isObjectType(_regExp, "RegExp");
        },
        isFile: function (_file) {
            return isObjectType(_file, "File");
        },
        isPlainObject: function (_object) {
            return isObjectType(_object, "Object");
        }
    };

    jtk.merge(jtk, types);

}(window.jtk));