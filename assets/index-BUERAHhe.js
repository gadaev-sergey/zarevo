const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./style-B2leoSyP.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Qh="modulepreload",jh=function(s,e){return new URL(s,e).href},ll={},eu=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let c=function(h){return Promise.all(h.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");i=c(t.map(h=>{if(h=jh(h,n),h in ll)return;ll[h]=!0;const u=h.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(n)for(let g=a.length-1;g>=0;g--){const v=a[g];if(v.href===h&&(!u||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${d}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":Qh,u||(f.as="script"),f.crossOrigin="",f.href=h,l&&f.setAttribute("nonce",l),document.head.appendChild(f),u)return new Promise((g,v)=>{f.addEventListener("load",g),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})},vo={projection:"orthographic",fov:35,height:11.6,distance:18,centerX:.15,centerY:2.05,follow:"adaptive",offsetX:0,offsetY:1.3,smoothing:3,near:.1,far:100},tu={height:[2,80],distance:[3,100],centerX:[-1e3,1e3],centerY:[-1e3,1e3],offsetX:[-100,100],offsetY:[-100,100],smoothing:[0,20],near:[.01,2],far:[20,2e3]},vr=s=>({...vo,...s}),nu=["original","none","tile-0","tile-1","tile-2","tile-3","tile-4","tile-5"],dt=s=>{throw new Error(s)},qt=(s,e,t)=>typeof s=="number"&&Number.isFinite(s)&&s>=e&&s<=t,Qt=(s,e=100)=>typeof s=="string"&&s.length>0&&s.length<=e,cl=s=>typeof s=="string"&&/^#[0-9a-f]{6}$/i.test(s);function iu(s){if(!s||typeof s!="object")return dt("Файл не содержит сцену.");const e=s;if(e.format!=="shelter-scene"||![1,2].includes(e.version)||!Qt(e.template)||e.units!=="m")return dt("Неподдерживаемый формат или версия сцены.");if(!Qt(e.name)||!Array.isArray(e.nodes)||e.nodes.length>2e3||!Array.isArray(e.textures)||e.textures.length>24)return dt("Некорректное имя или слишком большая сцена.");const t=e.environment;if(!t||!qt(t.time,0,1439)||!qt(t.haze,0,.2)||!qt(t.exposure,.2,3)||typeof t.flashlight!="boolean")return dt("Некорректные настройки окружения.");if(e.camera!==void 0&&(!e.camera||!["orthographic","perspective"].includes(e.camera.projection)||!qt(e.camera.fov,15,100)))return dt("Некорректная камера. FOV должен быть от 15° до 100°.");if(e.camera){const o=vr(e.camera);if(!["adaptive","fixed","horizontal","player"].includes(o.follow)||Object.entries(tu).some(([l,[c,h]])=>!qt(o[l],c,h))||o.near>=o.far||o.distance>=o.far)return dt("Некорректные параметры камеры: проверьте размеры, слежение и дальность видимости.")}const n=new Set;let i=0;for(const o of e.textures){if(!o||!Qt(o.id)||!Qt(o.name)||n.has(o.id)||!/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(o.data)||o.data.length>4e6)return dt("Некорректная текстура. Поддерживаются PNG, JPEG и WebP до 3 МБ.");n.add(o.id),i+=o.data.length}if(i>16e6)return dt("Общий размер текстур превышает 12 МБ.");if(e.nodes.filter(o=>o?.light&&o.visible&&o.light.intensity>0&&o.light.shadows).length>6)return dt("Одновременно поддерживается до 6 источников с тенями. Отключите тени у остальных.");const r=new Set,a=new Set;if(e.groups!==void 0){if(!Array.isArray(e.groups)||e.groups.length>500)return dt("Некорректный список групп.");for(const o of e.groups){if(!o||!Qt(o.id)||!Qt(o.name)||a.has(o.id))return dt("Некорректная или повторяющаяся группа.");a.add(o.id)}}for(const o of e.nodes){if(!o||!Qt(o.id)||r.has(o.id)||!Qt(o.name)||!["source","prefab","box","sphere","plane","point-light","spot-light","model","camera"].includes(o.kind)||!["architecture","props","lights","details"].includes(o.layer))return dt("Некорректный или повторяющийся объект сцены.");if(r.add(o.id),a.has(o.id)||o.groupId!==void 0&&!a.has(o.groupId))return dt("Объект ссылается на неизвестную группу или имеет конфликтующий ID.");if(typeof o.visible!="boolean"||typeof o.locked!="boolean")return dt("Некорректное состояние объекта.");if(o.gameId!==void 0&&!Qt(o.gameId))return dt("Некорректная игровая привязка.");for(const l of["position","rotation","scale"]){const c=o.transform?.[l];if(!Array.isArray(c)||c.length!==3||!c.every(h=>qt(h,l==="scale"?.01:-1e3,l==="scale"?100:1e3)))return dt("Координаты должны быть конечными числами; масштаб — от 0,01 до 100.")}if(["source","model","prefab"].includes(o.kind)&&!Qt(o.asset,200))return dt("Не указан ресурс объекта.");if(o.folder!==void 0&&!Qt(o.folder))return dt("Некорректная папка.");if(o.components!==void 0&&(!Array.isArray(o.components)||o.components.length>32||o.components.some(l=>!l||!Qt(l.type)||!l.values||typeof l.values!="object"||Object.values(l.values).some(c=>!["string","boolean","number"].includes(typeof c)||typeof c=="number"&&!Number.isFinite(c)))))return dt("Некорректные компоненты.");if(o.surface){const l=o.surface;if(!l||!cl(l.color)||!qt(l.roughness,0,1)||!qt(l.metalness,0,1)||!qt(l.repeat,.1,20)||!(nu.includes(l.texture)||n.has(l.texture)||/^asset:[a-zA-Z0-9_-]+$/.test(l.texture)))return dt("Некорректный материал объекта.")}if(o.kind.endsWith("-light")){const l=o.light;if(!l||!cl(l.color)||!qt(l.intensity,0,150)||!qt(l.range,.1,30)||!qt(l.angle,5,85)||!qt(l.penumbra,0,1)||typeof l.shadows!="boolean")return dt("Некорректный источник света.")}}if(e.activeCamera&&!e.nodes.some(o=>o.id===e.activeCamera&&o.kind==="camera"))return dt("Активная камера отсутствует в сцене.");if(e.moduleData&&JSON.stringify(e.moduleData).length>1e6)return dt("Данные модулей превышают 1 МБ.");for(const o of a)if(!e.nodes.some(l=>l.groupId===o))return dt("Группа не содержит объектов.");return structuredClone(e)}function hl(s="Новая сцена",e="empty-3d"){return{format:"shelter-scene",version:2,id:crypto.randomUUID(),template:e,name:s,units:"m",nodes:[],textures:[],camera:{...vo,follow:"fixed"},environment:{time:720,haze:0,exposure:1.3,flashlight:!1}}}function wa(s,e,t=""){return`shelter:${s}:${e}:${t}`}const We=200,gi=2e3,Wc=1e3,su=100,ms=1/Math.tan(su/2*Math.PI/180),ul=Wc*ms,mt=We*60,Xc=1.24,Aa=420,Fs=.32,Os=We*.9,qc=290/mt,Kc=.2,ru=s=>Math.min(1,1/(Kc*Math.max(.001,Math.abs(s)))),Yc={palm:{width:.42,solid:!0},lamp:{width:.12,solid:!0},rock:{width:.55,solid:!0},billboard:{width:.9,solid:!0},house:{width:1.1,solid:!0},pine:{width:.45,solid:!0},sign:{width:.3,solid:!0},rail:{width:.16,solid:!0},tower:{width:1.3,solid:!0},neon:{width:.75,solid:!0}},au=["coast","pass","city"],ou=[["Вера «Вспышка»","#ffd34d"],["Тимур Ветер","#4fd2ff"],["Лис","#ff4f8b"],["Арсений","#9dff6a"],["Нина Ход","#c97bff"],["Барон","#ff8a3d"],["Ильяс","#e9eef5"]],dl=["#8a94a6","#5d6a7d","#a4876a","#6f8c7e","#7e6d93","#b9b4a8"],vn=(s,e,t)=>Math.max(e,Math.min(t,s)),es=(s,e,t)=>s+(e-s)*(-Math.cos(t*Math.PI)/2+.5),Bt=(s,e,t,n)=>{const i=Number(s);if(!Number.isFinite(i)||i<e||i>t)throw new Error(`Зарево: некорректное значение «${n}».`);return i};function $c(s){const e=s.moduleData?.zarevo;if(!e)throw new Error("Зарево: в сцене нет данных трассы.");const t=String(e.theme);if(!au.includes(t))throw new Error("Зарево: неизвестное оформление трассы.");const n=l=>s.nodes.filter(c=>c.visible).flatMap(c=>(c.components||[]).filter(h=>h.type===l).map(h=>({node:c,values:h.values}))),i=n("zarevo.section").sort((l,c)=>l.node.transform.position[2]-c.node.transform.position[2]).map(({values:l})=>({enter:Bt(l.enter,0,500,"въезд"),hold:Bt(l.hold,1,1e3,"участок"),leave:Bt(l.leave,0,500,"выезд"),curve:Bt(l.curve,-8,8,"поворот"),hill:Bt(l.hill,-120,120,"перепад")}));if(i.length<3)throw new Error("Зарево: трасса должна состоять минимум из трёх участков.");const r=i.reduce((l,c)=>l+c.enter+c.hold+c.leave,0);if(r<300||r>12e3)throw new Error("Зарево: длина трассы должна быть от 300 до 12000 сегментов.");const a=n("zarevo.checkpoint").map(({values:l})=>({segment:Bt(l.segment,10,r-10,"контрольная точка"),bonus:Bt(l.bonus,0,60,"бонус времени")})).sort((l,c)=>l.segment-c.segment),o=n("zarevo.scenery").map(({values:l})=>{const c=String(l.kind);if(!Yc[c])throw new Error("Зарево: неизвестная декорация.");const h=String(l.side);if(!["left","right","both"].includes(h))throw new Error("Зарево: сторона декорации должна быть left, right или both.");return{kind:c,side:h,from:Bt(l.from,0,r,"начало ряда"),to:Bt(l.to,0,r,"конец ряда"),every:Bt(l.every,2,1e3,"шаг ряда"),offset:Bt(l.offset,1.05,6,"отступ от дороги")}});return{id:s.id||s.name,name:s.name,theme:t,time:Bt(e.time,10,180,"стартовое время"),rivals:Bt(e.rivals,0,7,"соперники"),traffic:Bt(e.traffic,0,40,"трафик"),pace:Bt(e.pace,.5,1,"темп соперников"),next:typeof e.next=="string"?e.next:"",sections:i,checkpoints:a,scenery:o}}const fl=s=>{const e=Math.sin(s*127.1+311.7)*43758.5453;return e-Math.floor(e)};function lu(s){const e=[];let t=0;const n=(r,a)=>{const o=e.length;e.push({index:o,curve:r,y1:t,y2:a,props:[],checkpoint:0}),t=a};for(const r of s.sections){const a=t,o=t+r.hill*We,l=r.enter+r.hold+r.leave;for(let c=0;c<r.enter;c++)n(es(0,r.curve,c/r.enter),es(a,o,(c+1)/l));for(let c=0;c<r.hold;c++)n(r.curve,es(a,o,(r.enter+c+1)/l));for(let c=0;c<r.leave;c++)n(es(r.curve,0,c/r.leave),es(a,o,(r.enter+r.hold+c+1)/l))}const i=e.length;for(let r=0;r<Aa;r++)n(0,t);for(const r of s.checkpoints)e[Math.round(r.segment)].checkpoint=r.bonus||.001;return s.scenery.forEach((r,a)=>{for(let o=r.from;o<Math.min(r.to,i+Aa-1);o+=r.every){const l=r.side==="both"?[-1,1]:[r.side==="left"?-1:1];for(const c of l){const h=Math.floor(o),u=fl(h*7.3+a*13+c)*.35;if(r.kind==="sign"&&(Math.abs(e[h]?.curve||0)<2||Math.sign(e[h].curve)===c))continue;const d=Yc[r.kind];e[h]?.props.push({kind:r.kind,offset:c*(r.offset+u),width:d.width,solid:d.solid,variant:Math.floor(fl(h*3.1+a)*4)})}}}),e[i].checkpoint=-1,e}function cu(s,e,t,n){const i=[],r=[];let a=0,o=-(s[e].curve*t);for(let l=0;l<n&&e+l<s.length;l++)i.push(a),r.push(a+o),a+=o,o+=s[e+l].curve;return{near:i,far:r}}class hu{tracks;track;segments=[];length=0;phase="title";countdown=0;time=0;seconds=0;place=8;overtakes=0;misses=0;player={z:0,x:0,speed:0,steer:0,nitro:.4,boosting:!1,bump:0,offroad:!1};cars=[];finishers=[];banner="";bannerTime=0;popup="";popupTime=0;shake=0;flash=0;slip=0;result=null;progress={unlocked:1,best:{}};nextCheckpoint=0;lastWarning=0;demo=!0;random;onSound=()=>{};onResult=()=>{};carId=0;paused="racing";constructor(e,t=Math.random){this.random=t,this.tracks=e.map($c),this.track=this.tracks[0],this.load(this.track.id,!0)}get finishZ(){return this.length*We}get trackIndex(){return this.tracks.indexOf(this.track)}get progressShare(){return vn(this.player.z/this.finishZ,0,1)}get kmh(){return Math.round(this.player.speed*qc)}segmentAt(e){return this.segments[vn(Math.floor(e/We),0,this.segments.length-1)]}announce(e,t=2.4){this.banner=e,this.bannerTime=t}pop(e){this.popup=e,this.popupTime=1.1}load(e,t=!1){const n=this.tracks.find(i=>i.id===e);if(!n)throw new Error("Зарево: трасса не найдена.");this.track=n,this.segments=lu(n),this.length=this.segments.length-Aa,this.demo=t,this.player={z:We*4,x:t?0:.5,speed:t?mt*.82:0,steer:0,nitro:.4,boosting:!1,bump:0,offroad:!1},this.cars=[],this.finishers=[],this.time=n.time,this.seconds=0,this.overtakes=0,this.misses=0,this.result=null,this.nextCheckpoint=0,this.lastWarning=0,this.slip=0;for(let i=0;i<n.rivals;i++){const[r,a]=ou[i],o=Math.floor((i+1)/2),l=(i+1)%2?-.5:.5,c=mt*n.pace*(1.035-i*.016);this.cars.push({id:++this.carId,kind:"rival",name:r,color:a,z:We*(4+(n.rivals-i)*6+(t?60:0))+o*20,x:i===0?-.5:l,target:i===0?-.5:l,speed:t?c*.9:0,max:c,finished:0,passed:!1,bump:0})}for(let i=0;i<n.traffic;i++)this.spawnTraffic(We*(70+i*(this.length*.9/Math.max(1,n.traffic))));this.place=this.computePlace()}spawnTraffic(e){if(e>=this.finishZ-We*20)return;const t=[-.66,0,.66],n=t[Math.floor(this.random()*3)];this.cars.push({id:++this.carId,kind:"traffic",name:"Попутная машина",color:dl[Math.floor(this.random()*dl.length)],z:e,x:n,target:n,speed:mt*(.3+this.random()*.18),max:0,finished:0,passed:!0,bump:0})}start(e=this.track.id){this.load(e),this.phase="countdown",this.countdown=3.6,this.announce(this.track.name,3.2),this.onSound("count")}pause(e){e&&["countdown","racing"].includes(this.phase)?(this.paused=this.phase,this.phase="paused"):!e&&this.phase==="paused"&&(this.phase=this.paused)}toTitle(){this.load(this.track.id,!0),this.phase="title"}computePlace(){const e=this.player;let t=1;for(const n of this.cars)n.kind==="rival"&&(n.finished>0||n.z>e.z)&&t++;return t}step(e,t){if(this.phase==="paused")return;if(this.bannerTime=Math.max(0,this.bannerTime-e),this.popupTime=Math.max(0,this.popupTime-e),this.shake=Math.max(0,this.shake-e*2.6),this.flash=Math.max(0,this.flash-e*2),this.phase==="countdown"){const r=Math.ceil(this.countdown-.6);this.countdown-=e;const a=Math.ceil(this.countdown-.6);a!==r&&a>0&&this.onSound("count"),this.countdown<=.6&&(this.phase="racing",this.announce("СТАРТ!",1.2),this.onSound("go")),this.moveCars(e);return}if(this.phase==="title"&&this.player.z>this.finishZ-We*300){this.load(this.track.id,!0);return}const n=this.phase==="racing",i=n?t:this.autopilot();if(this.drive(e,i),this.moveCars(e),this.collide(),n){this.seconds+=e,this.time-=e;const r=this.player.z/We;for(;this.nextCheckpoint<this.track.checkpoints.length&&r>=this.track.checkpoints[this.nextCheckpoint].segment;){const o=this.track.checkpoints[this.nextCheckpoint].bonus;this.time+=o,this.nextCheckpoint++,this.flash=.6,this.announce(`КОНТРОЛЬНАЯ ТОЧКА  +${o} С`,2.2),this.onSound("checkpoint"),this.lastWarning=0}this.time<5.5&&Math.ceil(this.time)!==this.lastWarning&&this.time>0&&(this.lastWarning=Math.ceil(this.time),this.onSound("warning"));const a=this.computePlace();a<this.place&&(this.overtakes+=this.place-a,this.onSound("overtake")),this.place=a,this.player.z>=this.finishZ?this.finish():this.time<=0&&(this.time=0,this.phase="timeout",this.announce("ВРЕМЯ ВЫШЛО",4),this.onSound("timeout"))}}autopilot(){const e=this.player;let n=this.segmentAt(e.z+We*4).curve*.06;if(this.phase==="timeout")return{steer:vn((0-e.x)*2,-1,1),gas:0,brake:.4,nitro:!1};for(const r of this.cars){const a=r.z-e.z;a>0&&a<We*22&&Math.abs(r.x-e.x)<.45&&r.speed<e.speed&&(n=r.x>0?r.x-.7:r.x+.7)}const i=this.phase==="finished";return{steer:vn((n-e.x)*3,-1,1),gas:i?0:this.demo?.92:1,brake:i&&e.speed>mt*.35?.25:0,nitro:!1}}drive(e,t){const n=this.player,i=this.segmentAt(n.z),r=n.speed/mt,a=t.nitro&&n.nitro>0&&t.gas>0&&this.phase==="racing";a&&!n.boosting&&this.onSound("nitro"),n.boosting=a,a&&(n.nitro=Math.max(0,n.nitro-e*.38));const o=mt*(a?Xc:1);n.steer+=(vn(t.steer,-1,1)-n.steer)*Math.min(1,e*10);const l=e*2.3*Math.min(1,r*1.2+.08);n.x+=l*n.steer,n.x-=l*r*i.curve*Kc,t.gas>0?n.speed+=mt*e*t.gas*(a?.42:.25)*(1-r*.5):n.speed-=mt*e*.18,t.brake>0&&(n.speed-=mt*e*.9*t.brake),n.speed>o&&(n.speed=Math.max(o,n.speed-mt*e*.6)),n.offroad=Math.abs(n.x)>1.02,n.offroad&&n.speed>mt*.3&&(n.speed-=mt*e*.75),n.x=vn(n.x,-2.6,2.6),n.speed=Math.max(0,n.speed),n.bump=Math.max(0,n.bump-e),this.slip=0;for(const c of this.cars){const h=c.z-n.z;if(h>We&&h<We*9&&Math.abs(c.x-n.x)<.32&&r>.55){this.slip=1,n.nitro=Math.min(1,n.nitro+e*.11);break}}n.z=Math.min(n.z+n.speed*e,(this.segments.length-30)*We)}moveCars(e){const t=this.player,n=this.phase!=="countdown";for(const i of this.cars){if(i.bump=Math.max(0,i.bump-e),i.kind==="rival"){if(!n)continue;const a=this.segmentAt(i.z+We*6);let o=Math.min(i.max,mt*ru(a.curve)*.97);const l=(i.z-t.z)/We;!this.demo&&this.phase==="racing"&&(l<-80?o*=1.05:l>120&&(o*=.95)),i.finished&&(o=mt*.35),i.speed<o?i.speed=Math.min(o,i.speed+mt*e*.24*(1-i.speed/mt*.5)):i.speed+=(o-i.speed)*Math.min(1,e*1.5)}let r=!1;for(const a of this.cars)if(a!==i&&a.z>i.z&&a.z-i.z<We*14&&Math.abs(a.x-i.x)<.42&&a.speed<i.speed){r=!0;break}if(!r&&t.z>i.z&&t.z-i.z<We*12&&Math.abs(t.x-i.x)<.42&&t.speed<i.speed&&(r=!0),r&&i.kind==="rival"){const a=[-.66,0,.66].filter(o=>!this.cars.some(l=>l!==i&&l.z>i.z-We*2&&l.z-i.z<We*16&&Math.abs(l.x-o)<.4));a.length&&(i.target=a.reduce((o,l)=>Math.abs(l-i.x)<Math.abs(o-i.x)?l:o))}i.x+=vn(i.target-i.x,-e*1.1,e*1.1),i.z+=i.speed*e,i.kind==="rival"&&!i.finished&&i.z>=this.finishZ&&(this.finishers.push(i.id),i.finished=this.finishers.length),i.z=Math.min(i.z,(this.segments.length-12)*We)}for(let i=this.cars.length-1;i>=0;i--){const r=this.cars[i];r.kind==="traffic"&&r.z<t.z-We*60&&(this.cars.splice(i,1),this.spawnTraffic(t.z+We*(180+this.random()*120)))}}collide(){const e=this.player;if(e.offroad){const t=Math.floor(e.z/We);for(let n=t;n<=t+1;n++)for(const i of this.segments[n]?.props||[])if(!(!i.solid||Math.abs(e.x-i.offset)>(i.width+Fs)/2)){e.speed>mt*.12&&(this.onSound("crash"),this.shake=1,e.nitro=Math.max(0,e.nitro-.15)),e.speed=Math.min(e.speed,mt*.12),e.x+=e.x>i.offset?.18:-.18,e.z=Math.max(0,(n-1)*We),e.bump=.6;return}}for(const t of this.cars){const n=t.z-e.z,i=Math.abs(t.x-e.x);if(n>0&&n<Os&&i<Fs&&e.speed>t.speed){const a=e.speed-t.speed;e.speed=t.speed*.82,e.z=t.z-Os,e.x+=e.x<t.x?-.12:.12,t.x+=e.x<t.x?.08:-.08,t.speed=Math.min(t.speed+a*.15,t.max||t.speed*1.1),e.bump=.4,t.bump=.4,this.shake=Math.max(this.shake,.6),this.onSound("bump")}else n<0&&n>-Os&&i<Fs&&t.speed>e.speed&&(t.speed=e.speed*.85,t.z=e.z-Os,t.bump=.4);const r=t.z<e.z;r&&!t.passed&&this.phase==="racing"?(t.passed=!0,i<Fs+.2&&e.speed>mt*.6&&(this.misses++,e.nitro=Math.min(1,e.nitro+.2),this.pop("ВПРИТЫК  +НИТРО"),this.onSound("miss"))):!r&&t.passed&&t.z-e.z>We*2&&(t.passed=!1)}}finish(){this.place=this.computePlace(),this.phase="finished",this.flash=1,this.onSound("finish");const e=this.progress.best[this.track.id],t=!e||this.place<e.place||this.place===e.place&&this.seconds<e.time;this.result={track:this.track.id,place:this.place,time:this.seconds,overtakes:this.overtakes,misses:this.misses,best:t},t&&(this.progress.best[this.track.id]={time:this.seconds,place:this.place}),this.place<=3&&(this.progress.unlocked=Math.max(this.progress.unlocked,Math.min(this.tracks.length,this.trackIndex+2))),this.announce(this.place===1?"ПОБЕДА!":`ФИНИШ · ${this.place}-е место`,4),this.onResult(this.result)}restore(e){const t=e;if(!(!t||typeof t!="object")&&(Number.isInteger(t.unlocked)&&(this.progress.unlocked=vn(Number(t.unlocked),1,this.tracks.length)),t.best&&typeof t.best=="object"))for(const n of this.tracks){const i=t.best[n.id];i&&Number.isFinite(i.time)&&i.time>0&&Number.isInteger(i.place)&&i.place>=1&&i.place<=8&&(this.progress.best[n.id]={time:i.time,place:i.place})}}}const pl={coast:{sky:["#1a0d38","#7a2161","#ff8d4d"],fog:"#e9775c",ground:["#a8614f","#9c5849"],rumble:["#f7efe2","#e0383f"],road:["#4a3d55","#463a51"],lane:"#ffe9c4",far:"#4b1f57",near:"#2b1238",cap:"#ff9d6c",night:!1,glow:"#ffcf6b"},pass:{sky:["#03060f","#0c1834","#2b456e"],fog:"#1f3150",ground:["#14261f","#11221b"],rumble:["#e3e8f0","#bf3434"],road:["#2b2e38","#282b35"],lane:"#dfe4ee",far:"#1a2847",near:"#0b1627",cap:"#9fb3d6",night:!0,glow:"#d6e4ff"},city:{sky:["#060318","#2c0b4d","#ff2e88"],fog:"#3b1660",ground:["#16121f","#120f1b"],rumble:["#2ef2ff","#ff2e88"],road:["#25203a","#221d36"],lane:"#ffe66d",far:"#25103f",near:"#0f0a1d",cap:"#ff5fa8",night:!0,glow:"#7ff7ff"}},bi=260,uu=4.2,ml=.38,Mr=s=>[parseInt(s.slice(1,3),16),parseInt(s.slice(3,5),16),parseInt(s.slice(5,7),16)],Ht=s=>{const e=Math.sin(s*91.7+17.3)*43758.5453;return e-Math.floor(e)};function Vt(s,e){const t=document.createElement("canvas");return t.width=Math.max(1,Math.ceil(s)),t.height=Math.max(1,Math.ceil(e)),t}function tn(s,e,t,n,i,r){s.beginPath(),s.roundRect(e,t,n,i,r)}function du(s,e,t=1){const n=Vt(320,e==="van"?230:180),i=n.getContext("2d"),r=320,a=n.height,o=a-14,l=m=>{const[p,S,w]=Mr(s);return`rgb(${p*m|0},${S*m|0},${w*m|0})`};i.fillStyle="rgba(0,0,0,.42)",i.beginPath(),i.ellipse(r/2,o+4,150,14,0,0,Math.PI*2),i.fill(),i.fillStyle="#111",tn(i,24,o-44,52,48,9),i.fill(),tn(i,r-76,o-44,52,48,9),i.fill();const c=e==="van"?24:e==="sedan"?52:66,h=e==="van"?60:e==="sedan"?96:104;i.fillStyle=l(.75),i.beginPath();const u=e==="van"?34:e==="sedan"?62:74;i.moveTo(u,h),i.lineTo(u+18,c),i.lineTo(r-u-18,c),i.lineTo(r-u,h),i.closePath(),i.fill();const d=i.createLinearGradient(0,c,0,h);d.addColorStop(0,"#0c0f1c"),d.addColorStop(1,"#2a3350"),i.fillStyle=d,i.beginPath(),i.moveTo(u+10,h-4),i.lineTo(u+24,c+6),i.lineTo(r-u-24,c+6),i.lineTo(r-u-10,h-4),i.closePath(),i.fill(),i.fillStyle="rgba(255,255,255,.12)",i.beginPath(),i.moveTo(u+30,c+8),i.lineTo(u+60,c+8),i.lineTo(u+36,h-6),i.lineTo(u+16,h-6),i.closePath(),i.fill();const f=i.createLinearGradient(0,h,0,o);f.addColorStop(0,l(1.12)),f.addColorStop(.45,s),f.addColorStop(1,l(.55)),i.fillStyle=f,tn(i,12,h-4,r-24,o-h-6,e==="van"?10:22),i.fill(),i.fillStyle="rgba(255,255,255,.18)",i.fillRect(22,h,r-44,3),i.fillStyle=l(.35),i.fillRect(20,o-24,r-40,12),(e==="player"||e==="rival")&&(i.fillStyle="rgba(255,255,255,.7)",i.fillRect(r/2-6,h-2,12,o-h-26));const g=h+14,v=e==="player"||e==="rival"?14:18;return i.save(),i.shadowColor="#ff2a2a",i.shadowBlur=18*t,i.fillStyle=t>1.2?"#ff6a5a":"#e3242f",e==="player"||e==="rival"?(tn(i,26,g,r-52,v,6),i.fill(),i.fillStyle=l(.4),i.fillRect(120,g+2,80,v-4),i.fillStyle=t>1.2?"#ff6a5a":"#e3242f"):(tn(i,24,g,58,v,5),i.fill(),tn(i,r-82,g,58,v,5),i.fill()),i.restore(),i.fillStyle="#ffd0c4",i.fillRect(32,g+3,20,4),i.fillRect(r-52,g+3,20,4),i.fillStyle="#e8e4d6",tn(i,r/2-34,o-52,68,20,3),i.fill(),i.fillStyle="#1b1b24",i.font="bold 14px Arial",i.textAlign="center",i.textBaseline="middle",i.fillText(e==="player"?"ЗР 086":e==="rival"?"ГОНКА":"А 000",r/2,o-41),(e==="player"||e==="rival")&&(i.fillStyle=l(.5),i.fillRect(40,h-26,10,24),i.fillRect(r-50,h-26,10,24),i.fillStyle=l(.9),tn(i,26,h-34,r-52,12,4),i.fill(),i.fillStyle="#2b2b30",i.beginPath(),i.arc(r/2-34,o-14,9,0,Math.PI*2),i.arc(r/2+34,o-14,9,0,Math.PI*2),i.fill()),n}function gs(s,e,t,n,i,r=.6){const a=s.createRadialGradient(e,t,0,e,t,n),[o,l,c]=Mr(i);a.addColorStop(0,`rgba(${o},${l},${c},${r})`),a.addColorStop(1,`rgba(${o},${l},${c},0)`),s.fillStyle=a,s.fillRect(e-n,t-n,n*2,n*2)}function fu(s,e,t,n){const i=e;if(s==="palm"){const c=Vt(260,520),h=c.getContext("2d"),u=(i%2?1:-1)*(28+i*8);h.strokeStyle="#2b1430",h.lineWidth=16,h.lineCap="round",h.beginPath(),h.moveTo(130,515),h.quadraticCurveTo(130+u*.2,300,130+u,120),h.stroke(),h.strokeStyle="#ff9d6c66",h.lineWidth=4,h.beginPath(),h.moveTo(136,510),h.quadraticCurveTo(136+u*.2,300,136+u,124),h.stroke(),h.fillStyle="#24102c";const d=130+u,f=118;for(let g=0;g<8;g++){const v=-Math.PI/2+(g-3.5)*.44+(g>3?.15:-.15),m=105+Ht(g+i)*30;h.save(),h.translate(d,f),h.rotate(v),h.beginPath(),h.moveTo(0,0),h.quadraticCurveTo(m*.5,-26,m,22),h.quadraticCurveTo(m*.5,4,0,6),h.fill(),h.restore()}return{image:c,width:1.05}}if(s==="lamp"){const c=Vt(200,560),h=c.getContext("2d"),u=n>0?-1:1;h.fillStyle="#1d1a26",h.fillRect(96,60,10,500),h.fillRect(u>0?100:40,56,60,8);const d=u>0?150:50;return h.fillStyle="#2a2633",tn(h,d-22,52,44,14,5),h.fill(),gs(h,d,72,80,t.glow,t.night?.6:.4),h.fillStyle="#fff6da",h.fillRect(d-16,64,32,5),{image:c,width:.5}}if(s==="rock"){const c=Vt(320,220),h=c.getContext("2d"),u=h.createLinearGradient(0,0,0,220);u.addColorStop(0,t.night?"#3d4a63":"#7b4a63"),u.addColorStop(1,t.night?"#141b2a":"#3a1f37"),h.fillStyle=u,h.beginPath(),h.moveTo(10,220);for(let d=0;d<=8;d++){const f=10+d*37.5,g=60+Math.sin(d*1.7+i)*30+Ht(d+i*9)*40+(d===0||d===8?120:0);h.lineTo(f,g)}return h.lineTo(310,220),h.closePath(),h.fill(),h.fillStyle=t.night?"#9fb3d655":"#ff9d6c44",h.beginPath(),h.moveTo(80,90),h.lineTo(160,70),h.lineTo(120,120),h.closePath(),h.fill(),{image:c,width:1.15}}if(s==="billboard"){const c=["ЗАРЕВО","ВОЛНА 86.4","ЛЕТО","МОТЕЛЬ «ЧАЙКА»"],h=Vt(420,320),u=h.getContext("2d");u.fillStyle="#1c1324",u.fillRect(80,170,14,150),u.fillRect(326,170,14,150);const d=u.createLinearGradient(0,20,0,180);return d.addColorStop(0,["#ff5a36","#2ef2ff","#ffd36b","#ff2e88"][i]),d.addColorStop(1,["#7a1d52","#1d3d7a","#d0573a","#3a0f5c"][i]),u.fillStyle="#120b1a",u.fillRect(16,16,388,168),u.fillStyle=d,u.fillRect(24,24,372,152),u.fillStyle="rgba(255,255,255,.9)",u.font="italic 900 46px Arial",u.textAlign="center",u.textBaseline="middle",u.fillText(c[i],210,96),u.font="bold 16px Arial",u.fillStyle="rgba(255,255,255,.75)",u.fillText(["НОЧНАЯ ГОНКА","НА ВАШЕЙ ВОЛНЕ","КРУГЛЫЙ ГОД","12 КМ ВПЕРЕДИ"][i],210,146),{image:h,width:1.9}}if(s==="house"){const c=Vt(380,300),h=c.getContext("2d");h.fillStyle="#3a1a3f",h.fillRect(30,120,320,180),h.fillStyle="#2a1030",h.beginPath(),h.moveTo(10,126),h.lineTo(190,30),h.lineTo(370,126),h.closePath(),h.fill();for(let u=0;u<3;u++){const d=Ht(u+i*4)>.35;h.fillStyle=d?"#ffcf6b":"#1d0e22",h.fillRect(60+u*100,170,52,46),d&&gs(h,86+u*100,193,60,"#ffcf6b",.25)}return{image:c,width:2}}if(s==="pine"){const c=Vt(240,520),h=c.getContext("2d");h.fillStyle="#160d08",h.fillRect(112,420,16,100);for(let u=0;u<5;u++){const d=60+u*76,f=40+u*24;h.fillStyle=u%2?"#0f2a24":"#123129",h.beginPath(),h.moveTo(120,d-40),h.lineTo(120+f,d+70),h.lineTo(120-f,d+70),h.closePath(),h.fill(),h.fillStyle="#c8d8f0aa",h.beginPath(),h.moveTo(120,d-40),h.lineTo(120+f*.35,d+4),h.lineTo(120-f*.4,d+8),h.closePath(),h.fill()}return{image:c,width:.95}}if(s==="sign"){const c=Vt(300,260),h=c.getContext("2d");h.fillStyle="#22222a",h.fillRect(60,150,12,110),h.fillRect(228,150,12,110),h.fillStyle="#ffd23f",h.fillRect(20,40,260,120),h.fillStyle="#111";const u=n>0?-1:1;for(let d=0;d<3;d++){const f=70+d*80;h.beginPath(),h.moveTo(f-25*u,60),h.lineTo(f+25*u,100),h.lineTo(f-25*u,140),h.lineTo(f-5*u,140),h.lineTo(f+45*u,100),h.lineTo(f-5*u,60),h.closePath(),h.fill()}return h.save(),h.shadowColor="#ffd23f",h.shadowBlur=20,h.strokeStyle="#ffef9a",h.lineWidth=3,h.strokeRect(20,40,260,120),h.restore(),{image:c,width:1.05}}if(s==="rail"){const c=Vt(60,200),h=c.getContext("2d");return h.fillStyle="#d8dde6",tn(h,18,20,24,180,6),h.fill(),h.fillStyle="#202028",h.fillRect(18,60,24,22),h.save(),h.shadowColor="#ff3a3a",h.shadowBlur=14,h.fillStyle="#ff4a3a",h.fillRect(22,36,16,14),h.restore(),{image:c,width:.2}}if(s==="tower"){const c=10+i*5,h=Vt(360,120+c*44),u=h.getContext("2d"),d=h.height,f=u.createLinearGradient(0,0,360,0);f.addColorStop(0,"#1a1230"),f.addColorStop(1,"#0c0818"),u.fillStyle=f,u.fillRect(20,60,320,d-60),u.fillStyle="#120c22",u.fillRect(150,10,8,52),u.save(),u.shadowColor="#ff2e4d",u.shadowBlur=16,u.fillStyle="#ff4a5e",u.fillRect(147,6,14,10),u.restore();const g=["#ffd36b","#7ff7ff","#ff8ad1","#fff1c4"];for(let v=0;v<c;v++)for(let m=0;m<6;m++){const p=Ht(v*13+m*7+i*101)>.45;u.fillStyle=p?g[(v+m+i)%4]:"#1e1636",u.globalAlpha=p?.85:1,u.fillRect(42+m*50,86+v*44,30,24)}return u.globalAlpha=1,u.fillStyle=["#2ef2ff","#ff2e88","#ffe66d","#9d6bff"][i],u.fillRect(20,60,320,5),{image:h,width:2.4}}const r=["КИНО","24 ЧАСА","ДИСКО","ОТЕЛЬ"],a=["#ff2e88","#2ef2ff","#ffe66d","#b46bff"][i],o=Vt(420,300),l=o.getContext("2d");return l.fillStyle="#120c1c",l.fillRect(196,180,28,120),l.fillStyle="#0d0816",tn(l,14,20,392,160,18),l.fill(),gs(l,210,100,230,a,.35),l.save(),l.shadowColor=a,l.shadowBlur=26,l.strokeStyle=a,l.lineWidth=6,tn(l,26,32,368,136,14),l.stroke(),l.fillStyle="#fff",l.font="italic 900 62px Arial",l.textAlign="center",l.textBaseline="middle",l.fillText(r[i],210,102),l.restore(),{image:o,width:1.6}}function gl(s,e,t,n,i,r){const a=ms/t;return{x:n/2+a*s*n/2,y:i-a*e*r,w:a*gi*n/2,s:a}}function pu(s,e,t,n,i,r,a,o,l){const c=s.index*We-r;return{a:gl(t.near[e]-n,s.y1-i,c,a,o,l),b:gl(t.far[e]-n,s.y2-i,c+We,a,o,l)}}class mu{canvas;world;ctx;w=1;h=1;ratio=1;inset=0;horizon=1;vscale=1;theme;palette=pl.coast;sky;far;near;sprites=new Map;cars=new Map;farX=0;nearX=0;clock=0;proj=[];dust=[];constructor(e,t){const n=e.getContext("2d",{alpha:!1});if(!n)throw new Error("Браузер не поддерживает Canvas 2D.");this.canvas=e,this.world=t,this.ctx=n,this.theme="";for(let i=0;i<=bi;i++)this.proj.push({x1:0,y1:0,w1:0,s1:0,x2:0,y2:0,w2:0,s2:0,clip:0,fog:1,visible:!1});this.resize()}resize(){const e=this.canvas.getBoundingClientRect();this.ratio=Math.min(window.devicePixelRatio||1,e.width>1400?1.25:1.6),this.w=Math.max(320,Math.round(e.width*this.ratio)),this.h=Math.max(240,Math.round(e.height*this.ratio)),this.canvas.width=this.w,this.canvas.height=this.h,this.theme="",this.layout()}layout(){const e=this.w/this.h<.85;this.horizon=this.h*(e?.4:.5),this.vscale=this.h*(1-this.inset)-this.horizon,this.theme=""}prepare(){const e=this.world.track.theme;if(e===this.theme)return;this.theme=e;const t=this.palette=pl[e],n=this.w,i=this.h;this.sprites.clear();const r=this.sky=Vt(n,i/2+4),a=r.getContext("2d"),o=a.createLinearGradient(0,0,0,i/2);if(o.addColorStop(0,t.sky[0]),o.addColorStop(.6,t.sky[1]),o.addColorStop(1,t.sky[2]),a.fillStyle=o,a.fillRect(0,0,n,i/2+4),t.night)for(let g=0;g<220;g++){a.fillStyle=`rgba(255,255,255,${.25+Ht(g)*.6})`;const v=Ht(g*3)>.93?2:1;a.fillRect(Ht(g*7)*n,Ht(g*11)*i*.42,v*this.ratio,v*this.ratio)}if(e==="pass"&&(gs(a,n*.74,i*.14,i*.18,"#cfe0ff",.35),a.fillStyle="#eef3ff",a.beginPath(),a.arc(n*.74,i*.14,i*.045,0,Math.PI*2),a.fill(),a.fillStyle="#d6dff3",a.beginPath(),a.arc(n*.735,i*.135,i*.012,0,Math.PI*2),a.arc(n*.752,i*.152,i*.008,0,Math.PI*2),a.fill()),e==="city"){const g=a.createLinearGradient(0,i*.32,0,i/2);g.addColorStop(0,"rgba(255,46,136,0)"),g.addColorStop(1,"rgba(255,90,170,.55)"),a.fillStyle=g,a.fillRect(0,i*.32,n,i*.18)}const l=Math.max(1400,n*1.6);this.far=Vt(l,i*.3);const c=this.far.getContext("2d"),h=this.far.height;this.near=Vt(l,i*.22);const u=this.near.getContext("2d"),d=this.near.height;if(e==="coast"){const g=c.createLinearGradient(0,h*.05,0,h);g.addColorStop(0,"#ffe27a"),g.addColorStop(1,"#ff3f7d");const v=l*.5,m=h*.78,p=h*.62;gs(c,v,m,p*1.7,"#ff9d5c",.35),c.save(),c.beginPath(),c.arc(v,m,p,0,Math.PI*2),c.clip(),c.fillStyle=g,c.fillRect(v-p,m-p,p*2,p*2);for(let S=0;S<7;S++){const w=m-p*.05+S*p*.13;c.clearRect(v-p,w,p*2,2+S*1.6)}c.restore()}const f=(g,v,m,p,S,w,M)=>{g.fillStyle=m,g.beginPath(),g.moveTo(0,v);const b=[];for(let T=0;T<=M;T++){const A=T/M*l,x=T%M,E=v*(1-S*(.35+.65*Math.abs(Math.sin(x*.9+w)*.6+Math.sin(x*2.3+w*3)*.4)));b.push([A,T===M?b[0][1]:E])}for(const[T,A]of b)g.lineTo(T,A);if(g.lineTo(l,v),g.closePath(),g.fill(),p){g.save(),g.clip(),g.fillStyle=p,g.beginPath(),g.moveTo(0,0);for(let T=0;T<=l;T+=l/(M*6))g.lineTo(T,v*(1-S*.66)+Math.sin(T*.05+w)*v*.03+Ht(T)*v*.05);g.lineTo(l,0),g.closePath(),g.fill(),g.restore()}};if(e==="city"){const g=(v,m,p,S,w,M)=>{let b=0;for(;b<l;){const T=M+Ht(b+w)*M*1.4,A=m*(.35+Ht(b*1.3+w)*.62);v.fillStyle=p,v.fillRect(b,m-A,T-2,A);for(let x=m-A+8;x<m-6;x+=9)for(let E=b+5;E<b+T-8;E+=8)Ht(E*.7+x*1.9+w)<S&&(v.fillStyle=["#ffd36b","#7ff7ff","#ff8ad1"][Math.floor(Ht(E+x)*3)],v.globalAlpha=.65,v.fillRect(E,x,3,4),v.globalAlpha=1);Ht(b+w*2)>.7&&(v.fillStyle=["#ff2e88","#2ef2ff"][Math.floor(Ht(b)*2)],v.fillRect(b,m-A,T-2,2)),b+=T}};g(c,h,t.far,.18,3,40*this.ratio),g(u,d,t.near,.1,9,70*this.ratio)}else f(c,h,t.far,e==="pass"?t.cap:null,e==="pass"?.92:.55,1.3,14),f(u,d,t.near,null,e==="pass"?.7:.45,4.1,22),e==="coast"&&(u.fillStyle="#ff9d6c33",u.fillRect(0,d-3,l,3))}sprite(e,t,n){const i=e==="sign"||e==="lamp"?`${e}${t}${n>0?1:-1}`:e+t;let r=this.sprites.get(i);return r||(r=fu(e,t,this.palette,n),this.sprites.set(i,r)),r}carSprite(e,t=1){const n=e===null?"player":e.kind==="rival"?"rival":e.id%3===0?"van":"sedan",i=e===null?"#ff5a36":e.color,r=n+i+t;let a=this.cars.get(r);return a||(a=du(i,n,t),this.cars.set(r,a)),a}mix(e,t,n){const i=Mr(e),r=Mr(t);return`rgb(${i[0]+(r[0]-i[0])*n|0},${i[1]+(r[1]-i[1])*n|0},${i[2]+(r[2]-i[2])*n|0})`}poly(e,t,n,i,r,a,o){const l=this.ctx;l.fillStyle=o,l.beginPath(),l.moveTo(e-n,t),l.lineTo(i-a,r),l.lineTo(i+a,r),l.lineTo(e+n,t),l.closePath(),l.fill()}draw(e){this.prepare(),this.clock+=e;const t=this.ctx,n=this.w,i=this.h,r=this.world,a=this.palette,o=r.player,l=r.segments,c=Math.max(0,o.z-ul),h=r.segmentAt(c),u=c%We/We,d=r.segmentAt(o.z),f=o.z%We/We,g=d.y1+(d.y2-d.y1)*f,v=g+Wc,m=o.x*gi,p=o.speed/mt,S=r.shake*8*this.ratio;t.save(),S>0&&t.translate((Math.random()-.5)*S,(Math.random()-.5)*S),r.phase!=="paused"&&(this.farX+=d.curve*p*e*.0018*n,this.nearX+=d.curve*p*e*.0042*n);const w=this.horizon,M=this.vscale;t.drawImage(this.sky,0,0,n,w+4);const b=(E,C,L)=>{const N=E.width;let I=(C%N+N)%N;t.drawImage(E,-I,L),t.drawImage(E,N-I,L),N*2-I<n&&t.drawImage(E,N*2-I,L)};b(this.far,this.farX,w-this.far.height+2),b(this.near,this.nearX,w-this.near.height+3),t.fillStyle=a.fog,t.fillRect(0,w,n,i-w+2);let T=i;const A=cu(l,h.index,u,bi);for(let E=0;E<bi;E++){const C=this.proj[E];C.visible=!1;const L=l[h.index+E];if(!L)break;const N=L.index*We-c;if(C.clip=T,N<=ms)continue;const{a:I,b:P}=pu(L,E,A,m,v,c,n,w,M);Object.assign(C,{x1:I.x,y1:I.y,w1:I.w,s1:I.s,x2:P.x,y2:P.y,w2:P.w,s2:P.s});const O=E/bi;if(C.fog=1/Math.exp(O*O*uu),P.y>=I.y||P.y>=T)continue;C.visible=!0;const z=Math.floor(L.index/3)%2,H=1-C.fog,Q=Math.max(0,P.y),X=Math.min(i,I.y);t.fillStyle=this.mix(a.ground[z],a.fog,H),t.fillRect(0,Q,n,X-Q+1);const q=I.w/(z?7:6.5),Y=P.w/(z?7:6.5);if(this.poly(I.x,I.y,I.w+q,P.x,P.y,P.w+Y,this.mix(a.rumble[z],a.fog,H)),this.poly(I.x,I.y,I.w,P.x,P.y,P.w,this.mix(a.road[z],a.fog,H)),L.checkpoint!==0)for(let oe=0;oe<12;oe++){const Ie=-1+oe*2/12,ze=Ie+2/12;t.fillStyle=this.mix(oe%2?"#f6f1e8":"#14101c",a.fog,H),t.beginPath(),t.moveTo(I.x+I.w*Ie,I.y),t.lineTo(P.x+P.w*Ie,P.y),t.lineTo(P.x+P.w*ze,P.y),t.lineTo(I.x+I.w*ze,I.y),t.fill()}else if(z){const ve=I.w/40,oe=P.w/40;for(const Ie of[-1/3,1/3])this.poly(I.x+I.w*Ie,I.y,ve,P.x+P.w*Ie,P.y,oe,this.mix(a.lane,a.fog,H))}T=P.y}if(a.night){t.save(),t.globalCompositeOperation="lighter";const E=t.createRadialGradient(n/2,w+M*.5,0,n/2,w+M*.5,n*.42);E.addColorStop(0,"rgba(255,236,200,.16)"),E.addColorStop(1,"rgba(255,236,200,0)"),t.fillStyle=E,t.fillRect(0,w,n,i-w),t.restore()}const x=new Map;for(const E of r.cars){const C=Math.floor(E.z/We);if(C>=h.index&&C<h.index+bi){const L=x.get(C);L?L.push(E):x.set(C,[E])}}for(let E=bi-1;E>0;E--){const C=this.proj[E],L=l[h.index+E];if(!L||L.index*We-c<=ms)continue;t.globalAlpha=vn(C.fog*1.6,0,1);for(const I of L.props){const P=this.sprite(I.kind,I.variant,Math.sign(I.offset));this.blit(P.image,P.width,C.s1,C.x1+C.s1*I.offset*gi*n/2,C.y1,C.clip,I.offset<0?-1:0)}L.checkpoint!==0&&this.arch(C,L.checkpoint<0);const N=x.get(L.index);if(N)for(const I of N.sort((P,O)=>O.z-P.z)){const P=I.z%We/We,O=C.s1+(C.s2-C.s1)*P,z=C.x1+(C.x2-C.x1)*P+O*I.x*gi*n/2,H=C.y1+(C.y2-C.y1)*P,Q=this.carSprite(I,I.kind==="rival"||a.night?1.4:1),X=this.blit(Q,ml,O,z+(I.bump>0?Math.sin(this.clock*60)*3:0),H,C.clip,-.5);if(I.kind==="rival"&&E>2&&E<40){const q=I.name.split(" ")[0].replace(/[«»]/g,"");t.font=`bold ${Math.max(10,13*this.ratio)}px Arial`,t.textAlign="center",t.fillStyle="rgba(255,255,255,.75)";const Y=H-X-8*this.ratio;Y<C.clip&&t.fillText(q,z,Y)}}}t.globalAlpha=1,this.player(p,d,g,v),this.particles(e,p),r.player.boosting&&this.speedLines(),t.restore(),r.flash>0&&(t.fillStyle=`rgba(255,240,220,${r.flash*.35})`,t.fillRect(0,0,n,i))}blit(e,t,n,i,r,a,o){const l=this.w,c=t*gi*n*l/2,h=c*e.height/e.width;if(c<1||c>l*4)return 0;const u=i+c*o,d=r-h,f=Math.max(0,r-a);return f>=h||this.ctx.drawImage(e,0,0,e.width,e.height*(1-f/h),u,d,c,h-f),h}arch(e,t){const n=this.ctx,i=this.w,r=e.s1,a=e.w1*1.18,o=gi*.95*r*i/2,l=e.x1,c=e.y1;if(o<2||c-o>e.clip)return;n.save(),n.beginPath(),n.rect(0,0,i,e.clip),n.clip();const h=Math.max(2,a*.035);n.fillStyle="#16101f",n.fillRect(l-a-h,c-o,h,o),n.fillRect(l+a,c-o,h,o);const u=o*.22;if(n.fillStyle=t?"#14101c":"#ff5a36",n.fillRect(l-a-h,c-o,a*2+h*2,u),t)for(let f=0;f<16;f++)for(let g=0;g<2;g++)(f+g)%2&&(n.fillStyle="#f6f1e8",n.fillRect(l-a+f*a*2/16,c-o+g*u/2,a*2/16+1,u/2+1));else n.fillStyle="#fff3e0",n.font=`italic 900 ${u*.62}px Arial`,n.textAlign="center",n.textBaseline="middle",n.fillText("КОНТРОЛЬНАЯ ТОЧКА",l,c-o+u/2);n.restore()}player(e,t,n,i){const r=this.ctx,a=this.w;this.h;const o=this.world.player,l=ms/ul,c=this.horizon-l*(n-i)*this.vscale,h=(o.offroad&&o.speed>0?Math.sin(this.clock*55)*3:Math.sin(this.clock*30)*e*1.2)*this.ratio,u=this.world.phase==="finished"||this.world.phase==="timeout",d=this.carSprite(null,u?1.8:1.2),f=ml*gi*l*a/2,g=f*d.height/d.width;if(r.save(),r.translate(a/2,c+h),r.rotate(o.steer*.035),r.transform(1,0,-o.steer*.08,1,0,0),r.drawImage(d,-f/2,-g,f,g),o.boosting){r.globalCompositeOperation="lighter";for(const v of[-1,1]){const m=v*f*.106,p=-g*.078,S=f*(.045+Math.random()*.02),w=r.createRadialGradient(m,p,0,m,p,S*2.4);w.addColorStop(0,"rgba(235,250,255,.95)"),w.addColorStop(.35,"rgba(110,190,255,.7)"),w.addColorStop(1,"rgba(90,70,255,0)"),r.fillStyle=w,r.beginPath(),r.arc(m,p,S*2.4,0,Math.PI*2),r.fill()}}r.restore()}particles(e,t){const n=this.world.player,i=this.ctx,r=this.w,a=this.h;if(n.offroad&&t>.1&&this.world.phase!=="paused")for(let o=0;o<2;o++)this.dust.push({x:r/2+(Math.random()-.5)*r*.3,y:this.horizon+this.vscale*.95,vx:(Math.random()-.5)*r*.4,vy:-Math.random()*a*.25,life:.6,color:this.palette.ground[0],size:(6+Math.random()*14)*this.ratio});if(this.world.shake>.9)for(let o=0;o<14;o++)this.dust.push({x:r/2+(Math.random()-.5)*r*.25,y:this.horizon+this.vscale*.88,vx:(Math.random()-.5)*r*.9,vy:-Math.random()*a*.6,life:.45,color:"#ffd36b",size:3*this.ratio});for(const o of this.dust)o.life-=e,o.x+=o.vx*e,o.y+=o.vy*e,o.vy+=a*.8*e;this.dust=this.dust.filter(o=>o.life>0).slice(-160);for(const o of this.dust)i.globalAlpha=vn(o.life*1.6,0,.8),i.fillStyle=o.color,i.fillRect(o.x,o.y,o.size,o.size);i.globalAlpha=1}speedLines(){const e=this.ctx,t=this.w,n=this.h;e.save(),e.strokeStyle="rgba(200,240,255,.35)",e.lineWidth=2*this.ratio;for(let i=0;i<26;i++){const r=Math.random()*Math.PI*2,a=Math.max(t,n)*(.35+Math.random()*.2),o=a+Math.max(t,n)*(.12+Math.random()*.15);e.beginPath(),e.moveTo(t/2+Math.cos(r)*a,this.horizon+Math.sin(r)*a*.6),e.lineTo(t/2+Math.cos(r)*o,this.horizon+Math.sin(r)*o*.6),e.stroke()}e.restore()}dispose(){this.sprites.clear(),this.cars.clear(),this.dust=[]}}class gu{context;master;music;muted=!1;engine;noise;next=0;step=0;async unlock(){try{if(!this.context){const e=this.context=new AudioContext;this.master=e.createGain(),this.master.gain.value=this.muted?0:.5,this.master.connect(e.destination),this.music=e.createGain(),this.music.gain.value=.22,this.music.connect(this.master);const t=this.noise=e.createBuffer(1,e.sampleRate,e.sampleRate),n=t.getChannelData(0);for(let l=0;l<n.length;l++)n[l]=Math.random()*2-1;const i=e.createOscillator(),r=e.createOscillator(),a=e.createBiquadFilter(),o=e.createGain();i.type="sawtooth",r.type="square",a.type="lowpass",a.frequency.value=600,a.Q.value=4,o.gain.value=0,i.connect(a),r.connect(a),a.connect(o),o.connect(this.master),i.start(),r.start(),this.engine={a:i,b:r,filter:a,gain:o}}this.context.state==="suspended"&&await this.context.resume()}catch{}}setMuted(e){this.muted=e,this.master&&this.context&&this.master.gain.setTargetAtTime(e?0:.5,this.context.currentTime,.05)}tone(e,t,n,i="square",r=0,a,o){const l=this.context;if(!l||!this.master||l.state!=="running")return;const c=l.createOscillator(),h=l.createGain(),u=l.currentTime+r;c.type=i,c.frequency.setValueAtTime(e,u),a&&c.frequency.exponentialRampToValueAtTime(a,u+t),h.gain.setValueAtTime(0,u),h.gain.linearRampToValueAtTime(n,u+.01),h.gain.exponentialRampToValueAtTime(1e-4,u+t),c.connect(h),h.connect(o||this.master),c.start(u),c.stop(u+t+.05)}hiss(e,t,n,i,r=0,a){const o=this.context;if(!o||!this.master||!this.noise||o.state!=="running")return;const l=o.createBufferSource(),c=o.createBiquadFilter(),h=o.createGain(),u=o.currentTime+r;l.buffer=this.noise,c.type="bandpass",c.Q.value=1.2,c.frequency.setValueAtTime(n,u),c.frequency.exponentialRampToValueAtTime(i,u+e),h.gain.setValueAtTime(t,u),h.gain.exponentialRampToValueAtTime(1e-4,u+e),l.connect(c),c.connect(h),h.connect(a||this.master),l.start(u,Math.random()*.5),l.stop(u+e+.05)}play(e){e==="count"&&this.tone(440,.18,.25),e==="go"&&(this.tone(880,.5,.28),this.tone(1320,.5,.12,"triangle")),e==="checkpoint"&&[523,659,784,1046].forEach((t,n)=>this.tone(t,.22,.18,"square",n*.07)),e==="bump"&&(this.hiss(.25,.6,900,200),this.tone(90,.25,.35,"sine",0,40)),e==="crash"&&(this.hiss(.7,.9,2400,120),this.tone(70,.6,.5,"sawtooth",0,30)),e==="nitro"&&(this.hiss(.9,.5,300,3200),this.tone(220,.8,.08,"sawtooth",0,660)),e==="miss"&&this.hiss(.3,.45,3e3,700),e==="overtake"&&this.tone(1200,.08,.08,"triangle"),e==="warning"&&this.tone(1560,.09,.16,"square"),e==="finish"&&[523,659,784,1046,784,1046,1318].forEach((t,n)=>this.tone(t,.32,.18,n%2?"triangle":"square",n*.11)),e==="timeout"&&[392,330,262,196].forEach((t,n)=>this.tone(t,.42,.2,"sawtooth",n*.18))}update(e,t,n,i){const r=this.context,a=this.engine;if(!r||!a||r.state!=="running")return;const o=r.currentTime,l=Math.min(5,Math.floor(e*5.2)),h=48+(e<=0?0:.3+(e*5.2-l)*.7)*110+l*14+(n?30:0);if(a.a.frequency.setTargetAtTime(h,o,.05),a.b.frequency.setTargetAtTime(h*.5,o,.05),a.filter.frequency.setTargetAtTime(400+e*1600,o,.08),a.gain.gain.setTargetAtTime(t?.05+e*.07:0,o,.1),!i){this.next=Math.max(this.next,o);return}const u=60/112/2;this.next<o&&(this.next=o+.05);const d=[220,174.6,261.6,196],f=[[0,3,7],[0,4,7],[0,4,7],[0,4,7]];for(;this.next<o+.25;){const g=this.step++,v=Math.floor(g/16)%4,m=d[v],p=this.next-o;g%2===0&&this.tone(m/2,u*.9,.35,"sawtooth",p,void 0,this.music),g%4===0&&this.tone(150,.18,.7,"sine",p,45,this.music),g%4===2&&this.hiss(.05,.25,8e3,6e3,p,this.music),g%8===4&&this.hiss(.18,.4,1800,900,p,this.music);const S=f[v][g%3]+(g%6>2?12:0);this.tone(m*2*Math.pow(2,S/12),u*.8,.09,"triangle",p,void 0,this.music),this.next+=u}}dispose(){try{this.engine?.a.stop(),this.engine?.b.stop(),this.context?.close()}catch{}this.context=void 0,this.engine=void 0}}const _u=1.34,Bs=s=>`${Math.floor(s/60)}:${(s%60).toFixed(1).padStart(4,"0")}`,xu={coast:"Закат, пальмы и широкие виражи",pass:"Ночь, серпантин и крутые перепады",city:"Неон, плотный трафик и узкие окна"},_l={coast:"ЗАКАТ",pass:"НОЧЬ",city:"НЕОН"},vu=[{id:"zarevo.section",name:"Участок трассы",fields:[{name:"enter",label:"Въезд, сегменты",type:"number",default:30,min:0,max:500},{name:"hold",label:"Длина, сегменты",type:"number",default:100,min:1,max:1e3},{name:"leave",label:"Выезд, сегменты",type:"number",default:30,min:0,max:500},{name:"curve",label:"Поворот (− влево, + вправо)",type:"number",default:0,min:-8,max:8,step:.5},{name:"hill",label:"Перепад высоты",type:"number",default:0,min:-120,max:120}]},{id:"zarevo.checkpoint",name:"Контрольная точка",fields:[{name:"segment",label:"Сегмент",type:"number",default:500,min:10,max:12e3},{name:"bonus",label:"Бонус, с",type:"number",default:20,min:0,max:60,unit:"с"}]},{id:"zarevo.scenery",name:"Ряд декораций",fields:[{name:"kind",label:"Вид",type:"select",default:"palm",options:[["palm","Пальмы"],["lamp","Фонари"],["rock","Скалы"],["billboard","Щиты"],["house","Домики"],["pine","Ели"],["sign","Знаки поворота"],["rail","Столбики"],["tower","Небоскрёбы"],["neon","Неоновые вывески"]].map(([s,e])=>({value:s,label:e}))},{name:"side",label:"Сторона",type:"select",default:"both",options:[{value:"left",label:"Слева"},{value:"right",label:"Справа"},{value:"both",label:"С обеих сторон"}]},{name:"from",label:"С сегмента",type:"number",default:0,min:0,max:12e3},{name:"to",label:"До сегмента",type:"number",default:1e3,min:0,max:12e3},{name:"every",label:"Шаг",type:"number",default:20,min:2,max:1e3},{name:"offset",label:"Отступ от края",type:"number",default:1.4,min:1.05,max:6,step:.05}]}];async function Mu(s){await eu(()=>Promise.resolve({}),__vite__mapDeps([0]),import.meta.url);const e=s.snapshot.manifest,t=e.scenes.map(j=>s.snapshot.scenes[j.id]).filter(Boolean);for(const j of t)s.registry.validate(j,e);const n=s.container,i=document.title;document.title=e.name,n.classList.add("zarevo");const r=new hu(t),a=()=>new mu(h(".z-canvas"),r),o=new gu,l=r.tracks.findIndex(j=>j.id===s.sceneId);l>0&&r.load(r.tracks[l].id,!0);const c=j=>{const ae=r.tracks.find(re=>re===j)?r.length:1;return j.checkpoints.map(re=>`<i class="z-tick" style="left:${re.segment/ae*100}%"></i>`).join("")};n.innerHTML=`<canvas class="z-canvas" tabindex="0" aria-label="Зарево — аркадная гонка"></canvas><div class="z-vignette"></div><div class="z-scan"></div>
 <section class="z-title"><header><a class="z-brand" href="https://gadaev-sergey.github.io/shelter-arcade/" target="_blank" rel="noopener">SHELTER <i>/</i> ARCADE</a><span class="z-live"><i></i> НОЧНАЯ ЛИГА · ВОЛНА 86.4</span><button class="z-chip" data-action="sound">ЗВУК ВКЛ.</button></header>
 <div class="z-intro"><div class="z-eyebrow">АРКАДНЫЕ ГОНКИ · 3 ТРАССЫ · 8 МАШИН</div><h1>ЗАРЕВО<span>НОЧНАЯ ГОНКА</span></h1><p>Восемь машин на старте и один таймер. Обгоняй впритык, копи нитро и успевай к контрольным точкам, пока не погасло зарево.</p></div>
 <div class="z-tracks" role="radiogroup" aria-label="Выбор трассы"></div>
 <div class="z-start"><button class="z-primary" data-action="start">НА СТАРТ <span>↗</span></button><button class="z-text" data-action="help">Управление и правила</button></div>
 <footer><span><kbd>← →</kbd> руль</span><span><kbd>↑</kbd> газ</span><span><kbd>↓</kbd> тормоз</span><span><kbd>ПРОБЕЛ</kbd> нитро</span><em>Shelter Engine · оригинальная графика и звук</em></footer></section>
 <div class="z-hud" hidden><header class="z-top"><div class="z-stage"><small data-stage-num></small><strong data-stage-name></strong><div class="z-progress"><b data-progress></b><span data-ticks></span><em data-dot></em></div></div>
 <div class="z-timer"><small>ВРЕМЯ</small><b data-time>0</b><span data-bonus></span></div>
 <div class="z-right"><div class="z-place"><b data-place>8</b><span data-of>/8</span><small>МЕСТО</small></div><div class="z-buttons"><button class="z-round" data-action="sound" aria-label="Выключить звук">♪</button><button class="z-round" data-action="pause" aria-label="Пауза">Ⅱ</button></div></div></header>
 <div class="z-count" aria-live="assertive"></div><div class="z-banner" role="status"></div><div class="z-popup"></div>
 <footer class="z-bottom"><div class="z-elapsed"><small>НА ТРАССЕ</small><b data-elapsed>0:00.0</b><span data-cp></span></div>
 <div class="z-speedo"><svg viewBox="0 0 200 120" aria-hidden="true"><path class="z-arc-bg" d="M20 110 A80 80 0 0 1 180 110"/><path class="z-arc" data-arc d="M20 110 A80 80 0 0 1 180 110"/></svg><b data-speed>0</b><small>КМ/Ч</small>
 <div class="z-nitro"><span>НИТРО</span><div><i data-nitro></i></div><em data-slip>ТЯГА</em></div></div></footer></div>
 <section class="z-modal" hidden role="dialog" aria-modal="true" aria-labelledby="z-modal-title"><div class="z-panel"></div></section>
 <div class="z-touch" hidden><div><button data-touch="left" aria-label="Влево">◀</button><button data-touch="right" aria-label="Вправо">▶</button></div><div><button data-touch="brake">ТОРМОЗ</button><button data-touch="nitro">НИТРО</button></div></div>`;const h=j=>n.querySelector(j);let u;try{u=a()}catch(j){throw n.innerHTML='<div style="padding:40px;color:white;background:#140b24">Для «Зарева» нужен браузер с поддержкой Canvas.</div>',j}const d=new AbortController,f=new Set,g=new Set;let v=matchMedia("(pointer:coarse)").matches;n.classList.toggle("z-mobile",v);const m=wa(e.projectId,"progress","career"),p=wa(e.projectId,"settings","audio");let S=r.trackIndex,w="",M=!1,b=0,T=performance.now(),A=0,x=0,E="",C=0,L=0,N=0;if(s.savePolicy==="persistent")try{r.restore(JSON.parse(localStorage.getItem(m)||"null")),o.setMuted(localStorage.getItem(p)==="muted")}catch{}S=Math.min(S,r.progress.unlocked-1);const I=()=>{if(s.savePolicy==="persistent")try{localStorage.setItem(m,JSON.stringify(r.progress))}catch{}};r.onSound=j=>o.play(j),r.onResult=()=>I();const P=(j,ae,re)=>j.addEventListener(ae,re,{signal:d.signal}),O=(j,ae,re=!1)=>`<button class="${re?"z-primary":"z-secondary"}" data-action="${j}">${ae}${re?" <span>↗</span>":""}</button>`;function z(){f.clear(),g.clear(),n.querySelectorAll("[data-touch].pressed").forEach(j=>j.classList.remove("pressed"))}function H(){w="",h(".z-modal").hidden=!0,z(),Qe.focus({preventScroll:!0})}function Q(j=S){const ae=r.tracks[j];!ae||j>=r.progress.unlocked||(S=j,o.unlock(),C=0,H(),r.start(ae.id),h("[data-ticks]").innerHTML=c(ae),N=r.time,Ie())}function X(){["countdown","racing"].includes(r.phase)&&(r.pause(!0),oe("pause"),Ie())}function q(){r.pause(!1),H(),Ie()}function Y(){H(),r.load(r.tracks[S].id,!0),r.phase="title",ve(),Ie()}function ve(){h(".z-tracks").innerHTML=r.tracks.map((j,ae)=>{const re=ae>=r.progress.unlocked,Ae=r.progress.best[j.id],Ze=(r.tracks[ae]===r.track?r.length:j.sections.reduce((Oe,Je)=>Oe+Je.enter+Je.hold+Je.leave,0))*_u/1e3;return`<button class="z-track z-${j.theme}${ae===S?" selected":""}" role="radio" aria-checked="${ae===S}" data-track="${ae}" ${re?'aria-disabled="true"':""}><small>${String(ae+1).padStart(2,"0")} · ${_l[j.theme]}</small><strong>${j.name}</strong><p>${xu[j.theme]}</p>
   <footer>${re?`<span class="z-lock">⌁ Финишируй в тройке на «${r.tracks[ae-1].name}»</span>`:Ae?`<span>Рекорд <b>${Bs(Ae.time)}</b></span><span>${Ae.place}-е место</span>`:`<span>${Ze.toFixed(1)} км</span><span>${j.checkpoints.length} КТ</span>`}</footer></button>`}).join("")}function oe(j){w=j,z();const ae=h(".z-panel"),re=r.track,Ae=r.result;if(h(".z-modal").hidden=!1,ae.className="z-panel z-"+j,j==="pause"&&(ae.innerHTML=`<div class="z-eyebrow">${re.name} · ${Bs(r.seconds)}</div><h2 id="z-modal-title">ПАУЗА</h2><p>Таймер остановлен. Соперники тоже ждут.</p>${O("resume","ПРОДОЛЖИТЬ",!0)}${O("restart","Начать трассу заново")}${O("help","Управление и правила")}${O("title","В главное меню")}<small>ESC / P — продолжить</small>`),j==="help"&&(ae.innerHTML=`<div class="z-eyebrow">ПРАВИЛА НОЧНОЙ ЛИГИ</div><h2 id="z-modal-title">ГАЗ В ПОЛ.<br>ГОЛОВА ХОЛОДНАЯ.</h2>
  <div class="z-controls"><span><kbd>← → / A D</kbd> Руль</span><span><kbd>↑ / W</kbd> Газ</span><span><kbd>↓ / S</kbd> Тормоз</span><span><kbd>ПРОБЕЛ / SHIFT</kbd> Нитро</span><span><kbd>ESC / P</kbd> Пауза</span><span><kbd>M</kbd> Звук</span></div>
  <p>Ты стартуешь последним из восьми. Таймер идёт с первой секунды: каждая контрольная точка добавляет время. Обгони всех до финиша.</p>
  <p>В повороте машину выносит наружу — подруливай внутрь, а на крутых виражах сбрасывай газ. Обочина тормозит, столбы и деревья останавливают. Проезд впритык рядом с машиной и езда в её потоке заряжают нитро.</p>
  <small>Финиш в тройке открывает следующую трассу. На сенсорном экране газ включён всегда: ◀ ▶ — руль, справа тормоз и нитро.</small>${O("touch-toggle",v?"Сенсорное управление: включено":"Включить сенсорное управление")}${O("back","ПОНЯТНО",!0)}`),j==="finished"&&Ae){const Ze=r.tracks[r.trackIndex+1],Oe=Ze&&r.trackIndex+1<r.progress.unlocked,Je=r.tracks.every(Mt=>r.progress.best[Mt.id]?.place===1);ae.innerHTML=`<div class="z-eyebrow">${Ae.best?"НОВЫЙ ЛИЧНЫЙ РЕКОРД · ":""}ФИНИШ · ${re.name}</div><div class="z-place-big"><b>${Ae.place}</b><span>${Ae.place===1?"ПОБЕДА":"-е место"}</span></div>
   <h2 id="z-modal-title">${Ae.place===1?"ЗАРЕВО — ТВОЁ.":Ae.place<=3?"ПОДИУМ ВЗЯТ.":"ЕЩЁ НЕ ПРЕДЕЛ."}</h2>
   <div class="z-results"><div><b>${Bs(Ae.time)}</b><span>ВРЕМЯ</span></div><div><b>${Ae.overtakes}</b><span>ОБГОНОВ</span></div><div><b>${Ae.misses}</b><span>ВПРИТЫК</span></div></div>
   <p>${Je?"Все три трассы выиграны. Ты — чемпион Ночной лиги.":Ae.place<=3?Ze?Oe?`Открыта трасса «${Ze.name}».`:"":"Это была последняя трасса лиги. Попробуй выиграть каждую.":"Финишируй в тройке, чтобы открыть следующую трассу."}</p>
   ${Oe?O("next",`ДАЛЬШЕ: ${Ze.name.toUpperCase()}`,!0)+O("restart","Ещё раз"):O("restart","ЕЩЁ РАЗ",!0)}${O("title","В главное меню")}`}j==="timeout"&&(ae.innerHTML=`<div class="z-eyebrow">${re.name} · ПРОЙДЕНО ${Math.round(r.progressShare*100)}%</div><h2 id="z-modal-title">ВРЕМЯ<br>ВЫШЛО.</h2><p>Контрольная точка не дождалась. Держи газ, срезай повороты по внутренней и копи нитро на прямых.</p>${O("restart","ЕЩЁ ПОПЫТКА",!0)}${O("title","В главное меню")}`),requestAnimationFrame(()=>{M||ae.querySelector("button")?.focus()})}function Ie(){const j=r.phase==="title",ae=r.player,re=r.track;if(h(".z-title").hidden=!j,h(".z-hud").hidden=j,h(".z-touch").hidden=!v||!["racing","countdown"].includes(r.phase)||w!=="",n.classList.toggle("z-racing",r.phase==="racing"),j)return;h("[data-stage-num]").textContent=`ТРАССА ${String(r.trackIndex+1).padStart(2,"0")} · ${_l[re.theme]}`,h("[data-stage-name]").textContent=re.name,h("[data-progress]").style.width=`${r.progressShare*100}%`,h("[data-dot]").style.left=`${r.progressShare*100}%`,h("[data-time]").textContent=String(Math.ceil(r.time)),h(".z-timer").classList.toggle("low",r.time<10&&r.phase==="racing"),r.time>N+1&&(h("[data-bonus]").textContent=`+${Math.round(r.time-N)}`,L=1.6),N=r.time,h(".z-timer").classList.toggle("bonus",L>0),h("[data-place]").textContent=String(r.place),h("[data-of]").textContent=`/${re.rivals+1}`,h("[data-elapsed]").textContent=Bs(r.seconds),h("[data-cp]").textContent=`КОНТРОЛЬ ${r.nextCheckpoint}/${re.checkpoints.length}`;const Ae=Math.round(ae.speed*qc);h("[data-speed]").textContent=String(Ae);const Ze=h("[data-arc]");Ze.style.strokeDasharray=`${Math.min(1,ae.speed/(mt*Xc))*252} 252`,h("[data-nitro]").style.width=`${ae.nitro*100}%`,h(".z-nitro").classList.toggle("ready",ae.nitro>.25),h(".z-nitro").classList.toggle("on",ae.boosting),h("[data-slip]").classList.toggle("show",r.slip>0);const Oe=r.phase==="countdown"?Math.ceil(r.countdown-.6):0;h(".z-count").textContent=Oe>0?String(Oe):"",h(".z-count").classList.toggle("show",Oe>0),h(".z-banner").textContent=r.banner,h(".z-banner").classList.toggle("show",r.bannerTime>0&&Oe<=0),h(".z-popup").textContent=r.popup,h(".z-popup").classList.toggle("show",r.popupTime>0),n.querySelectorAll('[data-action="sound"]').forEach(Je=>{Je.setAttribute("aria-label",o.muted?"Включить звук":"Выключить звук"),Je.setAttribute("aria-pressed",String(!o.muted)),Je.textContent=Je.classList.contains("z-chip")?o.muted?"ЗВУК ВЫКЛ.":"ЗВУК ВКЛ.":o.muted?"×":"♪"})}function ze(){if(o.unlock(),o.setMuted(!o.muted),s.savePolicy==="persistent")try{localStorage.setItem(p,o.muted?"muted":"on")}catch{}Ie(),n.querySelectorAll(".z-chip").forEach(j=>j.textContent=o.muted?"ЗВУК ВЫКЛ.":"ЗВУК ВКЛ.")}const Qe=h(".z-canvas");P(n,"click",(j=>{const ae=j.target.closest("button");if(!ae)return;const re=ae.dataset.action;if(ae.dataset.track!==void 0){const Ae=Number(ae.dataset.track);Ae<r.progress.unlocked&&(S=Ae,r.load(r.tracks[Ae].id,!0),r.phase="title",ve(),n.querySelector(`[data-track="${Ae}"]`)?.focus());return}re==="start"&&Q(),re==="resume"&&q(),re==="pause"&&X(),re==="sound"&&ze(),re==="restart"&&Q(r.trackIndex),re==="next"&&Q(r.trackIndex+1),re==="title"&&Y(),re==="help"&&(["countdown","racing"].includes(r.phase)&&r.pause(!0),oe("help")),re==="back"&&(r.phase==="paused"?oe("pause"):H()),re==="touch-toggle"&&(v=!v,n.classList.toggle("z-mobile",v),ne(),oe("help")),Ie()}));const Z=["ArrowLeft","ArrowRight","KeyA","KeyD","ArrowUp","ArrowDown","KeyW","KeyS","Space","ShiftLeft","ShiftRight"];P(window,"keydown",(j=>{if(j.metaKey||j.ctrlKey||j.altKey)return;const ae=j.code;if(ae==="Escape"||ae==="KeyP"){if(j.preventDefault(),j.repeat)return;w==="help"?r.phase==="paused"?oe("pause"):H():r.phase==="paused"?q():X(),Ie();return}if(ae==="KeyM"&&!j.repeat){ze();return}if(r.phase==="title"&&(ae==="Enter"||ae==="Space")&&!w&&document.activeElement?.closest(".z-tracks,.z-start,header")===null){j.preventDefault(),Q();return}if(r.phase==="title"&&!w&&(ae==="ArrowLeft"||ae==="ArrowRight")){const re=S+(ae==="ArrowLeft"?-1:1);re>=0&&re<r.progress.unlocked&&(S=re,r.load(r.tracks[re].id,!0),r.phase="title",ve()),j.preventDefault();return}Z.includes(ae)&&["countdown","racing"].includes(r.phase)&&(j.preventDefault(),f.add(ae),o.unlock())})),P(window,"keyup",(j=>{f.delete(j.code)})),P(window,"blur",()=>{z(),X()}),P(document,"visibilitychange",()=>{document.hidden&&(z(),X())});for(const j of n.querySelectorAll("[data-touch]")){const ae=j.dataset.touch;P(j,"pointerdown",(re=>{re.preventDefault(),j.setPointerCapture(re.pointerId),g.add(ae),j.classList.add("pressed"),o.unlock()}));for(const re of["pointerup","pointercancel","lostpointercapture"])P(j,re,()=>{g.delete(ae),j.classList.remove("pressed")})}P(n,"contextmenu",j=>{j.target.closest(".z-touch,.z-canvas")&&j.preventDefault()}),P(n,"keydown",(j=>{if(j.key!=="Tab"||h(".z-modal").hidden)return;const ae=[...h(".z-panel").querySelectorAll("button")],re=ae[0],Ae=ae.at(-1);j.shiftKey&&document.activeElement===re?(j.preventDefault(),Ae?.focus()):!j.shiftKey&&document.activeElement===Ae&&(j.preventDefault(),re?.focus())}));const ne=()=>{u.inset=v?.13:0,u.layout()};ne();const Me=new ResizeObserver(()=>u.resize());Me.observe(Qe);const Fe=()=>{const j=(...ae)=>ae.some(re=>f.has(re));return{steer:Number(j("ArrowRight","KeyD")||g.has("right"))-Number(j("ArrowLeft","KeyA")||g.has("left")),gas:j("ArrowUp","KeyW")||v&&!g.has("brake")?1:0,brake:j("ArrowDown","KeyS")||g.has("brake")?1:0,nitro:j("Space","ShiftLeft","ShiftRight")||g.has("nitro")}};function xe(j){if(M)return;const ae=Math.min(.05,(j-T)/1e3);for(T=j,A+=ae;A>=1/120;)r.step(1/120,Fe()),A-=1/120;u.draw(ae),o.update(r.player.speed/mt,r.phase!=="title"&&r.phase!=="paused",r.player.boosting,r.phase!=="paused"),L=Math.max(0,L-ae),(r.phase==="finished"||r.phase==="timeout")&&w===""&&(C+=ae,C>(r.phase==="finished"?2:1.6)&&(oe(r.phase),ve())),x+=ae,(x>.06||E!==r.phase)&&(E=r.phase,x=0,Ie()),b=requestAnimationFrame(xe)}return ve(),Ie(),b=requestAnimationFrame(xe),{pause(j){j?X():r.phase==="paused"&&q()},dispose(){M=!0,cancelAnimationFrame(b),d.abort(),Me.disconnect(),o.dispose(),u.dispose(),n.replaceChildren(),n.classList.remove("zarevo","z-racing","z-mobile"),document.title=i},diagnostics:()=>({game:"zarevo",phase:r.phase,track:r.track.id,place:r.place,seconds:r.seconds})}}const yu={id:"zarevo",sdk:1,components:vu,validateScene(s,e){const t=$c(s);if(t.next&&!e.scenes.some(n=>n.id===t.next))throw new Error("Зарево: следующая трасса не найдена.")},createSession:Mu};class Su{components=new Map;modules=new Map;register(e){if(e.sdk!==1||this.modules.has(e.id))throw new Error("Несовместимый или повторяющийся модуль: "+e.id);this.modules.set(e.id,e);for(const t of e.components||[]){if(this.components.has(t.id))throw new Error("Повторяющийся компонент "+t.id);this.components.set(t.id,t)}}validate(e,t){for(const n of this.modules.values())n.validateScene?.(e,t);for(const n of e.nodes)for(const i of n.components||[]){const r=this.components.get(i.type);if(!r)throw new Error("Отсутствует компонент «"+i.type+"» у «"+n.name+"».");for(const a of r.fields){const o=i.values[a.name];if(a.type==="number"&&(typeof o!="number"||!Number.isFinite(o)||o<(a.min??-1/0)||o>(a.max??1/0)))throw new Error(n.name+": проверьте «"+a.label+"».");if(a.type==="boolean"&&typeof o!="boolean")throw new Error("Некорректный переключатель "+a.label);if(a.type==="object"&&o&&!e.nodes.some(l=>l.id===o)||a.type==="scene"&&!t.scenes.some(l=>l.id===o)||a.type==="asset"&&o&&!t.assets.some(l=>l.id===o)||a.type==="select"&&!a.options?.some(l=>l.value===o))throw new Error(n.name+": не найдена связь «"+a.label+"».")}}}}const Mo="186",bu=0,xl=1,Tu=2,_s=1,Eu=2,ds=3,ai=0,Wt=1,Sn=2,Gn=0,xs=1,vl=2,Ml=3,yl=4,wu=5,ki=100,Au=101,Ru=102,Cu=103,Pu=104,Lu=200,Iu=201,Du=202,Nu=203,Zc=204,Jc=205,Uu=206,Fu=207,Ou=208,Bu=209,ku=210,zu=211,Hu=212,Gu=213,Vu=214,Ra=0,Ca=1,Pa=2,Ss=3,La=4,Ia=5,Da=6,Na=7,Qc=0,Wu=1,Xu=2,En=0,jc=1,eh=2,th=3,yo=4,nh=5,ih=6,sh=7,Sl="attached",qu="detached",rh=300,xi=301,Xi=302,Gr=303,Vr=304,Ur=306,An=1e3,bn=1001,yr=1002,Et=1003,ah=1004,fs=1005,wt=1006,dr=1007,zn=1008,$t=1009,oh=1010,lh=1011,bs=1012,So=1013,Rn=1014,nn=1015,Cn=1016,bo=1017,To=1018,Ts=1020,ch=35902,hh=35899,uh=1021,dh=1022,sn=1023,Wn=1026,_i=1027,Eo=1028,wo=1029,vi=1030,Ao=1031,Ro=1033,fr=33776,pr=33777,mr=33778,gr=33779,Ua=35840,Fa=35841,Oa=35842,Ba=35843,ka=36196,za=37492,Ha=37496,Ga=37488,Va=37489,Sr=37490,Wa=37491,Xa=37808,qa=37809,Ka=37810,Ya=37811,$a=37812,Za=37813,Ja=37814,Qa=37815,ja=37816,eo=37817,to=37818,no=37819,io=37820,so=37821,ro=36492,ao=36494,oo=36495,lo=36283,co=36284,br=36285,ho=36286,Es=2300,ws=2301,Wr=2302,bl=2303,Tl=2400,El=2401,wl=2402,Ku=2500,Yu=0,fh=1,uo=2,$u=3200,fo=0,Zu=1,kn="",_t="srgb",Zt="srgb-linear",Tr="linear",it="srgb",Xr=7680,Ju=519,Qu=512,ju=513,ed=514,Co=515,td=516,nd=517,Po=518,id=519,ph=35044,Al="300 es",Tn=2e3,As=2001;function sd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function rd(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Rs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ad(){const s=Rs("canvas");return s.style.display="block",s}const Rl={};function Er(...s){const e="THREE."+s.shift();console.log(e,...s)}function mh(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Pe(...s){s=mh(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ue(...s){s=mh(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Gi(...s){const e=s.join(" ");e in Rl||(Rl[e]=!0,Pe(...s))}function od(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const ld={[Ra]:Ca,[Pa]:Da,[La]:Na,[Ss]:Ia,[Ca]:Ra,[Da]:Pa,[Na]:La,[Ia]:Ss};class Mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cl=1234567;const vs=Math.PI/180,qi=180/Math.PI;function dn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[s&255]+Nt[s>>8&255]+Nt[s>>16&255]+Nt[s>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function $e(s,e,t){return Math.max(e,Math.min(t,s))}function Lo(s,e){return(s%e+e)%e}function cd(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function hd(s,e,t){return s!==e?(t-s)/(e-s):0}function Ms(s,e,t){return(1-t)*s+t*e}function ud(s,e,t,n){return Ms(s,e,1-Math.exp(-t*n))}function dd(s,e=1){return e-Math.abs(Lo(s,e*2)-e)}function fd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function pd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function md(s,e){return s+Math.floor(Math.random()*(e-s+1))}function gd(s,e){return s+Math.random()*(e-s)}function _d(s){return s*(.5-Math.random())}function xd(s){s!==void 0&&(Cl=s);let e=Cl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vd(s){return s*vs}function Md(s){return s*qi}function yd(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Sd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function bd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Td(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*h,o*c);break;default:Pe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function hn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function st(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const wr={DEG2RAD:vs,RAD2DEG:qi,generateUUID:dn,clamp:$e,euclideanModulo:Lo,mapLinear:cd,inverseLerp:hd,lerp:Ms,damp:ud,pingpong:dd,smoothstep:fd,smootherstep:pd,randInt:md,randFloat:gd,randFloatSpread:_d,seededRandom:xd,degToRad:vd,radToDeg:Md,isPowerOfTwo:yd,ceilPowerOfTwo:Sd,floorPowerOfTwo:bd,setQuaternionFromProperEuler:Td,normalize:st,denormalize:hn},Ko=class Ko{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ko.prototype.isVector2=!0;let qe=Ko;class Xn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(u!==v||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*v;m<0&&(d=-d,f=-f,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){const S=Math.acos(m),w=Math.sin(S);p=Math.sin(p*S)/w,o=Math.sin(o*S)/w,l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+v*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+v*o;const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Yo=class Yo{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qr.copy(this).projectOnVector(e),this.sub(qr)}reflect(e){return this.sub(qr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yo.prototype.isVector3=!0;let B=Yo;const qr=new B,Pl=new Xn,$o=class $o{constructor(e,t,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=i[0],m=i[3],p=i[6],S=i[1],w=i[4],M=i[7],b=i[2],T=i[5],A=i[8];return r[0]=a*v+o*S+l*b,r[3]=a*m+o*w+l*T,r[6]=a*p+o*M+l*A,r[1]=c*v+h*S+u*b,r[4]=c*m+h*w+u*T,r[7]=c*p+h*M+u*A,r[2]=d*v+f*S+g*b,r[5]=d*m+f*w+g*T,r[8]=d*p+f*M+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(i*c-h*n)*v,e[2]=(o*n-i*a)*v,e[3]=d*v,e[4]=(h*t-i*l)*v,e[5]=(i*r-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Gi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Kr.makeScale(e,t)),this}rotate(e){return Gi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Kr.makeRotation(-e)),this}translate(e,t){return Gi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Kr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};$o.prototype.isMatrix3=!0;let Be=$o;const Kr=new Be,Ll=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Il=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ed(){const s={enabled:!0,workingColorSpace:Zt,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===it&&(i.r=Vn(i.r),i.g=Vn(i.g),i.b=Vn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(i.r=Vi(i.r),i.g=Vi(i.g),i.b=Vi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===kn?Tr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Gi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Gi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Zt]:{primaries:e,whitePoint:n,transfer:Tr,toXYZ:Ll,fromXYZ:Il,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_t},outputColorSpaceConfig:{drawingBufferColorSpace:_t}},[_t]:{primaries:e,whitePoint:n,transfer:it,toXYZ:Ll,fromXYZ:Il,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_t}}}),s}const Ye=Ed();function Vn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Vi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ti;class wd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ti===void 0&&(Ti=Rs("canvas")),Ti.width=e.width,Ti.height=e.height;const i=Ti.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ti}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Vn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vn(t[n]/255)*255):t[n]=Vn(t[n]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ad=0;class Io{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=dn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Yr(i[a].image)):r.push(Yr(i[a]))}else r=Yr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Yr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?wd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}let Rd=0;const $r=new B;class At extends Mi{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=bn,i=bn,r=wt,a=zn,o=sn,l=$t,c=At.DEFAULT_ANISOTROPY,h=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=dn(),this.name="",this.source=new Io(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize($r).x}get height(){return this.source.getSize($r).y}get depth(){return this.source.getSize($r).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case An:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case yr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case An:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case yr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=rh;At.DEFAULT_ANISOTROPY=1;const Zo=class Zo{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,M=(f+1)/2,b=(p+1)/2,T=(h+d)/4,A=(u+v)/4,x=(g+m)/4;return w>M&&w>b?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=T/n,r=A/n):M>b?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=T/i,r=x/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=A/r,i=x/r),this.set(n,i,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-v)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Zo.prototype.isVector4=!0;let ot=Zo;class Cd extends Mi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},r=new At(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Io(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fn extends Cd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class gh extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Et,this.minFilter=Et,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pd extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Et,this.minFilter=Et,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Nr=class Nr{constructor(e,t,n,i,r,a,o,l,c,h,u,d,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,d,f,g,v,m)}set(e,t,n,i,r,a,o,l,c,h,u,d,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Ei.setFromMatrixColumn(e,0).length(),r=1/Ei.setFromMatrixColumn(e,1).length(),a=1/Ei.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d+v*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ld,e,Id)}lookAt(e,t,n){const i=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),Zn.crossVectors(n,Kt),Zn.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),Zn.crossVectors(n,Kt)),Zn.normalize(),ks.crossVectors(Kt,Zn),i[0]=Zn.x,i[4]=ks.x,i[8]=Kt.x,i[1]=Zn.y,i[5]=ks.y,i[9]=Kt.y,i[2]=Zn.z,i[6]=ks.z,i[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],S=n[3],w=n[7],M=n[11],b=n[15],T=i[0],A=i[4],x=i[8],E=i[12],C=i[1],L=i[5],N=i[9],I=i[13],P=i[2],O=i[6],z=i[10],H=i[14],Q=i[3],X=i[7],q=i[11],Y=i[15];return r[0]=a*T+o*C+l*P+c*Q,r[4]=a*A+o*L+l*O+c*X,r[8]=a*x+o*N+l*z+c*q,r[12]=a*E+o*I+l*H+c*Y,r[1]=h*T+u*C+d*P+f*Q,r[5]=h*A+u*L+d*O+f*X,r[9]=h*x+u*N+d*z+f*q,r[13]=h*E+u*I+d*H+f*Y,r[2]=g*T+v*C+m*P+p*Q,r[6]=g*A+v*L+m*O+p*X,r[10]=g*x+v*N+m*z+p*q,r[14]=g*E+v*I+m*H+p*Y,r[3]=S*T+w*C+M*P+b*Q,r[7]=S*A+w*L+M*O+b*X,r[11]=S*x+w*N+M*z+b*q,r[15]=S*E+w*I+M*H+b*Y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15],S=l*f-c*d,w=o*f-c*u,M=o*d-l*u,b=a*f-c*h,T=a*d-l*h,A=a*u-o*h;return t*(v*S-m*w+p*M)-n*(g*S-m*b+p*T)+i*(g*w-v*b+p*A)-r*(g*M-v*T+m*A)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],S=t*o-n*a,w=t*l-i*a,M=t*c-r*a,b=n*l-i*o,T=n*c-r*o,A=i*c-r*l,x=h*v-u*g,E=h*m-d*g,C=h*p-f*g,L=u*m-d*v,N=u*p-f*v,I=d*p-f*m,P=S*I-w*N+M*L+b*C-T*E+A*x;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/P;return e[0]=(o*I-l*N+c*L)*O,e[1]=(i*N-n*I-r*L)*O,e[2]=(v*A-m*T+p*b)*O,e[3]=(d*T-u*A-f*b)*O,e[4]=(l*C-a*I-c*E)*O,e[5]=(t*I-i*C+r*E)*O,e[6]=(m*M-g*A-p*w)*O,e[7]=(h*A-d*M+f*w)*O,e[8]=(a*N-o*C+c*x)*O,e[9]=(n*C-t*N-r*x)*O,e[10]=(g*T-v*M+p*S)*O,e[11]=(u*M-h*T-f*S)*O,e[12]=(o*E-a*L-l*x)*O,e[13]=(t*L-n*E+i*x)*O,e[14]=(v*w-g*b-m*S)*O,e[15]=(h*b-u*w+d*S)*O,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,v=a*h,m=a*u,p=o*u,S=l*c,w=l*h,M=l*u,b=n.x,T=n.y,A=n.z;return i[0]=(1-(v+p))*b,i[1]=(f+M)*b,i[2]=(g-w)*b,i[3]=0,i[4]=(f-M)*T,i[5]=(1-(d+p))*T,i[6]=(m+S)*T,i[7]=0,i[8]=(g+w)*A,i[9]=(m-S)*A,i[10]=(1-(d+v))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ei.set(i[0],i[1],i[2]).length();const o=Ei.set(i[4],i[5],i[6]).length(),l=Ei.set(i[8],i[9],i[10]).length();r<0&&(a=-a),on.copy(this);const c=1/a,h=1/o,u=1/l;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=u,on.elements[9]*=u,on.elements[10]*=u,t.setFromRotationMatrix(on),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=Tn,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===Tn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===As)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Tn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===Tn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===As)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Nr.prototype.isMatrix4=!0;let Ve=Nr;const Ei=new B,on=new Ve,Ld=new B(0,0,0),Id=new B(1,1,1),Zn=new B,ks=new B,Kt=new B,Dl=new Ve,Nl=new Xn;class oi{constructor(e=0,t=0,n=0,i=oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nl.setFromEuler(this),this.setFromQuaternion(Nl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oi.DEFAULT_ORDER="XYZ";class _h{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Dd=0;const Ul=new B,wi=new Xn,Dn=new Ve,zs=new B,ts=new B,Nd=new B,Ud=new Xn,Fl=new B(1,0,0),Ol=new B(0,1,0),Bl=new B(0,0,1),kl={type:"added"},Fd={type:"removed"},Ai={type:"childadded",child:null},Zr={type:"childremoved",child:null};class ft extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new B,t=new oi,n=new Xn,i=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Be}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _h,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.multiply(wi),this}rotateOnWorldAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.premultiply(wi),this}rotateX(e){return this.rotateOnAxis(Fl,e)}rotateY(e){return this.rotateOnAxis(Ol,e)}rotateZ(e){return this.rotateOnAxis(Bl,e)}translateOnAxis(e,t){return Ul.copy(e).applyQuaternion(this.quaternion),this.position.add(Ul.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fl,e)}translateY(e){return this.translateOnAxis(Ol,e)}translateZ(e){return this.translateOnAxis(Bl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zs.copy(e):zs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(ts,zs,this.up):Dn.lookAt(zs,ts,this.up),this.quaternion.setFromRotationMatrix(Dn),i&&(Dn.extractRotation(i.matrixWorld),wi.setFromRotationMatrix(Dn),this.quaternion.premultiply(wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ue("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kl),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fd),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kl),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,e,Nd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,Ud,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ft.DEFAULT_UP=new B(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class rn extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Od={type:"move"};class Jr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Od)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new rn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},Hs={h:0,s:0,l:0};function Qr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ye.workingColorSpace){if(e=Lo(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Qr(a,r,e+1/3),this.g=Qr(a,r,e),this.b=Qr(a,r,e-1/3)}return Ye.colorSpaceToWorking(this,i),this}setStyle(e,t=_t){function n(r){r!==void 0&&parseFloat(r)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){const n=xh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vn(e.r),this.g=Vn(e.g),this.b=Vn(e.b),this}copyLinearToSRGB(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return Ye.workingToColorSpace(Ut.copy(this),e),Math.round($e(Ut.r*255,0,255))*65536+Math.round($e(Ut.g*255,0,255))*256+Math.round($e(Ut.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(Ut.copy(this),t);const n=Ut.r,i=Ut.g,r=Ut.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=_t){Ye.workingToColorSpace(Ut.copy(this),e);const t=Ut.r,n=Ut.g,i=Ut.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(Hs);const n=Ms(Jn.h,Hs.h,t),i=Ms(Jn.s,Hs.s,t),r=Ms(Jn.l,Hs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new Ne;Ne.NAMES=xh;class Do{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ne(e),this.density=t}clone(){return new Do(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class zl extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ln=new B,Nn=new B,jr=new B,Un=new B,Ri=new B,Ci=new B,Hl=new B,ea=new B,ta=new B,na=new B,ia=new ot,sa=new ot,ra=new ot;class un{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ln.subVectors(e,t),i.cross(ln);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){ln.subVectors(i,t),Nn.subVectors(n,t),jr.subVectors(e,t);const a=ln.dot(ln),o=ln.dot(Nn),l=ln.dot(jr),c=Nn.dot(Nn),h=Nn.dot(jr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Un.x),l.addScaledVector(a,Un.y),l.addScaledVector(o,Un.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return ia.setScalar(0),sa.setScalar(0),ra.setScalar(0),ia.fromBufferAttribute(e,t),sa.fromBufferAttribute(e,n),ra.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(ia,r.x),a.addScaledVector(sa,r.y),a.addScaledVector(ra,r.z),a}static isFrontFacing(e,t,n,i){return ln.subVectors(n,t),Nn.subVectors(e,t),ln.cross(Nn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),ln.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return un.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Ri.subVectors(i,n),Ci.subVectors(r,n),ea.subVectors(e,n);const l=Ri.dot(ea),c=Ci.dot(ea);if(l<=0&&c<=0)return t.copy(n);ta.subVectors(e,i);const h=Ri.dot(ta),u=Ci.dot(ta);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ri,a);na.subVectors(e,r);const f=Ri.dot(na),g=Ci.dot(na);if(g>=0&&f<=g)return t.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ci,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Hl.subVectors(r,i),o=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(Hl,o);const p=1/(m+v+d);return a=v*p,o=d*p,t.copy(n).addScaledVector(Ri,a).addScaledVector(Ci,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class qn{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,cn):cn.fromBufferAttribute(r,a),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gs.copy(n.boundingBox)),Gs.applyMatrix4(e.matrixWorld),this.union(Gs)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ns),Vs.subVectors(this.max,ns),Pi.subVectors(e.a,ns),Li.subVectors(e.b,ns),Ii.subVectors(e.c,ns),Qn.subVectors(Li,Pi),jn.subVectors(Ii,Li),hi.subVectors(Pi,Ii);let t=[0,-Qn.z,Qn.y,0,-jn.z,jn.y,0,-hi.z,hi.y,Qn.z,0,-Qn.x,jn.z,0,-jn.x,hi.z,0,-hi.x,-Qn.y,Qn.x,0,-jn.y,jn.x,0,-hi.y,hi.x,0];return!aa(t,Pi,Li,Ii,Vs)||(t=[1,0,0,0,1,0,0,0,1],!aa(t,Pi,Li,Ii,Vs))?!1:(Ws.crossVectors(Qn,jn),t=[Ws.x,Ws.y,Ws.z],aa(t,Pi,Li,Ii,Vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fn=[new B,new B,new B,new B,new B,new B,new B,new B],cn=new B,Gs=new qn,Pi=new B,Li=new B,Ii=new B,Qn=new B,jn=new B,hi=new B,ns=new B,Vs=new B,Ws=new B,ui=new B;function aa(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ui.fromArray(s,r);const o=i.x*Math.abs(ui.x)+i.y*Math.abs(ui.y)+i.z*Math.abs(ui.z),l=e.dot(ui),c=t.dot(ui),h=n.dot(ui);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const bt=new B,Xs=new qe;let Bd=0;class Xt extends Mi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ph,this.updateRanges=[],this.gpuType=nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xs.fromBufferAttribute(this,t),Xs.applyMatrix3(e),this.setXY(t,Xs.x,Xs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class vh extends Xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Mh extends Xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Tt extends Xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const kd=new qn,is=new B,oa=new B;class Ln{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):kd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;is.subVectors(e,this.center);const t=is.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(is,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(is.copy(e.center).add(oa)),this.expandByPoint(is.copy(e.center).sub(oa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let zd=0;const jt=new Ve,la=new ft,Di=new B,Yt=new qn,ss=new qn,Pt=new B;class Ft extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sd(e)?Mh:vh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this}scale(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this}lookAt(e){return la.lookAt(e),la.updateMatrix(),this.applyMatrix4(la.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Tt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Yt.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ss.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(Yt.min,ss.min),Yt.expandByPoint(Pt),Pt.addVectors(Yt.max,ss.max),Yt.expandByPoint(Pt)):(Yt.expandByPoint(ss.min),Yt.expandByPoint(ss.max))}Yt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Pt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Pt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Pt.fromBufferAttribute(o,c),l&&(Di.fromBufferAttribute(e,c),Pt.add(Di)),i=Math.max(i,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Xt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new B,l[x]=new B;const c=new B,h=new B,u=new B,d=new qe,f=new qe,g=new qe,v=new B,m=new B;function p(x,E,C){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,C),d.fromBufferAttribute(r,x),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,C),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),o[x].add(v),o[E].add(v),o[C].add(v),l[x].add(m),l[E].add(m),l[C].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let x=0,E=S.length;x<E;++x){const C=S[x],L=C.start,N=C.count;for(let I=L,P=L+N;I<P;I+=3)p(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const w=new B,M=new B,b=new B,T=new B;function A(x){b.fromBufferAttribute(i,x),T.copy(b);const E=o[x];w.copy(E),w.sub(b.multiplyScalar(b.dot(E))).normalize(),M.crossVectors(T,E);const L=M.dot(l[x])<0?-1:1;a.setXYZW(x,w.x,w.y,w.z,L)}for(let x=0,E=S.length;x<E;++x){const C=S[x],L=C.start,N=C.count;for(let I=L,P=L+N;I<P;I+=3)A(e.getX(I+0)),A(e.getX(I+1)),A(e.getX(I+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new B,r=new B,a=new B,o=new B,l=new B,c=new B,h=new B,u=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Xt(d,h,u)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ft,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ph,this.updateRanges=[],this.version=0,this.uuid=dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const kt=new B;class No{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Er("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new No(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Er("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ca=new B,Gd=new B,Vd=new Be;class ni{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ca.subVectors(n,t).cross(Gd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(ca),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Vd.getNormalMatrix(e),i=this.coplanarPoint(ca).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Wd=0;class wn extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=dn(),this.name="",this.type="Material",this.blending=xs,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zc,this.blendDst=Jc,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xr,this.stencilZFail=Xr,this.stencilZPass=Xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ne().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ni().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new qe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const On=new B,ha=new B,qs=new B,Ks=new B;class Fr{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ha.copy(e).add(t).multiplyScalar(.5),qs.copy(t).sub(e).normalize(),Ks.copy(this.origin).sub(ha);const r=e.distanceTo(t)*.5,a=-this.direction.dot(qs),o=Ks.dot(this.direction),l=-Ks.dot(qs),c=Ks.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ha).addScaledVector(qs,d),f}intersectSphere(e,t){if(e.radius<0)return null;On.subVectors(e.center,this.origin);const n=On.dot(this.direction),i=On.dot(On)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,n,i,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,v=t.y-a.y,m=t.z-a.z,p=n.x-a.x,S=n.y-a.y,w=n.z-a.z,M=Math.abs(l),b=Math.abs(c),T=Math.abs(h);let A,x,E,C,L,N,I,P,O,z,H,Q;if(M>=b&&M>=T?(E=l,N=u,O=g,Q=p,l>=0?(A=c,x=h,C=d,L=f,I=v,P=m,z=S,H=w):(A=h,x=c,C=f,L=d,I=m,P=v,z=w,H=S)):b>=T?(E=c,N=d,O=v,Q=S,c>=0?(A=h,x=l,C=f,L=u,I=m,P=g,z=w,H=p):(A=l,x=h,C=u,L=f,I=g,P=m,z=p,H=w)):(E=h,N=f,O=m,Q=w,h>=0?(A=l,x=c,C=u,L=d,I=g,P=v,z=p,H=S):(A=c,x=l,C=d,L=u,I=v,P=g,z=S,H=p)),E===0)return null;const X=A/E,q=x/E,Y=1/E,ve=C-X*N,oe=L-q*N,Ie=I-X*O,ze=P-q*O,Qe=z-X*Q,Z=H-q*Q,ne=Qe*ze-Z*Ie,Me=ve*Z-oe*Qe,Fe=Ie*oe-ze*ve;if(i){if(ne<0||Me<0||Fe<0)return null}else if((ne<0||Me<0||Fe<0)&&(ne>0||Me>0||Fe>0))return null;const xe=ne+Me+Fe;if(xe===0)return null;const j=Y*(ne*N+Me*O+Fe*Q);return(xe>0?j<0:j>0)?null:this.at(j/xe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class si extends wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=Qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gl=new Ve,di=new Fr,Ys=new Ln,Vl=new B,$s=new B,Zs=new B,Js=new B,ua=new B,Qs=new B,Wl=new B,js=new B;class xt extends ft{constructor(e=new Ft,t=new si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Qs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(ua.fromBufferAttribute(u,e),a?Qs.addScaledVector(ua,h):Qs.addScaledVector(ua.sub(t),h))}t.add(Qs)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(r),di.copy(e.ray).recast(e.near),!(Ys.containsPoint(di.origin)===!1&&(di.intersectSphere(Ys,Vl)===null||di.origin.distanceToSquared(Vl)>(e.far-e.near)**2))&&(Gl.copy(r).invert(),di.copy(e.ray).applyMatrix4(Gl),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,di)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=S,b=w;M<b;M+=3){const T=o.getX(M),A=o.getX(M+1),x=o.getX(M+2);i=er(this,p,e,n,c,h,u,T,A,x),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const S=o.getX(m),w=o.getX(m+1),M=o.getX(m+2);i=er(this,a,e,n,c,h,u,S,w,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=S,b=w;M<b;M+=3){const T=M,A=M+1,x=M+2;i=er(this,p,e,n,c,h,u,T,A,x),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const S=m,w=m+1,M=m+2;i=er(this,a,e,n,c,h,u,S,w,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Xd(s,e,t,n,i,r,a,o){let l;if(e.side===Wt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===ai,o),l===null)return null;js.copy(o),js.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(js);return c<t.near||c>t.far?null:{distance:c,point:js.clone(),object:s}}function er(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,$s),s.getVertexPosition(l,Zs),s.getVertexPosition(c,Js);const h=Xd(s,e,t,n,$s,Zs,Js,Wl);if(h){const u=new B;un.getBarycoord(Wl,$s,Zs,Js,u),i&&(h.uv=un.getInterpolatedAttribute(i,o,l,c,u,new qe)),r&&(h.uv1=un.getInterpolatedAttribute(r,o,l,c,u,new qe)),a&&(h.normal=un.getInterpolatedAttribute(a,o,l,c,u,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new B,materialIndex:0};un.getNormal($s,Zs,Js,d.normal),h.face=d,h.barycoord=u}return h}const rs=new ot,Xl=new ot,ql=new ot,qd=new ot,Kl=new Ve,tr=new B,da=new Ln,Yl=new Ve,fa=new Fr;class Kd extends xt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Sl,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new qn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,tr),this.boundingBox.expandByPoint(tr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ln),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,tr),this.boundingSphere.expandByPoint(tr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),da.copy(this.boundingSphere),da.applyMatrix4(i),e.ray.intersectsSphere(da)!==!1&&(Yl.copy(i).invert(),fa.copy(e.ray).applyMatrix4(Yl),!(this.boundingBox!==null&&fa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,fa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ot,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Sl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===qu?this.bindMatrixInverse.copy(this.bindMatrix).invert():Pe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Xl.fromBufferAttribute(i.attributes.skinIndex,e),ql.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(rs.copy(t),t.set(0,0,0,0)):(rs.set(...t,1),t.set(0,0,0)),rs.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=ql.getComponent(r);if(a!==0){const o=Xl.getComponent(r);Kl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(qd.copy(rs).applyMatrix4(Kl),a)}}return t.isVector4&&(t.w=rs.w),t.applyMatrix4(this.bindMatrixInverse)}}class yh extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Uo extends At{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Et,h=Et,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $l=new Ve,Yd=new Ve;class Fo{constructor(e=[],t=[]){this.uuid=dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Pe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Yd;$l.multiplyMatrices(o,t[r]),$l.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Fo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Uo(t,e,e,sn,nn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(Pe("Skeleton: No bone found with UUID:",r),a=new yh),this.bones.push(a),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Ar extends Xt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ni=new Ve,Zl=new Ve,nr=[],Jl=new qn,$d=new Ve,as=new xt,os=new Ln;class Zd extends xt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ar(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,$d)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ni),Jl.copy(e.boundingBox).applyMatrix4(Ni),this.boundingBox.union(Jl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ni),os.copy(e.boundingSphere).applyMatrix4(Ni),this.boundingSphere.union(os)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(as.geometry=this.geometry,as.material=this.material,as.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),os.copy(this.boundingSphere),os.applyMatrix4(n),e.ray.intersectsSphere(os)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ni),Zl.multiplyMatrices(n,Ni),as.matrixWorld=Zl,as.raycast(e,nr);for(let a=0,o=nr.length;a<o;a++){const l=nr[a];l.instanceId=r,l.object=this,t.push(l)}nr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ar(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Uo(new Float32Array(i*this.count),i,this.count,Eo,nn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const fi=new Ln,Jd=new qe(.5,.5),ir=new B;class Oo{constructor(e=new ni,t=new ni,n=new ni,i=new ni,r=new ni,a=new ni){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Tn,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],S=r[12],w=r[13],M=r[14],b=r[15];if(i[0].setComponents(c-a,f-h,p-g,b-S).normalize(),i[1].setComponents(c+a,f+h,p+g,b+S).normalize(),i[2].setComponents(c+o,f+u,p+v,b+w).normalize(),i[3].setComponents(c-o,f-u,p-v,b-w).normalize(),n)i[4].setComponents(l,d,m,M).normalize(),i[5].setComponents(c-l,f-d,p-m,b-M).normalize();else if(i[4].setComponents(c-l,f-d,p-m,b-M).normalize(),t===Tn)i[5].setComponents(c+l,f+d,p+m,b+M).normalize();else if(t===As)i[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){fi.center.set(0,0,0);const t=Jd.distanceTo(e.center);return fi.radius=.7071067811865476+t,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ir.x=i.normal.x>0?e.max.x:e.min.x,ir.y=i.normal.y>0?e.max.y:e.min.y,ir.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ir)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sh extends wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rr=new B,Cr=new B,Ql=new Ve,ls=new Fr,sr=new Ln,pa=new B,jl=new B;class Bo extends ft{constructor(e=new Ft,t=new Sh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Rr.fromBufferAttribute(t,i-1),Cr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Rr.distanceTo(Cr);e.setAttribute("lineDistance",new Tt(n,1))}else Pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(i),sr.radius+=r,e.ray.intersectsSphere(sr)===!1)return;Ql.copy(i).invert(),ls.copy(e.ray).applyMatrix4(Ql);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const p=h.getX(v),S=h.getX(v+1),w=rr(this,e,ls,l,p,S,v);w&&t.push(w)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(f),p=rr(this,e,ls,l,v,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const p=rr(this,e,ls,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=rr(this,e,ls,l,g-1,f,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function rr(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(Rr.fromBufferAttribute(o,i),Cr.fromBufferAttribute(o,r),t.distanceSqToSegment(Rr,Cr,pa,jl)>n)return;pa.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(pa);if(!(c<e.near||c>e.far))return{distance:c,point:jl.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const ec=new B,tc=new B;class Qd extends Bo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)ec.fromBufferAttribute(t,i),tc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ec.distanceTo(tc);e.setAttribute("lineDistance",new Tt(n,1))}else Pe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jd extends Bo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class bh extends wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const nc=new Ve,po=new Fr,ar=new Ln,or=new B;class Th extends ft{constructor(e=new Ft,t=new bh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(i),ar.radius+=r,e.ray.intersectsSphere(ar)===!1)return;nc.copy(i).invert(),po.copy(e.ray).applyMatrix4(nc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,v=f;g<v;g++){const m=c.getX(g);or.fromBufferAttribute(u,m),ic(or,m,l,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,v=f;g<v;g++)or.fromBufferAttribute(u,g),ic(or,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ic(s,e,t,n,i,r,a){const o=po.distanceSqToPoint(s);if(o<t){const l=new B;po.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Eh extends At{constructor(e=[],t=xi,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cs extends At{constructor(e,t,n=Rn,i,r,a,o=Et,l=Et,c,h=Wn,u=1){if(h!==Wn&&h!==_i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Io(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class ef extends Cs{constructor(e,t=Rn,n=xi,i,r,a=Et,o=Et,l,c=Wn){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class wh extends At{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class li extends Ft{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(u,2));function g(v,m,p,S,w,M,b,T,A,x,E){const C=M/A,L=b/x,N=M/2,I=b/2,P=T/2,O=A+1,z=x+1;let H=0,Q=0;const X=new B;for(let q=0;q<z;q++){const Y=q*L-I;for(let ve=0;ve<O;ve++){const oe=ve*C-N;X[v]=oe*S,X[m]=Y*w,X[p]=P,c.push(X.x,X.y,X.z),X[v]=0,X[m]=0,X[p]=T>0?1:-1,h.push(X.x,X.y,X.z),u.push(ve/A),u.push(1-q/x),H+=1}}for(let q=0;q<x;q++)for(let Y=0;Y<A;Y++){const ve=d+Y+O*q,oe=d+Y+O*(q+1),Ie=d+(Y+1)+O*(q+1),ze=d+(Y+1)+O*q;l.push(ve,oe,ze),l.push(oe,Ie,ze),Q+=6}o.addGroup(f,Q,E),f+=Q,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new li(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ko extends Ft{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,g=n*2+r,v=i+1,m=new B,p=new B;for(let S=0;S<=g;S++){let w=0,M=0,b=0,T=0;if(S<=n){const E=S/n,C=E*Math.PI/2;M=-h-e*Math.cos(C),b=e*Math.sin(C),T=-e*Math.cos(C),w=E*u}else if(S<=n+r){const E=(S-n)/r;M=-h+E*t,b=e,T=0,w=u+E*d}else{const E=(S-n-r)/n,C=E*Math.PI/2;M=h+e*Math.sin(C),b=e*Math.cos(C),T=e*Math.sin(C),w=u+d+E*u}const A=Math.max(0,Math.min(1,w/f));let x=0;S===0?x=.5/i:S===g&&(x=-.5/i);for(let E=0;E<=i;E++){const C=E/i,L=C*Math.PI*2,N=Math.sin(L),I=Math.cos(L);p.x=-b*I,p.y=M,p.z=b*N,o.push(p.x,p.y,p.z),m.set(-b*I,T,b*N),m.normalize(),l.push(m.x,m.y,m.z),c.push(C+x,A)}if(S>0){const E=(S-1)*v;for(let C=0;C<i;C++){const L=E+C,N=E+C+1,I=S*v+C,P=S*v+C+1;a.push(L,N,I),a.push(N,P,I)}}}this.setIndex(a),this.setAttribute("position",new Tt(o,3)),this.setAttribute("normal",new Tt(l,3)),this.setAttribute("uv",new Tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class zo extends Ft{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;S(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Tt(u,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(f,2));function S(){const M=new B,b=new B;let T=0;const A=(t-e)/n;for(let x=0;x<=r;x++){const E=[],C=x/r,L=C*(t-e)+e;for(let N=0;N<=i;N++){const I=N/i,P=I*l+o,O=Math.sin(P),z=Math.cos(P);b.x=L*O,b.y=-C*n+m,b.z=L*z,u.push(b.x,b.y,b.z),M.set(O,A,z).normalize(),d.push(M.x,M.y,M.z),f.push(I,1-C),E.push(g++)}v.push(E)}for(let x=0;x<i;x++)for(let E=0;E<r;E++){const C=v[E][x],L=v[E+1][x],N=v[E+1][x+1],I=v[E][x+1];(e>0||E!==0)&&(h.push(C,L,I),T+=3),(t>0||E!==r-1)&&(h.push(L,N,I),T+=3)}c.addGroup(p,T,0),p+=T}function w(M){const b=g,T=new qe,A=new B;let x=0;const E=M===!0?e:t,C=M===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,m*C,0),d.push(0,C,0),f.push(.5,.5),g++;const L=g;for(let N=0;N<=i;N++){const P=N/i*l+o,O=Math.cos(P),z=Math.sin(P);A.x=E*z,A.y=m*C,A.z=E*O,u.push(A.x,A.y,A.z),d.push(0,C,0),T.x=O*.5+.5,T.y=z*.5*C+.5,f.push(T.x,T.y),g++}for(let N=0;N<i;N++){const I=b+N,P=L+N;M===!0?h.push(P,P+1,I):h.push(P+1,P,I),x+=3}c.addGroup(p,x,M===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ho extends zo{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ho(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Or extends Ft{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const S=p*d-a;for(let w=0;w<c;w++){const M=w*u-r;g.push(M,-S,0),v.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const w=S+c*p,M=S+c*(p+1),b=S+1+c*(p+1),T=S+1+c*p;f.push(w,M,T),f.push(M,b,T)}this.setIndex(f),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(v,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.width,e.height,e.widthSegments,e.heightSegments)}}class Go extends Ft{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new B,d=new B,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const S=[],w=p/n,M=a+w*o,b=e*Math.cos(M),T=Math.sqrt(e*e-b*b);let A=0;p===0&&a===0?A=.5/t:p===n&&l===Math.PI&&(A=-.5/t);for(let x=0;x<=t;x++){const E=x/t,C=i+E*r;u.x=-T*Math.cos(C),u.y=b,u.z=T*Math.sin(C),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(E+A,1-w),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){const w=h[p][S+1],M=h[p][S],b=h[p+1][S],T=h[p+1][S+1];(p!==0||a>0)&&f.push(w,M,T),(p!==n-1||l<Math.PI)&&f.push(M,b,T)}this.setIndex(f),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(v,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ki(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(sc(i))i.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(sc(i[0])){const r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function zt(s){const e={};for(let t=0;t<s.length;t++){const n=Ki(s[t]);for(const i in n)e[i]=n[i]}return e}function sc(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function tf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ah(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const nf={clone:Ki,merge:zt};var sf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sf,this.fragmentShader=rf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ki(e.uniforms),this.uniformsGroups=tf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Ne().setHex(i.value);break;case"v2":this.uniforms[n].value=new qe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new B().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ot().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Be().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ve().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class af extends Pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ri extends wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fo,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class In extends ri{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class of extends wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$u,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lf extends wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ii(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function _r(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function cf(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function rc(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function hf(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class $i{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class uf extends $i{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tl,endingEnd:Tl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case El:r=e,o=2*t-n;break;case wl:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case El:a=e,l=2*n-t;break;case wl:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,S=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,w=(-1-f)*m+(1.5+f)*v+.5*g,M=f*m-f*v;for(let b=0;b!==o;++b)r[b]=p*a[h+b]+S*a[c+b]+w*a[l+b]+M*a[u+b];return r}}class df extends $i{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}}class ff extends $i{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class pf extends $i{interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){const g=(n-t)/(i-t),v=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*v+a[l+m]*g;return r}const d=o*2,f=e-1;for(let g=0;g!==o;++g){const v=a[c+g],m=a[l+g],p=f*d+g*2,S=u[p],w=u[p+1],M=e*d+g*2,b=h[M],T=h[M+1],A=gf(n,t,S,b,i);r[g]=Rh(A,v,w,T,m)}return r}}function Rh(s,e,t,n,i){const r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function mf(s,e,t,n,i){const r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function gf(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){const o=Rh(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;const l=mf(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}class pn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ii(t,this.TimeBufferType),this.values=ii(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ii(e.times,Array),values:ii(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),_r(e.settings)&&(n.settings={inTangents:ii(e.settings.inTangents,Array),outTangents:ii(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ff(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new df(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new uf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new pf(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Es:t=this.InterpolantFactoryMethodDiscrete;break;case ws:t=this.InterpolantFactoryMethodLinear;break;case Wr:t=this.InterpolantFactoryMethodSmooth;break;case bl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Pe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Es;case this.InterpolantFactoryMethodLinear:return ws;case this.InterpolantFactoryMethodSmooth:return Wr;case this.InterpolantFactoryMethodBezier:return bl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;_r(this.settings)&&(ac(this.settings.inTangents,e),ac(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ue("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Ue("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Ue("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ue("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&rd(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){Ue("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Wr,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const v=t[u+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,_r(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function ac(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}pn.prototype.ValueTypeName="";pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=ws;class Zi extends pn{constructor(e,t,n){super(e,t,n)}}Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Es;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ch extends pn{constructor(e,t,n,i){super(e,t,n,i)}}Ch.prototype.ValueTypeName="color";class Ps extends pn{constructor(e,t,n,i){super(e,t,n,i)}}Ps.prototype.ValueTypeName="number";class _f extends $i{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Xn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Ls extends pn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new _f(this.times,this.values,this.getValueSize(),e)}}Ls.prototype.ValueTypeName="quaternion";Ls.prototype.InterpolantFactoryMethodSmooth=void 0;class Ji extends pn{constructor(e,t,n){super(e,t,n)}}Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=Es;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;class Pr extends pn{constructor(e,t,n,i){super(e,t,n,i)}}Pr.prototype.ValueTypeName="vector";class xf{constructor(e="",t=-1,n=[],i=Ku){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=dn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Mf(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(pn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=cf(l);l=rc(l,1,h),c=rc(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Ps(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function vf(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ps;case"vector":case"vector2":case"vector3":case"vector4":return Pr;case"color":return Ch;case"quaternion":return Ls;case"bool":case"boolean":return Zi;case"string":return Ji}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Mf(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=vf(s.type);if(s.times===void 0){const n=[],i=[];hf(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),_r(s.settings)&&(t.settings={inTangents:ii(s.settings.inTangents,Float32Array),outTangents:ii(s.settings.outTangents,Float32Array)}),t}const Hn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(oc(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!oc(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function oc(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class yf{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Sf=new yf;class Qi{constructor(e){this.manager=e!==void 0?e:Sf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Qi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bn={};class bf extends Error{constructor(e,t){super(e),this.response=t}}class Ph extends Qi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Hn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Bn[e]!==void 0){Bn[e].push({onLoad:t,onProgress:n,onError:i});return}Bn[e]=[],Bn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Pe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Bn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){S();function S(){u.read().then(({done:w,value:M})=>{if(w)p.close();else{v+=M.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let T=0,A=h.length;T<A;T++){const x=h[T];x.onProgress&&x.onProgress(b)}p.enqueue(M),S()}},w=>{p.error(w)})}}});return new Response(m)}else throw new bf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Hn.add(`file:${e}`,c);const h=Bn[e];delete Bn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Bn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Bn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ui=new WeakMap;class Tf extends Qi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Hn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Ui.get(a);u===void 0&&(u=[],Ui.set(a,u)),u.push({onLoad:t,onError:i})}return a}const o=Rs("img");function l(){h(),t&&t(this);const u=Ui.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Ui.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),Hn.remove(`image:${e}`);const d=Ui.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(u)}Ui.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Hn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Lr extends Qi{constructor(e){super(e)}load(e,t,n,i){const r=new At,a=new Tf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Ds extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Ef extends Ds{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ma=new Ve,lc=new B,cc=new B;class Vo{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=$t,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oo,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;lc.setFromMatrixPosition(e.matrixWorld),t.position.copy(lc),cc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){ma.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ma,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===As||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ma)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const lr=new B,cr=new Xn,_n=new B;class Lh extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(lr,cr,_n),_n.x===1&&_n.y===1&&_n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lr,cr,_n.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(lr,cr,_n),_n.x===1&&_n.y===1&&_n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lr,cr,_n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ei=new B,hc=new qe,uc=new qe;class Lt extends Lh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qi*2*Math.atan(Math.tan(vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ei.x,ei.y).multiplyScalar(-e/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-e/ei.z)}getViewSize(e,t){return this.getViewBounds(e,hc,uc),t.subVectors(uc,hc)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class wf extends Vo{constructor(){super(new Lt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=qi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class zi extends Ds{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new wf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Af extends Vo{constructor(){super(new Lt(90,1,.5,500)),this.isPointLightShadow=!0}}class Ir extends Ds{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Af}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Yi extends Lh{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Rf extends Vo{constructor(){super(new Yi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wo extends Ds{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new Rf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class ys{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const ga=new WeakMap;class Cf extends Qi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Pe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Pe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Hn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{ga.has(a)===!0?(i&&i(ga.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Hn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ga.set(l,c),Hn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Hn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Fi=-90,Oi=1;class Pf extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Lt(Fi,Oi,e,t);i.layers=this.layers,this.add(i);const r=new Lt(Fi,Oi,e,t);r.layers=this.layers,this.add(r);const a=new Lt(Fi,Oi,e,t);a.layers=this.layers,this.add(a);const o=new Lt(Fi,Oi,e,t);o.layers=this.layers,this.add(o);const l=new Lt(Fi,Oi,e,t);l.layers=this.layers,this.add(l);const c=new Lt(Fi,Oi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===As)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Lf extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Xo="\\[\\]\\.:\\/",If=new RegExp("["+Xo+"]","g"),qo="[^"+Xo+"]",Df="[^"+Xo.replace("\\.","")+"]",Nf=/((?:WC+[\/:])*)/.source.replace("WC",qo),Uf=/(WCOD+)?/.source.replace("WCOD",Df),Ff=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qo),Of=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qo),Bf=new RegExp("^"+Nf+Uf+Ff+Of+"$"),kf=["material","materials","bones","map"];class zf{constructor(e,t,n){const i=n||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class rt{constructor(e,t,n){this.path=t,this.parsedPath=n||rt.parseTrackName(t),this.node=rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new rt.Composite(e,t,n):new rt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(If,"")}static parseTrackName(e){const t=Bf.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);kf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Pe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ue("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ue("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ue("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ue("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ue("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;Ue("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}rt.Composite=zf;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Jo=class Jo{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};Jo.prototype.isMatrix2=!0;let dc=Jo;function fc(s,e,t,n){const i=Hf(n);switch(t){case uh:return s*e;case Eo:return s*e/i.components*i.byteLength;case wo:return s*e/i.components*i.byteLength;case vi:return s*e*2/i.components*i.byteLength;case Ao:return s*e*2/i.components*i.byteLength;case dh:return s*e*3/i.components*i.byteLength;case sn:return s*e*4/i.components*i.byteLength;case Ro:return s*e*4/i.components*i.byteLength;case fr:case pr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case mr:case gr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Fa:case Ba:return Math.max(s,16)*Math.max(e,8)/4;case Ua:case Oa:return Math.max(s,8)*Math.max(e,8)/2;case ka:case za:case Ga:case Va:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ha:case Sr:case Wa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qa:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ka:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case $a:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Za:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Qa:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ja:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case eo:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case to:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case no:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case io:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case so:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ro:case ao:case oo:return Math.ceil(s/4)*Math.ceil(e/4)*16;case lo:case co:return Math.ceil(s/4)*Math.ceil(e/4)*8;case br:case ho:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hf(s){switch(s){case $t:case oh:return{byteLength:1,components:1};case bs:case lh:case Cn:return{byteLength:2,components:1};case bo:case To:return{byteLength:2,components:4};case Rn:case So:case nn:return{byteLength:4,components:1};case ch:case hh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mo}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mo);function Ih(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Gf(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Vf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$f=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Qf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ep=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,np=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ip=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,up=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,dp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,mp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Sp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ap=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ip=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Np=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Up=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Fp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Op=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,qp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$p=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,em=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,im=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,am=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,om=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,dm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_m=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,vm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ym=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Am=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Im=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Om=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Jm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,n0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,i0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,s0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,l0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,h0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,u0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,p0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,x0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,S0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:Vf,alphahash_pars_fragment:Wf,alphamap_fragment:Xf,alphamap_pars_fragment:qf,alphatest_fragment:Kf,alphatest_pars_fragment:Yf,aomap_fragment:$f,aomap_pars_fragment:Zf,batching_pars_vertex:Jf,batching_vertex:Qf,begin_vertex:jf,beginnormal_vertex:ep,bsdfs:tp,iridescence_fragment:np,bumpmap_pars_fragment:ip,clipping_planes_fragment:sp,clipping_planes_pars_fragment:rp,clipping_planes_pars_vertex:ap,clipping_planes_vertex:op,color_fragment:lp,color_pars_fragment:cp,color_pars_vertex:hp,color_vertex:up,common:dp,cube_uv_reflection_fragment:fp,defaultnormal_vertex:pp,displacementmap_pars_vertex:mp,displacementmap_vertex:gp,emissivemap_fragment:_p,emissivemap_pars_fragment:xp,colorspace_fragment:vp,colorspace_pars_fragment:Mp,envmap_fragment:yp,envmap_common_pars_fragment:Sp,envmap_pars_fragment:bp,envmap_pars_vertex:Tp,envmap_physical_pars_fragment:Up,envmap_vertex:Ep,fog_vertex:wp,fog_pars_vertex:Ap,fog_fragment:Rp,fog_pars_fragment:Cp,gradientmap_pars_fragment:Pp,lightmap_pars_fragment:Lp,lights_lambert_fragment:Ip,lights_lambert_pars_fragment:Dp,lights_pars_begin:Np,lights_toon_fragment:Fp,lights_toon_pars_fragment:Op,lights_phong_fragment:Bp,lights_phong_pars_fragment:kp,lights_physical_fragment:zp,lights_physical_pars_fragment:Hp,lights_fragment_begin:Gp,lights_fragment_maps:Vp,lights_fragment_end:Wp,lightprobes_pars_fragment:Xp,logdepthbuf_fragment:qp,logdepthbuf_pars_fragment:Kp,logdepthbuf_pars_vertex:Yp,logdepthbuf_vertex:$p,map_fragment:Zp,map_pars_fragment:Jp,map_particle_fragment:Qp,map_particle_pars_fragment:jp,metalnessmap_fragment:em,metalnessmap_pars_fragment:tm,morphinstance_vertex:nm,morphcolor_vertex:im,morphnormal_vertex:sm,morphtarget_pars_vertex:rm,morphtarget_vertex:am,normal_fragment_begin:om,normal_fragment_maps:lm,normal_pars_fragment:cm,normal_pars_vertex:hm,normal_vertex:um,normalmap_pars_fragment:dm,clearcoat_normal_fragment_begin:fm,clearcoat_normal_fragment_maps:pm,clearcoat_pars_fragment:mm,iridescence_pars_fragment:gm,opaque_fragment:_m,packing:xm,premultiplied_alpha_fragment:vm,project_vertex:Mm,dithering_fragment:ym,dithering_pars_fragment:Sm,roughnessmap_fragment:bm,roughnessmap_pars_fragment:Tm,shadowmap_pars_fragment:Em,shadowmap_pars_vertex:wm,shadowmap_vertex:Am,shadowmask_pars_fragment:Rm,skinbase_vertex:Cm,skinning_pars_vertex:Pm,skinning_vertex:Lm,skinnormal_vertex:Im,specularmap_fragment:Dm,specularmap_pars_fragment:Nm,tonemapping_fragment:Um,tonemapping_pars_fragment:Fm,transmission_fragment:Om,transmission_pars_fragment:Bm,uv_pars_fragment:km,uv_pars_vertex:zm,uv_vertex:Hm,worldpos_vertex:Gm,background_vert:Vm,background_frag:Wm,backgroundCube_vert:Xm,backgroundCube_frag:qm,cube_vert:Km,cube_frag:Ym,depth_vert:$m,depth_frag:Zm,distance_vert:Jm,distance_frag:Qm,equirect_vert:jm,equirect_frag:e0,linedashed_vert:t0,linedashed_frag:n0,meshbasic_vert:i0,meshbasic_frag:s0,meshlambert_vert:r0,meshlambert_frag:a0,meshmatcap_vert:o0,meshmatcap_frag:l0,meshnormal_vert:c0,meshnormal_frag:h0,meshphong_vert:u0,meshphong_frag:d0,meshphysical_vert:f0,meshphysical_frag:p0,meshtoon_vert:m0,meshtoon_frag:g0,points_vert:_0,points_frag:x0,shadow_vert:v0,shadow_frag:M0,sprite_vert:y0,sprite_frag:S0},pe={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},yn={basic:{uniforms:zt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:zt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:zt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:zt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:zt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:zt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:zt([pe.points,pe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:zt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:zt([pe.common,pe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:zt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:zt([pe.sprite,pe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:zt([pe.common,pe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:zt([pe.lights,pe.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};yn.physical={uniforms:zt([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const hr={r:0,b:0,g:0},b0=new Ve,Dh=new Be;Dh.set(-1,0,0,0,1,0,0,0,1);function T0(s,e,t,n,i,r){const a=new Ne(0);let o=i===!0?0:1,l,c,h=null,u=0,d=null;function f(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){const M=S.backgroundBlurriness>0;w=e.get(w,M)}return w}function g(S){let w=!1;const M=f(S);M===null?m(a,o):M&&M.isColor&&(m(M,1),w=!0);const b=s.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(S,w){const M=f(w);M&&(M.isCubeTexture||M.mapping===Ur)?(c===void 0&&(c=new xt(new li(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:Ki(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(b0.makeRotationFromEuler(w.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Dh),c.material.toneMapped=Ye.getTransfer(M.colorSpace)!==it,(h!==M||u!==M.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,d=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new xt(new Or(2,2),new Pn({name:"BackgroundMaterial",uniforms:Ki(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(M.colorSpace)!==it,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,d=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,w){S.getRGB(hr,Ah(s)),t.buffers.color.setClear(hr.r,hr.g,hr.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:v,dispose:p}}function E0(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(L,N,I,P,O){let z=!1;const H=u(L,P,I,N);r!==H&&(r=H,c(r.object)),z=f(L,P,I,O),z&&g(L,P,I,O),O!==null&&e.update(O,s.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,M(L,N,I,P),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return s.createVertexArray()}function c(L){return s.bindVertexArray(L)}function h(L){return s.deleteVertexArray(L)}function u(L,N,I,P){const O=P.wireframe===!0;let z=n[N.id];z===void 0&&(z={},n[N.id]=z);const H=L.isInstancedMesh===!0?L.id:0;let Q=z[H];Q===void 0&&(Q={},z[H]=Q);let X=Q[I.id];X===void 0&&(X={},Q[I.id]=X);let q=X[O];return q===void 0&&(q=d(l()),X[O]=q),q}function d(L){const N=[],I=[],P=[];for(let O=0;O<t;O++)N[O]=0,I[O]=0,P[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:I,attributeDivisors:P,object:L,attributes:{},index:null}}function f(L,N,I,P){const O=r.attributes,z=N.attributes;let H=0;const Q=I.getAttributes();for(const X in Q)if(Q[X].location>=0){const Y=O[X];let ve=z[X];if(ve===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(ve=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(ve=L.instanceColor)),Y===void 0||Y.attribute!==ve||ve&&Y.data!==ve.data)return!0;H++}return r.attributesNum!==H||r.index!==P}function g(L,N,I,P){const O={},z=N.attributes;let H=0;const Q=I.getAttributes();for(const X in Q)if(Q[X].location>=0){let Y=z[X];Y===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(Y=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(Y=L.instanceColor));const ve={};ve.attribute=Y,Y&&Y.data&&(ve.data=Y.data),O[X]=ve,H++}r.attributes=O,r.attributesNum=H,r.index=P}function v(){const L=r.newAttributes;for(let N=0,I=L.length;N<I;N++)L[N]=0}function m(L){p(L,0)}function p(L,N){const I=r.newAttributes,P=r.enabledAttributes,O=r.attributeDivisors;I[L]=1,P[L]===0&&(s.enableVertexAttribArray(L),P[L]=1),O[L]!==N&&(s.vertexAttribDivisor(L,N),O[L]=N)}function S(){const L=r.newAttributes,N=r.enabledAttributes;for(let I=0,P=N.length;I<P;I++)N[I]!==L[I]&&(s.disableVertexAttribArray(I),N[I]=0)}function w(L,N,I,P,O,z,H){H===!0?s.vertexAttribIPointer(L,N,I,O,z):s.vertexAttribPointer(L,N,I,P,O,z)}function M(L,N,I,P){v();const O=P.attributes,z=I.getAttributes(),H=N.defaultAttributeValues;for(const Q in z){const X=z[Q];if(X.location>=0){let q=O[Q];if(q===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(q=L.instanceColor)),q!==void 0){const Y=q.normalized,ve=q.itemSize,oe=e.get(q);if(oe===void 0)continue;const Ie=oe.buffer,ze=oe.type,Qe=oe.bytesPerElement,Z=ze===s.INT||ze===s.UNSIGNED_INT||q.gpuType===So;if(q.isInterleavedBufferAttribute){const ne=q.data,Me=ne.stride,Fe=q.offset;if(ne.isInstancedInterleavedBuffer){for(let xe=0;xe<X.locationSize;xe++)p(X.location+xe,ne.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let xe=0;xe<X.locationSize;xe++)m(X.location+xe);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let xe=0;xe<X.locationSize;xe++)w(X.location+xe,ve/X.locationSize,ze,Y,Me*Qe,(Fe+ve/X.locationSize*xe)*Qe,Z)}else{if(q.isInstancedBufferAttribute){for(let ne=0;ne<X.locationSize;ne++)p(X.location+ne,q.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ne=0;ne<X.locationSize;ne++)m(X.location+ne);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let ne=0;ne<X.locationSize;ne++)w(X.location+ne,ve/X.locationSize,ze,Y,ve*Qe,ve/X.locationSize*ne*Qe,Z)}}else if(H!==void 0){const Y=H[Q];if(Y!==void 0)switch(Y.length){case 2:s.vertexAttrib2fv(X.location,Y);break;case 3:s.vertexAttrib3fv(X.location,Y);break;case 4:s.vertexAttrib4fv(X.location,Y);break;default:s.vertexAttrib1fv(X.location,Y)}}}}S()}function b(){E();for(const L in n){const N=n[L];for(const I in N){const P=N[I];for(const O in P){const z=P[O];for(const H in z)h(z[H].object),delete z[H];delete P[O]}}delete n[L]}}function T(L){if(n[L.id]===void 0)return;const N=n[L.id];for(const I in N){const P=N[I];for(const O in P){const z=P[O];for(const H in z)h(z[H].object),delete z[H];delete P[O]}}delete n[L.id]}function A(L){for(const N in n){const I=n[N];for(const P in I){const O=I[P];if(O[L.id]===void 0)continue;const z=O[L.id];for(const H in z)h(z[H].object),delete z[H];delete O[L.id]}}}function x(L){for(const N in n){const I=n[N],P=L.isInstancedMesh===!0?L.id:0,O=I[P];if(O!==void 0){for(const z in O){const H=O[z];for(const Q in H)h(H[Q].object),delete H[Q];delete O[z]}delete I[P],Object.keys(I).length===0&&delete n[N]}}}function E(){C(),a=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:E,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function w0(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function A0(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==sn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const x=A===Cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==$t&&A!==nn&&!x&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Pe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:M,maxSamples:b,samples:T}}function R0(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new ni,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const S=r?0:n,w=S*4;let M=p.clippingState||null;l.value=M,M=h(g,d,w,f);for(let b=0;b!==w;++b)M[b]=t[b];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,M=f;w!==v;++w,M+=4)a.copy(u[w]).applyMatrix4(S,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const Hi=4,C0=6,P0=20,L0=256,cs=new Yi,pc=new Ne;let _a=null,xa=0,va=0,Ma=!1;const I0=new B,pi=new B;class mc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=I0}=r;_a=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_a,xa,va),this._renderer.xr.enabled=Ma,e.scissorTest=!1,Bi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xi||e.mapping===Xi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_a=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:Cn,format:sn,colorSpace:Zt,depthBuffer:!1},i=gc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gc(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=D0(r)),this._blurMaterial=U0(r,e,t),this._ggxMaterial=N0(r,e,t)}return i}_compileMaterial(e){const t=new xt(new Ft,e);this._renderer.compile(t,cs)}_sceneToCubeUV(e,t,n,i,r){const l=new Lt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(pc),u.toneMapping=En,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xt(new li,new si({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(pc),p=!0);for(let w=0;w<6;w++){const M=w%3;M===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):M===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));const b=this._cubeSize;Bi(i,M*b,w>2?b:0,b,b),u.setRenderTarget(i),p&&u.render(v,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===xi||e.mapping===Xi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_c());const r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Bi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,cs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-Hi?n-g+Hi:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Bi(r,m,p,3*v,2*v),i.setRenderTarget(r),i.render(o,cs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Bi(e,m,p,3*v,2*v),i.setRenderTarget(e),i.render(o,cs)}_blur(e,t,n,i){const r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,i,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[i],u=3*h*(i>this._lodMax-Hi?i-this._lodMax+Hi:0),d=4*(this._cubeSize-h);Bi(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(l,cs)}}function D0(s){const e=[],t=[];let n=s;const i=s-Hi+1+C0;for(let r=0;r<i;r++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,g=new Float32Array(f*d*u),v=new Float32Array(f*d*u);for(let p=0;p<u;p++){const S=p%3*2/3-1,w=p>2?0:-1,M=[S,w,0,S+2/3,w,0,S+2/3,w+1,0,S,w,0,S+2/3,w+1,0,S,w+1,0];g.set(M,f*d*p);for(let b=0;b<d;b++){const T=h[b*2]*2-1,A=h[b*2+1]*2-1;p===0?pi.set(1,A,T):p===1?pi.set(-T,1,-A):p===2?pi.set(-T,A,1):p===3?pi.set(-1,A,-T):p===4?pi.set(-T,-1,A):pi.set(T,A,-1),pi.toArray(v,(p*d+b)*f)}}const m=new Ft;m.setAttribute("position",new Xt(g,f)),m.setAttribute("outputDirection",new Xt(v,f)),t.push(new xt(m,null)),n>Hi&&n--}return{lodMeshes:t,sizeLods:e}}function gc(s,e,t){const n=new fn(s,e,t);return n.texture.mapping=Ur,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bi(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function N0(s,e,t){return new Pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:L0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Br(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function U0(s,e,t){return new Pn({name:"SphericalGaussianBlur",defines:{SAMPLES:P0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Br(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function _c(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Br(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function xc(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Br(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Br(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Nh extends fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Eh(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new li(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:Ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:Gn});r.uniforms.tEquirect.value=t;const a=new xt(i,r),o=t.minFilter;return t.minFilter===zn&&(t.minFilter=wt),new Pf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}function F0(s){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===Gr||f===Vr)if(e.has(d)){const g=e.get(d).texture;return o(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const v=new Nh(g.height);return v.fromEquirectangularTexture(s,d),e.set(d,v),d.addEventListener("dispose",c),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const f=d.mapping,g=f===Gr||f===Vr,v=f===xi||f===Xi;if(g||v){let m=t.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new mc(s)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const S=d.image;return g&&S&&S.height>0||v&&S&&l(S)?(n===null&&(n=new mc(s)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===Gr?d.mapping=xi:f===Vr&&(d.mapping=Xi),d}function l(d){let f=0;const g=6;for(let v=0;v<g;v++)d[v]!==void 0&&f++;return f===g}function c(d){const f=d.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function O0(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Gi("WebGLRenderer: "+n+" extension not supported."),i}}}function B0(s,e,t,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(g===void 0)return;if(f!==null){const S=f.array;v=f.version;for(let w=0,M=S.length;w<M;w+=3){const b=S[w+0],T=S[w+1],A=S[w+2];d.push(b,T,T,A,A,b)}}else{const S=g.array;v=g.version;for(let w=0,M=S.length/3-1;w<M;w+=3){const b=w+0,T=w+1,A=w+2;d.push(b,T,T,A,A,b)}}const m=new(g.count>=65535?Mh:vh)(d,1);m.version=v;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function k0(s,e,t){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){s.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let v=0;for(let m=0;m<f;m++)v+=d[m];t.update(v,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function z0(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Ue("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function H0(s,e,t){const n=new WeakMap,i=new ot;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let E=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let w=0;f===!0&&(w=1),g===!0&&(w=2),v===!0&&(w=3);let M=o.attributes.position.count*w,b=1;M>e.maxTextureSize&&(b=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const T=new Float32Array(M*b*4*u),A=new gh(T,M,b,u);A.type=nn,A.needsUpdate=!0;const x=w*4;for(let C=0;C<u;C++){const L=m[C],N=p[C],I=S[C],P=M*b*4*C;for(let O=0;O<L.count;O++){const z=O*x;f===!0&&(i.fromBufferAttribute(L,O),T[P+z+0]=i.x,T[P+z+1]=i.y,T[P+z+2]=i.z,T[P+z+3]=0),g===!0&&(i.fromBufferAttribute(N,O),T[P+z+4]=i.x,T[P+z+5]=i.y,T[P+z+6]=i.z,T[P+z+7]=0),v===!0&&(i.fromBufferAttribute(I,O),T[P+z+8]=i.x,T[P+z+9]=i.y,T[P+z+10]=i.z,T[P+z+11]=I.itemSize===4?i.w:1)}}d={count:u,texture:A,size:new qe(M,b)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function G0(s,e,t,n,i){let r=new WeakMap;function a(c){const h=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const V0={[jc]:"LINEAR_TONE_MAPPING",[eh]:"REINHARD_TONE_MAPPING",[th]:"CINEON_TONE_MAPPING",[yo]:"ACES_FILMIC_TONE_MAPPING",[ih]:"AGX_TONE_MAPPING",[sh]:"NEUTRAL_TONE_MAPPING",[nh]:"CUSTOM_TONE_MAPPING"};function W0(s,e,t,n,i,r){const a=new fn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Ft;c.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Tt([0,2,0,0,2,0],2));const h=new af({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new xt(c,h),d=new Yi(-1,1,1,-1,0,1);let f=null,g=null,v=!1,m,p=null,S=[],w=!1;this.setSize=function(M,b){a.setSize(M,b),o!==null&&o.setSize(M,b),l!==null&&l.setSize(M,b);for(let T=0;T<S.length;T++){const A=S[T];A.setSize&&A.setSize(M,b)}},this.setEffects=function(M){S=M,w=S.length>0&&S[0].isRenderPass===!0;const b=a.width,T=a.height;S.length>0&&o===null&&(o=new fn(b,T,{type:Cn,depthBuffer:!1,stencilBuffer:!1}),l=new fn(b,T,{type:Cn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<S.length;A++){const x=S[A];x.setSize&&x.setSize(b,T)}},this.begin=function(M,b){if(v||M.toneMapping===En&&S.length===0)return!1;if(p=b,b!==null){const T=b.width,A=b.height;(a.width!==T||a.height!==A)&&this.setSize(T,A)}return w===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=En,!0},this.hasRenderPass=function(){return w},this.end=function(M,b){M.toneMapping=m,v=!0;let T=a,A=o;for(let x=0;x<S.length;x++){const E=S[x];E.enabled!==!1&&(E.render(M,A,T,b),E.needsSwap!==!1&&(T=A,A=A===o?l:o))}if(f!==M.outputColorSpace||g!==M.toneMapping){f=M.outputColorSpace,g=M.toneMapping,h.defines={},Ye.getTransfer(f)===it&&(h.defines.SRGB_TRANSFER="");const x=V0[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,M.setRenderTarget(p),M.render(u,d),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const Uh=new At,mo=new Cs(1,1),Fh=new gh,Oh=new Pd,Bh=new Eh,vc=[],Mc=[],yc=new Float32Array(16),Sc=new Float32Array(9),bc=new Float32Array(4);function ji(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=vc[i];if(r===void 0&&(r=new Float32Array(i),vc[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Rt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ct(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function kr(s,e){let t=Mc[e];t===void 0&&(t=new Int32Array(e),Mc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function X0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function q0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;s.uniform2fv(this.addr,e),Ct(t,e)}}function K0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;s.uniform3fv(this.addr,e),Ct(t,e)}}function Y0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;s.uniform4fv(this.addr,e),Ct(t,e)}}function $0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;bc.set(n),s.uniformMatrix2fv(this.addr,!1,bc),Ct(t,n)}}function Z0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;Sc.set(n),s.uniformMatrix3fv(this.addr,!1,Sc),Ct(t,n)}}function J0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;yc.set(n),s.uniformMatrix4fv(this.addr,!1,yc),Ct(t,n)}}function Q0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function j0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;s.uniform2iv(this.addr,e),Ct(t,e)}}function eg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;s.uniform3iv(this.addr,e),Ct(t,e)}}function tg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;s.uniform4iv(this.addr,e),Ct(t,e)}}function ng(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function ig(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;s.uniform2uiv(this.addr,e),Ct(t,e)}}function sg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;s.uniform3uiv(this.addr,e),Ct(t,e)}}function rg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;s.uniform4uiv(this.addr,e),Ct(t,e)}}function ag(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(mo.compareFunction=t.isReversedDepthBuffer()?Po:Co,r=mo):r=Uh,t.setTexture2D(e||r,i)}function og(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Oh,i)}function lg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Bh,i)}function cg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Fh,i)}function hg(s){switch(s){case 5126:return X0;case 35664:return q0;case 35665:return K0;case 35666:return Y0;case 35674:return $0;case 35675:return Z0;case 35676:return J0;case 5124:case 35670:return Q0;case 35667:case 35671:return j0;case 35668:case 35672:return eg;case 35669:case 35673:return tg;case 5125:return ng;case 36294:return ig;case 36295:return sg;case 36296:return rg;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return og;case 35680:case 36300:case 36308:case 36293:return lg;case 36289:case 36303:case 36311:case 36292:return cg}}function ug(s,e){s.uniform1fv(this.addr,e)}function dg(s,e){const t=ji(e,this.size,2);s.uniform2fv(this.addr,t)}function fg(s,e){const t=ji(e,this.size,3);s.uniform3fv(this.addr,t)}function pg(s,e){const t=ji(e,this.size,4);s.uniform4fv(this.addr,t)}function mg(s,e){const t=ji(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function gg(s,e){const t=ji(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function _g(s,e){const t=ji(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function xg(s,e){s.uniform1iv(this.addr,e)}function vg(s,e){s.uniform2iv(this.addr,e)}function Mg(s,e){s.uniform3iv(this.addr,e)}function yg(s,e){s.uniform4iv(this.addr,e)}function Sg(s,e){s.uniform1uiv(this.addr,e)}function bg(s,e){s.uniform2uiv(this.addr,e)}function Tg(s,e){s.uniform3uiv(this.addr,e)}function Eg(s,e){s.uniform4uiv(this.addr,e)}function wg(s,e,t){const n=this.cache,i=e.length,r=kr(t,i);Rt(n,r)||(s.uniform1iv(this.addr,r),Ct(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=mo:a=Uh;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function Ag(s,e,t){const n=this.cache,i=e.length,r=kr(t,i);Rt(n,r)||(s.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Oh,r[a])}function Rg(s,e,t){const n=this.cache,i=e.length,r=kr(t,i);Rt(n,r)||(s.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Bh,r[a])}function Cg(s,e,t){const n=this.cache,i=e.length,r=kr(t,i);Rt(n,r)||(s.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Fh,r[a])}function Pg(s){switch(s){case 5126:return ug;case 35664:return dg;case 35665:return fg;case 35666:return pg;case 35674:return mg;case 35675:return gg;case 35676:return _g;case 5124:case 35670:return xg;case 35667:case 35671:return vg;case 35668:case 35672:return Mg;case 35669:case 35673:return yg;case 5125:return Sg;case 36294:return bg;case 36295:return Tg;case 36296:return Eg;case 35678:case 36198:case 36298:case 36306:case 35682:return wg;case 35679:case 36299:case 36307:return Ag;case 35680:case 36300:case 36308:case 36293:return Rg;case 36289:case 36303:case 36311:case 36292:return Cg}}class Lg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hg(t.type)}}class Ig{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Pg(t.type)}}class Dg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const ya=/(\w+)(\])?(\[|\.)?/g;function Tc(s,e){s.seq.push(e),s.map[e.id]=e}function Ng(s,e,t){const n=s.name,i=n.length;for(ya.lastIndex=0;;){const r=ya.exec(n),a=ya.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Tc(t,c===void 0?new Lg(o,s,e):new Ig(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Dg(o),Tc(t,u)),t=u}}}class xr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Ng(o,l,this)}const i=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Ec(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Ug=37297;let Fg=0;function Og(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const wc=new Be;function Bg(s){Ye._getMatrix(wc,Ye.workingColorSpace,s);const e=`mat3( ${wc.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(s)){case Tr:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Ac(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Og(s.getShaderSource(e),o)}else return r}function kg(s,e){const t=Bg(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const zg={[jc]:"Linear",[eh]:"Reinhard",[th]:"Cineon",[yo]:"ACESFilmic",[ih]:"AgX",[sh]:"Neutral",[nh]:"Custom"};function Hg(s,e){const t=zg[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ur=new B;function Gg(){Ye.getLuminanceCoefficients(ur);const s=ur.x.toFixed(4),e=ur.y.toFixed(4),t=ur.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ps).join(`
`)}function Wg(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Xg(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function ps(s){return s!==""}function Rc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function go(s){return s.replace(qg,Yg)}const Kg=new Map;function Yg(s,e){let t=Ge[e];if(t===void 0){const n=Kg.get(e);if(n!==void 0)t=Ge[n],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return go(t)}const $g=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pc(s){return s.replace($g,Zg)}function Zg(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Lc(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Jg={[_s]:"SHADOWMAP_TYPE_PCF",[ds]:"SHADOWMAP_TYPE_VSM"};function Qg(s){return Jg[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const jg={[xi]:"ENVMAP_TYPE_CUBE",[Xi]:"ENVMAP_TYPE_CUBE",[Ur]:"ENVMAP_TYPE_CUBE_UV"};function e_(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":jg[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const t_={[Xi]:"ENVMAP_MODE_REFRACTION"};function n_(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":t_[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const i_={[Qc]:"ENVMAP_BLENDING_MULTIPLY",[Wu]:"ENVMAP_BLENDING_MIX",[Xu]:"ENVMAP_BLENDING_ADD"};function s_(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":i_[s.combine]||"ENVMAP_BLENDING_NONE"}function r_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function a_(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Qg(t),c=e_(t),h=n_(t),u=s_(t),d=r_(t),f=Vg(t),g=Wg(r),v=i.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ps).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ps).join(`
`),p.length>0&&(p+=`
`)):(m=[Lc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),p=[Lc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==En?"#define TONE_MAPPING":"",t.toneMapping!==En?Ge.tonemapping_pars_fragment:"",t.toneMapping!==En?Hg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,kg("linearToOutputTexel",t.outputColorSpace),Gg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ps).join(`
`)),a=go(a),a=Rc(a,t),a=Cc(a,t),o=go(o),o=Rc(o,t),o=Cc(o,t),a=Pc(a),o=Pc(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Al?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=S+m+a,M=S+p+o,b=Ec(i,i.VERTEX_SHADER,w),T=Ec(i,i.FRAGMENT_SHADER,M);i.attachShader(v,b),i.attachShader(v,T),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function A(L){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(v)||"",I=i.getShaderInfoLog(b)||"",P=i.getShaderInfoLog(T)||"",O=N.trim(),z=I.trim(),H=P.trim();let Q=!0,X=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,b,T);else{const q=Ac(i,b,"vertex"),Y=Ac(i,T,"fragment");Ue("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+q+`
`+Y)}else O!==""?Pe("WebGLProgram: Program Info Log:",O):(z===""||H==="")&&(X=!1);X&&(L.diagnostics={runnable:Q,programLog:O,vertexShader:{log:z,prefix:m},fragmentShader:{log:H,prefix:p}})}i.deleteShader(b),i.deleteShader(T),x=new xr(i,v),E=Xg(i,v)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(v,Ug)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=T,this}let o_=0;class l_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new c_(e),t.set(e,n)),n}}class c_{constructor(e){this.id=o_++,this.code=e,this.usedTimes=0}}function h_(s){return s===vi||s===Sr||s===br}function u_(s,e,t,n,i,r){const a=new _h,o=new l_,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,E,C,L,N,I){const P=L.fog,O=N.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Q=e.get(x.envMap||z,H),X=Q&&Q.mapping===Ur?Q.image.height:null,q=f[x.type];x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&Pe("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const Y=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ve=Y!==void 0?Y.length:0;let oe=0;O.morphAttributes.position!==void 0&&(oe=1),O.morphAttributes.normal!==void 0&&(oe=2),O.morphAttributes.color!==void 0&&(oe=3);let Ie,ze,Qe,Z;if(q){const ct=yn[q];Ie=ct.vertexShader,ze=ct.fragmentShader}else{Ie=x.vertexShader,ze=x.fragmentShader;const ct=o.getVertexShaderStage(x),et=o.getFragmentShaderStage(x);o.update(x,ct,et),Qe=ct.id,Z=et.id}const ne=s.getRenderTarget(),Me=s.state.buffers.depth.getReversed(),Fe=N.isInstancedMesh===!0,xe=N.isBatchedMesh===!0,j=!!x.map,ae=!!x.matcap,re=!!Q,Ae=!!x.aoMap,Ze=!!x.lightMap,Oe=!!x.bumpMap&&x.wireframe===!1,Je=!!x.normalMap,Mt=!!x.displacementMap,Gt=!!x.emissiveMap,pt=!!x.metalnessMap,yt=!!x.roughnessMap,F=x.anisotropy>0,It=x.clearcoat>0,nt=x.dispersion>0,R=x.retroreflectivity>0,_=x.iridescence>0,k=x.sheen>0,W=x.transmission>0,$=F&&!!x.anisotropyMap,se=It&&!!x.clearcoatMap,le=It&&!!x.clearcoatNormalMap,J=It&&!!x.clearcoatRoughnessMap,te=_&&!!x.iridescenceMap,ce=_&&!!x.iridescenceThicknessMap,Re=k&&!!x.sheenColorMap,fe=k&&!!x.sheenRoughnessMap,he=!!x.specularMap,Ce=!!x.specularColorMap,De=!!x.specularIntensityMap,ke=W&&!!x.transmissionMap,U=W&&!!x.thicknessMap,ue=!!x.gradientMap,ee=!!x.alphaMap,de=x.alphaTest>0,_e=!!x.alphaHash,ie=!!x.extensions;let Le=En;x.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Le=s.toneMapping);const Ee={shaderID:q,shaderType:x.type,shaderName:x.name,vertexShader:Ie,fragmentShader:ze,defines:x.defines,customVertexShaderID:Qe,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:xe,batchingColor:xe&&N._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&N.instanceColor!==null,instancingMorph:Fe&&N.morphTexture!==null,outputColorSpace:ne===null?s.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:j,matcap:ae,envMap:re,envMapMode:re&&Q.mapping,envMapCubeUVHeight:X,aoMap:Ae,lightMap:Ze,bumpMap:Oe,normalMap:Je,displacementMap:Mt,emissiveMap:Gt,normalMapObjectSpace:Je&&x.normalMapType===Zu,normalMapTangentSpace:Je&&x.normalMapType===fo,packedNormalMap:Je&&x.normalMapType===fo&&h_(x.normalMap.format),metalnessMap:pt,roughnessMap:yt,anisotropy:F,anisotropyMap:$,clearcoat:It,clearcoatMap:se,clearcoatNormalMap:le,clearcoatRoughnessMap:J,dispersion:nt,retroreflection:R,iridescence:_,iridescenceMap:te,iridescenceThicknessMap:ce,sheen:k,sheenColorMap:Re,sheenRoughnessMap:fe,specularMap:he,specularColorMap:Ce,specularIntensityMap:De,transmission:W,transmissionMap:ke,thicknessMap:U,gradientMap:ue,opaque:x.transparent===!1&&x.blending===xs&&x.alphaToCoverage===!1,alphaMap:ee,alphaTest:de,alphaHash:_e,combine:x.combine,mapUv:j&&g(x.map.channel),aoMapUv:Ae&&g(x.aoMap.channel),lightMapUv:Ze&&g(x.lightMap.channel),bumpMapUv:Oe&&g(x.bumpMap.channel),normalMapUv:Je&&g(x.normalMap.channel),displacementMapUv:Mt&&g(x.displacementMap.channel),emissiveMapUv:Gt&&g(x.emissiveMap.channel),metalnessMapUv:pt&&g(x.metalnessMap.channel),roughnessMapUv:yt&&g(x.roughnessMap.channel),anisotropyMapUv:$&&g(x.anisotropyMap.channel),clearcoatMapUv:se&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:fe&&g(x.sheenRoughnessMap.channel),specularMapUv:he&&g(x.specularMap.channel),specularColorMapUv:Ce&&g(x.specularColorMap.channel),specularIntensityMapUv:De&&g(x.specularIntensityMap.channel),transmissionMapUv:ke&&g(x.transmissionMap.channel),thicknessMapUv:U&&g(x.thicknessMap.channel),alphaMapUv:ee&&g(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Je||F),vertexNormals:!!O.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!O.attributes.uv&&(j||ee),fog:!!P,useFog:x.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||O.attributes.normal===void 0&&Je===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Me,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:oe,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Le,decodeVideoTexture:j&&x.map.isVideoTexture===!0&&Ye.getTransfer(x.map.colorSpace)===it,decodeVideoTextureEmissive:Gt&&x.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(x.emissiveMap.colorSpace)===it,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Sn,flipSided:x.side===Wt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ie&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&x.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ee.vertexUv1s=l.has(1),Ee.vertexUv2s=l.has(2),Ee.vertexUv3s=l.has(3),l.clear(),Ee}function m(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)E.push(C),E.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(p(E,x),S(E,x),E.push(s.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function p(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function S(x,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function w(x){const E=f[x.type];let C;if(E){const L=yn[E];C=nf.clone(L.uniforms)}else C=x.uniforms;return C}function M(x,E){let C=h.get(E);return C!==void 0?++C.usedTimes:(C=new a_(s,E,x,i),c.push(C),h.set(E,C)),C}function b(x){if(--x.usedTimes===0){const E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function A(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:w,acquireProgram:M,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:A}}function d_(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function f_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Ic(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Dc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,v,m,p){let S=s[e];return S===void 0?(S={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:m,group:p},s[e]=S):(S.id=d.id,S.object=d,S.geometry=f,S.material=g,S.materialVariant=a(d),S.groupOrder=v,S.renderOrder=d.renderOrder,S.z=m,S.group=p),e++,S}function l(d,f,g,v,m,p,S){S.reversedDepth===!0&&(m=-m);const w=o(d,f,g,v,m,p);g.transmission>0?n.push(w):g.transparent===!0?i.push(w):t.push(w)}function c(d,f,g,v,m,p){const S=o(d,f,g,v,m,p);g.transmission>0?n.unshift(S):g.transparent===!0?i.unshift(S):t.unshift(S)}function h(d,f){t.length>1&&t.sort(d||f_),n.length>1&&n.sort(f||Ic),i.length>1&&i.sort(f||Ic)}function u(){for(let d=e,f=s.length;d<f;d++){const g=s[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function p_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Dc,s.set(n,[a])):i>=r.length?(a=new Dc,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function m_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new Ne};break;case"SpotLight":t={position:new B,direction:new B,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new B,halfWidth:new B,halfHeight:new B};break}return s[e.id]=t,t}}}function g_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let __=0;function x_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function v_(s){const e=new m_,t=g_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const i=new B,r=new Ve,a=new Ve;function o(c){let h=0,u=0,d=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,S=0,w=0,M=0,b=0,T=0,A=0,x=0,E=0,C=0;c.sort(x_);for(let N=0,I=c.length;N<I;N++){const P=c[N],O=P.color,z=P.intensity,H=P.distance;let Q=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===vi?Q=P.shadow.map.texture:Q=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=O.r*z,u+=O.g*z,d+=O.b*z;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],z);C++}else if(P.isSunLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const q=P.shadow,Y=t.get(P);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize.copy(q.mapSize).multiply(q.getFrameExtents()),n.sunShadow[g]=Y,n.sunShadowMap[g]=Q;const ve=q.getViewportCount();for(let oe=0;oe<ve;oe++)n.sunShadowMatrix[v+oe]=q.getMatrix(oe),n.sunShadowCascade[v+oe]=q._cascadeData[oe];v+=ve,g++}n.sun[f]=X,f++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const q=P.shadow,Y=t.get(P);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,n.directionalShadow[m]=Y,n.directionalShadowMap[m]=Q,n.directionalShadowMatrix[m]=P.shadow.matrix,b++}n.directional[m]=X,m++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(O).multiplyScalar(z),X.distance=H,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[S]=X;const q=P.shadow;if(P.map&&(n.spotLightMap[x]=P.map,x++,q.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[S]=q.matrix,P.castShadow){const Y=t.get(P);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,n.spotShadow[S]=Y,n.spotShadowMap[S]=Q,A++}S++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(O).multiplyScalar(z),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[w]=X,w++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const q=P.shadow,Y=t.get(P);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,Y.shadowCameraNear=q.camera.near,Y.shadowCameraFar=q.camera.far,n.pointShadow[p]=Y,n.pointShadowMap[p]=Q,n.pointShadowMatrix[p]=P.shadow.matrix,T++}n.point[p]=X,p++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(z),X.groundColor.copy(P.groundColor).multiplyScalar(z),n.hemi[M]=X,M++}}w>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==S||L.rectAreaLength!==w||L.hemiLength!==M||L.numSunShadows!==g||L.numDirectionalShadows!==b||L.numPointShadows!==T||L.numSpotShadows!==A||L.numSpotMaps!==x||L.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=S,n.rectArea.length=w,n.point.length=p,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+x-E,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,L.sunLength=f,L.directionalLength=m,L.pointLength=p,L.spotLength=S,L.rectAreaLength=w,L.hemiLength=M,L.numSunShadows=g,L.numDirectionalShadows=b,L.numPointShadows=T,L.numSpotShadows=A,L.numSpotMaps=x,L.numLightProbes=C,n.version=__++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0,m=0;const p=h.matrixWorldInverse;for(let S=0,w=c.length;S<w;S++){const M=c[S];if(M.isSunLight){const b=n.sun[u];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(p),u++}else if(M.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),d++}else if(M.isSpotLight){const b=n.spot[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),g++}else if(M.isRectAreaLight){const b=n.rectArea[v];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const b=n.hemi[m];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Nc(s){const e=new v_(s),t=[],n=[],i=[];function r(d){u.camera=d,t.length=0,n.length=0,i.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function l(d){i.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function M_(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Nc(s),e.set(i,[o])):r>=a.length?(o=new Nc(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const y_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,b_=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],T_=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Uc=new Ve,hs=new B,Sa=new B;function E_(s,e,t){let n=new Oo;const i=new qe,r=new qe,a=new ot,o=new of,l=new lf,c={},h=t.maxTextureSize,u={[ai]:Wt,[Wt]:ai,[Sn]:Sn},d=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:y_,fragmentShader:S_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ft;g.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new xt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_s;let p=this.type;this.render=function(T,A,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Eu&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=_s);const E=s.getRenderTarget(),C=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Gn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const I=p!==this.type;I&&A.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(O=>O.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,O=T.length;P<O;P++){const z=T[P],H=z.shadow;if(H===void 0){Pe("WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const Q=H.getFrameExtents();i.multiply(Q),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Q.x),i.x=r.x*Q.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Q.y),i.y=r.y*Q.y,H.mapSize.y=r.y));const X=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=X,H.map===null||I===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ds){if(z.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new fn(i.x,i.y,{format:vi,type:Cn,minFilter:wt,magFilter:wt,generateMipmaps:!1}),H.map.texture.name=z.name+".shadowMap",H.map.depthTexture=new Cs(i.x,i.y,nn),H.map.depthTexture.name=z.name+".shadowMapDepth",H.map.depthTexture.format=Wn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Et,H.map.depthTexture.magFilter=Et}else z.isPointLight?(H.map=new Nh(i.x),H.map.depthTexture=new ef(i.x,Rn)):(H.map=new fn(i.x,i.y),H.map.depthTexture=new Cs(i.x,i.y,Rn)),H.map.depthTexture.name=z.name+".shadowMap",H.map.depthTexture.format=Wn,this.type===_s?(H.map.depthTexture.compareFunction=X?Po:Co,H.map.depthTexture.minFilter=wt,H.map.depthTexture.magFilter=wt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Et,H.map.depthTexture.magFilter=Et);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==i.x||H.map.height!==i.y)&&H.map.setSize(i.x,i.y);const q=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();z.isPointLight!==!0&&H.updateMatrices(z,x);for(let Y=0;Y<q;Y++){const ve=H.getCamera(Y);if(z.isPointLight){const oe=H.camera,Ie=H.matrix,ze=z.distance||oe.far;ze!==oe.far&&(oe.far=ze,oe.updateProjectionMatrix()),hs.setFromMatrixPosition(z.matrixWorld),oe.position.copy(hs),Sa.copy(oe.position),Sa.add(b_[Y]),oe.up.copy(T_[Y]),oe.lookAt(Sa),oe.updateMatrixWorld(),Ie.makeTranslation(-hs.x,-hs.y,-hs.z),Uc.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Uc,oe.coordinateSystem,oe.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,Y),s.clear();else{Y===0&&(s.setRenderTarget(H.map),s.clear());const oe=H.getViewport(Y);a.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),N.viewport(a)}n=H.getFrustum(Y),M(A,x,ve,z,this.type)}H.isPointLightShadow!==!0&&this.type===ds&&S(H,x),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(E,C,L)};function S(T,A){const x=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new fn(i.x,i.y,{format:vi,type:Cn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(A,null,x,d,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(A,null,x,f,v,null)}function w(T,A,x,E){let C=null;const L=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)C=L;else if(C=x.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const N=C.uuid,I=A.uuid;let P=c[N];P===void 0&&(P={},c[N]=P);let O=P[I];O===void 0&&(O=C.clone(),P[I]=O,A.addEventListener("dispose",b)),C=O}if(C.visible=A.visible,C.wireframe=A.wireframe,E===ds?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:u[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const N=s.properties.get(C);N.light=x}return C}function M(T,A,x,E,C){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===ds)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const I=e.update(T),P=T.material;if(Array.isArray(P)){const O=I.groups;for(let z=0,H=O.length;z<H;z++){const Q=O[z],X=P[Q.materialIndex];if(X&&X.visible){const q=w(T,X,E,C);T.onBeforeShadow(s,T,A,x,I,q,Q),s.renderBufferDirect(x,null,I,q,T,Q),T.onAfterShadow(s,T,A,x,I,q,Q)}}}else if(P.visible){const O=w(T,P,E,C);T.onBeforeShadow(s,T,A,x,I,O,null),s.renderBufferDirect(x,null,I,O,T,null),T.onAfterShadow(s,T,A,x,I,O,null)}}const N=T.children;for(let I=0,P=N.length;I<P;I++)M(N[I],A,x,E,C)}function b(T){T.target.removeEventListener("dispose",b);for(const x in c){const E=c[x],C=T.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function w_(s,e){function t(){let U=!1;const ue=new ot;let ee=null;const de=new ot(0,0,0,0);return{setMask:function(_e){ee!==_e&&!U&&(s.colorMask(_e,_e,_e,_e),ee=_e)},setLocked:function(_e){U=_e},setClear:function(_e,ie,Le,Ee,ct){ct===!0&&(_e*=Ee,ie*=Ee,Le*=Ee),ue.set(_e,ie,Le,Ee),de.equals(ue)===!1&&(s.clearColor(_e,ie,Le,Ee),de.copy(ue))},reset:function(){U=!1,ee=null,de.set(-1,0,0,0)}}}function n(){let U=!1,ue=!1,ee=null,de=null,_e=null;return{setReversed:function(ie){if(ue!==ie){const Le=e.get("EXT_clip_control");ie?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),ue=ie;const Ee=_e;_e=null,this.setClear(Ee)}},getReversed:function(){return ue},setTest:function(ie){ie?ne(s.DEPTH_TEST):Me(s.DEPTH_TEST)},setMask:function(ie){ee!==ie&&!U&&(s.depthMask(ie),ee=ie)},setFunc:function(ie){if(ue&&(ie=ld[ie]),de!==ie){switch(ie){case Ra:s.depthFunc(s.NEVER);break;case Ca:s.depthFunc(s.ALWAYS);break;case Pa:s.depthFunc(s.LESS);break;case Ss:s.depthFunc(s.LEQUAL);break;case La:s.depthFunc(s.EQUAL);break;case Ia:s.depthFunc(s.GEQUAL);break;case Da:s.depthFunc(s.GREATER);break;case Na:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}de=ie}},setLocked:function(ie){U=ie},setClear:function(ie){_e!==ie&&(_e=ie,ue&&(ie=1-ie),s.clearDepth(ie))},reset:function(){U=!1,ee=null,de=null,_e=null,ue=!1}}}function i(){let U=!1,ue=null,ee=null,de=null,_e=null,ie=null,Le=null,Ee=null,ct=null;return{setTest:function(et){U||(et?ne(s.STENCIL_TEST):Me(s.STENCIL_TEST))},setMask:function(et){ue!==et&&!U&&(s.stencilMask(et),ue=et)},setFunc:function(et,an,mn){(ee!==et||de!==an||_e!==mn)&&(s.stencilFunc(et,an,mn),ee=et,de=an,_e=mn)},setOp:function(et,an,mn){(ie!==et||Le!==an||Ee!==mn)&&(s.stencilOp(et,an,mn),ie=et,Le=an,Ee=mn)},setLocked:function(et){U=et},setClear:function(et){ct!==et&&(s.clearStencil(et),ct=et)},reset:function(){U=!1,ue=null,ee=null,de=null,_e=null,ie=null,Le=null,Ee=null,ct=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d={},f=new WeakMap,g=[],v=null,m=!1,p=null,S=null,w=null,M=null,b=null,T=null,A=null,x=new Ne(0,0,0),E=0,C=!1,L=null,N=null,I=null,P=null,O=null;const z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Q=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=Q>=1):X.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=Q>=2);let q=null,Y={};const ve=s.getParameter(s.SCISSOR_BOX),oe=s.getParameter(s.VIEWPORT),Ie=new ot().fromArray(ve),ze=new ot().fromArray(oe);function Qe(U,ue,ee,de){const _e=new Uint8Array(4),ie=s.createTexture();s.bindTexture(U,ie),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Le=0;Le<ee;Le++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(ue,0,s.RGBA,1,1,de,0,s.RGBA,s.UNSIGNED_BYTE,_e):s.texImage2D(ue+Le,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_e);return ie}const Z={};Z[s.TEXTURE_2D]=Qe(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=Qe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[s.TEXTURE_2D_ARRAY]=Qe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=Qe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(s.DEPTH_TEST),a.setFunc(Ss),Oe(!1),Je(xl),ne(s.CULL_FACE),Ae(Gn);function ne(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function Me(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function Fe(U,ue){return d[U]!==ue?(s.bindFramebuffer(U,ue),d[U]=ue,U===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ue),U===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ue),!0):!1}function xe(U,ue){let ee=g,de=!1;if(U){ee=f.get(ue),ee===void 0&&(ee=[],f.set(ue,ee));const _e=U.textures;if(ee.length!==_e.length||ee[0]!==s.COLOR_ATTACHMENT0){for(let ie=0,Le=_e.length;ie<Le;ie++)ee[ie]=s.COLOR_ATTACHMENT0+ie;ee.length=_e.length,de=!0}}else ee[0]!==s.BACK&&(ee[0]=s.BACK,de=!0);de&&s.drawBuffers(ee)}function j(U){return v!==U?(s.useProgram(U),v=U,!0):!1}const ae={[ki]:s.FUNC_ADD,[Au]:s.FUNC_SUBTRACT,[Ru]:s.FUNC_REVERSE_SUBTRACT};ae[Cu]=s.MIN,ae[Pu]=s.MAX;const re={[Lu]:s.ZERO,[Iu]:s.ONE,[Du]:s.SRC_COLOR,[Zc]:s.SRC_ALPHA,[ku]:s.SRC_ALPHA_SATURATE,[Ou]:s.DST_COLOR,[Uu]:s.DST_ALPHA,[Nu]:s.ONE_MINUS_SRC_COLOR,[Jc]:s.ONE_MINUS_SRC_ALPHA,[Bu]:s.ONE_MINUS_DST_COLOR,[Fu]:s.ONE_MINUS_DST_ALPHA,[zu]:s.CONSTANT_COLOR,[Hu]:s.ONE_MINUS_CONSTANT_COLOR,[Gu]:s.CONSTANT_ALPHA,[Vu]:s.ONE_MINUS_CONSTANT_ALPHA};function Ae(U,ue,ee,de,_e,ie,Le,Ee,ct,et){if(U===Gn){m===!0&&(Me(s.BLEND),m=!1);return}if(m===!1&&(ne(s.BLEND),m=!0),U!==wu){if(U!==p||et!==C){if((S!==ki||b!==ki)&&(s.blendEquation(s.FUNC_ADD),S=ki,b=ki),et)switch(U){case xs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case vl:s.blendFunc(s.ONE,s.ONE);break;case Ml:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case yl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ue("WebGLState: Invalid blending: ",U);break}else switch(U){case xs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case vl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ml:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yl:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",U);break}w=null,M=null,T=null,A=null,x.set(0,0,0),E=0,p=U,C=et}return}_e=_e||ue,ie=ie||ee,Le=Le||de,(ue!==S||_e!==b)&&(s.blendEquationSeparate(ae[ue],ae[_e]),S=ue,b=_e),(ee!==w||de!==M||ie!==T||Le!==A)&&(s.blendFuncSeparate(re[ee],re[de],re[ie],re[Le]),w=ee,M=de,T=ie,A=Le),(Ee.equals(x)===!1||ct!==E)&&(s.blendColor(Ee.r,Ee.g,Ee.b,ct),x.copy(Ee),E=ct),p=U,C=!1}function Ze(U,ue){U.side===Sn?Me(s.CULL_FACE):ne(s.CULL_FACE);let ee=U.side===Wt;ue&&(ee=!ee),Oe(ee),U.blending===xs&&U.transparent===!1?Ae(Gn):Ae(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const de=U.stencilWrite;o.setTest(de),de&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Gt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ne(s.SAMPLE_ALPHA_TO_COVERAGE):Me(s.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(U){L!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),L=U)}function Je(U){U!==bu?(ne(s.CULL_FACE),U!==N&&(U===xl?s.cullFace(s.BACK):U===Tu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Me(s.CULL_FACE),N=U}function Mt(U){U!==I&&(H&&s.lineWidth(U),I=U)}function Gt(U,ue,ee){U?(ne(s.POLYGON_OFFSET_FILL),(P!==ue||O!==ee)&&(P=ue,O=ee,a.getReversed()&&(ue=-ue),s.polygonOffset(ue,ee))):Me(s.POLYGON_OFFSET_FILL)}function pt(U){U?ne(s.SCISSOR_TEST):Me(s.SCISSOR_TEST)}function yt(U){U===void 0&&(U=s.TEXTURE0+z-1),q!==U&&(s.activeTexture(U),q=U)}function F(U,ue,ee){ee===void 0&&(q===null?ee=s.TEXTURE0+z-1:ee=q);let de=Y[ee];de===void 0&&(de={type:void 0,texture:void 0},Y[ee]=de),(de.type!==U||de.texture!==ue)&&(q!==ee&&(s.activeTexture(ee),q=ee),s.bindTexture(U,ue||Z[U]),de.type=U,de.texture=ue)}function It(){const U=Y[q];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function nt(){try{s.compressedTexImage2D(...arguments)}catch(U){Ue("WebGLState:",U)}}function R(){try{s.compressedTexImage3D(...arguments)}catch(U){Ue("WebGLState:",U)}}function _(){try{s.texSubImage2D(...arguments)}catch(U){Ue("WebGLState:",U)}}function k(){try{s.texSubImage3D(...arguments)}catch(U){Ue("WebGLState:",U)}}function W(){try{s.compressedTexSubImage2D(...arguments)}catch(U){Ue("WebGLState:",U)}}function $(){try{s.compressedTexSubImage3D(...arguments)}catch(U){Ue("WebGLState:",U)}}function se(){try{s.texStorage2D(...arguments)}catch(U){Ue("WebGLState:",U)}}function le(){try{s.texStorage3D(...arguments)}catch(U){Ue("WebGLState:",U)}}function J(){try{s.texImage2D(...arguments)}catch(U){Ue("WebGLState:",U)}}function te(){try{s.texImage3D(...arguments)}catch(U){Ue("WebGLState:",U)}}function ce(U){return u[U]!==void 0?u[U]:s.getParameter(U)}function Re(U,ue){u[U]!==ue&&(s.pixelStorei(U,ue),u[U]=ue)}function fe(U){Ie.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),Ie.copy(U))}function he(U){ze.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),ze.copy(U))}function Ce(U,ue){let ee=c.get(ue);ee===void 0&&(ee=new WeakMap,c.set(ue,ee));let de=ee.get(U);de===void 0&&(de=s.getUniformBlockIndex(ue,U.name),ee.set(U,de))}function De(U,ue){const de=c.get(ue).get(U);l.get(ue)!==de&&(s.uniformBlockBinding(ue,de,U.__bindingPointIndex),l.set(ue,de))}function ke(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},q=null,Y={},d={},f=new WeakMap,g=[],v=null,m=!1,p=null,S=null,w=null,M=null,b=null,T=null,A=null,x=new Ne(0,0,0),E=0,C=!1,L=null,N=null,I=null,P=null,O=null,Ie.set(0,0,s.canvas.width,s.canvas.height),ze.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ne,disable:Me,bindFramebuffer:Fe,drawBuffers:xe,useProgram:j,setBlending:Ae,setMaterial:Ze,setFlipSided:Oe,setCullFace:Je,setLineWidth:Mt,setPolygonOffset:Gt,setScissorTest:pt,activeTexture:yt,bindTexture:F,unbindTexture:It,compressedTexImage2D:nt,compressedTexImage3D:R,texImage2D:J,texImage3D:te,pixelStorei:Re,getParameter:ce,updateUBOMapping:Ce,uniformBlockBinding:De,texStorage2D:se,texStorage3D:le,texSubImage2D:_,texSubImage3D:k,compressedTexSubImage2D:W,compressedTexSubImage3D:$,scissor:fe,viewport:he,reset:ke}}function A_(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qe,h=new WeakMap,u=new Set;let d;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,_){return g?new OffscreenCanvas(R,_):Rs("canvas")}function m(R,_,k){let W=1;const $=nt(R);if(($.width>k||$.height>k)&&(W=k/Math.max($.width,$.height)),W<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const se=Math.floor(W*$.width),le=Math.floor(W*$.height);d===void 0&&(d=v(se,le));const J=_?v(se,le):d;return J.width=se,J.height=le,J.getContext("2d").drawImage(R,0,0,se,le),Pe("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+se+"x"+le+")."),J}else return"data"in R&&Pe("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function p(R){return R.generateMipmaps}function S(R){s.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(R,_,k,W,$,se=!1){if(R!==null){if(s[R]!==void 0)return s[R];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let le;W&&(le=e.get("EXT_texture_norm16"),le||Pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=_;if(_===s.RED&&(k===s.FLOAT&&(J=s.R32F),k===s.HALF_FLOAT&&(J=s.R16F),k===s.UNSIGNED_BYTE&&(J=s.R8),k===s.UNSIGNED_SHORT&&le&&(J=le.R16_EXT),k===s.SHORT&&le&&(J=le.R16_SNORM_EXT)),_===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(J=s.R8UI),k===s.UNSIGNED_SHORT&&(J=s.R16UI),k===s.UNSIGNED_INT&&(J=s.R32UI),k===s.BYTE&&(J=s.R8I),k===s.SHORT&&(J=s.R16I),k===s.INT&&(J=s.R32I)),_===s.RG&&(k===s.FLOAT&&(J=s.RG32F),k===s.HALF_FLOAT&&(J=s.RG16F),k===s.UNSIGNED_BYTE&&(J=s.RG8),k===s.UNSIGNED_SHORT&&le&&(J=le.RG16_EXT),k===s.SHORT&&le&&(J=le.RG16_SNORM_EXT)),_===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(J=s.RG8UI),k===s.UNSIGNED_SHORT&&(J=s.RG16UI),k===s.UNSIGNED_INT&&(J=s.RG32UI),k===s.BYTE&&(J=s.RG8I),k===s.SHORT&&(J=s.RG16I),k===s.INT&&(J=s.RG32I)),_===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(J=s.RGB8UI),k===s.UNSIGNED_SHORT&&(J=s.RGB16UI),k===s.UNSIGNED_INT&&(J=s.RGB32UI),k===s.BYTE&&(J=s.RGB8I),k===s.SHORT&&(J=s.RGB16I),k===s.INT&&(J=s.RGB32I)),_===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),k===s.UNSIGNED_INT&&(J=s.RGBA32UI),k===s.BYTE&&(J=s.RGBA8I),k===s.SHORT&&(J=s.RGBA16I),k===s.INT&&(J=s.RGBA32I)),_===s.RGB&&(k===s.UNSIGNED_SHORT&&le&&(J=le.RGB16_EXT),k===s.SHORT&&le&&(J=le.RGB16_SNORM_EXT),k===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(J=s.R11F_G11F_B10F)),_===s.RGBA){const te=se?Tr:Ye.getTransfer($);k===s.FLOAT&&(J=s.RGBA32F),k===s.HALF_FLOAT&&(J=s.RGBA16F),k===s.UNSIGNED_BYTE&&(J=te===it?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT&&le&&(J=le.RGBA16_EXT),k===s.SHORT&&le&&(J=le.RGBA16_SNORM_EXT),k===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function b(R,_){let k;return R?_===null||_===Rn||_===Ts?k=s.DEPTH24_STENCIL8:_===nn?k=s.DEPTH32F_STENCIL8:_===bs&&(k=s.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Rn||_===Ts?k=s.DEPTH_COMPONENT24:_===nn?k=s.DEPTH_COMPONENT32F:_===bs&&(k=s.DEPTH_COMPONENT16),k}function T(R,_){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Et&&R.minFilter!==wt?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function A(R){const _=R.target;_.removeEventListener("dispose",A),E(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&u.delete(_)}function x(R){const _=R.target;_.removeEventListener("dispose",x),L(_)}function E(R){const _=n.get(R);if(_.__webglInit===void 0)return;const k=R.source,W=f.get(k);if(W){const $=W[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&C(R),Object.keys(W).length===0&&f.delete(k)}n.remove(R)}function C(R){const _=n.get(R);s.deleteTexture(_.__webglTexture);const k=R.source,W=f.get(k);delete W[_.__cacheKey],a.memory.textures--}function L(R){const _=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let $=0;$<_.__webglFramebuffer[W].length;$++)s.deleteFramebuffer(_.__webglFramebuffer[W][$]);else s.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)s.deleteFramebuffer(_.__webglFramebuffer[W]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const k=R.textures;for(let W=0,$=k.length;W<$;W++){const se=n.get(k[W]);se.__webglTexture&&(s.deleteTexture(se.__webglTexture),a.memory.textures--),n.remove(k[W])}n.remove(R)}let N=0;function I(){N=0}function P(){return N}function O(R){N=R}function z(){const R=N;return R>=i.maxTextures&&Pe("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),N+=1,R}function H(R){const _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function Q(R,_){const k=n.get(R);if(R.isVideoTexture&&F(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){const W=R.image;if(W===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(k,R,_);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+_)}function X(R,_){const k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){Me(k,R,_);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+_)}function q(R,_){const k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){Me(k,R,_);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+_)}function Y(R,_){const k=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&k.__version!==R.version){Fe(k,R,_);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+_)}const ve={[An]:s.REPEAT,[bn]:s.CLAMP_TO_EDGE,[yr]:s.MIRRORED_REPEAT},oe={[Et]:s.NEAREST,[ah]:s.NEAREST_MIPMAP_NEAREST,[fs]:s.NEAREST_MIPMAP_LINEAR,[wt]:s.LINEAR,[dr]:s.LINEAR_MIPMAP_NEAREST,[zn]:s.LINEAR_MIPMAP_LINEAR},Ie={[Qu]:s.NEVER,[id]:s.ALWAYS,[ju]:s.LESS,[Co]:s.LEQUAL,[ed]:s.EQUAL,[Po]:s.GEQUAL,[td]:s.GREATER,[nd]:s.NOTEQUAL};function ze(R,_){if(_.type===nn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===wt||_.magFilter===dr||_.magFilter===fs||_.magFilter===zn||_.minFilter===wt||_.minFilter===dr||_.minFilter===fs||_.minFilter===zn)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,ve[_.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,ve[_.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,ve[_.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,oe[_.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,oe[_.minFilter]),_.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,Ie[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Et||_.minFilter!==fs&&_.minFilter!==zn||_.type===nn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Qe(R,_){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",A));const W=_.source;let $=f.get(W);$===void 0&&($={},f.set(W,$));const se=H(_);if(se!==R.__cacheKey){$[se]===void 0&&($[se]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),$[se].usedTimes++;const le=$[R.__cacheKey];le!==void 0&&($[R.__cacheKey].usedTimes--,le.usedTimes===0&&C(_)),R.__cacheKey=se,R.__webglTexture=$[se].texture}return k}function Z(R,_,k){return Math.floor(Math.floor(R/k)/_)}function ne(R,_,k,W){const se=R.updateRanges;if(se.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,_.width,_.height,k,W,_.data);else{se.sort((Re,fe)=>Re.start-fe.start);let le=0;for(let Re=1;Re<se.length;Re++){const fe=se[le],he=se[Re],Ce=fe.start+fe.count,De=Z(he.start,_.width,4),ke=Z(fe.start,_.width,4);he.start<=Ce+1&&De===ke&&Z(he.start+he.count-1,_.width,4)===De?fe.count=Math.max(fe.count,he.start+he.count-fe.start):(++le,se[le]=he)}se.length=le+1;const J=t.getParameter(s.UNPACK_ROW_LENGTH),te=t.getParameter(s.UNPACK_SKIP_PIXELS),ce=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,_.width);for(let Re=0,fe=se.length;Re<fe;Re++){const he=se[Re],Ce=Math.floor(he.start/4),De=Math.ceil(he.count/4),ke=Ce%_.width,U=Math.floor(Ce/_.width),ue=De,ee=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ke),t.pixelStorei(s.UNPACK_SKIP_ROWS,U),t.texSubImage2D(s.TEXTURE_2D,0,ke,U,ue,ee,k,W,_.data)}R.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,J),t.pixelStorei(s.UNPACK_SKIP_PIXELS,te),t.pixelStorei(s.UNPACK_SKIP_ROWS,ce)}}function Me(R,_,k){let W=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=s.TEXTURE_3D);const $=Qe(R,_),se=_.source;t.bindTexture(W,R.__webglTexture,s.TEXTURE0+k);const le=n.get(se);if(se.version!==le.__version||$===!0){if(t.activeTexture(s.TEXTURE0+k),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const ee=Ye.getPrimaries(Ye.workingColorSpace),de=_.colorSpace===kn?null:Ye.getPrimaries(_.colorSpace),_e=_.colorSpace===kn||ee===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}t.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment);let te=m(_.image,!1,i.maxTextureSize);te=It(_,te);const ce=r.convert(_.format,_.colorSpace),Re=r.convert(_.type);let fe=M(_.internalFormat,ce,Re,_.normalized,_.colorSpace,_.isVideoTexture);ze(W,_);let he;const Ce=_.mipmaps,De=_.isVideoTexture!==!0,ke=le.__version===void 0||$===!0,U=se.dataReady,ue=T(_,te);if(_.isDepthTexture)fe=b(_.format===_i,_.type),ke&&(De?t.texStorage2D(s.TEXTURE_2D,1,fe,te.width,te.height):t.texImage2D(s.TEXTURE_2D,0,fe,te.width,te.height,0,ce,Re,null));else if(_.isDataTexture)if(Ce.length>0){De&&ke&&t.texStorage2D(s.TEXTURE_2D,ue,fe,Ce[0].width,Ce[0].height);for(let ee=0,de=Ce.length;ee<de;ee++)he=Ce[ee],De?U&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,he.width,he.height,ce,Re,he.data):t.texImage2D(s.TEXTURE_2D,ee,fe,he.width,he.height,0,ce,Re,he.data);_.generateMipmaps=!1}else De?(ke&&t.texStorage2D(s.TEXTURE_2D,ue,fe,te.width,te.height),U&&ne(_,te,ce,Re)):t.texImage2D(s.TEXTURE_2D,0,fe,te.width,te.height,0,ce,Re,te.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){De&&ke&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,fe,Ce[0].width,Ce[0].height,te.depth);for(let ee=0,de=Ce.length;ee<de;ee++)if(he=Ce[ee],_.format!==sn)if(ce!==null)if(De){if(U)if(_.layerUpdates.size>0){const _e=fc(he.width,he.height,_.format,_.type);for(const ie of _.layerUpdates){const Le=he.data.subarray(ie*_e/he.data.BYTES_PER_ELEMENT,(ie+1)*_e/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,ie,he.width,he.height,1,ce,Le)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,he.width,he.height,te.depth,ce,he.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ee,fe,he.width,he.height,te.depth,0,he.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?U&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,he.width,he.height,te.depth,ce,Re,he.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ee,fe,he.width,he.height,te.depth,0,ce,Re,he.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{De&&ke&&t.texStorage2D(s.TEXTURE_2D,ue,fe,Ce[0].width,Ce[0].height);for(let ee=0,de=Ce.length;ee<de;ee++)he=Ce[ee],_.format!==sn?ce!==null?De?U&&t.compressedTexSubImage2D(s.TEXTURE_2D,ee,0,0,he.width,he.height,ce,he.data):t.compressedTexImage2D(s.TEXTURE_2D,ee,fe,he.width,he.height,0,he.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?U&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,he.width,he.height,ce,Re,he.data):t.texImage2D(s.TEXTURE_2D,ee,fe,he.width,he.height,0,ce,Re,he.data)}else if(_.isDataArrayTexture)if(De){if(ke&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,fe,te.width,te.height,te.depth),U)if(_.layerUpdates.size>0){const ee=fc(te.width,te.height,_.format,_.type);for(const de of _.layerUpdates){const _e=te.data.subarray(de*ee/te.data.BYTES_PER_ELEMENT,(de+1)*ee/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,de,te.width,te.height,1,ce,Re,_e)}_.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ce,Re,te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,fe,te.width,te.height,te.depth,0,ce,Re,te.data);else if(_.isData3DTexture)De?(ke&&t.texStorage3D(s.TEXTURE_3D,ue,fe,te.width,te.height,te.depth),U&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ce,Re,te.data)):t.texImage3D(s.TEXTURE_3D,0,fe,te.width,te.height,te.depth,0,ce,Re,te.data);else if(_.isFramebufferTexture){if(ke)if(De)t.texStorage2D(s.TEXTURE_2D,ue,fe,te.width,te.height);else{let ee=te.width,de=te.height;for(let _e=0;_e<ue;_e++)t.texImage2D(s.TEXTURE_2D,_e,fe,ee,de,0,ce,Re,null),ee>>=1,de>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in s){const ee=s.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),te.parentNode!==ee){ee.appendChild(te),u.add(_),ee.onpaint=de=>{const _e=de.changedElements;for(const ie of u)_e.includes(ie.image)&&(ie.needsUpdate=!0)},ee.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,te);else{const _e=s.RGBA,ie=s.RGBA,Le=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,_e,ie,Le,te)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(De&&ke){const ee=nt(Ce[0]);t.texStorage2D(s.TEXTURE_2D,ue,fe,ee.width,ee.height)}for(let ee=0,de=Ce.length;ee<de;ee++)he=Ce[ee],De?U&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,ce,Re,he):t.texImage2D(s.TEXTURE_2D,ee,fe,ce,Re,he);_.generateMipmaps=!1}else if(De){if(ke){const ee=nt(te);t.texStorage2D(s.TEXTURE_2D,ue,fe,ee.width,ee.height)}U&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ce,Re,te)}else t.texImage2D(s.TEXTURE_2D,0,fe,ce,Re,te);p(_)&&S(W),le.__version=se.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function Fe(R,_,k){if(_.image.length!==6)return;const W=Qe(R,_),$=_.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+k);const se=n.get($);if($.version!==se.__version||W===!0){t.activeTexture(s.TEXTURE0+k);const le=Ye.getPrimaries(Ye.workingColorSpace),J=_.colorSpace===kn?null:Ye.getPrimaries(_.colorSpace),te=_.colorSpace===kn||le===J?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const ce=_.isCompressedTexture||_.image[0].isCompressedTexture,Re=_.image[0]&&_.image[0].isDataTexture,fe=[];for(let ie=0;ie<6;ie++)!ce&&!Re?fe[ie]=m(_.image[ie],!0,i.maxCubemapSize):fe[ie]=Re?_.image[ie].image:_.image[ie],fe[ie]=It(_,fe[ie]);const he=fe[0],Ce=r.convert(_.format,_.colorSpace),De=r.convert(_.type),ke=M(_.internalFormat,Ce,De,_.normalized,_.colorSpace),U=_.isVideoTexture!==!0,ue=se.__version===void 0||W===!0,ee=$.dataReady;let de=T(_,he);ze(s.TEXTURE_CUBE_MAP,_);let _e;if(ce){U&&ue&&t.texStorage2D(s.TEXTURE_CUBE_MAP,de,ke,he.width,he.height);for(let ie=0;ie<6;ie++){_e=fe[ie].mipmaps;for(let Le=0;Le<_e.length;Le++){const Ee=_e[Le];_.format!==sn?Ce!==null?U?ee&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,0,0,Ee.width,Ee.height,Ce,Ee.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,ke,Ee.width,Ee.height,0,Ee.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,0,0,Ee.width,Ee.height,Ce,De,Ee.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le,ke,Ee.width,Ee.height,0,Ce,De,Ee.data)}}}else{if(_e=_.mipmaps,U&&ue){_e.length>0&&de++;const ie=nt(fe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,de,ke,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Re){U?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,fe[ie].width,fe[ie].height,Ce,De,fe[ie].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ke,fe[ie].width,fe[ie].height,0,Ce,De,fe[ie].data);for(let Le=0;Le<_e.length;Le++){const ct=_e[Le].image[ie].image;U?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,0,0,ct.width,ct.height,Ce,De,ct.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,ke,ct.width,ct.height,0,Ce,De,ct.data)}}else{U?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ce,De,fe[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ke,Ce,De,fe[ie]);for(let Le=0;Le<_e.length;Le++){const Ee=_e[Le];U?ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,0,0,Ce,De,Ee.image[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Le+1,ke,Ce,De,Ee.image[ie])}}}p(_)&&S(s.TEXTURE_CUBE_MAP),se.__version=$.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function xe(R,_,k,W,$,se){const le=r.convert(k.format,k.colorSpace),J=r.convert(k.type),te=M(k.internalFormat,le,J,k.normalized,k.colorSpace),ce=n.get(_),Re=n.get(k);if(Re.__renderTarget=_,!ce.__hasExternalTextures){const fe=Math.max(1,_.width>>se),he=Math.max(1,_.height>>se);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?t.texImage3D($,se,te,fe,he,_.depth,0,le,J,null):t.texImage2D($,se,te,fe,he,0,le,J,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),yt(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,W,$,Re.__webglTexture,0,pt(_)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,W,$,Re.__webglTexture,se),t.bindFramebuffer(s.FRAMEBUFFER,null)}function j(R,_,k){if(s.bindRenderbuffer(s.RENDERBUFFER,R),_.depthBuffer){const W=_.depthTexture,$=W&&W.isDepthTexture?W.type:null,se=b(_.stencilBuffer,$),le=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;yt(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt(_),se,_.width,_.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt(_),se,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,se,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,le,s.RENDERBUFFER,R)}else{const W=_.textures;for(let $=0;$<W.length;$++){const se=W[$],le=r.convert(se.format,se.colorSpace),J=r.convert(se.type),te=M(se.internalFormat,le,J,se.normalized,se.colorSpace);yt(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt(_),te,_.width,_.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt(_),te,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,te,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ae(R,_,k){const W=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=n.get(_.depthTexture);if($.__renderTarget=_,(!$.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W){if($.__webglInit===void 0&&($.__webglInit=!0,_.depthTexture.addEventListener("dispose",A)),$.__webglTexture===void 0){$.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),ze(s.TEXTURE_CUBE_MAP,_.depthTexture);const ce=r.convert(_.depthTexture.format),Re=r.convert(_.depthTexture.type);let fe;_.depthTexture.format===Wn?fe=s.DEPTH_COMPONENT24:_.depthTexture.format===_i&&(fe=s.DEPTH24_STENCIL8);for(let he=0;he<6;he++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,fe,_.width,_.height,0,ce,Re,null)}}else Q(_.depthTexture,0);const se=$.__webglTexture,le=pt(_),J=W?s.TEXTURE_CUBE_MAP_POSITIVE_X+k:s.TEXTURE_2D,te=_.depthTexture.format===_i?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(_.depthTexture.format===Wn)yt(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,te,J,se,0,le):s.framebufferTexture2D(s.FRAMEBUFFER,te,J,se,0);else if(_.depthTexture.format===_i)yt(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,te,J,se,0,le):s.framebufferTexture2D(s.FRAMEBUFFER,te,J,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function re(R){const _=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){const W=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){const $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",$)};W.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=W}if(R.depthTexture&&!_.__autoAllocateDepthBuffer)if(k)for(let W=0;W<6;W++)ae(_.__webglFramebuffer[W],R,W);else{const W=R.texture.mipmaps;W&&W.length>0?ae(_.__webglFramebuffer[0],R,0):ae(_.__webglFramebuffer,R,0)}else if(k){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=s.createRenderbuffer(),j(_.__webglDepthbuffer[W],R,!1);else{const $=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer[W];s.bindRenderbuffer(s.RENDERBUFFER,se),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,se)}}else{const W=R.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),j(_.__webglDepthbuffer,R,!1);else{const $=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,se),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,se)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ae(R,_,k){const W=n.get(R);_!==void 0&&xe(W.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&re(R)}function Ze(R){const _=R.texture,k=n.get(R),W=n.get(_);R.addEventListener("dispose",x);const $=R.textures,se=R.isWebGLCubeRenderTarget===!0,le=$.length>1;if(le||(W.__webglTexture===void 0&&(W.__webglTexture=s.createTexture()),W.__version=_.version,a.memory.textures++),se){k.__webglFramebuffer=[];for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[J]=[];for(let te=0;te<_.mipmaps.length;te++)k.__webglFramebuffer[J][te]=s.createFramebuffer()}else k.__webglFramebuffer[J]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let J=0;J<_.mipmaps.length;J++)k.__webglFramebuffer[J]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(le)for(let J=0,te=$.length;J<te;J++){const ce=n.get($[J]);ce.__webglTexture===void 0&&(ce.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&yt(R)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let J=0;J<$.length;J++){const te=$[J];k.__webglColorRenderbuffer[J]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[J]);const ce=r.convert(te.format,te.colorSpace),Re=r.convert(te.type),fe=M(te.internalFormat,ce,Re,te.normalized,te.colorSpace,R.isXRRenderTarget===!0),he=pt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,he,fe,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.RENDERBUFFER,k.__webglColorRenderbuffer[J])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),j(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(se){t.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture),ze(s.TEXTURE_CUBE_MAP,_);for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0)for(let te=0;te<_.mipmaps.length;te++)xe(k.__webglFramebuffer[J][te],R,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,te);else xe(k.__webglFramebuffer[J],R,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(_)&&S(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let J=0,te=$.length;J<te;J++){const ce=$[J],Re=n.get(ce);let fe=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,Re.__webglTexture),ze(fe,ce),xe(k.__webglFramebuffer,R,ce,s.COLOR_ATTACHMENT0+J,fe,0),p(ce)&&S(fe)}t.unbindTexture()}else{let J=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(J=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(J,W.__webglTexture),ze(J,_),_.mipmaps&&_.mipmaps.length>0)for(let te=0;te<_.mipmaps.length;te++)xe(k.__webglFramebuffer[te],R,_,s.COLOR_ATTACHMENT0,J,te);else xe(k.__webglFramebuffer,R,_,s.COLOR_ATTACHMENT0,J,0);p(_)&&S(J),t.unbindTexture()}R.depthBuffer&&re(R)}function Oe(R){const _=R.textures;for(let k=0,W=_.length;k<W;k++){const $=_[k];if(p($)){const se=w(R),le=n.get($).__webglTexture;t.bindTexture(se,le),S(se),t.unbindTexture()}}}const Je=[],Mt=[];function Gt(R){if(R.samples>0){if(yt(R)===!1){const _=R.textures,k=R.width,W=R.height;let $=s.COLOR_BUFFER_BIT;const se=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=n.get(R),J=_.length>1;if(J)for(let ce=0;ce<_.length;ce++)t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);const te=R.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ce=0;ce<_.length;ce++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),J){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,le.__webglColorRenderbuffer[ce]);const Re=n.get(_[ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Re,0)}s.blitFramebuffer(0,0,k,W,0,0,k,W,$,s.NEAREST),l===!0&&(Je.length=0,Mt.length=0,Je.push(s.COLOR_ATTACHMENT0+ce),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(Je.push(se),Mt.push(se),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Mt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),J)for(let ce=0;ce<_.length;ce++){t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,le.__webglColorRenderbuffer[ce]);const Re=n.get(_[ce]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.TEXTURE_2D,Re,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const _=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function pt(R){return Math.min(i.maxSamples,R.samples)}function yt(R){const _=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function F(R){const _=a.render.frame;h.get(R)!==_&&(h.set(R,_),R.update())}function It(R,_){const k=R.colorSpace,W=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Zt&&k!==kn&&(Ye.getTransfer(k)===it?(W!==sn||$!==$t)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",k)),_}function nt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=I,this.getTextureUnits=P,this.setTextureUnits=O,this.setTexture2D=Q,this.setTexture2DArray=X,this.setTexture3D=q,this.setTextureCube=Y,this.rebindTextures=Ae,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=yt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function R_(s,e){function t(n,i=kn){let r;const a=Ye.getTransfer(i);if(n===$t)return s.UNSIGNED_BYTE;if(n===bo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===To)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ch)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===hh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===oh)return s.BYTE;if(n===lh)return s.SHORT;if(n===bs)return s.UNSIGNED_SHORT;if(n===So)return s.INT;if(n===Rn)return s.UNSIGNED_INT;if(n===nn)return s.FLOAT;if(n===Cn)return s.HALF_FLOAT;if(n===uh)return s.ALPHA;if(n===dh)return s.RGB;if(n===sn)return s.RGBA;if(n===Wn)return s.DEPTH_COMPONENT;if(n===_i)return s.DEPTH_STENCIL;if(n===Eo)return s.RED;if(n===wo)return s.RED_INTEGER;if(n===vi)return s.RG;if(n===Ao)return s.RG_INTEGER;if(n===Ro)return s.RGBA_INTEGER;if(n===fr||n===pr||n===mr||n===gr)if(a===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ua||n===Fa||n===Oa||n===Ba)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ka||n===za||n===Ha||n===Ga||n===Va||n===Sr||n===Wa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ka||n===za)return a===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ha)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ga)return r.COMPRESSED_R11_EAC;if(n===Va)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Sr)return r.COMPRESSED_RG11_EAC;if(n===Wa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xa||n===qa||n===Ka||n===Ya||n===$a||n===Za||n===Ja||n===Qa||n===ja||n===eo||n===to||n===no||n===io||n===so)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xa)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qa)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ka)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ya)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$a)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Za)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ja)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qa)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ja)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===eo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===to)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===no)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===io)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===so)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ro||n===ao||n===oo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ro)return a===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ao)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lo||n===co||n===br||n===ho)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===lo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===co)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===br)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ho)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ts?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const C_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class L_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new wh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Pn({vertexShader:C_,fragmentShader:P_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new Or(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class I_ extends Mi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",m=new L_,p={},S=t.getContextAttributes();let w=null,M=null;const b=[],T=[],A=new qe;let x=null,E=null;const C=new Lt;C.viewport=new ot;const L=new Lt;L.viewport=new ot;const N=[C,L],I=new Lf;let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ne=b[Z];return ne===void 0&&(ne=new Jr,b[Z]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Z){let ne=b[Z];return ne===void 0&&(ne=new Jr,b[Z]=ne),ne.getGripSpace()},this.getHand=function(Z){let ne=b[Z];return ne===void 0&&(ne=new Jr,b[Z]=ne),ne.getHandSpace()};function z(Z){const ne=T.indexOf(Z.inputSource);if(ne===-1)return;const Me=b[ne];Me!==void 0&&(Me.update(Z.inputSource,Z.frame,c||a),Me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",Q);for(let Z=0;Z<b.length;Z++){const ne=T[Z];ne!==null&&(T[Z]=null,b[Z].disconnect(ne))}P=null,O=null,m.reset();for(const Z in p)delete p[Z];if(e.setRenderTarget(w),f=null,d=null,u=null,i=null,M=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),E!==null){const Z=E.camera;Z.fov=E.fov,Z.zoom=E.zoom,Z.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(w=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",H),i.addEventListener("inputsourceschange",Q),S.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Fe=null,xe=null;S.depth&&(xe=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=S.stencil?_i:Wn,Fe=S.stencil?Ts:Rn);const j={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(j),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new fn(d.textureWidth,d.textureHeight,{format:sn,type:$t,depthTexture:new Cs(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Me={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,Me),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new fn(f.framebufferWidth,f.framebufferHeight,{format:sn,type:$t,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Qe.setContext(i),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(Z){for(let ne=0;ne<Z.removed.length;ne++){const Me=Z.removed[ne],Fe=T.indexOf(Me);Fe>=0&&(T[Fe]=null,b[Fe].disconnect(Me))}for(let ne=0;ne<Z.added.length;ne++){const Me=Z.added[ne];let Fe=T.indexOf(Me);if(Fe===-1){for(let j=0;j<b.length;j++)if(j>=T.length){T.push(Me),Fe=j;break}else if(T[j]===null){T[j]=Me,Fe=j;break}if(Fe===-1)break}const xe=b[Fe];xe&&xe.connect(Me)}}const X=new B,q=new B;function Y(Z,ne,Me){X.setFromMatrixPosition(ne.matrixWorld),q.setFromMatrixPosition(Me.matrixWorld);const Fe=X.distanceTo(q),xe=ne.projectionMatrix.elements,j=Me.projectionMatrix.elements,ae=xe[14]/(xe[10]-1),re=xe[14]/(xe[10]+1),Ae=(xe[9]+1)/xe[5],Ze=(xe[9]-1)/xe[5],Oe=(xe[8]-1)/xe[0],Je=(j[8]+1)/j[0],Mt=ae*Oe,Gt=ae*Je,pt=Fe/(-Oe+Je),yt=pt*-Oe;if(ne.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(yt),Z.translateZ(pt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),xe[10]===-1)Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const F=ae+pt,It=re+pt,nt=Mt-yt,R=Gt+(Fe-yt),_=Ae*re/It*F,k=Ze*re/It*F;Z.projectionMatrix.makePerspective(nt,R,_,k,F,It),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ve(Z,ne){ne===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ne.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let ne=Z.near,Me=Z.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(Me=m.depthFar)),I.near=L.near=C.near=ne,I.far=L.far=C.far=Me,(P!==I.near||O!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),P=I.near,O=I.far),I.layers.mask=Z.layers.mask|6,C.layers.mask=I.layers.mask&-5,L.layers.mask=I.layers.mask&-3;const Fe=Z.parent,xe=I.cameras;ve(I,Fe);for(let j=0;j<xe.length;j++)ve(xe[j],Fe);xe.length===2?Y(I,C,L):I.projectionMatrix.copy(C.projectionMatrix),E===null&&Z.isPerspectiveCamera&&(E={camera:Z,fov:Z.fov,zoom:Z.zoom}),oe(Z,I,Fe)};function oe(Z,ne,Me){Me===null?Z.matrix.copy(ne.matrixWorld):(Z.matrix.copy(Me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ne.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=qi*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(Z){return p[Z]};let Ie=null;function ze(Z,ne){if(h=ne.getViewerPose(c||a),g=ne,h!==null){const Me=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Fe=!1;Me.length!==I.cameras.length&&(I.cameras.length=0,Fe=!0);for(let re=0;re<Me.length;re++){const Ae=Me[re];let Ze=null;if(f!==null)Ze=f.getViewport(Ae);else{const Je=u.getViewSubImage(d,Ae);Ze=Je.viewport,re===0&&(e.setRenderTargetTextures(M,Je.colorTexture,Je.depthStencilTexture),e.setRenderTarget(M))}let Oe=N[re];Oe===void 0&&(Oe=new Lt,Oe.layers.enable(re),Oe.viewport=new ot,N[re]=Oe),Oe.matrix.fromArray(Ae.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Ae.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),re===0&&(I.matrix.copy(Oe.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Fe===!0&&I.cameras.push(Oe)}const xe=i.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const re=u.getDepthInformation(Me[0]);re&&re.isValid&&re.texture&&m.init(re,i.renderState)}if(xe&&xe.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let re=0;re<Me.length;re++){const Ae=Me[re].camera;if(Ae){let Ze=p[Ae];Ze||(Ze=new wh,p[Ae]=Ze);const Oe=u.getCameraImage(Ae);Ze.sourceTexture=Oe}}}}for(let Me=0;Me<b.length;Me++){const Fe=T[Me],xe=b[Me];Fe!==null&&xe!==void 0&&xe.update(Fe,ne,c||a)}Ie&&Ie(Z,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Qe=new Ih;Qe.setAnimationLoop(ze),this.setAnimationLoop=function(Z){Ie=Z},this.dispose=function(){}}}const D_=new Ve,kh=new Be;kh.set(-1,0,0,0,1,0,0,0,1);function N_(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ah(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,w,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Wt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Wt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),w=S.envMap,M=S.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(D_.makeRotationFromEuler(M)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(kh),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function U_(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){const T=b.program;n.uniformBlockBinding(M,T)}function c(M,b){let T=i[M.id];T===void 0&&(m(M),T=h(M),i[M.id]=T,M.addEventListener("dispose",S));const A=b.program;n.updateUBOMapping(M,A);const x=e.render.frame;r[M.id]!==x&&(d(M),r[M.id]=x)}function h(M){const b=u();M.__bindingPointIndex=b;const T=s.createBuffer(),A=M.__size,x=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,A,x),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,T),T}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const b=i[M.id],T=M.uniforms,A=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let x=0,E=T.length;x<E;x++){const C=T[x];if(Array.isArray(C))for(let L=0,N=C.length;L<N;L++)f(C[L],x,L,A);else f(C,x,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,b,T,A){if(v(M,b,T,A)===!0){const x=M.__offset,E=M.value;if(Array.isArray(E)){let C=0;for(let L=0;L<E.length;L++){const N=E[L],I=p(N);g(N,M.__data,C),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(C+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,M.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,x,M.__data)}}function g(M,b,T){typeof M=="number"||typeof M=="boolean"?b[0]=M:M.isMatrix3?(b[0]=M.elements[0],b[1]=M.elements[1],b[2]=M.elements[2],b[3]=0,b[4]=M.elements[3],b[5]=M.elements[4],b[6]=M.elements[5],b[7]=0,b[8]=M.elements[6],b[9]=M.elements[7],b[10]=M.elements[8],b[11]=0):ArrayBuffer.isView(M)?b.set(new M.constructor(M.buffer,M.byteOffset,b.length)):M.toArray(b,T)}function v(M,b,T,A){const x=M.value,E=b+"_"+T;if(A[E]===void 0)return typeof x=="number"||typeof x=="boolean"?A[E]=x:ArrayBuffer.isView(x)?A[E]=x.slice():A[E]=x.clone(),!0;{const C=A[E];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return A[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function m(M){const b=M.uniforms;let T=0;const A=16;for(let E=0,C=b.length;E<C;E++){const L=Array.isArray(b[E])?b[E]:[b[E]];for(let N=0,I=L.length;N<I;N++){const P=L[N],O=Array.isArray(P.value)?P.value:[P.value];for(let z=0,H=O.length;z<H;z++){const Q=O[z],X=p(Q),q=T%A,Y=q%X.boundary,ve=q+Y;T+=Y,ve!==0&&A-ve<X.storage&&(T+=A-ve),P.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=T,T+=X.storage}}}const x=T%A;return x>0&&(T+=A-x),M.__size=T,M.__cache={},this}function p(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):Pe("WebGLRenderer: Unsupported uniform value type.",M),b}function S(M){const b=M.target;b.removeEventListener("dispose",S);const T=a.indexOf(b.__bindingPointIndex);a.splice(T,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function w(){for(const M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:l,update:c,dispose:w}}const F_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let xn=null;function O_(){return xn===null&&(xn=new Uo(F_,16,16,vi,Cn),xn.name="DFG_LUT",xn.minFilter=wt,xn.magFilter=wt,xn.wrapS=bn,xn.wrapT=bn,xn.generateMipmaps=!1,xn.needsUpdate=!0),xn}class B_{constructor(e={}){const{canvas:t=ad(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=$t}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const v=f,m=new Set([Ro,Ao,wo]),p=new Set([$t,Rn,bs,Ts,bo,To]),S=new Uint32Array(4),w=new Int32Array(4),M=new B;let b=null,T=null;const A=[],x=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=En,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let L=!1,N=null,I=null,P=null,O=null;this._outputColorSpace=_t;let z=0,H=0,Q=null,X=-1,q=null;const Y=new ot,ve=new ot;let oe=null;const Ie=new Ne(0);let ze=0,Qe=t.width,Z=t.height,ne=1,Me=null,Fe=null;const xe=new ot(0,0,Qe,Z),j=new ot(0,0,Qe,Z);let ae=!1;const re=new Oo;let Ae=!1,Ze=!1;const Oe=new Ve,Je=new B,Mt=new ot,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function yt(){return Q===null?ne:1}let F=n;function It(y,D){return t.getContext(y,D)}let nt,R,_,k,W,$,se,le,J,te,ce,Re,fe,he,Ce,De,ke,U,ue,ee,de,_e,ie;try{const y={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mo}`),t.addEventListener("webglcontextlost",ct,!1),t.addEventListener("webglcontextrestored",et,!1),t.addEventListener("webglcontextcreationerror",an,!1),F===null){const D="webgl2";if(F=It(D,y),F===null)throw It(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Le()}catch(y){throw t.removeEventListener("webglcontextlost",ct,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",an,!1),Ue("WebGLRenderer: "+y.message),y}function Le(){nt=new O0(F),nt.init(),de=new R_(F,nt),R=new A0(F,nt,e,de),_=new w_(F,nt),R.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),I=F.createFramebuffer(),P=F.createFramebuffer(),O=F.createFramebuffer(),k=new z0(F),W=new d_,$=new A_(F,nt,_,W,R,de,k),se=new F0(C),le=new Gf(F),_e=new E0(F,le),J=new B0(F,le,k,_e),te=new G0(F,J,le,_e,k),U=new H0(F,R,$),Ce=new R0(W),ce=new u_(C,se,nt,R,_e,Ce),Re=new N_(C,W),fe=new p_,he=new M_(nt),ke=new T0(C,se,_,te,g,l),De=new E_(C,te,R),ie=new U_(F,k,R,_),ue=new w0(F,nt,k),ee=new k0(F,nt,k),k.programs=ce.programs,C.capabilities=R,C.extensions=nt,C.properties=W,C.renderLists=fe,C.shadowMap=De,C.state=_,C.info=k}v!==$t&&(E=new W0(v,t.width,t.height,o,i,r));const Ee=new I_(C,F);this.xr=Ee,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const y=nt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=nt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(y){y!==void 0&&(ne=y,this.setSize(Qe,Z,!1))},this.getSize=function(y){return y.set(Qe,Z)},this.setSize=function(y,D,K=!0){if(Ee.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}Qe=y,Z=D,t.width=Math.floor(y*ne),t.height=Math.floor(D*ne),K===!0&&(t.style.width=y+"px",t.style.height=D+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(Qe*ne,Z*ne).floor()},this.setDrawingBufferSize=function(y,D,K){Qe=y,Z=D,ne=K,t.width=Math.floor(y*K),t.height=Math.floor(D*K),this.setViewport(0,0,y,D)},this.setEffects=function(y){if(v===$t){Ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let D=0;D<y.length;D++)if(y[D].isOutputPass===!0){Pe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(Y)},this.getViewport=function(y){return y.copy(xe)},this.setViewport=function(y,D,K,G){y.isVector4?xe.set(y.x,y.y,y.z,y.w):xe.set(y,D,K,G),_.viewport(Y.copy(xe).multiplyScalar(ne).round())},this.getScissor=function(y){return y.copy(j)},this.setScissor=function(y,D,K,G){y.isVector4?j.set(y.x,y.y,y.z,y.w):j.set(y,D,K,G),_.scissor(ve.copy(j).multiplyScalar(ne).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(y){_.setScissorTest(ae=y)},this.setOpaqueSort=function(y){Me=y},this.setTransparentSort=function(y){Fe=y},this.getClearColor=function(y){return y.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor(...arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha(...arguments)},this.clear=function(y=!0,D=!0,K=!0){let G=0;if(y){let V=!1;if(Q!==null){const ge=Q.texture.format;V=m.has(ge)}if(V){const ge=Q.texture.type,Se=p.has(ge),me=ke.getClearColor(),be=ke.getClearAlpha(),we=me.r,He=me.g,Ke=me.b;Se?(S[0]=we,S[1]=He,S[2]=Ke,S[3]=be,F.clearBufferuiv(F.COLOR,0,S)):(w[0]=we,w[1]=He,w[2]=Ke,w[3]=be,F.clearBufferiv(F.COLOR,0,w))}else G|=F.COLOR_BUFFER_BIT}D&&(G|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),N=y},this.dispose=function(){t.removeEventListener("webglcontextlost",ct,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",an,!1),ke.dispose(),fe.dispose(),he.dispose(),W.dispose(),se.dispose(),te.dispose(),_e.dispose(),ie.dispose(),ce.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",jo),Ee.removeEventListener("sessionend",el),ci.stop()};function ct(y){y.preventDefault(),Er("WebGLRenderer: Context Lost."),L=!0}function et(){Er("WebGLRenderer: Context Restored."),L=!1;const y=k.autoReset,D=De.enabled,K=De.autoUpdate,G=De.needsUpdate,V=De.type;Le(),k.autoReset=y,De.enabled=D,De.autoUpdate=K,De.needsUpdate=G,De.type=V}function an(y){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function mn(y){const D=y.target;D.removeEventListener("dispose",mn),Xh(D)}function Xh(y){qh(y),W.remove(y)}function qh(y){const D=W.get(y).programs;D!==void 0&&(D.forEach(function(K){ce.releaseProgram(K)}),y.isShaderMaterial&&ce.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,K,G,V,ge){D===null&&(D=Gt);const Se=V.isMesh&&V.matrixWorld.determinantAffine()<0,me=$h(y,D,K,G,V);_.setMaterial(G,Se);let be=K.index,we=1;if(G.wireframe===!0){if(be=J.getWireframeAttribute(K),be===void 0)return;we=2}const He=K.drawRange,Ke=K.attributes.position;let Te=He.start*we,tt=(He.start+He.count)*we;ge!==null&&(Te=Math.max(Te,ge.start*we),tt=Math.min(tt,(ge.start+ge.count)*we)),be!==null?(Te=Math.max(Te,0),tt=Math.min(tt,be.count)):Ke!=null&&(Te=Math.max(Te,0),tt=Math.min(tt,Ke.count));const St=tt-Te;if(St<0||St===1/0)return;_e.setup(V,G,me,K,be);let ut,lt=ue;if(be!==null&&(ut=le.get(be),lt=ee,lt.setIndex(ut)),V.isMesh)G.wireframe===!0?(_.setLineWidth(G.wireframeLinewidth*yt()),lt.setMode(F.LINES)):lt.setMode(F.TRIANGLES);else if(V.isLine){let Dt=G.linewidth;Dt===void 0&&(Dt=1),_.setLineWidth(Dt*yt()),V.isLineSegments?lt.setMode(F.LINES):V.isLineLoop?lt.setMode(F.LINE_LOOP):lt.setMode(F.LINE_STRIP)}else V.isPoints?lt.setMode(F.POINTS):V.isSprite&&lt.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))lt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Dt=V._multiDrawStarts,ye=V._multiDrawCounts,Ot=V._multiDrawCount,je=be?le.get(be).bytesPerElement:1,Jt=W.get(G).currentProgram.getUniforms();for(let gn=0;gn<Ot;gn++)Jt.setValue(F,"_gl_DrawID",gn),lt.render(Dt[gn]/je,ye[gn])}else if(V.isInstancedMesh)lt.renderInstances(Te,St,V.count);else if(K.isInstancedBufferGeometry){const Dt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ye=Math.min(K.instanceCount,Dt);lt.renderInstances(Te,St,ye)}else lt.render(Te,St)};function Qo(y,D,K,G){N!==null&&y.isNodeMaterial&&N.setObject(G,y),Ae===!0&&Ce.setState(y,K,!1),y.transparent===!0&&y.side===Sn&&y.forceSinglePass===!1?(y.side=Wt,y.needsUpdate=!0,Us(y,D,G),y.side=ai,y.needsUpdate=!0,Us(y,D,G),y.side=Sn):Us(y,D,G)}this.compile=function(y,D,K=null){K===null&&(K=y),N!==null&&N.renderStart(y,D,K),T=he.get(K),T.init(D),x.push(T),K.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),y!==K&&y.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),T.setupLights(),N!==null&&N.updateLights(T.state.lightsArray),Ze=this.localClippingEnabled,Ae=Ce.init(this.clippingPlanes,Ze),Ae===!0&&Ce.setGlobalState(this.clippingPlanes,D),N!==null&&De.render(T.state.shadowsArray,K,D);const G=new Set;return y.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ge=V.material;if(ge)if(Array.isArray(ge))for(let Se=0;Se<ge.length;Se++){const me=ge[Se];Qo(me,K,D,V),G.add(me)}else Qo(ge,K,D,V),G.add(ge)}),T=x.pop(),N!==null&&N.renderEnd(),G},this.compileAsync=function(y,D,K=null){const G=this.compile(y,D,K);return new Promise(V=>{function ge(){if(G.forEach(function(Se){const be=W.get(Se).currentProgram;(be===void 0||be.isReady())&&G.delete(Se)}),G.size===0){V(y);return}setTimeout(ge,10)}nt.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let zr=null;function Kh(y){zr&&zr(y)}function jo(){ci.stop()}function el(){ci.start()}const ci=new Ih;ci.setAnimationLoop(Kh),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(y){zr=y,Ee.setAnimationLoop(y),y===null?ci.stop():ci.start()},Ee.addEventListener("sessionstart",jo),Ee.addEventListener("sessionend",el),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;N!==null&&N.renderStart(y,D);const K=Ee.enabled===!0&&Ee.isPresenting===!0,G=E!==null&&(Q===null||K)&&E.begin(C,Q);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(D),D=Ee.getCamera()),y.isScene===!0&&y.onBeforeRender(C,y,D,Q),T=he.get(y,x.length),T.init(D),T.state.textureUnits=$.getTextureUnits(),x.push(T),Oe.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),re.setFromProjectionMatrix(Oe,Tn,D.reversedDepth),Ze=this.localClippingEnabled,Ae=Ce.init(this.clippingPlanes,Ze),b=fe.get(y,A.length),b.init(),A.push(b),Ee.enabled===!0&&Ee.isPresenting===!0){const Se=C.xr.getDepthSensingMesh();Se!==null&&Hr(Se,D,-1/0,C.sortObjects)}Hr(y,D,0,C.sortObjects),b.finish(),N!==null&&N.updateLights(T.state.lightsArray),C.sortObjects===!0&&b.sort(Me,Fe),pt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,pt&&ke.addToRenderList(b,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ae===!0&&Ce.beginShadows();const V=T.state.shadowsArray;if(De.render(V,y,D),Ae===!0&&Ce.endShadows(),(G&&E.hasRenderPass())===!1){const Se=b.opaque,me=b.transmissive;if(T.setupLights(),D.isArrayCamera){const be=D.cameras;if(me.length>0)for(let we=0,He=be.length;we<He;we++){const Ke=be[we];nl(Se,me,y,Ke)}pt&&ke.render(y);for(let we=0,He=be.length;we<He;we++){const Ke=be[we];tl(b,y,Ke,Ke.viewport)}}else me.length>0&&nl(Se,me,y,D),pt&&ke.render(y),tl(b,y,D)}Q!==null&&H===0&&($.updateMultisampleRenderTarget(Q),$.updateRenderTargetMipmap(Q)),G&&E.end(C),y.isScene===!0&&y.onAfterRender(C,y,D),_e.resetDefaultState(),X=-1,q=null,x.pop(),x.length>0?(T=x[x.length-1],$.setTextureUnits(T.state.textureUnits),Ae===!0&&Ce.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,N!==null&&N.renderEnd()};function Hr(y,D,K,G){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)K=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLightProbeGrid)T.pushLightProbeGrid(y);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(re)){G&&Mt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Oe);const Se=te.update(y),me=y.material;me.visible&&b.push(y,Se,me,K,Mt.z,null,D)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(re))){const Se=te.update(y),me=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Mt.copy(y.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Mt.copy(Se.boundingSphere.center)),Mt.applyMatrix4(y.matrixWorld).applyMatrix4(Oe)),Array.isArray(me)){const be=Se.groups;for(let we=0,He=be.length;we<He;we++){const Ke=be[we],Te=me[Ke.materialIndex];Te&&Te.visible&&b.push(y,Se,Te,K,Mt.z,Ke,D)}}else me.visible&&b.push(y,Se,me,K,Mt.z,null,D)}}const ge=y.children;for(let Se=0,me=ge.length;Se<me;Se++)Hr(ge[Se],D,K,G)}function tl(y,D,K,G){const{opaque:V,transmissive:ge,transparent:Se}=y;T.setupLightsView(K),Ae===!0&&Ce.setGlobalState(C.clippingPlanes,K),G&&_.viewport(Y.copy(G)),V.length>0&&Ns(V,D,K),ge.length>0&&Ns(ge,D,K),Se.length>0&&Ns(Se,D,K),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function nl(y,D,K,G){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){const Te=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new fn(1,1,{generateMipmaps:!0,type:Te?Cn:$t,minFilter:zn,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const ge=T.state.transmissionRenderTarget[G.id],Se=G.viewport||Y;ge.setSize(Se.z*C.transmissionResolutionScale,Se.w*C.transmissionResolutionScale);const me=C.getRenderTarget(),be=C.getActiveCubeFace(),we=C.getActiveMipmapLevel();C.setRenderTarget(ge),C.getClearColor(Ie),ze=C.getClearAlpha(),ze<1&&C.setClearColor(16777215,.5),C.clear(),pt&&ke.render(K);const He=C.toneMapping;C.toneMapping=En;const Ke=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),Ae===!0&&Ce.setGlobalState(C.clippingPlanes,G),Ns(y,K,G),$.updateMultisampleRenderTarget(ge),$.updateRenderTargetMipmap(ge),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let tt=0,St=D.length;tt<St;tt++){const ut=D[tt],{object:lt,geometry:Dt,material:ye,group:Ot}=ut;if(ye.side===Sn&&lt.layers.test(G.layers)){const je=ye.side;ye.side=Wt,ye.needsUpdate=!0,il(lt,K,G,Dt,ye,Ot),ye.side=je,ye.needsUpdate=!0,Te=!0}}Te===!0&&($.updateMultisampleRenderTarget(ge),$.updateRenderTargetMipmap(ge))}C.setRenderTarget(me,be,we),C.setClearColor(Ie,ze),Ke!==void 0&&(G.viewport=Ke),C.toneMapping=He}function Ns(y,D,K){const G=D.isScene===!0?D.overrideMaterial:null;for(let V=0,ge=y.length;V<ge;V++){const Se=y[V],{object:me,geometry:be,group:we}=Se;let He=Se.material;He.allowOverride===!0&&G!==null&&(He=G),me.layers.test(K.layers)&&il(me,D,K,be,He,we)}}function il(y,D,K,G,V,ge){N!==null&&V.isNodeMaterial&&N.setObject(y,V),y.onBeforeRender(C,D,K,G,V,ge),y.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),V.onBeforeRender(C,D,K,G,y,ge),V.transparent===!0&&V.side===Sn&&V.forceSinglePass===!1?(V.side=Wt,V.needsUpdate=!0,C.renderBufferDirect(K,D,G,V,y,ge),V.side=ai,V.needsUpdate=!0,C.renderBufferDirect(K,D,G,V,y,ge),V.side=Sn):C.renderBufferDirect(K,D,G,V,y,ge),y.onAfterRender(C,D,K,G,V,ge)}function Us(y,D,K){D.isScene!==!0&&(D=Gt);const G=W.get(y),V=T.state.lights,ge=T.state.shadowsArray,Se=V.state.version,me=ce.getParameters(y,V.state,ge,D,K,T.state.lightProbeGridArray),be=ce.getProgramCacheKey(me);let we=G.programs;G.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,G.fog=D.fog;const He=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;G.envMap=se.get(y.envMap||G.environment,He),G.envMapRotation=G.environment!==null&&y.envMap===null?D.environmentRotation:y.envMapRotation,we===void 0&&(y.addEventListener("dispose",mn),we=new Map,G.programs=we);let Ke=we.get(be);if(Ke!==void 0){if(G.currentProgram===Ke&&G.lightsStateVersion===Se)return rl(y,me),Ke}else me.uniforms=ce.getUniforms(y),N!==null&&y.isNodeMaterial&&N.build(y,K,me),y.onBeforeCompile(me,C),Ke=ce.acquireProgram(me,be),we.set(be,Ke),G.uniforms=me.uniforms;const Te=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Te.clippingPlanes=Ce.uniform),rl(y,me),G.needsLights=Jh(y),G.lightsStateVersion=Se,G.needsLights&&(Te.ambientLightColor.value=V.state.ambient,Te.lightProbe.value=V.state.probe,Te.sunLights.value=V.state.sun,Te.sunLightShadows.value=V.state.sunShadow,Te.directionalLights.value=V.state.directional,Te.directionalLightShadows.value=V.state.directionalShadow,Te.spotLights.value=V.state.spot,Te.spotLightShadows.value=V.state.spotShadow,Te.rectAreaLights.value=V.state.rectArea,Te.ltc_1.value=V.state.rectAreaLTC1,Te.ltc_2.value=V.state.rectAreaLTC2,Te.pointLights.value=V.state.point,Te.pointLightShadows.value=V.state.pointShadow,Te.hemisphereLights.value=V.state.hemi,Te.sunShadowMatrix.value=V.state.sunShadowMatrix,Te.sunShadowCascade.value=V.state.sunShadowCascade,Te.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Te.spotLightMatrix.value=V.state.spotLightMatrix,Te.spotLightMap.value=V.state.spotLightMap,Te.pointShadowMatrix.value=V.state.pointShadowMatrix),G.lightProbeGrid=T.state.lightProbeGridArray.length>0,G.currentProgram=Ke,G.uniformsList=null,Ke}function sl(y){if(y.uniformsList===null){const D=y.currentProgram.getUniforms();y.uniformsList=xr.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function rl(y,D){const K=W.get(y);K.outputColorSpace=D.outputColorSpace,K.batching=D.batching,K.batchingColor=D.batchingColor,K.instancing=D.instancing,K.instancingColor=D.instancingColor,K.instancingMorph=D.instancingMorph,K.skinning=D.skinning,K.morphTargets=D.morphTargets,K.morphNormals=D.morphNormals,K.morphColors=D.morphColors,K.morphTargetsCount=D.morphTargetsCount,K.numClippingPlanes=D.numClippingPlanes,K.numIntersection=D.numClipIntersection,K.vertexAlphas=D.vertexAlphas,K.vertexTangents=D.vertexTangents,K.toneMapping=D.toneMapping}function Yh(y,D){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;M.setFromMatrixPosition(D.matrixWorld);for(let K=0,G=y.length;K<G;K++){const V=y[K];if(V.texture!==null&&V.boundingBox.containsPoint(M))return V}return null}function $h(y,D,K,G,V){D.isScene!==!0&&(D=Gt),$.resetTextureUnits();const ge=D.fog,Se=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?D.environment:null,me=Q===null?C.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ye.workingColorSpace,be=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,we=se.get(G.envMap||Se,be),He=G.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ke=!!K.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Te=!!K.morphAttributes.position,tt=!!K.morphAttributes.normal,St=!!K.morphAttributes.color;let ut=En;G.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ut=C.toneMapping);const lt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Dt=lt!==void 0?lt.length:0,ye=W.get(G),Ot=T.state.lights;if(Ae===!0&&(Ze===!0||y!==q)){const ht=y===q&&G.id===X;Ce.setState(G,y,ht)}let je=!1;G.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Ot.state.version||ye.outputColorSpace!==me||V.isBatchedMesh&&ye.batching===!1||!V.isBatchedMesh&&ye.batching===!0||V.isBatchedMesh&&ye.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&ye.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&ye.instancing===!1||!V.isInstancedMesh&&ye.instancing===!0||V.isSkinnedMesh&&ye.skinning===!1||!V.isSkinnedMesh&&ye.skinning===!0||V.isInstancedMesh&&ye.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&ye.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&ye.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&ye.instancingMorph===!1&&V.morphTexture!==null||ye.envMap!==we||G.fog===!0&&ye.fog!==ge||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Ce.numPlanes||ye.numIntersection!==Ce.numIntersection)||ye.vertexAlphas!==He||ye.vertexTangents!==Ke||ye.morphTargets!==Te||ye.morphNormals!==tt||ye.morphColors!==St||ye.toneMapping!==ut||ye.morphTargetsCount!==Dt||!!ye.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(je=!0):(je=!0,ye.__version=G.version);let Jt=ye.currentProgram;je===!0&&(Jt=Us(G,D,V),N&&G.isNodeMaterial&&N.onUpdateProgram(G,Jt,ye));let gn=!1,Kn=!1,yi=!1;const at=Jt.getUniforms(),gt=ye.uniforms;if(_.useProgram(Jt.program)&&(gn=!0,Kn=!0,yi=!0),G.id!==X&&(X=G.id,Kn=!0),ye.needsLights){const ht=Yh(T.state.lightProbeGridArray,V);ye.lightProbeGrid!==ht&&(ye.lightProbeGrid=ht,Kn=!0)}if(gn||q!==y){_.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),at.setValue(F,"projectionMatrix",y.projectionMatrix),at.setValue(F,"viewMatrix",y.matrixWorldInverse);const $n=at.map.cameraPosition;$n!==void 0&&$n.setValue(F,Je.setFromMatrixPosition(y.matrixWorld)),R.logarithmicDepthBuffer&&at.setValue(F,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&at.setValue(F,"isOrthographic",y.isOrthographicCamera===!0),q!==y&&(q=y,Kn=!0,yi=!0)}if(ye.needsLights&&(Ot.state.sunShadowMap.length>0&&at.setValue(F,"sunShadowMap",Ot.state.sunShadowMap,$),Ot.state.directionalShadowMap.length>0&&at.setValue(F,"directionalShadowMap",Ot.state.directionalShadowMap,$),Ot.state.spotShadowMap.length>0&&at.setValue(F,"spotShadowMap",Ot.state.spotShadowMap,$),Ot.state.pointShadowMap.length>0&&at.setValue(F,"pointShadowMap",Ot.state.pointShadowMap,$)),V.isSkinnedMesh){at.setOptional(F,V,"bindMatrix"),at.setOptional(F,V,"bindMatrixInverse");const ht=V.skeleton;ht&&(ht.boneTexture===null&&ht.computeBoneTexture(),at.setValue(F,"boneTexture",ht.boneTexture,$))}V.isBatchedMesh&&(at.setOptional(F,V,"batchingTexture"),at.setValue(F,"batchingTexture",V._matricesTexture,$),at.setOptional(F,V,"batchingIdTexture"),at.setValue(F,"batchingIdTexture",V._indirectTexture,$),at.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&at.setValue(F,"batchingColorTexture",V._colorsTexture,$));const Yn=K.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&U.update(V,K,Jt),(Kn||ye.receiveShadow!==V.receiveShadow)&&(ye.receiveShadow=V.receiveShadow,at.setValue(F,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&D.environment!==null&&(gt.envMapIntensity.value=D.environmentIntensity),gt.dfgLUT!==void 0&&(gt.dfgLUT.value=O_()),Kn){if(at.setValue(F,"toneMappingExposure",C.toneMappingExposure),ye.needsLights&&Zh(gt,yi),ge&&G.fog===!0&&Re.refreshFogUniforms(gt,ge),Re.refreshMaterialUniforms(gt,G,ne,Z,T.state.transmissionRenderTarget[y.id]),ye.needsLights&&ye.lightProbeGrid){const ht=ye.lightProbeGrid;gt.probesSH.value=ht.texture,gt.probesMin.value.copy(ht.boundingBox.min),gt.probesMax.value.copy(ht.boundingBox.max),gt.probesResolution.value.copy(ht.resolution)}xr.upload(F,sl(ye),gt,$)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(xr.upload(F,sl(ye),gt,$),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&at.setValue(F,"center",V.center),at.setValue(F,"modelViewMatrix",V.modelViewMatrix),at.setValue(F,"normalMatrix",V.normalMatrix),at.setValue(F,"modelMatrix",V.matrixWorld),G.uniformsGroups!==void 0){const ht=G.uniformsGroups;for(let $n=0,Si=ht.length;$n<Si;$n++){const ol=ht[$n];ie.update(ol,Jt),ie.bind(ol,Jt)}}return Jt}function Zh(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.sunLights.needsUpdate=D,y.sunLightShadows.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function Jh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(y,D,K){const G=W.get(y);G.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),W.get(y.texture).__webglTexture=D,W.get(y.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:K,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,D){const K=W.get(y);K.__webglFramebuffer=D,K.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(y,D=0,K=0){Q=y,z=D,H=K;let G=null,V=!1,ge=!1;if(y){const me=W.get(y);if(me.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(F.FRAMEBUFFER,me.__webglFramebuffer),Y.copy(y.viewport),ve.copy(y.scissor),oe=y.scissorTest,_.viewport(Y),_.scissor(ve),_.setScissorTest(oe),X=-1;return}else if(me.__webglFramebuffer===void 0)$.setupRenderTarget(y);else if(me.__hasExternalTextures)$.rebindTextures(y,W.get(y.texture).__webglTexture,W.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const He=y.depthTexture;if(me.__boundDepthTexture!==He){if(He!==null&&W.has(He)&&(y.width!==He.image.width||y.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(y)}}const be=y.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(ge=!0);const we=W.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(we[D])?G=we[D][K]:G=we[D],V=!0):y.samples>0&&$.useMultisampledRTT(y)===!1?G=W.get(y).__webglMultisampledFramebuffer:Array.isArray(we)?G=we[K]:G=we,Y.copy(y.viewport),ve.copy(y.scissor),oe=y.scissorTest}else Y.copy(xe).multiplyScalar(ne).floor(),ve.copy(j).multiplyScalar(ne).floor(),oe=ae;if(K!==0&&(G=I),_.bindFramebuffer(F.FRAMEBUFFER,G)&&_.drawBuffers(y,G),_.viewport(Y),_.scissor(ve),_.setScissorTest(oe),V){const me=W.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+D,me.__webglTexture,K)}else if(ge){const me=D;for(let be=0;be<y.textures.length;be++){const we=W.get(y.textures[be]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+be,we.__webglTexture,K,me)}}else if(y!==null&&K!==0){const me=W.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,me.__webglTexture,K)}X=-1};function al(y){const D=W.get(y);return(D.__readFormat!==y.format||D.__readType!==y.type)&&(D.__readFormat=y.format,D.__readType=y.type,D.__formatReadable=R.textureFormatReadable(y.format),D.__typeReadable=R.textureTypeReadable(y.type)),D}this.readRenderTargetPixels=function(y,D,K,G,V,ge,Se,me=0){if(!(y&&y.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=W.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Se!==void 0&&(be=be[Se]),be){_.bindFramebuffer(F.FRAMEBUFFER,be);try{const we=y.textures[me],He=we.format,Ke=we.type;y.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+me);const Te=al(we);if(Te.__formatReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-G&&K>=0&&K<=y.height-V&&F.readPixels(D,K,G,V,de.convert(He),de.convert(Ke),ge)}finally{const we=Q!==null?W.get(Q).__webglFramebuffer:null;_.bindFramebuffer(F.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(y,D,K,G,V,ge,Se,me=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=W.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Se!==void 0&&(be=be[Se]),be)if(D>=0&&D<=y.width-G&&K>=0&&K<=y.height-V){_.bindFramebuffer(F.FRAMEBUFFER,be);const we=y.textures[me],He=we.format,Ke=we.type;y.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+me);const Te=al(we);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,tt),F.bufferData(F.PIXEL_PACK_BUFFER,ge.byteLength,F.STREAM_READ),F.readPixels(D,K,G,V,de.convert(He),de.convert(Ke),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const St=Q!==null?W.get(Q).__webglFramebuffer:null;_.bindFramebuffer(F.FRAMEBUFFER,St);const ut=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await od(F,ut,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,tt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ge),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(tt),F.deleteSync(ut),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,D=null,K=0){const G=Math.pow(2,-K),V=Math.floor(y.image.width*G),ge=Math.floor(y.image.height*G),Se=D!==null?D.x:0,me=D!==null?D.y:0;$.setTexture2D(y,0),F.copyTexSubImage2D(F.TEXTURE_2D,K,0,0,Se,me,V,ge),_.unbindTexture()},this.copyTextureToTexture=function(y,D,K=null,G=null,V=0,ge=0){let Se,me,be,we,He,Ke,Te,tt,St;const ut=y.isCompressedTexture?y.mipmaps[ge]:y.image;if(K!==null)Se=K.max.x-K.min.x,me=K.max.y-K.min.y,be=K.isBox3?K.max.z-K.min.z:1,we=K.min.x,He=K.min.y,Ke=K.isBox3?K.min.z:0;else{const gt=Math.pow(2,-V);Se=Math.floor(ut.width*gt),me=Math.floor(ut.height*gt),y.isDataArrayTexture?be=ut.depth:y.isData3DTexture?be=Math.floor(ut.depth*gt):be=1,we=0,He=0,Ke=0}G!==null?(Te=G.x,tt=G.y,St=G.z):(Te=0,tt=0,St=0);const lt=de.convert(D.format),Dt=de.convert(D.type);let ye;D.isData3DTexture?($.setTexture3D(D,0),ye=F.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?($.setTexture2DArray(D,0),ye=F.TEXTURE_2D_ARRAY):($.setTexture2D(D,0),ye=F.TEXTURE_2D),_.activeTexture(F.TEXTURE0),_.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,D.flipY),_.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),_.pixelStorei(F.UNPACK_ALIGNMENT,D.unpackAlignment);const Ot=_.getParameter(F.UNPACK_ROW_LENGTH),je=_.getParameter(F.UNPACK_IMAGE_HEIGHT),Jt=_.getParameter(F.UNPACK_SKIP_PIXELS),gn=_.getParameter(F.UNPACK_SKIP_ROWS),Kn=_.getParameter(F.UNPACK_SKIP_IMAGES);_.pixelStorei(F.UNPACK_ROW_LENGTH,ut.width),_.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ut.height),_.pixelStorei(F.UNPACK_SKIP_PIXELS,we),_.pixelStorei(F.UNPACK_SKIP_ROWS,He),_.pixelStorei(F.UNPACK_SKIP_IMAGES,Ke);const yi=y.isDataArrayTexture||y.isData3DTexture,at=D.isDataArrayTexture||D.isData3DTexture;if(y.isDepthTexture){const gt=W.get(y),Yn=W.get(D),ht=W.get(gt.__renderTarget),$n=W.get(Yn.__renderTarget);_.bindFramebuffer(F.READ_FRAMEBUFFER,ht.__webglFramebuffer),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let Si=0;Si<be;Si++)yi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(y).__webglTexture,V,Ke+Si),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(D).__webglTexture,ge,St+Si)),F.blitFramebuffer(we,He,Se,me,Te,tt,Se,me,F.DEPTH_BUFFER_BIT,F.NEAREST);_.bindFramebuffer(F.READ_FRAMEBUFFER,null),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(V!==0||y.isRenderTargetTexture||W.has(y)){const gt=W.get(y),Yn=W.get(D);_.bindFramebuffer(F.READ_FRAMEBUFFER,P),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,O);for(let ht=0;ht<be;ht++)yi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,gt.__webglTexture,V,Ke+ht):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,gt.__webglTexture,V),at?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Yn.__webglTexture,ge,St+ht):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Yn.__webglTexture,ge),V!==0?F.blitFramebuffer(we,He,Se,me,Te,tt,Se,me,F.COLOR_BUFFER_BIT,F.NEAREST):at?F.copyTexSubImage3D(ye,ge,Te,tt,St+ht,we,He,Se,me):F.copyTexSubImage2D(ye,ge,Te,tt,we,He,Se,me);_.bindFramebuffer(F.READ_FRAMEBUFFER,null),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else at?y.isDataTexture||y.isData3DTexture?F.texSubImage3D(ye,ge,Te,tt,St,Se,me,be,lt,Dt,ut.data):D.isCompressedArrayTexture?F.compressedTexSubImage3D(ye,ge,Te,tt,St,Se,me,be,lt,ut.data):F.texSubImage3D(ye,ge,Te,tt,St,Se,me,be,lt,Dt,ut):y.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ge,Te,tt,Se,me,lt,Dt,ut.data):y.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ge,Te,tt,ut.width,ut.height,lt,ut.data):F.texSubImage2D(F.TEXTURE_2D,ge,Te,tt,Se,me,lt,Dt,ut);_.pixelStorei(F.UNPACK_ROW_LENGTH,Ot),_.pixelStorei(F.UNPACK_IMAGE_HEIGHT,je),_.pixelStorei(F.UNPACK_SKIP_PIXELS,Jt),_.pixelStorei(F.UNPACK_SKIP_ROWS,gn),_.pixelStorei(F.UNPACK_SKIP_IMAGES,Kn),ge===0&&D.generateMipmaps&&F.generateMipmap(ye),_.unbindTexture()},this.initRenderTarget=function(y){W.get(y).__webglFramebuffer===void 0&&$.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?$.setTextureCube(y,0):y.isData3DTexture?$.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?$.setTexture2DArray(y,0):$.setTexture2D(y,0),_.unbindTexture()},this.resetState=function(){z=0,H=0,Q=null,_.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}function k_(s){const e=new B_({canvas:s,antialias:!0,powerPreference:"high-performance"});return e.setPixelRatio(Math.min(devicePixelRatio||1,1.65)),e.outputColorSpace=_t,e.toneMapping=yo,e.toneMappingExposure=1.3,e.shadowMap.enabled=!0,e.shadowMap.type=_s,e}function Is(s){const e=new Set,t=new Set,n=new Set;s.traverse(i=>{if(i instanceof xt||i instanceof Th){e.add(i.geometry);for(const r of Array.isArray(i.material)?i.material:[i.material]){t.add(r);for(const a of Object.values(r))a instanceof At&&n.add(a)}}(i instanceof Ir||i instanceof zi||i instanceof Wo)&&i.shadow.dispose()});for(const i of e)i.dispose();for(const i of t)i.dispose();for(const i of n)i.dispose()}class z_{constructor(e){this.canvas=e,this.gl=k_(e)}canvas;gl;scene=new zl;cutScene=new zl;camera=new Yi(-8,8,5,-5,.1,100);width=1;height=1;angle=0;externalCamera=!1;editorMode=!1;beforeRender;afterRender;cameraSettings=vr();center=new B;configureCamera(e=vo){this.cameraSettings=vr(e);const t=this.camera;e.projection==="perspective"!=t instanceof Lt&&(this.camera=e.projection==="perspective"?new Lt(e.fov,1,.1,100):new Yi(-8,8,5,-5,.1,100),this.camera.position.copy(t.position),this.camera.quaternion.copy(t.quaternion),this.camera.up.copy(t.up),this.camera.zoom=t.zoom),this.camera instanceof Lt&&(this.camera.fov=e.fov),this.camera.near=this.cameraSettings.near,this.camera.far=this.cameraSettings.far,this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld()}resize(){const e=this.canvas.getBoundingClientRect();this.width=Math.max(1,e.width),this.height=Math.max(1,e.height),this.gl.setSize(this.width,this.height,!1)}updateCamera(e){const t=this.cameraSettings,n=this.width/this.height;this.center.lerp(new B(t.centerX,t.centerY,0),t.smoothing?1-Math.exp(-e*t.smoothing):1),this.camera instanceof Lt?this.camera.aspect=n:(this.camera.left=-t.height*n/2,this.camera.right=t.height*n/2,this.camera.top=t.height/2,this.camera.bottom=-t.height/2),this.camera.zoom=1,this.camera.position.set(this.center.x,this.center.y,t.distance),this.camera.up.set(0,1,0),this.camera.rotation.set(0,0,0),this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld()}project(e){const t=e.clone().project(this.camera);return{x:(t.x+1)*this.width/2,y:(1-t.y)*this.height/2}}render(e){this.externalCamera||this.updateCamera(e),this.beforeRender?.(),this.gl.render(this.scene,this.camera),this.afterRender?.()}dispose(){Is(this.scene),Is(this.cutScene),this.gl.dispose(),this.gl.forceContextLoss()}}class H_{constructor(e){this.renderer=e,e.scene.add(this.root)}renderer;sources=new Map;instances=new Map;root=new rn;prototypes=new Map;textures=new Map;prefabs=new Map;validators=[];initial=hl();document=hl();revision=0;validate(e){const t=iu(e);for(const n of this.validators)n(t);for(const n of t.nodes){if(n.kind==="source"&&!this.sources.has(n.asset))throw new Error("Исходный ресурс недоступен: "+n.name);if(n.kind==="model"&&!this.prototypes.has(n.asset))throw new Error("Модель не загружена: "+n.name)}return t}apply(e){const t=this.validate(e);this.document=t;const n=new Set(t.nodes.map(i=>i.id));for(const[i,r]of this.instances)n.has(i)||(this.disposeInstance(r),this.instances.delete(i));for(const i of this.sources.values())i.wrapper.visible=!1;for(const i of t.nodes){const r=i.kind+":"+(i.asset||"");let a=this.instances.get(i.id);a&&a.key!==r&&(this.disposeInstance(a),this.instances.delete(i.id),a=void 0),a||(a=this.instantiate(i),this.instances.set(i.id,a));const o=a.root;if(o.position.fromArray(i.transform.position),o.rotation.set(...i.transform.rotation.map(wr.degToRad)),o.scale.fromArray(i.transform.scale),o.visible=i.visible,o.name=i.name,o.userData.sceneNode=i.id,o.updateMatrixWorld(!0),this.applySurface(a,i.surface),i.light){const l=o.children.find(c=>c instanceof Ds);l.color.set(i.light.color),l.intensity=i.light.intensity,l.distance=i.light.range,l.castShadow=i.light.shadows&&i.light.intensity>0,l instanceof zi&&(l.angle=wr.degToRad(i.light.angle),l.penumbra=i.light.penumbra)}}this.renderer.gl.toneMappingExposure=t.environment.exposure,this.renderer.cameraSettings=vr(t.camera),(!this.renderer.editorMode||!this.renderer.externalCamera)&&this.renderer.configureCamera(t.camera),this.revision++}instantiate(e){let t=new rn,n=!1;if(e.kind==="source"){const r=this.sources.get(e.asset);e.id===e.asset?t=r.wrapper:(t.add(r.prototype.clone(!0)),(r.cut?this.renderer.cutScene:this.root).add(t))}else if(this.root.add(t),e.kind==="model")t.add(this.prototypes.get(e.asset).clone(!0));else if(e.kind==="prefab"){n=!0;const r=this.prefabs.get(e.asset);if(!r)throw new Error("Шаблон не зарегистрирован: "+e.asset);t.add(r())}else if(e.kind.endsWith("-light")){const r=e.kind==="spot-light"?new zi:new Ir;r.decay=2,r.shadow.mapSize.set(512,512),r.shadow.camera.near=.05,r.shadow.normalBias=.012,t.add(r),r instanceof zi&&(r.target.position.set(0,0,-1),t.add(r.target))}else if(e.kind==="camera")t.userData.camera=!0;else{n=!0;const r=e.kind==="sphere"?new Go(.5,24,16):e.kind==="plane"?new li(1,1,.04):new li(1,1,1),a=new xt(r,new ri({color:9212561,roughness:.9}));a.position.y=.5,a.castShadow=a.receiveShadow=!0,t.add(a)}const i=new Map;return t.traverse(r=>{r instanceof xt&&i.set(r,r.material)}),{root:t,key:e.kind+":"+(e.asset||""),surfaceKey:"",ownedMaterials:new Set,ownedTextures:new Set,originals:i,ownsGeometry:n,ownsMaterials:e.kind!=="prefab"}}applySurface(e,t){const n=t&&this.document.textures.find(a=>a.id===t.texture),i=JSON.stringify(t||null)+(n?.data||"");if(i===e.surfaceKey)return;e.surfaceKey=i;for(const a of e.ownedMaterials)a.dispose();for(const a of e.ownedTextures)a.dispose();e.ownedMaterials.clear(),e.ownedTextures.clear();let r;n&&(r=new Lr().load(n.data),r.colorSpace=_t,r.wrapS=r.wrapT=An,r.repeat.setScalar(t.repeat),e.ownedTextures.add(r));for(const[a,o]of e.originals){if(!t){a.material=o;continue}const l=(Array.isArray(o)?o:[o]).map(c=>{const h=c instanceof ri?c.clone():new ri({side:c.side});h.color.set(t.color),h.roughness=t.roughness,h.metalness=t.metalness;const u=t.texture==="original"?c.map:this.textures.get(t.texture);if(h.map=null,r?h.map=r:u&&(h.map=u.clone(),h.map.wrapS=h.map.wrapT=An,h.map.repeat.setScalar(t.repeat),h.map.needsUpdate=!0,e.ownedTextures.add(h.map)),t.texture!=="original")for(const[d,f]of[["normal","normalMap"],["roughness","roughnessMap"],["metalness","metalnessMap"],["ao","aoMap"]]){const g=this.textures.get(t.texture+":"+d);if(h[f]=null,g){const v=g.clone();v.repeat.setScalar(t.repeat),v.needsUpdate=!0,h[f]=v,e.ownedTextures.add(v)}}return e.ownedMaterials.add(h),h});a.material=Array.isArray(o)?l:l[0]}}beforeRender(e){const t=new Set(this.document.nodes.map(n=>n.id));for(const[n,i]of this.sources)t.has(n)||(i.wrapper.visible=!1);for(const n of this.document.nodes)this.instances.get(n.id).root.visible=n.visible}disposeInstance(e){for(const[t,n]of e.originals)t.material=n;for(const t of e.ownedMaterials)t.dispose();for(const t of e.ownedTextures)t.dispose();if([...this.sources.values()].some(t=>t.wrapper===e.root)){e.root.visible=!1;return}e.root.removeFromParent(),e.root.traverse(t=>{if(e.ownsGeometry&&t instanceof xt&&(t.geometry.dispose(),e.ownsMaterials))for(const n of Array.isArray(t.material)?t.material:[t.material])n.dispose();(t instanceof Ir||t instanceof zi)&&t.shadow.dispose()})}dispose(){for(const e of this.instances.values())this.disposeInstance(e);this.instances.clear(),this.root.removeFromParent()}}function Fc(s,e){if(e===Yu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===uo||e===fh){let t=s.getIndex();if(t===null){const r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===uo)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function G_(s){const e=new Map,t=new Map,n=s.clone();return zh(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function zh(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)zh(s.children[n],e.children[n],t)}class V_ extends Qi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Y_(t)}),this.register(function(t){return new $_(t)}),this.register(function(t){return new sx(t)}),this.register(function(t){return new rx(t)}),this.register(function(t){return new ax(t)}),this.register(function(t){return new J_(t)}),this.register(function(t){return new Q_(t)}),this.register(function(t){return new j_(t)}),this.register(function(t){return new ex(t)}),this.register(function(t){return new K_(t)}),this.register(function(t){return new tx(t)}),this.register(function(t){return new Z_(t)}),this.register(function(t){return new ix(t)}),this.register(function(t){return new nx(t)}),this.register(function(t){return new X_(t)}),this.register(function(t){return new Oc(t,Xe.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Oc(t,Xe.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new ox(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=ys.extractUrlBase(e);a=ys.resolveURL(c,this.path)}else a=ys.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ph(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Hh){try{a[Xe.KHR_BINARY_GLTF]=new lx(e)}catch(u){i&&i(u);return}r=JSON.parse(a[Xe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new yx(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Xe.KHR_MATERIALS_UNLIT:a[u]=new q_;break;case Xe.KHR_DRACO_MESH_COMPRESSION:a[u]=new cx(r,this.dracoLoader);break;case Xe.KHR_TEXTURE_TRANSFORM:a[u]=new hx;break;case Xe.KHR_MESH_QUANTIZATION:a[u]=new ux;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function W_(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function vt(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const Xe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class X_{constructor(e){this.parser=e,this.name=Xe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new Ne(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Zt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Wo(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ir(h),c.distance=u;break;case"spot":c=new zi(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Mn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class q_{constructor(){this.name=Xe.KHR_MATERIALS_UNLIT}getMaterialType(){return si}extendParams(e,t,n){const i=[];e.color=new Ne(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Zt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,_t))}return Promise.all(i)}}class K_{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=vt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class Y_{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return vt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=vt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new qe(r,r)}return Promise.all(i)}}class $_{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_DISPERSION}getMaterialType(e){return vt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=vt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class Z_{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return vt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=vt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class J_{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SHEEN}getMaterialType(e){return vt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=vt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Zt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,_t)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class Q_{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return vt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=vt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class j_{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_VOLUME}getMaterialType(e){return vt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=vt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ne().setRGB(r[0],r[1],r[2],Zt),Promise.all(i)}}class ex{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IOR}getMaterialType(e){return vt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=vt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class tx{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SPECULAR}getMaterialType(e){return vt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=vt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ne().setRGB(r[0],r[1],r[2],Zt),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,_t)),Promise.all(i)}}class nx{constructor(e){this.parser=e,this.name=Xe.EXT_MATERIALS_BUMP}getMaterialType(e){return vt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=vt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class ix{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return vt(this.parser,e,this.name)!==null?In:null}extendMaterialParams(e,t){const n=vt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class sx{constructor(e){this.parser=e,this.name=Xe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class rx{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class ax{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class Oc{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class ox{constructor(e){this.name=Xe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==en.TRIANGLES&&c.mode!==en.TRIANGLE_STRIP&&c.mode!==en.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const v=new Ve,m=new B,p=new Xn,S=new B(1,1,1),w=new Zd(g.geometry,g.material,d);for(let b=0;b<d;b++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,b),l.SCALE&&S.fromBufferAttribute(l.SCALE,b),w.setMatrixAt(b,v.compose(m,p,S));let M=null;for(const b in l)if(b==="_COLOR_0"){const T=l[b];w.instanceColor=new Ar(T.array,T.itemSize,T.normalized)}else if(b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"){if(M===null){const A=w.geometry;M=new Ft,M.name=A.name;for(const x in A.attributes)M.setAttribute(x,A.attributes[x]);for(const x in A.morphAttributes)M.morphAttributes[x]=A.morphAttributes[x];A.index!==null&&M.setIndex(A.index),M.morphTargetsRelative=A.morphTargetsRelative;for(const x of A.groups)M.addGroup(x.start,x.count,x.materialIndex);A.boundingBox!==null&&(M.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(M.boundingSphere=A.boundingSphere.clone()),M.drawRange.start=A.drawRange.start,M.drawRange.count=A.drawRange.count,M.userData=Object.assign({},A.userData),w.geometry=M}const T=l[b];M.setAttribute(b,new Ar(T.array,T.itemSize,T.normalized))}ft.prototype.copy.call(w,g),this.parser.assignFinalMaterial(w),f.push(w)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Hh="glTF",us=12,Bc={JSON:1313821514,BIN:5130562};class lx{constructor(e){this.name=Xe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,us),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Hh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-us,r=new DataView(e,us);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Bc.JSON){const c=new Uint8Array(e,us+a,o);this.content=n.decode(c)}else if(l===Bc.BIN){const c=us+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class cx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Xe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=_o[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=_o[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Wi[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const v=f.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}u(f)},o,c,Zt,d)})})}}class hx{constructor(){this.name=Xe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class ux{constructor(){this.name=Xe.KHR_MESH_QUANTIZATION}}class Gh extends $i{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,v=g-c,m=-2*f+3*d,p=f-d,S=1-m,w=p-d+u;for(let M=0;M!==o;M++){const b=a[v+M+o],T=a[v+M+l]*h,A=a[g+M+o],x=a[g+M]*h;r[M]=S*b+w*T+m*A+p*x}return r}}const dx=new Xn;class fx extends Gh{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return dx.fromArray(r).normalize().toArray(r),r}}const en={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Wi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},kc={9728:Et,9729:wt,9984:ah,9985:dr,9986:fs,9987:zn},zc={33071:bn,33648:yr,10497:An},ba={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},_o={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ti={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},px={CUBICSPLINE:void 0,LINEAR:ws,STEP:Es},Ta={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function mx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ri({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ai})),s.DefaultMaterial}function mi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Mn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function gx(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function _x(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function xx(s){let e;const t=s.extensions&&s.extensions[Xe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ea(t.attributes):e=s.indices+":"+Ea(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Ea(s.targets[n]);return e}function Ea(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function xo(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function vx(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Mx=new Ve;class yx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new W_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new Lr(this.options.manager):this.textureLoader=new Cf(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ph(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return mi(r,o,i),Mn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Xe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(ys.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=ba[i.type],o=Wi[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Xt(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=ba[i.type],c=Wi[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let v,m;if(f&&f!==u){const p=Math.floor(d/f),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let w=t.cache.get(S);w||(v=new c(o,p*f,i.count*f/h),w=new Hd(v,f/h),t.cache.add(S,w)),m=new No(w,l,d%f/h,g)}else o===null?v=new c(i.count*l):v=new c(o,d,i.count*l),m=new Xt(v,l,g);if(i.sparse!==void 0){const p=ba.SCALAR,S=Wi[i.sparse.indices.componentType],w=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,b=new S(a[1],w,i.sparse.count*p),T=new c(a[2],M,i.sparse.count*l);o!==null&&(m=new Xt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,x=b.length;A<x;A++){const E=b[A];if(m.setX(E,T[A*l]),l>=2&&m.setY(E,T[A*l+1]),l>=3&&m.setZ(E,T[A*l+2]),l>=4&&m.setW(E,T[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=kc[d.magFilter]||wt,h.minFilter=kc[d.minFilter]||zn,h.wrapS=zc[d.wrapS]||An,h.wrapT=zc[d.wrapT]||An,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Et&&h.minFilter!==wt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(v){const m=new At(v);m.needsUpdate=!0,d(m)}),t.load(ys.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Mn(u,a),u.userData.mimeType=a.mimeType||vx(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Xe.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Xe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[Xe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new bh,wn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Sh,wn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ri}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[Xe.KHR_MATERIALS_UNLIT]){const u=i[Xe.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new Ne(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Zt),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,_t)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Sn);const h=r.alphaMode||Ta.OPAQUE;if(h===Ta.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Ta.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==si&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new qe(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==si&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==si){const u=r.emissiveFactor;o.emissive=new Ne().setRGB(u[0],u[1],u[2],Zt)}return r.emissiveTexture!==void 0&&a!==si&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,_t)),Promise.all(c).then(function(){const u=new a(o);return r.name&&(u.name=r.name),Mn(u,r),t.associations.set(u,{materials:e}),r.extensions&&mi(i,u,r),u})}createUniqueName(e){const t=rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Hc(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=xx(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Xe.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Hc(new Ft,c,t),c.mode===en.TRIANGLE_STRIP?d=d.then(f=>Fc(f,fh)):c.mode===en.TRIANGLE_FAN&&(d=d.then(f=>Fc(f,uo))),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?mx(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const v=h[f],m=a[f];let p;const S=c[f];if(m.mode===en.TRIANGLES||m.mode===en.TRIANGLE_STRIP||m.mode===en.TRIANGLE_FAN||m.mode===void 0){const w=r.isSkinnedMesh===!0,M=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");w&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=w&&M?new Kd(v,S):new xt(v,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===en.LINES)p=new Qd(v,S);else if(m.mode===en.LINE_STRIP)p=new Bo(v,S);else if(m.mode===en.LINE_LOOP)p=new jd(v,S);else if(m.mode===en.POINTS)p=new Th(v,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&_x(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Mn(p,r),m.extensions&&mi(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&mi(i,u[0],r),u[0];const d=new rn;r.extensions&&mi(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Lt(wr.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Yi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Mn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new Ve;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Fo(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],v=f.target,m=v.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,S=i.parameters!==void 0?i.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",S)),c.push(g),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],v=u[3],m=u[4],p=[];for(let w=0,M=d.length;w<M;w++){const b=d[w],T=f[w],A=g[w],x=v[w],E=m[w];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const C=n._createAnimationTracks(b,T,A,x,E);if(C)for(let L=0;L<C.length;L++)p.push(C[L])}const S=new xf(r,void 0,p);return Mn(S,i),S})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Mx)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){const f=h.userData.pivot,g=u[0];h.pivot=new B().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new yh:c.length>1?h=new rn:c.length===1?h=c[0]:h=new ft,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Mn(h,r),r.extensions&&mi(n,h,r),r.matrix!==void 0){const u=new Ve;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new rn;n.name&&(r.name=i.createUniqueName(n.name)),Mn(r,n),n.extensions&&mi(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){const d=l[h];d.parent!==null?r.add(G_(d)):r.add(d)}const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof wn||d instanceof At)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}ti[r.path]===ti.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(ti[r.path]){case ti.weights:h=Ps;break;case ti.rotation:h=Ls;break;case ti.translation:case ti.scale:h=Pr;break;default:n.itemSize===1?h=Ps:h=Pr;break}const u=i.interpolation!==void 0?px[i.interpolation]:ws,d=this._getArrayFromAccessor(n);for(let f=0,g=l.length;f<g;f++){const v=new h(l[f]+"."+ti[r.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),a.push(v)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=xo(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ls?fx:Gh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Sx(s,e,t){const n=e.attributes,i=new qn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new B(l[0],l[1],l[2]),new B(c[0],c[1],c[2])),o.normalized){const h=xo(Wi[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new B,l=new B;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const v=xo(Wi[d.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Ln;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Hc(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=_o[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Ye.workingColorSpace!==Zt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ye.workingColorSpace}" not supported.`),Mn(s,e),Sx(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?gx(s,e.targets,t):s})}class bx{models=new Map;textures=new Map;async load(e,t,n=i=>{}){let i=0;try{for(const r of e)if(!(this.models.has(r.id)||this.textures.has("asset:"+r.id))){if(r.type==="model"){const o=(await new V_().loadAsync(t(r.path))).scene;o.scale.multiplyScalar(r.unitScale||1),o.traverse(c=>{c instanceof xt&&(c.castShadow=c.receiveShadow=!0)});const l=new rn;l.add(o),this.models.set(r.id,l)}if(r.type==="texture"){const a=await new Lr().loadAsync(t(r.path));if(a.image.width>4096||a.image.height>4096)throw a.dispose(),new Error("Текстура превышает 4096 × 4096.");a.colorSpace=_t,a.wrapS=a.wrapT=An,this.textures.set("asset:"+r.id,a)}if(r.type==="material")for(const[a,o]of Object.entries(r.maps||{})){const l=await new Lr().loadAsync(t(o));if(l.image.width>4096||l.image.height>4096)throw l.dispose(),new Error("Карта материала превышает 4096 × 4096.");l.colorSpace=a==="baseColor"?_t:kn,l.wrapS=l.wrapT=An,this.textures.set("asset:"+r.id+(a==="baseColor"?"":":"+a),l)}n(++i/e.length)}}catch(r){throw new Error("Не удалось загрузить ресурс: "+(r instanceof Error?r.message:String(r)))}}bind(e){e.prototypes=this.models;for(const[t,n]of this.textures)e.textures.set(t,n)}dispose(){for(const e of this.models.values())Is(e);for(const e of this.textures.values())e.dispose();this.models.clear(),this.textures.clear()}}function Dr(s){const e=[],t=(o,l)=>e.push({id:o,message:l});if(!s||s.version!==1||!Number.isFinite(s.floorHeight)||s.floorHeight<2.3||s.floorHeight>8||![s.rooms,s.doors,s.stairs,s.openings].every(Array.isArray))return[{id:"layout",message:"Некорректная планировка или высота этажа (2,3–8 м)."}];if(!s.spawn||!Number.isFinite(s.spawn.x)||!Number.isInteger(s.spawn.floor)||[...s.rooms,...s.doors,...s.stairs,...s.openings].some(o=>!o||typeof o.id!="string"||typeof o.name!="string")||s.rooms.some(o=>![o.x,o.width,o.floor,o.depth].every(Number.isFinite))||s.doors.some(o=>![o.x,o.floor].every(Number.isFinite))||s.stairs.some(o=>![o.a,o.b,o.from,o.to].every(Number.isFinite))||s.openings.some(o=>![o.x,o.bottom,o.width,o.height].every(Number.isFinite)))return[{id:"layout",message:"Повреждены данные планировки: проверьте элементы, координаты и появление."}];const n=new Set;for(const o of[...s.rooms,...s.doors,...s.stairs,...s.openings])n.has(o.id)&&t(o.id,"Повторяющийся элемент планировки."),n.add(o.id);for(const o of s.rooms){(!Number.isFinite(o.x)||!Number.isFinite(o.width)||!Number.isInteger(o.floor)||o.width<1||o.width>100||o.depth<1||o.depth>30)&&t(o.id,o.name+": проверьте размеры комнаты.");for(const l of s.rooms)o.id<l.id&&o.floor===l.floor&&o.x<l.x+l.width-.01&&o.x+o.width>l.x+.01&&t(o.id,o.name+": пересечение с комнатой «"+l.name+"».")}const i=(o,l)=>s.rooms.find(c=>c.floor===l&&o>=c.x-.01&&o<=c.x+c.width+.01);for(const o of s.doors)s.rooms.some(l=>l.floor===o.floor&&(Math.abs(l.x-o.x)<.02||Math.abs(l.x+l.width-o.x)<.02))||t(o.id,o.name+": дверь должна находиться на границе комнаты.");for(const o of s.stairs)(!i(o.a,o.from)||!i(o.b,o.to)||o.to!==o.from+1||(o.kind==="ladder"?Math.abs(o.b-o.a)>.01:Math.abs(o.b-o.a)<1.5))&&t(o.id,o.name+": соедините комнаты соседних этажей; длина марша — от 1,5 м.");for(const o of s.openings){const l=s.rooms.find(c=>c.id===o.room);(!l||!["window","breach"].includes(o.kind)||o.plane&&!["back","divider"].includes(o.plane)||o.width<=0||o.height<=0||(o.plane==="divider"?Math.min(Math.abs(o.x-l.x),Math.abs(o.x-l.x-l.width))>.02||o.width>l.depth:o.x-o.width/2<l.x||o.x+o.width/2>l.x+l.width)||o.bottom<0||o.bottom+o.height>s.floorHeight-.15)&&t(o.id,o.name+": проём должен помещаться на выбранной стене комнаты.")}i(s.spawn?.x,s.spawn?.floor)||t("spawn","Точка появления должна быть внутри комнаты.");const r=new Set,a=i(s.spawn?.x,s.spawn?.floor);a&&r.add(a.id);for(let o=0;o<s.rooms.length;o++){for(const l of[...s.doors,...s.openings.filter(Vh).map(c=>({x:c.x,floor:s.rooms.find(h=>h.id===c.room)?.floor??0}))]){const c=i(l.x-.05,l.floor),h=i(l.x+.05,l.floor);c&&h&&(r.has(c.id)||r.has(h.id))&&(r.add(c.id),r.add(h.id))}for(const l of s.stairs){const c=i(l.a,l.from),h=i(l.b,l.to);c&&h&&(r.has(c.id)||r.has(h.id))&&(r.add(c.id),r.add(h.id))}}for(const o of s.rooms)r.has(o.id)||t(o.id,o.name+": нет маршрута от точки появления. Добавьте дверь или лестницу.");return e}function Tx(s){const e=Dr(s);if(e.length)throw new Error(e.map(t=>t.message).join(`
`))}const Vh=s=>s.plane==="divider"&&s.kind==="breach"&&s.bottom===0&&s.height>=1.8&&s.width>0;function Ex(s,e,t,n,i){for(const r of s.rooms.filter(a=>a.floor===n))for(const a of[r.x,r.x+r.width])if((e-a)*(t-a)<=0&&e!==t&&!s.doors.some(o=>o.floor===n&&Math.abs(o.x-a)<.02&&i.has(o.id))&&!s.openings.some(o=>Vh(o)&&Math.abs(o.x-a)<.02&&s.rooms.find(l=>l.id===o.room)?.floor===n))return a;return null}function Gc(s,e,t,n){const i=(o,l)=>s.rooms.find(c=>c.floor===l&&o>=c.x&&o<=c.x+c.width),r=i(e,t),a=new Set(r?[r.id]:[]);for(let o=0;o<s.rooms.length;o++)for(const l of[...s.doors.filter(c=>n.has(c.id)),...s.openings.filter(c=>c.plane==="divider").map(c=>({x:c.x,floor:s.rooms.find(h=>h.id===c.room)?.floor??0}))]){const c=i(l.x-.05,l.floor),h=i(l.x+.05,l.floor);c&&h&&(a.has(c.id)||a.has(h.id))&&(a.add(c.id),a.add(h.id))}for(const o of s.stairs)if(Math.abs(e-(t===o.from?o.a:o.b))<.8&&(t===o.from||t===o.to)){const l=i(o.a,o.from),c=i(o.b,o.to);l&&c&&(a.has(l.id)||a.has(c.id))&&(a.add(l.id),a.add(c.id))}return a}class Wh{constructor(e){this.scene=e,e.add(this.root)}scene;root=new rn;doors=new Map;key="";apply(e){const t=Dr(e).find(l=>l.id==="layout");if(t)throw new Error(t.message);const n=JSON.stringify(e);if(n===this.key)return;this.key=n,Is(this.root),this.root.clear(),this.doors.clear();const i=new Set(Dr(e).map(l=>l.id)),r=(l,c,h,u,d,f,g,v,m)=>{const p=new xt(new li(Math.max(.01,d),Math.max(.01,f),Math.max(.01,g)),new ri({color:i.has(m)?"#b54f52":v,roughness:.85}));return p.position.set(c,h,u),p.castShadow=p.receiveShadow=!0,p.userData.layoutId=m,l.add(p),p},a=new Set;for(const l of e.rooms){const c=l.floor*e.floorHeight,h=e.floorHeight,u=-l.depth/2,d=e.stairs.filter(m=>m.to===l.floor&&m.b>=l.x&&m.b<=l.x+l.width).map(m=>m.kind==="ladder"?[m.b-.45,m.b+.45]:[Math.min(m.a,m.b),Math.max(m.a,m.b)+.3]);let f=[[l.x,l.x+l.width]];for(const[m,p]of d)f=f.flatMap(([S,w])=>w<=m||S>=p?[[S,w]]:[[S,Math.max(S,m)],[Math.min(w,p),w]].filter(([M,b])=>b-M>.01));for(const[m,p]of f)r(this.root,(m+p)/2,c-.09,0,p-m,.18,l.depth,"#646761",l.id);r(this.root,l.x+l.width/2,c-.09,l.depth/2-.12,l.width,.18,.24,"#42453f",l.id);const g=e.openings.filter(m=>m.room===l.id&&m.plane!=="divider"),v=[l.x,l.x+l.width,...g.flatMap(m=>[m.x-m.width/2,m.x+m.width/2])].sort((m,p)=>m-p);for(let m=1;m<v.length;m++){const p=v[m-1],S=v[m],w=g.find(M=>(p+S)/2>M.x-M.width/2&&(p+S)/2<M.x+M.width/2);w?(w.bottom&&r(this.root,(p+S)/2,c+w.bottom/2,u,S-p,w.bottom,.14,l.color,l.id),r(this.root,(p+S)/2,c+(h+w.bottom+w.height)/2,u,S-p,h-w.bottom-w.height,.14,l.color,l.id)):r(this.root,(p+S)/2,c+h/2,u,S-p,h,.14,l.color,l.id)}for(const m of[l.x,l.x+l.width]){const p=m+":"+l.floor;if(a.has(p))continue;a.add(p);const S=e.doors.find(M=>M.floor===l.floor&&Math.abs(M.x-m)<.02),w=e.openings.find(M=>M.plane==="divider"&&Math.abs(M.x-m)<.02&&e.rooms.find(b=>b.id===M.room)?.floor===l.floor);if(!S&&w){const M=Math.min(w.width,l.depth),b=w.bottom,T=b+w.height;b>0&&r(this.root,m,c+b/2,0,.14,b,l.depth,l.color,w.id),T<h&&r(this.root,m,c+(T+h)/2,0,.14,h-T,l.depth,l.color,w.id);const A=(l.depth-M)/2;if(A>0)for(const x of[-1,1])r(this.root,m,c+(b+T)/2,x*(M+A)/2,.14,w.height,A,l.color,w.id)}else if(!S)r(this.root,m,c+h/2,0,.14,h,l.depth,l.color,l.id);else{r(this.root,m,c+(h+2.1)/2,0,.16,h-2.1,l.depth,l.color,S.id),r(this.root,m,c+1.05,-l.depth/4-.3,.16,2.1,l.depth/2-.6,l.color,S.id),r(this.root,m,c+1.05,l.depth/4+.3,.16,2.1,l.depth/2-.6,l.color,S.id);const M=new rn;M.position.set(m,c,-.6),r(M,0,1.03,.6,.08,2.06,1.16,"#6f513a",S.id),this.root.add(M),this.doors.set(S.id,M)}}}for(const l of e.stairs){if(l.kind==="ladder"){for(const h of[-.35,.35])r(this.root,l.a+h,(l.from+.5)*e.floorHeight,-.75,.06,e.floorHeight,.09,"#89877d",l.id);for(let h=.2;h<e.floorHeight;h+=.28)r(this.root,l.a,l.from*e.floorHeight+h,-.75,.7,.05,.08,"#89877d",l.id);continue}const c=16;for(let h=0;h<c;h++){const u=(h+.5)/c;r(this.root,l.a+(l.b-l.a)*u,l.from*e.floorHeight+(h+1)*e.floorHeight/c-.06,-.75,Math.abs(l.b-l.a)/c+.02,.12,1.1,"#89877d",l.id)}}const o=new xt(new Ho(.16,.4,16),new si({color:i.has("spawn")?"#ff5555":"#8fd8bd"}));o.position.set(e.spawn.x,e.spawn.floor*e.floorHeight+.2,0),o.userData.layoutId="spawn",o.userData.editorOnly=!0,this.root.add(o),this.setDoors(new Set(e.doors.filter(l=>l.open).map(l=>l.id)))}setDoors(e){for(const[t,n]of this.doors)n.rotation.y=e.has(t)?Math.PI/2:0}dispose(){Is(this.root),this.root.removeFromParent()}}function wx(s,e=!0){const t=new z_(s),n=new H_(t);n.validators.push(a=>{const o=a.moduleData?.layout;if(o){const l=Dr(o).find(c=>c.id==="layout");if(l)throw new Error(l.message)}}),t.scene.background=new Ne("#29343c"),t.scene.add(new Ef(13295083,3420195,2));const i=new Wo(16772558,3);i.position.set(-4,10,6),i.castShadow=!0,i.shadow.mapSize.set(1024,1024),Object.assign(i.shadow.camera,{left:-20,right:20,top:20,bottom:-20}),t.scene.add(i);const r=new Wh(t.scene);return{renderer:t,runtime:n,floorHeight:3,floorNames:[{value:-1,name:"Подвал"},{value:0,name:"1 этаж"},{value:1,name:"2 этаж"},{value:2,name:"3 этаж"}],prefabs:{},draw:a=>{const o=n.document.moduleData?.layout;o&&e?r.apply(o):r.key&&(r.dispose(),r.key=""),i.intensity=.15+3*Math.max(0,Math.sin((n.document.environment.time-360)/1440*Math.PI*2)),t.scene.fog=new Do("#29343c",n.document.environment.haze),t.render(a)},updateCamera:a=>t.updateCamera(a),dispose:()=>{r.dispose(),n.dispose(),t.dispose()}}}async function Ax(s){const e=[...s.registry.modules.values()].find(z=>z.createSession);if(e)return e.createSession(s);const t=structuredClone(s.snapshot);let n=s.sceneId,i=!1,r=!1,a=0,o=performance.now(),l,c,h=[],u,d,f,g=new Set,v=0,m=0,p;const S=new Set,w=new AbortController,M=s.container;M.innerHTML='<canvas tabindex="0" aria-label="Игра" style="width:100%;height:100%;display:block"></canvas><div class="runtime-actions" style="position:absolute;bottom:14px;left:14px;display:flex;gap:8px;flex-wrap:wrap"></div>';let b=M.querySelector("canvas");const T=M.querySelector(".runtime-actions"),A=wa(t.manifest.projectId,"progress",t.manifest.build.appId);let x;try{s.savePolicy==="persistent"&&(x=JSON.parse(localStorage.getItem(A)||"null"))}catch{}async function E(z){const H=t.scenes[z];if(!H)throw new Error("Сцена перехода не включена: "+z);s.registry.validate(H,t.manifest),H.moduleData?.layout&&Tx(H.moduleData.layout);const Q=new bx;if(await Q.load(t.manifest.assets,s.assetUrl),i){Q.dispose();return}for(const q of h)s.registry.components.get(q.component.type)?.dispose?.(q);u?.dispose(),l?.dispose(),c?.dispose();const X=b.cloneNode(!1);if(b.replaceWith(X),b=X,c=Q,l=wx(b,!1),c.bind(l.runtime),l.runtime.apply(H),l.renderer.resize(),n=z,l.renderer.beforeRender=()=>{},f=H.moduleData?.layout,u=void 0,d=void 0,p=void 0,T.innerHTML="",f){u=new Wh(l.renderer.scene),u.apply(f),u.root.traverse(Y=>{Y.userData.editorOnly&&(Y.visible=!1)}),g=new Set(f.doors.filter(Y=>Y.open).map(Y=>Y.id)),v=f.spawn.floor,m=f.spawn.x,d=new xt(new ko(.18,1.15,6,12),new ri({color:15516541})),l.renderer.scene.add(d);const q=document.createElement("span");q.textContent="A/D — идти · W/S — лестница · E — дверь",q.style.cssText="color:white;background:#111c;padding:8px",T.append(q)}h=H.nodes.flatMap(q=>(q.components||[]).map(Y=>({node:q,component:Y,runtime:l.runtime,scene:H,transition:L,keys:S})));for(const q of h)if(s.registry.components.get(q.component.type)?.load?.(q),q.component.type==="basic.portal"){const Y=document.createElement("button");Y.textContent=String(q.component.values.label),Y.onclick=()=>L(String(q.component.values.scene)),T.append(Y)}l.renderer.updateCamera(100),b.focus()}let C=!1;function L(z){C||r||i||(C=!0,E(z).catch(N).finally(()=>C=!1))}function N(z){const H=document.createElement("p");H.style.cssText="position:absolute;top:10px;background:#511;color:white;padding:12px",H.textContent=String(z),M.append(H)}const I=z=>{if(!z.target.closest("input,textarea,select")&&(["KeyA","KeyD","KeyW","KeyS","KeyE","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(z.code)&&(z.preventDefault(),S.add(z.code)),z.code==="KeyE"&&!z.repeat&&!r&&f)){const H=f.doors.find(Q=>Q.floor===v&&Math.abs(Q.x-m)<1);H&&(g.has(H.id)?g.delete(H.id):g.add(H.id),u?.setDoors(g))}};window.addEventListener("keydown",I,{signal:w.signal}),window.addEventListener("keyup",z=>S.delete(z.code),{signal:w.signal}),window.addEventListener("blur",()=>S.clear(),{signal:w.signal}),await E(x?.sceneId&&t.scenes[x.sceneId]?x.sceneId:n);const P=new ResizeObserver(()=>{l?.renderer.resize(),l?.renderer.updateCamera(100)});P.observe(M);function O(z){if(i)return;const H=Math.min(.05,(z-o)/1e3);if(o=z,!r&&!C&&l){for(const Q of h)s.registry.components.get(Q.component.type)?.update?.(Q,H);if(f&&d){const Q=Number(S.has("KeyD")||S.has("ArrowRight"))-Number(S.has("KeyA")||S.has("ArrowLeft"));if(!p){let X=m+Q*2.5*H;const q=Ex(f,m,X,v,g);q!==null&&(X=q-Math.sign(Q)*.025),f.rooms.some(Ie=>Ie.floor===v&&X>=Ie.x&&X<=Ie.x+Ie.width)&&(m=X);const Y=S.has("KeyW")||S.has("ArrowUp"),ve=S.has("KeyS")||S.has("ArrowDown"),oe=f.stairs.find(Ie=>Y&&Ie.from===v&&Math.abs(Ie.a-m)<.7||ve&&Ie.to===v&&Math.abs(Ie.b-m)<.7);oe&&(p={...oe,t:Y?0:1,direction:Y?1:-1})}p?(p.t+=H*.6*p.direction,m=p.a+(p.b-p.a)*Math.max(0,Math.min(1,p.t)),d.position.set(m,(p.from+Math.max(0,Math.min(1,p.t)))*f.floorHeight+.75,-.75),(p.t>=1||p.t<=0)&&(v=p.direction>0?p.to:p.from,p=void 0)):d.position.set(m,v*f.floorHeight+.75,0)}}if(l){if(f){const X=Gc(f,m,v,g);for(const q of l.runtime.document.nodes){const Y=f.rooms.find(oe=>oe.floor===Math.floor((q.transform.position[1]+.05)/f.floorHeight)&&q.transform.position[0]>=oe.x&&q.transform.position[0]<=oe.x+oe.width),ve=l.runtime.instances.get(q.id)?.root;ve&&(ve.visible=q.visible&&(!Y||!!q.light||X.has(Y.id)))}}const Q=l.runtime.document.nodes.find(X=>X.id===l.runtime.document.activeCamera);Q&&(l.renderer.externalCamera=!0,l.renderer.camera.position.fromArray(Q.transform.position),l.renderer.camera.rotation.set(...Q.transform.rotation.map(wr.degToRad)),l.renderer.camera.updateMatrixWorld()),l.draw(H)}a=requestAnimationFrame(O)}return a=requestAnimationFrame(O),{pause(z){if(r=z,S.clear(),z)for(const H of h)s.registry.components.get(H.component.type)?.pause?.(H)},dispose(){i=!0,cancelAnimationFrame(a),w.abort(),P.disconnect();for(const z of h)s.registry.components.get(z.component.type)?.dispose?.(z);if(s.savePolicy==="persistent")try{localStorage.setItem(A,JSON.stringify({sceneId:n}))}catch{}u?.dispose(),l?.dispose(),c?.dispose(),M.replaceChildren()},diagnostics:()=>({sceneId:n,paused:r,x:m,floor:v,visibleRooms:f?[...Gc(f,m,v,g)]:[],openDoors:[...g],frames:1,memory:l?.renderer.gl.info.memory})}}const Rx={id:"shelter.basic",sdk:1,components:[{id:"basic.rotate",name:"Вращение",fields:[{name:"speed",label:"Скорость",type:"number",default:30,min:-360,max:360,unit:"°/с"},{name:"axis",label:"Ось",type:"select",default:"y",options:[{value:"x",label:"X"},{value:"y",label:"Y"},{value:"z",label:"Z"}]}],update:({runtime:s,node:e,component:t},n)=>{const i=s.instances.get(e.id).root;i.rotation[t.values.axis]+=Number(t.values.speed)*Math.PI/180*n}},{id:"basic.portal",name:"Переход в сцену",fields:[{name:"scene",label:"Куда перейти",type:"scene",default:""},{name:"label",label:"Надпись кнопки",type:"string",default:"Следующая сцена"}]},{id:"basic.bob",name:"Плавное покачивание",fields:[{name:"height",label:"Высота",type:"number",default:.2,min:0,max:3,unit:"м"},{name:"speed",label:"Скорость",type:"number",default:1,min:0,max:5}],update:({runtime:s,node:e,component:t},n)=>{const i=s.instances.get(e.id).root;i.userData.time=(i.userData.time||0)+n,i.position.y=e.transform.position[1]+Math.sin(i.userData.time*Number(t.values.speed))*Number(t.values.height)}}]};async function Cx(s,e,t,n,i=!1){const r=new Su;r.register(Rx);for(const a of e)r.register(a.default||a);return Ax({container:document.querySelector("#app"),snapshot:s,sceneId:t,assetUrl:n,registry:r,savePolicy:i?"isolated":"persistent"})}const Px={format:"shelter-project",version:1,sdk:1,projectId:"zarevo-night-run",name:"Зарево · Ночная гонка",gameVersion:"1.0.1",startScene:"coast",scenes:[{id:"coast",name:"Приморское шоссе",path:"scenes/coast.scene.json"},{id:"pass",name:"Перевал Ветров",path:"scenes/pass.scene.json"},{id:"city",name:"Неоновый город",path:"scenes/city.scene.json"}],assets:[],modules:[{id:"zarevo",version:1,runtime:"scripts/runtime.ts"}],build:{target:"web",mode:"release",base:"./",output:"/Users/gadaev/Documents/ChatGPT/2D GAME/artifacts/builds/zarevo",scenes:["coast","pass","city"],dynamicAssets:[],appId:"game.zarevo-night-run"}},Lx=JSON.parse('{"coast":{"format":"shelter-scene","version":2,"id":"coast","template":"zarevo-track-v1","name":"Приморское шоссе","units":"m","nodes":[{"id":"coast-section-0","name":"Участок 1","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,0,0],"rotation":[0,0,0],"scale":[4,1,20.8]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":38,"hold":132,"leave":38,"curve":0,"hill":0}}]},{"id":"coast-section-1","name":"Участок 2","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[2,0,20.8],"rotation":[0,0,0],"scale":[4,1,26.6]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":45,"hold":176,"leave":45,"curve":2,"hill":0}}]},{"id":"coast-section-2","name":"Участок 3","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,2,47.4],"rotation":[0,0,0],"scale":[4,1,19.2]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":30,"hold":132,"leave":30,"curve":0,"hill":20}}]},{"id":"coast-section-3","name":"Участок 4","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-3,0,66.6],"rotation":[0,0,0],"scale":[4,1,28.8]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":45,"hold":198,"leave":45,"curve":-3,"hill":0}}]},{"id":"coast-section-4","name":"Участок 5","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,-2,95.4],"rotation":[0,0,0],"scale":[4,1,38.4]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":60,"hold":264,"leave":60,"curve":0,"hill":-20}}]},{"id":"coast-section-5","name":"Участок 6","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[4,0,133.8],"rotation":[0,0,0],"scale":[4,1,24.4]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":45,"hold":154,"leave":45,"curve":4,"hill":0}}]},{"id":"coast-section-6","name":"Участок 7","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-2,3,158.2],"rotation":[0,0,0],"scale":[4,1,22.2]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":45,"hold":132,"leave":45,"curve":-2,"hill":30}}]},{"id":"coast-section-7","name":"Участок 8","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,0,180.4],"rotation":[0,0,0],"scale":[4,1,23.6]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":30,"hold":176,"leave":30,"curve":0,"hill":0}}]},{"id":"coast-section-8","name":"Участок 9","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-4,-3,204],"rotation":[0,0,0],"scale":[4,1,31.8]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":60,"hold":198,"leave":60,"curve":-4,"hill":-30}}]},{"id":"coast-section-9","name":"Участок 10","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[3,0,235.8],"rotation":[0,0,0],"scale":[4,1,26.6]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":45,"hold":176,"leave":45,"curve":3,"hill":0}}]},{"id":"coast-section-10","name":"Участок 11","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,2.5,262.4],"rotation":[0,0,0],"scale":[4,1,29.6]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":38,"hold":220,"leave":38,"curve":0,"hill":25}}]},{"id":"coast-section-11","name":"Участок 12","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-3,-2.5,292],"rotation":[0,0,0],"scale":[4,1,24.4]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":45,"hold":154,"leave":45,"curve":-3,"hill":-25}}]},{"id":"coast-section-12","name":"Участок 13","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[5,0,316.4],"rotation":[0,0,0],"scale":[4,1,26.6]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":45,"hold":176,"leave":45,"curve":5,"hill":0}}]},{"id":"coast-section-13","name":"Участок 14","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-2,0,343],"rotation":[0,0,0],"scale":[4,1,22.2]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":45,"hold":132,"leave":45,"curve":-2,"hill":0}}]},{"id":"coast-section-14","name":"Участок 15","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,1.5,365.2],"rotation":[0,0,0],"scale":[4,1,25.2]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":38,"hold":176,"leave":38,"curve":0,"hill":15}}]},{"id":"coast-section-15","name":"Участок 16","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[3,-1.5,390.4],"rotation":[0,0,0],"scale":[4,1,26.6]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":45,"hold":176,"leave":45,"curve":3,"hill":-15}}]},{"id":"coast-section-16","name":"Участок 17","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,0,417],"rotation":[0,0,0],"scale":[4,1,34]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":38,"hold":264,"leave":38,"curve":0,"hill":0}}]},{"id":"coast-checkpoint-0","name":"Контрольная точка 1","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[0,2,113],"rotation":[0,0,0],"scale":[4.2,0.4,0.2]},"surface":{"texture":"none","color":"#ff6a3d","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.checkpoint","values":{"segment":1130,"bonus":22}}]},{"id":"coast-checkpoint-1","name":"Контрольная точка 2","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[0,2,226],"rotation":[0,0,0],"scale":[4.2,0.4,0.2]},"surface":{"texture":"none","color":"#ff6a3d","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.checkpoint","values":{"segment":2260,"bonus":21}}]},{"id":"coast-checkpoint-2","name":"Контрольная точка 3","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[0,2,338],"rotation":[0,0,0],"scale":[4.2,0.4,0.2]},"surface":{"texture":"none","color":"#ff6a3d","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.checkpoint","values":{"segment":3380,"bonus":20}}]},{"id":"coast-scenery-0","name":"Пальмы","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[1.35,1,0],"rotation":[0,0,0],"scale":[0.6,2,100]},"surface":{"texture":"none","color":"#556b4f","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.scenery","values":{"kind":"palm","side":"both","from":0,"to":4295,"every":18,"offset":1.35}}]},{"id":"coast-scenery-1","name":"Фонари","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[1.15,1,1.1],"rotation":[0,0,0],"scale":[0.6,2,100]},"surface":{"texture":"none","color":"#556b4f","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.scenery","values":{"kind":"lamp","side":"right","from":11,"to":4295,"every":30,"offset":1.15}}]},{"id":"coast-scenery-2","name":"Скалы","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[-1.9,1,32.2],"rotation":[0,0,0],"scale":[0.6,2,64.4]},"surface":{"texture":"none","color":"#556b4f","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.scenery","values":{"kind":"rock","side":"left","from":322,"to":966,"every":45,"offset":1.9}}]},{"id":"coast-scenery-3","name":"Рекламные щиты","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[-1.7,1,12.9],"rotation":[0,0,0],"scale":[0.6,2,100]},"surface":{"texture":"none","color":"#556b4f","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.scenery","values":{"kind":"billboard","side":"left","from":129,"to":4295,"every":260,"offset":1.7}}]},{"id":"coast-scenery-4","name":"Пальмы","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[-2.3,1,118.1],"rotation":[0,0,0],"scale":[0.6,2,85.9]},"surface":{"texture":"none","color":"#556b4f","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.scenery","values":{"kind":"palm","side":"left","from":1181,"to":2040,"every":9,"offset":2.3}}]},{"id":"coast-scenery-5","name":"Домики у моря","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[2.2,1,161.1],"rotation":[0,0,0],"scale":[0.6,2,100]},"surface":{"texture":"none","color":"#556b4f","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.scenery","values":{"kind":"house","side":"right","from":1611,"to":2792,"every":70,"offset":2.2}}]},{"id":"coast-scenery-6","name":"Скалы","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[1.8,1,289.9],"rotation":[0,0,0],"scale":[0.6,2,75.2]},"surface":{"texture":"none","color":"#556b4f","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.scenery","values":{"kind":"rock","side":"both","from":2899,"to":3651,"every":40,"offset":1.8}}]},{"id":"coast-scenery-7","name":"Пальмы","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[2.4,1,279.2],"rotation":[0,0,0],"scale":[0.6,2,100]},"surface":{"texture":"none","color":"#556b4f","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.scenery","values":{"kind":"palm","side":"right","from":2792,"to":4295,"every":11,"offset":2.4}}]}],"textures":[],"camera":{"projection":"perspective","fov":80,"height":2,"distance":5,"follow":"fixed"},"environment":{"time":1140,"haze":0.04,"exposure":1,"flashlight":false},"moduleData":{"zarevo":{"theme":"coast","time":42,"rivals":7,"traffic":10,"pace":0.76,"next":"pass"}}},"pass":{"format":"shelter-scene","version":2,"id":"pass","template":"zarevo-track-v1","name":"Перевал Ветров","units":"m","nodes":[{"id":"pass-section-0","name":"Участок 1","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,0,0],"rotation":[0,0,0],"scale":[4,1,17]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":30,"hold":110,"leave":30,"curve":0,"hill":0}}]},{"id":"pass-section-1","name":"Участок 2","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-5,4,17],"rotation":[0,0,0],"scale":[4,1,22.2]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":45,"hold":132,"leave":45,"curve":-5,"hill":40}}]},{"id":"pass-section-2","name":"Участок 3","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[5,0,39.2],"rotation":[0,0,0],"scale":[4,1,20]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":45,"hold":110,"leave":45,"curve":5,"hill":0}}]},{"id":"pass-section-3","name":"Участок 4","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-6,3,59.2],"rotation":[0,0,0],"scale":[4,1,16.4]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":38,"hold":88,"leave":38,"curve":-6,"hill":30}}]},{"id":"pass-section-4","name":"Участок 5","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[4,-5,75.6],"rotation":[0,0,0],"scale":[4,1,22.2]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":45,"hold":132,"leave":45,"curve":4,"hill":-50}}]},{"id":"pass-section-5","name":"Участок 6","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,6,97.8],"rotation":[0,0,0],"scale":[4,1,23.6]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":30,"hold":176,"leave":30,"curve":0,"hill":60}}]},{"id":"pass-section-6","name":"Участок 7","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-6,0,121.4],"rotation":[0,0,0],"scale":[4,1,20]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":45,"hold":110,"leave":45,"curve":-6,"hill":0}}]},{"id":"pass-section-7","name":"Участок 8","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[6,-4,141.4],"rotation":[0,0,0],"scale":[4,1,20]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":45,"hold":110,"leave":45,"curve":6,"hill":-40}}]},{"id":"pass-section-8","name":"Участок 9","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,-3,161.4],"rotation":[0,0,0],"scale":[4,1,19.2]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":30,"hold":132,"leave":30,"curve":0,"hill":-30}}]},{"id":"pass-section-9","name":"Участок 10","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[5,5,180.6],"rotation":[0,0,0],"scale":[4,1,23]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":38,"hold":154,"leave":38,"curve":5,"hill":50}}]},{"id":"pass-section-10","name":"Участок 11","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-5,0,203.6],"rotation":[0,0,0],"scale":[4,1,20]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":45,"hold":110,"leave":45,"curve":-5,"hill":0}}]},{"id":"pass-section-11","name":"Участок 12","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[6,4,223.6],"rotation":[0,0,0],"scale":[4,1,14.8]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":30,"hold":88,"leave":30,"curve":6,"hill":40}}]},{"id":"pass-section-12","name":"Участок 13","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-4,-6,238.4],"rotation":[0,0,0],"scale":[4,1,20.8]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":38,"hold":132,"leave":38,"curve":-4,"hill":-60}}]},{"id":"pass-section-13","name":"Участок 14","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,0,259.2],"rotation":[0,0,0],"scale":[4,1,28.8]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":45,"hold":198,"leave":45,"curve":0,"hill":0}}]},{"id":"pass-section-14","name":"Участок 15","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-6,3,288],"rotation":[0,0,0],"scale":[4,1,22.2]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":45,"hold":132,"leave":45,"curve":-6,"hill":30}}]},{"id":"pass-section-15","name":"Участок 16","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[5,-3,310.2],"rotation":[0,0,0],"scale":[4,1,20.8]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":38,"hold":132,"leave":38,"curve":5,"hill":-30}}]},{"id":"pass-section-16","name":"Участок 17","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-3,2,331],"rotation":[0,0,0],"scale":[4,1,20]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":45,"hold":110,"leave":45,"curve":-3,"hill":20}}]},{"id":"pass-section-17","name":"Участок 18","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[4,-2,351],"rotation":[0,0,0],"scale":[4,1,21.4]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":30,"hold":154,"leave":30,"curve":4,"hill":-20}}]},{"id":"pass-section-18","name":"Участок 19","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,0,372.4],"rotation":[0,0,0],"scale":[4,1,31.8]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":38,"hold":242,"leave":38,"curve":0,"hill":0}}]},{"id":"pass-checkpoint-0","name":"Контрольная точка 1","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[0,2,81],"rotation":[0,0,0],"scale":[4.2,0.4,0.2]},"surface":{"texture":"none","color":"#ff6a3d","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.checkpoint","values":{"segment":810,"bonus":20}}]},{"id":"pass-checkpoint-1","name":"Контрольная точка 2","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[0,2,162],"rotation":[0,0,0],"scale":[4.2,0.4,0.2]},"surface":{"texture":"none","color":"#ff6a3d","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.checkpoint","values":{"segment":1620,"bonus":19}}]},{"id":"pass-checkpoint-2","name":"Контрольная точка 3","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[0,2,243],"rotation":[0,0,0],"scale":[4.2,0.4,0.2]},"surface":{"texture":"none","color":"#ff6a3d","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.checkpoint","values":{"segment":2430,"bonus":18}}]},{"id":"pass-checkpoint-3","name":"Контрольная точка 4","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[0,2,323],"rotation":[0,0,0],"scale":[4.2,0.4,0.2]},"surface":{"texture":"none","color":"#ff6a3d","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.checkpoint","values":{"segment":3230,"bonus":17}}]},{"id":"pass-scenery-0","name":"Ели","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[1.4,1,0],"rotation":[0,0,0],"scale":[0.6,2,100]},"surface":{"texture":"none","color":"#556b4f","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.scenery","values":{"kind":"pine","side":"both","from":0,"to":4042,"every":14,"offset":1.4}}]},{"id":"pass-scenery-1","name":"Скалы","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[1.9,1,3.8],"rotation":[0,0,0],"scale":[0.6,2,100]},"surface":{"texture":"none","color":"#556b4f","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.scenery","values":{"kind":"rock","side":"both","from":38,"to":4042,"every":33,"offset":1.9}}]},{"id":"pass-scenery-2","name":"Знаки поворота","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[1.2,1,5.8],"rotation":[0,0,0],"scale":[0.6,2,100]},"surface":{"texture":"none","color":"#556b4f","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.scenery","values":{"kind":"sign","side":"right","from":58,"to":4042,"every":85,"offset":1.2}}]},{"id":"pass-scenery-3","name":"Ели","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[-2.5,1,0],"rotation":[0,0,0],"scale":[0.6,2,100]},"surface":{"texture":"none","color":"#556b4f","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.scenery","values":{"kind":"pine","side":"left","from":0,"to":4042,"every":7,"offset":2.5}}]},{"id":"pass-scenery-4","name":"Фонари","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[-1.15,1,115.5],"rotation":[0,0,0],"scale":[0.6,2,57.7]},"surface":{"texture":"none","color":"#556b4f","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.scenery","values":{"kind":"lamp","side":"left","from":1155,"to":1732,"every":24,"offset":1.15}}]},{"id":"pass-scenery-5","name":"Отбойник","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[1.1,1,182.9],"rotation":[0,0,0],"scale":[0.6,2,100]},"surface":{"texture":"none","color":"#556b4f","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.scenery","values":{"kind":"rail","side":"both","from":1829,"to":2887,"every":6,"offset":1.1}}]}],"textures":[],"camera":{"projection":"perspective","fov":80,"height":2,"distance":5,"follow":"fixed"},"environment":{"time":0,"haze":0.04,"exposure":1,"flashlight":false},"moduleData":{"zarevo":{"theme":"pass","time":30,"rivals":7,"traffic":8,"pace":0.82,"next":"city"}}},"city":{"format":"shelter-scene","version":2,"id":"city","template":"zarevo-track-v1","name":"Неоновый город","units":"m","nodes":[{"id":"city-section-0","name":"Участок 1","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,0,0],"rotation":[0,0,0],"scale":[4,1,25.8]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":30,"hold":198,"leave":30,"curve":0,"hill":0}}]},{"id":"city-section-1","name":"Участок 2","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[3,0,25.8],"rotation":[0,0,0],"scale":[4,1,20.8]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":38,"hold":132,"leave":38,"curve":3,"hill":0}}]},{"id":"city-section-2","name":"Участок 3","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-3,0,46.6],"rotation":[0,0,0],"scale":[4,1,20.8]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":38,"hold":132,"leave":38,"curve":-3,"hill":0}}]},{"id":"city-section-3","name":"Участок 4","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,1.5,67.4],"rotation":[0,0,0],"scale":[4,1,31]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":45,"hold":220,"leave":45,"curve":0,"hill":15}}]},{"id":"city-section-4","name":"Участок 5","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[5,-1.5,98.4],"rotation":[0,0,0],"scale":[4,1,17]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":30,"hold":110,"leave":30,"curve":5,"hill":-15}}]},{"id":"city-section-5","name":"Участок 6","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-5,0,115.4],"rotation":[0,0,0],"scale":[4,1,17]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":30,"hold":110,"leave":30,"curve":-5,"hill":0}}]},{"id":"city-section-6","name":"Участок 7","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,2.5,132.4],"rotation":[0,0,0],"scale":[4,1,28.8]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":45,"hold":198,"leave":45,"curve":0,"hill":25}}]},{"id":"city-section-7","name":"Участок 8","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[4,-2.5,161.2],"rotation":[0,0,0],"scale":[4,1,20.8]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":38,"hold":132,"leave":38,"curve":4,"hill":-25}}]},{"id":"city-section-8","name":"Участок 9","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-4,0,182],"rotation":[0,0,0],"scale":[4,1,23]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":38,"hold":154,"leave":38,"curve":-4,"hill":0}}]},{"id":"city-section-9","name":"Участок 10","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,0,205],"rotation":[0,0,0],"scale":[4,1,35.4]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":45,"hold":264,"leave":45,"curve":0,"hill":0}}]},{"id":"city-section-10","name":"Участок 11","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[6,2,240.4],"rotation":[0,0,0],"scale":[4,1,18.6]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":38,"hold":110,"leave":38,"curve":6,"hill":20}}]},{"id":"city-section-11","name":"Участок 12","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-6,-2,259],"rotation":[0,0,0],"scale":[4,1,18.6]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":38,"hold":110,"leave":38,"curve":-6,"hill":-20}}]},{"id":"city-section-12","name":"Участок 13","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[2,0,277.6],"rotation":[0,0,0],"scale":[4,1,26.6]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":45,"hold":176,"leave":45,"curve":2,"hill":0}}]},{"id":"city-section-13","name":"Участок 14","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-3,1,304.2],"rotation":[0,0,0],"scale":[4,1,20.8]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":38,"hold":132,"leave":38,"curve":-3,"hill":10}}]},{"id":"city-section-14","name":"Участок 15","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[4,-1,325],"rotation":[0,0,0],"scale":[4,1,20.8]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":38,"hold":132,"leave":38,"curve":4,"hill":-10}}]},{"id":"city-section-15","name":"Участок 16","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,0,345.8],"rotation":[0,0,0],"scale":[4,1,31]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":45,"hold":220,"leave":45,"curve":0,"hill":0}}]},{"id":"city-section-16","name":"Участок 17","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[-5,0,376.8],"rotation":[0,0,0],"scale":[4,1,23]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":38,"hold":154,"leave":38,"curve":-5,"hill":0}}]},{"id":"city-section-17","name":"Участок 18","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[3,0,399.8],"rotation":[0,0,0],"scale":[4,1,20.8]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":38,"hold":132,"leave":38,"curve":3,"hill":0}}]},{"id":"city-section-18","name":"Участок 19","kind":"box","layer":"architecture","visible":true,"locked":false,"transform":{"position":[0,0,420.6],"rotation":[0,0,0],"scale":[4,1,34]},"surface":{"texture":"none","color":"#2d2b33","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.section","values":{"enter":38,"hold":264,"leave":38,"curve":0,"hill":0}}]},{"id":"city-checkpoint-0","name":"Контрольная точка 1","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[0,2,91],"rotation":[0,0,0],"scale":[4.2,0.4,0.2]},"surface":{"texture":"none","color":"#ff6a3d","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.checkpoint","values":{"segment":910,"bonus":19}}]},{"id":"city-checkpoint-1","name":"Контрольная точка 2","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[0,2,182],"rotation":[0,0,0],"scale":[4.2,0.4,0.2]},"surface":{"texture":"none","color":"#ff6a3d","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.checkpoint","values":{"segment":1820,"bonus":18}}]},{"id":"city-checkpoint-2","name":"Контрольная точка 3","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[0,2,273],"rotation":[0,0,0],"scale":[4.2,0.4,0.2]},"surface":{"texture":"none","color":"#ff6a3d","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.checkpoint","values":{"segment":2730,"bonus":17}}]},{"id":"city-checkpoint-3","name":"Контрольная точка 4","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[0,2,364],"rotation":[0,0,0],"scale":[4.2,0.4,0.2]},"surface":{"texture":"none","color":"#ff6a3d","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.checkpoint","values":{"segment":3640,"bonus":16}}]},{"id":"city-scenery-0","name":"Небоскрёбы","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[2.3,1,0],"rotation":[0,0,0],"scale":[0.6,2,100]},"surface":{"texture":"none","color":"#556b4f","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.scenery","values":{"kind":"tower","side":"both","from":0,"to":4546,"every":11,"offset":2.3}}]},{"id":"city-scenery-1","name":"Фонари","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[1.15,1,0.5],"rotation":[0,0,0],"scale":[0.6,2,100]},"surface":{"texture":"none","color":"#556b4f","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.scenery","values":{"kind":"lamp","side":"both","from":5,"to":4546,"every":16,"offset":1.15}}]},{"id":"city-scenery-2","name":"Неоновые вывески","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[-1.55,1,4.3],"rotation":[0,0,0],"scale":[0.6,2,100]},"surface":{"texture":"none","color":"#556b4f","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.scenery","values":{"kind":"neon","side":"left","from":43,"to":4546,"every":55,"offset":1.55}}]},{"id":"city-scenery-3","name":"Неоновые вывески","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[1.55,1,7.6],"rotation":[0,0,0],"scale":[0.6,2,100]},"surface":{"texture":"none","color":"#556b4f","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.scenery","values":{"kind":"neon","side":"right","from":76,"to":4546,"every":75,"offset":1.55}}]},{"id":"city-scenery-4","name":"Небоскрёбы","kind":"box","layer":"props","visible":true,"locked":false,"transform":{"position":[3.4,1,0.5],"rotation":[0,0,0],"scale":[0.6,2,100]},"surface":{"texture":"none","color":"#556b4f","roughness":0.85,"metalness":0.1,"repeat":1},"components":[{"type":"zarevo.scenery","values":{"kind":"tower","side":"both","from":5,"to":4546,"every":13,"offset":3.4}}]}],"textures":[],"camera":{"projection":"perspective","fov":80,"height":2,"distance":5,"follow":"fixed"},"environment":{"time":0,"haze":0.04,"exposure":1,"flashlight":false},"moduleData":{"zarevo":{"theme":"city","time":38,"rivals":7,"traffic":20,"pace":0.81,"next":""}}}}'),Vc={manifest:Px,scenes:Lx},Ix=s=>new URL("./"+s,location.href).href;Cx(Vc,[yu],Vc.manifest.startScene,Ix).catch(s=>{document.getElementById("app").textContent="Не удалось запустить игру: "+s.message});
