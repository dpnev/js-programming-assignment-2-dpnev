// Tests
var test2 = 0;

assert(true === solution2("[]"), 'Failed solution2 test'+(test2++) + ' result is ' +solution2("[]"));
assert(true === solution2(""), 'Failed solution2 test'+(test2++) + ' result is ' + solution2(""));
assert(true === solution2("[()]"), 'Failed solution2 test'+ (test2++) + ' result is ' + solution2("[()]"));
assert(true === solution2("[](){}"), 'Failed solution2 test'+ (test2++) + ' result is ' + solution2("[](){}"));

assert(false === solution2("]["), 'Failed solution2 test'+ (test2++) + ' result is ' + solution2("]["));
assert(false === solution2("[(])"), 'Failed solution2 test'+ (test2++) + ' result is ' + solution2("[(])"));

console.log("solution2() tests success!");
