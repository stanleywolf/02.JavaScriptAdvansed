function validate() {

    let username =$('#username');
    let email = $('#email');
    let password = $('#password');
    let confPassword = $('#confirm-password');
    let checkBox = $('#company');
    let companyNumber = $('#companyNumber');

    let submitButton = $('#submit');

    let companyInfo = $('#companyInfo');

    let validDiv = $('#valid');

    let isValidForm = false;

    checkBox.on('change',function () {
        if(checkBox.is(':checked')){
            companyInfo.css('display','block');
        }else{
            companyInfo.css('display','none');
        }
    });
    submitButton.on('click',function (event) {
        event.preventDefault();
        validateForm();
        validDiv.css('display',isValidForm?'block':'none');
        isValidForm = true;
    });
    function validateForm() {
        let patternU = /^[a-zA-Z\d]{3,20}$/g;
        let patternE = /^.*?@.*?\..*$/g;
        let patternP = /^\w{5,15}$/g;

        validateInputWithRegex(username,patternU);
        validateInputWithRegex(email,patternE);

        if(confPassword.val() === password.val()){
        validateInputWithRegex(password,patternP);
        validateInputWithRegex(confPassword,/^\w{5,15}$/g);
        }else{
            password.css('border','1px solid red');
            confPassword.css('border','1px solid red');
            isValidForm = false;
        }
        if(checkBox.is(':checked')){
            validateCompanyInfo();
        }
    }

    function validateInputWithRegex(input,pattern){
        if(pattern.test(input.val())){
            input.css('border','none');
        }else{
            input.css('border','1px solid red');
            isValidForm = false;
        }
    }

    function validateCompanyInfo(){
        let numValue = Number(companyNumber.val());
        if(numValue >= 1000 && numValue <= 9999){
            companyNumber.css('border','none');
        }else{
            companyNumber.css('border','1px solid red');
            isValidForm = false;
        }
    }
}
