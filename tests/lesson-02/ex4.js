const chieuCao = 170;
const soLeChieuCao = chieuCao % 100;

const canNangLyTuong = soLeChieuCao * 9 / 10;
const canToiDa = soLeChieuCao;
const canToiThieu = soLeChieuCao * 8 / 10;

console.log(`Can nang ly tuong: ${canNangLyTuong}, canNangToiDa: ${canToiDa}, can toi thieu: ${canToiThieu}`);