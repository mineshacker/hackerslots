function hidden(element) {
	element.classList.add("hidden");
}
function show(element) {
	element.classList.remove("hidden");
}
function radomNumber(n, n2) {
	let drawnNumber = Math.floor(Math.random() * (n - n2)) + n2;
	return drawnNumber;
}

const genInfo = () => {
	hidden(gifLoading);
	hidden(cassinoTitle);

	const htmlGenerated = `<div id="all-results">
    <div class="results">
        <div class="center icon-sides">
            <img
            />
            <h3>
                N° de Jogadas TURBO:
                <span class="number-results">${radomNumber(1, 10)}</span>
            </h3>
        </div>
        <div class="center icon-sides">
            <img
            />
            <h3>
                N° de Jogadas NORMAL:
                <span class="number-results">${radomNumber(1, 10)}</span>
            </h3>
        </div>
    </div>
    
    <button id="btnGenerator" class="btn-search">PROCURAR FALHA</button>

    <div class="title-btn2">
        <div class="center icon-sides">
            <img
                src="Images/hand-icon.png"
                alt=""
            />
            <h3>
                Clique no BOTÃO acima para gerar uma nova falha nos JOGOS
                ABAIXO
            </h3>
            <img
                src="Images/hand-icon.png"
                alt=""
                style="transform: rotate(180deg); transform: scaleX(-1)"
            />
        </div>
    </div>

    <div class="accuracy">
        <h4>CHANCES DE GANHAR</h4>
    </div>

    <div class="games">
        <div>
            <img
                src="Images/fortune-tiger.png"
                alt=""
            />
            <span>${radomNumber(98, 100)},${radomNumber(10, 100)}%</span>
        </div>
        <div>
            <img
                src="Images/fortune-dragon.png"
                alt=""
            />
            <span>${radomNumber(96, 99)},${radomNumber(10, 100)}%</span>
        </div>
        <div>
            <img
                src="Images/fortune-ox.png"
                alt=""
            />
            <span>${radomNumber(94, 96)},${radomNumber(10, 100)}%</span>
        </div>
        <div>
            <img
                src="Images/fortune-rabbit.png"
                alt=""
            />
            <span>${radomNumber(88, 94)},${radomNumber(10, 100)}%</span>
        </div>
        <div>
            <img
                src="Images/fortune-mouse.png"
                alt=""
            />
            <span>${radomNumber(85, 90)},${radomNumber(10, 100)}%</span>
        </div>
    </div>
</div>`;

	infoGen.innerHTML += htmlGenerated;
	btnGen = document.getElementById("btnGenerator");
	// btnGenNew = document.getElementById("btnNewGenerator");
	btnGen.addEventListener("click", generator);
};

let btnGen = document.getElementById("btnGenerator");
let gifLoading = document.getElementById("gif-loading");
let cassinoTitle = document.getElementById("cassino-title");
const infoGen = document.getElementById("result");

function generator() {
	gifLoading = document.getElementById("gif-loading");
	show(gifLoading);
	let gamesId = document.querySelector("#games-id");
	if (gamesId) gamesId.remove();
	let identified = document.getElementById("all-results");
	if (identified) identified.remove();
	let btnGen = document.getElementById("btnGenerator");
	if (btnGen) btnGen.remove();
	let titleBtn = document.getElementById("title-btn");
	if (titleBtn) titleBtn.remove();
	// if (h2Gen) h2Gen.remove();
	// if (scrollNames) scrollNames.remove();

	setTimeout(genInfo, 2000);
}

btnGen.addEventListener("click", generator);
