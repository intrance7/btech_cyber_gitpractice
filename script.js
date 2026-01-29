const nameInput = document.querySelector("#name");
const queryBtn = document.querySelector(".btn");
const list = document.querySelector(".list");

queryBtn.addEventListener("click", function () {
    if (nameInput.value === "") return; 

    const li = document.createElement("li");
    const dlt = document.createElement("button");

    li.innerText = nameInput.value;
    dlt.innerText = "Delete";

    dlt.addEventListener("click", function () {
        list.removeChild(li);
    });

    li.appendChild(dlt);
    list.appendChild(li);

    nameInput.value = "";
});
