const students = [
  {id:'KL001',name:'Aarav Kumar',marks:86},
  {id:'KL002',name:'Diya Reddy',marks:92},
  {id:'KL003',name:'Rohan Das',marks:34},
  {id:'KL004',name:'Meera Rao',marks:78}
];
const rows = document.querySelector('#rows');
const grade = n => n >= 90 ? 'A+' : n >= 80 ? 'A' : n >= 70 ? 'B' : n >= 60 ? 'C' : n >= 40 ? 'D' : 'F';
function render(){
  const q = document.querySelector('#search').value.trim().toLowerCase();
  const filter = document.querySelector('#filter').value;
  const shown = students.filter(s => (s.name.toLowerCase().includes(q)||s.id.toLowerCase().includes(q)) && (filter==='all'||(filter==='pass'?s.marks>=40:s.marks<40)));
  rows.innerHTML = shown.map(s => `<tr><td>${escapeHTML(s.id)}</td><td>${escapeHTML(s.name)}</td><td>${s.marks}/100</td><td>${grade(s.marks)}</td><td><span class="pill ${s.marks>=40?'pass':'fail'}">${s.marks>=40?'Pass':'Fail'}</span></td><td><button class="delete" data-id="${escapeHTML(s.id)}" aria-label="Delete ${escapeHTML(s.name)}">Delete</button></td></tr>`).join('');
  document.querySelector('#empty').hidden = shown.length > 0;
  document.querySelector('#total').textContent = students.length;
  document.querySelector('#average').textContent = students.length ? (students.reduce((a,s)=>a+s.marks,0)/students.length).toFixed(1)+'%' : '—';
  document.querySelector('#pass-rate').textContent = students.length ? Math.round(students.filter(s=>s.marks>=40).length/students.length*100)+'%' : '—';
}
function escapeHTML(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
document.querySelector('#search').addEventListener('input',render);
document.querySelector('#filter').addEventListener('change',render);
document.querySelector('#show-add').addEventListener('click',()=>{document.querySelector('#add-form').hidden=!document.querySelector('#add-form').hidden;});
document.querySelector('#add-form').addEventListener('submit',e=>{
  e.preventDefault(); const data=new FormData(e.currentTarget);
  const id=data.get('id').trim(), name=data.get('name').trim(), marks=Number(data.get('marks'));
  if(students.some(s=>s.id.toLowerCase()===id.toLowerCase())){alert('That student ID already exists.');return;}
  students.push({id,name,marks}); e.currentTarget.reset(); e.currentTarget.hidden=true; render();
});
rows.addEventListener('click',e=>{const button=e.target.closest('[data-id]');if(!button)return;const index=students.findIndex(s=>s.id===button.dataset.id);if(index>=0)students.splice(index,1);render();});
render();
