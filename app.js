// ==========================================
// SISTEM PENYIMPANAN DATA (LOCALHOST & HOSTING)
// ==========================================

// 1. Kunci Penyimpanan untuk Data Ringan (Sesi Login & Konfigurasi)
const STORAGE_KEY_AUTH = 'mr_dash_auth_session';

// 2. Inisialisasi Database IndexedDB untuk Data Berat (BTS & Fiber Optic)
// Menggunakan API bawaan browser agar kompatibel di local maupun hosting jaringan internet
class MrDashDatabase {
    constructor() {
        this.dbName = 'MR_Dash_Telecom_DB';
        this.dbVersion = 1;
        this.db = null;
    }

    // Membuka koneksi database lokal browser
    init() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, this.dbVersion);

            request.onerror = (event) => reject("Gagal memuat database lokal: " + event.target.errorCode);
            
            request.onsuccess = (event) => {
                this.db = event.target.result;
                resolve(this.db);
            };

            // Membuat struktur tabel jika database baru pertama kali dimuat
            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (!db.objectStoreNames.contains('bts_assets')) {
                    db.createObjectStore('bts_assets', { keyPath: 'id', autoIncrement: true });
                }
                if (!db.objectStoreNames.contains('fiber_optics')) {
                    db.createObjectStore('fiber_optics', { keyPath: 'id', autoIncrement: true });
                }
            };
        });
    }

    // Fungsi menyimpan atau memperbarui data BTS
    saveBTS(data) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['bts_assets'], 'readwrite');
            const store = transaction.objectStore('bts_assets');
            const request = store.put(data); // put otomatis menambah jika baru, mengubah jika ID sudah ada
            request.onsuccess = () => resolve(true);
            request.onerror = () => reject(false);
        });
    }

    // Fungsi mengambil seluruh data BTS untuk Dashboard dan Excel
    getAllBTS() {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['bts_assets'], 'readonly');
            const store = transaction.objectStore('bts_assets');
            const request = store.getAll();
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject([]);
        });
    }

    // Fungsi menghapus data (Hanya diizinkan untuk Super Admin)
    deleteBTS(id) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['bts_assets'], 'readwrite');
            const store = transaction.objectStore('bts_assets');
            const request = store.delete(id);
            request.onsuccess = () => resolve(true);
            request.onerror = () => reject(false);
        });
    }
    
    // (Anda dapat menduplikasi fungsi save, get, dan delete di atas untuk tabel 'fiber_optics')
}

// 3. Cara Mengaktifkan Database di dalam app.js
const myTelecomDB = new MrDashDatabase();
myTelecomDB.init().then(async () => {
    console.log("Database MR DASH TELECOM siap digunakan di " + window.location.hostname);
    
    // Muat data awal ke tabel dashboard & peta saat aplikasi dibuka
    const daftarBTS = await myTelecomDB.getAllBTS();
    renderTabelDanPeta(daftarBTS);
}).catch(err => {
    console.error(err);
});