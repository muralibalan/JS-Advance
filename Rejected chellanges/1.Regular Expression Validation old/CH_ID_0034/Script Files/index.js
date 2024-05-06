/*************************************************************************************
 *  Name of the challenge  : Validation                                              *
 *  Developed for          : SOFT TECH ASHRAM                                        *
 *                                                                                   *
 *  Developer                 Creation Date                        Activity          *
 *                                                                                   *
 *                                                                                   *
 *                            Maintenance History                                    *
 *                                                                                   *
 *************************************************************************************/
//DOM Declaration
//set Input...
const nameId = document.getElementById('stringId')
const mailId = document.getElementById('mailId')
const creditId = document.getElementById('creditId')
const panId = document.getElementById('panId')
const gstId = document.getElementById('gstId')
//Get output
const modalName = document.getElementById('nameOutput')
const modalMail = document.getElementById('mailOutput')
const modalCredit = document.getElementById('creditOutput')
const modalPAN = document.getElementById('panOutput');
const modalGST = document.getElementById('gstOutput')
const resetInput = document.getElementsByClassName('reset');
//This is Invalid Alerts
const nameInvalid = document.getElementById('nameInvalid');
const mailInvalid = document.getElementById('mailInvalid');
const creditInvalid = document.getElementById('creditInvalid');
const panInvalid = document.getElementById('panInvalid');
const gstInvalid = document.getElementById('gstInvalid');
//********************************************************** */
//This is Input Validation....
function Validation(){
    let inputValues = [
      nameId.value,
      mailId.value,
      creditId.value,
      panId.value,
      gstId.value
    ];
//This is inputs Validation......
   if(inputValues.some(data => data === '')){
    alert("Plaese Enter the Valid Inputs");
    return;
    }
  modalName.innerHTML = nameId.value;
  modalMail.innerHTML = mailId.value;
  modalCredit.innerHTML = creditId.value;
  modalPAN.innerHTML = panId.value;
  modalGST.innerHTML = gstId.value; 
  document.getElementById('outputModal').style.display = 'block';
}
//*********************************************************************** */
//This is valid Or Invalid Checking the inputs...
function preventNumber(event){
  const nameInput = event.target.value;
  const regex = /^[a-zA-Z\s]{3,}$/;
  (regex.test(nameInput))? nameInvalid.style.display = "none" :
  nameInvalid.style.display = "block";
}
//----------------------------------------------------
function preventSpace(event, regex) {
  var input = event.target.value;
  let currentInput = event.target.id;
      switch(currentInput){
            case 'mailId':{
                  (regex.test(input)===false)? mailInvalid.style.display = "block" :
                  mailInvalid.style.display = "none";
                  break;
            }

            case 'creditId':{
                  (regex.test(input)===false)? creditInvalid.style.display = "block" :
                  creditInvalid.style.display = "none";
                  break;
            }

            case 'panId':{
                  (regex.test(input)===false)? panInvalid.style.display = "block" :
                  panInvalid.style.display = "none";
                  break;
            }

            case 'gstId':{
                  (regex.test(input)===false)? gstInvalid.style.display = "block" :
                  gstInvalid.style.display = "none";
                  break;
            }
      } 
}
//This is Close the modal....
function toggleOutputModal(){
  document.getElementById('outputModal').style.display = 'none';
}
//This is Reset the Page...
function reset(){
    for(let i=0 ; i <= resetInput.length ; i++){
      resetInput[i].value = '';
    }
}
//****************************************************************************************** */

// Screen date and time declaration.
let displayDate = new Date();

//Modal
const toggleSuccessModal = () => successModal.classList.toggle("active");
const toggleErrorModal = () => errorModal.classList.toggle("active");
window.addEventListener("click", function (event) {
  if (event.target === successModal) successModal.classList.remove("active");
  if (event.target === errorModal) errorModal.classList.remove("active");
});

//copy to clipboard
const copyText = document.querySelector("#copy");
copyText.addEventListener("click", () => {
  navigator.clipboard.writeText(document.querySelector("#successCode").value);
  copyText.textContent = "copied";
  setTimeout(() => {
    copyText.innerHTML = `<span>&#128203; </span>copy`;
  }, 2000);
});
