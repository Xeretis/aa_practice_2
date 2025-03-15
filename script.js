const container = document.getElementById("container");

let data = [];

// Api kulcs: api-key-12345
fetch("https://aa-api.bluemin.de/todos", {
    headers: {
        "X-API-Key": "api-key-12345",
    },
}).then((res) =>
    res.json().then((resData) => {
        data = resData;
        renderData();
    })
);

const urlap = document.getElementById("urlap");

const query = new URLSearchParams();

const szovegmezo = document.getElementById("szovegmozo");
const pipa = document.getElementById("pipa");

szovegmezo.addEventListener("input", (e) => {
    query.set("title", e.currentTarget.value);
});

pipa.addEventListener("input", (e) => {
    if (e.currentTarget.checked == false) {
        query.delete("isCompleted");
    } else {
        query.set("isCompleted", e.currentTarget.checked);
    }
});

urlap.addEventListener("submit", (e) => {
    e.preventDefault();

    fetch("https://aa-api.bluemin.de/todos?" + query.toString(), {
        headers: {
            "X-API-Key": "api-key-12345",
        },
    }).then((res) =>
        res.json().then((resData) => {
            data = resData;
            renderData();
        })
    );
});

function renderData() {
    container.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        const card = document.createElement("div");

        card.classList.add("card");
        card.textContent = data[i].title;

        container.appendChild(card);
    }
}
