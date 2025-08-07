"use strict";
const scores = [7.5, 8.0, 6.5, 9.0, 5.5, 8.5, 7.0, 6.0, 9.5, 8.0];
const total = scores.reduce((sum, score) => sum + score, 0);
const average = total / scores.length;
console.log("Danh sách điểm:", scores);
console.log("Tổng điểm:", total.toFixed(2));
console.log("Điểm trung bình:", average.toFixed(2));
