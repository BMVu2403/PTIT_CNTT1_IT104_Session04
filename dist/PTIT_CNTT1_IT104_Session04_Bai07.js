"use strict";
function processInput(input) {
    if (typeof input === "string") {
        // Kiểm tra nếu chuỗi chỉ chứa số (dùng regex)
        if (/^\d+$/.test(input)) {
            const num = Number(input);
            console.log(num * num); // In ra bình phương
        }
        else {
            // Đếm số ký tự chữ cái (a-z, A-Z)
            const letterCount = (input.match(/[a-zA-Z]/g) || []).length;
            console.log(`${letterCount} ký tự chữ cái`);
        }
    }
    else if (typeof input === "number") {
        if (isPrime(input)) {
            console.log("Là số nguyên tố");
        }
        else {
            console.log("Không phải số nguyên tố");
        }
    }
    else if (typeof input === "boolean") {
        if (input) {
            console.log("Giá trị là true - tiến hành xử lý");
        }
        else {
            console.log("Giá trị là false - dừng xử lý");
        }
    }
}
// Hàm kiểm tra số nguyên tố
function isPrime(n) {
    if (n < 2)
        return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}
processInput("123"); // output: 15129
processInput("abc123!"); // output: 3 ký tự chữ cái
processInput(7); // output: Là số nguyên tố
processInput(10); // output: Không phải số nguyên tố
processInput(true); // output: Giá trị là true - tiến hành xử lý
processInput(false); // output: Giá trị là false - dừng xử lý
