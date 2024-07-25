const cakapSatu = document.getElementById('cakapSatu');
const cakapDua = document.getElementById('cakapDua');
const cakapTiga = document.getElementById('cakapTiga');
const cakapEmpat = document.getElementById('cakapEmpat');
const cakapLima = document.getElementById('cakapLima');
const cakapEnam = document.getElementById('cakapEnam');
const daftarBesar = document.getElementById('daftarBesar');
const sidebarToggle = document.getElementById('sidebarToggle');
const isiTransformasi = document.getElementById('isiTransformasi');
const footer = document.getElementById('footer');
const tombolNext = document.getElementById('tombolNext');
const judul = document.getElementById('judul');
const navbar1 = document.getElementById('navbar1');
const tunjukNavbar = document.getElementById('tunjukNavbar');

function removeanimateTescuy1() {
  var animateTescuy1 = document.getElementById('animateTescuy1');
  animateTescuy1.classList.remove('hidden');

  var play2 = document.getElementById('play2');
  play2.classList.add('hidden');
}

const sidebar = document.getElementById('daftarTransformasi');
function toggleNavbar() {
  sidebar.classList.toggle('translate-x-96');
}

window.addEventListener('scroll', function () {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('border-b-2', 'bg-opacity-90', 'bg-[#FBFDFE]');
  } else {
    navbar.classList.remove('border-b-2', 'bg-opacity-90', 'bg-[#FBFDFE]');
  }
});

function okSatu() {
  tunjukNavbar.classList.remove('hidden');
  cakapSatu.classList.add('hidden');
  cakapDua.classList.remove('hidden');
  cakapDua.classList.add('zoomIn');
  daftarBesar.classList.add('z-50', 'animate-pulse', 'md:block');
  sidebarToggle.classList.add('animate-pulse');
  setTimeout(function () {
    sidebar.classList.remove('translate-x-96');
    sidebar.classList.add('animate-pulse');
  }, 500);

  setTimeout(function () {
    sidebar.classList.add('translate-x-96');
    sidebar.classList.remove('animate-pulse');
  }, 3000);
}

function okDua() {
  tunjukNavbar.classList.add('hidden');
  cakapDua.classList.add('hidden');
  cakapTiga.classList.remove('hidden');
  cakapTiga.classList.add('zoomIn');
  daftarBesar.classList.remove('z-50', 'animate-pulse', 'md:block');
  sidebarToggle.classList.remove('animate-pulse');
  isiTransformasi.classList.add(
    'animate-pulse',
    'z-50',
    'bg-gray-100',
    'rounded-lg',
    'p-4',
    '-translate-y-16',
    'md:-translate-y-0',
    'scale-90',
    'md:translate-x-40'
  );
}

function okTiga() {
  cakapTiga.classList.add('hidden');
  cakapEmpat.classList.remove('hidden');
  cakapEmpat.classList.add('zoomIn');
  isiTransformasi.classList.add('hidden');
  isiTransformasi.classList.remove(
    'animate-pulse',
    'z-50',
    'bg-gray-100',
    'rounded-lg',
    'p-4',
    '-translate-y-16',
    'md:-translate-y-0',
    'scale-90',
    'md:translate-x-40'
  );
  footer.classList.remove('hidden');
  tombolNext.classList.add('animate-pulse');
  document.getElementById('tunjukNext').classList.remove('hidden');
}

function okEmpat() {
  cakapEmpat.classList.add('hidden');
  cakapLima.classList.remove('hidden');
  cakapLima.classList.add('zoomIn');
  tombolNext.classList.remove('animate-pulse');
  judul.classList.add('animate-pulse');
  tunjukNext.classList.add('hidden');
  document.getElementById('tunjukHome').classList.remove('hidden');
}

function okLima() {
  cakapLima.classList.add('hidden');
  cakapEnam.classList.remove('hidden');
  cakapEnam.classList.add('zoomIn');
  judul.classList.remove('animate-pulse');
  tunjukHome.classList.add('hidden');
}

function okEnam() {
  navbar1.classList.remove('bg-blue-50');
  navbar1.classList.add('bg-[#eff7f6]');
  cakapEnam.classList.add('hidden');
  isiTransformasi.classList.remove('hidden');

  daftarBesar.classList.add('hidden', 'md:block');
}

function playImg() {
  const imgSatu = document.getElementById('imgSatu').classList.add('satu');
  const imgDua = document.getElementById('imgDua').classList.add('dua');
  const imgTiga = document.getElementById('imgTiga').classList.add('tiga');
  const playImg = document.getElementById('playImg');
  playImg.classList.add('opacity-20', 'cursor-not-allowed');
  playImg.classList.remove('cursor-pointer');
  setTimeout(function () {
    const page1 = document.getElementById('page1');
    page1.classList.remove('hidden');
    page1.classList.add('zoomIn');
  }, 8000);
}

function playImg2() {
  document.getElementById('contohTransGeo').classList.add('contohTransGeo');
  const playImg2 = document.getElementById('playImg2');
  playImg2.classList.add('opacity-20', 'cursor-not-allowed');
  playImg2.classList.remove('cursor-pointer');
  setTimeout(function () {
    const perubahanOrNot = document.getElementById('perubahanOrNot');
    perubahanOrNot.classList.remove('hidden');
    perubahanOrNot.classList.add('zoomIn');
  }, 5000);
}

function playImg3() {
  document.getElementById('persegiABCD').classList.remove('hidden');
  document.getElementById('persegikeABCD').classList.add('bg-gray-200', 'text-secondary');
  const playImg3 = document.getElementById('playImg3');
  playImg3.classList.add('opacity-20', 'cursor-not-allowed');
  playImg3.classList.remove('cursor-pointer');
  setTimeout(function () {
    const bedanya = document.getElementById('bedanya');
    bedanya.classList.remove('hidden');
    bedanya.classList.add('zoomIn');
    bedanya.scrollIntoView({ behavior: 'smooth' });
  }, 5000);
  setTimeout(function () {
    const nanyaBedanya = document.getElementById('nanyaBedanya');
    nanyaBedanya.classList.remove('hidden');
    nanyaBedanya.classList.add('zoomIn');
    nanyaBedanya.scrollIntoView({ behavior: 'smooth' });
  }, 6000);
}

function pengecilan() {
  // Menyembunyikan elemen dengan ID 'pengecilan'
  document.getElementById('pengecilan').classList.add('hidden');

  // Memutar audio dengan ID 'myAudio'
  const audioElement = document.getElementById('myAudio');
  audioElement.play();
  document.getElementById('salah').classList.remove('hidden');
  document.getElementById('salah').classList.add('zoomOut');
  setTimeout(function () {
    document.getElementById('salah').classList.add('hidden');
  }, 1000);
}

function pergantian() {
  // Menyembunyikan elemen dengan ID 'pergantian'
  document.getElementById('pergantian').classList.add('hidden');

  // Memutar audio dengan ID 'myAudio'
  const audioElement = document.getElementById('myAudio');
  audioElement.play();
  document.getElementById('salah').classList.remove('hidden');
  document.getElementById('salah').classList.add('zoomOut');
  setTimeout(function () {
    document.getElementById('salah').classList.add('hidden');
  }, 1000);
}

let isNextDisable = false;

function perubahan() {
  isNextDisable = true;
  // Menyembunyikan elemen dengan ID 'perubahan'
  document.getElementById('apaituTransformasi').classList.add('hidden');

  document.getElementById('aNext').setAttribute('href', 'transformasi/halaman2.html');
  document.getElementById('aNext').classList.remove('cursor-not-allowed');

  // Memutar audio dengan ID 'myAudio'
  const audioElement2 = document.getElementById('myAudio2');
  audioElement2.play();
  document.getElementById('benar').classList.remove('hidden');
  document.getElementById('benar').classList.add('zoomOut');
  document.getElementById('perubahanBenar').classList.remove('hidden');
  setTimeout(function () {
    document.getElementById('benar').classList.add('hidden');
  }, 1000);
  setTimeout(function () {
    const page2 = document.getElementById('page2');
    page2.classList.remove('hidden');
    page2.classList.add('zoomIn');
  }, 1000);
}

function tidakBerubah() {
  // Menyembunyikan elemen dengan ID 'tidakBerubah'
  document.getElementById('tidakBerubah').classList.add('hidden');

  // Memutar audio dengan ID 'myAudio'
  const audioElement = document.getElementById('myAudio');
  audioElement.play();
  document.getElementById('salah').classList.remove('hidden');
  document.getElementById('salah').classList.add('zoomOut');
  setTimeout(function () {
    document.getElementById('salah').classList.add('hidden');
  }, 1000);
}

function berubah() {
  isNextDisable = true;
  // Menyembunyikan elemen dengan ID 'perubahan'
  document.getElementById('apaituBerubah').classList.add('hidden');
  document.getElementById('bNext').setAttribute('href', 'halaman3.html');
  document.getElementById('bNext').classList.remove('cursor-not-allowed');

  // Memutar audio dengan ID 'myAudio'
  const audioElement2 = document.getElementById('myAudio2');
  audioElement2.play();
  document.getElementById('benar').classList.remove('hidden');
  document.getElementById('benar').classList.add('zoomOut');
  document.getElementById('berubahBenar').classList.remove('hidden');
  setTimeout(function () {
    document.getElementById('benar').classList.add('hidden');
  }, 1000);
  setTimeout(function () {
    const karenaTransformasi = document.getElementById('karenaTransformasi');
    karenaTransformasi.classList.remove('hidden');
    karenaTransformasi.classList.add('zoomIn');
  }, 1000);
  setTimeout(function () {
    const kesumpulanTransGeo = document.getElementById('kesumpulanTransGeo');
    kesumpulanTransGeo.classList.remove('hidden');
    kesumpulanTransGeo.classList.add('zoomIn');
    kesumpulanTransGeo.scrollIntoView({ behavior: 'smooth' });
  }, 2000);
}

function posisinya() {
  // Menyembunyikan elemen dengan ID 'posisinya'
  document.getElementById('posisinya').classList.add('hidden');

  // Memutar audio dengan ID 'myAudio'
  const audioElement = document.getElementById('myAudio');
  audioElement.play();
  document.getElementById('salah').classList.remove('hidden');
  document.getElementById('salah').classList.add('zoomOut');
  setTimeout(function () {
    document.getElementById('salah').classList.add('hidden');
  }, 1000);
}

function ukurannya() {
  // Menyembunyikan elemen dengan ID 'ukurannya'
  document.getElementById('ukurannya').classList.add('hidden');

  // Memutar audio dengan ID 'myAudio'
  const audioElement = document.getElementById('myAudio');
  audioElement.play();
  document.getElementById('salah').classList.remove('hidden');
  document.getElementById('salah').classList.add('zoomOut');
  setTimeout(function () {
    document.getElementById('salah').classList.add('hidden');
  }, 1000);
}

function labelnya() {
  isNextDisable = true;
  // Menyembunyikan elemen dengan ID 'perubahan'
  document.getElementById('jadiBedanya').classList.add('hidden');
  document.getElementById('cNext').setAttribute('href', 'halaman4.html');
  document.getElementById('cNext').classList.remove('cursor-not-allowed');

  // Memutar audio dengan ID 'myAudio'
  const audioElement2 = document.getElementById('myAudio2');
  audioElement2.play();
  document.getElementById('benar').classList.remove('hidden');
  document.getElementById('benar').classList.add('zoomOut');
  document.getElementById('labelBenar').classList.remove('hidden');
  setTimeout(function () {
    document.getElementById('benar').classList.add('hidden');
  }, 1000);
  setTimeout(function () {
    const kesimpulanBedanya = document.getElementById('kesimpulanBedanya');
    kesimpulanBedanya.classList.remove('hidden');
    kesimpulanBedanya.classList.add('zoomIn');
  }, 1000);
}

function lewati1() {
  navbar1.classList.remove('bg-blue-50');
  navbar1.classList.add('bg-[#eff7f6]');
  footer.classList.remove('hidden');
  document.getElementById('allPercakapan').classList.add('hidden');
  isiTransformasi.classList.remove('hidden');
  daftarBesar.classList.remove('animate-pulse');
  daftarBesar.classList.add('md:block');
  daftarBesar.classList.add('');
  sidebarToggle.classList.remove('animate-ping');
  isiTransformasi.classList.remove(
    'animate-pulse',
    'z-50',
    'bg-gray-100',
    'rounded-lg',
    'p-4',
    '-translate-y-16',
    'md:-translate-y-0',
    'scale-90',
    'md:translate-x-40'
  );
  tombolNext.classList.remove('animate-pulse');
  judul.classList.remove('animate-pulse');
}

document.getElementById('tombolNext').addEventListener('click', function () {
  if (!isNextDisable) {
    document.getElementById('notif').classList.remove('hidden');
    const audioElement3 = document.getElementById('myAudio3');
    audioElement3.play();
    setTimeout(function () {
      document.getElementById('notif').classList.add('hidden');
    }, 3000);
  }
});
