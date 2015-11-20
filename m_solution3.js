/**
returns an array of results. So, it acts similar to the native JS Array map method. 
But unlike the native method, your solution should accept a string as an F argument 
in the following simplified arrow function format:
A = array 
F - expression as string
*/
function solution3(A, F)
{
  var arg = /(\(?)([a-z,\,]*)(\)?)(?=\=>)/i.exec(F);
  var func = /(\=>)(.+)/i.exec(F);
  var myFn = new Function(arg[2], 'return (' + func[2] + ');');
  return A.map(myFn);
}

function compareArray(A, B)
{
	return (JSON.stringify(A.sort()) === JSON.stringify(B.sort()))
}
