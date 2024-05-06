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
// DOM Declaration
const modalName = document.getElementById('nameOutput')
const modalMail = document.getElementById('mailOutput')
const modalCredit = document.getElementById('creditOutput')
const modalPAN = document.getElementById('panOutput');
const modalGST = document.getElementById('gstOutput')
const resetInput = document.getElementsByClassName('reset');

const inputs = {
  name: {
    element:      document.getElementById('stringId'),
    invalidAlert: document.getElementById('nameInvalid'),
    regex:        /^[a-zA-Z]{3,}$/
  },
  mail: {
    element:      document.getElementById('mailId'),
    invalidAlert: document.getElementById('mailInvalid'),
    regex:        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  },
  credit: {
    element:      document.getElementById('creditId'),
    invalidAlert: document.getElementById('creditInvalid'),
    regex:        /^[\d]{4}\s[\d]{4}\s[\d]{4}\s[\d]{4}$/
  },
  pan: {
    element:      document.getElementById('panId'),
    invalidAlert: document.getElementById('panInvalid'),
    regex:        /^[A-Z]{5}\d{4}[A-Z]$/
  },
  gst: {
    element:      document.getElementById('gstId'),
    invalidAlert: document.getElementById('gstInvalid'),
    regex:        /^\d{2}[A-Z]{5}\d{4}[A-Z]\d[A-Z]\d$/
  }
};
const objectKeys = Object.keys(inputs);

//This is Validation Funciton....
function Validation(){
  let isValid = true;
//This is all Inputs Validation......
    if(objectKeys.some((key) => inputs[key].element.value === "")){
      alert("Enter the Valid Inputs....");
      return;
    }
    for( let  i = 0 ; i < objectKeys.length ; i++){
        const inputName = inputs[objectKeys[i]].element.value;
        
        if(!inputs[objectKeys[i]].regex.test(inputName)){
          inputs[objectKeys[i]].invalidAlert.style.display = "block";
          isValid = false;
        }else{
          inputs[objectKeys[i]].invalidAlert.style.display = "none";
        }
    }
//If All Input is true call Output function...
  if(isValid){
      outputFunction();
    }
}
//_______________________________This is output function_______________________________
function outputFunction(){
  const output = [modalName,modalMail,modalCredit,modalPAN,modalGST];

      for( let i = 0 ; i < objectKeys.length ; i ++){
        output[i].innerHTML = inputs[objectKeys[i]].element.value;
      }
    document.getElementById('outputModal').style.display = 'block';
}
//________________________________This is Close the modal_______________________________
function toggleOutputModal(){
  document.getElementById('outputModal').style.display = 'none';
}
//________________________________This is Reset the Page________________________________
function reset(){
  const resetAlert = [nameInvalid,mailInvalid,creditInvalid,panInvalid,gstInvalid];
    for(let i=0 ; i < resetInput.length ; i++){
      resetInput[i].value = '';
      resetAlert[i].style.display = 'none';
    }
}
// ***********************************************************************************
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


//DOM Declaration
// //set Input...
// const nameId = document.getElementById('stringId')
// const mailId = document.getElementById('mailId')
// const creditId = document.getElementById('creditId')
// const panId = document.getElementById('panId')
// const gstId = document.getElementById('gstId')
// //Get output
// const modalName = document.getElementById('nameOutput')
// const modalMail = document.getElementById('mailOutput')
// const modalCredit = document.getElementById('creditOutput')
// const modalPAN = document.getElementById('panOutput');
// const modalGST = document.getElementById('gstOutput')
// const resetInput = document.getElementsByClassName('reset');
// //This is Invalid Alerts
// const nameInvalid = document.getElementById('nameInvalid');
// const mailInvalid = document.getElementById('mailInvalid');
// const creditInvalid = document.getElementById('creditInvalid');
// const panInvalid = document.getElementById('panInvalid');
// const gstInvalid = document.getElementById('gstInvalid');
// //_____________________________This is Input Validation____________________________________
// function Validation(){
//     let inputValues = [
//       nameId.value,
//       mailId.value,
//       creditId.value,
//       panId.value,
//       gstId.value
//     ];
// //This is All inputs Validation......
//    if(inputValues.some(data => data === '')){
//     alert("Plaese Enter the Valid Inputs");
//     return;
//     }
// //This is name validation 
//     const nameRegex = /^[a-zA-Z]{3,}$/;
//     (nameRegex.test(nameId.value))? nameInvalid.style.display = "none" :
//                                      nameInvalid.style.display = "block";
// //This is Mail Validation
//     const mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     (mailRegex.test(mailId.value))? mailInvalid.style.display = "none" :
//                                             mailInvalid.style.display = "block";
// //This is Credit Card Number Validation
//     const creditRegex = /^[\d]{4}\s[\d]{4}\s[\d]{4}\s[\d]{4}$/;
//     (creditRegex.test(creditId.value))? creditInvalid.style.display = "none" :
//                                            creditInvalid.style.display = "block";
// //This is PAN Number Validation
//     const panRegex = /^[A-Z]{5}\d{4}[A-Z]$/;
//     (panRegex.test(panId.value))? panInvalid.style.display = "none" :
//                                    panInvalid.style.display = "block";
// //This is GST Number Validation 
//     const gstRegex = /^\d{2}[A-Z]{5}\d{4}[A-Z]\d[A-Z]\d$/;
//     (gstRegex.test(gstId.value))? gstInvalid.style.display = "none" :
//                                    gstInvalid.style.display = "block";
// //This is all input box is true call this funciton 
//   const isTrue = [
//     nameRegex.test(nameId.value),
//     mailRegex.test(mailId.value),
//     creditRegex.test(creditId.value),
//     panRegex.test(panId.value),
//     gstRegex.test(gstId.value)
//   ];
//   //If All Input is true call this function...
//   if(isTrue.every(data => data === true)){
//       outputFunction();
//     return;
//     }
// }
// //__________________________This is output modal funtion______________________________
// function outputFunction(){
//   modalName.innerHTML = nameId.value;
//   modalMail.innerHTML = mailId.value;
//   modalCredit.innerHTML = creditId.value;
//   modalPAN.innerHTML = panId.value;
//   modalGST.innerHTML = gstId.value; 
//   document.getElementById('outputModal').style.display = 'block';
// }
// //________________________________This is Close the modal__________________________________
// function toggleOutputModal(){
//   document.getElementById('outputModal').style.display = 'none';
// }
// //________________________________This is Reset the Page__________________________________
// function reset(){
//     for(let i=0 ; i < resetInput.length ; i++){
//       resetInput[i].value = '';
//     }
//     nameInvalid.style.display = "none";
//     mailInvalid.style.display = "none";
//     creditInvalid.style.display = "none";
//     panInvalid.style.display = "none";
//     gstInvalid.style.display = "none";
// }
// //****************************************************************************************** */
