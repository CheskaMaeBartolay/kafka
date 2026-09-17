const games = {
  top:[
    {name:"SAE MODDED",tags:["Adventure","RPG"],rating:"92%",players:"650K+",art:"linear-gradient(135deg,#123c87,#0b1634 40%,#f23a35)",title:"SAE<br>MODDED"},
    {name:"coming soon",tags:["PvP","Strategy"],rating:"89%",players:"520K+",art:"linear-gradient(135deg,#62c7ff,#d7f0ff 48%,#6fc26c)",title:"BED<span style='color:#ff5364'>WARS</span>"},
    {name:"coming soon",tags:["Roleplay","Simulation"],rating:"88%",players:"480K+",art:"linear-gradient(135deg,#4a2c12,#d7b58d 45%,#4b91c7)",title:"BROOKHAVEN"}
  ],
  modded:[
    {name:"SAE MODDED",tags:["GG","Modded"],desc:"Easy Grind, Free admin",art:"linear-gradient(135deg,#235fc5,#6ee1ff 45%,#e9a32b)",title:"SAE<br>MODDED"},
    {name:"coming soon",tags:["Script","Modded"],desc:"Auto Farm, Auto Open, Fast Hatch and more!",art:"linear-gradient(135deg,#a9e75d,#2e6fcb)",title:"PET<br>SIMULATOR"},
    {name:"coming soon",tags:["Script","Modded"],desc:"Auto Farm, Auto Click, Infinite Yen and more!",art:"linear-gradient(135deg,#562a9d,#ec4d94,#182d79)",title:"ANIME<br>FIGHTERS"},
    {name:"coming soon",tags:["Executor","Modded"],desc:"Universal script for all games. Works on most experiences.",art:"linear-gradient(135deg,#071b36,#142d4b,#0b1019)",title:"INFINITE<br><span style='color:#ff4257'>YIELD</span>"},
    {name:"coming soon",tags:["Script","Modded"],desc:"Aimbot, ESP, No Recoil and more!",art:"linear-gradient(135deg,#334a61,#d7b28d,#7e382c)",title:"ARSENAL"}
  ],
  mygames:[
    {name:"coming soon",tags:["Survival","Adventure"],desc:"Survive, explore and complete missions in a dark world.",art:"linear-gradient(135deg,#07152e,#233e6e,#060c19)",title:"PROJECT<br>ECLIPSE"},
    {name:"coming soon",tags:["Tycoon","Simulator"],desc:"Grow your garden, collect items and become the richest!",art:"linear-gradient(135deg,#4d9c45,#f4b64a,#2e6b48)",title:"GARDENER<br>TYCOON"},
    {name:"coming soon",tags:["PVP","Action"],desc:"Fight with your favorite anime characters!",art:"linear-gradient(135deg,#4e1c91,#f2499a,#111c58)",title:"ANIME<br>ARENA"},
    {name:"coming soon",tags:["Tycoon","Simulation"],desc:"Buy, customize and sell your dream cars.",art:"linear-gradient(135deg,#b6d8e8,#5b8ca8,#243e55)",title:"CAR<br>DEALERSHIP"},
    {name:"coming soon",tags:["Survival","Building"],desc:"Build, survive and explore the island.",art:"linear-gradient(135deg,#52c4f4,#f2dc83,#36a66c)",title:"ISLAND<br>SURVIVAL"}
  ]
};
const esc = s => s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function card(g,i,top=false){
  return `<article class="game-card" data-name="${esc(g.name.toLowerCase())}">
    <div class="thumb" style="--art:${g.art}">${top?`<span class="rank">${i+1}</span>`:""}<div class="thumb-title">${g.title}</div>${!top?'<div class="thumb-sub">KAFKA HUB</div>':''}</div>
    <div class="game-body"><h3>${esc(g.name)}</h3>${g.desc?`<p class="desc">${esc(g.desc)}</p>`:''}<div class="tags">${g.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div>
    <div class="meta">${top?`<span>♡ ${g.rating} &nbsp; ♙ ${g.players}</span>`:'<span>◉ Featured</span>'}<button class="play-btn" onclick="playGame('${esc(g.name)}')">Play Now →</button></div></div>
  </article>`;
}
function render(){
  document.querySelector('#topGrid').innerHTML=games.top.map((g,i)=>card(g,i,true)).join('');
  document.querySelector('#moddedGrid').innerHTML=games.modded.map((g,i)=>card(g,i)).join('');
  document.querySelector('#myGrid').innerHTML=games.mygames.map((g,i)=>card(g,i)).join('');
}
const gameLinks = {
  "SAE MODDED": "https://www.roblox.com/games/109556794504107/SAE-MOD-X99999-F2P-ADMIN",
  "Pet Simulator 99 Mod": "YOUR-PET-SIMULATOR-LINK",
  "Anime Fighters Simulator": "YOUR-ANIME-FIGHTERS-LINK",
  "Infinite Yield": "YOUR-INFINITE-YIELD-LINK",
  "Arsenal Mod": "YOUR-ARSENAL-LINK",
  "Project Eclipse": "YOUR-PROJECT-ECLIPSE-LINK",
  "Gardener Tycoon": "YOUR-GARDENER-LINK",
  "Anime Battle Arena": "YOUR-ANIME-ARENA-LINK",
  "Car Dealership": "YOUR-CAR-DEALERSHIP-LINK",
  "Island Survival": "YOUR-ISLAND-LINK"
};

function playGame(name) {
  const link = gameLinks[name];

  if (link) {
    window.open(link, "_blank");
  } else {
    alert("Game link not added yet. Stay tune for more updates.");
  }
}
document.querySelector('#searchInput').addEventListener('input',e=>{
  const q=e.target.value.toLowerCase().trim();
  let count=0;
  document.querySelectorAll('.game-card').forEach(c=>{const show=c.dataset.name.includes(q);c.style.display=show?'':'none';if(show)count++});
  document.querySelector('#emptyState').hidden=count!==0;
});
document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>document.querySelector('#'+(b.dataset.view==='top'?'top-games':b.dataset.view)).scrollIntoView({behavior:'smooth'})));
render();


document.querySelector("#searchInput").addEventListener("input", function () {
  const searchText = this.value.toLowerCase().trim();

  document.querySelectorAll(".game-card").forEach(function (card) {
    const gameName = card.dataset.name;

    if (gameName.includes(searchText)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
});

// Roblox presence checker
const ROBLOX_USER_ID = 977146001;
const onlineStatus = document.getElementById("onlineStatus");
const statusDot = document.getElementById("statusDot");
const currentGame = document.getElementById("currentGame");
const joinGameBtn = document.getElementById("joinGameBtn");
const lastUpdated = document.getElementById("lastUpdated");

async function loadRobloxPresence() {
  try {
    const response = await fetch(`/api/presence?userId=${ROBLOX_USER_ID}&t=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    const presence = data.userPresences?.[0];
    const type = Number(presence?.userPresenceType || 0);
    const placeId = presence?.placeId || presence?.rootPlaceId;

    if (type === 2) {
      statusDot.className = "status-dot online";
      onlineStatus.textContent = "Currently Playing";
      currentGame.textContent = presence.lastLocation || "Playing a Roblox game";
      if (placeId) {
        joinGameBtn.href = `https://www.roblox.com/games/start?placeId=${placeId}`;
        joinGameBtn.hidden = false;
      } else {
        joinGameBtn.hidden = true;
        currentGame.textContent += " (join link unavailable)";
      }
    } else if (type === 3) {
      statusDot.className = "status-dot studio";
      onlineStatus.textContent = "In Roblox Studio";
      currentGame.textContent = "Currently developing in Roblox Studio.";
      joinGameBtn.hidden = true;
    } else if (type === 1) {
      statusDot.className = "status-dot online";
      onlineStatus.textContent = "Online";
      currentGame.textContent = "Browsing Roblox.";
      joinGameBtn.hidden = true;
    } else {
      statusDot.className = "status-dot offline";
      onlineStatus.textContent = "Offline";
      currentGame.textContent = "Not currently playing Roblox.";
      joinGameBtn.hidden = true;
    }
    lastUpdated.textContent = `Updated ${new Date().toLocaleTimeString()}`;
  } catch (error) {
    console.error("Presence error:", error);
    onlineStatus.textContent = "Status unavailable";
    currentGame.textContent = "Could not load Roblox activity.";
    joinGameBtn.hidden = true;
    statusDot.className = "status-dot offline";
  }
}

loadRobloxPresence();
setInterval(loadRobloxPresence, 2000);
