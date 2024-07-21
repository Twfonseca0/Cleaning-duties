let mondayWorkers=[]
let tuesdayWorkers=[]
let wednesdayWorkers=[]
let thursdayWorkers=[]
let fridayWorkers=[]
let saturdayWorkers=[]
let sundayWorkers=[]
let mondayWorker=""
let tuesdayWorker=""
let wednesdayWorker=""
let thursdayWorker=""
let fridayWorker=""
let saturdayWorker=""
let sundayWorker=""
let mondayInput= document.getElementById('mondayInpt')
let tuesdayInput= document.getElementById('tuesdayInpt')
let wednesdayInput= document.getElementById('wednesdayInpt')
let thursdayInput= document.getElementById('thursdayInpt')
let fridayInput= document.getElementById('fridayInpt')
let saturdayInput= document.getElementById('saturdayInpt')
let sundayInput= document.getElementById('sundayInpt')

function addMondayWorkers(){
    if (mondayInput.value!="") {
         mondayWorkers.push(mondayInput.value)
         console.log(mondayWorkers)
    } else {
        alert("Please enter a worker name.");
    }
}

function addTuesdayWorkers(){
    if (wednesdayInput.value!="") {
        tuesdayWorkers.push(wednesdayInput.value)
        console.log(tuesdayWorkers)
   } else {
       alert("Please enter a worker name.");
   }
}

function addWednesdayWorkers(){
    if (wednesdayInput.value!="") {
        wednesdayWorkers.push(wednesdayInput.value)
        console.log(wednesdayWorkers)
   } else {
       alert("Please enter a worker name.");
   }
}

function addThursdayWorkers(){

}

function addFridayWorkers(){

}

function addSaturdayWorkers(){

}

function addSundayWorkers(){

}



function sortWorkerMonday() {
   
}

function sortWorkerTuesday() {
   
}

function sortWorkerWednesday() {
   
}

function sortWorkerThrusday() {
   
}

function sortWorkerFriday() {
   
}

function sortWorkerSaturday() {
   
}

function sortWorkerSunday() {
   
}