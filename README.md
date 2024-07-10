# SCRIPT FORUMAI TASK 2

Sebelum jalanin script alangkah baiknya kalian gabung di channel [UGD AIRDROP](https://t.me/UGDAirdrop).

# Eksekusi Script
1. Buka [Codespace](https://github.com/codespaces) / Gitpod, kalau Replit saya belum coba.
2. Pastikan sudah menginstall NodeJs. Cek dengan
   ```bash
   node -v
   npm -v
   ```
   
3. Clone repo ini
   ```git
   git clone https://github.com/Semutireng22/forumai.git
   cd forumai
   ```
   
4. Install forumsdkai
   ```bash
   npm install forumaisdk readline dotenv
   ```
   
5. Buat dan edit file .env
   ```
   nano .env
   ```
   Masukan format private key seperti ini `PRIVATE_KEY=PK_KALIAN` , lalu simpan file kalian `CTRL + X + Y` dan `ENTER`
   
7. Jalankan script
   ```node
   node main.mjs
   ```
   atau
   ```node
   node --experimental-modules main.mjs
   ```

# Lisensi
Ubah jika di perlukan
