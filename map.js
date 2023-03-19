function changeImage(x,image){
    if(x==1){
        image.src = 'Resourses/map-hover.3ab826bc.svg';
    }
    if(x==2){
        image.src = 'Resourses/map.017983aa.svg';
    }
}


function scrollL(){
    let left = document.querySelector(".timeline-div")
    left.scrollBy(-500,0)
}

function scrollR(){
    let right = document.querySelector(".timeline-div")
    right.scrollBy(500,0)
}

//Map scrolling with mouse moving
const timeline = document.querySelector(".timeline-div")

let isDragStart = false;

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX
    prevScrollLeft = timeline.scrollLeft
}

const dragging = (e) => {
    
    if(!isDragStart) return
    e.preventDefault()
    let positionDiff = e.pageX - prevPageX
    timeline.scrollLeft = prevScrollLeft - positionDiff 
}
const dragStop = () =>{
    isDragStart=false
}


timeline.addEventListener("mousemove", dragging)
timeline.addEventListener("mousedown", dragStart)
timeline.addEventListener("mouseup", dragStop)

//scroll the timeline with scroll bar

let mouseWheelEvt = function (event) {
    if (timeline.doScroll)
        timeline.doScroll(event.wheelDelta>0?"left":"right");
    else if ((event.wheelDelta || event.detail) > 0)
        timeline.scrollLeft -= 30;
    else
        timeline.scrollLeft += 30;

    return false;
}
timeline.addEventListener("mousewheel", mouseWheelEvt);

//toggle popup window
function togglePopUp(){
    document.getElementById("popup-1").classList.toggle("active")
}

const click = document.querySelector(".popup")

const clickOut = (e) =>{
    if(document.getElementById("popup-1").contains(e.pageX)){
        console.log("Clicked in the box!")
        return
    }
    else{
        console.log("Clicked out the box!")
        togglePopUp()
    }
    
}

click.addEventListener("clickout",clickOut)

//send email

function hello(){
    console.log("clicked")
}
function sendEmail(){
    console.log("Start")
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        gsm: document.getElementById("gsm").value,
        text: document.getElementById("text").value

    }
    console.log("Close")

    if(params.name == ""){
        togglePopUpNameError()
    }
    else if(params.email ==""){
        togglePopUpEmailError()
    }
    else if(params.gsm.length!=10){
        togglePopUpGSMError()
    }
    else if(params.text==""){
        togglePopUpTextError()
    }
    else{
        const serviceID = "service_wmx8n4o"
        const template = "template_e79hy99"

        emailjs
            .send(serviceID,template,params)
            .then((res)=>{
                document.getElementById("name").value = ""
                document.getElementById("email").value = ""
                document.getElementById("gsm").value = ""
                document.getElementById("text").value = ""
                console.log(res)
                alert("Your massage is sent succesfully")
            })

    }
}

//Errors popups

function togglePopUpNameError(){
    document.getElementById("error-popup-1").classList.toggle("active")
}
function togglePopUpEmailError(){
    document.getElementById("error-popup-2").classList.toggle("active")
}
function togglePopUpGSMError(){
    document.getElementById("error-popup-3").classList.toggle("active")
}
function togglePopUpTextError(){
    document.getElementById("error-popup-4").classList.toggle("active")
}