var stringers=[3, "Jerry", "Sandy", 4, "Pepper", 15, "Jocastah", 12];
var container = document.querySelector(".container");

for (var item of stringers){
    var divElem = document.createElement("div");
    divElem.className = "line";

    if (typeof(item) === "number"){
        if (item < 10){
            divElem.innerHTML = "The value is "+item+" and it is below 10.";
        }else if (item === 15) {
            divElem.innerHTML = "The value is exactly 15.";

        }else{
            divElem.innerHTML = "The value is "+item+" and it is normal.";
        }
    }else if (typeof(item) === "string" && item.length > 5){
        divElem.innerHTML = "The value is "+item+" and the character length is more than 5";
    }else{
        divElem.innerHTML = "The value is " +item+" and it is normal.";
    }
        divElem.addEventListener("click", function(e){
            e.target.classList.add("clicked");
        });
    container.appendChild(divElem);
}

