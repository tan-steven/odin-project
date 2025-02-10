const ul = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");

let val = '';
function store(e){
    let val = input.value;
    console.log(val);
    input.value = '';
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.appendChild(span);
    span.textContent = val;
    li.appendChild(button);
    button.textContent = "Delete";
    ul.appendChild(li);

    button.addEventListener("click", ()=>{
        ul.removeChild(li);
    });
    input.focus();
}
btn.addEventListener("click", store);



