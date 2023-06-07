var options = document.querySelectorAll(".zab");
var pointer = document.querySelector("#pointer")
var content = document.querySelector("#sliderContent")
var contentInside = document.querySelectorAll(".slide")
var stop = 1
window.onload = ()=>{
    pointer.style.width = options[0].getBoundingClientRect().width +"px"
    pointer.style.top = options[0].getBoundingClientRect().height +"px"
    pointer.style.left = options[0].getBoundingClientRect().left - options[0].parentElement.getBoundingClientRect().left +"px"
}
options.forEach(item => {
    item.addEventListener('click', ()=>{
        if(!item.classList.contains("active") && stop == 1){
            options.forEach(aaa =>{
                aaa.classList.remove("active")
            })
            stop = 0
            item.classList.add('active')
            pointer.style.width = item.getBoundingClientRect().width +"px"
            pointer.style.top = item.getBoundingClientRect().height +"px"
            pointer.style.left = item.getBoundingClientRect().left - item.parentElement.getBoundingClientRect().left +"px"
            contentInside[1].innerHTML = item.children[0].getAttribute("alt")
            content.classList.add("clilked")
            setTimeout(()=>{
                contentInside[0].innerHTML = item.children[0].getAttribute("alt")
                content.classList.remove("clilked")
                stop = 1
            },300)
        }
    })
})