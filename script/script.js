let mondayWorkers=[]
let tuesdayWorkers=[]
let wednesdayWorkers=[]
let thursdayWorkers=[]
let fridayWorkers=[]
let saturdayWorkers=[]
let sundayWorkers=[]

let mondayInput= document.getElementById('mondayInpt')
let tuesdayInput= document.getElementById('tuesdayInpt')
let wednesdayInput= document.getElementById('wednesdayInpt')
let thursdayInput= document.getElementById('thursdayInpt')
let fridayInput= document.getElementById('fridayInpt')
let saturdayInput= document.getElementById('saturdayInput')
let sundayInput= document.getElementById('sundayInpt')

let mondaySelect= document.getElementById('mondaySelected')
let tuesdaySelect= document.getElementById('tuesdaySelected')
let wednesdaySelect= document.getElementById('wednesdaySelected')
let thursdaySelect= document.getElementById('thursdaySelected')
let fridaySelect= document.getElementById('fridaySelected')
let saturdaySelect= document.getElementById('saturdaySelected')
let sundaySelect= document.getElementById('sundaySelected')

function addMondayWorkers(){
    if (mondayInput.value!="") {
         mondayWorkers.push(mondayInput.value)
         console.log(mondayWorkers)
         mondayInput.value=""
    } else {
        alert("Please enter a worker name.");
    }
}

function addTuesdayWorkers(){
    if (tuesdayInput.value!="") {
        tuesdayWorkers.push(tuesdayInput.value)
        console.log(tuesdayWorkers)
        tuesdayInput.value=""
   } else {
       alert("Please enter a worker name.");
   }
}

function addWednesdayWorkers(){
    if (wednesdayInput.value!="") {
        wednesdayWorkers.push(wednesdayInput.value)
        console.log(wednesdayWorkers)
        wednesdayInput.value=""
   } else {
       alert("Please enter a worker name.");
   }
}

function addThursdayWorkers(){
    if (thursdayInput.value!="") {
        thursdayWorkers.push(thursdayInput.value)
        console.log(thursdayWorkers)
        thursdayInput.value=""
   } else {
       alert("Please enter a worker name.");
   }
}

function addFridayWorkers(){
    if (fridayInput.value!="") {
        fridayWorkers.push(fridayInput.value)
        console.log(fridayWorkers)
        fridayInput.value=""
   } else {
       alert("Please enter a worker name.");
   }
}

function addSaturdayWorkers(){
    if (saturdayInput.value!=""){
        saturdayWorkers.push(saturdayInput.value)
        console.log(saturdayWorkers)
        saturdayInput.value=""
   }else {
       alert("Please enter a worker name.");
   }
}

function addSundayWorkers(){
    if (sundayInput.value!="") {
        sundayWorkers.push(sundayInput.value)
        console.log(sundayWorkers)
       sundayInput.value=""
   } else {
       alert("Please enter a worker name.");
   }
}



function sortWorkerMonday() {
    if(mondayWorkers.length>0){
        let mondayWorker= mondayWorkers[Math.floor(Math.random()* mondayWorkers.length)]
        mondaySelect.innerText=mondayWorker
    }else{
        alert("Add workers before sort")
    }
}


function sortWorkerTuesday() {
    if(tuesdayWorkers.length>0){
        let tuesdayWorker= tuesdayWorkers[Math.floor(Math.random()* tuesdayWorkers.length)]
        tuesdaySelect.innerText=tuesdayWorker
    }else{
        alert("Add workers before sort")
    }
}

function sortWorkerWednesday() {
    if(wednesdayWorkers.length>0){
        let wednesdayWorker= wednesdayWorkers[Math.floor(Math.random()* wednesdayWorkers.length)]
        wednesdaySelect.innerText=wednesdayWorker
    }else{
        alert("Add workers before sort")
    }
}

function sortWorkerThursday() {
    if(thursdayWorkers.length>0){
        let thursdayWorker= thursdayWorkers[Math.floor(Math.random()* thursdayWorkers.length)]
        thursdaySelect.innerText=thursdayWorker
    }else{
        alert("Add workers before sort")
    }
}

function sortWorkerFriday() {
    if(fridayWorkers.length>0){
        let fridayWorker= fridayWorkers[Math.floor(Math.random()* fridayWorkers.length)]
        fridaySelect.innerText=fridayWorker
    }else{
        alert("Add workers before sort")
    }
}

function sortWorkerSaturday() {
    if(saturdayWorkers.length>0){
        let saturdayWorker= saturdayWorkers[Math.floor(Math.random()* saturdayWorkers.length)]
        saturdaySelect.innerText= saturdayWorker
    }else{
        alert("Add workers before sort")
    }
}

function sortWorkerSunday() {
    if(sundayWorkers.length>0){
        let sundayWorker= sundayWorkers[Math.floor(Math.random()* sundayWorkers.length)]
        sundaySelect.innerText=sundayWorker
    }else{
        alert("Add workers before sort")
    }
}