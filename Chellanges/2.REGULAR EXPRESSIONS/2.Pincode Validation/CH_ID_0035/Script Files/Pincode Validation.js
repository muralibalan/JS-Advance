/*            *************************************************************
 *  Name of the challenge  : Pincode Validation               *
 *  Developed for          : VHITECH Training Program         *
 *               Maintenance History                          *
 *  Developer               :                                 *
 *  Creation date           :     Ticket No:                  *
 **************************************************************/

// DOM Declaration
const inputNumber = document.getElementById('pinId');
const isResult = document.getElementById('resultId');
//This is Regex Rules
const regexPinCode = /^[5-6][0-9]{5}$/;

//____________________This is validation funtion__________________________
function validateFunction(){
  if(inputNumber.value ===''){
    alert("Please Enter Pincode....")
    return;
  }
  let istrue = regexPinCode.test(inputNumber.value);
    (istrue)? isResult.value = 'Successful Pincode...' :
            isResult.value = 'Un Successful Pincode...';
}
//___________________This is Reset the inputs_____________________________
function reset(){
  inputNumber.value = '';
  isResult.value = '';
}
//********************************************************************************** */
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

//Code Logic
