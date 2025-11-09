// “Hãy đếm và in ra có bao nhiêu cặp số từ 1 tới 100 chia hết cho 17”

function findPairsDivisibleBy17() {
  let count = 0;

  for (let i = 1; i <= 100; i++) {
    for (let j = i + 1; j <= 100; j++) {
      const sum = i + j;
      if (sum % 17 === 0) {
        console.log(`(${i}, ${j}) = ${sum}`);
        count++;
      }
    }
  }

  console.log(`\nTổng cộng: ${count} cặp`);
}

findPairsDivisibleBy17();