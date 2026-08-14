const data={
courses:[
["Class 1–5","Foundation • Maths • English • EVS • Hindi"],
["Class 6–8","CBSE / ICSE • Maths • Science • English • SST"],
["Class 9–10","Board-focused preparation"],
["CHS / NVS / Sainik School","Entrance preparation"]
],
materials:[
["Mathematics","Chapter-wise practice material"],
["Science","Notes, definitions & revision"],
["English","Grammar & comprehension"],
["Hindi","व्याकरण एवं अभ्यास"]
],
schedule:[["Monday","Class 6–8","5:00 PM"],["Tuesday","Class 9–10","6:00 PM"],["Wednesday","Class 6–8","5:00 PM"],["Thursday","Class 9–10","6:00 PM"]]
};
const questions=[
["12 × 5 = ?",["50","60","70","80"],1],
["भारत की राजधानी क्या है?",["मुंबई","दिल्ली","लखनऊ","पटना"],1],
["Noun का अर्थ क्या है?",["नाम","काम","गुण","सम्बन्ध"],0],
["2, 4, 6, 8, ?",["9","10","11","12"],1],
["पौधे भोजन किस प्रक्रिया से बनाते हैं?",["श्वसन","प्रकाश संश्लेषण","पाचन","उत्सर्जन"],1]
];
function page(id){document.querySelectorAll("main section").forEach(s=>s.classList.remove("active"));document.getElementById(id).classList.add("active");document.getElementById("drawer").classList.remove("open");scrollTo(0,0)}
function toggleMenu(){document.getElementById("drawer").classList.toggle("open")}
function render(){
courseList.innerHTML=data.courses.map(x=>`<div><b>${x[0]}</b><span>${x[1]}</span></div>`).join("");
materialList.innerHTML=data.materials.map(x=>`<div><b>${x[0]}</b><span>${x[1]}</span></div>`).join("");
scheduleList.innerHTML=data.schedule.map(x=>`<tr><td>${x[0]}</td><td>${x[1]}</td><td>${x[2]}</td></tr>`).join("");
quiz.innerHTML=questions.map((x,i)=>`<div class="question"><b>Q${i+1}. ${x[0]}</b>${x[1].map((o,j)=>`<label><input type="radio" name="q${i}" value="${j}"> ${o}</label>`).join("")}</div>`).join("");
}
function submitQuiz(){let s=0;questions.forEach((x,i)=>{let r=document.querySelector(`input[name=q${i}]:checked`);if(r&&+r.value===x[2])s++});score.textContent=`आपका स्कोर: ${s}/${questions.length}`}
function saveProfile(){let p={name:name.value,cls:cls.value,phone:phone.value};localStorage.setItem("aht_profile",JSON.stringify(p));showProfile()}
function showProfile(){let p=JSON.parse(localStorage.getItem("aht_profile")||"null");savedProfile.innerHTML=p?`<p><b>${p.name}</b><br>Class: ${p.cls||"—"}<br>Mobile: ${p.phone||"—"}</p>`:""}
function saveNotice(){let n=noticeInput.value.trim();if(!n)return;localStorage.setItem("aht_notice",n);notice.textContent=n;noticeInput.value=""}
function resetData(){localStorage.clear();location.reload()}
let n=localStorage.getItem("aht_notice");if(n)notice.textContent=n;render();showProfile();