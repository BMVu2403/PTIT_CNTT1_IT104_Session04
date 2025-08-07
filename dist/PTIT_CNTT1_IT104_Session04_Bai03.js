"use strict";
function introduceStudent(student) {
    console.log(`Tên tôi là ${student.name}, tôi ${student.age} tuổi và email của tôi là ${student.email}.`);
}
const studentA = {
    name: "Nguyễn Văn A",
    age: 20,
    email: "nguyenvana@example.com"
};
introduceStudent(studentA);
