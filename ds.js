function daftar() {
  document.body.innerHTML = ``;
  document.body.innerHTML = `
    <button id="bukalist" class="bukalist" onclick="bukalist()">≡</button>
  <button id="tutuplist" class="tutuplist" onclick="tutuplist()">X</button>
      <div class="container">
      <div class="menu" id="menu">
        <button id="opsi" class="opsi" onclick="lanjut()">Foto Memories</button>
        <button id="opsi" class="opsi" onclick="masuk()">Video Memories</button>
        <button id="opsi" class="opsi" onclick="pd()">Profile Developer</button>
      </div>
      </div>
     <div class="container">
     <div class="cart" id="card">
     <h2>Video Memories</h2>
     </div>
          <div id="cart" class="cart">
          <video controls class="gc">
          <source src="22.mp4" class="gc">
          </video>
      </div>
          <div id="cart" class="cart">
          <video controls class="gc">
          <source src="23.mp4" class="gc">
          </video>
      </div>
          <div id="cart" class="cart">
          <video controls class="gc">
          <source src="25.mp4" class="gc">
          <video>
      </div>
      <h3 class="cart">Powered By 𝕵𝖎𝖍𝖆𝖉</h3>
      <br>
      <br>
      <br>
      <br>
      <p></p>
      </div>
  `;
}