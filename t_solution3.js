// Tests
var test3 = 0;

assert(compareArray([2,4,6], solution3([1,2,3], '(a)=>a*2')), 'Failed solution2 test'+(test3++) + ' result is ' + solution3([1,2,3], '(a)=>a*2'));
assert(compareArray([3,4,5], solution3([1,2,3], '(a)=>a+2')), 'Failed solution2 test'+(test3++) + ' result is ' + solution3([1,2,3], '(a)=>a+2'));
assert(compareArray([1,1,1], solution3([1,2,3], '()=>1')), 'Failed solution2 test'+(test3++) + ' result is ' + solution3([1,2,3], '()=>1'));

console.log("solution3() tests success!");
