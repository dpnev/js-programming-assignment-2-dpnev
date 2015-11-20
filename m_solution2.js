/**
Returns a boolean indicating if the string is bracket balanced
	s - a string with brackets [] () {}
*/
function solution2(s)
{
	var stack = new Array();
	var c1 = new String;
	var c2 = new String;

	for(i = 0; i < s.length; i++)
	{
		c1 = s.charAt(i);
		if (c1 === '(')
		{
			stack.push(')');
		}
		else if (c1 === '[')
		{
			stack.push(']');
		}
		else if (c1 === '{')
		{
			stack.push('}');
		}
		else if (c1 === ')' || c1 === ']' || c1 === '}')
		{
			var c2 = stack.pop();
			if (c1 !== c2)
			{
				return false;
			}
		}
	}
	
	return stack.length === 0;
}
