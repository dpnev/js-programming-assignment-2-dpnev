/**
Returns a minimal positive integer not present in the array.
array A contains valid JavaScript numbers (both positive and negative)
*/
function solution1(a)
{
	assert(Object.prototype.toString.call( a ) === '[object Array]'); 
	
	if (a == undefined || a.length  == 0)
	{
		return 1;
	}
	
	var b = a.sort(sortNumber);
	
	if (b[0] > 1)
	{
		return 1;
	}
	
	var pos = -1;
	for(i = 0; i < b.length; i++)
	{
		//wasPositive |= (b[i] > 0);
		if (pos !== -1 && b[i] - b[i-1] > 1)
		{
			return b[i-1]+1;
		}
		if (pos ===  -1 && b[i] > 0)
		{
			pos = i;
		}
	}
	if (pos === -1)
	{
		return 1;
	}
	return b[pos] === 1 ? 2 : 1;
}

function sortNumber(a,b) {
    return a - b;
}
