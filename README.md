# Belajar Vibe Coding - Backend Starter

Starter template backend modern menggunakan **Bun**, **ElysiaJS**, **Drizzle ORM**, dan **MySQL**.

## 🛠 Tech Stack
- **Runtime:** [Bun](https://bun.com)
- **Framework:** [ElysiaJS](https://elysiajs.com)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team)
- **Database Driver:** `mysql2`
- **Migration & Tooling:** `drizzle-kit`
- **Database:** MySQL

---

## 📁 Struktur Direktori
```text
.
├── drizzle/              # Migration SQL files (drizzle-kit)
├── src/
│   ├── db/
│   │   ├── index.ts      # Inisialisasi pool MySQL & client Drizzle
│   │   └── schema.ts     # Definisi schema database (Drizzle MySQL Core)
│   ├── routes/
│   │   └── user.routes.ts # REST endpoints (CRUD) pengguna
│   └── index.ts          # Entry point server ElysiaJS
├── .env.example          # Template konfigurasi environment
├── drizzle.config.ts     # Konfigurasi Drizzle Kit
├── package.json
└── tsconfig.json
```

---

## 🚀 Memulai (Getting Started)

### 1. Install Dependencies
```bash
bun install
```

### 2. Konfigurasi Environment
Salin file `.env.example` menjadi `.env`:
```bash
cp .env.example .env
```
Sesuaikan kredensial MySQL Anda di file `.env`:
```env
PORT=3000
NODE_ENV=development

DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=belajar_vibe_coding
```

### 3. Migrasi Database (Drizzle Kit)
Generate migration SQL baru jika ada perubahan schema:
```bash
bun run db:generate
```

Terapkan migration langsung ke database:
```bash
bun run db:push
# atau
bun run db:migrate
```

Buka visual database viewer:
```bash
bun run db:studio
```

### 4. Menjalankan Server
Mode Development (dengan auto-reload):
```bash
bun run dev
```

Mode Production:
```bash
bun run start
```

---

## 📡 Daftar Endpoints

| Method | Endpoint | Deskripsi |
|---|---|---|
| `GET` | `/` | Informasi status server & runtime |
| `GET` | `/health` | Health check koneksi server dan database |
| `GET` | `/api/users` | Mengambil seluruh daftar pengguna |
| `GET` | `/api/users/:id` | Mengambil detail pengguna berdasarkan ID |
| `POST` | `/api/users` | Menambahkan pengguna baru (body: `{ name, email, bio? }`) |
| `DELETE` | `/api/users/:id` | Menghapus pengguna berdasarkan ID |

---

## 💡 Contoh Request

**Tambah User Baru:**
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Hanafi", "email": "hanafi@example.com", "bio": "Vibe coding with Bun & Elysia"}'
```

**Ambil Daftar User:**
```bash
curl http://localhost:3000/api/users
```
