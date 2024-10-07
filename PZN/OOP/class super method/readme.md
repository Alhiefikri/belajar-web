# Penjelasan tentang Super Method di JavaScript (Dengan Analogi)

## Apa itu Super Method?

Super method adalah cara bagi kelas anak (subclass) untuk memanggil metode yang didefinisikan dalam kelas induk (superclass). Dalam JavaScript, Anda menggunakan kata kunci `super` untuk mengakses metode dari kelas induk. Ini berguna ketika Anda ingin mempertahankan fungsionalitas dari kelas induk sambil menambahkan atau mengubah perilaku di kelas anak.

## Analogi Sederhana

Bayangkan Anda memiliki sebuah **mobil** dan **mobil balap**.

- **Mobil** adalah kelas induk (superclass) yang memiliki metode `drive()`, yang mencetak "Mobil berjalan".
- **Mobil Balap** adalah kelas anak (subclass) yang mewarisi dari mobil. Mobil balap juga memiliki metode `drive()`, tetapi ia ingin mencetak "Mobil balap berjalan sangat cepat" setelah menjalankan metode `drive()` dari mobil.

### Dalam Analogi:

- **Mobil**: Kelas induk dengan metode `drive()`.
- **Mobil Balap**: Kelas anak yang memperluas perilaku `drive()` dengan menambahkan kecepatan.

**Di dalam kode**:

```javascript
class Car {
  drive() {
    console.info("Mobil berjalan"); // Metode untuk mobil
  }
}

class RaceCar extends Car {
  drive() {
    super.drive(); // Memanggil metode drive() dari kelas induk
    console.info("Mobil balap berjalan sangat cepat"); // Menambahkan perilaku khusus
  }
}

// Membuat objek dari kelas RaceCar
const myRaceCar = new RaceCar();
myRaceCar.drive(); // Memanggil metode drive() pada objek myRaceCar
```

### Penjelasan Kode

1. **Definisi Kelas Induk**: `class Car` mendefinisikan kelas mobil dengan metode `drive()`, yang mencetak "Mobil berjalan".

2. **Definisi Kelas Anak**:

   - `class RaceCar extends Car` mendefinisikan kelas mobil balap yang mewarisi dari mobil.
   - Metode `drive()` dalam kelas mobil balap memanggil `super.drive()` untuk mengeksekusi metode dari kelas mobil sebelum mencetak "Mobil balap berjalan sangat cepat".

3. **Membuat Objek**:

   - `const myRaceCar = new RaceCar();` membuat objek baru dari kelas mobil balap.

4. **Memanggil Method**:
   - `myRaceCar.drive();` menghasilkan dua output:
     - Pertama, dari kelas mobil: "Mobil berjalan".
     - Kedua, dari kelas mobil balap: "Mobil balap berjalan sangat cepat".

## Mengapa Menggunakan Super Method?

- **Mewarisi Perilaku**: Super method memungkinkan mobil balap untuk menggunakan metode yang telah ada pada mobil, menjaga agar kode tidak perlu ditulis ulang.
- **Memperluas Fungsionalitas**: Mobil balap dapat mengubah atau menambah perilaku `drive()` untuk menunjukkan kecepatan yang lebih tinggi.
- **Pengelolaan Kode yang Lebih Baik**: Dengan memanggil metode dari kelas induk, Anda menjaga struktur kode yang bersih dan terorganisir, seperti membangun hirarki kendaraan yang jelas.

## Kapan Menggunakan Super Method?

- Saat Anda ingin menambahkan perilaku baru di kelas anak tanpa menghapus perilaku yang sudah ada di kelas induk.
- Ketika Anda ingin menjaga agar kode tetap terorganisir dan menghindari duplikasi.
- Saat membangun sistem yang kompleks di mana banyak kelas memiliki perilaku dasar yang sama.

## Kesimpulan

Super method di JavaScript adalah alat yang kuat untuk membangun hierarki kelas yang lebih kompleks dan terorganisir. Dengan menggunakan `super`, Anda dapat memanggil metode dari kelas induk, memungkinkan Anda untuk mempertahankan perilaku yang ada sambil memperluas fungsionalitas di kelas anak. Analogi mobil dan mobil balap membantu menggambarkan bagaimana super method memungkinkan Anda untuk "mempercepat" perilaku yang sudah ada dengan cara yang terstruktur dan bersih.
