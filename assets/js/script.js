// 1. simpan desain navbar
const navbarHTML = `
<nav class="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg shadow-sm transition-colors duration-300">
    <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="index.html" class="text-2xl font-bold tracking-tight">JN<span class="text-indigo-600 dark:text-indigo-400">Page.</span></a>
        
        <!-- menu navigasi -->
        <div class="space-x-8 hidden md:flex items-center font-medium">
            <a href="index.html" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition pb-1 border-b-2 border-transparent hover:border-indigo-600 dark:hover:border-indigo-400">Beranda</a>
            <a href="profil.html" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition pb-1 border-b-2 border-transparent hover:border-indigo-600 dark:hover:border-indigo-400">Profil</a>
            <a href="organisasi.html" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition pb-1 border-b-2 border-transparent hover:border-indigo-600 dark:hover:border-indigo-400">Organisasi</a>
            <a href="portofolio.html" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition pb-1 border-b-2 border-transparent hover:border-indigo-600 dark:hover:border-indigo-400">Portofolio</a>
        </div>

        <button id="darkModeToggle" class="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition">
            <span id="themeIcon" class="text-xl">🌙</span>
        </button>
    </div>
</nav>
`;

// 2. simpan desain footer
const footerHTML = `
<!-- dipisah kiri dan kanan pakai justify-between -->
<div class="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
    
    <!-- teks copyright -->
    <p class="text-gray-500 dark:text-gray-400 text-sm text-center sm:text-left">
        &copy; 2026 JNPage by Ananda Wistra. All Rights Reserved.
    </p>
    
    <!-- link instagram -->
    <a href="https://www.instagram.com/nandahaeee?stkn=djlraWtsd25sZTc0" target="_blank" class="flex items-center space-x-2 text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24" class="mt-[2px]">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
        <span class="font-medium text-sm leading-none">@nandahaeee</span>
    </a>
</div>
`;

// 3. background efek glowing orbs
const backgroundHTML = `
<div class="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <!-- orb 1 (ungu kiri atas) -->
    <div class="absolute -top-[10%] -left-[10%] w-96 h-96 bg-purple-400/70 dark:bg-purple-700/70 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[90px] opacity-100 animate-blob"></div>
    
    <!-- orb 2 (biru kanan atas) -->
    <div class="absolute top-[20%] -right-[10%] w-96 h-96 bg-indigo-400/70 dark:bg-indigo-700/70 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[90px] opacity-100 animate-blob delay-2000"></div>
    
    <!-- orb 3 (pink bawah) -->
    <div class="absolute -bottom-32 left-[20%] w-96 h-96 bg-pink-400/70 dark:bg-pink-700/70 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[90px] opacity-100 animate-blob delay-4000"></div>
</div>
`;

// 4. injeksi html & inisialisasi fitur
document.addEventListener("DOMContentLoaded", () => {
    // suntik background
    document.body.insertAdjacentHTML('afterbegin', backgroundHTML);

    // suntik navbar
    const headerElement = document.getElementById("app-header");
    if(headerElement) {
        headerElement.className = "sticky top-0 z-50"; // Class dipindah ke sini
        headerElement.innerHTML = navbarHTML;
    }

    // suntik footer
    const footerElement = document.getElementById("app-footer");
    if(footerElement) footerElement.innerHTML = footerHTML;

    // jalankan fungsi
    aktifkanDarkMode();
    aktifkanEfekNgetik();
});

// 5. dark mode toggle
function aktifkanDarkMode() {
    const themeToggleBtn = document.getElementById('darkModeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const htmlElement = document.documentElement;

    // set ikon saat halaman dimuat
    if (htmlElement.classList.contains('dark')) {
        if(themeIcon) themeIcon.textContent = '☀️';
    } else {
        if(themeIcon) themeIcon.textContent = '🌙';
    }

    // aksi saat tombol diklik
    if(themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');
            
            if (htmlElement.classList.contains('dark')) {
                localStorage.setItem('theme', 'dark');
                themeIcon.textContent = '☀️';
            } else {
                localStorage.setItem('theme', 'light');
                themeIcon.textContent = '🌙';
            }
        });
    }
}

// 6. efek ngetik di beranda
function aktifkanEfekNgetik() {
    const typeWriterElement = document.getElementById('typewriter-text');
    
    // pastikan hanya jalan di beranda
    if (typeWriterElement) {
        const baris1 = "Halo, Saya";
        const baris2 = "Ananda Wistra"; 
        
        // siapkan wadah teks
        typeWriterElement.innerHTML = `
            <span id="tw-baris1"></span><span id="tw-cursor" class="border-r-4 border-indigo-500 animate-pulse ml-1">&nbsp;</span><br>
            <span id="tw-baris2" class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></span>
        `;
        
        const elBaris1 = document.getElementById('tw-baris1');
        const elBaris2 = document.getElementById('tw-baris2');
        const cursor = document.getElementById('tw-cursor');
        
        let i = 0;
        let j = 0;
        
        function ngetik() {
            if (i < baris1.length) {
                elBaris1.innerHTML += baris1.charAt(i);
                i++;
                setTimeout(ngetik, 100); 
                
            } else if (i === baris1.length) {
                elBaris2.after(cursor);
                i++;
                setTimeout(ngetik, 500); 
                
            } else if (j < baris2.length) {
                elBaris2.innerHTML += baris2.charAt(j);
                j++;
                setTimeout(ngetik, 150); 
            }
        }
        
        setTimeout(ngetik, 800); 
    }
}
