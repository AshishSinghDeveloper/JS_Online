const courses = [{
        name: "Learn Angular",
        price: 2.1
    },
    {
        name: "Learn React",
        price: 2.9
    },
    {
        name: "Try MongoDB",
        price: 2.5
    },
    {
        name: "Learn Database",
        price: 2.2
    }
]

function generateList() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach(course => {
        const li = document.createElement("li"); //<li></li>
        li.classList.add("list-group-item"); //<li class="list-group-item"></li>
        const name = document.createTextNode(course.name);
        li.appendChild(name); //<li class="list-group-item">name</li>

        const span = document.createElement("span"); //<span></span>
        span.classList.add("float-right"); //<span class="float-right"></span>
        const price = document.createTextNode("$ " + course.price);
        span.appendChild(price); //<span class="float-right">$ price</span>

        li.appendChild(span); //<li class="list-group-item">name <span class="float-right">$ price</span></li>

        ul.appendChild(li);
    })
};

//generateList();
window.addEventListener("load", generateList);

const ascendBtn = document.querySelector(".ascend-btn");

ascendBtn.addEventListener("click", () => {
    courses.sort((a, b) => a.price - b.price)
    generateList();
});

const desendBtn = document.querySelector(".descend-btn")

desendBtn.addEventListener("click", () => {
    courses.sort((a, b) => (b.price - a.price));
    generateList();
});