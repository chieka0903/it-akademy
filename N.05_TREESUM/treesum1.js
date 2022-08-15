const arr = [ 5, 7,
    [ 4, [2], 8, [1,3], 2 ],
    [ 9, [] ],
    1, 8
 ];
 const treeSum = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
       sum += Array.isArray(arr[i]) ? treeSum(arr[i]) :
       arr[i];
    };
    return sum;
 };
 console.log(treeSum(arr));