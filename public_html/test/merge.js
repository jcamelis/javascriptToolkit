module("jtk.merge.js");
test("Simple Merge", function () {
    var _function = function () {
        return true;
    };
    
	var origin = {
        _number: 9,
        _boolean: true,
        _object: {
            foo1: "var1"
        }
    }
	
    var actual = {
        _string: "var1",
        _function: _function
    }
    
    
    var expected = {
        _string: "var1",
        _function: _function,
        _number: 9,
        _boolean: true,
        _object: {
            foo1: "var1"
        }
    }
    
    actual = jtk.merge(origin, actual);
    
    for (var i in expected) {
        if (expected.hasOwnProperty(i)) {
            deepEqual(actual[i], expected[i], "Merged sussesfully");
        }
    }
    
});

test("Merge and overide origin", function () {
    var _function = function () {
        return true;
    };
    var _function2 = function () {
        return false;
    };
    
	var origin = {
        _string: "var1",
        _function: _function,
        _number: 9,
        _boolean: true,
        _object: {
            foo1: "var1"
        }
    }
	
    var actual = {
        _string: "var2",
        _function: _function2,
        _number: 8,
        _boolean: false,
        _object: {
            foo1: "var2"
        }
    }
    
    
    var expected = {
        _string: "var2",
        _function: _function2,
        _number: 8,
        _boolean: false,
        _object: {
            foo1: "var2"
        }
    }
    
    actual = jtk.merge(origin, actual);
    
    for (var i in expected) {
        if (expected.hasOwnProperty(i)) {
            deepEqual(actual[i], expected[i], "Merged sussesfully");
        }
    }
    
});

