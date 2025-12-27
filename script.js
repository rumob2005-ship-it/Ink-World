var nameError=document.getElementById("nameErr");
var numberError=document.getElementById("numberErr");
var emailError=document.getElementById("emailErr");

    // To create a function that validates the input 
    function validateForm(){
  

        var bookName=document.getElementById("name").value;
        if(bookName==""){
            nameError.innerHTML="Please choose a Book name!";
            isValid= false;
        }
        else{
            nameError.innerHTML="";
        }


        var phoneNumber=document.getElementById("number").value;
        if(phoneNumber=="" || isNaN(Number(phoneNumber))|| phoneNumber.length<8){
            numberError.innerHTML="Please enter a valid 8-digit Phone Number!";
            isValid= false;
        }
        else{
            numberError.innerHTML="";
        }


        var emailAddress=document.getElementById("email").value;
        if(emailAddress==""||!emailAddress.includes("@")||!emailAddress.includes(".")){
            emailError.innerHTML="Please enter a valid Email!";
            isValid= false;
        }
        else{
            emailError.innerHTML="";
        }

        if(!isValid){
            return false;
        }
    }
    

    // self correcting quiz with a feedback
    document.getElementById("quiz").addEventListener("submit", function(event){
        event.preventDefault();

        var userAnswer=document.getElementById("answer").value.trim().toLowerCase();
        var correctAnswers=[
            "improve your focus and concentration",
            "relaxation technique",
            "make you smart"
        ];

    // feedback
    var feedbackMessage="";
    if(correctAnswers.includes(userAnswer)){
        feedbackMessage="Correct! Well done.";
    }
    else{
        feedbackMessage="Oops! Wrong answer, try again!";
    }
    // to show feedback
    document.getElementById("feedback").textContent=feedbackMessage;
    }
);