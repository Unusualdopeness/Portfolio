function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function openbutton() {
    var input = document.getElementById("saveData").value;
    var inputSave = document.getElementById("save").value;
    localStorage.setItem("name", input);
    localStorage.setItem("email", inputSave);

}

function myFunction() {
    document.getElementById("demo").style.color = "red";
}