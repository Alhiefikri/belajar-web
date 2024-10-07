# README: Iterator dan Iterable dalam Pemrograman JavaScript

## Pengertian

### Iterable

**Iterable** adalah objek yang dapat dilalui satu per satu. Dalam JavaScript, objek yang bisa diiterasi meliputi array, string, dan objek dengan metode `Symbol.iterator`.

### Iterator

**Iterator** adalah objek yang memiliki metode `next()`, yang mengembalikan objek dengan dua properti: `value` (nilai saat ini) dan `done` (boolean yang menandakan apakah iterasi telah selesai).

## Kenapa Menggunakan Iterator dan Iterable?

1. **Keterbacaan Kode**: Kode menjadi lebih bersih dan mudah dibaca dengan menggunakan loop seperti `for...of`.

2. **Fleksibilitas**: Memungkinkan pengembang untuk mendefinisikan logika iterasi yang kompleks.

3. **Kinerja**: Dapat menghemat memori dengan menghasilkan data saat dibutuhkan.

## Kapan Metode Ini Digunakan?

- Ketika Anda perlu membuat koleksi data yang dapat diiterasi.
- Dalam situasi di mana Anda ingin membatasi akses ke elemen dalam koleksi.
- Dalam pemrograman fungsional.

## Contoh Kasus Penggunaan dalam Proyek Nyata

1. **Pembuatan Koleksi Data**: Membuat koleksi angka dari 1 hingga N secara dinamis.
2. **Stream Data**: Mengelola aliran data tanpa memuat semuanya ke memori sekaligus.
3. **Animasi dan UI**: Memperbarui elemen UI secara bertahap.

## Analogi Sederhana

Bayangkan Anda sedang membaca buku. Buku itu adalah iterable—Anda membacanya halaman demi halaman. Saat membuka halaman tertentu, Anda menggunakan iterator—setiap kali menekan tombol "next", Anda berpindah ke halaman selanjutnya.

## Contoh Kode

Berikut adalah contoh implementasi iterable dan iterator dalam JavaScript, dengan penjelasan fungsi di setiap bagian:

```javascript
// Kelas untuk menyimpan hasil dari iterasi
class CounterIteratorResult {
  constructor(value, done) {
    this.value = value; // Nilai saat ini dari iterator
    this.done = done; // Menandakan apakah iterasi telah selesai
  }
}

// Kelas untuk iterator itu sendiri
class CounterIterator {
  constructor(value, max) {
    this.value = value; // Nilai awal
    this.max = max; // Nilai maksimum untuk iterasi
  }

  // Metode untuk mengambil nilai berikutnya
  next() {
    try {
      if (this.value > this.max) {
        return new CounterIteratorResult(this.value, true); // Iterasi selesai
      } else {
        return new CounterIteratorResult(this.value, false); // Kembalikan nilai saat ini
      }
    } finally {
      this.value++; // Increment nilai untuk iterasi berikutnya
    }
  }
}

// Kelas yang dapat diiterasi
class Counter {
  constructor(value, max) {
    this.value = value; // Nilai awal
    this.max = max; // Nilai maksimum untuk iterasi
  }

  // Metode untuk mengembalikan iterator
  [Symbol.iterator]() {
    return new CounterIterator(this.value, this.max); // Kembalikan instance dari CounterIterator
  }
}

// Membuat instance dari Counter
const counter = new Counter(1, 10);

// Menggunakan for...of untuk mengiterasi nilai
for (const value of counter) {
  console.info(value); // Tampilkan nilai saat ini di konsol
}
```

## Penjelasan Kode

- **CounterIteratorResult**: Objek yang menyimpan hasil dari iterasi.
- **CounterIterator**: Mengimplementasikan logika untuk iterasi, menyimpan nilai saat ini dan batas maksimum. Metode `next()` digunakan untuk mengambil nilai berikutnya.
- **Counter**: Objek yang dapat diiterasi, mengimplementasikan metode `[Symbol.iterator]`.
- **Penggunaan**: Dengan `for...of`, Anda dapat mengiterasi nilai dari `counter` dan mencetaknya ke konsol.

Semoga penjelasan ini membantu Anda memahami konsep iterator dan iterable!
