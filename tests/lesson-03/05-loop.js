// 1. Tính tổng từ 1 đến 100.
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
    // sum += i;
}
console.log(sum);

// 2. In bảng cửu chương từ 2 đến 9.
// 2 -> 9
// 2x 1, 2x2, ..., 2 x 10
for (let i = 2; i <= 9; i++) {
    console.log(`===Bang cuu chuong cu so ${i}===`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i}x${j}=${i * j}`);
    }
    console.log();
}

// 3. Tạo một mảng chứa các số lẻ từ 1 đến 99.
// Cach 1: Kiem tra so le thi moi cong vao tong
let tongLe = 0;
for (let i = 1; i <= 99; i++) {
    if (i % 2 !== 0) {
        tongLe += i;
    }
}
console.log("Tong le: ", tongLe);

// Cach 2: nhảy cóc chỉ nhảy vào số lẻ (tối ưu hơn)
let tongLe2 = 0;
for (let i = 1; i <= 99; i += 2) {
    tongLe2 += i;
}
console.log("Tong le: ", tongLe2);

// 4. In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ:
// user1@example.com, user2@example.com, ..., user10@example.com).
for (let i = 1; i <= 10; i++) {
    console.log(`user${i}@example.com`);
}

// 5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và
// in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau:
// [{“month”: 2, “total”: 100}, {“month”: 2, “total”: 100}];
let tongDoanhThu = 0;
const mangDoanhthu = [
    { month: 2, total: 100 },
    { month: 3, total: 200 },
    { month: 4, total: 250 },
]
for (let i = 0; i < mangDoanhthu.length; i++) {
    tongDoanhThu += mangDoanhthu[i].total;
}
console.log(tongDoanhThu);