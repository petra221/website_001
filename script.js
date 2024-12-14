function addMovie(){

    var movieTitle = document.getElementById("inputTitle").value;
    var movieYear = document.getElementById("inputYear").value;
    var movieActors = document.getElementById("inputActors").value;

    if (movieTitle =="" || movieYear=="" || movieActors=="")
    {
        alert("nie wszstkie pola sa wypelnione");
        return;
    }

    var li = document.createElement("li");
    li.innerHTML = "<input type='checkbox'> " + movieTitle + ", " + movieYear + ", " + movieActors;
    document.getElementById("movieList").appendChild(li);

    var form1 = document.getElementsByClassName("form1")
    form1.reset()
}


function delMovie(){
    var checkedBoxes = document.querySelectorAll("input[type='checkbox']:checked");
    for(var i=0; i<checkedBoxes.length; i++){
        document.getElementById("movieList").removeChild(checkedBoxes[i].parentNode)
    }        
}