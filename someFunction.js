function printText(e) {
    var text1 = document.getElementById("field1").value;
    var text2 = document.getElementById("field2").value;
    var text3 = document.getElementById("field3").value;

    var submitedText = "field1" + text1 + "\n" +
                       "field2" + text2 + "\n" +
                       "field3" + text3;

    document.getElementById("formtext").value = submitedText;
}
