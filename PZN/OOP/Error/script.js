class MAthUtil {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new Error("Total parameter harus lebih dari 0");
    }

    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}

const eror = MAthUtil.sum();
console.info("Ali");

const result = MAthUtil.sum(1, 1, 1, 1, 1);
console.info(result);
