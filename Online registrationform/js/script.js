
function validate() {
  var name = document.getElementById("name");
  var uname = document.getElementById("uname");
  var pass = document.getElementById("pass");
  var cpass = document.getElementById("cpass");
  var Address = document.getElementById("Address");
 var radio1= document.getElementById("radio1");
  var radio2= document.getElementById("radio2");
  var radio3= document.getElementById("radio3");
  if (name.value == "") {
    // alert("blank user name");
    name.style.border = " solid 3px red ";
    return false;
  } else {
    // console.log(name.length); is used to find lenth of string
    name.style.border = " solid 3px black ";

  }
  if (uname.value == "") {
    uname.style.border = " solid 3px red ";
    alert("blank user name");

    return false;
  }

  if (uname.value != "") {
    uname.style.border = " solid 3px black ";
    var user = uname.value;
    for (let i = 0; i < user.length; i++) { //48,57
      if ((user.charCodeAt(i) >= 48) && (user.charCodeAt(i) <= 57)) {
        uname.style.border = " solid 3px red ";
        alert("no numbers in  user name");
        return false;
      }


    }

  } else {
    // console.log(name.length); is used to find lenth of string
    name.style.border = " solid 3px black ";
    return true;
  }
  if (pass.value == "" || (pass.value).length < 10) {
    alert("password cannot be blank or lessthan 9 charcters");
    pass.style.border = " solid 3px red ";
    return false;
  } else if ((pass.value).length > 9) {
    pass.style.border = " solid 2px black ";

    var validation = /(?=.*[A-Z].*[A-Z])(?=.*[0-9])(?=.*[$%&])(?=.*[a-z])/;
    //(?=,*[0-9])(?=,*[$%&])(?=,*[a-z])
    var valid = validation.test(pass.value);
    if (valid == false) {

      alert("Password should two capital letters,one character like $,%,& and one number");
      return false;

    } else {
     

    }


  }
  if (cpass.value != "" && cpass.value == pass.value) {

  

  } else {
    alert("password doesnot match");
    return false;
  }
  if (Address.value.length > 500) {
    Address.style.border = " solid 3px red ";
    alert("Address cannot be more than 500 charecters");

    return false;
  }
  if(radio1.checked==true){
 
  }
  else if(radio2.checked==true){
     //do nothing
  }
  else if(radio3.checked==true){
//do nothing
  }
  else {
    alert("please select the gender")
    return false;
  }
  return true;

}


