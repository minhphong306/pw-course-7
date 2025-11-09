// - Biến playerName có giá trị là “Mario”.
let playerName = "Mario"
// - Biến currentLives có giá trị là 3.
let currentLives = 3
// - Các hằng số lưu coins theo level: ■ Level 1: 25; ■ Level 2: 30; ■ Level 3: 45;
const coinLevel1 = 25;
const coinLevel2 = 30;
const coinLevel3 = 45;

// - Tính giá trị trung bình coin của 3 level và in ra console.
const average = (coinLevel1 + coinLevel2 + coinLevel3) / 3;
console.log ("Giá trị trung bình coin của 3 levels là:", average);

// - In ra số coin dư khi chia giá trị trung bình cho 3
const remainder = average % 3;
console.log ("Số coin dư khi chia cho 3 là:", remainder);