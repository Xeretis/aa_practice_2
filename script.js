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

let keresendoSzoveg = "";

const szovegmezo = document.getElementById("szovegmozo");

szovegmezo.addEventListener("input", (e) => {
    keresendoSzoveg = e.currentTarget.value;
});

urlap.addEventListener("submit", (e) => {
    e.preventDefault();

    fetch(
        "https://aa-api.bluemin.de/todos?title=" +
            keresendoSzoveg +
            "&valamimas=" +
            keresendoSzoveg,
        {
            headers: {
                "X-API-Key": "api-key-12345",
            },
        }
    ).then((res) =>
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
