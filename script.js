let pokemonData = [];

let selectedPokemon = null;

let chart;



// pokemon.json 読み込み
async function loadPokemonData() {

    try {

        const response =
            await fetch("pokemon.json");


        if (!response.ok) {

            throw new Error(
                "pokemon.json が読み込めません"
            );
        }


        pokemonData =
            await response.json();


        console.log(
            "pokemon.json 読み込み成功"
        );

        console.log(pokemonData);
    }

    catch (error) {

        console.log(error);

        alert(
            "pokemon.json の読み込み失敗"
        );
    }
}

function showSuggestions() {
    const inputName = document
        .getElementById("name")
        .value
        .trim();

    const suggestionArea =
        document.getElementById("suggestionArea");

    suggestionArea.innerHTML = "";

    if (inputName === "") {
        return;
    }

    const suggestions = pokemonData
        .filter(pokemon =>
            pokemon.ja.includes(inputName) ||
            pokemon.en.includes(inputName.toLowerCase())
        )
        .slice(0, 5);

    for (const pokemon of suggestions) {
        const div = document.createElement("div");

        div.className = "suggestion";

        div.innerText = `${pokemon.ja} / ${pokemon.en}`;

        div.onclick = function () {
            document.getElementById("name").value = pokemon.ja;
            suggestionArea.innerHTML = "";
            getPokemon();
        };

        suggestionArea.appendChild(div);
    }
}

// ポケモン取得
async function getPokemon() {

    try {

        const inputName =
            document
                .getElementById("name")
                .value
                .trim();


        // 空チェック
        if (inputName === "") {

            alert(
                "ポケモン名を入力してください"
            );

            return;
        }


        const inputLower =
            inputName.toLowerCase();


        // pokemon.json検索
        const pokemon =
            pokemonData.find(

                p =>

                    p.ja === inputName ||

                    p.en === inputLower ||

                    p.apiName === inputLower
            );


        // 見つからない
        if (!pokemon) {

            alert(
                "ポケモンが見つかりません"
            );

            return;
        }


        console.log(
            "見つかったポケモン",
            pokemon
        );


        selectedPokemon = pokemon;


        // API名
        const apiName =
            pokemon.apiName || pokemon.en;


        // PokeAPI取得
        const response =
            await fetch(
                `https://pokeapi.co/api/v2/pokemon/${apiName}`
            );


        if (!response.ok) {

            throw new Error(
                "PokeAPI取得失敗"
            );
        }


        const data =
            await response.json();


        console.log(
            "PokeAPI取得成功",
            data
        );


        // 画像表示
        document
            .getElementById("pokemonImage")
            .src =
                data.sprites.front_default;


        // 安全化
        const types =
            Array.isArray(
                pokemon.types
            )
                ? pokemon.types
                : [];


        const generation =
            pokemon.generation || "?";


        // 情報表示
        document
            .getElementById("pokemonInfo")
            .innerText =

            `${pokemon.ja}
             / ${pokemon.en}
             / タイプ: ${types.join(", ")}
             / 第${generation}世代`;


        console.log(
            "取得成功"
        );
    }

    catch (error) {

        console.log(
            "エラー内容",
            error
        );

        alert(
            error.message
        );
    }
}



// ジャッジ判定
function judgeText(iv) {

    if (iv === 31) {

        return {

            text: "さいこう！",

            className: "best"
        };
    }

    else if (iv >= 30) {

        return {

            text: "すばらしい！",

            className: "good"
        };
    }

    else if (iv >= 20) {

        return {

            text: "かなりいい！",

            className: "normal"
        };
    }

    else if (iv >= 1) {

        return {

            text: "ダメかも",

            className: "bad"
        };
    }

    else {

        return {

            text: "逆V！",

            className: "low"
        };
    }
}



// 個体値取得
function getIVValues() {

    const hp =
        Number(
            document.getElementById("hp").value
        );

    const atk =
        Number(
            document.getElementById("atk").value
        );

    const def =
        Number(
            document.getElementById("def").value
        );

    const spa =
        Number(
            document.getElementById("spa").value
        );

    const spd =
        Number(
            document.getElementById("spd").value
        );

    const spe =
        Number(
            document.getElementById("spe").value
        );


    return [
        hp,
        atk,
        def,
        spa,
        spd,
        spe
    ];
}



// 入力チェック
function validateIVValues(values) {

    for (const value of values) {

        if (

            Number.isNaN(value) ||

            value < 0 ||

            value > 31
        ) {

            return false;
        }
    }

    return true;
}



// 個体値判定
function checkIV() {

    const name =
        document
            .getElementById("name")
            .value
            .trim();


    const values =
        getIVValues();


    if (!validateIVValues(values)) {

        alert(
            "個体値は0〜31"
        );

        return;
    }


    const labels = [

        "HP",

        "攻撃",

        "防御",

        "特攻",

        "特防",

        "素早さ"
    ];


    let vCount = 0;


    for (const value of values) {

        if (value === 31) {

            vCount++;
        }
    }


    let result = "";

    let comment = "";


    // V判定
    if (vCount === 6) {

        result = "✨ 6V";

        comment =
            "理想個体です！";
    }

    else if (vCount === 5) {

        result = "⭐ 5V";

        comment =
            "かなり優秀！";
    }

    else {

        result =
            `${vCount}V`;

        comment =
            "厳選継続推奨";
    }


    // A0
    if (values[1] === 0) {

        result += " A0";

        comment +=
            " 特殊アタッカー向き";
    }


    // S0
    if (values[5] === 0) {

        result += " S0";

        comment +=
            " トリル適性";
    }


    // 結果表示
    document
        .getElementById("rank")
        .innerText =

        `${name} ${result}`;


    document
        .getElementById("comment")
        .innerText =
            comment;


    // ジャッジUI
    let html = "";


    for (let i = 0; i < values.length; i++) {

        const judge =
            judgeText(values[i]);


        html += `

        <div class="judge ${judge.className}">
            ${labels[i]} :
            ${values[i]} /
            ${judge.text}
        </div>

        `;
    }


    document
        .getElementById("judgeArea")
        .innerHTML =
            html;


    // レーダーチャート
    drawRadarChart(
        values,
        labels
    );
}



// レーダーチャート
function drawRadarChart(values, labels) {

    const ctx =
        document.getElementById("radarChart");


    // 既存削除
    if (chart) {

        chart.destroy();
    }


    chart = new Chart(ctx, {

        type: "radar",

        data: {

            labels: labels,

            datasets: [{

                label: "個体値",

                data: values
            }]
        },

        options: {

            scales: {

                r: {

                    min: 0,

                    max: 31
                }
            }
        }
    });
}



// 保存
function savePokemon() {

    const rank =
        document
            .getElementById("rank")
            .innerText;


    if (rank === "") {

        alert(
            "先に判定してください"
        );

        return;
    }


    const savedList =

        JSON.parse(
            localStorage.getItem(
                "savedPokemon"
            )
        ) || [];


    savedList.push({

        rank: rank,

        date:
            new Date()
                .toLocaleString()
    });


    localStorage.setItem(

        "savedPokemon",

        JSON.stringify(savedList)
    );


    showSavedPokemon();
}



// 保存一覧表示
function showSavedPokemon() {

    const savedList =

        JSON.parse(
            localStorage.getItem(
                "savedPokemon"
            )
        ) || [];


    const saveList =
        document.getElementById("saveList");


    saveList.innerHTML = "";


    for (const item of savedList) {

        const li =
            document.createElement("li");


        li.innerText =

            `${item.rank}
             / ${item.date}`;


        saveList.appendChild(li);
    }
}



// OCR
document
    .getElementById("imageInput")
    .addEventListener(
        "change",
        readImage
    );



// OCR読み取り
async function readImage(event) {

    const file =
        event.target.files[0];


    if (!file) {

        return;
    }


    alert(
        "OCR読み取り中..."
    );


    const result =
        await Tesseract.recognize(
            file,
            "jpn"
        );


    const text =
        result.data.text;


    console.log(text);


    // 数字抽出
    const numbers =
        text.match(/\d+/g);


    if (

        !numbers ||

        numbers.length < 6
    ) {

        alert(
            "個体値を読み取れません"
        );

        return;
    }


    document
        .getElementById("hp")
        .value = numbers[0];

    document
        .getElementById("atk")
        .value = numbers[1];

    document
        .getElementById("def")
        .value = numbers[2];

    document
        .getElementById("spa")
        .value = numbers[3];

    document
        .getElementById("spd")
        .value = numbers[4];

    document
        .getElementById("spe")
        .value = numbers[5];


    alert(
        "OCR読み取り完了"
    );
}



// 起動時
loadPokemonData();

showSavedPokemon();