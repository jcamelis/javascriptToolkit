

module("jtk.foreach.js");
test("foreach with Array", function () {

    var expected = ['foo1', 'foo2', 'foo3'];
    
    jtk.foreach(expected, function (index, value) {
        equal(expected[index], value, "Index " + index + " is Ok.");
    });

});
test("foreach with Object", function () {

    var expected = {
        foo1: "var1",
        foo2: "var2",
        foo3: "var3",
    }
    
    jtk.foreach(expected, function (index, value) {
        equal(expected[index], value, "Index " + index + " is Ok.");
    });

});
