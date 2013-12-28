var _number = 1;
var _string = "";
var _date = new Date();
var _function = function () {return null;};
var _boolean = true;
var _object = {};
var _array = [];

module("jtk.typeof.js");
test("Function", function () {
	
    ok(jtk.isFunction(_function), "Function is a Function.");
	notEqual(jtk.isFunction(_number), true, "Number is not a Function.");
	notEqual(jtk.isFunction(_string), true, "String is not a Function.");
	notEqual(jtk.isFunction(_date), true, "Date is not a Function.");
	notEqual(jtk.isFunction(_boolean), true, "Boolean is not a Function.");
});
test("Number", function () {
	
    ok(jtk.isNumber(_number), "Number is a Number.");
	notEqual(jtk.isNumber(_function), true, "Function is not a Number.");
	notEqual(jtk.isNumber(_string), true, "String is not a Number.");
	notEqual(jtk.isNumber(_date), true, "Date is not a Number.");
	notEqual(jtk.isNumber(_boolean), true, "Boolean is not a Number.");
});
test("String", function () {
	
    ok(jtk.isString(_string), "String is a String.");
	notEqual(jtk.isString(_function), true, "Function is not a String.");
	notEqual(jtk.isString(_number), true, "Number is not a String.");
	notEqual(jtk.isString(_date), true, "Date is not a String.");
	notEqual(jtk.isString(_boolean), true, "Boolean is not a String.");
});
test("Date", function () {
	
    ok(jtk.isDate(_date), "Date is a Date.");
	notEqual(jtk.isDate(_function), true, "Function is not a Date.");
	notEqual(jtk.isDate(_number), true, "Number is not a Date.");
	notEqual(jtk.isDate(_string), true, "String is not a Date.");
	notEqual(jtk.isDate(_boolean), true, "Boolean is not a Date.");
});
test("Boolean", function () {
	
    ok(jtk.isBoolean(_boolean), "Boolean is a Boolean.");
	notEqual(jtk.isBoolean(_function), true, "Function is not a Boolean.");
	notEqual(jtk.isBoolean(_number), true, "Number is not a Boolean.");
	notEqual(jtk.isBoolean(_string), true, "String is not a Boolean.");
	notEqual(jtk.isBoolean(_date), true, "Date is not a Boolean.");
});

