function printText(e) {
    var text1 = document.getElementById("field1").value;
    var text2 = document.getElementById("field2").value;
    var text3 = document.getElementById("field3").value;

    var submitedText =  text1 + "\n" +
                        text2 + "\n" +
                        text3;

    document.getElementById("formtext").value = submitedText;
}
