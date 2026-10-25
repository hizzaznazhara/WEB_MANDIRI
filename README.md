# GrowSimulator — Direktori Villain

Aplikasi frontend React bertema Growtopia untuk menyimpan catatan Villain: kategori, health, kartu andalan, dan strategi. Daftar awal memakai karakter dari panduan Villains yang sudah ada di project.

## Menjalankan aplikasi

Pastikan Node.js dan npm sudah terpasang, lalu dari folder project jalankan:

```bash
npm install
npm run dev
```

Buka alamat lokal yang ditampilkan Vite, biasanya `http://localhost:5173`.

## Fitur

- Ringkasan jumlah karakter berdasarkan kategori.
- Form controlled untuk menambah Villain, Mastermind, atau Supervillain.
- Daftar kartu karakter dengan health, kartu andalan, dan strategi.
- Hapus karakter dari daftar; pesan kosong tampil ketika semua data dihapus.

> Catatan: daftar saat ini disimpan di state React sehingga kembali ke data awal saat halaman dimuat ulang. Penyimpanan permanen dan backend akan ditambahkan pada tugas berikutnya.

## Struktur React

| Path | Peran |
| --- | --- |
| `src/App.jsx` | State daftar dan susunan halaman |
| `src/components/Header.jsx` | Header aplikasi |
| `src/components/PageIntro.jsx` | Judul dan pengantar halaman |
| `src/components/SummaryCard.jsx` | Ringkasan jumlah data |
| `src/components/VillainForm.jsx` | Form controlled untuk menambah data |
| `src/components/VillainList.jsx` | Render daftar dan kondisi kosong |
| `src/components/VillainCard.jsx` | Kartu informasi tiap karakter |
| `src/data/villains.js` | Data awal karakter |

## Halaman statis lama

`crime.html`, `surgery.html`, dan `form.html` masih disimpan sebagai referensi dari project sebelumnya. Aplikasi React aktif dibuka lewat `index.html`.
