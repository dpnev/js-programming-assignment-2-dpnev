// Tests
var test1 = 0;

assert(7 === solution1([1, 2, 3, 4, 5, 5, 6, 6, 8]), 'Failed solution1 test' + (test1++) + ' result is ' + solution1([1, 2, 3, 4, 5, 5, 6, 6, 8]));
assert(2 === solution1([-1, -2, -3, 1]), 'Failed solution1 test' + (test1++) + ' result is ' + solution1([-1, -2, -3, 1]));
assert(2 === solution1([1]), 'Failed solution1 test' + (test1++) + ' result is ' + solution1([1]));
assert(1 === solution1([-2]), 'Failed solution1 test' + (test1++) + ' result is ' + solution1([-2]));
assert(1 === solution1([-1]), 'Failed solution1 test' + (test1++) + ' result is ' + solution1([-1]));
assert(1 === solution1([0]), 'Failed solution1 test' + (test1++) + ' result is ' + solution1([0]));
assert(1 === solution1([2]), 'Failed solution1 test' + (test1++) + ' result is ' + solution1([2]));
assert(1 === solution1([-1, -2, -3]), 'Failed solution1 test' + (test1++) + ' result is ' + solution1([-1, -2, -3]));
assert(1 === solution1([10, 9, 5]), 'Failed solution1 test' + (test1++) + ' result is ' + solution1([10, 9, 5]));
assert(2 === solution1([1]), 'Failed solution1 test' + (test1++) + ' result is ' + solution1([1]));
assert(3 === solution1([1, 5, 4, 2]), 'test'+test1++);
assert(1 === solution1([2]), 'test'+test1++);
assert(1 === solution1([-2, -3]), 'Failed solution1 test' + (test1++) + ' result is ' + solution1([-2, -3]));
assert(1 === solution1([-13]), 'Failed solution1 test' + (test1++) + ' result is ' + solution1([-13]));

console.log("solution1() tests success!");
