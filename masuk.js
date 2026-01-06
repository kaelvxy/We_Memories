function next() {
  const pw = ["792yd9hsfps"];
  const input = document.getElementById("self").value;
  const invalid = document.getElementById("pw-invalid");
  
  if(input == pw) {
    document.body.innerHTML = ``;
    document.body.innerHTML = `
     <div class="container">
     <div class="cart" id="card">
     <h2>Akses Dev</h2>
     </div>
          <div id="cart" class="cart">
          <a href="6282191769774_status_8e9a5fd5376c4de8a13a0aea0ae1426c.mp4" target="_blank">
          <video controls class="gc">
          <source src="6282191769774_status_8e9a5fd5376c4de8a13a0aea0ae1426c.mp4" class="gc">
          </video>
          </a>
      </div>
          <div id="cart" class="cart">
          <a href="6282191769774_status_f25e6c9f750342f098f7941f98f120a0.mp4" target="_blank">
          <video controls class="gc">
          <source src="6282191769774_status_f25e6c9f750342f098f7941f98f120a0.mp4" class="gc">
          </video>
          </a>
      </div>
            <h3 class="cart">Powered By Kael</h3>
      <br>
      <br>
      <br>
      <br>
      <p></p>
      </div>
    `;
    alert("Password Valid. Jangan beri tahu password ke siapa pun")
  } else {
    setTimeout(invalid.innerText = "Password Invalid"),1000;
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