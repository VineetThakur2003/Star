function calculateresult(){
    const marks = Number(document.getElementById("submarks").value);

    if (marks<0 || marks>100){
        document.getElementById("mesage").style.color = "Red";
        document.getElementById("message").innerHTML = "Invalid Marks Range";    

    }else if(marks>33){
        document.getElementById("message").style.color = "green";
        document.getElementById("message").innerHTML = "Pass";
    }else {
        document.getElementById("message").style.color = "Red";
        document.getElementById("message").innerHTML = "fail";
    }
}

function calculateEvenOdd(){
    num = Number(document.getElementById("num").value);

    if (num<0){
        document.getElementById("evenOddMessage").style.color ="Red";
        document.getElementById("evenOddMessage").innerHTML = "Negative number not acceptable";
    }else if (num%2==0){
        document.getElementById("evenOddMessage").style.color = "Green";
        document.getElementById("evenOddMessage").innerHTML = "Pass";
    }else{
        document.getElementById("evenOddMessage").style.color = "Red";
        document.getElementById("evenOddMessage").innerHTML = "Fail";
    }
}

function calgradeWithAllSubjectMarks(){
    english = Number(document.getElementById("english").value);
    math = Number(document.getElementById("math").value);
    hindi = Number(document.getElementById("hindi").value);
    science = Number(document.getElementById("science").value);
    physicaleducation = Number(document.getElementById("physical.education").value);

    allsubjectMarksVaild = true;
    message = ""

    if(english<0 || english>100){
        allsubjectMarksVaild=false
        message += "English"
    }
    if(math<0 || math>100){
        allSubjectMarksVaild=false
        message += "Math,"
    }
    if(hindi<0 || hindi>100){
        allSubjectMarksVaild=false
        message += "hindi,"
    }
    if(science<0 || science>100){
        allSubjectMarksVaild=false
        message += "science,"
    }
    if(physicaleducation<0 || physicaleducation>100){
        allSubjectMarksVaild=false
        message += "physicaleduction"
    }

    if(allSubjectMarksVaild){
        total = english + math + hindi + science + physicaleducation;
        percentage = (total/500)*100;

        if(percentage>=0 && percentage<33){
            document.getElementById("allSubResult").innerHTML = "Marks obtained: "+ total  + "\n"+percentage+"%n"+"Grade: F";
        }
        else if(percentage>=33 && percentage<50){
            document.getElementById("allSubResult").innerHTML = "Marks obtained: "+ total  + "\n"+percentage+"%n"+"Grade: F";
        }else if(percentage>=50 && percentage<60){
            document.getElementById("allSubResult").innerHTML = "Marks obtained: "+ total  + "\n"+percentage+"%n"+"Grade: F";
        }else if(percentage>=60 && percentage<80){
            document.getElementById("allSubResult").innerHTML = "Marks obtained: "+ total  + "\n"+percentage+"%n"+"Grade: F";
        }
        else if(percentage>=80 && percentage<100){
            document.getElementById("allSubResult").innerHTML = "Marks obtained: "+ total  + "\n"+percentage+"%n"+"Grade: F";
        }
        else{
            document.getElementById("allSubResult").innerHTML = message + "Marks not between 0-100"
        }
    }
}