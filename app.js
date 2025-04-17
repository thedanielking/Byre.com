const accordionBtns = document.querySelectorAll('.accordion-btn')

accordionBtns .forEach(btn =>{
    btn.addEventListener('click', function(){
        this.classList.toggle('active')
        const accordionDescription = this.nextElementSibling
        const plusIcon = this.querySelector('.plus-icon')
        const minusIcon = this.querySelector('.minus-icon')

        if(accordionDescription.style.maxHeight){
            accordionDescription.style.maxHeight = null
            plusIcon.classList.add("block")
            plusIcon.classList.remove("hidden")
            minusIcon.classList.add("hidden")
            minusIcon.classList.remove("block")
        } else{
            accordionDescription.style.maxHeight = accordionDescription.scrollHeight + 'px'
            plusIcon.classList.add("hidden")
            plusIcon.classList.remove("block")
            minusIcon.classList.add("block")
            minusIcon.classList.remove("hidden")
        }

    })
})


const menuBtn = document.querySelector("#menuBtn");
const closeBtn = document.querySelector("#closeBtn");


menuBtn.addEventListener("click", ()=>{
    const sideNav = document.querySelector("#sideNav");
    sideNav.classList.remove("hidden")
})

closeBtn.addEventListener("click", ()=>{
    const sideNav = document.querySelector("#sideNav");
    sideNav.classList.add("hidden")
})





