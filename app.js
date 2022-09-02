function addNumbers() {
    var number;
    var result = "";

    number = Number(document.getElementById("number").value);
    B= Number(document.getElementById("number1").value);

    for(var i = 1; i<= B; i++){
      result = result + "<p><u>"+number + " x " + i + " = " + number * i+"</u></p>";
    }

    document.getElementById("result").innerHTML = result;
  }