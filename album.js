const btns=document.querySelectorAll('.nextprev-btn');
btns.forEach((btn,i)=>{
btn.onclick=()=>{
const id=btn.dataset.page;
document.getElementById(id).classList.toggle('turn');
}
});
