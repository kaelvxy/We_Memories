function next() {
  const novita = 040012;
  const input = document.getElementById("self").value;
  const invalid = document.getElementById("pw-invalid");
  
  if(input == novita) {
    document.body.innerHTML = ``;
    document.body.innerHTML = `
        <button id="bukalist" class="bukalist" onclick="bukalist()">≡</button>
  <button id="tutuplist" class="tutuplist" onclick="tutuplist()">X</button>
      <div class="container">
      <div class="menu" id="menu">
        <button id="opsi" class="opsi" onclick="lanjut()">Foto Memories</button>
        <button id="opsi" class="opsi" onclick="daftar()">Video Memories</button>
        <button id="opsi" class="opsi" onclick="pd()">Profile Developer</button>
      </div>
      </div>
     <div class="container">
     <div class="cart" id="card">
     <h2>Self Memories</h2>
     </div>
          <div id="cart" class="cart">
          <video controls class="gc">
          <source src="6282191769774_status_8e9a5fd5376c4de8a13a0aea0ae1426c.mp4" class="gc">
          </video>
      </div>
          <div id="cart" class="cart">
          <video controls class="gc">
          <source src="6282191769774_status_f25e6c9f750342f098f7941f98f120a0.mp4" class="gc">
          </video>
      </div>
            <h3 class="cart">Powered By 𝕵𝖎𝖍𝖆𝖉</h3>
      <br>
      <br>
      <br>
      <br>
      <p></p>
      </div>
    `;
  } else {
    invalid.innerText = "";
    invalid.innerText = "Password Invalid";
  };
}
function bukalist() {
  document.getElementById('bukalist').style.display = "none";
  document.getElementById('tutuplist').style.display = "grid";
  document.getElementById('menu').style.display = "grid";
}

function tutuplist() {
  document.getElementById('tutuplist').style.display = "none";
  document.getElementById('bukalist').style.display = "grid";
  document.getElementById('menu').style.display = "none";
}
function masuk() {
  window.location.href = "https://kaelvxy.github.io/We_Memories/Self.html";
}