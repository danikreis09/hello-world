function myTrim(x) {
  if (x) {
    return x.replace("try again");
  }
}


function myFunction() {
  var str = myTrim("Congratulations won");
  alert(str);
}
