module("jtk.merge.js");
test("Copy 1", function () {
    var _function = function () {
        return true;
    };
    
	var origin = {
        _string: "var1",
        _function: _function,
        _number: 9,
        _boolean: true,
        _object: {
            foo1: "var1"
        },
        _date: (new Date())
    };
	
    var expected = {
        _string: "var1",
        _function: _function,
        _number: 9,
        _boolean: true,
        _object: {
            foo1: "var1"
        },
        _date: (new Date())
    };
    
    
    var actual = jtk.copy(origin);
    
    origin = null;
    
    deepEqual(actual, expected, "Copied sussesfully");
});

test("Copy 2", function () {
    var _function = function () {
        return true;
    };
    
	var origin = {
        _string: "var1",
        _function: _function,
        _number: 9,
        _boolean: true,
        _object: {
            foo1: "var1"
        }
    };
	
    var expected = {
        _string: "var1",
        _function: _function,
        _number: 9,
        _boolean: true,
        _object: {
            foo1: "var1"
        }
    };

    var actual = jtk.copy(origin);
    
    origin._string = null;
    origin._function = null;
    origin._number = null;
    origin._boolean = null;
    origin._object = null;
    
    deepEqual(actual, expected, "Copied sussesfully");
});
