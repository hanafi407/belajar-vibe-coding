# [Task] Setup Backend Service with Bun, ElysiaJS, Drizzle ORM, and MySQL

## 🎯 Overview
Membuat kerangka awal (boilerplate / starter template) backend service berbasis **Bun** menggunakan framework **ElysiaJS**, ORM **Drizzle**, dan database **MySQL**. Dokumen ini berfungsi sebagai panduan implementasi high-level untuk dikerjakan oleh programmer junior atau model AI.

---

## 🛠 Tech Stack
- **Runtime:** Bun
- **Framework:** ElysiaJS
- **ORM:** Drizzle ORM
- **Database Driver:** mysql2
- **Migration & Dev Tooling:** drizzle-kit
- **Database:** MySQL

---

## 📋 Implementation Checklist

### 1. Inisialisasi Proyek & Dependencies
- [x] Inisialisasi project Bun (`bun init`).
- [x] Pasang dependencies utama:
  - `elysia`
  - `drizzle-orm`
  - `mysql2`
- [x] Pasang dev dependencies:
  - `drizzle-kit`
  - `@types/bun`

### 2. Environment & Database Configuration
- [x] Buat file konfigurasi environment (`.env` dan `.env.example`) untuk koneksi MySQL (Host, Port, User, Password, Database Name).
- [x] Buat file inisialisasi koneksi database Drizzle (instance client) menggunakan driver `mysql2`.
- [x] Buat file konfigurasi Drizzle (`drizzle.config.ts`) untuk kebutuhan migration dan schema tracking.

### 3. Struktur Direktori & Schema Model
- [x] Susun struktur folder proyek yang modular, disarankan:
  - `src/db/`: konfigurasi database dan schema
  - `src/routes/` atau `src/modules/`: route handler per fitur
  - `src/index.ts`: entry point utama aplikasi
- [x] Definisikan minimal satu schema tabel awal (contoh: tabel `users` atau `items`) di dalam file schema Drizzle.
- [x] Tambahkan script migration di `package.json` (generate & push/migrate menggunakan `drizzle-kit`).

### 4. Setup Server ElysiaJS & Routing
- [x] Inisialisasi instance server Elysia di `src/index.ts`.
- [x] Tambahkan endpoint health-check sederhana (misal: `GET /health` atau `GET /`).
- [x] Tambahkan endpoint contoh sederhana yang terhubung ke database via Drizzle ORM untuk memvalidasi query berjalan dengan baik.
- [x] Pastikan server mendengarkan port yang sesuai (default: 3000) dengan handling error dasar.

### 5. Testing & Verifikasi
- [x] Pastikan koneksi ke MySQL berhasil tanpa error koneksi.
- [x] Jalankan migrasi schema ke database dan pastikan tabel berhasil terbuat.
- [x] Jalankan server dengan mode development (`bun run dev` atau `bun --watch src/index.ts`).
- [x] Uji endpoint melalui HTTP client / browser untuk memastikan operasi database berfungsi.

---

## ✅ Acceptance Criteria
1. Project dapat dijalankan menggunakan runtime Bun tanpa runtime error.
2. Drizzle ORM berhasil terhubung ke MySQL dan dapat mengeksekusi migrasi schema.
3. Server ElysiaJS aktif dan merespons request dengan baik.
4. Terdapat file `.env.example` dan dokumentasi ringkas cara menjalankan proyek.
