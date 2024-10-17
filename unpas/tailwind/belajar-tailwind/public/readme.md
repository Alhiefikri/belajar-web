# README: Penjelasan Kode HTML Menggunakan Tailwind CSS

## Deskripsi

Dokumen ini adalah template HTML yang menggunakan Tailwind CSS, sebuah framework CSS utilitas yang memungkinkan pengembang untuk membangun antarmuka web dengan cepat dan responsif.

## Struktur HTML

### 1. Tag HTML Dasar

```html
<!DOCTYPE html>
<html lang="en"></html>
```

- **`<!DOCTYPE html>`**: Menandakan bahwa ini adalah dokumen HTML5.
- **`<html lang="en">`**: Menentukan bahasa dokumen sebagai Inggris.

### 2. Bagian `<head>`

Bagian ini berisi metadata dan pengaturan awal dokumen.

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
</head>
```

- **`<meta charset="UTF-8">`**: Mengatur encoding karakter untuk mendukung berbagai simbol dan karakter.
- **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`**: Mengatur responsivitas halaman untuk perangkat mobile.

### 3. Menghubungkan Font dan CSS

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="stylesheet" href="css/style.css" />
```

- **`<link rel="preconnect">`**: Mempercepat penghubungan ke domain tertentu (Google Fonts) untuk meningkatkan performa.
- **`<link rel="stylesheet" href="css/style.css">`**: Menghubungkan ke file CSS lokal untuk gaya tambahan.

### 4. Bagian `<body>`

Bagian ini berisi konten utama dari halaman.

```html
<body class="dark:bg-slate-800 dark:text-slate-200"></body>
```

- **`class="dark:bg-slate-800 dark:text-slate-200"`**:
  - **`dark:bg-slate-800`**: Mengatur latar belakang menjadi warna slate-800 ketika mode gelap aktif.
  - **`dark:text-slate-200`**: Mengatur warna teks menjadi slate-200 ketika mode gelap aktif.

### 5. Judul Utama

```html
<h1 class="text-8xl font-bold text-center my-10">
  Mari Belajar
  <span
    class="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent"
    >TailwindCSS</span
  >
</h1>
```

- **`text-8xl`**: Ukuran font yang sangat besar.
- **`font-bold`**: Mengatur teks menjadi tebal.
- **`text-center`**: Memusatkan teks.
- **`my-10`**: Memberikan margin vertikal (atas dan bawah) sebesar 10 unit.
- **`bg-gradient-to-r from-blue-500 to-teal-400`**: Menerapkan gradient warna dari biru ke teal.
- **`bg-clip-text text-transparent`**: Membuat teks transparan dengan gradient.

### 6. Bagian Section dengan Gradient

```html
<section
  class="mb-10 bg-gradient-to-r from-indigo-200 via-red-400 to-yellow-300"
>
  <h2 class="text-3xl text-center">Spacing</h2>
</section>
```

- **`mb-10`**: Memberikan margin bawah sebesar 10 unit.
- **`bg-gradient-to-r`**: Mengatur gradient latar belakang dari kiri ke kanan.
- **`from-indigo-200 via-red-400 to-yellow-300`**: Mengatur warna gradient dari indigo ke merah ke kuning.

### 7. Typography dan Konten

```html
<section class="font-inter max-w-3xl mx-auto">
  <h2 class="mb-2 text-4xl font-bold">
    Belajar Mengenai Typography pada TailwindCSS
  </h2>
  <p class="mb-4 text-lg text-gray-500">...</p>
</section>
```

- **`font-inter`**: Menggunakan font "Inter".
- **`max-w-3xl`**: Mengatur lebar maksimum elemen menjadi 3xl.
- **`mx-auto`**: Memusatkan elemen secara horizontal.
- **`text-4xl`**: Ukuran font 4xl.
- **`text-lg`**: Ukuran font besar.
- **`text-gray-500`**: Mengatur warna teks menjadi abu-abu.

### 8. Formulir Input

```html
<label for="email">
  <span class="block font-semibold mb-1 text-slate-700">Email</span>
  <input type="email" class="px-3 py-2 border shadow rounded w-full" />
</label>
```

- **`block`**: Mengatur elemen untuk mengisi satu baris.
- **`font-semibold`**: Mengatur font menjadi semi-tebal.
- **`mb-1`**: Margin bawah 1 unit.
- **`text-slate-700`**: Warna teks menjadi slate-700.
- **`px-3 py-2`**: Padding horizontal 3 dan vertikal 2.
- **`border`**: Menambahkan border pada elemen.
- **`shadow`**: Menambahkan efek bayangan.
- **`rounded`**: Menambahkan sudut melengkung pada elemen.
- **`w-full`**: Mengatur lebar elemen menjadi 100%.

### 9. Tombol

```html
<button
  class="my-10 bg-sky-500 px-5 py-2 text-white font-semibold rounded-full hover:bg-sky-600"
>
  Simpan
</button>
```

- **`my-10`**: Margin vertikal sebesar 10 unit.
- **`bg-sky-500`**: Latar belakang berwarna sky-500.
- **`px-5 py-2`**: Padding horizontal 5 dan vertikal 2.
- **`text-white`**: Mengatur warna teks menjadi putih.
- **`rounded-full`**: Membuat tombol menjadi bulat.
- **`hover:bg-sky-600`**: Mengubah warna latar belakang saat mouse melayang di atas tombol.

### 10. Skrip untuk Mode Gelap

```html
<script>
  const checkbox = document.querySelector("#toggle");
  const html = document.querySelector("html");

  checkbox.addEventListener("click", function () {
    checkbox.checked
      ? html.classList.add("dark")
      : html.classList.remove("dark");
  });
</script>
```

- **Menambahkan event listener** pada checkbox untuk mengaktifkan atau menonaktifkan mode gelap.

## Kesimpulan

Dokumen ini adalah contoh sederhana dari penggunaan HTML dan Tailwind CSS untuk membuat desain yang responsif dan modern. Dengan menggunakan kelas utilitas dari Tailwind, kamu dapat dengan cepat mengatur tampilan dan nuansa situs web.
