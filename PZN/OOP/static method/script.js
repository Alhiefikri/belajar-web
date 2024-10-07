class MAthUtil {
  static sum(...numbers) {
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}

const result = MAthUtil.sum(1, 1, 1, 1, 1);
console.info(result);
