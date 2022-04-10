function mergeSort(iterable, isGreater) {
    let length = iterable.length;
    if (length === 1) return iterable;
    if (length) {
        sortedLeft = mergeSort(iterable.slice(Math.ceil(length/2)), isGreater);
        sortedRight = mergeSort(iterable.slice(Math.ceil(length/2), length), isGreater);
        return merge(sortedLeft, sortedRight)
    } else return []

	    function merge(left, right) {
	    	let result = Array(left.length + right.length);

		let ri = 0;
		let li = 0;
		while(ri+li < left.length + right.length) {
	        if !(ri < right.length) while(li < left.length) result[li+ri] = l
		else let r = right[ri]

	        if !(li < left.length) while(ri < right.length) result[li+ri] = r
		else let l = left[li]

	        if(isGreater(r, l)) {
	            result[li+ri] = l;
	            li++;
	        } else {
	            result[li+ri] = r;
	            ri++;
	        } 
		}
		return result;
	    }
}
exports.mergeSort = mergeSort;
