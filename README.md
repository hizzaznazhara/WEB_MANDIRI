# GrowSimulator — Direktori Villain

Aplikasi latihan Growtopia dengan frontend React dan backend NestJS. Pengguna dapat melihat, menambah, mengubah, dan menghapus catatan karakter Villain. Backend memakai struktur MVC dan menyimpan data sementara di array dalam memori.

## Menjalankan aplikasi

Pasang dependency frontend dari folder utama, lalu jalankan dua server di terminal terpisah:

```bash
npm install
npm run dev
```

```bash
cd backend
npm install
npm run start:dev
```

Buka alamat Vite yang ditampilkan, biasanya `http://localhost:5173`. Proxy Vite meneruskan `/api` ke NestJS di `http://localhost:3000`.

> Data backend disimpan di memori dan kembali ke data awal saat server dimulai ulang. Database permanen belum dipasang.

## API Villains

Base URL lokal: `http://localhost:3000/api/v1/villains`

| Method | Endpoint | Aksi |
| --- | --- | --- |
| GET | `/api/v1/villains` | Daftar semua villain |
| GET | `/api/v1/villains/:id` | Detail satu villain |
| POST | `/api/v1/villains` | Tambah villain |
| PATCH | `/api/v1/villains/:id` | Ubah villain |
| DELETE | `/api/v1/villains/:id` | Hapus villain |

Request REST Client tersedia di [`backend/villains.http`](backend/villains.http). Validasi request diaktifkan global: nama, kategori, HP, kartu, dan strategi divalidasi lewat DTO. Nama duplikat menghasilkan `409 Conflict`, sedangkan ID yang tidak ditemukan menghasilkan `404 Not Found`.

## Struktur MVC NestJS

| Path | Peran |
| --- | --- |
| `backend/src/villains/entities/villain.entity.ts` | Struktur data karakter |
| `backend/src/villains/dto/` | Validasi payload create dan update |
| `backend/src/villains/villains.service.ts` | CRUD dan penyimpanan array dalam memori |
| `backend/src/villains/villains.controller.ts` | Endpoint HTTP, memakai service lewat dependency injection |
| `backend/src/villains/villains.module.ts` | Registrasi controller dan service |
| `src/App.jsx` | Memuat dan mengubah data lewat API |
| `src/components/VillainForm.jsx` | Form untuk tambah dan edit |
| `src/components/VillainCard.jsx` | Kartu data dengan aksi edit dan hapus |

## Screenshot REST Client

Bukti request dan response tersimpan di `docs/screenshots/Tugas09/`:

- [GET daftar Villain](docs/screenshots/Tugas09/GET_daftar_villain.png)
- [POST Villain](docs/screenshots/Tugas09/POST_daftar_villain.png)
- [GET satu Villain](docs/screenshots/Tugas09/GET_satu_villain.png)
- [PATCH Villain](docs/screenshots/Tugas09/PATCH_villain.png)
- [DELETE Villain](docs/screenshots/Tugas09/DELETE_villain.png)
- [Error 404](docs/screenshots/Tugas09/Error_404.png)
- [Error nama duplikat 409](docs/screenshots/Tugas09/Error_data_sama.png)

## Halaman web

- `index.html` adalah beranda GrowSimulator dengan navigasi ke Surgery, Villains Guide, direktori, dan formulir saran.
- `villains.html` membuka direktori React yang terhubung ke backend NestJS.
- `surgery.html`, `crime.html`, dan `form.html` adalah halaman Surgery, panduan Villains, dan saran yang sudah menjadi bagian dari web ini.
