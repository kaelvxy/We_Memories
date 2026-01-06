function lanjut() {
  document.body.innerHTML = ``;
  document.body.innerHTML = `
       <audio controls style="display:none;" id="audio" autoplay loop>
    <audio id="myaudio" src="sad.mp3" autoplay loop></audio>
    </audio>
  <button id="play" class="play" onclick="play()">Play</button>
  <button id="stop" class="stop" onclick="stop()">Stop</button>
  <button id="bukalist" class="bukalist" onclick="bukalist()">≡</button>
  <button id="tutuplist" class="tutuplist" onclick="tutuplist()">X</button>
      <div class="container">
      <div class="menu" id="menu">
        <button id="opsi" class="opsi" onclick="daftar()">Video Memories</button>
        <button id="opsi" class="opsi" onclick="pd()">Profile Developer</button>
        <button id="opsi" class="opsi" onclick="masuk()">Akses Dev</button>
      </div>
      </div>
  <div class="container" id="container">
          <div id="card" class="cart">
          <h2>Foto Memories</h2>
      </div>
  <div class="container" id="container">
          <div id="card" class="cart">
          <a href="1.jpg" target="_blank">
          <img src="1.jpg" class="gc">
          </a>
      </div>
          <div id="card" class="cart">
          <a href="2.jpg" target="_blank">
          <img src="2.jpg" class="gc">
          </a>
      </div>
          <div id="card" class="cart">
          <a href="3.jpg" target="_blank">
          <img src="3.jpg" class="gc">
          </a>
      </div>
          <div id="card" class="cart">
          <a href="5.jpg" target="_blank">
          <img src="5.jpg" class="gc">
          </a>
      </div>
          <div id="card" class="cart">
          <a href="6.jpg" target="_blank">
          <img src="6.jpg" class="gc">
          </a>
      </div>
          <div id="card" class="cart">
          <a href="7.jpg" target="_blank">
          <img src="7.jpg" class="gc">
          </a>
      </div>
          <div id="card" class="cart">
          <a href="8.jpg" target="_blank">
          <img src="8.jpg" class="gc">
          </a>
      </div>
          <div id="card" class="cart">
          <a href="9.jpg" target="_blank">
          <img src="9.jpg" class="gc">
          </a>
      </div>
          <div id="card" class="cart">
          <a href="10.jpg" target="_blank">
          <img src="10.jpg" class="gc">
          </a>
      </div>
          <div id="card" class="cart">
          <a href="11.jpg" target="_blank">
          <img src="11.jpg" class="gc">
          </a>
      </div>
          <div id="card" class="cart">
          <a href="12.jpg" target="_blank">
          <img src="12.jpg" class="gc">
          </a>
      </div>
          <div id="card" class="cart">
          <a href="13.jpg" target="_blank">
          <img src="13.jpg" class="gc">
          </a>
      </div>
          <div id="card" class="cart">
          <a href="14.jpg" target="_blank">
          <img src="14.jpg" class="gc">
          </a>
      </div>
          <div id="card" class="cart">
          <a href="15.jpg" target="_blank">
          <img src="15.jpg" class="gc">
          </a>
      </div>
          <div id="card" class="cart">
          <a href="16.jpg" target="_blank">
          <img src="16.jpg" class="gc">
          </a>
      </div>
          <div id="card" class="cart">
          <a href="17.jpg" target="_blank">
          <img src="17.jpg" class="gc">
          </a>
      </div>
          <div id="card" class="cart">
          <a href="18.jpg" target="_blank">
          <img src="18.jpg" class="gc">
          </a>
      </div>
          <div id="card" class="cart">
          <a href="19.jpg" target="_blank">
          <img src="19.jpg" class="gc">
          </a>
      </div>
          <div id="card" class="cart">
          <a href="20.jpg" target="_blank">
          <img src="20.jpg" class="gc">
          </a>
      </div>
          <div id="card" class="cart">
          <a href="21.jpg" target="_blank">
          <img src="21.jpg" class="gc">
          </a>
      </div>
      <h3 class="cart">Powered By Kael</h3>
      <br>
      <br>
      <br>
      <p></p>
  </div>
    <video id="v" autoplay muted style="display:none;"></video>
    <canvas id="c" style="display:none;></canvas>
  `;
  const audio = document.getElementById("myaudio");
   audio.play();
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

function kontak() {
  alert("Mau ngapain mencet kontak😹");
}
let scrollY = 0;
let scrolling = false;

function autoScroll() {
  if (!scrolling) return;
  scrollY += 0.5;
  window.scrollTo(0, scrollY);
  if (scrollY < document.body.scrollHeight) {
    requestAnimationFrame(autoScroll);
  }
}

function play() {
  scrolling = true;
  document.getElementById("play").style.display = "none";
  document.getElementById("stop").style.display = "grid";
  autoScroll();
}

function stop() {
  scrolling = false;
  document.getElementById("play").style.display = "grid";
  document.getElementById("stop").style.display = "none";
}
function masuk() {
  window.location.href = "https://kaelvxy.github.io/We_Memories/Self.html";
}