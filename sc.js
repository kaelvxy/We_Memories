function sc() {
  document.body.innerHTML = ``;
  document.body.innerHTML = `
  <button id="bukalist" class="bukalist" onclick="bukalist()">≡</button>
  <button id="tutuplist" class="tutuplist" onclick="tutuplist()">X</button>
      <div class="container">
      <div class="menu" id="menu">
        <button id="opsi" class="opsi" onclick="lanjut()">Halaman Utama</button>
        <button id="opsi" class="opsi" onclick="daftar()">Daftar Siswa</button>
        <button id="opsi" class="opsi" onclick="tk()">Tentang Kami</button>
        <button id="opsi" class="opsi" onclick="pd()">Profile Developer</button>
      </div>
      </div>
  <div class="containerds" id="container">
          <div id="card" class="ds">
          <img src=".png" class="gc">
      </div>
          <div id="card" class="ds">
          <img src="" class="gc">
      </div>
          <div id="card" class="ds">
          <img src="" class="gc">
      </div>
          <div id="card" class="ds">
          <img src="" class="gc">
      </div>
      <h3 class="ds">Powered By 𝕵𝖎𝖍𝖆𝖉</h3>
      <p></p>
  </div>
  `;
}