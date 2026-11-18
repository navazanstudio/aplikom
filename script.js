/**
 * ============================================================
 * GAMES 1# MARKET - JAVASCRIPT LENGKAP (SLIDE 1 S/D 11)
 * Alur Navigasi Lengkap, Suara Asli Rekaman Kasir (8s) &
 * Materi Rasio (13s), Animasi 2 Semangka & 4 Susu ke Keranjang,
 * Slide Hasil Rasio 2 : 4, Kuis Pilihan Ganda Interaktif,
 * Pembahasan Rasio, Serta Kembali ke Menu First Market.
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------
  // REFERENSI DOM SEMUA SLIDE (1 S/D 11)
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

  // Referensi Audio Rekaman Asli (Kasir 8s, Pengertian Rasio 13s, Kesamaan Rasio 14s, Es Sirup 29s, Rahasia Sirup 19s)
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

  // Referensi Slide 1 (Depan Toko)
  const btnStart = document.getElementById('btn-start');

  // Referensi Slide 2 (Kasir POV)
  const btnReplayVoice = document.getElementById('btn-replay-voice');
  const btnS2Menu = document.getElementById('btn-s2-menu');
  const btnS2Back = document.getElementById('btn-s2-back');

  // Referensi Slide 3 (Pilihan Aktivitas Menu)
  const btnS3Troli = document.getElementById('btn-s3-troli');
  const btnS3Belanja = document.getElementById('btn-s3-belanja');
  const btnS3Back = document.getElementById('btn-s3-back');

  // Referensi Slide 4 (Pilih Materi dalam Troli)
  const btnS4Meracik = document.getElementById('btn-s4-meracik');
  const btnS4Rasio = document.getElementById('btn-s4-rasio');
  const btnS4Back = document.getElementById('btn-s4-back');
  const btnS4Next = document.getElementById('btn-s4-next');

  // Referensi Slide 5 (Materi Rasio - Siswi)
  const bubble2Overlay = document.getElementById('bubble-2-overlay');
  const btnS5Voice = document.getElementById('btn-s5-voice');
  const s5VoiceIcon = document.getElementById('s5-voice-icon');
  const explanationText = document.getElementById('explanation-text');
  const btnS5Back = document.getElementById('btn-s5-back');
  const btnS5Next = document.getElementById('btn-s5-next');

  // Referensi Slide 6 (Animasi Ambil Barang: 2 Semangka & 4 Susu)
  const flightStage = document.getElementById('flight-stage');
  const cartLandingZone = document.getElementById('cart-landing-zone');
  const landedW1 = document.getElementById('landed-w1');
  const landedW2 = document.getElementById('landed-w2');
  const landedM1 = document.getElementById('landed-m1');
  const landedM2 = document.getElementById('landed-m2');
  const landedM3 = document.getElementById('landed-m3');
  const landedM4 = document.getElementById('landed-m4');
  const badgeCountW = document.getElementById('badge-count-w');
  const badgeCountM = document.getElementById('badge-count-m');
  const btnReplayAnim6 = document.getElementById('btn-replay-anim6');
  const btnS6Back = document.getElementById('btn-s6-back');
  const btnS6Next = document.getElementById('btn-s6-next');

  // Referensi Slide 7 (Hasil Rasio 2 Semangka : 4 Susu)
  const btnS7Voice = document.getElementById('btn-s7-voice');
  const s7VoiceIcon = document.getElementById('s7-voice-icon');
  const btnS7Back = document.getElementById('btn-s7-back');
  const btnS7Next = document.getElementById('btn-s7-next');

  // Referensi Slide 8 (Latihan Soal Kuis - Gambar 1)
  const btnS8Voice = document.getElementById('btn-s8-voice');
  const s8VoiceIcon = document.getElementById('s8-voice-icon');
  const btnQuizA = document.getElementById('btn-quiz-a');
  const btnQuizB = document.getElementById('btn-quiz-b');
  const btnQuizC = document.getElementById('btn-quiz-c');
  const btnQuizD = document.getElementById('btn-quiz-d');
  const btnS8Back = document.getElementById('btn-s8-back');
  const btnS8Next = document.getElementById('btn-s8-next');
  const quizOptionButtons = [btnQuizA, btnQuizB, btnQuizC, btnQuizD];

  // Referensi Slide 8-Wrong (Layar Salah - Gambar 2)
  const btnS8wVoice = document.getElementById('btn-s8w-voice');
  const s8wVoiceIcon = document.getElementById('s8w-voice-icon');
  const btnS8wBack = document.getElementById('btn-s8w-back');

  // Referensi Slide 9 (Jawaban Benar & Pembahasan - Gambar 3)
  const btnS9Voice = document.getElementById('btn-s9-voice');
  const s9VoiceIcon = document.getElementById('s9-voice-icon');
  const btnS9Back = document.getElementById('btn-s9-back');
  const btnS9Next = document.getElementById('btn-s9-next');

  // Referensi Slide 10 (Urutan Tidak Boleh Dibalik - Gambar 4)
  const btnS10Voice = document.getElementById('btn-s10-voice');
  const s10VoiceIcon = document.getElementById('s10-voice-icon');
  const btnS10Troli = document.getElementById('btn-s10-troli');

  // Referensi Slide 11 (Pilihan Materi Troli - Gambar 5)
  const btnS11Voice = document.getElementById('btn-s11-voice');
  const s11VoiceIcon = document.getElementById('s11-voice-icon');
  const btnS11Meracik = document.getElementById('btn-s11-meracik');
  const btnS11Kesamaan = document.getElementById('btn-s11-kesamaan');
  const btnS11Back = document.getElementById('btn-s11-back');
  const btnS11Next = document.getElementById('btn-s11-next');

  // Referensi Slide 12 (Kesamaan Rasio - Gambar 2)
  const btnS12Voice = document.getElementById('btn-s12-voice');
  const s12VoiceIcon = document.getElementById('s12-voice-icon');
  const btnS12Next = document.getElementById('btn-s12-next');

  // Referensi Slide 13 (Es Sirup dan Rasio - Gambar 3)
  const btnS13Voice = document.getElementById('btn-s13-voice');
  const s13VoiceIcon = document.getElementById('s13-voice-icon');
  const btnS13Back = document.getElementById('btn-s13-back');
  const btnS13Next = document.getElementById('btn-s13-next');

  // Referensi Slide 14 (Rahasia Es Sirup Enak - Gambar 4)
  const btnS14Voice = document.getElementById('btn-s14-voice');
  const s14VoiceIcon = document.getElementById('s14-voice-icon');
  const btnS14Back = document.getElementById('btn-s14-back');
  const btnS14Next = document.getElementById('btn-s14-next');

  // Referensi Slide 15 (Simulasi Interaktif Perbandingan Es Sirup & Air)
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

  // Referensi Slide 16 (Contoh Soal Es Jeruk Ibu - Gambar 1)
  const btnS16Voice = document.getElementById('btn-s16-voice');
  const s16VoiceIcon = document.getElementById('s16-voice-icon');
  const btnS16Back = document.getElementById('btn-s16-back');
  const btnS16Next = document.getElementById('btn-s16-next');

  // Referensi Slide 17 (Latihan Soal Kuis Sirup Kakak - Gambar 2)
  const btnS17Voice = document.getElementById('btn-s17-voice');
  const s17VoiceIcon = document.getElementById('s17-voice-icon');
  const btnQuiz2A = document.getElementById('btn-quiz2-a');
  const btnQuiz2B = document.getElementById('btn-quiz2-b');
  const btnQuiz2C = document.getElementById('btn-quiz2-c');
  const btnQuiz2D = document.getElementById('btn-quiz2-d');
  const quiz2OptionButtons = [btnQuiz2A, btnQuiz2B, btnQuiz2C, btnQuiz2D];
  const btnS17Back = document.getElementById('btn-s17-back');

  // Referensi Slide 17-Wrong (Layar Salah Kuis 2 - Gambar 3)
  const btnS17wVoice = document.getElementById('btn-s17w-voice');
  const s17wVoiceIcon = document.getElementById('s17w-voice-icon');
  const btnS17wBack = document.getElementById('btn-s17w-back');

  // Referensi Slide 18 (Jawaban Benar & Pembahasan Kuis 2 - Gambar 4)
  const btnS18Voice = document.getElementById('btn-s18-voice');
  const s18VoiceIcon = document.getElementById('s18-voice-icon');
  const btnS18Menu = document.getElementById('btn-s18-menu');

  // Referensi Kuis 1 Mulai Belanja (Slide 19 s/d 21)
  const btnBk1Voice = document.getElementById('btn-bk1-voice');
  const bk1VoiceIcon = document.getElementById('bk1-voice-icon');
  const btnBk1OptA = document.getElementById('btn-bk1-opt-a');
  const btnBk1OptB = document.getElementById('btn-bk1-opt-b');
  const btnBk1OptC = document.getElementById('btn-bk1-opt-c');
  const btnBk1OptD = document.getElementById('btn-bk1-opt-d');
  const bk1OptionButtons = [btnBk1OptA, btnBk1OptB, btnBk1OptC, btnBk1OptD];
  const btnBk1Back = document.getElementById('btn-bk1-back');
  const btnBk1wVoice = document.getElementById('btn-bk1w-voice');
  const bk1wVoiceIcon = document.getElementById('bk1w-voice-icon');
  const btnBk1wBack = document.getElementById('btn-bk1w-back');
  const btnBk1rVoice = document.getElementById('btn-bk1r-voice');
  const bk1rVoiceIcon = document.getElementById('bk1r-voice-icon');
  const btnBk1rNext = document.getElementById('btn-bk1r-next');

  // Referensi Kuis 2 Mulai Belanja (Slide 22 s/d 24)
  const btnBk2Voice = document.getElementById('btn-bk2-voice');
  const bk2VoiceIcon = document.getElementById('bk2-voice-icon');
  const btnBk2OptA = document.getElementById('btn-bk2-opt-a');
  const btnBk2OptB = document.getElementById('btn-bk2-opt-b');
  const btnBk2OptC = document.getElementById('btn-bk2-opt-c');
  const btnBk2OptD = document.getElementById('btn-bk2-opt-d');
  const bk2OptionButtons = [btnBk2OptA, btnBk2OptB, btnBk2OptC, btnBk2OptD];
  const btnBk2Back = document.getElementById('btn-bk2-back');
  const btnBk2wVoice = document.getElementById('btn-bk2w-voice');
  const bk2wVoiceIcon = document.getElementById('bk2w-voice-icon');
  const btnBk2wBack = document.getElementById('btn-bk2w-back');
  const btnBk2rVoice = document.getElementById('btn-bk2r-voice');
  const bk2rVoiceIcon = document.getElementById('bk2r-voice-icon');
  const btnBk2rNext = document.getElementById('btn-bk2r-next');

  // Referensi Kuis 3 Mulai Belanja (Slide 25 s/d 27)
  const btnBk3Voice = document.getElementById('btn-bk3-voice');
  const bk3VoiceIcon = document.getElementById('bk3-voice-icon');
  const btnBk3OptA = document.getElementById('btn-bk3-opt-a');
  const btnBk3OptB = document.getElementById('btn-bk3-opt-b');
  const btnBk3OptC = document.getElementById('btn-bk3-opt-c');
  const btnBk3OptD = document.getElementById('btn-bk3-opt-d');
  const bk3OptionButtons = [btnBk3OptA, btnBk3OptB, btnBk3OptC, btnBk3OptD];
  const btnBk3Back = document.getElementById('btn-bk3-back');
  const btnBk3wVoice = document.getElementById('btn-bk3w-voice');
  const bk3wVoiceIcon = document.getElementById('bk3w-voice-icon');
  const btnBk3wBack = document.getElementById('btn-bk3w-back');
  const btnBk3rVoice = document.getElementById('btn-bk3r-voice');
  const bk3rVoiceIcon = document.getElementById('bk3r-voice-icon');
  const btnBk3rNext = document.getElementById('btn-bk3r-next');

  // Referensi Kuis 4 Mulai Belanja (Slide 28 s/d 30)
  const btnBk4Voice = document.getElementById('btn-bk4-voice');
  const bk4VoiceIcon = document.getElementById('bk4-voice-icon');
  const btnBk4OptA = document.getElementById('btn-bk4-opt-a');
  const btnBk4OptB = document.getElementById('btn-bk4-opt-b');
  const btnBk4OptC = document.getElementById('btn-bk4-opt-c');
  const btnBk4OptD = document.getElementById('btn-bk4-opt-d');
  const bk4OptionButtons = [btnBk4OptA, btnBk4OptB, btnBk4OptC, btnBk4OptD];
  const btnBk4Back = document.getElementById('btn-bk4-back');
  const btnBk4wVoice = document.getElementById('btn-bk4w-voice');
  const bk4wVoiceIcon = document.getElementById('bk4w-voice-icon');
  const btnBk4wBack = document.getElementById('btn-bk4w-back');
  const btnBk4rVoice = document.getElementById('btn-bk4r-voice');
  const bk4rVoiceIcon = document.getElementById('bk4r-voice-icon');
  const btnBk4rNext = document.getElementById('btn-bk4r-next');

  // Referensi Kuis 5 Mulai Belanja (Slide 31 s/d 33)
  const btnBk5Voice = document.getElementById('btn-bk5-voice');
  const bk5VoiceIcon = document.getElementById('bk5-voice-icon');
  const btnBk5OptA = document.getElementById('btn-bk5-opt-a');
  const btnBk5OptB = document.getElementById('btn-bk5-opt-b');
  const btnBk5OptC = document.getElementById('btn-bk5-opt-c');
  const btnBk5OptD = document.getElementById('btn-bk5-opt-d');
  const bk5OptionButtons = [btnBk5OptA, btnBk5OptB, btnBk5OptC, btnBk5OptD];
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
  // TEKS DIALOG & SUARA CEWEK
  // ------------------------------------------------------------
  // Kasir Nisa (Slide 2 - Teks Cadangan jika Audio Rekaman 8s tidak dapat diputar)
  const nisaDialogue = "Halo! Selamat datang di First Market! Mau pilih troli materi atau langsung mulai belanja?";

  // Siswi Penjelasan 1 (Slide 5 - Teks Cadangan jika Audio Rekaman 13s tidak dapat diputar)
  const siswiSpeech1 = "Rasio atau perbandingan adalah ukuran matematika yang digunakan untuk membandingkan dua nilai atau lebih yang memiliki satuan yang sama atau sejenis.";

  // Siswi Penjelasan 2 (Slide 5 - Gambar Balon 'Yuk Ambil Barangmu')
  const siswiSpeech2 = "Untuk mengetahui konsep rasio, yuk ambil barangmu dan bandingkan banyak jumlahnya!";

  // Siswi Selesai Ambil Barang (Slide 6 - 2 Semangka & 4 Susu)
  const siswiSpeech6 = "Dua semangka dan empat susu sudah dimasukkan ke dalam keranjang belanja! Yuk lanjut untuk melihat perbandingan rasionya.";

  // Siswi Penjelasan Hasil Rasio (Slide 7 - Keterangan 2 Semangka & 4 Susu)
  const siswiSpeech7 = "Karena kamu sudah mengambil dua semangka dan empat susu, maka rasio antara semangka terhadap susu adalah dua banding empat!";

  // Siswi Soal Kuis (Slide 8 - Gambar 1: Rasio Susu thd Semangka)
  const siswiSpeech8 = "Ayo uji pemahamanmu! Berapakah rasio jumlah susu terhadap semangka? Silakan pilih jawaban yang paling tepat ya!";
  const siswiCorrectSpeech = "Luar biasa! Jawabanmu benar! Rasio susu terhadap semangka adalah empat banding dua.";
  const siswiWrongSpeech = "Yah, jawabanmu masih salah! Jangan menyerah, yuk klik tombol Kembali ke Soal dan coba lagi ya!";

  // Siswi Pembahasan Benar (Slide 9 - Gambar 3)
  const siswiSpeech9 = "Hore, jawabanmu benar! Untuk menentukan rasio antara dua kelompok barang, kita membandingkan banyaknya barang pertama yaitu susu, dengan barang kedua yaitu semangka secara berurutan. Jadi rasionya adalah empat banding dua!";

  // Siswi Urutan Rasio (Slide 10 - Gambar 4)
  const siswiSpeech10 = "Urutan di dalam rasio tidak boleh dibalik! Rasio semangka banding susu tidak sama nilainya dengan susu banding semangka. Dua banding empat tidak sama nilainya dengan empat banding dua! Jika kita mengubah urutan nama barangnya, maka angka perbandingannya juga wajib dibalik agar maknanya tetap benar.";

  // Siswi Arahan Materi Troli (Slide 11 - Gambar 5)
  const siswiSpeech11 = "Kamu telah kembali ke pilihan materi di dalam troli belanjamu! Silakan klik Meracik Troli untuk mengulang materi atau pilih Kesamaan Rasio Belanja untuk materi selanjutnya!";

  // Siswi Kesamaan Rasio (Slide 12 - Rekaman Asli 14s)
  const siswiSpeech12 = "Kesamaan rasio atau rasio senilai adalah dua atau lebih rasio yang memiliki nilai perbandingan yang sama, meskipun angka-angkanya terlihat berbeda.";

  // Siswi Menjaga Rasa Es Sirup (Slide 13 - Gambar 3)
  const siswiSpeech13 = "Pernahkah kalian membuat es sirup yang rasanya pas banget tidak terlalu manis dan tidak tawar? Nah, bagaimana kalau kalian ingin membuat sirup dalam wadah yang lebih besar? Apakah jumlah sirup dan airnya tinggal ditambah asal-asalan? Agar rasa manisnya tetap stabil, tidak kemanisan dan juga tidak hambar, kita harus menjaga kesamaan rasio antara sirup dan air.";

  // Siswi Rahasia Es Sirup Enak (Slide 14 - Gambar 4)
  const siswiSpeech14 = "Rasa manisnya sama persis karena perbandingannya sama! Kalau airnya makin banyak, sirupnya juga harus makin banyak dengan kelipatan yang sama. Jadi, rahasia bikin sirup yang enak itu bukan cuma harus pas perbandingannya!";

  // Siswi Panduan Simulasi (Slide 15 - Laboratorium Rasa)
  const siswiSpeech15 = "Yuk coba simulasikan meracik sirup dan air! Geser takaran sendok sirup dan gelas air untuk melihat perbandingan rasio mentah dan bentuk rasio sederhananya. Perhatikan bagaimana rasanya tetap pas jika rasionya senilai!";

  // Siswi Contoh Soal Es Jeruk (Slide 16 - Gambar 1)
  const siswiSpeech16 = "Mari kita pelajari contoh soal berikut! Untuk membuat 1 gelas es jeruk, Ibu membutuhkan 3 buah jeruk. Berapa buah jeruk yang dibutuhkan jika ingin membuat 4 gelas es jeruk dengan rasa yang sama? Rasio dasarnya adalah 1 gelas butuh 3 jeruk. Maka untuk 4 gelas, perhitungannya adalah 4 dikali 3 sama dengan 12 jeruk! Rasio 4 banding 12 sama nilainya dengan 1 banding 3.";

  // Siswi Latihan Soal Kuis 2 (Slide 17 - Gambar 2)
  const siswiSpeech17 = "Ayo uji kemampuanmu! Untuk membuat 1 gelas es sirup yang manis dan enak, Kakak memasukkan 5 sendok makan sirup. Berapa banyak sendok makan sirup yang dibutuhkan jika Kakak ingin membuat 3 gelas es sirup agar tetap manis dan enak?";
  const siswiSpeech17Wrong = "Yah, jawabanmu masih belum tepat! Ingat rasio dasarnya: satu gelas butuh lima sendok sirup. Jika ingin membuat tiga gelas, kalikan dengan tiga ya! Yuk klik tombol Kembali ke Soal dan coba lagi!";

  // Siswi Pembahasan Benar Kuis 2 (Slide 18 - Gambar 4)
  const siswiSpeech18 = "Hore, jawabanmu benar! Jawabannya adalah C, yaitu 15 sendok makan. Karena rasio dasarnya 1 gelas butuh 5 sendok sirup, maka untuk 3 gelas, perhitungannya adalah 3 dikali 5 sama dengan 15 sendok makan. Rasio 3 banding 15 senilai dengan 1 banding 5!";

  // Siswi Kuis 1 Belanja (Slide 19: Apel Merah thd Apel Hijau)
  const siswiSpeechBK1 = "Di dalam keranjang terdapat 12 buah apel merah dan 18 buah apel hijau. Berapakah rasio dari jumlah apel merah terhadap jumlah apel hijau? Ayo pilih jawaban yang benar ya!";
  const siswiSpeechBK1Right = "Hore, jawabanmu benar! Kunci jawabannya adalah A, yaitu 12 banding 18. Apel merah ada 12 dan apel hijau ada 18. Hebat! Yuk lanjut ke kuis berikutnya!";
  const siswiSpeechBKWrong = "Yah, jawabanmu belum tepat! Jangan berkecil hati, yuk klik tombol Kembali dan coba lagi ya!";

  // Siswi Kuis 2 Belanja (Slide 22: Tepung Terigu thd Gula Pasir)
  const siswiSpeechBK2 = "Ibu membuat adonan kue dengan mencampur 9 cangkir tepung terigu dan 6 cangkir gula pasir. Berapa rasio paling sederhana dari jumlah tepung dan gula pasir? Pilih jawaban yang paling tepat ya!";
  const siswiSpeechBK2Right = "Luar biasa, jawabanmu benar! Kunci jawabannya adalah D, yaitu 3 banding 2. Bentuk paling sederhana dari 9 banding 6 adalah 3 banding 2. Bagus sekali! Yuk lanjut ke kuis 3!";

  // Siswi Kuis 3 Belanja (Slide 25: Laki-laki 16 thd Total 40 Siswa)
  const siswiSpeechBK3 = "Di kelas 7 SMP, terdapat 16 siswa laki-laki dan 24 siswa perempuan. Berapakah rasio siswa laki-laki terhadap total seluruh siswa di kelas tersebut dalam bentuk paling sederhana? Ayo hitung dan pilih jawaban yang benar ya!";
  const siswiSpeechBK3Right = "Hore, jawabanmu benar! Kunci jawabannya adalah C, yaitu 2 banding 5. Total seluruh siswa adalah 16 ditambah 24 yaitu 40. Maka rasionya 16 banding 40 yang jika disederhanakan menjadi 2 banding 5. Hebat! Yuk lanjut ke kuis 4!";

  // Siswi Kuis 4 Belanja (Slide 28: Bensin 4 Liter thd 60 km -> 120 km)
  const siswiSpeechBK4 = "Sebuah mobil memerlukan 4 liter bensin untuk menempuh jarak 60 km. Jika mobil tersebut ingin menempuh jarak 120 km dengan kecepatan dan kondisi yang sama, berapa liter bensin yang diperlukan?";
  const siswiSpeechBK4Right = "Luar biasa, jawabanmu benar! Kunci jawabannya adalah B, yaitu 8 liter. Karena jarak 120 km adalah 2 kali lipat dari 60 km, maka bensinnya juga 2 kali lipat, yaitu 4 dikali 2 sama dengan 8 liter. Bagus sekali! Yuk lanjut ke kuis 5!";

  // Siswi Kuis 5 Belanja (Slide 31: 8 lembar Rp5.000 thd 4 lembar Rp10.000)
  const siswiSpeechBK5 = "Di dalam dompet Andi terdapat uang pecahan Rp5.000 sebanyak 8 lembar dan uang pecahan Rp10.000 sebanyak 4 lembar. Manakah pernyataan rasio yang tepat untuk menyatakan jumlah lembar uang Rp5.000 terhadap uang Rp10.000 dalam bentuk paling sederhana?";
  const siswiSpeechBK5Right = "Selamat! Jawabanmu benar! Kunci jawabannya adalah D, yaitu 2 banding 1. Rasio 8 lembar dibanding 4 lembar disederhanakan menjadi 2 banding 1. Kamu telah berhasil menyelesaikan seluruh kuis belanja dari nomor 1 sampai nomor 5! Keren banget!";

  // ------------------------------------------------------------
  // STATE MANAGEMENT
  // ------------------------------------------------------------
  let isSoundEnabled = true;
  let audioCtx = null;
  let isTransitioning = false;
  let toastTimer = null;
  let slide5Stage = 1; // 1 = Penjelasan 1 (Audio 13s), 2 = Penjelasan 2
  let slide5Timer = null;
  let slide6Timers = [];

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
      audioCtx.resume();
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
    if (!isSoundEnabled || !audioCtx) return;
    playTone(523.25, 'triangle', 0.12, 0.00, 0.18);
    playTone(659.25, 'triangle', 0.12, 0.08, 0.18);
    playTone(783.99, 'triangle', 0.12, 0.16, 0.18);
    playTone(1046.50, 'sine', 0.35, 0.24, 0.22);
  }

  function playDoorBellSFX() {
    initAudioContext();
    if (!isSoundEnabled || !audioCtx) return;
    playTone(880.00, 'sine', 0.35, 0.0, 0.14);
    playTone(700.00, 'sine', 0.55, 0.22, 0.14);
  }

  function playNavSFX() {
    initAudioContext();
    if (!isSoundEnabled || !audioCtx) return;
    playTone(580, 'sine', 0.08, 0, 0.14);
    playTone(880, 'sine', 0.14, 0.05, 0.16);
  }

  function playBubbleShiftSFX() {
    initAudioContext();
    if (!isSoundEnabled || !audioCtx) return;
    playTone(680, 'sine', 0.1, 0, 0.15);
    playTone(920, 'triangle', 0.18, 0.07, 0.18);
  }

  function playSelectSFX() {
    initAudioContext();
    if (!isSoundEnabled || !audioCtx) return;
    playTone(740, 'triangle', 0.09, 0, 0.15);
    playTone(1100, 'sine', 0.18, 0.06, 0.18);
  }

  function playBackSFX() {
    initAudioContext();
    if (!isSoundEnabled || !audioCtx) return;
    playTone(420, 'sine', 0.08, 0, 0.12);
    playTone(320, 'sine', 0.12, 0.06, 0.12);
  }

  function playPopSFX() {
    initAudioContext();
    if (!isSoundEnabled || !audioCtx) return;
    playTone(750, 'sine', 0.06, 0, 0.20);
    playTone(1200, 'triangle', 0.12, 0.04, 0.22);
  }

  function playChimeSFX() {
    initAudioContext();
    if (!isSoundEnabled || !audioCtx) return;
    playTone(987.77, 'sine', 0.10, 0, 0.16);
    playTone(1318.51, 'sine', 0.20, 0.06, 0.20);
  }

  function playSuccessSFX() {
    initAudioContext();
    if (!isSoundEnabled || !audioCtx) return;
    playTone(523.25, 'triangle', 0.10, 0.00, 0.15);
    playTone(659.25, 'triangle', 0.10, 0.08, 0.15);
    playTone(783.99, 'triangle', 0.12, 0.16, 0.18);
    playTone(1046.50, 'sine', 0.35, 0.24, 0.22);
  }

  function playCorrectSFX() {
    initAudioContext();
    if (!isSoundEnabled || !audioCtx) return;
    playTone(659.25, 'triangle', 0.12, 0.00, 0.20);
    playTone(880.00, 'triangle', 0.12, 0.08, 0.22);
    playTone(1318.51, 'sine', 0.35, 0.16, 0.25);
  }

  function playWrongSFX() {
    initAudioContext();
    if (!isSoundEnabled || !audioCtx) return;
    playTone(350, 'sawtooth', 0.15, 0, 0.15);
    playTone(260, 'sine', 0.25, 0.1, 0.18);
  }

  // Hentikan Seluruh Audio (Player dan TTS)
  function stopAllAudio() {
    if (audioKasirPlayer) {
      audioKasirPlayer.pause();
      audioKasirPlayer.currentTime = 0;
    }
    if (audioRasioPlayer) {
      audioRasioPlayer.pause();
      audioRasioPlayer.currentTime = 0;
    }
    if (audioKesamaanPlayer) {
      audioKesamaanPlayer.pause();
      audioKesamaanPlayer.currentTime = 0;
    }
    if (audioEsSirupPlayer) {
      audioEsSirupPlayer.pause();
      audioEsSirupPlayer.currentTime = 0;
    }
    if (audioRahasiaSirupPlayer) {
      audioRahasiaSirupPlayer.pause();
      audioRahasiaSirupPlayer.currentTime = 0;
    }
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    clearSpeakingState();
  }

  // Toggle Suara Global
  btnSoundToggle.addEventListener('click', () => {
    initAudioContext();
    isSoundEnabled = !isSoundEnabled;
    soundIcon.textContent = isSoundEnabled ? '🔊' : '🔇';
    btnSoundToggle.title = isSoundEnabled ? 'Suara Aktif' : 'Suara Mati';

    if (audioKasirPlayer) audioKasirPlayer.muted = !isSoundEnabled;
    if (audioRasioPlayer) audioRasioPlayer.muted = !isSoundEnabled;
    if (audioKesamaanPlayer) audioKesamaanPlayer.muted = !isSoundEnabled;
    if (audioEsSirupPlayer) audioEsSirupPlayer.muted = !isSoundEnabled;
    if (audioRahasiaSirupPlayer) audioRahasiaSirupPlayer.muted = !isSoundEnabled;

    if (!isSoundEnabled) {
      stopAllAudio();
    } else {
      playTone(600, 'sine', 0.1, 0, 0.15);
    }
  });

  function clearSpeakingState() {
    [
      btnReplayVoice, btnS5Voice, btnS7Voice, btnS8Voice, btnS8wVoice, btnS9Voice, btnS10Voice,
      btnS11Voice, btnS12Voice, btnS13Voice, btnS14Voice, btnS15Voice, btnS16Voice, btnS17Voice,
      btnS17wVoice, btnS18Voice, btnBk1Voice, btnBk1wVoice, btnBk1rVoice, btnBk2Voice, btnBk2wVoice, btnBk2rVoice,
      btnBk3Voice, btnBk3wVoice, btnBk3rVoice, btnBk4Voice, btnBk4wVoice, btnBk4rVoice, btnBk5Voice, btnBk5wVoice, btnBk5rVoice
    ].forEach(b => {
      if (b) b.classList.remove('speaking');
    });
    if (s5VoiceIcon) s5VoiceIcon.textContent = '🔊';
    if (s8VoiceIcon) s8VoiceIcon.textContent = '🔊';
    if (s8wVoiceIcon) s8wVoiceIcon.textContent = '🔊';
    if (s9VoiceIcon) s9VoiceIcon.textContent = '🔊';
    if (s10VoiceIcon) s10VoiceIcon.textContent = '🔊';
    if (s11VoiceIcon) s11VoiceIcon.textContent = '🔊';
    if (s12VoiceIcon) s12VoiceIcon.textContent = '🔊';
    if (s13VoiceIcon) s13VoiceIcon.textContent = '🔊';
    if (s14VoiceIcon) s14VoiceIcon.textContent = '🔊';
    if (s15VoiceIcon) s15VoiceIcon.textContent = '🔊';
    if (s16VoiceIcon) s16VoiceIcon.textContent = '🔊';
    if (s17VoiceIcon) s17VoiceIcon.textContent = '🔊';
    if (s17wVoiceIcon) s17wVoiceIcon.textContent = '🔊';
    if (s18VoiceIcon) s18VoiceIcon.textContent = '🔊';
    if (bk1VoiceIcon) bk1VoiceIcon.textContent = '🔊';
    if (bk1wVoiceIcon) bk1wVoiceIcon.textContent = '🔊';
    if (bk1rVoiceIcon) bk1rVoiceIcon.textContent = '🔊';
    if (bk2VoiceIcon) bk2VoiceIcon.textContent = '🔊';
    if (bk2wVoiceIcon) bk2wVoiceIcon.textContent = '🔊';
    if (bk2rVoiceIcon) bk2rVoiceIcon.textContent = '🔊';
    if (bk3VoiceIcon) bk3VoiceIcon.textContent = '🔊';
    if (bk3wVoiceIcon) bk3wVoiceIcon.textContent = '🔊';
    if (bk3rVoiceIcon) bk3rVoiceIcon.textContent = '🔊';
    if (bk4VoiceIcon) bk4VoiceIcon.textContent = '🔊';
    if (bk4wVoiceIcon) bk4wVoiceIcon.textContent = '🔊';
    if (bk4rVoiceIcon) bk4rVoiceIcon.textContent = '🔊';
    if (bk5VoiceIcon) bk5VoiceIcon.textContent = '🔊';
    if (bk5wVoiceIcon) bk5wVoiceIcon.textContent = '🔊';
    if (bk5rVoiceIcon) bk5rVoiceIcon.textContent = '🔊';
  }

  // ------------------------------------------------------------
  // PEMUTAR AUDIO REKAMAN ASLI:
  // 1. Audio Kasir (8 Detik)
  // 2. Audio Pengertian Rasio (13 Detik)
  // ------------------------------------------------------------

  // Putar Audio Kasir Nisa (8 detik)
  function playKasirAudio(onCompleteCallback) {
    if (!isSoundEnabled) {
      if (onCompleteCallback) onCompleteCallback();
      return;
    }

    stopAllAudio();
    btnReplayVoice.classList.add('speaking');

    if (audioKasirPlayer) {
      audioKasirPlayer.currentTime = 0;
      const playPromise = audioKasirPlayer.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          // Berhasil diputar
        }).catch(err => {
          console.warn('Audio Kasir playback blocked/failed, using TTS fallback:', err);
          speakNisa(nisaDialogue, btnReplayVoice);
        });
      }

      audioKasirPlayer.onended = () => {
        btnReplayVoice.classList.remove('speaking');
        if (onCompleteCallback) onCompleteCallback();
      };
      audioKasirPlayer.onerror = () => {
        btnReplayVoice.classList.remove('speaking');
        if (onCompleteCallback) onCompleteCallback();
      };
    } else {
      speakNisa(nisaDialogue, btnReplayVoice);
    }
  }

  // Putar Audio Pengertian Rasio (13 detik)
  function playRasioAudio(onCompleteCallback) {
    if (!isSoundEnabled) {
      if (onCompleteCallback) onCompleteCallback();
      return;
    }

    stopAllAudio();
    btnS5Voice.classList.add('speaking');
    if (s5VoiceIcon) s5VoiceIcon.textContent = '🗣️';

    if (audioRasioPlayer) {
      audioRasioPlayer.currentTime = 0;
      const playPromise = audioRasioPlayer.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          // Berhasil diputar
        }).catch(err => {
          console.warn('Audio Rasio playback blocked/failed, using TTS fallback:', err);
          speakSiswi(siswiSpeech1, () => {
            btnS5Voice.classList.remove('speaking');
            if (s5VoiceIcon) s5VoiceIcon.textContent = '🔊';
            if (onCompleteCallback) onCompleteCallback();
          }, btnS5Voice, s5VoiceIcon);
        });
      }

      audioRasioPlayer.onended = () => {
        btnS5Voice.classList.remove('speaking');
        if (s5VoiceIcon) s5VoiceIcon.textContent = '🔊';
        if (onCompleteCallback) onCompleteCallback();
      };
      audioRasioPlayer.onerror = () => {
        btnS5Voice.classList.remove('speaking');
        if (s5VoiceIcon) s5VoiceIcon.textContent = '🔊';
        if (onCompleteCallback) onCompleteCallback();
      };
    } else {
      speakSiswi(siswiSpeech1, onCompleteCallback, btnS5Voice, s5VoiceIcon);
    }
  }

  // Putar Audio Kesamaan Rasio (Rekaman Asli 14 detik)
  function playKesamaanAudio(onCompleteCallback = null) {
    initAudioContext();
    if (!isSoundEnabled) {
      if (onCompleteCallback) onCompleteCallback();
      return;
    }

    stopAllAudio();
    if (btnS12Voice) btnS12Voice.classList.add('speaking');
    if (s12VoiceIcon) s12VoiceIcon.textContent = '🗣️';

    if (audioKesamaanPlayer) {
      audioKesamaanPlayer.currentTime = 0;
      const playPromise = audioKesamaanPlayer.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          // Berhasil memutar rekaman asli
        }).catch(err => {
          console.warn('Audio Kesamaan Rasio blocked/failed, using TTS fallback:', err);
          speakSiswi(siswiSpeech12, () => {
            if (btnS12Voice) btnS12Voice.classList.remove('speaking');
            if (s12VoiceIcon) s12VoiceIcon.textContent = '🔊';
            if (onCompleteCallback) onCompleteCallback();
          }, btnS12Voice, s12VoiceIcon);
        });
      }

      audioKesamaanPlayer.onended = () => {
        if (btnS12Voice) btnS12Voice.classList.remove('speaking');
        if (s12VoiceIcon) s12VoiceIcon.textContent = '🔊';
        if (onCompleteCallback) onCompleteCallback();
      };
      audioKesamaanPlayer.onerror = () => {
        if (btnS12Voice) btnS12Voice.classList.remove('speaking');
        if (s12VoiceIcon) s12VoiceIcon.textContent = '🔊';
        if (onCompleteCallback) onCompleteCallback();
      };
    } else {
      speakSiswi(siswiSpeech12, onCompleteCallback, btnS12Voice, s12VoiceIcon);
    }
  }

  // ------------------------------------------------------------
  // PEMUTAR AUDIO REKAMAN ASLI SLIDE 13 & 14:
  // 1. Audio Es Sirup dan Rasio (29 Detik) -> Slide 13
  // 2. Audio Rahasia Es Sirup Enak (19 Detik) -> Slide 14
  // ------------------------------------------------------------
  function playEsSirupAudio(onCompleteCallback) {
    initAudioContext();
    if (!isSoundEnabled) {
      if (onCompleteCallback) onCompleteCallback();
      return;
    }

    stopAllAudio();
    if (btnS13Voice) btnS13Voice.classList.add('speaking');
    if (s13VoiceIcon) s13VoiceIcon.textContent = '🗣️';

    if (audioEsSirupPlayer) {
      audioEsSirupPlayer.currentTime = 0;
      const playPromise = audioEsSirupPlayer.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          // Berhasil memutar rekaman asli Slide 13
        }).catch(err => {
          console.warn('Audio Es Sirup blocked/failed, using TTS fallback:', err);
          speakSiswi(siswiSpeech13, () => {
            if (btnS13Voice) btnS13Voice.classList.remove('speaking');
            if (s13VoiceIcon) s13VoiceIcon.textContent = '🔊';
            if (onCompleteCallback) onCompleteCallback();
          }, btnS13Voice, s13VoiceIcon);
        });
      }

      audioEsSirupPlayer.onended = () => {
        if (btnS13Voice) btnS13Voice.classList.remove('speaking');
        if (s13VoiceIcon) s13VoiceIcon.textContent = '🔊';
        if (onCompleteCallback) onCompleteCallback();
      };
      audioEsSirupPlayer.onerror = () => {
        if (btnS13Voice) btnS13Voice.classList.remove('speaking');
        if (s13VoiceIcon) s13VoiceIcon.textContent = '🔊';
        if (onCompleteCallback) onCompleteCallback();
      };
    } else {
      speakSiswi(siswiSpeech13, onCompleteCallback, btnS13Voice, s13VoiceIcon);
    }
  }

  function playRahasiaSirupAudio(onCompleteCallback) {
    initAudioContext();
    if (!isSoundEnabled) {
      if (onCompleteCallback) onCompleteCallback();
      return;
    }

    stopAllAudio();
    if (btnS14Voice) btnS14Voice.classList.add('speaking');
    if (s14VoiceIcon) s14VoiceIcon.textContent = '🗣️';

    if (audioRahasiaSirupPlayer) {
      audioRahasiaSirupPlayer.currentTime = 0;
      const playPromise = audioRahasiaSirupPlayer.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          // Berhasil memutar rekaman asli Slide 14
        }).catch(err => {
          console.warn('Audio Rahasia Es Sirup blocked/failed, using TTS fallback:', err);
          speakSiswi(siswiSpeech14, () => {
            if (btnS14Voice) btnS14Voice.classList.remove('speaking');
            if (s14VoiceIcon) s14VoiceIcon.textContent = '🔊';
            if (onCompleteCallback) onCompleteCallback();
          }, btnS14Voice, s14VoiceIcon);
        });
      }

      audioRahasiaSirupPlayer.onended = () => {
        if (btnS14Voice) btnS14Voice.classList.remove('speaking');
        if (s14VoiceIcon) s14VoiceIcon.textContent = '🔊';
        if (onCompleteCallback) onCompleteCallback();
      };
      audioRahasiaSirupPlayer.onerror = () => {
        if (btnS14Voice) btnS14Voice.classList.remove('speaking');
        if (s14VoiceIcon) s14VoiceIcon.textContent = '🔊';
        if (onCompleteCallback) onCompleteCallback();
      };
    } else {
      speakSiswi(siswiSpeech14, onCompleteCallback, btnS14Voice, s14VoiceIcon);
    }
  }

  // ------------------------------------------------------------
  // TEXT-TO-SPEECH SUARA ANAK-ANAK SISWI SMP (FALLBACK & NARASI)
  // Karakter: Suara Cewek Muda / Pelajar SMP (Lively, Ceria & Nyaring)
  // ------------------------------------------------------------
  function getFemaleIndonesianVoice() {
    if (!window.speechSynthesis) return null;
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return null;

    // 1. Prioritaskan Microsoft Gadis (Artinya gadis remaja/muda)
    const gadisVoice = voices.find(v => {
      const n = v.name.toLowerCase();
      const l = v.lang.toLowerCase();
      return (l.includes('id') || n.includes('indonesia')) && n.includes('gadis');
    });
    if (gadisVoice) return gadisVoice;

    // 2. Prioritaskan suara perempuan Indonesia dengan label Natural / Online
    const naturalVoice = voices.find(v => {
      const n = v.name.toLowerCase();
      const l = v.lang.toLowerCase();
      const isIndo = l.includes('id') || n.includes('indonesia');
      const isFemale = n.includes('female') || n.includes('wanita') || n.includes('siti');
      return isIndo && isFemale && (n.includes('natural') || n.includes('online'));
    });
    if (naturalVoice) return naturalVoice;

    // 3. Suara cewek / perempuan Bahasa Indonesia lainnya
    const femaleVoice = voices.find(v => {
      const n = v.name.toLowerCase();
      const l = v.lang.toLowerCase();
      const isIndo = l.includes('id') || n.includes('indonesia');
      const isFemale = n.includes('female') || n.includes('wanita') || n.includes('siti') || n.includes('cewek');
      return isIndo && isFemale;
    });
    if (femaleVoice) return femaleVoice;

    // 4. Suara bahasa Indonesia umum
    const anyIndoVoice = voices.find(v => {
      const l = v.lang.toLowerCase();
      const n = v.name.toLowerCase();
      return l.startsWith('id') || l.includes('id-id') || n.includes('indonesia');
    });
    if (anyIndoVoice) return anyIndoVoice;

    // 5. Fallback ke suara perempuan lain
    return voices.find(v => v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('girl')) || voices[0];
  }

  function speakNisa(customText = null, targetBtn = null, targetIcon = null) {
    const text = customText || nisaDialogue;
    const btn = targetBtn || btnReplayVoice;
    const icon = targetIcon || null;

    if (!window.speechSynthesis || !isSoundEnabled) return;
    window.speechSynthesis.cancel();
    clearSpeakingState();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID';
    utterance.rate = 0.98;   // Ritme aktif & ceria anak SMP
    utterance.pitch = 1.50;  // Nada tinggi khas anak-anak siswi SMP

    const voice = getFemaleIndonesianVoice();
    if (voice) utterance.voice = voice;

    utterance.onstart = () => {
      if (btn) btn.classList.add('speaking');
      if (icon) icon.textContent = '🗣️';
    };
    utterance.onend = () => {
      if (btn) btn.classList.remove('speaking');
      if (icon) icon.textContent = '🔊';
    };
    utterance.onerror = () => {
      if (btn) btn.classList.remove('speaking');
      if (icon) icon.textContent = '🔊';
    };

    window.speechSynthesis.speak(utterance);
  }

  function speakSiswi(text, onCompleteCallback, targetBtn = null, targetIcon = null) {
    const btn = targetBtn || btnS5Voice;
    const icon = targetIcon || s5VoiceIcon;

    if (!window.speechSynthesis || !isSoundEnabled) {
      if (onCompleteCallback) {
        const estimatedTime = Math.max(1200, (text.length / 15) * 1000);
        setTimeout(onCompleteCallback, estimatedTime);
      }
      return;
    }

    window.speechSynthesis.cancel();
    clearSpeakingState();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID';
    utterance.rate = 0.98;   // Ritme aktif & ceria anak SMP
    utterance.pitch = 1.50;  // Nada tinggi khas anak-anak siswi SMP

    const voice = getFemaleIndonesianVoice();
    if (voice) utterance.voice = voice;

    utterance.onstart = () => {
      if (btn) btn.classList.add('speaking');
      if (icon) icon.textContent = '🗣️';
    };

    utterance.onend = () => {
      if (btn) btn.classList.remove('speaking');
      if (icon) icon.textContent = '🔊';
      if (onCompleteCallback) onCompleteCallback();
    };

    utterance.onerror = () => {
      if (btn) btn.classList.remove('speaking');
      if (icon) icon.textContent = '🔊';
      if (onCompleteCallback) onCompleteCallback();
    };

    window.speechSynthesis.speak(utterance);
  }

  if (window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = () => {};
  }

  // Event Listener Replay Suara di Setiap Slide
  btnReplayVoice.addEventListener('click', (e) => {
    e.stopPropagation();
    initAudioContext();
    playNavSFX();
    playKasirAudio();
  });

  btnS5Voice.addEventListener('click', (e) => {
    e.stopPropagation();
    initAudioContext();
    playNavSFX();
    if (slide5Stage === 1) {
      // Putar Audio Pengertian Rasio (13 detik)
      playRasioAudio();
    } else {
      speakSiswi(siswiSpeech2, null, btnS5Voice, s5VoiceIcon);
    }
  });

  btnS7Voice.addEventListener('click', (e) => {
    e.stopPropagation();
    initAudioContext();
    playNavSFX();
    speakSiswi(siswiSpeech7, null, btnS7Voice, s7VoiceIcon);
  });

  if (btnS8Voice) {
    btnS8Voice.addEventListener('click', (e) => {
      e.stopPropagation();
      initAudioContext();
      playNavSFX();
      speakSiswi(siswiSpeech8, null, btnS8Voice, s8VoiceIcon);
    });
  }

  if (btnS8wVoice) {
    btnS8wVoice.addEventListener('click', (e) => {
      e.stopPropagation();
      initAudioContext();
      playNavSFX();
      speakSiswi(siswiWrongSpeech, null, btnS8wVoice, s8wVoiceIcon);
    });
  }

  if (btnS9Voice) {
    btnS9Voice.addEventListener('click', (e) => {
      e.stopPropagation();
      initAudioContext();
      playNavSFX();
      speakSiswi(siswiSpeech9, null, btnS9Voice, s9VoiceIcon);
    });
  }

  if (btnS10Voice) {
    btnS10Voice.addEventListener('click', (e) => {
      e.stopPropagation();
      initAudioContext();
      playNavSFX();
      speakSiswi(siswiSpeech10, null, btnS10Voice, s10VoiceIcon);
    });
  }

  if (btnS11Voice) {
    btnS11Voice.addEventListener('click', (e) => {
      e.stopPropagation();
      initAudioContext();
      playNavSFX();
      speakSiswi(siswiSpeech11, null, btnS11Voice, s11VoiceIcon);
    });
  }

  if (btnS12Voice) {
    btnS12Voice.addEventListener('click', (e) => {
      e.stopPropagation();
      initAudioContext();
      playNavSFX();
      playKesamaanAudio();
    });
  }

  if (btnS13Voice) {
    btnS13Voice.addEventListener('click', (e) => {
      e.stopPropagation();
      initAudioContext();
      playNavSFX();
      playEsSirupAudio();
    });
  }

  if (btnS14Voice) {
    btnS14Voice.addEventListener('click', (e) => {
      e.stopPropagation();
      initAudioContext();
      playNavSFX();
      playRahasiaSirupAudio();
    });
  }

  if (btnS15Voice) {
    btnS15Voice.addEventListener('click', (e) => {
      e.stopPropagation();
      initAudioContext();
      playNavSFX();
      speakSiswi(siswiSpeech15, null, btnS15Voice, s15VoiceIcon);
    });
  }

  if (btnS16Voice) {
    btnS16Voice.addEventListener('click', (e) => {
      e.stopPropagation();
      initAudioContext();
      playNavSFX();
      speakSiswi(siswiSpeech16, null, btnS16Voice, s16VoiceIcon);
    });
  }

  if (btnS17Voice) {
    btnS17Voice.addEventListener('click', (e) => {
      e.stopPropagation();
      initAudioContext();
      playNavSFX();
      speakSiswi(siswiSpeech17, null, btnS17Voice, s17VoiceIcon);
    });
  }

  if (btnS17wVoice) {
    btnS17wVoice.addEventListener('click', (e) => {
      e.stopPropagation();
      initAudioContext();
      playNavSFX();
      speakSiswi(siswiSpeech17Wrong, null, btnS17wVoice, s17wVoiceIcon);
    });
  }

  if (btnS18Voice) {
    btnS18Voice.addEventListener('click', (e) => {
      e.stopPropagation();
      initAudioContext();
      playNavSFX();
      speakSiswi(siswiSpeech18, null, btnS18Voice, s18VoiceIcon);
    });
  }

  // Voice Replay Listeners: Kuis 1 & Kuis 2 Belanja
  if (btnBk1Voice) {
    btnBk1Voice.addEventListener('click', (e) => {
      e.stopPropagation();
      initAudioContext();
      playNavSFX();
      speakSiswi(siswiSpeechBK1, null, btnBk1Voice, bk1VoiceIcon);
    });
  }

  if (btnBk1wVoice) {
    btnBk1wVoice.addEventListener('click', (e) => {
      e.stopPropagation();
      initAudioContext();
      playNavSFX();
      speakSiswi(siswiSpeechBKWrong, null, btnBk1wVoice, bk1wVoiceIcon);
    });
  }

  if (btnBk1rVoice) {
    btnBk1rVoice.addEventListener('click', (e) => {
      e.stopPropagation();
      initAudioContext();
      playNavSFX();
      speakSiswi(siswiSpeechBK1Right, null, btnBk1rVoice, bk1rVoiceIcon);
    });
  }

  if (btnBk2Voice) {
    btnBk2Voice.addEventListener('click', (e) => {
      e.stopPropagation();
      initAudioContext();
      playNavSFX();
      speakSiswi(siswiSpeechBK2, null, btnBk2Voice, bk2VoiceIcon);
    });
  }

  if (btnBk2wVoice) {
    btnBk2wVoice.addEventListener('click', (e) => {
      e.stopPropagation();
      initAudioContext();
      playNavSFX();
      speakSiswi(siswiSpeechBKWrong, null, btnBk2wVoice, bk2wVoiceIcon);
    });
  }

  if (btnBk2rVoice) {
    btnBk2rVoice.addEventListener('click', (e) => {
      e.stopPropagation();
      initAudioContext();
      playNavSFX();
      speakSiswi(siswiSpeechBK2Right, null, btnBk2rVoice, bk2rVoiceIcon);
    });
  }

  // Voice Replay Listeners: Kuis 3, 4, 5 Belanja
  if (btnBk3Voice) {
    btnBk3Voice.addEventListener('click', (e) => {
      e.stopPropagation();
      initAudioContext();
      playNavSFX();
      speakSiswi(siswiSpeechBK3, null, btnBk3Voice, bk3VoiceIcon);
    });
  }

  if (btnBk3wVoice) {
    btnBk3wVoice.addEventListener('click', (e) => {
      e.stopPropagation();
      initAudioContext();
      playNavSFX();
      speakSiswi(siswiSpeechBKWrong, null, btnBk3wVoice, bk3wVoiceIcon);
    });
  }

  if (btnBk3rVoice) {
    btnBk3rVoice.addEventListener('click', (e) => {
      e.stopPropagation();
      initAudioContext();
      playNavSFX();
      speakSiswi(siswiSpeechBK3Right, null, btnBk3rVoice, bk3rVoiceIcon);
    });
  }

  if (btnBk4Voice) {
    btnBk4Voice.addEventListener('click', (e) => {
      e.stopPropagation();
      initAudioContext();
      playNavSFX();
      speakSiswi(siswiSpeechBK4, null, btnBk4Voice, bk4VoiceIcon);
    });
  }

  if (btnBk4wVoice) {
    btnBk4wVoice.addEventListener('click', (e) => {
      e.stopPropagation();
      initAudioContext();
      playNavSFX();
      speakSiswi(siswiSpeechBKWrong, null, btnBk4wVoice, bk4wVoiceIcon);
    });
  }

  if (btnBk4rVoice) {
    btnBk4rVoice.addEventListener('click', (e) => {
      e.stopPropagation();
      initAudioContext();
      playNavSFX();
      speakSiswi(siswiSpeechBK4Right, null, btnBk4rVoice, bk4rVoiceIcon);
    });
  }

  if (btnBk5Voice) {
    btnBk5Voice.addEventListener('click', (e) => {
      e.stopPropagation();
      initAudioContext();
      playNavSFX();
      speakSiswi(siswiSpeechBK5, null, btnBk5Voice, bk5VoiceIcon);
    });
  }

  if (btnBk5wVoice) {
    btnBk5wVoice.addEventListener('click', (e) => {
      e.stopPropagation();
      initAudioContext();
      playNavSFX();
      speakSiswi(siswiSpeechBKWrong, null, btnBk5wVoice, bk5wVoiceIcon);
    });
  }

  if (btnBk5rVoice) {
    btnBk5rVoice.addEventListener('click', (e) => {
      e.stopPropagation();
      initAudioContext();
      playNavSFX();
      speakSiswi(siswiSpeechBK5Right, null, btnBk5rVoice, bk5rVoiceIcon);
    });
  }

  // ------------------------------------------------------------
  // FUNGSI GANTI SLIDE SECARA HALUS & AMAN
  // ------------------------------------------------------------
  function switchSlide(currentSlide, nextSlide, useDoorTransition = false, customMessage = "Membuka...") {
    if (isTransitioning) return;
    isTransitioning = true;

    stopAllAudio();
    if (slide5Timer) clearTimeout(slide5Timer);
    clearSlide6Timers();

    if (useDoorTransition) {
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
          }, 600);
        }, 400);

      }, 700);

    } else {
      currentSlide.style.opacity = '0';
      currentSlide.style.transform = 'scale(0.97)';

      setTimeout(() => {
        currentSlide.classList.remove('active');
        currentSlide.style.opacity = '';
        currentSlide.style.transform = '';

        nextSlide.classList.add('active');
        isTransitioning = false;
      }, 350);
    }
  }

  // ------------------------------------------------------------
  // TOAST NOTIFIKASI INTERAKTIF
  // ------------------------------------------------------------
  function showToast(message, icon = '✨') {
    if (toastTimer) clearTimeout(toastTimer);

    toastIcon.textContent = icon;
    toastMessage.textContent = message;
    toastNotification.classList.add('show');

    toastTimer = setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 3200);
  }

  // ------------------------------------------------------------
  // LOGIKA SLIDE 5: PENJELASAN MATERI (AUDIO 13 DETIK)
  // ------------------------------------------------------------
  function startSlide5Sequence() {
    slide5Stage = 1;
    bubble2Overlay.classList.remove('active');
    explanationText.textContent = "Penjelasan 1 / 2";
    if (slide5Timer) clearTimeout(slide5Timer);

    // Putar Audio Pengertian Rasio (Rekaman Asli 13 Detik)
    setTimeout(() => {
      playRasioAudio(() => {
        // Setelah audio 13s selesai, otomatis lanjut ke Balon Penjelasan 2
        slide5Timer = setTimeout(() => {
          advanceToSlide5Stage2();
        }, 900);
      });
    }, 450);
  }

  function advanceToSlide5Stage2() {
    slide5Stage = 2;
    playBubbleShiftSFX();
    stopAllAudio();

    bubble2Overlay.classList.add('active');
    explanationText.textContent = "Penjelasan 2 / 2";

    showToast("✨ Yuk ambil barangmu di troli belanja!", "🍉");

    setTimeout(() => {
      speakSiswi(siswiSpeech2, () => {
        showToast("👉 Klik tombol Selanjutnya untuk mengambil barang!", "🛍️");
      }, btnS5Voice, s5VoiceIcon);
    }, 200);
  }

  function backToSlide5Stage1() {
    slide5Stage = 1;
    playBackSFX();

    bubble2Overlay.classList.remove('active');
    explanationText.textContent = "Penjelasan 1 / 2";

    stopAllAudio();
    setTimeout(() => {
      playRasioAudio();
    }, 300);
  }

  // ------------------------------------------------------------
  // LOGIKA SLIDE 6: ANIMASI OTOMATIS 2 SEMANGKA & 4 SUSU KE KERANJANG
  // ------------------------------------------------------------
  function clearSlide6Timers() {
    slide6Timers.forEach(t => clearTimeout(t));
    slide6Timers = [];
  }

  function animateItemFly(type, startX, startY, endX, endY, onLand) {
    const item = document.createElement('img');
    item.src = type === 'watermelon' ? 'assets/clean-item-semangka.png' : 'assets/clean-item-susu.png';
    item.className = 'anim-flying-item ' + (type === 'watermelon' ? 'flying-wm' : 'flying-mk');
    flightStage.appendChild(item);

    const midX = (startX + endX) / 2;
    const midY = Math.min(startY, endY) - 14;

    const keyframes = [
      { left: `${startX}%`, top: `${startY}%`, opacity: 0, transform: 'scale(0.8) rotate(0deg)' },
      { left: `${startX + 3}%`, top: `${startY - 3}%`, opacity: 1, transform: 'scale(1.15) rotate(-12deg)', offset: 0.15 },
      { left: `${midX}%`, top: `${midY}%`, opacity: 1, transform: 'scale(1.3) rotate(15deg)', offset: 0.55 },
      { left: `${endX}%`, top: `${endY}%`, opacity: 1, transform: 'scale(0.95) rotate(-6deg)', offset: 0.90 },
      { left: `${endX}%`, top: `${endY}%`, opacity: 0, transform: 'scale(0.8) rotate(0deg)', offset: 1.00 }
    ];

    const anim = item.animate(keyframes, {
      duration: 720,
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
      fill: 'forwards'
    });

    anim.onfinish = () => {
      item.remove();
      if (onLand) onLand();
    };
  }

  function startSlide6Sequence() {
    clearSlide6Timers();

    // Reset keranjang (2 Semangka & 4 Susu)
    [landedW1, landedW2, landedM1, landedM2, landedM3, landedM4].forEach(el => {
      if (el) el.classList.remove('visible');
    });
    badgeCountW.textContent = "🍉 0 Semangka";
    badgeCountM.textContent = "🥛 0 Susu";
    btnS6Next.classList.remove('ready');

    showToast("🍉 Mengambil 2 semangka & 4 susu ke keranjang...", "🛒");

    // 1. Semangka 1 (t = 400ms)
    slide6Timers.push(setTimeout(() => {
      animateItemFly('watermelon', 34, 21, 67, 52, () => {
        playPopSFX();
        triggerCartBounce();
        if (landedW1) landedW1.classList.add('visible');
        badgeCountW.textContent = "🍉 1 Semangka";
      });
    }, 400));

    // 2. Semangka 2 (t = 1500ms)
    slide6Timers.push(setTimeout(() => {
      animateItemFly('watermelon', 44, 21, 77, 52, () => {
        playPopSFX();
        triggerCartBounce();
        if (landedW2) landedW2.classList.add('visible');
        badgeCountW.textContent = "🍉 2 Semangka";
      });
    }, 1500));

    // 3. Susu 1 (t = 2600ms)
    slide6Timers.push(setTimeout(() => {
      animateItemFly('milk', 32, 53, 66, 47, () => {
        playChimeSFX();
        triggerCartBounce();
        if (landedM1) landedM1.classList.add('visible');
        badgeCountM.textContent = "🥛 1 Susu";
      });
    }, 2600));

    // 4. Susu 2 (t = 3600ms)
    slide6Timers.push(setTimeout(() => {
      animateItemFly('milk', 38, 53, 72, 46, () => {
        playChimeSFX();
        triggerCartBounce();
        if (landedM2) landedM2.classList.add('visible');
        badgeCountM.textContent = "🥛 2 Susu";
      });
    }, 3600));

    // 5. Susu 3 (t = 4600ms)
    slide6Timers.push(setTimeout(() => {
      animateItemFly('milk', 44, 53, 77, 46, () => {
        playChimeSFX();
        triggerCartBounce();
        if (landedM3) landedM3.classList.add('visible');
        badgeCountM.textContent = "🥛 3 Susu";
      });
    }, 4600));

    // 6. Susu 4 (t = 5600ms)
    slide6Timers.push(setTimeout(() => {
      animateItemFly('milk', 50, 53, 83, 47, () => {
        playChimeSFX();
        triggerCartBounce();
        if (landedM4) landedM4.classList.add('visible');
        badgeCountM.textContent = "🥛 4 Susu";
      });
    }, 5600));

    // 7. Selesai Semua (t = 6600ms)
    slide6Timers.push(setTimeout(() => {
      playSuccessSFX();
      btnS6Next.classList.add('ready');
      showToast("✨ 2 Semangka & 4 Susu siap di keranjang! Klik Selanjutnya ➔", "🛒");
      speakSiswi(siswiSpeech6, null);
    }, 6600));
  }

  function triggerCartBounce() {
    if (!cartLandingZone) return;
    cartLandingZone.classList.remove('bounce');
    void cartLandingZone.offsetWidth;
    cartLandingZone.classList.add('bounce');
    setTimeout(() => {
      cartLandingZone.classList.remove('bounce');
    }, 200);
  }

  btnReplayAnim6.addEventListener('click', (e) => {
    e.stopPropagation();
    playNavSFX();
    startSlide6Sequence();
  });

  // ------------------------------------------------------------
  // LOGIKA SLIDE 7: HASIL RASIO 2 SEMANGKA & 4 SUSU (RASIO 2 : 4)
  // ------------------------------------------------------------
  function startSlide7Sequence() {
    showToast("⚖️ Rasio Semangka terhadap Susu = 2 : 4", "📊");
    setTimeout(() => {
      speakSiswi(siswiSpeech7, null, btnS7Voice, s7VoiceIcon);
    }, 450);
  }

  // ------------------------------------------------------------
  // LOGIKA SLIDE 8: KUIS RASIO PILIHAN GANDA (GAMBAR 1)
  // ------------------------------------------------------------
  function resetQuizState() {
    quizOptionButtons.forEach(btn => {
      if (btn) {
        btn.classList.remove('selected', 'correct', 'wrong');
        btn.disabled = false;
      }
    });
    if (btnS8Next) btnS8Next.classList.remove('ready');
  }

  function startSlide8Sequence() {
    resetQuizState();
    showToast("🎯 Kuis: Berapakah rasio susu terhadap semangka?", "❓");
    setTimeout(() => {
      speakSiswi(siswiSpeech8, null, btnS8Voice, s8VoiceIcon);
    }, 450);
  }

  function handleQuizSelection(selectedBtn) {
    if (!selectedBtn) return;
    const isCorrect = selectedBtn.getAttribute('data-correct') === 'true';

    // Disable all options momentarily
    quizOptionButtons.forEach(btn => {
      if (btn) {
        btn.classList.remove('selected', 'correct', 'wrong');
        btn.disabled = true;
      }
    });

    if (isCorrect) {
      // JAWABAN BENAR: PILIHAN A (4 : 2)
      playCorrectSFX();
      selectedBtn.classList.add('selected', 'correct');
      if (btnS8Next) btnS8Next.classList.add('ready');

      showToast("🎉 Hore! Jawabanmu BENAR (4 : 2)!", "🌟");

      // Otomatis langsung pindah ke Slide 9 (Jawaban Benar & Pembahasan - Gambar 3)
      setTimeout(() => {
        switchSlide(slide8, slide9, false);
        setTimeout(() => {
          startSlide9Sequence();
        }, 450);
      }, 700);
    } else {
      // JAWABAN SALAH: PILIHAN SELAIN A (B, C, ATAU D)
      playWrongSFX();
      selectedBtn.classList.add('selected', 'wrong');

      showToast("❌ Ups, jawabanmu masih salah!", "⚠️");

      // Otomatis langsung munculkan slide salah (Slide 8-Wrong - Gambar 2)
      setTimeout(() => {
        switchSlide(slide8, slide8Wrong, false);
        setTimeout(() => {
          startSlide8WrongSequence();
        }, 450);
      }, 700);
    }
  }

  if (btnQuizA) btnQuizA.addEventListener('click', () => handleQuizSelection(btnQuizA));
  if (btnQuizB) btnQuizB.addEventListener('click', () => handleQuizSelection(btnQuizB));
  if (btnQuizC) btnQuizC.addEventListener('click', () => handleQuizSelection(btnQuizC));
  if (btnQuizD) btnQuizD.addEventListener('click', () => handleQuizSelection(btnQuizD));

  // ------------------------------------------------------------
  // LOGIKA SLIDE 8-WRONG: LAYAR SALAH (GAMBAR 2)
  // ------------------------------------------------------------
  function startSlide8WrongSequence() {
    showToast("💪 Jangan menyerah, yuk coba lagi!", "💡");
    setTimeout(() => {
      speakSiswi(siswiWrongSpeech, null, btnS8wVoice, s8wVoiceIcon);
    }, 450);
  }

  // Tombol Kembali ke Soal dari Layar Salah
  if (btnS8wBack) {
    btnS8wBack.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slide8Wrong, slide8, false);
      setTimeout(() => {
        startSlide8Sequence();
      }, 450);
    });
  }

  // ------------------------------------------------------------
  // LOGIKA SLIDE 9: JAWABAN BENAR & PEMBAHASAN (GAMBAR 3)
  // ------------------------------------------------------------
  function startSlide9Sequence() {
    playSuccessSFX();
    showToast("✓ Benar! Rasio Susu terhadap Semangka = 4 : 2", "🥛");
    setTimeout(() => {
      speakSiswi(siswiSpeech9, null, btnS9Voice, s9VoiceIcon);
    }, 450);
  }

  // Tombol Kembali ke Soal
  if (btnS9Back) {
    btnS9Back.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slide9, slide8, false);
      setTimeout(() => {
        startSlide8Sequence();
      }, 450);
    });
  }

  // Tombol Selanjutnya ke Slide 10
  if (btnS9Next) {
    btnS9Next.addEventListener('click', () => {
      playNavSFX();
      switchSlide(slide9, slide10, false);
      setTimeout(() => {
        startSlide10Sequence();
      }, 450);
    });
  }

  // ------------------------------------------------------------
  // LOGIKA SLIDE 10: URUTAN TIDAK BOLEH DIBALIK (GAMBAR 4)
  // ------------------------------------------------------------
  function startSlide10Sequence() {
    showToast("⚠️ Urutan di dalam rasio tidak boleh dibalik! 2 : 4 ≠ 4 : 2", "💡");
    setTimeout(() => {
      speakSiswi(siswiSpeech10, null, btnS10Voice, s10VoiceIcon);
    }, 450);
  }

  // Tombol Kembali ke Pilihan Materi (Menuju Slide 11)
  if (btnS10Troli) {
    btnS10Troli.addEventListener('click', () => {
      playNavSFX();
      switchSlide(slide10, slide11, true, "Kembali ke Pilihan Materi Troli...");
      setTimeout(() => {
        startSlide11Sequence();
      }, 1200);
    });
  }

  // ------------------------------------------------------------
  // LOGIKA SLIDE 11: PILIHAN MATERI DALAM TROLI (GAMBAR 5)
  // ------------------------------------------------------------
  function startSlide11Sequence() {
    playSuccessSFX();
    showToast("🛒 Pilihan Materi di Dalam Troli Belanjamu!", "✨");
    setTimeout(() => {
      speakSiswi(siswiSpeech11, null, btnS11Voice, s11VoiceIcon);
    }, 500);
  }

  // Tombol 1: Meracik Troli (Kembali ke Slide 5)
  if (btnS11Meracik) {
    btnS11Meracik.addEventListener('click', () => {
      playSelectSFX();
      switchSlide(slide11, slide5, false);
      setTimeout(() => {
        startSlide5Sequence();
      }, 450);
    });
  }

  // Tombol 2: Kesamaan Rasio Belanja (Pindah ke Slide 12)
  if (btnS11Kesamaan) {
    btnS11Kesamaan.addEventListener('click', () => {
      playSelectSFX();
      switchSlide(slide11, slide12, false);
      setTimeout(() => {
        startSlide12Sequence();
      }, 450);
    });
  }

  // Tombol 3: Kembali ke Kasir Nisa (Slide 2)
  if (btnS11Back) {
    btnS11Back.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slide11, slide2, false);
      setTimeout(() => {
        playKasirAudio();
      }, 450);
    });
  }

  // Tombol 4: Selanjutnya (Selesai Pembelajaran)
  if (btnS11Next) {
    btnS11Next.addEventListener('click', () => {
      playSuccessSFX();
      showToast("🎉 Hebat! Kamu sudah menyelesaikan seluruh materi rasio!", "🏆");
    });
  }

  // ------------------------------------------------------------
  // LOGIKA SLIDE 12: KESAMAAN RASIO (GAMBAR 2)
  // Dilengkapi Audio Rekaman Asli Siswi (14 Detik)
  // ------------------------------------------------------------
  function startSlide12Sequence() {
    showToast("💡 Kesamaan Rasio: Apa itu Rasio Senilai?", "✨");
    if (btnS12Next) btnS12Next.classList.remove('ready');

    setTimeout(() => {
      playKesamaanAudio(() => {
        if (btnS12Next) btnS12Next.classList.add('ready');
      });
    }, 450);
  }

  // Tombol Selanjutnya ke Slide 13
  if (btnS12Next) {
    btnS12Next.addEventListener('click', () => {
      playNavSFX();
      switchSlide(slide12, slide13, false);
      setTimeout(() => {
        startSlide13Sequence();
      }, 450);
    });
  }

  // ------------------------------------------------------------
  // LOGIKA SLIDE 13: MENJAGA RASA! ES SIRUP DAN RASIO (GAMBAR 3)
  // Dilengkapi Audio Rekaman Asli Siswi (29 Detik)
  // ------------------------------------------------------------
  function startSlide13Sequence() {
    showToast("🍹 Menjaga Rasa! Es Sirup dan Rasio", "🍹");
    if (btnS13Next) btnS13Next.classList.remove('ready');

    setTimeout(() => {
      playEsSirupAudio(() => {
        if (btnS13Next) btnS13Next.classList.add('ready');
      });
    }, 450);
  }

  // Tombol Kembali ke Slide 12
  if (btnS13Back) {
    btnS13Back.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slide13, slide12, false);
      setTimeout(() => {
        startSlide12Sequence();
      }, 450);
    });
  }

  // Tombol Selanjutnya ke Slide 14
  if (btnS13Next) {
    btnS13Next.addEventListener('click', () => {
      playNavSFX();
      switchSlide(slide13, slide14, false);
      setTimeout(() => {
        startSlide14Sequence();
      }, 450);
    });
  }

  // ------------------------------------------------------------
  // LOGIKA SLIDE 14: RASA YANG PAS! RAHASIA ES SIRUP ENAK (GAMBAR 4)
  // Dilengkapi Audio Rekaman Asli Siswi (19 Detik)
  // ------------------------------------------------------------
  function startSlide14Sequence() {
    showToast("✨ Rasa yang Pas! Rahasia Es Sirup Enak", "🌟");
    if (btnS14Next) btnS14Next.classList.remove('ready');

    setTimeout(() => {
      playRahasiaSirupAudio(() => {
        if (btnS14Next) btnS14Next.classList.add('ready');
      });
    }, 450);
  }

  // Tombol Kembali ke Slide 13
  if (btnS14Back) {
    btnS14Back.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slide14, slide13, false);
      setTimeout(() => {
        startSlide13Sequence();
      }, 450);
    });
  }

  // Tombol Selanjutnya ke Slide 15 (Simulasi Laboratorium Rasa)
  if (btnS14Next) {
    btnS14Next.addEventListener('click', () => {
      playNavSFX();
      switchSlide(slide14, slide15, false);
      setTimeout(() => {
        startSlide15Sequence();
      }, 450);
    });
  }

  // ------------------------------------------------------------
  // LOGIKA SLIDE 15: SIMULASI INTERAKTIF PERBANDINGAN ES SIRUP & AIR
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

    // Rasio mentah: Air : Sirup (Kelipatan Air = 3, Kelipatan Sirup = 2)
    if (textRasioMentah) textRasioMentah.textContent = `${air} : ${sirup}`;

    // Sederhanakan rasio menggunakan FPB (GCD)
    const gcdVal = getGCD(air, sirup);
    const simpAir = air / gcdVal;
    const simpSirup = sirup / gcdVal;
    if (textRasioSederhana) textRasioSederhana.textContent = `${simpAir} : ${simpSirup}`;

    // Total campuran
    const total = air + sirup;
    if (textTotalCampuran) textTotalCampuran.textContent = `${total} bagian`;

    // Proporsi ketinggian cairan di dalam beaker
    const airPercent = Math.max(15, Math.min(85, Math.round((air / total) * 100)));
    const sirupPercent = 100 - airPercent;

    if (liquidAir) liquidAir.style.height = `${airPercent}%`;
    if (liquidSirup) liquidSirup.style.height = `${sirupPercent}%`;
    if (labelLiquidAir) labelLiquidAir.textContent = `Air (${air} gelas)`;
    if (labelLiquidSirup) labelLiquidSirup.textContent = `Sirup (${sirup} sdm)`;

    // Status Rasa Berdasarkan Rasio Senilai (Target Standar: Air 3 : Sirup 2)
    if (badgeTasteStatus && tasteText && tasteIcon) {
      badgeTasteStatus.classList.remove('taste-balanced', 'taste-sweet', 'taste-bland');

      // Cek apakah rasio senilai dengan 3 : 2
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

  // Event Listener Interaktif Slider Sirup & Air
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
    setTimeout(() => {
      speakSiswi(siswiSpeech15, null, btnS15Voice, s15VoiceIcon);
    }, 450);
  }

  // Slide 15: Tombol Kembali ke Slide 14
  if (btnS15Back) {
    btnS15Back.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slide15, slide14, false);
      setTimeout(() => {
        startSlide14Sequence();
      }, 450);
    });
  }

  // Slide 15: Tombol Selanjutnya ke Slide 16 (Contoh Soal Es Jeruk Ibu)
  if (btnS15Next) {
    btnS15Next.addEventListener('click', () => {
      playNavSFX();
      switchSlide(slide15, slide16, false);
      setTimeout(() => {
        startSlide16Sequence();
      }, 450);
    });
  }

  // ------------------------------------------------------------
  // LOGIKA SLIDE 16: CONTOH SOAL ES JERUK IBU (GAMBAR 1)
  // ------------------------------------------------------------
  function startSlide16Sequence() {
    showToast("🍊 Contoh Soal: Rasio Es Jeruk Ibu", "📖");
    setTimeout(() => {
      speakSiswi(siswiSpeech16, null, btnS16Voice, s16VoiceIcon);
    }, 450);
  }

  // Slide 16: Tombol Kembali ke Slide 15
  if (btnS16Back) {
    btnS16Back.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slide16, slide15, false);
      setTimeout(() => {
        startSlide15Sequence();
      }, 450);
    });
  }

  // Slide 16: Tombol Lanjut ke Latihan Soal Kuis (Slide 17)
  if (btnS16Next) {
    btnS16Next.addEventListener('click', () => {
      playNavSFX();
      switchSlide(slide16, slide17, false);
      setTimeout(() => {
        startSlide17Sequence();
      }, 450);
    });
  }

  // ------------------------------------------------------------
  // LOGIKA SLIDE 17: LATIHAN SOAL KUIS SIRUP KAKAK (GAMBAR 2)
  // Jawaban Benar = C (15 sendok makan)
  // Jawaban Salah = A, B, D -> Otomatis ke Slide 17-Wrong (Gambar 3)
  // ------------------------------------------------------------
  function resetQuiz2State() {
    quiz2OptionButtons.forEach(btn => {
      if (btn) {
        btn.classList.remove('selected', 'correct', 'wrong');
        btn.disabled = false;
      }
    });
  }

  function startSlide17Sequence() {
    resetQuiz2State();
    showToast("❓ Latihan Soal: Takaran Sirup untuk 3 Gelas", "🎯");
    setTimeout(() => {
      speakSiswi(siswiSpeech17, null, btnS17Voice, s17VoiceIcon);
    }, 450);
  }

  function handleQuiz2Selection(chosenBtn) {
    if (!chosenBtn || chosenBtn.disabled) return;

    // Kunci tombol agar tidak di-klik ganda
    quiz2OptionButtons.forEach(b => {
      if (b) b.disabled = true;
    });

    const isCorrect = chosenBtn.dataset.correct === 'true';
    chosenBtn.classList.add('selected');

    if (isCorrect) {
      // JAWABAN BENAR: C (15 sendok makan)
      chosenBtn.classList.add('correct');
      playSuccessSFX();
      showToast("🎉 HORE! Jawabanmu Benar (C)!", "⭐");

      setTimeout(() => {
        switchSlide(slide17, slide18, false);
        setTimeout(() => {
          startSlide18Sequence();
        }, 450);
      }, 700);

    } else {
      // JAWABAN SALAH: A, B, atau D
      chosenBtn.classList.add('wrong');
      playWrongSFX();
      showToast("❌ Jawabanmu Belum Tepat! Coba lagi ya!", "😢");

      setTimeout(() => {
        switchSlide(slide17, slide17Wrong, false);
        setTimeout(() => {
          startSlide17WrongSequence();
        }, 450);
      }, 700);
    }
  }

  quiz2OptionButtons.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        initAudioContext();
        handleQuiz2Selection(btn);
      });
    }
  });

  // Slide 17: Tombol Kembali ke Contoh Soal (Slide 16)
  if (btnS17Back) {
    btnS17Back.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slide17, slide16, false);
      setTimeout(() => {
        startSlide16Sequence();
      }, 450);
    });
  }

  // ------------------------------------------------------------
  // LOGIKA SLIDE 17-WRONG: LAYAR SALAH KUIS 2 (GAMBAR 3)
  // ------------------------------------------------------------
  function startSlide17WrongSequence() {
    showToast("💪 Jangan menyerah, yuk coba lagi!", "💪");
    setTimeout(() => {
      speakSiswi(siswiSpeech17Wrong, null, btnS17wVoice, s17wVoiceIcon);
    }, 450);
  }

  // Tombol Kembali ke Soal Kuis (Slide 17)
  if (btnS17wBack) {
    btnS17wBack.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slide17Wrong, slide17, false);
      setTimeout(() => {
        startSlide17Sequence();
      }, 450);
    });
  }

  // ------------------------------------------------------------
  // LOGIKA SLIDE 18: JAWABAN BENAR & PEMBAHASAN KUIS 2 (GAMBAR 4)
  // ------------------------------------------------------------
  function startSlide18Sequence() {
    playCelebrationChime();
    showToast("🏆 Jawaban Benar: C (15 Sendok Makan)!", "🌟");
    setTimeout(() => {
      speakSiswi(siswiSpeech18, null, btnS18Voice, s18VoiceIcon);
    }, 450);
  }

  // Tombol Kembali ke Menu Utama (Slide 3: Pilihan Troli Materi & Mulai Belanja)
  if (btnS18Menu) {
    btnS18Menu.addEventListener('click', () => {
      playNavSFX();
      switchSlide(slide18, slide3, true, "Kembali ke Menu Utama 1# Market...");
    });
  }

  // ------------------------------------------------------------
  // LOGIKA KUIS 1 MULAI BELANJA (SLIDE 19 S/D 21)
  // Apel Merah (12) thd Apel Hijau (18)
  // Kunci Jawaban BENAR: A (12 : 18)
  // Jawaban Salah: B, C, D -> Otomatis ke Slide 20 (Salah)
  // ------------------------------------------------------------
  function resetBK1State() {
    bk1OptionButtons.forEach(btn => {
      if (btn) {
        btn.classList.remove('selected', 'correct', 'wrong');
        btn.disabled = false;
      }
    });
  }

  function startBelanjaKuis1Sequence() {
    resetBK1State();
    showToast("🛒 Kuis 1 Belanja: Rasio Apel Merah thd Apel Hijau", "🍎");
    setTimeout(() => {
      speakSiswi(siswiSpeechBK1, null, btnBk1Voice, bk1VoiceIcon);
    }, 450);
  }

  function handleBK1Selection(chosenBtn) {
    if (!chosenBtn || chosenBtn.disabled) return;

    // Kunci tombol agar tidak di-klik berulang
    bk1OptionButtons.forEach(b => {
      if (b) b.disabled = true;
    });

    const isCorrect = chosenBtn.dataset.correct === 'true';
    chosenBtn.classList.add('selected');

    if (isCorrect) {
      // JAWABAN BENAR: A (12 : 18)
      chosenBtn.classList.add('correct');
      playSuccessSFX();
      showToast("🎉 HORE! Jawabanmu Benar (A: 12 : 18)!", "⭐");

      setTimeout(() => {
        switchSlide(slideBelanjaKuis1, slideBelanjaQ1Right, false);
        setTimeout(() => {
          startBelanjaQ1RightSequence();
        }, 450);
      }, 700);

    } else {
      // JAWABAN SALAH: B, C, atau D
      chosenBtn.classList.add('wrong');
      playWrongSFX();
      showToast("❌ Jawabanmu Belum Tepat! Coba lagi ya!", "😢");

      setTimeout(() => {
        switchSlide(slideBelanjaKuis1, slideBelanjaQ1Wrong, false);
        setTimeout(() => {
          startBelanjaQ1WrongSequence();
        }, 450);
      }, 700);
    }
  }

  bk1OptionButtons.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        initAudioContext();
        handleBK1Selection(btn);
      });
    }
  });

  // Tombol Kembali ke Menu Aktivitas (Slide 3)
  if (btnBk1Back) {
    btnBk1Back.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slideBelanjaKuis1, slide3, false);
      showToast("📋 Silakan pilih aktivitas belanjamu!", "📋");
    });
  }

  // Slide 20: Tampilan Salah Kuis 1 Belanja
  function startBelanjaQ1WrongSequence() {
    showToast("💪 Jangan menyerah, coba lagi yuk!", "🍉");
    setTimeout(() => {
      speakSiswi(siswiSpeechBKWrong, null, btnBk1wVoice, bk1wVoiceIcon);
    }, 450);
  }

  // Tombol Kembali ke Soal Kuis 1 dari Layar Salah
  if (btnBk1wBack) {
    btnBk1wBack.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slideBelanjaQ1Wrong, slideBelanjaKuis1, false);
      setTimeout(() => {
        startBelanjaKuis1Sequence();
      }, 450);
    });
  }

  // Slide 21: Tampilan Benar Kuis 1 Belanja
  function startBelanjaQ1RightSequence() {
    playCelebrationChime();
    showToast("🌟 Benar! Rasio Apel Merah thd Hijau = 12 : 18", "🎉");
    setTimeout(() => {
      speakSiswi(siswiSpeechBK1Right, null, btnBk1rVoice, bk1rVoiceIcon);
    }, 450);
  }

  // Tombol Selanjutnya: Lanjut ke Kuis 2 Belanja (Slide 22)
  if (btnBk1rNext) {
    btnBk1rNext.addEventListener('click', () => {
      playNavSFX();
      switchSlide(slideBelanjaQ1Right, slideBelanjaKuis2, false);
      setTimeout(() => {
        startBelanjaKuis2Sequence();
      }, 450);
    });
  }

  // ------------------------------------------------------------
  // LOGIKA KUIS 2 MULAI BELANJA (SLIDE 22 S/D 24)
  // Tepung Terigu (9) thd Gula Pasir (6)
  // Kunci Jawaban BENAR: D (3 : 2)
  // Jawaban Salah: A, B, C -> Otomatis ke Slide 23 (Salah)
  // ------------------------------------------------------------
  function resetBK2State() {
    bk2OptionButtons.forEach(btn => {
      if (btn) {
        btn.classList.remove('selected', 'correct', 'wrong');
        btn.disabled = false;
      }
    });
  }

  function startBelanjaKuis2Sequence() {
    resetBK2State();
    showToast("🧁 Kuis 2 Belanja: Rasio Sederhana Tepung & Gula", "🎯");
    setTimeout(() => {
      speakSiswi(siswiSpeechBK2, null, btnBk2Voice, bk2VoiceIcon);
    }, 450);
  }

  function handleBK2Selection(chosenBtn) {
    if (!chosenBtn || chosenBtn.disabled) return;

    // Kunci tombol agar tidak di-klik berulang
    bk2OptionButtons.forEach(b => {
      if (b) b.disabled = true;
    });

    const isCorrect = chosenBtn.dataset.correct === 'true';
    chosenBtn.classList.add('selected');

    if (isCorrect) {
      // JAWABAN BENAR: D (3 : 2)
      chosenBtn.classList.add('correct');
      playSuccessSFX();
      showToast("🎉 HORE! Jawabanmu Benar (D: 3 : 2)!", "⭐");

      setTimeout(() => {
        switchSlide(slideBelanjaKuis2, slideBelanjaQ2Right, false);
        setTimeout(() => {
          startBelanjaQ2RightSequence();
        }, 450);
      }, 700);

    } else {
      // JAWABAN SALAH: A, B, atau C
      chosenBtn.classList.add('wrong');
      playWrongSFX();
      showToast("❌ Jawabanmu Belum Tepat! Coba lagi ya!", "😢");

      setTimeout(() => {
        switchSlide(slideBelanjaKuis2, slideBelanjaQ2Wrong, false);
        setTimeout(() => {
          startBelanjaQ2WrongSequence();
        }, 450);
      }, 700);
    }
  }

  bk2OptionButtons.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        initAudioContext();
        handleBK2Selection(btn);
      });
    }
  });

  // Tombol Kembali ke Kuis 1 dari Kuis 2
  if (btnBk2Back) {
    btnBk2Back.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slideBelanjaKuis2, slideBelanjaQ1Right, false);
      setTimeout(() => {
        startBelanjaQ1RightSequence();
      }, 450);
    });
  }

  // Slide 23: Tampilan Salah Kuis 2 Belanja
  function startBelanjaQ2WrongSequence() {
    showToast("💪 Jangan menyerah, coba lagi yuk!", "🍉");
    setTimeout(() => {
      speakSiswi(siswiSpeechBKWrong, null, btnBk2wVoice, bk2wVoiceIcon);
    }, 450);
  }

  // Tombol Kembali ke Soal Kuis 2 dari Layar Salah
  if (btnBk2wBack) {
    btnBk2wBack.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slideBelanjaQ2Wrong, slideBelanjaKuis2, false);
      setTimeout(() => {
        startBelanjaKuis2Sequence();
      }, 450);
    });
  }

  // Slide 24: Tampilan Benar Kuis 2 Belanja
  function startBelanjaQ2RightSequence() {
    playCelebrationChime();
    showToast("🌟 Benar! Rasio Sederhana Tepung & Gula = 3 : 2", "🎉");
    setTimeout(() => {
      speakSiswi(siswiSpeechBK2Right, null, btnBk2rVoice, bk2rVoiceIcon);
    }, 450);
  }

  // Tombol Selanjutnya: Lanjut ke Kuis 3 Belanja (Slide 25)
  if (btnBk2rNext) {
    btnBk2rNext.addEventListener('click', () => {
      playNavSFX();
      switchSlide(slideBelanjaQ2Right, slideBelanjaKuis3, false);
      setTimeout(() => {
        startBelanjaKuis3Sequence();
      }, 450);
    });
  }

  // ------------------------------------------------------------
  // LOGIKA KUIS 3 MULAI BELANJA (SLIDE 25 S/D 27)
  // Laki-laki (16) thd Total Siswa (40)
  // Kunci Jawaban BENAR: C (2 : 5)
  // Jawaban Salah: A, B, D -> Otomatis ke Slide 26 (Salah)
  // ------------------------------------------------------------
  function resetBK3State() {
    bk3OptionButtons.forEach(btn => {
      if (btn) {
        btn.classList.remove('selected', 'correct', 'wrong');
        btn.disabled = false;
      }
    });
  }

  function startBelanjaKuis3Sequence() {
    resetBK3State();
    showToast("🏫 Kuis 3 Belanja: Rasio Siswa Laki-laki thd Total", "🎯");
    setTimeout(() => {
      speakSiswi(siswiSpeechBK3, null, btnBk3Voice, bk3VoiceIcon);
    }, 450);
  }

  function handleBK3Selection(chosenBtn) {
    if (!chosenBtn || chosenBtn.disabled) return;

    // Kunci tombol agar tidak di-klik berulang
    bk3OptionButtons.forEach(b => {
      if (b) b.disabled = true;
    });

    const isCorrect = chosenBtn.dataset.correct === 'true';
    chosenBtn.classList.add('selected');

    if (isCorrect) {
      // JAWABAN BENAR: C (2 : 5)
      chosenBtn.classList.add('correct');
      playSuccessSFX();
      showToast("🎉 HORE! Jawabanmu Benar (C: 2 : 5)!", "⭐");

      setTimeout(() => {
        switchSlide(slideBelanjaKuis3, slideBelanjaQ3Right, false);
        setTimeout(() => {
          startBelanjaQ3RightSequence();
        }, 450);
      }, 700);

    } else {
      // JAWABAN SALAH: A, B, atau D
      chosenBtn.classList.add('wrong');
      playWrongSFX();
      showToast("❌ Jawabanmu Belum Tepat! Coba lagi ya!", "😢");

      setTimeout(() => {
        switchSlide(slideBelanjaKuis3, slideBelanjaQ3Wrong, false);
        setTimeout(() => {
          startBelanjaQ3WrongSequence();
        }, 450);
      }, 700);
    }
  }

  bk3OptionButtons.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        initAudioContext();
        handleBK3Selection(btn);
      });
    }
  });

  // Tombol Kembali ke Kuis 2 dari Kuis 3
  if (btnBk3Back) {
    btnBk3Back.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slideBelanjaKuis3, slideBelanjaQ2Right, false);
      setTimeout(() => {
        startBelanjaQ2RightSequence();
      }, 450);
    });
  }

  // Slide 26: Tampilan Salah Kuis 3 Belanja
  function startBelanjaQ3WrongSequence() {
    showToast("💪 Jangan menyerah, coba lagi yuk!", "🍉");
    setTimeout(() => {
      speakSiswi(siswiSpeechBKWrong, null, btnBk3wVoice, bk3wVoiceIcon);
    }, 450);
  }

  // Tombol Kembali ke Soal Kuis 3 dari Layar Salah
  if (btnBk3wBack) {
    btnBk3wBack.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slideBelanjaQ3Wrong, slideBelanjaKuis3, false);
      setTimeout(() => {
        startBelanjaKuis3Sequence();
      }, 450);
    });
  }

  // Slide 27: Tampilan Benar Kuis 3 Belanja
  function startBelanjaQ3RightSequence() {
    playCelebrationChime();
    showToast("🌟 Benar! 16 : 40 disederhanakan menjadi 2 : 5", "🎉");
    setTimeout(() => {
      speakSiswi(siswiSpeechBK3Right, null, btnBk3rVoice, bk3rVoiceIcon);
    }, 450);
  }

  // Tombol Selanjutnya: Lanjut ke Kuis 4 Belanja (Slide 28)
  if (btnBk3rNext) {
    btnBk3rNext.addEventListener('click', () => {
      playNavSFX();
      switchSlide(slideBelanjaQ3Right, slideBelanjaKuis4, false);
      setTimeout(() => {
        startBelanjaKuis4Sequence();
      }, 450);
    });
  }

  // ------------------------------------------------------------
  // LOGIKA KUIS 4 MULAI BELANJA (SLIDE 28 S/D 30)
  // Bensin 4 Liter thd 60 km -> 120 km
  // Kunci Jawaban BENAR: B (8)
  // Jawaban Salah: A, C, D -> Otomatis ke Slide 29 (Salah)
  // ------------------------------------------------------------
  function resetBK4State() {
    bk4OptionButtons.forEach(btn => {
      if (btn) {
        btn.classList.remove('selected', 'correct', 'wrong');
        btn.disabled = false;
      }
    });
  }

  function startBelanjaKuis4Sequence() {
    resetBK4State();
    showToast("🚗 Kuis 4 Belanja: Bensin untuk Jarak 120 km", "⛽");
    setTimeout(() => {
      speakSiswi(siswiSpeechBK4, null, btnBk4Voice, bk4VoiceIcon);
    }, 450);
  }

  function handleBK4Selection(chosenBtn) {
    if (!chosenBtn || chosenBtn.disabled) return;

    // Kunci tombol agar tidak di-klik berulang
    bk4OptionButtons.forEach(b => {
      if (b) b.disabled = true;
    });

    const isCorrect = chosenBtn.dataset.correct === 'true';
    chosenBtn.classList.add('selected');

    if (isCorrect) {
      // JAWABAN BENAR: B (8)
      chosenBtn.classList.add('correct');
      playSuccessSFX();
      showToast("🎉 HORE! Jawabanmu Benar (B: 8 Liter)!", "⭐");

      setTimeout(() => {
        switchSlide(slideBelanjaKuis4, slideBelanjaQ4Right, false);
        setTimeout(() => {
          startBelanjaQ4RightSequence();
        }, 450);
      }, 700);

    } else {
      // JAWABAN SALAH: A, C, atau D
      chosenBtn.classList.add('wrong');
      playWrongSFX();
      showToast("❌ Jawabanmu Belum Tepat! Coba lagi ya!", "😢");

      setTimeout(() => {
        switchSlide(slideBelanjaKuis4, slideBelanjaQ4Wrong, false);
        setTimeout(() => {
          startBelanjaQ4WrongSequence();
        }, 450);
      }, 700);
    }
  }

  bk4OptionButtons.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        initAudioContext();
        handleBK4Selection(btn);
      });
    }
  });

  // Tombol Kembali ke Kuis 3 dari Kuis 4
  if (btnBk4Back) {
    btnBk4Back.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slideBelanjaKuis4, slideBelanjaQ3Right, false);
      setTimeout(() => {
        startBelanjaQ3RightSequence();
      }, 450);
    });
  }

  // Slide 29: Tampilan Salah Kuis 4 Belanja
  function startBelanjaQ4WrongSequence() {
    showToast("💪 Jangan menyerah, coba lagi yuk!", "🍉");
    setTimeout(() => {
      speakSiswi(siswiSpeechBKWrong, null, btnBk4wVoice, bk4wVoiceIcon);
    }, 450);
  }

  // Tombol Kembali ke Soal Kuis 4 dari Layar Salah
  if (btnBk4wBack) {
    btnBk4wBack.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slideBelanjaQ4Wrong, slideBelanjaKuis4, false);
      setTimeout(() => {
        startBelanjaKuis4Sequence();
      }, 450);
    });
  }

  // Slide 30: Tampilan Benar Kuis 4 Belanja
  function startBelanjaQ4RightSequence() {
    playCelebrationChime();
    showToast("🌟 Benar! 120 km butuh 2 x 4 = 8 Liter Bensin", "🎉");
    setTimeout(() => {
      speakSiswi(siswiSpeechBK4Right, null, btnBk4rVoice, bk4rVoiceIcon);
    }, 450);
  }

  // Tombol Selanjutnya: Lanjut ke Kuis 5 Belanja (Slide 31)
  if (btnBk4rNext) {
    btnBk4rNext.addEventListener('click', () => {
      playNavSFX();
      switchSlide(slideBelanjaQ4Right, slideBelanjaKuis5, false);
      setTimeout(() => {
        startBelanjaKuis5Sequence();
      }, 450);
    });
  }

  // ------------------------------------------------------------
  // LOGIKA KUIS 5 MULAI BELANJA (SLIDE 31 S/D 33)
  // 8 lembar Rp5.000 thd 4 lembar Rp10.000
  // Kunci Jawaban BENAR: D (2 : 1)
  // Jawaban Salah: A, B, C -> Otomatis ke Slide 32 (Salah)
  // ------------------------------------------------------------
  function resetBK5State() {
    bk5OptionButtons.forEach(btn => {
      if (btn) {
        btn.classList.remove('selected', 'correct', 'wrong');
        btn.disabled = false;
      }
    });
  }

  function startBelanjaKuis5Sequence() {
    resetBK5State();
    showToast("💰 Kuis 5 Belanja: Rasio Lembar Uang Andi", "💵");
    setTimeout(() => {
      speakSiswi(siswiSpeechBK5, null, btnBk5Voice, bk5VoiceIcon);
    }, 450);
  }

  function handleBK5Selection(chosenBtn) {
    if (!chosenBtn || chosenBtn.disabled) return;

    // Kunci tombol agar tidak di-klik berulang
    bk5OptionButtons.forEach(b => {
      if (b) b.disabled = true;
    });

    const isCorrect = chosenBtn.dataset.correct === 'true';
    chosenBtn.classList.add('selected');

    if (isCorrect) {
      // JAWABAN BENAR: D (2 : 1)
      chosenBtn.classList.add('correct');
      playSuccessSFX();
      showToast("🎉 HORE! Jawabanmu Benar (D: 2 : 1)!", "⭐");

      setTimeout(() => {
        switchSlide(slideBelanjaKuis5, slideBelanjaQ5Right, false);
        setTimeout(() => {
          startBelanjaQ5RightSequence();
        }, 450);
      }, 700);

    } else {
      // JAWABAN SALAH: A, B, atau C
      chosenBtn.classList.add('wrong');
      playWrongSFX();
      showToast("❌ Jawabanmu Belum Tepat! Coba lagi ya!", "😢");

      setTimeout(() => {
        switchSlide(slideBelanjaKuis5, slideBelanjaQ5Wrong, false);
        setTimeout(() => {
          startBelanjaQ5WrongSequence();
        }, 450);
      }, 700);
    }
  }

  bk5OptionButtons.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        initAudioContext();
        handleBK5Selection(btn);
      });
    }
  });

  // Tombol Kembali ke Kuis 4 dari Kuis 5
  if (btnBk5Back) {
    btnBk5Back.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slideBelanjaKuis5, slideBelanjaQ4Right, false);
      setTimeout(() => {
        startBelanjaQ4RightSequence();
      }, 450);
    });
  }

  // Slide 32: Tampilan Salah Kuis 5 Belanja
  function startBelanjaQ5WrongSequence() {
    showToast("💪 Jangan menyerah, coba lagi yuk!", "🍉");
    setTimeout(() => {
      speakSiswi(siswiSpeechBKWrong, null, btnBk5wVoice, bk5wVoiceIcon);
    }, 450);
  }

  // Tombol Kembali ke Soal Kuis 5 dari Layar Salah
  if (btnBk5wBack) {
    btnBk5wBack.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slideBelanjaQ5Wrong, slideBelanjaKuis5, false);
      setTimeout(() => {
        startBelanjaKuis5Sequence();
      }, 450);
    });
  }

  // Slide 33: Tampilan Benar Kuis 5 Belanja (SELESAI SELURUH MISI)
  function startBelanjaQ5RightSequence() {
    playCelebrationChime();
    showToast("👑 LUAR BIASA! Seluruh Kuis Belanja (1-5) Selesai!", "🏆");
    setTimeout(() => {
      speakSiswi(siswiSpeechBK5Right, null, btnBk5rVoice, bk5rVoiceIcon);
    }, 450);
  }

  // Tombol Selesai Seluruh Misi Belanja & Kembali ke Menu (Slide 3)
  if (btnBk5rNext) {
    btnBk5rNext.addEventListener('click', () => {
      playSuccessSFX();
      showToast("🎉 Selamat! Kamu telah menaklukkan seluruh misi belanja!", "🏆");
      setTimeout(() => {
        switchSlide(slideBelanjaQ5Right, slide3, true, "Kembali ke Menu Aktivitas...");
      }, 600);
    });
  }

  // ------------------------------------------------------------
  // ALUR NAVIGASI LENGKAP MAJU & MUNDUR (SLIDE 1 S/D 11)
  // ------------------------------------------------------------

  // 1. SLIDE 1 -> SLIDE 2 (START GAME)
  btnStart.addEventListener('click', () => {
    if (isTransitioning) return;

    playStartGameSFX();
    slide1.classList.add('zooming');

    setTimeout(() => {
      playDoorBellSFX();
      switchSlide(slide1, slide2, true, "Membuka pintu First Market...");

      // Putar Audio Rekaman Kasir (8 Detik) saat tiba di kasir
      setTimeout(() => {
        playKasirAudio();
      }, 1400);
    }, 350);
  });

  // 2. SLIDE 2 -> SLIDE 3 (Klik "Buka Pilihan Menu ➔")
  btnS2Menu.addEventListener('click', () => {
    playNavSFX();
    switchSlide(slide2, slide3, false);
    showToast("📋 Silakan pilih aktivitas belanjamu!", "📋");
  });

  // 3. SLIDE 2 -> SLIDE 1 (Klik "↩ Kembali")
  btnS2Back.addEventListener('click', () => {
    playBackSFX();
    switchSlide(slide2, slide1, true, "Kembali ke depan toko...");
  });

  // 4. SLIDE 3 -> SLIDE 4 (Klik "📖 Buka Troli Materi ➔")
  btnS3Troli.addEventListener('click', () => {
    playNavSFX();
    switchSlide(slide3, slide4, false);
    showToast("🛒 Membuka troli materi...", "🛒");
  });

  // 5. SLIDE 3: KLIK "🛍️ Mulai Belanja ➔" -> MENUJU KUIS 1 BELANJA
  btnS3Belanja.addEventListener('click', () => {
    playNavSFX();
    switchSlide(slide3, slideBelanjaKuis1, false);
    setTimeout(() => {
      startBelanjaKuis1Sequence();
    }, 450);
  });

  // 6. SLIDE 3 -> SLIDE 2 (Klik "↩ Kembali")
  btnS3Back.addEventListener('click', () => {
    playBackSFX();
    switchSlide(slide3, slide2, false);
    setTimeout(() => {
      playKasirAudio();
    }, 450);
  });

  // 7. SLIDE 4: KLIK "🍉 Meracik Troli" -> PINDAH KE SLIDE 5
  btnS4Meracik.addEventListener('click', () => {
    playSelectSFX();
    btnS4Meracik.classList.add('selected');
    btnS4Rasio.classList.remove('selected');

    switchSlide(slide4, slide5, false);

    setTimeout(() => {
      startSlide5Sequence();
    }, 450);
  });

  // 8. SLIDE 4: KLIK "⚖️ Kesamaan Rasio Belanja"
  btnS4Rasio.addEventListener('click', () => {
    playSelectSFX();
    btnS4Rasio.classList.add('selected');
    btnS4Meracik.classList.remove('selected');
    showToast("⚖️ Modul Kesamaan Rasio Belanja dipilih! (Siap dieksplor)", "⚖️");
  });

  // 9. SLIDE 4 -> SLIDE 3 (Klik "↩ Kembali")
  btnS4Back.addEventListener('click', () => {
    playBackSFX();
    switchSlide(slide4, slide3, false);
  });

  // 10. SLIDE 4: KLIK "Selanjutnya ➔"
  btnS4Next.addEventListener('click', () => {
    playNavSFX();
    btnS4Meracik.classList.add('selected');
    switchSlide(slide4, slide5, false);
    setTimeout(() => {
      startSlide5Sequence();
    }, 450);
  });

  // 11. SLIDE 5: KLIK "↩ Kembali"
  btnS5Back.addEventListener('click', () => {
    if (slide5Stage === 2) {
      backToSlide5Stage1();
    } else {
      playBackSFX();
      switchSlide(slide5, slide4, false);
    }
  });

  // 12. SLIDE 5: KLIK "Selanjutnya ➔" -> PINDAH KE SLIDE 6
  btnS5Next.addEventListener('click', () => {
    if (slide5Stage === 1) {
      if (slide5Timer) clearTimeout(slide5Timer);
      advanceToSlide5Stage2();
    } else {
      playNavSFX();
      switchSlide(slide5, slide6, false);
      setTimeout(() => {
        startSlide6Sequence();
      }, 450);
    }
  });

  // 13. SLIDE 6: KLIK "↩ Kembali" -> PINDAH KE SLIDE 5
  btnS6Back.addEventListener('click', () => {
    playBackSFX();
    clearSlide6Timers();
    switchSlide(slide6, slide5, false);
    setTimeout(() => {
      startSlide5Sequence();
    }, 450);
  });

  // 14. SLIDE 6: KLIK "Selanjutnya ➔" -> PINDAH KE SLIDE 7 (HASIL 2 SEMANGKA & 4 SUSU)
  btnS6Next.addEventListener('click', () => {
    playNavSFX();
    clearSlide6Timers();
    switchSlide(slide6, slide7, false);
    setTimeout(() => {
      startSlide7Sequence();
    }, 450);
  });

  // 15. SLIDE 7: KLIK "↩ Kembali" -> PINDAH KE SLIDE 6
  btnS7Back.addEventListener('click', () => {
    playBackSFX();
    switchSlide(slide7, slide6, false);
    setTimeout(() => {
      startSlide6Sequence();
    }, 450);
  });

  // 16. SLIDE 7: KLIK "Selanjutnya ➔" -> PINDAH KE SLIDE 8 (KUIS - GAMBAR 1)
  btnS7Next.addEventListener('click', () => {
    playNavSFX();
    switchSlide(slide7, slide8, false);
    setTimeout(() => {
      startSlide8Sequence();
    }, 450);
  });

  // 17. SLIDE 8: KLIK "↩ Kembali" -> PINDAH KE SLIDE 7
  if (btnS8Back) {
    btnS8Back.addEventListener('click', () => {
      playBackSFX();
      switchSlide(slide8, slide7, false);
      setTimeout(() => {
        startSlide7Sequence();
      }, 450);
    });
  }

  // 18. SLIDE 8: KLIK "Pembahasan" -> PINDAH KE SLIDE 9 (PEMBAHASAN BENAR)
  if (btnS8Next) {
    btnS8Next.addEventListener('click', () => {
      playNavSFX();
      switchSlide(slide8, slide9, false);
      setTimeout(() => {
        startSlide9Sequence();
      }, 450);
    });
  }
});
