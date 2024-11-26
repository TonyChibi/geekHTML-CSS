console.log("yo");
let nums = [1, 2, 3, 4];
let n = nums.length;
let start = 1;
let end = 1;
let answ = new Array(n);
answ.fill(1);
console.log(nums);
for (i = 1; i < n; i++) {
    end *= nums[n - i];
    start *= nums[i - 1];
    answ[i] = answ[i] * start;
    answ[n - i - 1] *= end;
    console.log(i + ":\t", answ[i], answ[n - 1 - i], "\n", start, "-\t", end)


}
console.log(null !== 0);
