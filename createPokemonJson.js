const fs = require("fs");

const svList = require("./svList.json");



// JSON取得関数
async function fetchJson(url) {

    const response = await fetch(url);

    if (!response.ok) {

        throw new Error(
            "取得失敗: " + url
        );
    }

    return await response.json();
}



// pokemon.json生成
async function createPokemonJson() {

    const pokemonList = [];


    // svList.jsonを順番に処理
    for (const enName of svList) {

        console.log("取得中:", enName);


        // species取得
        const species =
            await fetchJson(
                `https://pokeapi.co/api/v2/pokemon-species/${enName}`
            );


        // デフォルトフォルム取得
        const defaultVariety =
            species.varieties.find(
                item => item.is_default === true
            );


        // pokemon API URL
        const pokemonUrl =
            defaultVariety
                ? defaultVariety.pokemon.url
                : `https://pokeapi.co/api/v2/pokemon/${enName}`;


        // pokemon取得
        const pokemon =
            await fetchJson(
                pokemonUrl
            );


        // 日本語名取得
        let jaName = enName;


        const jaNameData =
            species.names.find(
                item =>
                    item.language.name === "ja"
            );


        if (jaNameData) {

            jaName =
                jaNameData.name;
        }


        // タイプ取得
        const types =
            pokemon.types.map(
                item => item.type.name
            );


        // 世代取得
        const generation =
            Number(
                species.generation.url
                    .split("/")
                    .filter(Boolean)
                    .pop()
            );


        // pokemonListへ追加
        pokemonList.push({

            ja: jaName,

            en: species.name,

            apiName: pokemon.name,

            types: types,

            generation: generation
        });
    }


    // pokemon.json保存
    fs.writeFileSync(

        "pokemon.json",

        JSON.stringify(
            pokemonList,
            null,
            2
        ),

        "utf-8"
    );


    console.log(
        "pokemon.json を作成しました"
    );

    console.log(
        pokemonList.length + "匹"
    );
}



// 実行
createPokemonJson();