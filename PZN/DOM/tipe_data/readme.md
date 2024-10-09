````markdown
# Tipe Data dalam DOM (Document Object Model)

## Pengertian

DOM (Document Object Model) adalah struktur data yang merepresentasikan dokumen HTML atau XML sebagai objek. Dalam DOM, terdapat beberapa tipe data utama yang digunakan untuk merepresentasikan berbagai elemen dan struktur dalam dokumen. Tipe data ini memungkinkan pengembang untuk berinteraksi dengan dan memanipulasi halaman web secara dinamis.

## Tipe Data dalam DOM

Berikut adalah beberapa tipe data utama dalam DOM:

### 1. Document

- Tipe data ini mewakili seluruh dokumen HTML atau XML.
- Objek `document` adalah titik masuk untuk mengakses elemen dan metode yang ada di dalam dokumen.
- Contoh penggunaan:
  ```javascript
  const doc = document; // Mengakses objek Document
  ```
````

### 2. Node

- Semua elemen dalam DOM adalah objek yang merupakan turunan dari `Node`. Tipe ini mencakup berbagai jenis node, seperti elemen, teks, dan komentar.
- Terdapat beberapa jenis node, seperti:
  - **Element Node**: Mewakili elemen HTML.
  - **Text Node**: Mewakili teks di dalam elemen.
- Contoh penggunaan:
  ```javascript
  const element = document.getElementById("myElement"); // Mendapatkan Element Node
  const textNode = document.createTextNode("Hello, World!"); // Membuat Text Node
  ```

### 3. Element

- Tipe data ini adalah subkelas dari `Node` yang mewakili elemen HTML.
- Elemen memiliki atribut dan dapat memiliki anak (child).
- Contoh penggunaan:
  ```javascript
  const header = document.createElement("h1"); // Membuat elemen <h1>
  header.textContent = "Hello, World!";
  ```

### 4. Attribute

- Mewakili atribut dari elemen HTML. Atribut memberikan informasi tambahan tentang elemen.
- Contoh penggunaan:
  ```javascript
  const className = header.getAttribute("class"); // Mengambil nilai atribut class
  ```

### 5. HTMLCollection

- Koleksi objek yang dihasilkan dari pencarian elemen dalam dokumen. Bersifat "live" yang berarti akan otomatis diperbarui saat DOM berubah.
- Contoh penggunaan:
  ```javascript
  const elements = document.getElementsByTagName("div"); // Mendapatkan koleksi semua <div>
  ```

### 6. NodeList

- Seperti `HTMLCollection`, tetapi tidak selalu "live". Dapat berisi elemen dan node lainnya.
- Contoh penggunaan:
  ```javascript
  const nodeList = document.querySelectorAll(".item"); // Mendapatkan NodeList elemen dengan kelas "item"
  ```

## Contoh Kode

Berikut adalah contoh penggunaan tipe data dalam DOM:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tipe Data dalam DOM</title>
  </head>
  <body>
    <div id="myElement" class="container">Hello, World!</div>
    <script>
      // Mengakses objek Document
      const doc = document;

      // Mendapatkan Element Node
      const element = doc.getElementById("myElement");

      // Membuat Text Node
      const textNode = doc.createTextNode(" Welcome!");

      // Menambahkan Text Node ke dalam Element Node
      element.appendChild(textNode);

      // Mengambil atribut
      const className = element.getAttribute("class");
      console.log(`Class name: ${className}`);

      // Mengambil semua elemen <div>
      const divs = doc.getElementsByTagName("div");
      console.log(`Number of divs: ${divs.length}`);
    </script>
  </body>
</html>
```

## Kapan Metode Ini Digunakan

Tipe data dalam DOM digunakan ketika:

- Kita perlu mengakses, memanipulasi, atau memperbarui elemen dan konten dalam halaman web.
- Kita ingin mengelola atribut dan node dalam struktur dokumen.

## Penggunaan dalam Proyek Nyata

Dalam proyek nyata, pemahaman tentang tipe data dalam DOM sangat penting untuk:

- Membuat interaksi dinamis di halaman web, seperti pengolahan data dan interaksi pengguna.
- Mengelola elemen dan konten dalam aplikasi web yang kompleks.

## Analogi Sederhana

Bayangkan DOM sebagai sebuah organisasi. Setiap tipe data (Document, Node, Element, dll.) mewakili bagian-bagian dari organisasi tersebut. Document adalah keseluruhan organisasi, Node adalah karyawan, dan Element adalah posisi atau jabatan yang dimiliki oleh setiap karyawan.

## Kesimpulan

Tipe data dalam DOM adalah elemen penting yang memungkinkan kita untuk berinteraksi dengan struktur dokumen. Dengan memahami berbagai tipe data ini, kita dapat membuat aplikasi web yang lebih dinamis dan responsif. Menguasai tipe data dalam DOM adalah keterampilan krusial bagi setiap pengembang web.
