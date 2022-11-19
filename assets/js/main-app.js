const campo1 = document.querySelector('.email');
const campo2 = document.querySelector('.password');

campo1.addEventListener('focus',()=>{
    campo1.style.borderColor = '#05abed'
})
campo1.addEventListener('blur',()=>{
    campo1.style.borderColor = '#848383'
})
campo2.addEventListener('focus',()=>{
    campo2.style.borderColor = '#05abed'
})
campo2.addEventListener('blur',()=>{
    campo2.style.borderColor = '#848383'
})