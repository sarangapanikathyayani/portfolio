/*let sections=document.querySelectorAll('section');
let navlinkss=document.querySelectorAll('header nav a');
window.onscroll=()=>{
    sections.forEach(sec =>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height =sec.offsetHeight;
        let id=sec.getAttribute('id');
if(top>=offset&&top<offset+height){
    navlinkss.forEach(links=>{
        links.classList.remove('active');
        document.querySelectorAll('header nav a[href*=' + id+ ']').classList.add('active');
    });
}
        });
    };*/