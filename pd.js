function pd() {
  document.body.innerHTML = ``;
  document.body.innerHTML = `
 <div class="containerdev" id="container">
          <div id="card" class="profileku">
 <h2 class"judul">Profile Developer</h2>
          <img src="JPEG_20251122_180857_2110_.png" class="icon">
          <p class="ppd">
         duaarrr, kenalin aku jihad (Creator dari web ini😹)
         
         awokawokawokawok😹
        </p>
        <h4 class="txtmedsos">Medsos :</h4>
        <button class="medsos" onclick="tiktok()">Tiktok</button>
        <button class="medsos" onclick="ig()">IG</button>
        <button class="medsos" onclick="chat()">Kontak</button>
 </div>
 <button id="bukalist" class="bukadev" onclick="bukalist()">≡</button>
  <button id="tutuplist" class="tutupdev" onclick="tutuplist()">X</button>
      <div class="container">
      <div class="menu1" id="menu">
        <button id="opsi" class="opsi1" onclick="lanjut()">Foto Memories</button>
        <button id="opsi" class="opsi1" onclick="daftar()">Video Memories</button>
      </div>
      </div>
      </div>
  `;
  scrolling = false;
}
function chat() {
  window.location.href = "https://wa.me/6283866317501";
}
function tiktok() {
  window.location.href = "https://vm.tiktok.com/ZSHKo7QTv7eco-rTi2k/";
}
function ig() {
  window.location.href = "https://www.instagram.com/nyxtrix1?igsh=MWxtaXN6enZpbWU2OQ==";
}