const { mergesort } = require("./merge-sort")

test("Returns a correctly sorted array from random input", () => {
    const input = [9, 0, 3, 1, 10];
    const sorted = mergeSort(input, (a, b) => a > b); 
    expect(sorted).toEqual([0, 1, 3, 9, 10]);
})

test("Returns a correctly sorted array from inversely sorted array", () => {
    const input = [9, 8, 7, 1];
    const sorted = mergeSort(input, (a, b) => a > b); 
    expect(sorted).toEqual([1, 7, 8, 9]);
})

test("Returns a correctly sorted array from sorted array", () => {
    const input = [1, 2, 4, 8];
    const sorted = mergeSort(input, (a, b) => a > b); 
    expect(sorted).toEqual([1, 2, 4, 8]);
})

test("Returns a correctly sorted array for one element", () => {
    const input = [1];
    const sorted = mergeSort(input, (a, b) => a > b); 
    expect(sorted).toEqual([1]);
})

test("Returns a correctly sorted array for empty array", () => {
    const input = [];
    const sorted = mergeSort(input, (a, b) => a > b); 
    expect(sorted).toEqual([]);
})

test("Returns a correctly sorted array for array of strings", () => {
    const input = ["d", "c", "a"];
    const sorted = mergeSort(input, (a, b) => a > b); 
    expect(sorted).toEqual(["a", "c", "d"]);
})

