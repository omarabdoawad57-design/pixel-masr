const hero=document.getElementById("hero");
const rows=document.getElementById("rows");

hero.innerHTML=`
<div class="hero" style="background-image:url('${content[0].banner}')">
  <div class="hero-content">
    <h1>${content[0].title}</h1>
    <p>${content[0].description}</p>
    <button onclick="openDetails(${content[0].id})">▶ مشاهدة</button>
  </div>
</div>`;

function draw(list){
rows.innerHTML="";
list.forEach(c=>{
rows.innerHTML+=`
<div class="card">
<img src="${c.poster}" onclick="openDetails(${c.id})">
<p>⭐ ${c.rating}</p>
</div>`;
});
}
draw(content);

document.getElementById("search").oninput=e=>{
draw(content.filter(c=>c.title.toLowerCase().includes(e.target.value.toLowerCase())));
}

function openDetails(id){
location.href=`details.html?id=${id}`;
}
