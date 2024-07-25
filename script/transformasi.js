function removeanimateTescuy1() {
  var animateTescuy1 = document.getElementById('animateTescuy1');
  animateTescuy1.classList.remove('hidden');

  var play2 = document.getElementById('play2');
  play2.classList.add('hidden');
}

const checkButton = document.getElementById('Check1');

// Tambahkan event listener ke tombol "Check"
checkButton.addEventListener('click', function checkHandler() {
  // Ambil tombol yang sedang memiliki latar belakang gelap
  const activeButton = document.querySelector('#TesPertama1 .bg-secondary');
  const TesKedua = document.getElementById('TesKedua');

  // Jika tombol yang memiliki latar belakang gelap adalah tombol "C1"
  if (activeButton && activeButton.id === 'buttonA1') {
    // Tampilkan pesan "Benar"
    document.getElementById('benar1').classList.remove('hidden');
    document.getElementById('benar1').classList.add('inline-block');
    document.getElementById('buttonA1').classList.add('bg-[#7BFFD0]');
    document.getElementById('buttonA1').classList.remove('bg-secondary');

    document.getElementById('A1').classList.add('border-hijau');
    document.getElementById('A1').classList.add('bg-white');
    // Sembunyikan pesan "Salah"
    document.getElementById('salah1').classList.add('hidden');
    const popupBenar = document.getElementById('popupBenar');
    popupBenar.classList.remove('hidden');
    popupBenar.classList.add('zoomIn');
    const audioElement2 = document.getElementById('myAudio2');
    audioElement2.play();
    setTimeout(function () {
      popupBenar.classList.add('hidden');
    }, 1000);
    setTimeout(function () {
      TesKedua.classList.remove('hidden');
      TesKedua.scrollIntoView({ behavior: 'smooth' });
    }, 2000);
  } else {
    // Tampilkan pesan "Salah"
    document.getElementById('salah1').classList.remove('hidden');
    document.getElementById('salah1').classList.add('inline-block');
    document.getElementById('buttonA1').classList.add('bg-[#7BFFD0]');
    document.getElementById('A1').classList.add('border-hijau');
    document.getElementById('A1').classList.add('bg-white');
    // Sembunyikan pesan "Benar"
    document.getElementById('benar1').classList.add('hidden');
    const popupSalah = document.getElementById('popupSalah');
    popupSalah.classList.remove('hidden');
    popupSalah.classList.add('zoomIn');
    const audioElement = document.getElementById('myAudio');
    audioElement.play();
    setTimeout(function () {
      popupSalah.classList.add('hidden');
    }, 1000);
    setTimeout(function () {
      TesKedua.classList.remove('hidden');
      TesKedua.scrollIntoView({ behavior: 'smooth' });
    }, 2000);
  }

  // Menonaktifkan event listener untuk tombol "Check1"
  checkButton.removeEventListener('click', checkHandler);

  // Menonaktifkan event listener untuk div ABCD
  divs.forEach((div) => {
    div.removeEventListener('click', divClickHandler);
  });
});

// Fungsi untuk menangani klik pada div ABCD
function divClickHandler() {
  // Menghapus kelas "bg-secondary" dari semua tombol
  const buttons = document.querySelectorAll('#TesPertama1 button');
  buttons.forEach((button) => {
    button.classList.remove('bg-secondary');
  });
  // Menambahkan kelas "bg-secondary" ke tombol di dalam div yang diklik
  const button = this.querySelector('button');
  button.classList.add('bg-secondary');

  // Aktifkan tombol "Check1"
  checkButton.removeAttribute('disabled');
}

// Dapatkan referensi ke semua elemen div ABCD
const divs = document.querySelectorAll('#TesPertama1 .flex');

// Tambahkan event listener ke setiap div ABCD
divs.forEach((div) => {
  div.addEventListener('click', divClickHandler);
});

document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('geometryCanvas');
  const ctx = canvas.getContext('2d');
  const notification = document.getElementById('notification');
  const gridSize = 24; // Ukuran grid dalam piksel

  // Canvas dimensions
  canvas.width = 240;
  canvas.height = 240;

  // Triangle coordinates and draggable points
  const triangle = [
    { x: 3 * gridSize, y: 1 * gridSize },
    { x: 4 * gridSize, y: 4 * gridSize },
    { x: 1 * gridSize, y: 5 * gridSize },
  ];
  let points = [
    { x: 48, y: 144 },
    { x: 24, y: 192 },
    { x: 96, y: 216 },
  ];
  let dragPoint = null;

  // Target coordinates
  const targetPoints = [
    { x: 72, y: 120 },
    { x: 144, y: 168 },
    { x: 168, y: 96 },
  ];

  // Function to draw grid
  function drawGrid() {
    ctx.strokeStyle = 'transparent'; // Warna grid

    // Menggambar garis vertikal
    for (let x = 0; x <= canvas.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }

    // Menggambar garis horizontal
    for (let y = 0; y <= canvas.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
  }

  // Function to draw the initial state
  function drawInitialState() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid();

    // Draw mirror line
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.strokeStyle = 'transparent';
    ctx.stroke();

    // Draw static triangle
    drawTriangle(triangle, 'transparent');

    // Draw draggable points
    points.forEach((point) => {
      ctx.beginPath();
      ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#3CD69F';
      ctx.fill();
      ctx.stroke();
    });

    // Connect draggable points
    drawTriangle(points, '#3CD69F');
  }

  function drawTriangle(points, color) {
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    points.forEach((point) => ctx.lineTo(point.x, point.y));
    ctx.closePath();
    ctx.strokeStyle = color;
    ctx.stroke();
  }

  // Mouse and touch event handlers
  function handleMouseDown(e) {
    const mousePos = getMousePos(canvas, e);
    dragPoint = getDragPoint(mousePos);
  }

  function handleMouseMove(e) {
    if (!dragPoint) return;
    const mousePos = getMousePos(canvas, e);
    dragPoint.x = mousePos.x;
    dragPoint.y = mousePos.y;
    drawInitialState();
  }

  function handleMouseUp(e) {
    if (dragPoint) {
      const snappedPos = snapToGrid(dragPoint);
      dragPoint.x = snappedPos.x;
      dragPoint.y = snappedPos.y;
    }
    dragPoint = null;
    drawInitialState();
    updateNotification();
  }

  // Touch event adaptations
  function handleTouchStart(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent('mousedown', {
      clientX: touch.clientX,
      clientY: touch.clientY,
    });
    canvas.dispatchEvent(mouseEvent);
  }

  function handleTouchMove(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent('mousemove', {
      clientX: touch.clientX,
      clientY: touch.clientY,
    });
    canvas.dispatchEvent(mouseEvent);
  }

  function handleTouchEnd(e) {
    if (dragPoint) {
      const snappedPos = snapToGrid(dragPoint);
      dragPoint.x = snappedPos.x;
      dragPoint.y = snappedPos.y;
    }
    dragPoint = null;
    drawInitialState();
    const mouseEvent = new MouseEvent('mouseup', {});
    canvas.dispatchEvent(mouseEvent);
  }

  canvas.addEventListener('mousedown', handleMouseDown);
  canvas.addEventListener('mousemove', handleMouseMove);
  canvas.addEventListener('mouseup', handleMouseUp);
  canvas.addEventListener('touchstart', handleTouchStart, false);
  canvas.addEventListener('touchmove', handleTouchMove, false);
  canvas.addEventListener('touchend', handleTouchEnd, false);

  // Utility functions
  function getMousePos(canvas, evt) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top,
    };
  }

  function getDragPoint(mousePos) {
    return points.find(
      (point) => Math.sqrt((point.x - mousePos.x) ** 2 + (point.y - mousePos.y) ** 2) < 10
    );
  }

  function snapToGrid(point) {
    return {
      x: Math.round(point.x / gridSize) * gridSize,
      y: Math.round(point.y / gridSize) * gridSize,
    };
  }

  function updateNotification() {
    const checkButton = document.getElementById('Check3');
    // Memeriksa apakah tombol "Check" telah diklik
    if (!checkButton.clicked) {
      // Jika belum diklik, tidak melakukan apa-apa
      return;
    }

    // Memeriksa apakah setiap titik berada dalam jarak tertentu dari titik target
    const tolerance = 10; // Jarak toleransi
    const correctPosition = points.every((point) =>
      targetPoints.some(
        (targetPoint) =>
          Math.abs(point.x - targetPoint.x) < tolerance &&
          Math.abs(point.y - targetPoint.y) < tolerance
      )
    );

    // Memperbarui pesan notifikasi berdasarkan hasil pengecekan
    if (correctPosition) {
      // Menghilangkan kelas hidden dari elemen dengan id 'benar3' jika posisi benar
      document.getElementById('benar3').classList.remove('hidden');
      document.getElementById('benar3').classList.add('inline-block');
      document.getElementById('salah3').classList.add('hidden');
      const popupBenar = document.getElementById('popupBenar');
      popupBenar.classList.remove('hidden');
      popupBenar.classList.add('zoomIn');
      const audioElement2 = document.getElementById('myAudio2');
      audioElement2.play();
      setTimeout(function () {
        popupBenar.classList.add('hidden');
      }, 1000);
      setTimeout(function () {
        TesKedua.classList.remove('hidden');
        TesKedua.scrollIntoView({ behavior: 'smooth' });
      }, 2000);
    } else {
      document.getElementById('salah3').classList.remove('hidden');
      document.getElementById('salah3').classList.add('inline-block');
      document.getElementById('benar3').classList.add('hidden');
      const popupSalah = document.getElementById('popupSalah');
      popupSalah.classList.remove('hidden');
      popupSalah.classList.add('zoomIn');
      const audioElement = document.getElementById('myAudio');
      audioElement.play();
      setTimeout(function () {
        popupSalah.classList.add('hidden');
      }, 1000);
      setTimeout(function () {
        TesKedua.classList.remove('hidden');
        TesKedua.scrollIntoView({ behavior: 'smooth' });
      }, 2000);
    }
    // Mengatur kembali status tombol "Check" menjadi belum diklik
    checkButton.clicked = false;
  }

  // Event listener untuk tombol "Check"
  document.getElementById('Check3').addEventListener('click', function () {
    // Set flag clicked ke true ketika tombol "Check" diklik
    this.clicked = true;
    // Panggil fungsi updateNotification setelah tombol diklik
    updateNotification();
  });

  drawInitialState();
});

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

const canvas = document.getElementById('interactiveGridCanvas');
const context = canvas.getContext('2d');
const gridSpacing = 25;

let pointB = { x: 50, y: 50, label: 'A' };
let activePoint = null;

// Function to draw the grid
function drawGrid() {
  context.strokeStyle = '#ddd';
  for (let x = 0; x <= canvas.width; x += gridSpacing) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, canvas.height);
    context.stroke();
  }
  for (let y = 0; y <= canvas.height; y += gridSpacing) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(canvas.width, y);
    context.stroke();
  }
}

// Function to draw the point
function renderPoint(point) {
  context.font = 'bold 13px Arial'; // Set the font size to make it larger
  context.beginPath();
  context.arc(point.x, point.y, 5, 0, 2 * Math.PI);
  context.fillStyle = '#2AC32A';
  context.fill();
  context.fillText(point.label, point.x + 3, point.y - 7); // Adjust the label position
  context.stroke();
}

// Function to clear the canvas and redraw everything
function renderScene() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawGrid();
  renderPoint(pointB);
}

// Utility function to get mouse position relative to canvas
function getMousePosition(canvas, event) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
}

// Snap point to the nearest grid intersection
function snapToGrid(point) {
  return {
    x: Math.round(point.x / gridSpacing) * gridSpacing,
    y: Math.round(point.y / gridSpacing) * gridSpacing,
  };
}

// Function to create and show the div with id 'titikBayangan'
function showTitikBayangan() {
  const div = document.getElementById('titikBayangan');
  // Menampilkan elemen
  div.style.display = 'block';

  setTimeout(function () {
    const cobaPersegiABCD = document.getElementById('cobaPersegiABCD');
    cobaPersegiABCD.classList.remove('hidden');
    cobaPersegiABCD.classList.add('zoomIn');
    cobaPersegiABCD.scrollIntoView({ behavior: 'smooth' });
  }, 1000);
}

// Event listeners for drag and drop functionality
canvas.addEventListener('mousedown', (e) => {
  const mousePosition = getMousePosition(canvas, e);
  if (Math.sqrt((mousePosition.x - pointB.x) ** 2 + (mousePosition.y - pointB.y) ** 2) < 10) {
    activePoint = pointB;
  }
});

canvas.addEventListener('mousemove', (e) => {
  if (activePoint) {
    const mousePosition = getMousePosition(canvas, e);
    activePoint.x = mousePosition.x;
    activePoint.y = mousePosition.y;
    renderScene();
  }
});

canvas.addEventListener('mouseup', () => {
  if (activePoint) {
    const snappedPosition = snapToGrid(activePoint);
    activePoint.x = snappedPosition.x;
    activePoint.y = snappedPosition.y;
    activePoint.label = "A'";
    activePoint = null;
    renderScene();
    showTitikBayangan(); // Call the function to show the div
  }
});

// Event listeners for touch events
canvas.addEventListener('touchstart', (e) => {
  e.preventDefault();
  const touch = e.touches[0];
  const mouseEvent = new MouseEvent('mousedown', {
    clientX: touch.clientX,
    clientY: touch.clientY,
  });
  canvas.dispatchEvent(mouseEvent);
});

canvas.addEventListener('touchmove', (e) => {
  e.preventDefault();
  const touch = e.touches[0];
  const mouseEvent = new MouseEvent('mousemove', {
    clientX: touch.clientX,
    clientY: touch.clientY,
  });
  canvas.dispatchEvent(mouseEvent);
});

canvas.addEventListener('touchend', (e) => {
  const mouseEvent = new MouseEvent('mouseup', {});
  canvas.dispatchEvent(mouseEvent);
});

// Initial drawing
renderScene();
