function formValidator()
{
    var firstname = document.getElementById('firstname');
    var lastname = document.getElementById('lastname');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var addr = document.getElementById('addr');
    var mobileno = document.getElementById('mobileno');
    if(notEmpty(firstname,"first name can not be empty")){
        if(isAlphabet(firstname,"Please enter only letters for yours firstname")){
            if(lengthRestriction(firstname,6)){
                if(isAlphabet(lastname,"Please enter only letters for yours lastname")){ 
            if(emailVaildator(email,"Please enter a vaild email addrs")){ 
             if(lengthRestriction(pass,6)){   
             if(isAlphabet(pass,"Please enter Number and  letters only for password")){ 
           if(notEmpty(addr,"Please enter the address")){ 
        if(isNumaric(mobileno,"Please enter a vaild mobileno")){
        if(lengthRestriction(mobileno,10,10)){
        return true;         
            }
        }
    }
}} }
    }}}}
    return false;
}
function notEmpty(elem, helperMsg){  

    if(elem.value.length == 0){ 
    
    alert(helperMsg); 
 elem.focus();  
    return false; 
    
    } 
    
    return true; 
    
    } 
    
    function isNumeric(elem, helperMsg){ 
    
    var numericExpression = /^[0-9]+$/; 
    
    if(elem.value.match(numericExpression)){ 
    
    return true; 
    
    }else{ 
    
    alert(helperMsg); 
    
    elem.focus(); 
    
    return false; 
    } 
    } 
    function isAlphabet(elem, helperMsg){ 
    var alphaExp = /^[a-zA-Z]+$/; 
    if(elem.value.match(alphaExp)){ 
    return true; 
    }else{ 
    alert(helperMsg); 
    elem.focus(); 
    return false; 
    } 
    } 
    function isAlphanumeric(elem, helperMsg){ 
    var alphaExp = /^[0-9a-zA-Z]+$/;  
if(elem.value.match(alphaExp)){ 
    
return true; 
    
}else{ 
    
alert(helperMsg); 
    
elem.focus(); 
return false; 
    } } 
    function lengthRestriction(elem, min){ 
    var uInput = elem.value; 
    if(uInput.length >= min){ 
    return true; 
    }else{ 
    alert("Please enter minimum " +min+ " characters"); 
    elem.focus(); 
    return false; 
    } 
    } 
    function emailValidator(elem, helperMsg)  
    { 
    var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/; 
    if(elem.value.match(emailExp)) { 
    return true; 
    } 
    else{ 
    alert(helperMsg); 
    elem.focus(); 
    return false; 
    } 
    } 
    function lengthRestriction1(elem, min, max)   
    {   
    var uInput = elem.value;
    if(uInput.length >= min && uInput.length <= max)  
    {  
    return true;   
    }    
    else {  
 alert("Please enter 10 numbers only"); 
elem.focus(); 
 return false; 
}
}