/**
 * ============================================================
 * GAMES 1# MARKET - JAVASCRIPT LENGKAP (TAILWIND + GITHUB PAGES)
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Base URL GitHub Pages
  const CDN_BASE = 'https://navazanstudio.github.io/aplikom/assets-aplikom';

  // ------------------------------------------------------------
  // REFERENSI DOM SEMUA SLIDE
  // ------------------------------------------------------------
  const slide1 = document.getElementById('slide-1');
  const slide2 = document.getElementById('slide-2');
  const slide3 = document.getElementById('slide-3');
  const slide4 = document.getElementById('slide-4');
  const slide5 = document.getElementById('slide-5');
  const slide6 = document.getElementById('slide-6');
  const slide7 = document.getElementById('slide-7');
  const slide8 = document.getElementById('slide-8');
  const slide8Wrong = document.getElementById('slide-8-wrong');
  const slide9 = document.getElementById('slide-9');
  const slide10 = document.getElementById('slide-10');
  const slide11 = document.getElementById('slide-11');
  const slide12 = document.getElementById('slide-12');
  const slide13 = document.getElementById('slide-13');
  const slide14 = document.getElementById('slide-14');
  const slide15 = document.getElementById('slide-15');
  const slide16 = document.getElementById('slide-16');
  const slide17 = document.getElementById('slide-17');
  const slide17Wrong = document.getElementById('slide-17-wrong');
  const slide18 = document.getElementById('slide-18');
  const slideBelanjaKuis1 = document.getElementById('slide-belanja-kuis1');
  const slideBelanjaQ1Wrong = document.getElementById('slide-belanja-q1-wrong');
  const slideBelanjaQ1Right = document.getElementById('slide-belanja-q1-right');
  const slideBelanjaKuis2 = document.getElementById('slide-belanja-kuis2');
  const slideBelanjaQ2Wrong = document.getElementById('slide-belanja-q2-wrong');
  const slideBelanjaQ2Right = document.getElementById('slide-belanja-q2-right');
  const slideBelanjaKuis3 = document.getElementById('slide-belanja-kuis3');
  const slideBelanjaQ3Wrong = document.getElementById('slide-belanja-q3-wrong');
  const slideBelanjaQ3Right = document.getElementById('slide-belanja-q3-right');
  const slideBelanjaKuis4 = document.getElementById('slide-belanja-kuis4');
  const slideBelanjaQ4Wrong = document.getElementById('slide-belanja-q4-wrong');
  const slideBelanjaQ4Right = document.getElementById('slide-belanja-q4-right');
  const slideBelanjaKuis5 = document.getElementById('slide-belanja-kuis5');
  const slideBelanjaQ5Wrong = document.getElementById('slide-belanja-q5-wrong');
  const slideBelanjaQ5Right = document.getElementById('slide-belanja-q5-right');

  // Referensi Audio Rekaman Asli
  const audioKasirPlayer = document.getElementById('audio-kasir-player');
  const audioRasioPlayer = document.getElementById('audio-rasio-player');
  const audioKesamaanPlayer = document.getElementById('audio-kesamaan-player');
  const audioEsSirupPlayer = document.getElementById('audio-es-sirup-player');
  const audioRahasiaSirupPlayer = document.getElementById('audio-rahasia-sirup-player');

  // Referensi Transisi & Audio Global
  const transitionScreen = document.getElementById('transition-screen');
  const transitionLabel = document.getElementById('transition-label');
  const btnSoundToggle = document.getElementById('btn-sound-toggle');
  const soundIcon = document.getElementById('sound-icon');

  // Slide 1
  const btnStart = document.getElementById('btn-start');

  // Slide 2
  const btnReplayVoice = document.getElementById('btn-replay-voice');
  const voiceAnimIcon = document.getElementById('voice-anim-icon');
  const btnS2Menu = document.getElementById('btn-s2-menu');
  const btnS2Back = document.getElementById('btn-s2-back');

  const kasirNisaImg = document.getElementById('kasir-nisa-img');
  const kasirFrames = [
    `${CDN_BASE}/SLIDE%202/KASIR%20CROP/1%20(1).png`,
    `${CDN_BASE}/SLIDE%202/KASIR%20CROP/2%20(1).png`,
    `${CDN_BASE}/SLIDE%202/KASIR%20CROP/3%20(1).png`,
    `${CDN_BASE}/SLIDE%202/KASIR%20CROP/4%20(1).png`,
    `${CDN_BASE}/SLIDE%202/KASIR%20CROP/5%20(1).png`,
    `${CDN_BASE}/SLIDE%202/KASIR%20CROP/6%20(1).png`
  ];
  let kasirAnimInterval = null;
  let kasirFrameIndex = 0;

  // Preload seluruh frame agar pergantian ekspresi mulus tanpa kedip
  kasirFrames.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  function startKasirAnimation() {
    stopKasirAnimation();
    if (!kasirNisaImg) return;
    kasirFrameIndex = 0;
    kasirNisaImg.src = kasirFrames[0];
    kasirAnimInterval = setInterval(() => {
      kasirFrameIndex = (kasirFrameIndex + 1) % kasirFrames.length;
      kasirNisaImg.src = kasirFrames[kasirFrameIndex];
    }, 600);
  }

  function stopKasirAnimation() {
    if (kasirAnimInterval) {
      clearInterval(kasirAnimInterval);
      kasirAnimInterval = null;
    }
  }

  // Slide 3
  const btnS3Troli = document.getElementById('btn-s3-troli');
  const btnS3Belanja = document.getElementById('btn-s3-belanja');
  const btnS3Back = document.getElementById('btn-s3-back');

  // Slide 4
  const btnS4Meracik = document.getElementById('btn-s4-meracik');
  const btnS4Rasio = document.getElementById('btn-s4-rasio');
  const btnS4Back = document.getElementById('btn-s4-back');
  const btnS4Next = document.getElementById('btn-s4-next');

  // Slide 5
  const bubble1Overlay = document.getElementById('bubble-1-overlay');
  const bubble2Overlay = document.getElementById('bubble-2-overlay');
  const siswi5Frames = document.querySelectorAll('#siswi-s5-stage .siswi-frame');
  const btnS5Voice = document.getElementById('btn-s5-voice');
  const s5VoiceIcon = document.getElementById('s5-voice-icon');
  const explanationText = document.getElementById('explanation-text');
  const btnS5Back = document.getElementById('btn-s5-back');
  const btnS5Next = document.getElementById('btn-s5-next');

  let siswi5AnimInterval = null;
  const siswi5Order = [0, 1, 2, 3, 4, 3, 2, 1];
  let siswi5Step = 0;

  function startSiswi5Animation() {
    stopSiswi5Animation();
    if (!siswi5Frames || siswi5Frames.length === 0) return;
    siswi5Step = 0;
    siswi5Frames.forEach((frame, idx) => {
      frame.classList.toggle('opacity-100', idx === 0);
      frame.classList.toggle('opacity-0', idx !== 0);
    });
    siswi5AnimInterval = setInterval(() => {
      siswi5Step = (siswi5Step + 1) % siswi5Order.length;
      const activeIdx = siswi5Order[siswi5Step];
      siswi5Frames.forEach((frame, idx) => {
        frame.classList.toggle('opacity-100', idx === activeIdx);
        frame.classList.toggle('opacity-0', idx !== activeIdx);
      });
    }, 480);
  }

  function stopSiswi5Animation() {
    if (siswi5AnimInterval) {
      clearInterval(siswi5AnimInterval);
      siswi5AnimInterval = null;
    }
  }

  // Slide 6 (Interaktif Drag & Drop Troli)
  const trolleyDropZone = document.getElementById('trolley-drop-zone');
  const cartItemsVisual = document.getElementById('cart-items-visual');
  const badgeCountTotal = document.getElementById('badge-count-total');
  const countSemangkaEl = document.getElementById('count-semangka');
  const countSusuEl = document.getElementById('count-susu');
  const countSayurEl = document.getElementById('count-sayur');
  const countBotolEl = document.getElementById('count-botol');
  const cartDetailSummary = document.getElementById('cart-detail-summary');
  const btnResetTroli = document.getElementById('btn-reset-troli');
  const btnCekTroli = document.getElementById('btn-cek-troli');
  const btnS6Back = document.getElementById('btn-s6-back');
  const btnS6Next = document.getElementById('btn-s6-next');

  // Slide 7
  const btnS7Voice = document.getElementById('btn-s7-voice');
  const s7VoiceIcon = document.getElementById('s7-voice-icon');
  const btnS7Back = document.getElementById('btn-s7-back');
  const btnS7Next = document.getElementById('btn-s7-next');

  // Slide 8 & 8-Wrong
  const btnS8Voice = document.getElementById('btn-s8-voice');
  const s8VoiceIcon = document.getElementById('s8-voice-icon');
  const quizOptionButtons = [
    document.getElementById('btn-quiz-a'),
    document.getElementById('btn-quiz-b'),
    document.getElementById('btn-quiz-c'),
    document.getElementById('btn-quiz-d')
  ];
  const btnS8Back = document.getElementById('btn-s8-back');
  const btnS8Next = document.getElementById('btn-s8-next');
  const btnS8wVoice = document.getElementById('btn-s8w-voice');
  const s8wVoiceIcon = document.getElementById('s8w-voice-icon');
  const btnS8wBack = document.getElementById('btn-s8w-back');

  // Slide 9, 10, 11
  const btnS9Voice = document.getElementById('btn-s9-voice');
  const s9VoiceIcon = document.getElementById('s9-voice-icon');
  const btnS9Back = document.getElementById('btn-s9-back');
  const btnS9Next = document.getElementById('btn-s9-next');
  const btnS10Voice = document.getElementById('btn-s10-voice');
  const s10VoiceIcon = document.getElementById('s10-voice-icon');
  const btnS10Troli = document.getElementById('btn-s10-troli');
  const btnS11Voice = document.getElementById('btn-s11-voice');
  const s11VoiceIcon = document.getElementById('s11-voice-icon');
  const btnS11Meracik = document.getElementById('btn-s11-meracik');
  const btnS11Kesamaan = document.getElementById('btn-s11-kesamaan');
  const btnS11Back = document.getElementById('btn-s11-back');
  const btnS11Next = document.getElementById('btn-s11-next');

  // Slide 12, 13, 14
  const btnS12Voice = document.getElementById('btn-s12-voice');
  const s12VoiceIcon = document.getElementById('s12-voice-icon');
  const btnS12Next = document.getElementById('btn-s12-next');
  const btnS13Voice = document.getElementById('btn-s13-voice');
  const s13VoiceIcon = document.getElementById('s13-voice-icon');
  const btnS13Back = document.getElementById('btn-s13-back');
  const btnS13Next = document.getElementById('btn-s13-next');
  const btnS14Voice = document.getElementById('btn-s14-voice');
  const s14VoiceIcon = document.getElementById('s14-voice-icon');
  const btnS14Back = document.getElementById('btn-s14-back');
  const btnS14Next = document.getElementById('btn-s14-next');

  // Slide 15 (Simulasi)
  const sliderSirup = document.getElementById('slider-sirup');
  const sliderAir = document.getElementById('slider-air');
  const labelValSirup = document.getElementById('label-val-sirup');
  const labelValAir = document.getElementById('label-val-air');
  const textRasioMentah = document.getElementById('text-rasio-mentah');
  const textRasioSederhana = document.getElementById('text-rasio-sederhana');
  const textTotalCampuran = document.getElementById('text-total-campuran');
  const badgeTasteStatus = document.getElementById('badge-taste-status');
  const tasteIcon = document.getElementById('taste-icon');
  const tasteText = document.getElementById('taste-text');
  const liquidAir = document.getElementById('liquid-air');
  const liquidSirup = document.getElementById('liquid-sirup');
  const labelLiquidAir = document.getElementById('label-liquid-air');
  const labelLiquidSirup = document.getElementById('label-liquid-sirup');
  const btnS15Voice = document.getElementById('btn-s15-voice');
  const s15VoiceIcon = document.getElementById('s15-voice-icon');
  const btnS15Back = document.getElementById('btn-s15-back');
  const btnS15Next = document.getElementById('btn-s15-next');

  // Slide 16, 17, 17-Wrong, 18
  const btnS16Voice = document.getElementById('btn-s16-voice');
  const s16VoiceIcon = document.getElementById('s16-voice-icon');
  const btnS16Back = document.getElementById('btn-s16-back');
  const btnS16Next = document.getElementById('btn-s16-next');
  const btnS17Voice = document.getElementById('btn-s17-voice');
  const s17VoiceIcon = document.getElementById('s17-voice-icon');
  const quiz2OptionButtons = [
    document.getElementById('btn-quiz2-a'),
    document.getElementById('btn-quiz2-b'),
    document.getElementById('btn-quiz2-c'),
    document.getElementById('btn-quiz2-d')
  ];
  const btnS17Back = document.getElementById('btn-s17-back');
  const btnS17wVoice = document.getElementById('btn-s17w-voice');
  const s17wVoiceIcon = document.getElementById('s17w-voice-icon');
  const btnS17wBack = document.getElementById('btn-s17w-back');
  const btnS18Voice = document.getElementById('btn-s18-voice');
  const s18VoiceIcon = document.getElementById('s18-voice-icon');
  const btnS18Menu = document.getElementById('btn-s18-menu');

  // Kuis Belanja 1–5
  const btnBk1Voice = document.getElementById('btn-bk1-voice');
  const bk1VoiceIcon = document.getElementById('bk1-voice-icon');
  const bk1OptionButtons = [
    document.getElementById('btn-bk1-opt-a'),
    document.getElementById('btn-bk1-opt-b'),
    document.getElementById('btn-bk1-opt-c'),
    document.getElementById('btn-bk1-opt-d')
  ];
  const btnBk1Back = document.getElementById('btn-bk1-back');
  const btnBk1wVoice = document.getElementById('btn-bk1w-voice');
  const bk1wVoiceIcon = document.getElementById('bk1w-voice-icon');
  const btnBk1wBack = document.getElementById('btn-bk1w-back');
  const btnBk1rVoice = document.getElementById('btn-bk1r-voice');
  const bk1rVoiceIcon = document.getElementById('bk1r-voice-icon');
  const btnBk1rNext = document.getElementById('btn-bk1r-next');

  const btnBk2Voice = document.getElementById('btn-bk2-voice');
  const bk2VoiceIcon = document.getElementById('bk2-voice-icon');
  const bk2OptionButtons = [
    document.getElementById('btn-bk2-opt-a'),
    document.getElementById('btn-bk2-opt-b'),
    document.getElementById('btn-bk2-opt-c'),
    document.getElementById('btn-bk2-opt-d')
  ];
  const btnBk2Back = document.getElementById('btn-bk2-back');
  const btnBk2wVoice = document.getElementById('btn-bk2w-voice');
  const bk2wVoiceIcon = document.getElementById('bk2w-voice-icon');
  const btnBk2wBack = document.getElementById('btn-bk2w-back');
  const btnBk2rVoice = document.getElementById('btn-bk2r-voice');
  const bk2rVoiceIcon = document.getElementById('bk2r-voice-icon');
  const btnBk2rNext = document.getElementById('btn-bk2r-next');

  const btnBk3Voice = document.getElementById('btn-bk3-voice');
  const bk3VoiceIcon = document.getElementById('bk3-voice-icon');
  const bk3OptionButtons = [
    document.getElementById('btn-bk3-opt-a'),
    document.getElementById('btn-bk3-opt-b'),
    document.getElementById('btn-bk3-opt-c'),
    document.getElementById('btn-bk3-opt-d')
  ];
  const btnBk3Back = document.getElementById('btn-bk3-back');
  const btnBk3wVoice = document.getElementById('btn-bk3w-voice');
  const bk3wVoiceIcon = document.getElementById('bk3w-voice-icon');
  const btnBk3wBack = document.getElementById('btn-bk3w-back');
  const btnBk3rVoice = document.getElementById('btn-bk3r-voice');
  const bk3rVoiceIcon = document.getElementById('bk3r-voice-icon');
  const btnBk3rNext = document.getElementById('btn-bk3r-next');

  const btnBk4Voice = document.getElementById('btn-bk4-voice');
  const bk4VoiceIcon = document.getElementById('bk4-voice-icon');
  const bk4OptionButtons = [
    document.getElementById('btn-bk4-opt-a'),
    document.getElementById('btn-bk4-opt-b'),
    document.getElementById('btn-bk4-opt-c'),
    document.getElementById('btn-bk4-opt-d')
  ];
  const btnBk4Back = document.getElementById('btn-bk4-back');
  const btnBk4wVoice = document.getElementById('btn-bk4w-voice');
  const bk4wVoiceIcon = document.getElementById('bk4w-voice-icon');
  const btnBk4wBack = document.getElementById('btn-bk4w-back');
  const btnBk4rVoice = document.getElementById('btn-bk4r-voice');
  const bk4rVoiceIcon = document.getElementById('bk4r-voice-icon');
  const btnBk4rNext = document.getElementById('btn-bk4r-next');

  const btnBk5Voice = document.getElementById('btn-bk5-voice');
  const bk5VoiceIcon = document.getElementById('bk5-voice-icon');
  const bk5OptionButtons = [
    document.getElementById('btn-bk5-opt-a'),
    document.getElementById('btn-bk5-opt-b'),
    document.getElementById('btn-bk5-opt-c'),
    document.getElementById('btn-bk5-opt-d')
  ];
  const btnBk5Back = document.getElementById('btn-bk5-back');
  const btnBk5wVoice = document.getElementById('btn-bk5w-voice');
  const bk5wVoiceIcon = document.getElementById('bk5w-voice-icon');
  const btnBk5wBack = document.getElementById('btn-bk5w-back');
  const btnBk5rVoice = document.getElementById('btn-bk5r-voice');
  const bk5rVoiceIcon = document.getElementById('bk5r-voice-icon');
  const btnBk5rNext = document.getElementById('btn-bk5r-next');

  // Toast Notifikasi
  const toastNotification = document.getElementById('toast-notification');
  const toastIcon = document.getElementById('toast-icon');
  const toastMessage = document.getElementById('toast-message');

  // ------------------------------------------------------------
  // TEKS DIALOG & NARASI TTS
  // ------------------------------------------------------------
  const nisaDialogue = "Halo! Selamat datang di First Market! Mau pilih troli materi atau langsung mulai belanja?";
  const siswiSpeech1 = "Rasio atau perbandingan adalah ukuran matematika yang digunakan untuk membandingkan dua nilai atau lebih yang memiliki satuan yang sama atau sejenis.";
  const siswiSpeech2 = "Untuk mengetahui konsep rasio, yuk ambil barangmu dan bandingkan banyak jumlahnya!";
  const siswiSpeech6 = "Dua semangka dan empat susu sudah dimasukkan ke dalam keranjang belanja! Yuk lanjut untuk melihat perbandingan rasionya.";
  const siswiSpeech7 = "Karena kamu sudah mengambil dua semangka dan empat susu, maka rasio antara semangka terhadap susu adalah dua banding empat!";
  const siswiSpeech8 = "Ayo uji pemahamanmu! Berapakah rasio jumlah susu terhadap semangka? Silakan pilih jawaban yang paling tepat ya!";
  const siswiWrongSpeech = "Yah, jawabanmu masih salah! Jangan menyerah, yuk klik tombol Kembali ke Soal dan coba lagi ya!";
  const siswiSpeech9 = "Hore, jawabanmu benar! Untuk menentukan rasio antara dua kelompok barang, kita membandingkan banyaknya barang pertama yaitu susu, dengan barang kedua yaitu semangka secara berurutan. Jadi rasionya adalah empat banding dua!";
  const siswiSpeech10 = "Urutan di dalam rasio tidak boleh dibalik! Rasio semangka banding susu tidak sama nilainya dengan susu banding semangka. Dua banding empat tidak sama nilainya dengan empat banding dua! Jika kita mengubah urutan nama barangnya, maka angka perbandingannya juga wajib dibalik agar maknanya tetap benar.";
  const siswiSpeech11 = "Kamu telah kembali ke pilihan materi di dalam troli belanjamu! Silakan klik Meracik Troli untuk mengulang materi atau pilih Kesamaan Rasio Belanja untuk materi selanjutnya!";
  const siswiSpeech12 = "Kesamaan rasio atau rasio senilai adalah dua atau lebih rasio yang memiliki nilai perbandingan yang sama, meskipun angka-angkanya terlihat berbeda.";
  const siswiSpeech13 = "Pernahkah kalian membuat es sirup yang rasanya pas banget tidak terlalu manis dan tidak tawar? Nah, bagaimana kalau kalian ingin membuat sirup dalam wadah yang lebih besar? Apakah jumlah sirup dan airnya tinggal ditambah asal-asalan? Agar rasa manisnya tetap stabil, tidak kemanisan dan juga tidak hambar, kita harus menjaga kesamaan rasio antara sirup dan air.";
  const siswiSpeech14 = "Rasa manisnya sama persis karena perbandingannya sama! Kalau airnya makin banyak, sirupnya juga harus makin banyak dengan kelipatan yang sama. Jadi, rahasia bikin sirup yang enak itu bukan cuma harus pas perbandingannya!";
  const siswiSpeech15 = "Yuk coba simulasikan meracik sirup dan air! Geser takaran sendok sirup dan gelas air untuk melihat perbandingan rasio mentah dan bentuk rasio sederhananya. Perhatikan bagaimana rasanya tetap pas jika rasionya senilai!";
  const siswiSpeech16 = "Mari kita pelajari contoh soal berikut! Untuk membuat 1 gelas es jeruk, Ibu membutuhkan 3 buah jeruk. Berapa buah jeruk yang dibutuhkan jika ingin membuat 4 gelas es jeruk dengan rasa yang sama? Rasio dasarnya adalah 1 gelas butuh 3 jeruk. Maka untuk 4 gelas, perhitungannya adalah 4 dikali 3 sama dengan 12 jeruk! Rasio 4 banding 12 sama nilainya dengan 1 banding 3.";
  const siswiSpeech17 = "Ayo uji kemampuanmu! Untuk membuat 1 gelas es sirup yang manis dan enak, Kakak memasukkan 5 sendok makan sirup. Berapa banyak sendok makan sirup yang dibutuhkan jika Kakak ingin membuat 3 gelas es sirup agar tetap manis dan enak?";
  const siswiSpeech17Wrong = "Yah, jawabanmu masih belum tepat! Ingat rasio dasarnya: satu gelas butuh lima sendok sirup. Jika ingin membuat tiga gelas, kalikan dengan tiga ya! Yuk klik tombol Kembali ke Soal dan coba lagi!";
  const siswiSpeech18 = "Hore, jawabanmu benar! Jawabannya adalah C, yaitu 15 sendok makan. Karena rasio dasarnya 1 gelas butuh 5 sendok sirup, maka untuk 3 gelas, perhitungannya adalah 3 dikali 5 sama dengan 15 sendok makan. Rasio 3 banding 15 senilai dengan 1 banding 5!";
  const siswiSpeechBK1 = "Di dalam keranjang terdapat 12 buah apel merah dan 18 buah apel hijau. Berapakah rasio dari jumlah apel merah terhadap jumlah apel hijau? Ayo pilih jawaban yang benar ya!";
  const siswiSpeechBK1Right = "Hore, jawabanmu benar! Kunci jawabannya adalah A, yaitu 12 banding 18. Apel merah ada 12 dan apel hijau ada 18. Hebat! Yuk lanjut ke kuis berikutnya!";
  const siswiSpeechBKWrong = "Yah, jawabanmu belum tepat! Jangan berkecil hati, yuk klik tombol Kembali dan coba lagi ya!";
  const siswiSpeechBK2 = "Ibu membuat adonan kue dengan mencampur 9 cangkir tepung terigu dan 6 cangkir gula pasir. Berapa rasio paling sederhana dari jumlah tepung dan gula pasir? Pilih jawaban yang paling tepat ya!";
  const siswiSpeechBK2Right = "Luar biasa, jawabanmu benar! Kunci jawabannya adalah D, yaitu 3 banding 2. Bentuk paling sederhana dari 9 banding 6 adalah 3 banding 2. Bagus sekali! Yuk lanjut ke kuis 3!";
  const siswiSpeechBK3 = "Di kelas 7 SMP, terdapat 16 siswa laki-laki dan 24 siswa perempuan. Berapakah rasio siswa laki-laki terhadap total seluruh siswa di kelas tersebut dalam bentuk paling sederhana? Ayo hitung dan pilih jawaban yang benar ya!";
  const siswiSpeechBK3Right = "Hore, jawabanmu benar! Kunci jawabannya adalah C, yaitu 2 banding 5. Total seluruh siswa adalah 16 ditambah 24 yaitu 40. Maka rasionya 16 banding 40 yang jika disederhanakan menjadi 2 banding 5. Hebat! Yuk lanjut ke kuis 4!";
  const siswiSpeechBK4 = "Sebuah mobil memerlukan 4 liter bensin untuk menempuh jarak 60 km. Jika mobil tersebut ingin menempuh jarak 120 km dengan kecepatan dan kondisi yang sama, berapa liter bensin yang diperlukan?";
  const siswiSpeechBK4Right = "Luar biasa, jawabanmu benar! Kunci jawabannya adalah B, yaitu 8 liter. Karena jarak 120 km adalah 2 kali lipat dari 60 km, maka bensinnya juga 2 kali lipat, yaitu 4 dikali 2 sama dengan 8 liter. Bagus sekali! Yuk lanjut ke kuis 5!";
  const siswiSpeechBK5 = "Di dalam dompet Andi terdapat uang pecahan Rp5.000 sebanyak 8 lembar dan uang pecahan Rp10.000 sebanyak 4 lembar. Manakah pernyataan rasio yang tepat untuk menyatakan jumlah lembar uang Rp5.000 terhadap uang Rp10.000 dalam bentuk paling sederhana?";
  const siswiSpeechBK5Right = "Selamat! Jawabanmu benar! Kunci jawabannya adalah D, yaitu 2 banding 1. Rasio 8 lembar dibanding 4 lembar disederhanakan menjadi 2 banding 1. Kamu telah berhasil menyelesaikan seluruh kuis belanja dari nomor 1 sampai nomor 5! Keren banget!";

  // ------------------------------------------------------------
  // STATE MANAGEMENT
  // ------------------------------------------------------------
  let isSoundEnabled = true;
  let audioCtx = null;
  let isTransitioning = false;
  let toastTimer = null;
  let slide5Stage = 1;
  let slide5Timer = null;
  let slide6Timers = [];
  let ttsFallbackTimer = null;

  // ------------------------------------------------------------
  // AUDIO CONTEXT & SFX GENERATOR
  // ------------------------------------------------------------
  function initAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume().catch(() => {});
    }
  }

  function playTone(freq, type, duration, startTime = 0, volume = 0.15) {
    if (!isSoundEnabled || !audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime + startTime);
      gain.gain.setValueAtTime(volume, audioCtx.currentTime + startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + startTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(audioCtx.currentTime + startTime);
      osc.stop(audioCtx.currentTime + startTime + duration);
    } catch (e) {
      console.warn('Audio play error:', e);
    }
  }

  function playStartGameSFX() {
    initAudioContext();
    playTone(523.25, 'triangle', 0.12, 0.00, 0.18);
    playTone(659.25, 'triangle', 0.12, 0.08, 0.18);
    playTone(783.99, 'triangle', 0.12, 0.16, 0.18);
    playTone(1046.50, 'sine', 0.35, 0.24, 0.22);
  }

  function playDoorBellSFX() {
    initAudioContext();
    playTone(880.00, 'sine', 0.35, 0.0, 0.14);
    playTone(700.00, 'sine', 0.55, 0.22, 0.14);
  }

  function playNavSFX() {
    initAudioContext();
    playTone(580, 'sine', 0.08, 0, 0.14);
    playTone(880, 'sine', 0.14, 0.05, 0.16);
  }

  function playBubbleShiftSFX() {
    initAudioContext();
    playTone(680, 'sine', 0.1, 0, 0.15);
    playTone(920, 'triangle', 0.18, 0.07, 0.18);
  }

  function playSelectSFX() {
    initAudioContext();
    playTone(740, 'triangle', 0.09, 0, 0.15);
    playTone(1100, 'sine', 0.18, 0.06, 0.18);
  }

  function playBackSFX() {
    initAudioContext();
    playTone(420, 'sine', 0.08, 0, 0.12);
    playTone(320, 'sine', 0.12, 0.06, 0.12);
  }

  function playPopSFX() {
    initAudioContext();
    playTone(750, 'sine', 0.06, 0, 0.20);
    playTone(1200, 'triangle', 0.12, 0.04, 0.22);
  }

  function playChimeSFX() {
    initAudioContext();
    playTone(987.77, 'sine', 0.10, 0, 0.16);
    playTone(1318.51, 'sine', 0.20, 0.06, 0.20);
  }

  function playSuccessSFX() {
    initAudioContext();
    playTone(523.25, 'triangle', 0.10, 0.00, 0.15);
    playTone(659.25, 'triangle', 0.10, 0.08, 0.15);
    playTone(783.99, 'triangle', 0.12, 0.16, 0.18);
    playTone(1046.50, 'sine', 0.35, 0.24, 0.22);
  }

  function playCelebrationChime() {
    initAudioContext();
    playTone(523.25, 'triangle', 0.10, 0.00, 0.16);
    playTone(659.25, 'triangle', 0.10, 0.07, 0.16);
    playTone(783.99, 'triangle', 0.12, 0.14, 0.18);
    playTone(1046.50, 'triangle', 0.14, 0.21, 0.20);
    playTone(1318.51, 'sine', 0.40, 0.28, 0.22);
  }

  function playCorrectSFX() {
    initAudioContext();
    playTone(659.25, 'triangle', 0.12, 0.00, 0.20);
    playTone(880.00, 'triangle', 0.12, 0.08, 0.22);
    playTone(1318.51, 'sine', 0.35, 0.16, 0.25);
  }

  function playWrongSFX() {
    initAudioContext();
    playTone(350, 'sawtooth', 0.15, 0, 0.15);
    playTone(260, 'sine', 0.25, 0.1, 0.18);
  }

  const allAudioPlayers = [
    audioKasirPlayer,
    audioRasioPlayer,
    audioKesamaanPlayer,
    audioEsSirupPlayer,
    audioRahasiaSirupPlayer
  ];

  const allVoiceButtons = [
    btnReplayVoice, btnS5Voice, btnS7Voice, btnS8Voice, btnS8wVoice, btnS9Voice, btnS10Voice,
    btnS11Voice, btnS12Voice, btnS13Voice, btnS14Voice, btnS15Voice, btnS16Voice, btnS17Voice,
    btnS17wVoice, btnS18Voice, btnBk1Voice, btnBk1wVoice, btnBk1rVoice, btnBk2Voice, btnBk2wVoice,
    btnBk2rVoice, btnBk3Voice, btnBk3wVoice, btnBk3rVoice, btnBk4Voice, btnBk4wVoice, btnBk4rVoice,
    btnBk5Voice, btnBk5wVoice, btnBk5rVoice
  ];

  const allVoiceIcons = [
    voiceAnimIcon, s5VoiceIcon, s7VoiceIcon, s8VoiceIcon, s8wVoiceIcon, s9VoiceIcon, s10VoiceIcon,
    s11VoiceIcon, s12VoiceIcon, s13VoiceIcon, s14VoiceIcon, s15VoiceIcon, s16VoiceIcon, s17VoiceIcon,
    s17wVoiceIcon, s18VoiceIcon, bk1VoiceIcon, bk1wVoiceIcon, bk1rVoiceIcon, bk2VoiceIcon, bk2wVoiceIcon,
    bk2rVoiceIcon, bk3VoiceIcon, bk3wVoiceIcon, bk3rVoiceIcon, bk4VoiceIcon, bk4wVoiceIcon, bk4rVoiceIcon,
    bk5VoiceIcon, bk5wVoiceIcon, bk5rVoiceIcon
  ];

  function clearSpeakingState() {
    allVoiceButtons.forEach(b => b && b.classList.remove('speaking'));
    allVoiceIcons.forEach(i => { if (i) i.textContent = '🔊'; });
  }

  function stopAllAudio() {
    if (ttsFallbackTimer) {
      clearTimeout(ttsFallbackTimer);
      ttsFallbackTimer = null;
    }
    allAudioPlayers.forEach(player => {
      if (player) {
        player.pause();
        player.currentTime = 0;
      }
    });
    if (window.speechSynthesis) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
    }
    clearSpeakingState();
  }

  if (btnSoundToggle) {
    btnSoundToggle.addEventListener('click', () => {
      initAudioContext();
      isSoundEnabled = !isSoundEnabled;
      if (soundIcon) soundIcon.textContent = isSoundEnabled ? '🔊' : '🔇';
      btnSoundToggle.title = isSoundEnabled ? 'Suara Aktif' : 'Suara Mati';

      allAudioPlayers.forEach(player => {
        if (player) player.muted = !isSoundEnabled;
      });

      if (!isSoundEnabled) {
        stopAllAudio();
      } else {
        playTone(600, 'sine', 0.1, 0, 0.15);
      }
    });
  }

  // ------------------------------------------------------------
  // TEXT-TO-SPEECH SUARA SISWI INDONESIA
  // ------------------------------------------------------------
  function getFemaleIndonesianVoice() {
    if (!window.speechSynthesis) return null;
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return null;

    const gadisVoice = voices.find(v => {
      const n = v.name.toLowerCase();
      const l = v.lang.toLowerCase();
      return (l.includes('id') || n.includes('indonesia')) && n.includes('gadis');
    });
    if (gadisVoice) return gadisVoice;

    const naturalVoice = voices.find(v => {
      const n = v.name.toLowerCase();
      const l = v.lang.toLowerCase();
      const isIndo = l.includes('id') || n.includes('indonesia');
      const isFemale = n.includes('female') || n.includes('wanita') || n.includes('siti');
      return isIndo && isFemale && (n.includes('natural') || n.includes('online'));
    });
    if (naturalVoice) return naturalVoice;

    const femaleVoice = voices.find(v => {
      const n = v.name.toLowerCase();
      const l = v.lang.toLowerCase();
      const isIndo = l.includes('id') || n.includes('indonesia');
      const isFemale = n.includes('female') || n.includes('wanita') || n.includes('siti') || n.includes('cewek');
      return isIndo && isFemale;
    });
    if (femaleVoice) return femaleVoice;

    const anyIndoVoice = voices.find(v => {
      const l = v.lang.toLowerCase();
      const n = v.name.toLowerCase();
      return l.startsWith('id') || l.includes('id-id') || n.includes('indonesia');
    });
    if (anyIndoVoice) return anyIndoVoice;

    return voices.find(v => v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('girl')) || voices[0];
  }

  function speakSiswi(text, onCompleteCallback = null, targetBtn = null, targetIcon = null) {
    const btn = targetBtn || btnS5Voice;
    const icon = targetIcon || s5VoiceIcon;
    const estimatedMs = Math.max(1600, Math.min(18000, (text.length / 13) * 1000));

    let finished = false;
    const done = () => {
      if (finished) return;
      finished = true;
      if (ttsFallbackTimer) {
        clearTimeout(ttsFallbackTimer);
        ttsFallbackTimer = null;
      }
      if (btn) btn.classList.remove('speaking');
      if (icon) icon.textContent = '🔊';
      if (onCompleteCallback) onCompleteCallback();
    };

    if (!window.speechSynthesis || !isSoundEnabled) {
      ttsFallbackTimer = setTimeout(done, estimatedMs);
      return;
    }

    try {
      window.speechSynthesis.cancel();
    } catch (e) {}
    clearSpeakingState();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID';
    utterance.rate = 0.98;
    utterance.pitch = 1.45;

    const voice = getFemaleIndonesianVoice();
    if (voice) utterance.voice = voice;

    if (btn) btn.classList.add('speaking');
    if (icon) icon.textContent = '🗣️';

    utterance.onstart = () => {
      if (btn) btn.classList.add('speaking');
      if (icon) icon.textContent = '🗣️';
    };
    utterance.onend = done;
    utterance.onerror = done;

    // Timer cadangan agar alur slide tetap jalan bila browser tidak memicu onend
    ttsFallbackTimer = setTimeout(done, estimatedMs + 1200);

    try {
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      done();
    }
  }

  // ------------------------------------------------------------
  // PEMUTAR AUDIO REKAMAN ASLI (DENGAN FALLBACK TTS)
  // ------------------------------------------------------------
  function playRecordedOrTTS(player, fallbackText, targetBtn, targetIcon, onCompleteCallback = null) {
    initAudioContext();
    if (!isSoundEnabled) {
      if (onCompleteCallback) onCompleteCallback();
      return;
    }

    stopAllAudio();
    if (targetBtn) targetBtn.classList.add('speaking');
    if (targetIcon) targetIcon.textContent = '🗣️';

    const fallbackToTTS = () => {
      speakSiswi(fallbackText, onCompleteCallback, targetBtn, targetIcon);
    };

    if (!player || !player.src) {
      fallbackToTTS();
      return;
    }

    player.currentTime = 0;
    player.onended = () => {
      if (targetBtn) targetBtn.classList.remove('speaking');
      if (targetIcon) targetIcon.textContent = '🔊';
      if (onCompleteCallback) onCompleteCallback();
    };
    player.onerror = () => {
      fallbackToTTS();
    };

    const playPromise = player.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => fallbackToTTS());
    }
  }

  function playKasirAudio(cb = null) {
    playRecordedOrTTS(audioKasirPlayer, nisaDialogue, btnReplayVoice, voiceAnimIcon, cb);
  }
  function playRasioAudio(cb = null) {
    playRecordedOrTTS(audioRasioPlayer, siswiSpeech1, btnS5Voice, s5VoiceIcon, cb);
  }
  function playKesamaanAudio(cb = null) {
    playRecordedOrTTS(audioKesamaanPlayer, siswiSpeech12, btnS12Voice, s12VoiceIcon, cb);
  }
  function playEsSirupAudio(cb = null) {
    playRecordedOrTTS(audioEsSirupPlayer, siswiSpeech13, btnS13Voice, s13VoiceIcon, cb);
  }
  function playRahasiaSirupAudio(cb = null) {
    playRecordedOrTTS(audioRahasiaSirupPlayer, siswiSpeech14, btnS14Voice, s14VoiceIcon, cb);
  }

  if (window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = () => {};
  }

  // Helper pasang event klik tombol replay suara
  function bindVoiceReplay(btn, handler) {
    if (!btn) return;
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      initAudioContext();
      playNavSFX();
      handler();
    });
  }

  bindVoiceReplay(btnReplayVoice, () => playKasirAudio());
  bindVoiceReplay(btnS5Voice, () => {
    if (slide5Stage === 1) playRasioAudio();
    else speakSiswi(siswiSpeech2, null, btnS5Voice, s5VoiceIcon);
  });
  bindVoiceReplay(btnS7Voice, () => speakSiswi(siswiSpeech7, null, btnS7Voice, s7VoiceIcon));
  bindVoiceReplay(btnS8Voice, () => speakSiswi(siswiSpeech8, null, btnS8Voice, s8VoiceIcon));
  bindVoiceReplay(btnS8wVoice, () => speakSiswi(siswiWrongSpeech, null, btnS8wVoice, s8wVoiceIcon));
  bindVoiceReplay(btnS9Voice, () => speakSiswi(siswiSpeech9, null, btnS9Voice, s9VoiceIcon));
  bindVoiceReplay(btnS10Voice, () => speakSiswi(siswiSpeech10, null, btnS10Voice, s10VoiceIcon));
  bindVoiceReplay(btnS11Voice, () => speakSiswi(siswiSpeech11, null, btnS11Voice, s11VoiceIcon));
  bindVoiceReplay(btnS12Voice, () => playKesamaanAudio());
  bindVoiceReplay(btnS13Voice, () => playEsSirupAudio());
  bindVoiceReplay(btnS14Voice, () => playRahasiaSirupAudio());
  bindVoiceReplay(btnS15Voice, () => speakSiswi(siswiSpeech15, null, btnS15Voice, s15VoiceIcon));
  bindVoiceReplay(btnS16Voice, () => speakSiswi(siswiSpeech16, null, btnS16Voice, s16VoiceIcon));
  bindVoiceReplay(btnS17Voice, () => speakSiswi(siswiSpeech17, null, btnS17Voice, s17VoiceIcon));
  bindVoiceReplay(btnS17wVoice, () => speakSiswi(siswiSpeech17Wrong, null, btnS17wVoice, s17wVoiceIcon));
  bindVoiceReplay(btnS18Voice, () => speakSiswi(siswiSpeech18, null, btnS18Voice, s18VoiceIcon));
  bindVoiceReplay(btnBk1Voice, () => speakSiswi(siswiSpeechBK1, null, btnBk1Voice, bk1VoiceIcon));
  bindVoiceReplay(btnBk1wVoice, () => speakSiswi(siswiSpeechBKWrong, null, btnBk1wVoice, bk1wVoiceIcon));
  bindVoiceReplay(btnBk1rVoice, () => speakSiswi(siswiSpeechBK1Right, null, btnBk1rVoice, bk1rVoiceIcon));
  bindVoiceReplay(btnBk2Voice, () => speakSiswi(siswiSpeechBK2, null, btnBk2Voice, bk2VoiceIcon));
  bindVoiceReplay(btnBk2wVoice, () => speakSiswi(siswiSpeechBKWrong, null, btnBk2wVoice, bk2wVoiceIcon));
  bindVoiceReplay(btnBk2rVoice, () => speakSiswi(siswiSpeechBK2Right, null, btnBk2rVoice, bk2rVoiceIcon));
  bindVoiceReplay(btnBk3Voice, () => speakSiswi(siswiSpeechBK3, null, btnBk3Voice, bk3VoiceIcon));
  bindVoiceReplay(btnBk3wVoice, () => speakSiswi(siswiSpeechBKWrong, null, btnBk3wVoice, bk3wVoiceIcon));
  bindVoiceReplay(btnBk3rVoice, () => speakSiswi(siswiSpeechBK3Right, null, btnBk3rVoice, bk3rVoiceIcon));
  bindVoiceReplay(btnBk4Voice, () => speakSiswi(siswiSpeechBK4, null, btnBk4Voice, bk4VoiceIcon));
  bindVoiceReplay(btnBk4wVoice, () => speakSiswi(siswiSpeechBKWrong, null, btnBk4wVoice, bk4wVoiceIcon));
  bindVoiceReplay(btnBk4rVoice, () => speakSiswi(siswiSpeechBK4Right, null, btnBk4rVoice, bk4rVoiceIcon));
  bindVoiceReplay(btnBk5Voice, () => speakSiswi(siswiSpeechBK5, null, btnBk5Voice, bk5VoiceIcon));
  bindVoiceReplay(btnBk5wVoice, () => speakSiswi(siswiSpeechBKWrong, null, btnBk5wVoice, bk5wVoiceIcon));
  bindVoiceReplay(btnBk5rVoice, () => speakSiswi(siswiSpeechBK5Right, null, btnBk5rVoice, bk5rVoiceIcon));

  // ------------------------------------------------------------
  // FUNGSI GANTI SLIDE (KOMPATIBEL TAILWIND)
  // ------------------------------------------------------------
  function switchSlide(currentSlide, nextSlide, useDoorTransition = false, customMessage = "Membuka...") {
    if (isTransitioning || !currentSlide || !nextSlide) return;
    isTransitioning = true;

    stopAllAudio();
    if (slide5Timer) clearTimeout(slide5Timer);
    clearSlide6Timers();

    // Tambahkan tepat di bawah clearSlide6Timers();
    if (nextSlide === slide2) {
      startKasirAnimation();
    } else {
      stopKasirAnimation();
    }

    if (nextSlide === slide5) {
      startSiswi5Animation();
    } else {
      stopSiswi5Animation();
    }

    if (useDoorTransition && transitionScreen) {
      if (transitionLabel) transitionLabel.textContent = customMessage;
      transitionScreen.classList.add('active', 'closed');

      setTimeout(() => {
        currentSlide.classList.remove('active', 'zooming');
        nextSlide.classList.add('active');

        setTimeout(() => {
          transitionScreen.classList.remove('closed');
          setTimeout(() => {
            transitionScreen.classList.remove('active');
            isTransitioning = false;
          }, 550);
        }, 350);
      }, 650);
    } else {
      currentSlide.classList.remove('active', 'zooming');
      nextSlide.classList.add('active');
      setTimeout(() => {
        isTransitioning = false;
      }, 300);
    }
  }

  // ------------------------------------------------------------
  // TOAST NOTIFIKASI
  // ------------------------------------------------------------
  function showToast(message, icon = '✨') {
    if (!toastNotification) return;
    if (toastTimer) clearTimeout(toastTimer);

    if (toastIcon) toastIcon.textContent = icon;
    if (toastMessage) toastMessage.textContent = message;
    toastNotification.classList.add('show');

    toastTimer = setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 3200);
  }

  // ------------------------------------------------------------
  // SLIDE 5: PENJELASAN MATERI (MANUAL KLIK SELANJUTNYA)
  // ------------------------------------------------------------
  function startSlide5Sequence() {
    slide5Stage = 1;
    if (bubble1Overlay) bubble1Overlay.classList.add('active');
    if (bubble2Overlay) bubble2Overlay.classList.remove('active');
    if (btnS5Next) btnS5Next.classList.remove('ready');
    if (explanationText) explanationText.textContent = "Penjelasan 1 / 2";
    if (slide5Timer) clearTimeout(slide5Timer);

    setTimeout(() => {
      playRasioAudio(() => {
        if (btnS5Next) btnS5Next.classList.add('ready');
        showToast("👉 Klik tombol Selanjutnya untuk percakapan berikutnya!", "✨");
      });
    }, 400);
  }

  function advanceToSlide5Stage2() {
    slide5Stage = 2;
    playBubbleShiftSFX();
    stopAllAudio();

    if (bubble1Overlay) bubble1Overlay.classList.remove('active');
    if (bubble2Overlay) bubble2Overlay.classList.add('active');
    if (btnS5Next) btnS5Next.classList.remove('ready');
    if (explanationText) explanationText.textContent = "Penjelasan 2 / 2";

    showToast("✨ Yuk ambil barangmu di troli belanja!", "🍉");

    setTimeout(() => {
      speakSiswi(siswiSpeech2, () => {
        if (btnS5Next) btnS5Next.classList.add('ready');
        showToast("👉 Klik tombol Selanjutnya untuk mengambil barang!", "🛍️");
      }, btnS5Voice, s5VoiceIcon);
    }, 200);
  }

  function backToSlide5Stage1() {
    slide5Stage = 1;
    playBackSFX();
    if (bubble1Overlay) bubble1Overlay.classList.add('active');
    if (bubble2Overlay) bubble2Overlay.classList.remove('active');
    if (btnS5Next) btnS5Next.classList.remove('ready');
    if (explanationText) explanationText.textContent = "Penjelasan 1 / 2";
    stopAllAudio();
    setTimeout(() => {
      playRasioAudio(() => {
        if (btnS5Next) btnS5Next.classList.add('ready');
      });
    }, 250);
  }

  // ------------------------------------------------------------
  // SLIDE 6: INTERAKTIF DRAG & DROP 4 JENIS BARANG KE TROLI
  // ------------------------------------------------------------
  const cartCounts = { semangka: 0, susu: 0, sayur: 0, botol: 0 };
  const itemMeta = {
    semangka: { label: 'Semangka', emoji: '🍉', sfx: 'pop' },
    susu: { label: 'Susu', emoji: '🥛', sfx: 'chime' },
    sayur: { label: 'Sayur', emoji: '🥦', sfx: 'pop' },
    botol: { label: 'Air Mineral', emoji: '💧', sfx: 'chime' }
  };

  function clearSlide6Timers() {
    slide6Timers.forEach(t => clearTimeout(t));
    slide6Timers = [];
  }

  function triggerCartBounce() {
    if (!trolleyDropZone) return;
    trolleyDropZone.classList.remove('bounce');
    void trolleyDropZone.offsetWidth;
    trolleyDropZone.classList.add('bounce');
    setTimeout(() => trolleyDropZone.classList.remove('bounce'), 200);
  }

  function setCartSummaryStyle(status) {
    if (!cartDetailSummary) return;
    cartDetailSummary.classList.remove(
      'bg-slate-100', 'border-slate-300', 'text-slate-700',
      'bg-green-100', 'border-green-500', 'text-green-900',
      'bg-red-100', 'border-red-500', 'text-red-900'
    );
    if (status === 'correct') {
      cartDetailSummary.classList.add('bg-green-100', 'border-green-500', 'text-green-900');
    } else if (status === 'wrong') {
      cartDetailSummary.classList.add('bg-red-100', 'border-red-500', 'text-red-900');
    } else {
      cartDetailSummary.classList.add('bg-slate-100', 'border-slate-300', 'text-slate-700');
    }
  }

  function isSlide6MissionValid() {
    return (
      cartCounts.semangka === 2 &&
      cartCounts.susu === 4 &&
      cartCounts.sayur === 0 &&
      cartCounts.botol === 0
    );
  }

  function updateCartUI() {
    if (countSemangkaEl) countSemangkaEl.textContent = cartCounts.semangka;
    if (countSusuEl) countSusuEl.textContent = cartCounts.susu;
    if (countSayurEl) countSayurEl.textContent = cartCounts.sayur;
    if (countBotolEl) countBotolEl.textContent = cartCounts.botol;

    const total = cartCounts.semangka + cartCounts.susu + cartCounts.sayur + cartCounts.botol;
    if (badgeCountTotal) badgeCountTotal.textContent = `Total: ${total}`;

    setCartSummaryStyle('neutral');
    if (cartDetailSummary) {
      const filled = Object.keys(cartCounts)
        .filter(k => cartCounts[k] > 0)
        .map(k => `${cartCounts[k]} ${itemMeta[k].label}`);

      if (filled.length === 0) {
        cartDetailSummary.innerHTML = 'Target: <strong>2 Semangka</strong> &amp; <strong>4 Susu</strong> (tanpa barang lain).';
      } else {
        cartDetailSummary.textContent = `Di troli: ${filled.join(', ')}. Klik Cek Troli!`;
      }
    }

    if (btnS6Next) {
      btnS6Next.classList.toggle('ready', isSlide6MissionValid());
    }
  }

  function checkSlide6Mission() {
    if (isSlide6MissionValid()) {
      playCorrectSFX();
      setCartSummaryStyle('correct');
      if (cartDetailSummary) {
        cartDetailSummary.textContent = '✅ BENAR! Troli berisi tepat 2 Semangka & 4 Susu!';
      }
      if (btnS6Next) btnS6Next.classList.add('ready');
      showToast('🎉 Benar! Tepat 2 Semangka & 4 Susu! Klik Selanjutnya ➔', '🌟');
      speakSiswi(siswiSpeech6, null);
      return true;
    }

    playWrongSFX();
    setCartSummaryStyle('wrong');
    let msg = '';
    if (cartCounts.sayur > 0 || cartCounts.botol > 0) {
      msg = '❌ SALAH! Jangan masukkan Sayur atau Air Mineral. Harus tepat 2 Semangka & 4 Susu!';
    } else {
      msg = `❌ SALAH! Sekarang ${cartCounts.semangka} Semangka & ${cartCounts.susu} Susu. Harus tepat 2 Semangka & 4 Susu!`;
    }
    if (cartDetailSummary) cartDetailSummary.textContent = msg;
    showToast(msg, '⚠️');
    return false;
  }

  if (btnCekTroli) {
    btnCekTroli.addEventListener('click', (e) => {
      e.stopPropagation();
      initAudioContext();
      checkSlide6Mission();
    });
  }

  function addItemToCart(type, imgSrc) {
    if (!itemMeta[type]) return;
    cartCounts[type] += 1;

    if (itemMeta[type].sfx === 'pop') playPopSFX();
    else playChimeSFX();

    triggerCartBounce();

    // Tampilkan miniatur barang di dalam keranjang (maks 24 ikon biar tetap rapi)
    if (cartItemsVisual && cartItemsVisual.children.length < 24) {
      const mini = document.createElement('img');
      mini.src = imgSrc;
      mini.alt = itemMeta[type].label;
      mini.dataset.cartType = type;
      const rot = Math.round((Math.random() - 0.5) * 20);
      mini.className = 'w-[22%] max-h-[46%] object-contain drop-shadow transition-transform duration-200';
      mini.style.transform = `rotate(${rot}deg) scale(0.4)`;
      cartItemsVisual.appendChild(mini);
      requestAnimationFrame(() => {
        mini.style.transform = `rotate(${rot}deg) scale(1)`;
      });
    }

    updateCartUI();
  }

  function removeOneItemFromCart(type) {
    if (!itemMeta[type] || cartCounts[type] <= 0) return;
    cartCounts[type] -= 1;
    playBackSFX();

    if (cartItemsVisual) {
      const matches = cartItemsVisual.querySelectorAll(`img[data-cart-type="${type}"]`);
      if (matches.length > 0) {
        matches[matches.length - 1].remove();
      }
    }
    updateCartUI();
  }

  function resetSlide6Cart(showNotif = false) {
    cartCounts.semangka = 0;
    cartCounts.susu = 0;
    cartCounts.sayur = 0;
    cartCounts.botol = 0;
    if (cartItemsVisual) cartItemsVisual.innerHTML = '';
    updateCartUI();
    if (showNotif) {
      playBackSFX();
      showToast('🔄 Troli dikosongkan kembali ke 0!', '🛒');
    }
  }

  // Inisialisasi Pointer Drag & Drop (support mouse & touchscreen)
  const shelfItems = document.querySelectorAll('#slide-6 .shelf-item');
  let activeDrag = null;

  function isOverTrolley(clientX, clientY) {
    if (!trolleyDropZone) return false;
    const rect = trolleyDropZone.getBoundingClientRect();
    const pad = 20;
    return (
      clientX >= rect.left - pad &&
      clientX <= rect.right + pad &&
      clientY >= rect.top - pad &&
      clientY <= rect.bottom + pad
    );
  }

  shelfItems.forEach(itemEl => {
    itemEl.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      initAudioContext();

      const type = itemEl.dataset.itemType;
      const rect = itemEl.getBoundingClientRect();

      const ghost = document.createElement('img');
      ghost.src = itemEl.src;
      ghost.style.position = 'fixed';
      ghost.style.left = `${e.clientX}px`;
      ghost.style.top = `${e.clientY}px`;
      ghost.style.width = `${Math.max(54, rect.width * 1.15)}px`;
      ghost.style.height = 'auto';
      ghost.style.transform = 'translate(-50%, -50%) scale(1.12)';
      ghost.style.pointerEvents = 'none';
      ghost.style.zIndex = '9999';
      ghost.style.filter = 'drop-shadow(0 12px 18px rgba(0,0,0,0.4))';
      document.body.appendChild(ghost);

      if (trolleyDropZone) trolleyDropZone.classList.add('drop-active');

      activeDrag = {
        type,
        src: itemEl.src,
        ghost,
        startX: e.clientX,
        startY: e.clientY
      };
    });
  });

  window.addEventListener('pointermove', (e) => {
    if (!activeDrag) return;
    activeDrag.ghost.style.left = `${e.clientX}px`;
    activeDrag.ghost.style.top = `${e.clientY}px`;

    if (trolleyDropZone) {
      trolleyDropZone.classList.toggle('drop-hover', isOverTrolley(e.clientX, e.clientY));
    }
  });

  function finishDrag(e) {
    if (!activeDrag) return;
    const { type, src, ghost, startX, startY } = activeDrag;
    activeDrag = null;

    ghost.remove();
    if (trolleyDropZone) {
      trolleyDropZone.classList.remove('drop-active', 'drop-hover');
    }

    if (isOverTrolley(e.clientX, e.clientY)) {
      addItemToCart(type, src);
    } else {
      const moved = Math.hypot(e.clientX - startX, e.clientY - startY);
      if (moved < 10) {
        showToast('👆 Tahan dan tarik (drag) barangnya ke dalam troli ya!', '🛒');
      }
    }
  }

  window.addEventListener('pointerup', finishDrag);
  window.addEventListener('pointercancel', finishDrag);

  // Tombol kurangi (−) tiap item di panel kiri
  document.querySelectorAll('#slide-6 [data-dec-item]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      initAudioContext();
      removeOneItemFromCart(btn.dataset.decItem);
    });
  });

  // Tombol Reset Troli
  if (btnResetTroli) {
    btnResetTroli.addEventListener('click', (e) => {
      e.stopPropagation();
      initAudioContext();
      resetSlide6Cart(true);
    });
  }

  function startSlide6Sequence() {
    clearSlide6Timers();
    resetSlide6Cart(false);
    showToast('🛒 Yuk tarik barang dari rak ke dalam troli!', '🍉');
  }

  // ------------------------------------------------------------
  // SLIDE 7–14 SEQUENCES
  // ------------------------------------------------------------
  function startSlide7Sequence() {
    showToast("⚖️ Rasio Semangka terhadap Susu = 2 : 4", "📊");
    setTimeout(() => speakSiswi(siswiSpeech7, null, btnS7Voice, s7VoiceIcon), 400);
  }

  function resetQuizButtons(buttons) {
    buttons.forEach(btn => {
      if (btn) {
        btn.classList.remove('selected', 'correct', 'wrong');
        btn.disabled = false;
      }
    });
  }

  function startSlide8Sequence() {
    resetQuizButtons(quizOptionButtons);
    if (btnS8Next) btnS8Next.classList.remove('ready');
    showToast("🎯 Kuis: Berapakah rasio susu terhadap semangka?", "❓");
    setTimeout(() => speakSiswi(siswiSpeech8, null, btnS8Voice, s8VoiceIcon), 400);
  }

  function handleQuizSelection(selectedBtn) {
    if (!selectedBtn || selectedBtn.disabled) return;
    const isCorrect = selectedBtn.getAttribute('data-correct') === 'true';

    quizOptionButtons.forEach(btn => {
      if (btn) {
        btn.classList.remove('selected', 'correct', 'wrong');
        btn.disabled = true;
      }
    });

    if (isCorrect) {
      playCorrectSFX();
      selectedBtn.classList.add('selected', 'correct');
      if (btnS8Next) btnS8Next.classList.add('ready');
      showToast("🎉 Hore! Jawabanmu BENAR (4 : 2)!", "🌟");
      setTimeout(() => {
        switchSlide(slide8, slide9, false);
        setTimeout(() => startSlide9Sequence(), 400);
      }, 650);
    } else {
      playWrongSFX();
      selectedBtn.classList.add('selected', 'wrong');
      showToast("❌ Ups, jawabanmu masih salah!", "⚠️");
      setTimeout(() => {
        switchSlide(slide8, slide8Wrong, false);
        setTimeout(() => startSlide8WrongSequence(), 400);
      }, 650);
    }
  }

  quizOptionButtons.forEach(btn => {
    if (btn) btn.addEventListener('click', () => {
      initAudioContext();
      handleQuizSelection(btn);
    });
  });

  function startSlide8WrongSequence() {
    showToast("💪 Jangan menyerah, yuk coba lagi!", "💡");
    setTimeout(() => speakSiswi(siswiWrongSpeech, null, btnS8wVoice, s8wVoiceIcon), 400);
  }

  function startSlide9Sequence() {
    playSuccessSFX();
    showToast("✓ Benar! Rasio Susu terhadap Semangka = 4 : 2", "🥛");
    setTimeout(() => speakSiswi(siswiSpeech9, null, btnS9Voice, s9VoiceIcon), 400);
  }

  function startSlide10Sequence() {
    showToast("⚠️ Urutan di dalam rasio tidak boleh dibalik! 2 : 4 ≠ 4 : 2", "💡");
    setTimeout(() => speakSiswi(siswiSpeech10, null, btnS10Voice, s10VoiceIcon), 400);
  }

  function startSlide11Sequence() {
    playSuccessSFX();
    showToast("🛒 Pilihan Materi di Dalam Troli Belanjamu!", "✨");
    setTimeout(() => speakSiswi(siswiSpeech11, null, btnS11Voice, s11VoiceIcon), 450);
  }

  function startSlide12Sequence() {
    showToast("💡 Kesamaan Rasio: Apa itu Rasio Senilai?", "✨");
    if (btnS12Next) btnS12Next.classList.remove('ready');
    setTimeout(() => {
      playKesamaanAudio(() => {
        if (btnS12Next) btnS12Next.classList.add('ready');
      });
    }, 400);
  }

  function startSlide13Sequence() {
    showToast("🍹 Menjaga Rasa! Es Sirup dan Rasio", "🍹");
    if (btnS13Next) btnS13Next.classList.remove('ready');
    setTimeout(() => {
      playEsSirupAudio(() => {
        if (btnS13Next) btnS13Next.classList.add('ready');
      });
    }, 400);
  }

  function startSlide14Sequence() {
    showToast("✨ Rasa yang Pas! Rahasia Es Sirup Enak", "🌟");
    if (btnS14Next) btnS14Next.classList.remove('ready');
    setTimeout(() => {
      playRahasiaSirupAudio(() => {
        if (btnS14Next) btnS14Next.classList.add('ready');
      });
    }, 400);
  }

  // ------------------------------------------------------------
  // SLIDE 15: SIMULASI ES SIRUP & AIR
  // ------------------------------------------------------------
  function getGCD(a, b) {
    let x = Math.abs(a);
    let y = Math.abs(b);
    while (y) {
      const t = y;
      y = x % y;
      x = t;
    }
    return x || 1;
  }

  function updateSimulation() {
    if (!sliderSirup || !sliderAir) return;
    const air = parseInt(sliderAir.value, 10) || 3;
    const sirup = parseInt(sliderSirup.value, 10) || 2;

    if (labelValAir) labelValAir.textContent = air;
    if (labelValSirup) labelValSirup.textContent = sirup;
    if (textRasioMentah) textRasioMentah.textContent = `${air} : ${sirup}`;

    const gcdVal = getGCD(air, sirup);
    const simpAir = air / gcdVal;
    const simpSirup = sirup / gcdVal;
    if (textRasioSederhana) textRasioSederhana.textContent = `${simpAir} : ${simpSirup}`;

    const total = air + sirup;
    if (textTotalCampuran) textTotalCampuran.textContent = `${total} bagian`;

    const airPercent = Math.max(15, Math.min(85, Math.round((air / total) * 100)));
    const sirupPercent = 100 - airPercent;

    if (liquidAir) liquidAir.style.height = `${airPercent}%`;
    if (liquidSirup) liquidSirup.style.height = `${sirupPercent}%`;
    if (labelLiquidAir) labelLiquidAir.textContent = `Air (${air} gelas)`;
    if (labelLiquidSirup) labelLiquidSirup.textContent = `Sirup (${sirup} sdm)`;

    if (badgeTasteStatus && tasteText && tasteIcon) {
      badgeTasteStatus.classList.remove('taste-balanced', 'taste-sweet', 'taste-bland');

      if (simpAir === 3 && simpSirup === 2) {
        badgeTasteStatus.classList.add('taste-balanced');
        tasteIcon.textContent = '🍹';
        tasteText.textContent = `Rasa Pas Banget! (Rasio Senilai 3 : 2)`;
      } else if ((sirup / air) > (2 / 3)) {
        badgeTasteStatus.classList.add('taste-sweet');
        tasteIcon.textContent = '🍯';
        tasteText.textContent = `Terlalu Manis! (Kelebihan Sirup, ${air} : ${sirup})`;
      } else {
        badgeTasteStatus.classList.add('taste-bland');
        tasteIcon.textContent = '💧';
        tasteText.textContent = `Terlalu Tawar / Hambar! (Kelebihan Air, ${air} : ${sirup})`;
      }
    }
  }

  if (sliderSirup) {
    sliderSirup.addEventListener('input', () => {
      initAudioContext();
      playTone(380 + parseInt(sliderSirup.value, 10) * 28, 'triangle', 0.04, 0, 0.08);
      updateSimulation();
    });
  }

  if (sliderAir) {
    sliderAir.addEventListener('input', () => {
      initAudioContext();
      playTone(520 + parseInt(sliderAir.value, 10) * 28, 'sine', 0.04, 0, 0.08);
      updateSimulation();
    });
  }

  function startSlide15Sequence() {
    showToast("🧪 Laboratorium Rasa: Geser takaran Sirup & Air!", "🍹");
    updateSimulation();
    setTimeout(() => speakSiswi(siswiSpeech15, null, btnS15Voice, s15VoiceIcon), 400);
  }

  // ------------------------------------------------------------
  // SLIDE 16–18: CONTOH SOAL & KUIS 2
  // ------------------------------------------------------------
  function startSlide16Sequence() {
    showToast("🍊 Contoh Soal: Rasio Es Jeruk Ibu", "📖");
    setTimeout(() => speakSiswi(siswiSpeech16, null, btnS16Voice, s16VoiceIcon), 400);
  }

  function startSlide17Sequence() {
    resetQuizButtons(quiz2OptionButtons);
    showToast("❓ Latihan Soal: Takaran Sirup untuk 3 Gelas", "🎯");
    setTimeout(() => speakSiswi(siswiSpeech17, null, btnS17Voice, s17VoiceIcon), 400);
  }

  function startSlide17WrongSequence() {
    showToast("💪 Jangan menyerah, yuk coba lagi!", "💪");
    setTimeout(() => speakSiswi(siswiSpeech17Wrong, null, btnS17wVoice, s17wVoiceIcon), 400);
  }

  function startSlide18Sequence() {
    playCelebrationChime();
    showToast("🏆 Jawaban Benar: C (15 Sendok Makan)!", "🌟");
    setTimeout(() => speakSiswi(siswiSpeech18, null, btnS18Voice, s18VoiceIcon), 400);
  }

  quiz2OptionButtons.forEach(btn => {
    if (!btn) return;
    btn.addEventListener('click', () => {
      initAudioContext();
      if (btn.disabled) return;
      quiz2OptionButtons.forEach(b => { if (b) b.disabled = true; });
      const isCorrect = btn.dataset.correct === 'true';
      btn.classList.add('selected', isCorrect ? 'correct' : 'wrong');

      if (isCorrect) {
        playSuccessSFX();
        showToast("🎉 HORE! Jawabanmu Benar (C)!", "⭐");
        setTimeout(() => {
          switchSlide(slide17, slide18, false);
          setTimeout(() => startSlide18Sequence(), 400);
        }, 650);
      } else {
        playWrongSFX();
        showToast("❌ Jawabanmu Belum Tepat! Coba lagi ya!", "😢");
        setTimeout(() => {
          switchSlide(slide17, slide17Wrong, false);
          setTimeout(() => startSlide17WrongSequence(), 400);
        }, 650);
      }
    });
  });

  // ------------------------------------------------------------
  // HELPER KUIS BELANJA 1 S/D 5 (SLIDE 19–33)
  // ------------------------------------------------------------
  function bindBelanjaQuiz({
    buttons, currentSlide, rightSlide, wrongSlide,
    rightToast, onRightEnter, onWrongEnter
  }) {
    buttons.forEach(btn => {
      if (!btn) return;
      btn.addEventListener('click', () => {
        initAudioContext();
        if (btn.disabled) return;
        buttons.forEach(b => { if (b) b.disabled = true; });

        const isCorrect = btn.dataset.correct === 'true';
        btn.classList.add('selected', isCorrect ? 'correct' : 'wrong');

        if (isCorrect) {
          playSuccessSFX();
          showToast(rightToast, "⭐");
          setTimeout(() => {
            switchSlide(currentSlide, rightSlide, false);
            setTimeout(onRightEnter, 400);
          }, 650);
        } else {
          playWrongSFX();
          showToast("❌ Jawabanmu Belum Tepat! Coba lagi ya!", "😢");
          setTimeout(() => {
            switchSlide(currentSlide, wrongSlide, false);
            setTimeout(onWrongEnter, 400);
          }, 650);
        }
      });
    });
  }

  function startBelanjaKuis1Sequence() {
    resetQuizButtons(bk1OptionButtons);
    showToast("🛒 Kuis 1 Belanja: Rasio Apel Merah thd Apel Hijau", "🍎");
    setTimeout(() => speakSiswi(siswiSpeechBK1, null, btnBk1Voice, bk1VoiceIcon), 400);
  }
  function startBelanjaQ1WrongSequence() {
    showToast("💪 Jangan menyerah, coba lagi yuk!", "🍉");
    setTimeout(() => speakSiswi(siswiSpeechBKWrong, null, btnBk1wVoice, bk1wVoiceIcon), 400);
  }
  function startBelanjaQ1RightSequence() {
    playCelebrationChime();
    showToast("🌟 Benar! Rasio Apel Merah thd Hijau = 12 : 18", "🎉");
    setTimeout(() => speakSiswi(siswiSpeechBK1Right, null, btnBk1rVoice, bk1rVoiceIcon), 400);
  }
  bindBelanjaQuiz({
    buttons: bk1OptionButtons,
    currentSlide: slideBelanjaKuis1,
    rightSlide: slideBelanjaQ1Right,
    wrongSlide: slideBelanjaQ1Wrong,
    rightToast: "🎉 HORE! Jawabanmu Benar (A: 12 : 18)!",
    onRightEnter: startBelanjaQ1RightSequence,
    onWrongEnter: startBelanjaQ1WrongSequence
  });

  function startBelanjaKuis2Sequence() {
    resetQuizButtons(bk2OptionButtons);
    showToast("🧁 Kuis 2 Belanja: Rasio Sederhana Tepung & Gula", "🎯");
    setTimeout(() => speakSiswi(siswiSpeechBK2, null, btnBk2Voice, bk2VoiceIcon), 400);
  }
  function startBelanjaQ2WrongSequence() {
    showToast("💪 Jangan menyerah, coba lagi yuk!", "🍉");
    setTimeout(() => speakSiswi(siswiSpeechBKWrong, null, btnBk2wVoice, bk2wVoiceIcon), 400);
  }
  function startBelanjaQ2RightSequence() {
    playCelebrationChime();
    showToast("🌟 Benar! Rasio Sederhana Tepung & Gula = 3 : 2", "🎉");
    setTimeout(() => speakSiswi(siswiSpeechBK2Right, null, btnBk2rVoice, bk2rVoiceIcon), 400);
  }
  bindBelanjaQuiz({
    buttons: bk2OptionButtons,
    currentSlide: slideBelanjaKuis2,
    rightSlide: slideBelanjaQ2Right,
    wrongSlide: slideBelanjaQ2Wrong,
    rightToast: "🎉 HORE! Jawabanmu Benar (D: 3 : 2)!",
    onRightEnter: startBelanjaQ2RightSequence,
    onWrongEnter: startBelanjaQ2WrongSequence
  });

  function startBelanjaKuis3Sequence() {
    resetQuizButtons(bk3OptionButtons);
    showToast("🏫 Kuis 3 Belanja: Rasio Siswa Laki-laki thd Total", "🎯");
    setTimeout(() => speakSiswi(siswiSpeechBK3, null, btnBk3Voice, bk3VoiceIcon), 400);
  }
  function startBelanjaQ3WrongSequence() {
    showToast("💪 Jangan menyerah, coba lagi yuk!", "🍉");
    setTimeout(() => speakSiswi(siswiSpeechBKWrong, null, btnBk3wVoice, bk3wVoiceIcon), 400);
  }
  function startBelanjaQ3RightSequence() {
    playCelebrationChime();
    showToast("🌟 Benar! 16 : 40 disederhanakan menjadi 2 : 5", "🎉");
    setTimeout(() => speakSiswi(siswiSpeechBK3Right, null, btnBk3rVoice, bk3rVoiceIcon), 400);
  }
  bindBelanjaQuiz({
    buttons: bk3OptionButtons,
    currentSlide: slideBelanjaKuis3,
    rightSlide: slideBelanjaQ3Right,
    wrongSlide: slideBelanjaQ3Wrong,
    rightToast: "🎉 HORE! Jawabanmu Benar (C: 2 : 5)!",
    onRightEnter: startBelanjaQ3RightSequence,
    onWrongEnter: startBelanjaQ3WrongSequence
  });

  function startBelanjaKuis4Sequence() {
    resetQuizButtons(bk4OptionButtons);
    showToast("🚗 Kuis 4 Belanja: Bensin untuk Jarak 120 km", "⛽");
    setTimeout(() => speakSiswi(siswiSpeechBK4, null, btnBk4Voice, bk4VoiceIcon), 400);
  }
  function startBelanjaQ4WrongSequence() {
    showToast("💪 Jangan menyerah, coba lagi yuk!", "🍉");
    setTimeout(() => speakSiswi(siswiSpeechBKWrong, null, btnBk4wVoice, bk4wVoiceIcon), 400);
  }
  function startBelanjaQ4RightSequence() {
    playCelebrationChime();
    showToast("🌟 Benar! 120 km butuh 2 x 4 = 8 Liter Bensin", "🎉");
    setTimeout(() => speakSiswi(siswiSpeechBK4Right, null, btnBk4rVoice, bk4rVoiceIcon), 400);
  }
  bindBelanjaQuiz({
    buttons: bk4OptionButtons,
    currentSlide: slideBelanjaKuis4,
    rightSlide: slideBelanjaQ4Right,
    wrongSlide: slideBelanjaQ4Wrong,
    rightToast: "🎉 HORE! Jawabanmu Benar (B: 8 Liter)!",
    onRightEnter: startBelanjaQ4RightSequence,
    onWrongEnter: startBelanjaQ4WrongSequence
  });

  function startBelanjaKuis5Sequence() {
    resetQuizButtons(bk5OptionButtons);
    showToast("💰 Kuis 5 Belanja: Rasio Lembar Uang Andi", "💵");
    setTimeout(() => speakSiswi(siswiSpeechBK5, null, btnBk5Voice, bk5VoiceIcon), 400);
  }
  function startBelanjaQ5WrongSequence() {
    showToast("💪 Jangan menyerah, coba lagi yuk!", "🍉");
    setTimeout(() => speakSiswi(siswiSpeechBKWrong, null, btnBk5wVoice, bk5wVoiceIcon), 400);
  }
  function startBelanjaQ5RightSequence() {
    playCelebrationChime();
    showToast("👑 LUAR BIASA! Seluruh Kuis Belanja (1-5) Selesai!", "🏆");
    setTimeout(() => speakSiswi(siswiSpeechBK5Right, null, btnBk5rVoice, bk5rVoiceIcon), 400);
  }
  bindBelanjaQuiz({
    buttons: bk5OptionButtons,
    currentSlide: slideBelanjaKuis5,
    rightSlide: slideBelanjaQ5Right,
    wrongSlide: slideBelanjaQ5Wrong,
    rightToast: "🎉 HORE! Jawabanmu Benar (D: 2 : 1)!",
    onRightEnter: startBelanjaQ5RightSequence,
    onWrongEnter: startBelanjaQ5WrongSequence
  });

  // ------------------------------------------------------------
  // ALUR NAVIGASI LENGKAP
  // ------------------------------------------------------------
  if (btnStart) {
    btnStart.addEventListener('click', () => {
      if (isTransitioning) return;
      playStartGameSFX();
      if (slide1) slide1.classList.add('zooming');

      setTimeout(() => {
        playDoorBellSFX();
        switchSlide(slide1, slide2, true, "Membuka pintu First Market...");
        setTimeout(() => playKasirAudio(), 1350);
      }, 350);
    });
  }

  if (btnS2Menu) {
    btnS2Menu.addEventListener('click', () => {
      playNavSFX();
      switchSlide(slide2, slide3, false);
      showToast("📋 Silakan pilih aktivitas belanjamu!", "📋");
    });
  }
  if (btnS2Back) {
    btnS2Back.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slide2, slide1, true, "Kembali ke depan toko...");
    });
  }

  if (btnS3Troli) {
    btnS3Troli.addEventListener('click', () => {
      playNavSFX();
      switchSlide(slide3, slide4, false);
      showToast("🛒 Membuka troli materi...", "🛒");
    });
  }
  if (btnS3Belanja) {
    btnS3Belanja.addEventListener('click', () => {
      playNavSFX();
      switchSlide(slide3, slideBelanjaKuis1, false);
      setTimeout(() => startBelanjaKuis1Sequence(), 400);
    });
  }
  if (btnS3Back) {
    btnS3Back.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slide3, slide2, false);
      setTimeout(() => playKasirAudio(), 400);
    });
  }

  if (btnS4Meracik) {
    btnS4Meracik.addEventListener('click', () => {
      playSelectSFX();
      switchSlide(slide4, slide5, false);
      setTimeout(() => startSlide5Sequence(), 400);
    });
  }
  if (btnS4Rasio) {
    btnS4Rasio.addEventListener('click', () => {
      playSelectSFX();
      switchSlide(slide4, slide12, false);
      setTimeout(() => startSlide12Sequence(), 400);
    });
  }
  if (btnS4Back) {
    btnS4Back.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slide4, slide3, false);
    });
  }
  if (btnS4Next) {
    btnS4Next.addEventListener('click', () => {
      playNavSFX();
      switchSlide(slide4, slide5, false);
      setTimeout(() => startSlide5Sequence(), 400);
    });
  }

  if (btnS5Back) {
    btnS5Back.addEventListener('click', () => {
      if (slide5Stage === 2) {
        backToSlide5Stage1();
      } else {
        playBackSFX();
        switchSlide(slide5, slide4, false);
      }
    });
  }
  if (btnS5Next) {
    btnS5Next.addEventListener('click', () => {
      if (slide5Stage === 1) {
        if (slide5Timer) clearTimeout(slide5Timer);
        advanceToSlide5Stage2();
      } else {
        playNavSFX();
        switchSlide(slide5, slide6, false);
        setTimeout(() => startSlide6Sequence(), 400);
      }
    });
  }

  if (btnS6Back) {
    btnS6Back.addEventListener('click', () => {
      playBackSFX();
      clearSlide6Timers();
      switchSlide(slide6, slide5, false);
      setTimeout(() => startSlide5Sequence(), 400);
    });
  }
  if (btnS6Next) {
      btnS6Next.addEventListener('click', () => {
        if (!isSlide6MissionValid()) {
          checkSlide6Mission();
          return;
        }
        playNavSFX();
        clearSlide6Timers();
        switchSlide(slide6, slide7, false);
        setTimeout(() => startSlide7Sequence(), 400);
      });
    }

  if (btnS7Back) {
    btnS7Back.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slide7, slide6, false);
      setTimeout(() => startSlide6Sequence(), 400);
    });
  }
  if (btnS7Next) {
    btnS7Next.addEventListener('click', () => {
      playNavSFX();
      switchSlide(slide7, slide8, false);
      setTimeout(() => startSlide8Sequence(), 400);
    });
  }

  if (btnS8Back) {
    btnS8Back.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slide8, slide7, false);
      setTimeout(() => startSlide7Sequence(), 400);
    });
  }
  if (btnS8Next) {
    btnS8Next.addEventListener('click', () => {
      playNavSFX();
      switchSlide(slide8, slide9, false);
      setTimeout(() => startSlide9Sequence(), 400);
    });
  }
  if (btnS8wBack) {
    btnS8wBack.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slide8Wrong, slide8, false);
      setTimeout(() => startSlide8Sequence(), 400);
    });
  }

  if (btnS9Back) {
    btnS9Back.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slide9, slide8, false);
      setTimeout(() => startSlide8Sequence(), 400);
    });
  }
  if (btnS9Next) {
    btnS9Next.addEventListener('click', () => {
      playNavSFX();
      switchSlide(slide9, slide10, false);
      setTimeout(() => startSlide10Sequence(), 400);
    });
  }

  if (btnS10Troli) {
    btnS10Troli.addEventListener('click', () => {
      playNavSFX();
      switchSlide(slide10, slide11, true, "Kembali ke Pilihan Materi Troli...");
      setTimeout(() => startSlide11Sequence(), 1150);
    });
  }

  if (btnS11Meracik) {
    btnS11Meracik.addEventListener('click', () => {
      playSelectSFX();
      switchSlide(slide11, slide5, false);
      setTimeout(() => startSlide5Sequence(), 400);
    });
  }
  if (btnS11Kesamaan) {
    btnS11Kesamaan.addEventListener('click', () => {
      playSelectSFX();
      switchSlide(slide11, slide12, false);
      setTimeout(() => startSlide12Sequence(), 400);
    });
  }
  if (btnS11Back) {
    btnS11Back.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slide11, slide2, false);
      setTimeout(() => playKasirAudio(), 400);
    });
  }
  if (btnS11Next) {
    btnS11Next.addEventListener('click', () => {
      playSuccessSFX();
      showToast("🎉 Hebat! Kamu sudah menyelesaikan seluruh materi rasio!", "🏆");
    });
  }

  if (btnS12Next) {
    btnS12Next.addEventListener('click', () => {
      playNavSFX();
      switchSlide(slide12, slide13, false);
      setTimeout(() => startSlide13Sequence(), 400);
    });
  }
  if (btnS13Back) {
    btnS13Back.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slide13, slide12, false);
      setTimeout(() => startSlide12Sequence(), 400);
    });
  }
  if (btnS13Next) {
    btnS13Next.addEventListener('click', () => {
      playNavSFX();
      switchSlide(slide13, slide14, false);
      setTimeout(() => startSlide14Sequence(), 400);
    });
  }
  if (btnS14Back) {
    btnS14Back.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slide14, slide13, false);
      setTimeout(() => startSlide13Sequence(), 400);
    });
  }
  if (btnS14Next) {
    btnS14Next.addEventListener('click', () => {
      playNavSFX();
      switchSlide(slide14, slide15, false);
      setTimeout(() => startSlide15Sequence(), 400);
    });
  }

  if (btnS15Back) {
    btnS15Back.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slide15, slide14, false);
      setTimeout(() => startSlide14Sequence(), 400);
    });
  }
  if (btnS15Next) {
    btnS15Next.addEventListener('click', () => {
      playNavSFX();
      switchSlide(slide15, slide16, false);
      setTimeout(() => startSlide16Sequence(), 400);
    });
  }

  if (btnS16Back) {
    btnS16Back.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slide16, slide15, false);
      setTimeout(() => startSlide15Sequence(), 400);
    });
  }
  if (btnS16Next) {
    btnS16Next.addEventListener('click', () => {
      playNavSFX();
      switchSlide(slide16, slide17, false);
      setTimeout(() => startSlide17Sequence(), 400);
    });
  }

  if (btnS17Back) {
    btnS17Back.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slide17, slide16, false);
      setTimeout(() => startSlide16Sequence(), 400);
    });
  }
  if (btnS17wBack) {
    btnS17wBack.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slide17Wrong, slide17, false);
      setTimeout(() => startSlide17Sequence(), 400);
    });
  }
  if (btnS18Menu) {
    btnS18Menu.addEventListener('click', () => {
      playNavSFX();
      switchSlide(slide18, slide3, true, "Kembali ke Menu Utama 1# Market...");
    });
  }

  // Navigasi Kuis Belanja 1–5
  if (btnBk1Back) {
    btnBk1Back.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slideBelanjaKuis1, slide3, false);
      showToast("📋 Silakan pilih aktivitas belanjamu!", "📋");
    });
  }
  if (btnBk1wBack) {
    btnBk1wBack.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slideBelanjaQ1Wrong, slideBelanjaKuis1, false);
      setTimeout(() => startBelanjaKuis1Sequence(), 400);
    });
  }
  if (btnBk1rNext) {
    btnBk1rNext.addEventListener('click', () => {
      playNavSFX();
      switchSlide(slideBelanjaQ1Right, slideBelanjaKuis2, false);
      setTimeout(() => startBelanjaKuis2Sequence(), 400);
    });
  }

  if (btnBk2Back) {
    btnBk2Back.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slideBelanjaKuis2, slideBelanjaQ1Right, false);
      setTimeout(() => startBelanjaQ1RightSequence(), 400);
    });
  }
  if (btnBk2wBack) {
    btnBk2wBack.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slideBelanjaQ2Wrong, slideBelanjaKuis2, false);
      setTimeout(() => startBelanjaKuis2Sequence(), 400);
    });
  }
  if (btnBk2rNext) {
    btnBk2rNext.addEventListener('click', () => {
      playNavSFX();
      switchSlide(slideBelanjaQ2Right, slideBelanjaKuis3, false);
      setTimeout(() => startBelanjaKuis3Sequence(), 400);
    });
  }

  if (btnBk3Back) {
    btnBk3Back.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slideBelanjaKuis3, slideBelanjaQ2Right, false);
      setTimeout(() => startBelanjaQ2RightSequence(), 400);
    });
  }
  if (btnBk3wBack) {
    btnBk3wBack.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slideBelanjaQ3Wrong, slideBelanjaKuis3, false);
      setTimeout(() => startBelanjaKuis3Sequence(), 400);
    });
  }
  if (btnBk3rNext) {
    btnBk3rNext.addEventListener('click', () => {
      playNavSFX();
      switchSlide(slideBelanjaQ3Right, slideBelanjaKuis4, false);
      setTimeout(() => startBelanjaKuis4Sequence(), 400);
    });
  }

  if (btnBk4Back) {
    btnBk4Back.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slideBelanjaKuis4, slideBelanjaQ3Right, false);
      setTimeout(() => startBelanjaQ3RightSequence(), 400);
    });
  }
  if (btnBk4wBack) {
    btnBk4wBack.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slideBelanjaQ4Wrong, slideBelanjaKuis4, false);
      setTimeout(() => startBelanjaKuis4Sequence(), 400);
    });
  }
  if (btnBk4rNext) {
    btnBk4rNext.addEventListener('click', () => {
      playNavSFX();
      switchSlide(slideBelanjaQ4Right, slideBelanjaKuis5, false);
      setTimeout(() => startBelanjaKuis5Sequence(), 400);
    });
  }

  if (btnBk5Back) {
    btnBk5Back.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slideBelanjaKuis5, slideBelanjaQ4Right, false);
      setTimeout(() => startBelanjaQ4RightSequence(), 400);
    });
  }
  if (btnBk5wBack) {
    btnBk5wBack.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slideBelanjaQ5Wrong, slideBelanjaKuis5, false);
      setTimeout(() => startBelanjaKuis5Sequence(), 400);
    });
  }
  if (btnBk5rNext) {
    btnBk5rNext.addEventListener('click', () => {
      playSuccessSFX();
      showToast("🎉 Selamat! Kamu telah menaklukkan seluruh misi belanja!", "🏆");
      setTimeout(() => {
        switchSlide(slideBelanjaQ5Right, slide3, true, "Kembali ke Menu Aktivitas...");
      }, 600);
    });
  }
});