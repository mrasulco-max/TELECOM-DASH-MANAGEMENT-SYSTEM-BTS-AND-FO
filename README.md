MR DASH TELECOM - Dashboard Geospasial & Manajemen Aset IndonesiaMR DASH TELECOM adalah platform Sistem Informasi Geografis (SIG) berbasis web (Single Page Application) terintegrasi untuk mendokumentasikan, memantau, dan mengelola infrastruktur fisik telekomunikasi—menara BTS (Base Transceiver Station) dan jaringan Fiber Optic (FO)—di seluruh Indonesia secara real-time.

Aplikasi ini menggabungkan visualisasi spreadsheet ala Excel yang intuitif dengan fungsionalitas peta digital dua arah, otorisasi multi-level, serta sistem penyimpanan mandiri (offline-first) yang tangguh.

Pengembang & Hak CiptaDikonsep & Dikembangkan oleh: Muh Rasul
Lisensi: MIT License
Hak Cipta: MR DASH Telecom - All Right Reserved

Fitur Utama Dasbor Analitik Eksekutif:
- Ringkasan visual KPI,
- diagram pai status operasional,
- dan grafik distribusi kapasitas operator menggunakan Chart.js.
- Geospasial Cerdas (Smart GIS Map
- Pemetaan titik koordinat BTS dan penggambaran rute kabel Fiber Optic yang melengkung mengikuti rute jalan raya riil secara presisi dengan integrasi Leaflet.js dan OSRM API.

Koneksi Wilayah Bertingkat (Cascading Dropdowns):
- Penyaringan dinamis wilayah administratif Indonesia (Provinsi $\rightarrow$ Kota/Kabupaten $\rightarrow$ Kecamatan $\rightarrow$ Kelurahan/Desa) pada form input.

Sistem Keamanan Multi-Level (4 Peran):

Pengendalian hak akses fungsional yang ketat:
- Level 1 - Super Admin: Akses penuh (Input, Edit, Hapus Data & Ekspor).
- Level 2 - Network Engineer: Akses teknis (Input & Edit Data, tanpa izin hapus).
- Level 3 - Field Operator: Akses operasional (Hanya bisa memperbarui status fungsional di lapangan).
- Level 4 - Executive: Akses eksekutif (Hanya baca/Read-Only & Ekspor).

Ekspor Dokumen Premium: 
- Ekspor instan ke format spreadsheet Excel (CSV) dan generator Laporan Cetak PDF formal berstandar korporasi lengkap dengan tanda tangan digital penyusun.
- Sistem Penyimpanan Hibrida: Memanfaatkan IndexedDB (via browser API) dan LocalStorage sehingga data tersimpan permanen baik saat dijalankan di komputer lokal (localhost) maupun saat di-hosting di internet.🔒

Fitur Keamanan
- TerintegrasiSanitasi Input (Anti-XSS): Seluruh input teks disaring ketat menggunakan pustaka DOMPurify sebelum masuk ke database guna mencegah serangan injeksi skrip berbahaya
- Perlindungan Clickjacking: Kode pelindung Frame-busting dipasang untuk memastikan aplikasi tidak dapat dibuka di dalam iframe gelap milik situs lain.📂 Struktur Folder ProyekProyek ini telah dikembangkan secara modular dengan memisahkan struktur, tampilan, dan logika bisnis ke dalam file

masing-masing:mr-dash-telecom/
│
├── index.html          # Struktur kerangka aplikasi & deklarasi CDN pihak ketiga
├── style.css           # Desain antarmuka, efek siber neon, & glassmorphism
├── app.js              # Logika bisnis, manajemen peta (GIS), & database IndexedDB
└── README.md           # Panduan sistem dan dokumentasi proyek (Berkas ini)

Petunjuk Pemasangana.
1. Menjalankan di Komputer Lokal (Localhost)Karena proyek ini berbasis serverless frontend, Anda tidak perlu menginstal server database tambahan (seperti MySQL):Unduh (clone) repositori ini ke komputer Anda.
2. Buka berkas index.html menggunakan peramban (browser) favorit Anda, atau jalankan menggunakan ekstensi Live Server di VS Code untuk pengalaman pengembangan yang lebih lancar.
3. Data yang Anda masukkan akan disimpan di penyimpanan internal browser Anda secara permanen (tidak hilang saat di-refresh).

Cara Hosting (GitHub Pages / Netlify / Vercel)
1. Aplikasi ini 100% siap di-hosting secara gratis:Buat repositori baru di akun GitHub Anda.
2. Unggah ketiga file (index.html, style.css, dan app.js) ke repositori tersebut.
3. Aktifkan fitur GitHub Pages di menu Settings repositori Anda.

Situs web Anda kini aktif secara publik dan database interaktif langsung berjalan di browser para pengunjung situs Anda secara aman.

Copyright © 2026 MR DASH Telecom - All Right Reserved