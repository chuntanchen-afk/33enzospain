// ==============================
// Spain Trip PWA - app.js (Full)
// ==============================

// ===== Data =====
const tripData = [
  {
    date: "09/25", day: "Day 1", weekday: "週五",
    location: "馬德里 Madrid",
    weather: { temp: "—", icon: "🧳", note: "抵達日：先把節奏放慢，走出儀式感" },
    flight: {
      code: "EK387 / EK141",
      from: "TPE 00:30 → DXB 05:15",
      to: "DXB 07:45 → MAD 13:30",
      note: "抵達後：入境/領行李/到市區；晚上早休息"
    },
    hotel: {
      name: "Catalonia Plaza Mayor Hotel",
      address: "Madrid（Plaza Mayor 周邊）",
      tel: "—",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Catalonia+Plaza+Mayor+Hotel"
    },
    nights: 4,
    timeline: [
      { time: "", title: "抵達馬德里 → 前往飯店", desc: "放行李、調整狀態。", tag: "抵達" },
      {
        time: "", title: "太陽門廣場 Puerta del Sol", desc: "市中心起點，輕鬆走走。", tag: "景點",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Puerta+del+Sol+Madrid"
      },
      {
        time: "", title: "主廣場 Plaza Mayor", desc: "老城核心、拍照留念。", tag: "重點",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Plaza+Mayor+Madrid"
      },
      {
        time: "", title: "Gran Vía 夜景散步", desc: "第一晚的城市氣氛。", tag: "景點",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Gran+Via+Madrid"
      }
    ]
  },

  {
    date: "09/26", day: "Day 2", weekday: "週六",
    location: "塞維亞 Sevilla",
    weather: { temp: "—", icon: "✨", note: "當天來回：動線乾淨、重點打卡" },
    hotel: {
      name: "Catalonia Plaza Mayor Hotel",
      address: "Madrid（Plaza Mayor 周邊）",
      tel: "—",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Catalonia+Plaza+Mayor+Hotel"
    },
    nights: 0,
    timeline: [
      {
        time: "", title: "Madrid Atocha ↔ Sevilla Santa Justa", desc: "AVE 高鐵當天來回。", tag: "交通",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Madrid+Puerta+de+Atocha+station"
      },
      {
        time: "", title: "Sevilla Santa Justa 車站", desc: "下車後前往市區。", tag: "交通",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Sevilla+Santa+Justa+station"
      },
      {
        time: "", title: "塞維亞大教堂／吉拉達塔", desc: "視體力：外觀或入內。", tag: "景點",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Seville+Cathedral"
      },
      {
        time: "", title: "瑪麗亞路易莎公園", desc: "慢走，光線很漂亮。", tag: "景點",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Parque+de+Maria+Luisa+Seville"
      },
      {
        time: "", title: "西班牙廣場 Plaza de España（Sevilla）", desc: "重點：拍照＋走一圈。", tag: "重點",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Plaza+de+Espa%C3%B1a+Seville"
      },
      {
        time: "", title: "返回馬德里", desc: "回飯店休息。", tag: "交通",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Madrid+Puerta+de+Atocha+station"
      }
    ]
  },

  {
    date: "09/27", day: "Day 3", weekday: "週日",
    location: "馬德里 Madrid",
    weather: { temp: "—", icon: "🎨", note: "藝術金三角：建議提前預約/購票" },
    hotel: {
      name: "Catalonia Plaza Mayor Hotel",
      address: "Madrid（Plaza Mayor 周邊）",
      tel: "—",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Catalonia+Plaza+Mayor+Hotel"
    },
    nights: 0,
    timeline: [
      {
        time: "", title: "普拉多博物館 Prado Museum", desc: "經典必收。", tag: "重點",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Museo+del+Prado"
      },
      {
        time: "", title: "麗池公園 Retiro Park＋水晶宮", desc: "散步、拍照、放鬆。", tag: "景點",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=El+Retiro+Park+Madrid"
      },
      {
        time: "", title: "索菲亞王后 Reina Sofía", desc: "《格爾尼卡》所在。", tag: "景點",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Museo+Reina+Sofia"
      }
    ]
  },

  {
    date: "09/28", day: "Day 4", weekday: "週一",
    location: "托雷多 Toledo",
    weather: { temp: "—", icon: "🏰", note: "中世紀老城：建議穿好走鞋" },
    hotel: {
      name: "Catalonia Plaza Mayor Hotel",
      address: "Madrid（Plaza Mayor 周邊）",
      tel: "—",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Catalonia+Plaza+Mayor+Hotel"
    },
    nights: 0,
    timeline: [
      {
        time: "", title: "Madrid Atocha → Toledo", desc: "高速列車當天來回。", tag: "交通",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Madrid+Puerta+de+Atocha+station"
      },
      {
        time: "", title: "Toledo 車站", desc: "到站後上山進老城。", tag: "交通",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Toledo+train+station"
      },
      {
        time: "", title: "托雷多老城", desc: "巷弄＋石板路：慢慢走。", tag: "景點",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Toledo+historic+centre"
      },
      {
        time: "", title: "托雷多主教座堂", desc: "內部很值得。", tag: "重點",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Toledo+Cathedral"
      },
      {
        time: "", title: "Mirador del Valle", desc: "明信片視角（必拍）。", tag: "重點",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Mirador+del+Valle+Toledo"
      },
      { time: "", title: "回馬德里整理行李", desc: "隔天換城市。", tag: "提醒" }
    ]
  },

  {
    date: "09/29", day: "Day 5", weekday: "週二",
    location: "轉場：Madrid → Barcelona",
    weather: { temp: "—", icon: "🚄", note: "退房日只做移動：動線最乾淨" },
    hotel: {
      name: "Ayre Hotel Caspe",
      address: "Barcelona",
      tel: "—",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Ayre+Hotel+Caspe"
    },
    nights: 5,
    timeline: [
      {
        time: "", title: "馬德里退房 → Atocha 車站", desc: "行李一次帶走，直接去車站。", tag: "提醒",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Madrid+Puerta+de+Atocha+station"
      },
      {
        time: "", title: "AVE：Madrid → Barcelona Sants", desc: "抵達後入住放行李。", tag: "交通",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Barcelona+Sants+station"
      },
      {
        time: "", title: "巴塞隆納輕鬆散步（暖身）", desc: "今天不塞行程，把體力留給高第。", tag: "景點",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Eixample+Barcelona"
      }
    ]
  },

  {
    date: "09/30", day: "Day 6", weekday: "週三",
    location: "巴塞隆納 Barcelona",
    weather: { temp: "—", icon: "🏛️", note: "高第核心日：聖家堂/奎爾務必先訂票" },
    hotel: {
      name: "Ayre Hotel Caspe",
      address: "Barcelona",
      tel: "—",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Ayre+Hotel+Caspe"
    },
    nights: 0,
    timeline: [
      {
        time: "", title: "聖家堂 Sagrada Família", desc: "重點：入內＋光線。", tag: "重點",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Sagrada+Familia"
      },
      {
        time: "", title: "奎爾公園 Park Güell", desc: "重點：主要區域＋拍照。", tag: "重點",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Park+Guell"
      },
      {
        time: "", title: "巴特婁之家 Casa Batlló（或 米拉之家 Casa Milà）", desc: "擇一即可很完整。", tag: "景點",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Casa+Batllo"
      }
    ]
  },

  {
    date: "10/01", day: "Day 7", weekday: "週四",
    location: "巴塞隆納 Barcelona",
    weather: { temp: "—", icon: "🌊", note: "老城＋海岸線：走路多但舒服" },
    hotel: {
      name: "Ayre Hotel Caspe",
      address: "Barcelona",
      tel: "—",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Ayre+Hotel+Caspe"
    },
    nights: 0,
    timeline: [
      {
        time: "", title: "哥德區 Barri Gòtic", desc: "巷弄隨走隨拍。", tag: "景點",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Gothic+Quarter+Barcelona"
      },
      {
        time: "", title: "巴塞隆納大教堂（外觀/入內）", desc: "在哥德區核心。", tag: "景點",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Barcelona+Cathedral"
      },
      {
        time: "", title: "波蓋利亞市場（僅逛）", desc: "快速路過即可。", tag: "景點",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=La+Boqueria"
      },
      {
        time: "", title: "蘭布拉大道", desc: "人多注意隨身物品。", tag: "提醒",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=La+Rambla+Barcelona"
      },
      {
        time: "", title: "巴塞隆內塔海灘", desc: "傍晚很適合。", tag: "景點",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Barceloneta+Beach"
      }
    ]
  },

  {
    date: "10/02", day: "Day 8", weekday: "週五",
    location: "巴塞隆納 Barcelona",
    weather: { temp: "—", icon: "⛰️", note: "制高點＋自由：留彈性最好用" },
    hotel: {
      name: "Ayre Hotel Caspe",
      address: "Barcelona",
      tel: "—",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Ayre+Hotel+Caspe"
    },
    nights: 0,
    timeline: [
      {
        time: "", title: "蒙特惠奇山 Montjuïc", desc: "纜車/觀景台/城堡擇你喜歡的。", tag: "景點",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Montjuic+Barcelona"
      },
      {
        time: "", title: "蒙特惠奇城堡（選）", desc: "想看海景＋制高點就去。", tag: "選擇",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Montjuic+Castle"
      }
    ]
  },

  {
    date: "10/03", day: "Day 9", weekday: "週六",
    location: "巴塞隆納 Barcelona",
    weather: { temp: "—", icon: "🧩", note: "備用日：補漏或休息，旅程更漂亮" },
    hotel: {
      name: "Ayre Hotel Caspe",
      address: "Barcelona",
      tel: "—",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Ayre+Hotel+Caspe"
    },
    nights: 0,
    timeline: [
      { time: "", title: "自由備用日", desc: "把你最喜歡的區再走一次。", tag: "選擇" }
    ]
  },

  {
    date: "10/04", day: "Day 10", weekday: "週日",
    location: "返程 Return",
    weather: { temp: "—", icon: "✈️", note: "回程航班：BCN → DXB → TPE" },
    flight: {
      code: "EK186 / EK366",
      from: "BCN 16:15 → DXB 01:00",
      to: "DXB 03:45 → TPE 16:15",
      note: "提早前往機場；以航空公司資訊為準"
    },
    timeline: [
      {
        time: "", title: "前往 BCN 機場", desc: "預留移動＋安檢時間。", tag: "提醒",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Barcelona+El+Prat+Airport+T1"
      },
      { time: "", title: "起飛返台", desc: "結束西班牙旅程。", tag: "飛行" }
    ]
  }
];

const tagIcons = {
  "交通":"🚄",
  "飛行":"✈️",
  "抵達":"🏁",
  "景點":"📍",
  "重點":"✨",
  "住宿":"🏨",
  "提醒":"🔔",
  "選擇":"🔀"
};

let currentIndex = 0;
let currentTab = "plan";

// ===== Location map helper =====
function getLocationMapUrl(locationText){
  const s = (locationText || "").toLowerCase();

  if (s.includes("madrid") || s.includes("馬德里"))
    return "https://www.google.com/maps/search/?api=1&query=Madrid";

  if (s.includes("sevilla") || s.includes("seville") || s.includes("塞維亞"))
    return "https://www.google.com/maps/search/?api=1&query=Seville";

  if (s.includes("toledo") || s.includes("托雷多"))
    return "https://www.google.com/maps/search/?api=1&query=Toledo";

  if (s.includes("barcelona") || s.includes("巴塞隆納"))
    return "https://www.google.com/maps/search/?api=1&query=Barcelona";

  return "";
}

// ===== Init =====
function init(){
  renderNav();
  renderDay(0);
  startCountdown();
  setupBottomNav();
  setupSwipe();
  setupChecklist();
  setupPWA();
}

// ===== Date nav =====
function renderNav(){
  const nav = document.getElementById("date-nav");
  nav.innerHTML = "";
  tripData.forEach((d, i)=>{
    const div = document.createElement("div");
    div.className = "date-item" + (i===0 ? " active":"");
    div.onclick = () => renderDay(i);

    const dayNum = d.date.split("/")[1];
    div.innerHTML = `
      <div class="date-day">${d.weekday}</div>
      <div class="date-num">${dayNum}</div>
    `;
    nav.appendChild(div);
  });
}

// ===== Render day =====
function renderDay(index){
  currentIndex = index;
  const data = tripData[index];

  const container = document.getElementById("content-area");
  const headerTitle = document.getElementById("header-title");
  headerTitle.innerText = `${data.day} ${data.location.split(" ")[0]}`;

  document.querySelectorAll(".date-item").forEach((el, i)=>{
    el.classList.toggle("active", i===index);
  });

  const nav = document.getElementById("date-nav");
  const activeEl = nav.children[index];
  if(activeEl){
    nav.scrollTo({
      left: activeEl.offsetLeft - nav.clientWidth/2 + activeEl.clientWidth/2,
      behavior:"smooth"
    });
  }

  container.style.opacity = 0;
  setTimeout(()=>{
    if(currentTab==="plan") container.innerHTML = buildPlanHtml(data);
    else if(currentTab==="stay") container.innerHTML = buildStayHtml();
    else if(currentTab==="tips") container.innerHTML = buildTipsHtml();
    else if(currentTab==="check") { openChecklist(); container.innerHTML = buildPlanHtml(data); }
    container.style.opacity = 1;
    container.style.animation = "fadeInScreen .35s ease";
  }, 90);
}

// ===== Build plan html =====
function buildPlanHtml(data){
  let html = "";

  const locMap = getLocationMapUrl(data.location);
  const locMapBtn = locMap
    ? `<a class="weather-loc-map" href="${locMap}" target="_blank" rel="noopener">🗺️ 地圖</a>`
    : "";

  // Widget
  html += `
    <div class="weather-widget">
      <div class="weather-left">
        <div class="weather-loc-row">
          <div class="weather-loc">${data.location}</div>
          ${locMapBtn}
        </div>
        <div class="weather-temp">${data.weather?.temp || "—"}</div>
        <div class="weather-extra">${data.weather?.note || ""}</div>
      </div>
      <div class="weather-right">
        <div class="weather-icon">${data.weather?.icon || "🗓️"}</div>
        <div class="weather-day-label">${data.day}・${data.date}</div>
      </div>
    </div>
  `;

  // Flight card
  if(data.flight){
    html += `
      <div class="section-title">航班資訊</div>
      <div class="card flight-card">
        <div class="card-inner">
          <div class="flight-header">
            <div class="flight-code">${data.flight.code}</div>
            <div class="flight-tag">✈ 航班</div>
          </div>
          <div class="flight-route">
            <span>${data.flight.from}</span>
            <span>${data.flight.to}</span>
          </div>
          <div class="flight-note">ℹ️ ${data.flight.note}</div>
        </div>
      </div>
    `;
  }

  // Timeline
  html += `
    <div class="section-title">今日行程</div>
    <div class="day-label"><span class="dot"></span>${data.weekday} · ${data.location}</div>
    <div class="timeline">
  `;

  (data.timeline||[]).forEach((item)=>{
    const isHighlight = ["重點","住宿","飛行"].includes(item.tag);
    const tagClass = isHighlight ? "timeline-tag-chip tag-highlight" : "timeline-tag-chip";
    const icon = tagIcons[item.tag] || "📌";

    const mapBtn = item.mapUrl
      ? `<a class="timeline-map" href="${item.mapUrl}" target="_blank" rel="noopener">🗺️ 地圖</a>`
      : "";

    const descClass = item.tag === "交通" ? "timeline-desc transport" : "timeline-desc";
    const descPrefix = item.tag === "交通" ? "🚄 " : "";

    html += `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-time">${item.time || ""}</div>
        <div class="timeline-content">
          <div class="timeline-header-row">
            <div class="timeline-title">${item.title}</div>
            <div class="timeline-actions">
              ${item.tag ? `<div class="${tagClass}">${icon} ${item.tag}</div>` : ""}
              ${mapBtn}
            </div>
          </div>
          <div class="${descClass}">${descPrefix}${item.desc || ""}</div>
        </div>
      </div>
    `;
  });

  html += `</div>`;

  // Hotel
  if(data.hotel){
    html += `
      <div class="section-title">住宿</div>
      <div class="card hotel-card">
        <div class="card-inner">
          <span class="hotel-name">${data.hotel.name}</span>
          <div class="hotel-night-chip">${data.date} · ${data.location.split(" ")[0]}</div>
          <div class="card-row">
            <span class="icon">📍</span>
            <div>
              ${data.hotel.address || ""}
              ${data.hotel.mapUrl ? `<a href="${data.hotel.mapUrl}" target="_blank" class="map-link" rel="noopener">地圖導航</a>`:""}
            </div>
          </div>
          <div class="card-row">
            <span class="icon">📞</span><span>${data.hotel.tel || "—"}</span>
          </div>
        </div>
      </div>
    `;
  }

  return html;
}

// ===== Stay overview =====
function buildStayHtml(){
  const hotelMap = new Map();

  tripData.forEach(d=>{
    if(d.hotel){
      const key = d.hotel.name;
      if(!hotelMap.has(key)) hotelMap.set(key, { info: d.hotel, nights: 0, dates: [] });
      const e = hotelMap.get(key);
      e.nights += (d.nights || 0);
      e.dates.push(`${d.date}（${d.weekday}）`);
    }
  });

  let html = `<div class="section-title">住宿總覽</div>`;
  hotelMap.forEach((v, key)=>{
    html += `
      <div class="card hotel-card">
        <div class="card-inner">
          <span class="hotel-name">${key}</span>
          <div class="hotel-night-chip">共 ${v.nights || "—"} 晚</div>
          <div class="card-row"><span class="icon">📅</span><div>${v.dates.join(" · ")}</div></div>
          <div class="card-row">
            <span class="icon">📍</span>
            <div>
              ${v.info.address || ""}
              ${v.info.mapUrl ? `<a href="${v.info.mapUrl}" target="_blank" class="map-link" rel="noopener">地圖導航</a>` : ""}
            </div>
          </div>
          <div class="card-row"><span class="icon">📞</span><span>${v.info.tel || "—"}</span></div>
        </div>
      </div>
    `;
  });

  return html;
}

// ===== Tips =====
function buildTipsHtml(){
  return `
    <div class="section-title">小提醒</div>
    <div class="card">
      <div class="card-inner">
        <div class="card-row"><span class="icon">🧳</span>
          <div><span class="card-label">防盜：</span>巴塞隆納／蘭布拉大道人多，包包放前，避免外露貴重物。</div>
        </div>
        <div class="card-row"><span class="icon">🎫</span>
          <div><span class="card-label">預約：</span>王宮／普拉多／聖家堂／奎爾建議先線上訂票。</div>
        </div>
        <div class="card-row"><span class="icon">🚄</span>
          <div><span class="card-label">高鐵：</span>Sevilla／Toledo／Barcelona 建議提早到站並留安檢時間。</div>
        </div>
        <div class="card-row"><span class="icon">👟</span>
          <div><span class="card-label">鞋：</span>老城石板路多，鞋底要止滑。</div>
        </div>
      </div>
    </div>

    <div class="section-title">快速概覽</div>
    <div class="card">
      <div class="card-inner">
        <div class="card-row"><span class="icon">✈️</span><div><span class="card-label">去程：</span>EK387 / EK141（TPE→DXB→MAD）</div></div>
        <div class="card-row"><span class="icon">✈️</span><div><span class="card-label">回程：</span>EK186 / EK366（BCN→DXB→TPE）</div></div>
        <div class="card-row"><span class="icon">🏨</span><div><span class="card-label">住宿：</span>Madrid 09/25–09/29 · Barcelona 09/29–10/04</div></div>
      </div>
    </div>
  `;
}

// ===== Countdown =====
function startCountdown(){
  // 你的旅行開始日
  const tripStart = new Date("2026-09-25T00:00:00").getTime();
  const el = document.getElementById("countdown")?.querySelector("span");
  if(!el) return;

  function update(){
    const diff = tripStart - Date.now();
    if(diff < 0){ el.innerText = "旅程進行中"; return; }
    const days = Math.floor(diff / (1000*60*60*24));
    el.innerText = `倒數 ${days} 天`;
  }
  update();
  setInterval(update, 60000);
}

// ===== Bottom tabs =====
function setupBottomNav(){
  document.querySelectorAll(".bottom-nav-btn").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const tab = btn.getAttribute("data-tab");
      if(tab === currentTab) return;

      currentTab = tab;
      document.querySelectorAll(".bottom-nav-btn").forEach(b => b.classList.toggle("active", b === btn));
      renderDay(currentIndex);
    });
  });
}

// ===== Swipe =====
function setupSwipe(){
  let startX = null;
  const area = document.getElementById("content-area");
  if(!area) return;

  area.addEventListener("touchstart", (e)=>{ startX = e.touches[0].clientX; }, { passive: true });
  area.addEventListener("touchend", (e)=>{
    if(startX === null) return;
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;
    const threshold = 50;

    if(Math.abs(diff) > threshold){
      if(diff < 0 && currentIndex < tripData.length - 1) renderDay(currentIndex + 1);
      else if(diff > 0 && currentIndex > 0) renderDay(currentIndex - 1);
    }
    startX = null;
  }, { passive: true });
}

// ===== Checklist (offline) =====
const CHECK_KEY = "spain_checklist_v1";
let openChecklist = () => {};

function setupChecklist(){
  const modal = document.getElementById("checklistModal");
  const closeBtn = document.getElementById("closeChecklist");
  const doneBtn = document.getElementById("doneChecklist");
  const resetBtn = document.getElementById("resetChecklist");
  const checklist = document.getElementById("checklist");

  if(!modal || !closeBtn || !doneBtn || !resetBtn || !checklist) return;

  function load(){
    try{
      const data = JSON.parse(localStorage.getItem(CHECK_KEY) || "{}");
      checklist.querySelectorAll("input[type=checkbox]").forEach(cb=>{
        cb.checked = !!data[cb.dataset.key];
      });
    }catch{}
  }

  function save(){
    const data = {};
    checklist.querySelectorAll("input[type=checkbox]").forEach(cb=>{
      data[cb.dataset.key] = cb.checked;
    });
    localStorage.setItem(CHECK_KEY, JSON.stringify(data));
  }

  checklist.addEventListener("change", save);

  openChecklist = function(){
    load();
    modal.classList.add("show");
  };

  function close(){
    modal.classList.remove("show");
  }

  closeBtn.addEventListener("click", close);
  doneBtn.addEventListener("click", close);

  modal.addEventListener("click", (e)=>{
    if(e.target === modal) close();
  });

  resetBtn.addEventListener("click", ()=>{
    checklist.querySelectorAll("input[type=checkbox]").forEach(cb => cb.checked = false);
    save();
  });
}

// ===== PWA =====
function setupPWA(){
  if("serviceWorker" in navigator){
    window.addEventListener("load", ()=>{
      navigator.serviceWorker.register("./service-worker.js").catch(()=>{});
    });
  }
}

// ===== Start =====
init();