function genPassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%*&ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 8;
  var password = "";

  for (var i = 0; i <= passwordLength; i++) {
    console.log(i);
    var randomNumber = Math.floor(Math.random() * chars.length);
    console.log(randomNumber);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password").value = password;
}


function copyPassword(){
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 999);
  document.execCommand("copy");
  
}