// Year otomatis
document.getElementById('year').textContent = new Date().getFullYear();

// Toast kecil
const toast = document.getElementById('toast');
function showToast(msg, t=1500){
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'), t);
}

// Event klik tombol
document.querySelectorAll('.link').forEach(btn=>{
  btn.addEventListener('click', ()=> showToast('Membuka tautan...'));
});
