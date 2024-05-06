/*            *************************************************************
              *  Name of the challenge  :                                  *
              *                                                            *
              *  Developed for          : VHITECH Training Program         *
              *               Maintenance History                          *
              *  Developer              :                                  *
              *  Creation date           :                Ticket No:        *
              ************************************************************* */

//DOM Declaration
const studentName = document.getElementById('stringId');
const studentRoll = document.getElementById('rollId');
const studentCourse = document.getElementById('courseId');
const allDetails = document.getElementById('resultId');
const resetInput = document.getElementsByClassName('reset');
//This is Regex Rules
const nameRegex = /^[A-Za-z]+$/;
const rollRegex = /^[0-9]{1,}$/;
const courseRegex = /^[A-Za-z]+$/
//This is Validation Function...
function inputValidation(){
    let allInputs = [
        studentName.value,
        studentRoll.value,
        studentCourse.value
    ];
    if(allInputs.some(data => data ==='')){
        alert('Please Enter the Name, RollNo and Course...')
        return;
    }
    // This is Name Validation...
        let isName = nameRegex.test(allInputs[0]);
        
    //This is Roll Number Validation...
        let isRoll = rollRegex.test(allInputs[1]);
     
    //This is Course Validation...
        let isCourse = courseRegex.test(allInputs[2]);
      
//If all Datas True Call this Function...
    const trueDetails = [
       isName,
       isRoll,
       isCourse
    ];
    (trueDetails.every(data => data === true))? isOutput() : 
    allDetails.value = 'Invalid Datas';
}
function isOutput(){
    allDetails.value = `${studentName.value}\n${studentRoll.value}\n${studentCourse.value}`
}
//This is Reset the all input Box function
function reset(){
    for(let i = 0 ; i < resetInput.length ; i++){
        resetInput[i].value = '';
    }
}
// Screen date and time declaration.
let displayDate = new Date();
document.getElementById("dateOutput").innerHTML = displayDate.toLocaleDateString();
document.getElementById("timeOutput").innerHTML = displayDate.toLocaleTimeString();
//Input declaration
//Code Statements