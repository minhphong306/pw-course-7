function createCharacters() {

    // - Khai báo mảng các object: characters có các thuộc tính: name, level, health.
    const characters = [
        { name: "Nhân", level: "2", health: "60" },
        { name: "Hòa", level: "3", health: "700" },
        { name: "Hiếu", level: "1", health: "800" },
        { name: "Khánh", level: "4", health: "90" },
    ];

    // console.log(characters);

    // - Sử dụng hàm map để tạo ra mảng mới: charactersPowerUp:
    const charactersPowerUp = characters.map((character) => {
        return {
            name: character.name.toUpperCase(), // - thuộc tính name: UPPERCASE của name gốc
            level: character.level * 2,         // - level: x2 của level gốc
            health: character.health * 3        // - health : x3 của health gốc
        };
    });

    // console.log(charactersPowerUp)

    const possibleWinners = charactersPowerUp.filter((character) => character.health > 1000);

    // console.log("Người Chiến Thắng:", possibleWinners); // - dùng hàm filter để lọc ra các phần tử có chỉ số health > 1000
}

createCharacters();

// Nhận vào tham số: players là mảng các object: [{name: "Mario", score: 1000}, ...]
const player = [
    { name: "Nhân", score: "500" },
    { name: "Hòa", score: "600" },
    { name: "Trung", score: "700" },
    { name: "Hiếu", score: "800" },
    { name: "Khánh", score: "900" },
];

function printLeaderboard(player) {
    const sortPlayers = player.sort((a, b) => b.score - a.score);
    sortPlayers.forEach((player, index) => {
        let medal = "";

        // Thêm huy chương cho 3 vị trí đầu
        if (index === 0) {
            medal = "🥇";
        }
        else if (index === 1) {
            medal = "🥈";
        }
        else if (index === 2) {
            medal = "🥉";
        }
        console.log(`${index + 1}. ${medal} ${player.name} - ${player.score} điểm`);
    });

}

printLeaderboard(player);


