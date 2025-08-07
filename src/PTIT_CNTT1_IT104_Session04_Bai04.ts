function handleUnionType(value: string | number): void {
  if (typeof value === "string") {
    console.log(`${value.length} ký tự`);
  } else if (typeof value === "number") {
    const result = value % 2 === 0 ? "Đây là số chẵn" : "Đây là số lẻ";
    console.log(result);
  } else {
    console.log("Kiểu dữ liệu không hợp lệ.");
  }
}
