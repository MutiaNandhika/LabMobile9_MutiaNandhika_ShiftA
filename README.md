# MUTIANANDHIKA_H1D022078_IonicVueFirebase

## Penjelasan Cara Proses Aplikasi

Berikut adalah penjelasan mengenai proses autentikasi dan pengambilan profil pengguna di aplikasi Ionic-Vue yang terintegrasi dengan Firebase dan Autentikasi Google:

### 1. Tampilan Halaman Login
- **Screenshot**: ![Halaman Login](https://github.com/user-attachments/assets/bca94cec-b937-4d31-bd82-45e7209c847c)
- **Deskripsi**: Pada halaman login, pengguna disajikan tombol **“Sign in with Google”** sebagai satu-satunya pilihan autentikasi. Pengguna cukup mengklik tombol ini untuk memulai proses masuk menggunakan akun Google mereka.

### 2. Tampilan Halaman Pilih Akun Google
- **Screenshot**: 
  - ![Pilih Akun 1](https://github.com/user-attachments/assets/f2303806-8efc-472d-9134-3ddfe86a7188)
  - ![Pilih Akun 2](https://github.com/user-attachments/assets/9f1cc8fc-5a6f-4363-bd1f-80d5c88f0c0a)
- **Deskripsi**: Setelah menekan tombol **“Sign in with Google”**, aplikasi membuka halaman login Google di mana pengguna memilih akun Google yang akan digunakan untuk login. Proses ini mengarahkan pengguna untuk menyetujui akses data profil ke aplikasi.
  
- **Proses Autentikasi di Firebase dan Penyimpanan Profil Pengguna**:
  - **Inisialisasi Autentikasi**: Aplikasi memulai dengan inisialisasi `GoogleAuth` menggunakan `client ID` dan `scopes` yang telah ditetapkan (profile dan email), yang memungkinkan akses profil dasar pengguna.
  - **Mendapatkan Token ID**: Setelah pengguna memilih akun, Google mengembalikan `ID token` yang digunakan untuk membuat kredensial Firebase dengan `GoogleAuthProvider.credential(idToken)`.
  - **Autentikasi di Firebase**: Firebase kemudian mengautentikasi pengguna menggunakan `signInWithCredential`, yang memberikan data lengkap pengguna seperti `displayName`, `email`, dan `photoURL` di objek `user`.

### 3. Tampilan Halaman Home
- **Screenshot**: ![Halaman Home](https://github.com/user-attachments/assets/7729447e-c47f-4812-9b1a-287c29188847)
- **Deskripsi**: Setelah autentikasi berhasil, aplikasi otomatis mengarahkan pengguna ke halaman utama **(/home)**. Di sini, pengguna dapat beralih ke tab profil untuk melihat informasi lebih lanjut.

### 4. Tampilan Halaman Profil
- **Screenshot**: ![Halaman Profil](https://github.com/user-attachments/assets/0b6d183c-7875-4596-ad40-0d3de0987760)
- **Deskripsi**: Di halaman profil, aplikasi menampilkan nama dan email pengguna yang diambil dari akun Google mereka, serta foto profil yang diambil dari URL yang terkait dengan akun tersebut. Jika tidak ada foto profil, aplikasi akan menampilkan gambar default.

- **Konfigurasi Router dan Navigasi Aman**:
  - **Rute Aplikasi**: Rute aplikasi diatur agar pengguna tidak dapat mengakses halaman tertentu seperti **/home** atau **/profile** tanpa login. Jika pengguna tidak terautentikasi, mereka akan otomatis diarahkan ke halaman login.
  - **Logout**: Setelah logout, aplikasi akan mengarahkan pengguna kembali ke halaman login.
