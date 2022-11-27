import quick_sort from "@code/QuickSort";

test("quick-sort", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];

    debugger;
    quick_sort(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);

    const arr2 = [9, 7, 4, 69, 420, 42, 3, 1];
    quick_sort(arr2);
    console.log(arr2);
    expect(arr2).toEqual([1, 3, 4, 7, 9, 42, 69, 420]);
});
