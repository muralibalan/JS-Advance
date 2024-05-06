  /*************************************************************************************
 *  Name of the challenge  : Date Validator (Regular Expression)                     *
 *  Developed for          : SOFT TECH ASHRAM                                        *
 *                                                                                   *
 *  Developer                 Creation Date                        Activity          *
 *                            Maintenance History                                    *
 *                                                                                   *
 *************************************************************************************/
   
  //Code Statements
  // DOM Declaration
const inputDate = document.getElementById('dateId');
const isResult = document.getElementById('resultId');
//This is Regex Rules
const regexDate = /^\d{4}\-\d{2}\-\d{2}$/;

//____________________This is validation funtion__________________________
function validateFunction(){
  if(inputDate.value ===''){
    alert("Please Enter Date....")
    return;
  }
  let istrue = regexDate.test(inputDate.value);
    (istrue)? isResult.value = 'Successful Date...' :
            isResult.value = 'Un Successful Date...';
}
//___________________This is Reset the inputs_____________________________
function reset(){
  inputDate.value = '';
  isResult.value = '';
}