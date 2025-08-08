"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const students = [];
// hàm thêm sinh viên
const createStudent = (student) => {
    students.push(student);
};
// Hàm cập nhật sinh viên
const updateStudent = (id, newStudent) => {
    // Tìm kiếm sinh viên theo id
    const findIndexStudent = students.findIndex((st) => st.id === id);
    if (findIndexStudent === -1) {
        console.log("Không tìm thấy sinh viên");
    }
    else {
        // Cập nhật thông tin cho từng trường trong đối tượng Student
        students[findIndexStudent].name = newStudent.name;
        students[findIndexStudent].age = newStudent.age;
        students[findIndexStudent].subjects = newStudent.subjects;
    }
};
// Hàm xóa sinh viên
const deleteStudent = (id) => {
    // Lấy ra vị trí của sinh viên cần xóa
    const findIndexStudent = students.findIndex((st) => st.id === id);
    if (findIndexStudent != -1) {
        students.splice(findIndexStudent, 1);
    }
    else {
        console.log("Không tìm thấy sinh viên");
    }
};
// Áp dụng Type Guard để kiểm tra kiểu dữ liệu
const isNumber = (score) => {
    return typeof score === "number";
};
// Chuyển đổi điểm từ chuỗi thành số
const converScoreToNumber = (score) => {
    const scoreMap = {
        A: 10,
        B: 8,
        C: 6,
        D: 4,
    };
    // Trả về kết quả sau khi chuyển đổi
    return scoreMap[score];
};
// Tính điểm trung bình của sinh viên
const caculaAvg = (student) => {
    const total = student.subjects.reduce((sum, subject) => {
        if (isNumber(subject.score)) {
            // Tính tổng
            return sum + subject.score;
        }
        else {
            // Gọi hàm convert
            return sum + converScoreToNumber(subject.score);
        }
    }, 0);
    // Tinhs điểm trung bình
    return total / student.subjects.length;
};
// Xếp loại sinh viên
const ranking = (student) => {
    if (caculaAvg(student) >= 8.5) {
        console.log("Học lực giỏi");
    }
    else if (caculaAvg(student) >= 6.5 && caculaAvg(student) < 8.5) {
        console.log("Học lực khá");
    }
};
// Tạo dữ liệu demo
caculaAvg({
    id: 1,
    name: "Nguyễn văn A",
    age: 21,
    subjects: [
        {
            score: "A",
            subjectName: "HTML",
        },
        {
            score: "B",
            subjectName: "CSS",
        },
    ],
});
