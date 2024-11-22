# [Tugas 9 - Pertemuan 10]

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


# Tugas 10 - Pertemuan 11

## Penjelasan Cara Proses CRUD

### 1. Tampilan Halaman Setelah Login
- **Screenshot**:  
  <img src="https://github.com/user-attachments/assets/0428748c-af45-4ea3-b30c-982e34b901bd" alt="Screenshot" width="200"/>


### 2. Tampilan Halaman Create Data
- **Screenshot**:
- 
  <img src="https://github.com/user-attachments/assets/18022caa-bb5c-4b43-b4c4-73756529e722" alt="Screenshot" width="200"/>
  <img src="https://github.com/user-attachments/assets/d487dc2b-f784-4c53-8f70-ea2e27c5abc3" alt="Screenshot" width="200"/>
  <img src="https://github.com/user-attachments/assets/aa9aabf3-725c-432b-b245-22648cb59bed" alt="Screenshot" width="200"/>
  <img src="https://github.com/user-attachments/assets/c1b7e744-21ff-408f-840b-7a6e5916c95a" alt="Screenshot" width="200"/>

- **Deskripsi**:  
  Pengguna menekan tombol **Tambah (+)** untuk membuka form modal.  
  Di modal, pengguna memasukkan **judul** dan **deskripsi** untuk tugas baru (todo).  
  Setelah data dimasukkan, fungsi `addTodo()` digunakan untuk mengirim data ke Firebase Firestore.  
  Data yang disimpan di Firestore juga otomatis menambahkan waktu dibuat (`createdAt`) dan waktu diperbarui (`updatedAt`).


### 3. Tampilan Halaman Read Data
- **Screenshot**:  
  <img src="https://github.com/user-attachments/assets/c1b7e744-21ff-408f-840b-7a6e5916c95a" alt="Screenshot" width="200"/>

- **Deskripsi**:  
  Data dari koleksi `todos` milik pengguna saat ini diambil menggunakan fungsi `getTodos()` di `firestoreService`.  
  Fungsi ini mengambil data dari Firestore, mengurutkan berdasarkan `updatedAt` secara menurun, dan mengembalikannya dalam bentuk array.  
  Fungsi `loadTodos()` memanggil `getTodos()` saat halaman diload atau direfresh.  
  Data yang berhasil diambil ditampilkan dalam elemen daftar menggunakan komponen `ion-card`.  
  Semua data yang dimiliki pengguna dikelompokkan menjadi **Active Todos** (belum selesai) dan **Completed Todos** (sudah selesai).


### 4. Tampilan Halaman Update Data
- **Screenshot**:

  <img src="https://github.com/user-attachments/assets/17142433-5dcf-43bd-904b-f18f6a4f3952" alt="Screenshot" width="200"/>
  <img src="https://github.com/user-attachments/assets/60455bfe-c489-4b20-89bf-cf7c8205e8df" alt="Screenshot" width="200"/>
  <img src="https://github.com/user-attachments/assets/9dde9c07-b7c8-43be-9cf0-93e837e32fdd" alt="Screenshot" width="200"/>
  <img src="https://github.com/user-attachments/assets/51cde0a9-9054-42b3-b04f-2704c5120646" alt="Screenshot" width="200"/>

- **Deskripsi**:  
  Pengguna dapat mengedit data dengan menekan tombol **Edit** pada Todo.  
  Tombol ini membuka modal input (`InputModal.vue`) dengan data yang sudah diisi sebelumnya.  
  Fungsi `updateTodo()` di `firestoreService` digunakan untuk memperbarui data di Firestore berdasarkan ID.  
  Modal mengirim data yang diubah ke fungsi `handleSubmit`, yang kemudian memutuskan apakah akan menambah atau mengedit data.  
  Data diperbarui di Firestore, dan daftar Todo direfresh untuk mencerminkan perubahan.


### 5. Tampilan Halaman Delete Data
- **Screenshot**:

  <img src="https://github.com/user-attachments/assets/66ddb303-fbac-444b-9a7a-b5fd37a18c82" alt="Screenshot" width="200"/>
  <img src="https://github.com/user-attachments/assets/16bca30b-b57d-4933-bb24-32d96893b4e0" alt="Screenshot" width="200"/>
  <img src="https://github.com/user-attachments/assets/fe860ca7-ca04-475b-b775-f7e56a80c288" alt="Screenshot" width="200"/>

- **Deskripsi**:  
  Pengguna dapat menghapus data dengan menekan tombol **Delete** pada item Todo atau dengan swipe gesture.  
  Fungsi `deleteTodo()` di `firestoreService` digunakan untuk menghapus data berdasarkan ID.  
  Fungsi `handleDelete()` memastikan item yang dihapus dihapus dari Firestore.  
  Data dihapus dari Firestore, dan daftar Todo diperbarui untuk menghapus entri yang dihapus.


### 6. Tampilan Halaman Update Status
- **Screenshot**:  

  **Active Todos ke Completed Todos**:

  <img src="https://github.com/user-attachments/assets/24306caf-858a-4c4c-a213-28ce7ba6ec23" alt="Screenshot" width="200"/>
  <img src="https://github.com/user-attachments/assets/3b864e68-9a42-43de-bfdf-888c3c95e95c" alt="Screenshot" width="200"/>
  <img src="https://github.com/user-attachments/assets/05b19ad0-b265-48dc-892e-92ceb4752aae" alt="Screenshot" width="200"/>  

  **Completed Todos ke Active Todos**:
  
  <img src="https://github.com/user-attachments/assets/4a57d9a8-73c9-4a65-9836-57801f16970c" alt="Screenshot" width="200"/>
  <img src="https://github.com/user-attachments/assets/66518634-d410-413b-ba8e-e9d192e5219f" alt="Screenshot" width="200"/>
  <img src="https://github.com/user-attachments/assets/c53809ae-cfe2-4b6b-9af1-098caea2436e" alt="Screenshot" width="200"/>

- **Deskripsi**:  
  Pengguna dapat mengubah status Todo dari **Active** menjadi **Completed** (atau sebaliknya) dengan swipe gesture atau menekan tombol **Mark as Completed/Active**.  
  Fungsi `updateStatus()` di `firestoreService` digunakan untuk mengubah atribut `status` dari Todo.  
  Fungsi `handleStatus()` memanggil `updateStatus()` dan me-refresh daftar setelah status diperbarui.  
  Status Todo diperbarui di Firestore, dan data akan berpindah antara daftar **Active Todos** dan **Completed Todos**.
  
## Backend (Firebase Firestore)

### Firestore Database
- Basis data berbasis **NoSQL** dengan koleksi `users/{uid}/todos` untuk setiap pengguna.
- Dokumen dalam koleksi `todos` menyimpan data sebagai objek **JSON** dengan key-value.

### Operasi CRUD Firebase
1. **Create**:  
   Menggunakan `addDoc()` untuk menambahkan dokumen baru.
   
2. **Read**:  
   Menggunakan `getDocs()` dengan query untuk membaca data dari Firestore.
   
3. **Update**:  
   Menggunakan `updateDoc()` untuk memperbarui dokumen berdasarkan ID.
   
4. **Delete**:  
   Menggunakan `deleteDoc()` untuk menghapus dokumen berdasarkan ID.

---
## Build Ionic ke bentuk Apk

Berikut adalah langkah-langkah untuk Build Aplikasi Ionic ke Format APK menggunakan Capacitor:

## Langkah 1: Build Aplikasi Ionic

- **Bangun Aplikasi Ionic**:
  - Jalankan perintah berikut di terminal untuk memproses aplikasi Ionic Anda:
    ```bash
    ionic build
    ```
  - Perintah ini akan menghasilkan folder `dist` atau `www` yang berisi file web aplikasi Anda.

- **Screenshot**:

  <img src="https://github.com/user-attachments/assets/ce53c960-6c58-4c29-95bf-9f78a248ffde" alt="Screenshot" width="400"/>

- **Pastikan Dependensi Capacitor Terinstal**:
  - Untuk memastikan semuanya berjalan lancar, jalankan perintah berikut di terminal untuk menginstal atau memperbarui dependensi Capacitor:
    ```bash
    npm install @capacitor/core@^6.2.0
    npm install @capacitor/android
    ```

- **Screenshot**:

  <img src="https://github.com/user-attachments/assets/02612438-2004-4fe7-8da2-61b2c9a7ef84" alt="Screenshot" width="400"/>
  <img src="https://github.com/user-attachments/assets/e89dcb1a-ff6e-42e5-8300-ead58debc940" alt="Screenshot" width="400"/>

- **Tambahkan Dukungan Android ke Proyek Ionic**:
  - Gunakan perintah berikut untuk menambahkan platform Android ke proyek Ionic Anda:
    ```bash
    npx cap add android
    ```

- **Screenshot**:

  <img src="https://github.com/user-attachments/assets/8bd9156e-a765-4b03-a977-8675cc09588e" alt="Screenshot" width="400"/>

- **Sinkronkan Aset Web ke Proyek Android**:
  - Transfer file web (dist atau www) ke proyek Android dengan menjalankan perintah berikut:
    ```bash
    npx cap sync android
    ```

- **Screenshot**:

  <img src="https://github.com/user-attachments/assets/479ff046-f068-4d59-ac69-d71da0ca0312" alt="Screenshot" width="400"/>


## Langkah 2: Buka Proyek di Android Studio

- **Buka Proyek Android**:
  - Jalankan perintah berikut untuk membuka proyek Android Anda di Android Studio:
    ```bash
    npx cap open android
    ```
  - Setelah itu, Android Studio akan otomatis membuka proyek Anda.

- **Screenshot**:

  <img src="https://github.com/user-attachments/assets/648a9142-2f81-4167-ace1-c212794f5d44" alt="Screenshot" width="400"/>


## Langkah 3: Build APK di Android Studio

- **Akses Menu Build di Android Studio**:
  - Di Android Studio, klik menu **Build** pada toolbar.

- **Pilih Opsi Build APK**:
  - Pilih opsi berikut:
    ```scss
    Build -> Build Bundle(s) / APK(s) -> Build APK(s)
    ```
  - Android Studio akan memulai proses pembuatan file APK.

- **Screenshot**:

  <img src="https://github.com/user-attachments/assets/2f72032c-cd22-4d65-b6c0-3377883d160c" alt="Screenshot" width="400"/>

- **Tunggu Hingga Proses Selesai**:
  - Setelah proses selesai, Anda akan mendapatkan notifikasi bahwa file APK berhasil dibuat.

- **Temukan File APK**:
  - Klik tombol **Locate** pada notifikasi untuk langsung membuka lokasi file APK yang telah dibuat.

- **Screenshot**:

  <img src="https://github.com/user-attachments/assets/573b22eb-a38a-4151-b018-c135468d699a" alt="Screenshot" width="400"/>
  
## Langkah 4: Lokasi File APK

- **Temukan File app-debug.apk**:
  - File `app-debug.apk` yang telah Anda buat dapat ditemukan di folder berikut:
    ```bash
    android/app/build/outputs/apk/debug
    ```

- **Screenshot**:

  <img src="https://github.com/user-attachments/assets/7f4bf34c-dee2-4ea6-8c9d-a962b0b96cf1" alt="Screenshot" width="400"/>

## Langkah Install APK di Android

Setelah berhasil membangun file APK menggunakan langkah sebelumnya, berikut adalah langkah-langkah untuk menginstal APK di perangkat Android:

### 1. **Pindahkan File APK ke Perangkat Android**
- Hubungkan perangkat Android ke komputer menggunakan kabel USB.
- Salin file **`app-debug.apk`** dari folder berikut: android/app/build/outputs/apk/debug
- Tempelkan file APK ke folder di perangkat Anda (misalnya, di folder **APK**).
- **Screenshot**:
  
  <img src="https://github.com/user-attachments/assets/77db2eec-0b50-43b9-9cd8-c95695dd60bc" alt="Screenshot" width="200"/>

### 2. **Instal APK**
- Gunakan aplikasi **File Manager** pada perangkat Anda.
- Temukan file **`app-debug.apk`** yang telah Anda pindahkan.
- Ketuk file tersebut dan pilih **Instal**.
- Tunggu hingga proses instalasi selesai.
- **Screenshot**:
  
  <img src="https://github.com/user-attachments/assets/b52b06c0-2e93-4536-8338-61445d6b7fb4" alt="Screenshot" width="200"/>
  <img src="https://github.com/user-attachments/assets/6dd07f00-7e60-4664-9f6e-b3db22984b19" alt="Screenshot" width="200"/>
  <img src="https://github.com/user-attachments/assets/7452a3e4-ca93-42bd-a827-cc6083880a01" alt="Screenshot" width="200"/>

### 3. **Jalankan Aplikasi**
- Setelah instalasi selesai, pilih **Buka** untuk menjalankan aplikasi langsung.
- Anda juga dapat menemukan aplikasi di **Layar Utama** atau di **Drawer Aplikasi**.
- **Screenshot**:
  
  <img src="https://github.com/user-attachments/assets/225d9b00-472b-4a16-ae88-d44393813f48" alt="Screenshot" width="200"/>
  <img src="https://github.com/user-attachments/assets/5440e3b9-552e-477d-97c0-362f3b26422e" alt="Screenshot" width="200"/>

