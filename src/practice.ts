export{};
// Khai báo kiểu dữ liệu

type Subject = {
  subjectName: string;
  score: number | string; // Kiểu dữ liệu
};

type Student = {
  id: number;
  name: string;
  age: number | string;
  subjects: Subject[];
};

const students: Student[] = [];

// hàm thêm sinh viên
const createStudent = (student: Student): void => {
  students.push(student);
};

// Hàm cập nhật sinh viên
const updateStudent = (id: number, newStudent: Student): void => {
  // Tìm kiếm sinh viên theo id
  const findIndexStudent = students.findIndex((st) => st.id === id);

  if (findIndexStudent === -1) {
    console.log("Không tìm thấy sinh viên");
  } else {
    // Cập nhật thông tin cho từng trường trong đối tượng Student
    students[findIndexStudent].name = newStudent.name;
    students[findIndexStudent].age = newStudent.age;
    students[findIndexStudent].subjects = newStudent.subjects;
  }
};

// Hàm xóa sinh viên
const deleteStudent = (id: number): void => {
  // Lấy ra vị trí của sinh viên cần xóa
  const findIndexStudent = students.findIndex((st) => st.id === id);

  if (findIndexStudent != -1) {
    students.splice(findIndexStudent, 1);
  } else {
    console.log("Không tìm thấy sinh viên");
  }
};

// Áp dụng Type Guard để kiểm tra kiểu dữ liệu
const isNumber = (score: string | number) => {
  return typeof score === "number";
};

// Chuyển đổi điểm từ chuỗi thành số
const converScoreToNumber = (score: string): number => {
  const scoreMap: { [key: string]: number } = {
    A: 10,
    B: 8,
    C: 6,
    D: 4,
  };

  // Trả về kết quả sau khi chuyển đổi
  return scoreMap[score];
};

// Tính điểm trung bình của sinh viên
const caculaAvg = (student: Student) => {
  const total = student.subjects.reduce((sum, subject) => {
    if (isNumber(subject.score)) {
      // Tính tổng
      return sum + subject.score;
    } else {
      // Gọi hàm convert
      return sum + converScoreToNumber(subject.score);
    }
  }, 0);

  // Tinhs điểm trung bình
  return total / student.subjects.length;
};

// Xếp loại sinh viên
const ranking = (student: Student) => {
  if (caculaAvg(student) >= 8.5) {
    console.log("Học lực giỏi");
  } else if (caculaAvg(student) >= 6.5 && caculaAvg(student) < 8.5) {
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