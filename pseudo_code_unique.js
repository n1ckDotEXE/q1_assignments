const uniq = function (array) {
	let result = [];

	each(array, function (element) {
		if (!result.includes(element)) {
			result.push(element);
		}
	});
	return result;
};

1. pass in array parameter into uniq
2. create empty array "result"
3. for each item in array, run function
4. if doesn't include element, push into array
5. repeat for each item
6. return result array
