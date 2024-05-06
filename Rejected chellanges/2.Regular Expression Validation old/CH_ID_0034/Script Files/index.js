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
//_____________________________This is Input Validation____________________________________
function Validation(){
    let inputValues = [
      nameId.value,
      mailId.value,
      creditId.value,
      panId.value,
      gstId.value
    ];
//This is All inputs Validation......
   if(inputValues.some(data => data === '')){
    alert("Plaese Enter the Valid Inputs");
    return;
    }
//This is name validation 
    const nameRegex = /^[a-zA-Z]{3,}$/;
    (nameRegex.test(nameId.value))? nameInvalid.style.display = "none" :
                                     nameInvalid.style.display = "block";
//This is Mail Validation
    const mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    (mailRegex.test(mailId.value))? mailInvalid.style.display = "none" :
                                            mailInvalid.style.display = "block";
//This is Credit Card Number Validation
    const creditRegex = /^[\d]{4}\s[\d]{4}\s[\d]{4}\s[\d]{4}$/;
    (creditRegex.test(creditId.value))? creditInvalid.style.display = "none" :
                                           creditInvalid.style.display = "block";
//This is PAN Number Validation
    const panRegex = /^[A-Z]{5}\d{4}[A-Z]$/;
    (panRegex.test(panId.value))? panInvalid.style.display = "none" :
                                   panInvalid.style.display = "block";
//This is GST Number Validation 
    const gstRegex = /^\d{2}[A-Z]{5}\d{4}[A-Z]\d[A-Z]\d$/;
    (gstRegex.test(gstId.value))? gstInvalid.style.display = "none" :
                                   gstInvalid.style.display = "block";
//This is all input box is true call this funciton 
  const isTrue = [
    nameRegex.test(nameId.value),
    mailRegex.test(mailId.value),
    creditRegex.test(creditId.value),
    panRegex.test(panId.value),
    gstRegex.test(gstId.value)
  ];
  //If All Input is true call this function...
  if(isTrue.every(data => data === true)){
      outputFunction();
    return;
    }
}
//_______________________________This is output modal funtion_________________________________
function outputFunction(){
  modalName.innerHTML = nameId.value;
  modalMail.innerHTML = mailId.value;
  modalCredit.innerHTML = creditId.value;
  modalPAN.innerHTML = panId.value;
  modalGST.innerHTML = gstId.value; 
  document.getElementById('outputModal').style.display = 'block';
}
//________________________________This is Close the modal__________________________________
function toggleOutputModal(){
  document.getElementById('outputModal').style.display = 'none';
}
//________________________________This is Reset the Page__________________________________
function reset(){
    for(let i=0 ; i < resetInput.length ; i++){
      resetInput[i].value = '';
    }
    nameInvalid.style.display = "none";
    mailInvalid.style.display = "none";
    creditInvalid.style.display = "none";
    panInvalid.style.display = "none";
    gstInvalid.style.display = "none";
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
