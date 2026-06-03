// 役割別 個体値評価 完全版

let pokemonData = [];
let selectedPokemon = null;
let chart;

// 役割設定
const pokemonRoles = {
    "フシギダネ": "balanced",
    "bulbasaur": "balanced",

    "フシギソウ": "balanced",
    "ivysaur": "balanced",

    "フシギバナ": "special_attacker",
    "venusaur": "special_attacker",

    "ヒトカゲ": "special_attacker",
    "charmander": "special_attacker",

    "リザード": "special_attacker",
    "charmeleon": "special_attacker",

    "リザードン": "special_attacker",
    "charizard": "special_attacker",

    "ゼニガメ": "slow_tank",
    "squirtle": "slow_tank",

    "カメール": "slow_tank",
    "wartortle": "slow_tank",

    "カメックス": "slow_tank",
    "blastoise": "slow_tank",

    "キャタピー": "balanced",
    "caterpie": "balanced",

    "トランセル": "slow_tank",
    "metapod": "slow_tank",

    "バタフリー": "special_attacker",
    "butterfree": "special_attacker",

    "ビードル": "balanced",
    "weedle": "balanced",

    "コクーン": "slow_tank",
    "kakuna": "slow_tank",

    "スピアー": "physical_attacker",
    "beedrill": "physical_attacker",

    "ポッポ": "physical_attacker",
    "pidgey": "physical_attacker",

    "ピジョン": "physical_attacker",
    "pidgeotto": "physical_attacker",

    "ピジョット": "physical_attacker",
    "pidgeot": "physical_attacker",

    "コラッタ": "physical_attacker",
    "rattata": "physical_attacker",

    "ラッタ": "physical_attacker",
    "raticate": "physical_attacker",

    "オニスズメ": "physical_attacker",
    "spearow": "physical_attacker",

    "オニドリル": "physical_attacker",
    "fearow": "physical_attacker",

    "アーボ": "physical_attacker",
    "ekans": "physical_attacker",

    "アーボック": "physical_attacker",
    "arbok": "physical_attacker",

    "ピカチュウ": "special_attacker",
    "pikachu": "special_attacker",

    "ライチュウ": "special_attacker",
    "raichu": "special_attacker",

    "サンド": "physical_attacker",
    "sandshrew": "physical_attacker",

    "サンドパン": "physical_attacker",
    "sandslash": "physical_attacker",

    "ニドラン♀": "physical_attacker",
    "nidoran-f": "physical_attacker",

    "ニドリーナ": "physical_attacker",
    "nidorina": "physical_attacker",

    "ニドクイン": "slow_tank",
    "nidoqueen": "slow_tank",

    "ニドラン♂": "physical_attacker",
    "nidoran-m": "physical_attacker",

    "ニドリーノ": "physical_attacker",
    "nidorino": "physical_attacker",

    "ニドキング": "physical_attacker",
    "nidoking": "physical_attacker",

    "ピッピ": "slow_tank",
    "clefairy": "slow_tank",

    "ピクシー": "slow_tank",
    "clefable": "slow_tank",

    "ロコン": "special_attacker",
    "vulpix": "special_attacker",

    "キュウコン": "special_attacker",
    "ninetales": "special_attacker",

    "プリン": "slow_tank",
    "jigglypuff": "slow_tank",

    "プクリン": "slow_tank",
    "wigglytuff": "slow_tank",

    "ズバット": "physical_attacker",
    "zubat": "physical_attacker",

    "ゴルバット": "physical_attacker",
    "golbat": "physical_attacker",

    "ナゾノクサ": "special_attacker",
    "oddish": "special_attacker",

    "クサイハナ": "special_attacker",
    "gloom": "special_attacker",

    "ラフレシア": "special_attacker",
    "vileplume": "special_attacker",

        "パラス": "physical_attacker",
    "paras": "physical_attacker",

    "パラセクト": "trick_room",
    "parasect": "trick_room",

    "コンパン": "special_attacker",
    "venonat": "special_attacker",

    "モルフォン": "special_attacker",
    "venomoth": "special_attacker",

    "ディグダ": "physical_attacker",
    "diglett": "physical_attacker",

    "ダグトリオ": "physical_attacker",
    "dugtrio": "physical_attacker",

    "ニャース": "physical_attacker",
    "meowth": "physical_attacker",

    "ペルシアン": "physical_attacker",
    "persian": "physical_attacker",

    "コダック": "special_attacker",
    "psyduck": "special_attacker",

    "ゴルダック": "special_attacker",
    "golduck": "special_attacker",

    "マンキー": "physical_attacker",
    "mankey": "physical_attacker",

    "オコリザル": "physical_attacker",
    "primeape": "physical_attacker",

    "ガーディ": "physical_attacker",
    "growlithe": "physical_attacker",

    "ウインディ": "physical_attacker",
    "arcanine": "physical_attacker",

    "ニョロモ": "special_attacker",
    "poliwag": "special_attacker",

    "ニョロゾ": "balanced",
    "poliwhirl": "balanced",

    "ニョロボン": "physical_attacker",
    "poliwrath": "physical_attacker",

    "ケーシィ": "special_attacker",
    "abra": "special_attacker",

    "ユンゲラー": "special_attacker",
    "kadabra": "special_attacker",

    "フーディン": "special_attacker",
    "alakazam": "special_attacker",

    "ワンリキー": "physical_attacker",
    "machop": "physical_attacker",

    "ゴーリキー": "physical_attacker",
    "machoke": "physical_attacker",

    "カイリキー": "physical_attacker",
    "machamp": "physical_attacker",

    "マダツボミ": "physical_attacker",
    "bellsprout": "physical_attacker",

    "ウツドン": "physical_attacker",
    "weepinbell": "physical_attacker",

    "ウツボット": "physical_attacker",
    "victreebel": "physical_attacker",

    "メノクラゲ": "special_attacker",
    "tentacool": "special_attacker",

    "ドククラゲ": "special_attacker",
    "tentacruel": "special_attacker",

    "イシツブテ": "trick_room",
    "geodude": "trick_room",

    "ゴローン": "trick_room",
    "graveler": "trick_room",

    "ゴローニャ": "trick_room",
    "golem": "trick_room",

    "ポニータ": "physical_attacker",
    "ponyta": "physical_attacker",

    "ギャロップ": "physical_attacker",
    "rapidash": "physical_attacker",

    "ヤドン": "trick_room",
    "slowpoke": "trick_room",

    "ヤドラン": "slow_tank",
    "slowbro": "slow_tank",

    "コイル": "special_attacker",
    "magnemite": "special_attacker",

    "レアコイル": "special_attacker",
    "magneton": "special_attacker",

    "カモネギ": "physical_attacker",
    "farfetchd": "physical_attacker",

    "ドードー": "physical_attacker",
    "doduo": "physical_attacker",

    "ドードリオ": "physical_attacker",
    "dodrio": "physical_attacker",

    "パウワウ": "slow_tank",
    "seel": "slow_tank",

    "ジュゴン": "slow_tank",
    "dewgong": "slow_tank",

    "ベトベター": "slow_tank",
    "grimer": "slow_tank",

    "ベトベトン": "slow_tank",
    "muk": "slow_tank",

    "シェルダー": "physical_attacker",
    "shellder": "physical_attacker",

    "パルシェン": "physical_attacker",
    "cloyster": "physical_attacker",

    "ゴース": "special_attacker",
    "gastly": "special_attacker",

    "ゴースト": "special_attacker",
    "haunter": "special_attacker",

    "ゲンガー": "special_attacker",
    "gengar": "special_attacker",

    "イワーク": "slow_tank",
    "onix": "slow_tank",

    "スリープ": "slow_tank",
    "drowzee": "slow_tank",

    "スリーパー": "slow_tank",
    "hypno": "slow_tank",

    "クラブ": "physical_attacker",
    "krabby": "physical_attacker",

    "キングラー": "physical_attacker",
    "kingler": "physical_attacker",

    "ビリリダマ": "special_attacker",
    "voltorb": "special_attacker",

    "マルマイン": "special_attacker",
    "electrode": "special_attacker",

    "タマタマ": "trick_room",
    "exeggcute": "trick_room",

    "ナッシー": "trick_room",
    "exeggutor": "trick_room",

        "カラカラ": "physical_attacker",
    "cubone": "physical_attacker",

    "ガラガラ": "trick_room",
    "marowak": "trick_room",

    "サワムラー": "physical_attacker",
    "hitmonlee": "physical_attacker",

    "エビワラー": "physical_attacker",
    "hitmonchan": "physical_attacker",

    "ベロリンガ": "slow_tank",
    "lickitung": "slow_tank",

    "ドガース": "slow_tank",
    "koffing": "slow_tank",

    "マタドガス": "slow_tank",
    "weezing": "slow_tank",

    "サイホーン": "trick_room",
    "rhyhorn": "trick_room",

    "サイドン": "trick_room",
    "rhydon": "trick_room",

    "ラッキー": "slow_tank",
    "chansey": "slow_tank",

    "モンジャラ": "slow_tank",
    "tangela": "slow_tank",

    "ガルーラ": "physical_attacker",
    "kangaskhan": "physical_attacker",

    "タッツー": "special_attacker",
    "horsea": "special_attacker",

    "シードラ": "special_attacker",
    "seadra": "special_attacker",

    "トサキント": "physical_attacker",
    "goldeen": "physical_attacker",

    "アズマオウ": "physical_attacker",
    "seaking": "physical_attacker",

    "ヒトデマン": "special_attacker",
    "staryu": "special_attacker",

    "スターミー": "special_attacker",
    "starmie": "special_attacker",

    "バリヤード": "special_attacker",
    "mr-mime": "special_attacker",

    "ストライク": "physical_attacker",
    "scyther": "physical_attacker",

    "ルージュラ": "special_attacker",
    "jynx": "special_attacker",

    "エレブー": "special_attacker",
    "electabuzz": "special_attacker",

    "ブーバー": "special_attacker",
    "magmar": "special_attacker",

    "カイロス": "physical_attacker",
    "pinsir": "physical_attacker",

    "ケンタロス": "physical_attacker",
    "tauros": "physical_attacker",

    "コイキング": "physical_attacker",
    "magikarp": "physical_attacker",

    "ギャラドス": "physical_attacker",
    "gyarados": "physical_attacker",

    "ラプラス": "slow_tank",
    "lapras": "slow_tank",

    "メタモン": "balanced",
    "ditto": "balanced",

    "イーブイ": "balanced",
    "eevee": "balanced",

    "シャワーズ": "slow_tank",
    "vaporeon": "slow_tank",

    "サンダース": "special_attacker",
    "jolteon": "special_attacker",

    "ブースター": "physical_attacker",
    "flareon": "physical_attacker",

    "ポリゴン": "special_attacker",
    "porygon": "special_attacker",

    "オムナイト": "special_attacker",
    "omanyte": "special_attacker",

    "オムスター": "special_attacker",
    "omastar": "special_attacker",

    "カブト": "physical_attacker",
    "kabuto": "physical_attacker",

    "カブトプス": "physical_attacker",
    "kabutops": "physical_attacker",

    "プテラ": "physical_attacker",
    "aerodactyl": "physical_attacker",

    "カビゴン": "slow_tank",
    "snorlax": "slow_tank",

    "フリーザー": "slow_tank",
    "articuno": "slow_tank",

    "サンダー": "special_attacker",
    "zapdos": "special_attacker",

    "ファイヤー": "special_attacker",
    "moltres": "special_attacker",

    "ミニリュウ": "physical_attacker",
    "dratini": "physical_attacker",

    "ハクリュー": "physical_attacker",
    "dragonair": "physical_attacker",

    "カイリュー": "physical_attacker",
    "dragonite": "physical_attacker",

    "ミュウツー": "special_attacker",
    "mewtwo": "special_attacker",

    "ミュウ": "balanced",
    "mew": "balanced",

        "チコリータ": "balanced",
    "chikorita": "balanced",

    "ベイリーフ": "balanced",
    "bayleef": "balanced",

    "メガニウム": "slow_tank",
    "meganium": "slow_tank",

    "ヒノアラシ": "special_attacker",
    "cyndaquil": "special_attacker",

    "マグマラシ": "special_attacker",
    "quilava": "special_attacker",

    "バクフーン": "special_attacker",
    "typhlosion": "special_attacker",

    "ワニノコ": "physical_attacker",
    "totodile": "physical_attacker",

    "アリゲイツ": "physical_attacker",
    "croconaw": "physical_attacker",

    "オーダイル": "physical_attacker",
    "feraligatr": "physical_attacker",

    "オタチ": "physical_attacker",
    "sentret": "physical_attacker",

    "オオタチ": "physical_attacker",
    "furret": "physical_attacker",

    "ホーホー": "slow_tank",
    "hoothoot": "slow_tank",

    "ヨルノズク": "slow_tank",
    "noctowl": "slow_tank",

    "レディバ": "balanced",
    "ledyba": "balanced",

    "レディアン": "balanced",
    "ledian": "balanced",

    "イトマル": "physical_attacker",
    "spinarak": "physical_attacker",

    "アリアドス": "physical_attacker",
    "ariados": "physical_attacker",

    "クロバット": "physical_attacker",
    "crobat": "physical_attacker",

    "チョンチー": "special_attacker",
    "chinchou": "special_attacker",

    "ランターン": "slow_tank",
    "lanturn": "slow_tank",

    "ピチュー": "special_attacker",
    "pichu": "special_attacker",

    "ピィ": "slow_tank",
    "cleffa": "slow_tank",

    "ププリン": "slow_tank",
    "igglybuff": "slow_tank",

    "トゲピー": "slow_tank",
    "togepi": "slow_tank",

    "トゲチック": "slow_tank",
    "togetic": "slow_tank",

    "ネイティ": "special_attacker",
    "natu": "special_attacker",

    "ネイティオ": "special_attacker",
    "xatu": "special_attacker",

    "メリープ": "special_attacker",
    "mareep": "special_attacker",

    "モココ": "special_attacker",
    "flaaffy": "special_attacker",

    "デンリュウ": "special_attacker",
    "ampharos": "special_attacker",

    "キレイハナ": "special_attacker",
    "bellossom": "special_attacker",

    "マリル": "slow_tank",
    "marill": "slow_tank",

    "マリルリ": "physical_attacker",
    "azumarill": "physical_attacker",

    "ウソッキー": "trick_room",
    "sudowoodo": "trick_room",

    "ニョロトノ": "slow_tank",
    "politoed": "slow_tank",

    "ハネッコ": "balanced",
    "hoppip": "balanced",

    "ポポッコ": "balanced",
    "skiploom": "balanced",

    "ワタッコ": "special_attacker",
    "jumpluff": "special_attacker",

    "エイパム": "physical_attacker",
    "aipom": "physical_attacker",

    "ヒマナッツ": "balanced",
    "sunkern": "balanced",

    "キマワリ": "special_attacker",
    "sunflora": "special_attacker",

    "ヤンヤンマ": "special_attacker",
    "yanma": "special_attacker",

    "ウパー": "slow_tank",
    "wooper": "slow_tank",

    "ヌオー": "slow_tank",
    "quagsire": "slow_tank",

    "エーフィ": "special_attacker",
    "espeon": "special_attacker",

    "ブラッキー": "slow_tank",
    "umbreon": "slow_tank",

    "ヤミカラス": "physical_attacker",
    "murkrow": "physical_attacker",

    "ヤドキング": "slow_tank",
    "slowking": "slow_tank",

    "ムウマ": "special_attacker",
    "misdreavus": "special_attacker",

    "アンノーン": "special_attacker",
    "unown": "special_attacker",

    "ソーナンス": "slow_tank",
    "wobbuffet": "slow_tank",

    "キリンリキ": "balanced",
    "girafarig": "balanced",

    "クヌギダマ": "slow_tank",
    "pineco": "slow_tank",

    "フォレトス": "slow_tank",
    "forretress": "slow_tank",

    "ノコッチ": "slow_tank",
    "dunsparce": "slow_tank",

    "グライガー": "physical_attacker",
    "gligar": "physical_attacker",

    "ハガネール": "slow_tank",
    "steelix": "slow_tank",

    "ブルー": "physical_attacker",
    "snubbull": "physical_attacker",

    "グランブル": "physical_attacker",
    "granbull": "physical_attacker",

    "ハリーセン": "physical_attacker",
    "qwilfish": "physical_attacker",

    "ハッサム": "physical_attacker",
    "scizor": "physical_attacker",

    "ツボツボ": "slow_tank",
    "shuckle": "slow_tank",

    "ヘラクロス": "physical_attacker",
    "heracross": "physical_attacker",

    "ニューラ": "physical_attacker",
    "sneasel": "physical_attacker",

        "ヒメグマ": "physical_attacker",
    "teddiursa": "physical_attacker",

    "リングマ": "physical_attacker",
    "ursaring": "physical_attacker",

    "マグマッグ": "special_attacker",
    "slugma": "special_attacker",

    "マグカルゴ": "slow_tank",
    "magcargo": "slow_tank",

    "ウリムー": "physical_attacker",
    "swinub": "physical_attacker",

    "イノムー": "physical_attacker",
    "piloswine": "physical_attacker",

    "サニーゴ": "slow_tank",
    "corsola": "slow_tank",

    "テッポウオ": "special_attacker",
    "remoraid": "special_attacker",

    "オクタン": "special_attacker",
    "octillery": "special_attacker",

    "デリバード": "balanced",
    "delibird": "balanced",

    "マンタイン": "slow_tank",
    "mantine": "slow_tank",

    "エアームド": "slow_tank",
    "skarmory": "slow_tank",

    "デルビル": "special_attacker",
    "houndour": "special_attacker",

    "ヘルガー": "special_attacker",
    "houndoom": "special_attacker",

    "キングドラ": "special_attacker",
    "kingdra": "special_attacker",

    "ゴマゾウ": "physical_attacker",
    "phanpy": "physical_attacker",

    "ドンファン": "physical_attacker",
    "donphan": "physical_attacker",

    "ポリゴン2": "slow_tank",
    "porygon2": "slow_tank",

    "オドシシ": "balanced",
    "stantler": "balanced",

    "ドーブル": "balanced",
    "smeargle": "balanced",

    "バルキー": "balanced",
    "tyrogue": "balanced",

    "カポエラー": "physical_attacker",
    "hitmontop": "physical_attacker",

    "ムチュール": "special_attacker",
    "smoochum": "special_attacker",

    "エレキッド": "special_attacker",
    "elekid": "special_attacker",

    "ブビィ": "special_attacker",
    "magby": "special_attacker",

    "ミルタンク": "slow_tank",
    "miltank": "slow_tank",

    "ハピナス": "slow_tank",
    "blissey": "slow_tank",

    "ライコウ": "special_attacker",
    "raikou": "special_attacker",

    "エンテイ": "physical_attacker",
    "entei": "physical_attacker",

    "スイクン": "slow_tank",
    "suicune": "slow_tank",

    "ヨーギラス": "physical_attacker",
    "larvitar": "physical_attacker",

    "サナギラス": "physical_attacker",
    "pupitar": "physical_attacker",

    "バンギラス": "physical_attacker",
    "tyranitar": "physical_attacker",

    "ルギア": "slow_tank",
    "lugia": "slow_tank",

    "ホウオウ": "physical_attacker",
    "ho-oh": "physical_attacker",

    "セレビィ": "balanced",
    "celebi": "balanced",

    "キモリ": "special_attacker",
    "treecko": "special_attacker",

    "ジュプトル": "special_attacker",
    "grovyle": "special_attacker",

    "ジュカイン": "special_attacker",
    "sceptile": "special_attacker",

    "アチャモ": "physical_attacker",
    "torchic": "physical_attacker",

    "ワカシャモ": "physical_attacker",
    "combusken": "physical_attacker",

    "バシャーモ": "physical_attacker",
    "blaziken": "physical_attacker",

    "ミズゴロウ": "physical_attacker",
    "mudkip": "physical_attacker",

    "ヌマクロー": "physical_attacker",
    "marshtomp": "physical_attacker",

    "ラグラージ": "slow_tank",
    "swampert": "slow_tank",

    "ポチエナ": "physical_attacker",
    "poochyena": "physical_attacker",

    "グラエナ": "physical_attacker",
    "mightyena": "physical_attacker",

    "ジグザグマ": "physical_attacker",
    "zigzagoon": "physical_attacker",

    "マッスグマ": "physical_attacker",
    "linoone": "physical_attacker",

    "ケムッソ": "balanced",
    "wurmple": "balanced",

    "カラサリス": "slow_tank",
    "silcoon": "slow_tank",

    "アゲハント": "special_attacker",
    "beautifly": "special_attacker",

    "マユルド": "slow_tank",
    "cascoon": "slow_tank",

    "ドクケイル": "special_attacker",
    "dustox": "special_attacker",

        "ハスボー": "special_attacker",
    "lotad": "special_attacker",

    "ハスブレロ": "special_attacker",
    "lombre": "special_attacker",

    "ルンパッパ": "special_attacker",
    "ludicolo": "special_attacker",

    "タネボー": "physical_attacker",
    "seedot": "physical_attacker",

    "コノハナ": "physical_attacker",
    "nuzleaf": "physical_attacker",

    "ダーテング": "physical_attacker",
    "shiftry": "physical_attacker",

    "スバメ": "physical_attacker",
    "taillow": "physical_attacker",

    "オオスバメ": "physical_attacker",
    "swellow": "physical_attacker",

    "キャモメ": "special_attacker",
    "wingull": "special_attacker",

    "ペリッパー": "slow_tank",
    "pelipper": "slow_tank",

    "ラルトス": "special_attacker",
    "ralts": "special_attacker",

    "キルリア": "special_attacker",
    "kirlia": "special_attacker",

    "サーナイト": "special_attacker",
    "gardevoir": "special_attacker",

    "アメタマ": "special_attacker",
    "surskit": "special_attacker",

    "アメモース": "special_attacker",
    "masquerain": "special_attacker",

    "キノココ": "physical_attacker",
    "shroomish": "physical_attacker",

    "キノガッサ": "physical_attacker",
    "breloom": "physical_attacker",

    "ナマケロ": "balanced",
    "slakoth": "balanced",

    "ヤルキモノ": "physical_attacker",
    "vigoroth": "physical_attacker",

    "ケッキング": "physical_attacker",
    "slaking": "physical_attacker",

    "ツチニン": "physical_attacker",
    "nincada": "physical_attacker",

    "テッカニン": "physical_attacker",
    "ninjask": "physical_attacker",

    "ヌケニン": "balanced",
    "shedinja": "balanced",

    "ゴニョニョ": "balanced",
    "whismur": "balanced",

    "ドゴーム": "balanced",
    "loudred": "balanced",

    "バクオング": "special_attacker",
    "exploud": "special_attacker",

    "マクノシタ": "physical_attacker",
    "makuhita": "physical_attacker",

    "ハリテヤマ": "physical_attacker",
    "hariyama": "physical_attacker",

    "ルリリ": "slow_tank",
    "azurill": "slow_tank",

    "ノズパス": "slow_tank",
    "nosepass": "slow_tank",

    "エネコ": "balanced",
    "skitty": "balanced",

    "エネコロロ": "balanced",
    "delcatty": "balanced",

    "ヤミラミ": "slow_tank",
    "sableye": "slow_tank",

    "クチート": "physical_attacker",
    "mawile": "physical_attacker",

    "ココドラ": "physical_attacker",
    "aron": "physical_attacker",

    "コドラ": "physical_attacker",
    "lairon": "physical_attacker",

    "ボスゴドラ": "slow_tank",
    "aggron": "slow_tank",

    "アサナン": "physical_attacker",
    "meditite": "physical_attacker",

    "チャーレム": "physical_attacker",
    "medicham": "physical_attacker",

    "ラクライ": "special_attacker",
    "electrike": "special_attacker",

    "ライボルト": "special_attacker",
    "manectric": "special_attacker",

    "プラスル": "special_attacker",
    "plusle": "special_attacker",

    "マイナン": "special_attacker",
    "minun": "special_attacker",

    "バルビート": "balanced",
    "volbeat": "balanced",

    "イルミーゼ": "balanced",
    "illumise": "balanced",

    "ロゼリア": "special_attacker",
    "roselia": "special_attacker",

    "ゴクリン": "slow_tank",
    "gulpin": "slow_tank",

    "マルノーム": "slow_tank",
    "swalot": "slow_tank",

    "キバニア": "physical_attacker",
    "carvanha": "physical_attacker",

    "サメハダー": "physical_attacker",
    "sharpedo": "physical_attacker",

    "ホエルコ": "slow_tank",
    "wailmer": "slow_tank",

    "ホエルオー": "slow_tank",
    "wailord": "slow_tank",

    "ドンメル": "trick_room",
    "numel": "trick_room",

    "バクーダ": "trick_room",
    "camerupt": "trick_room",

    "コータス": "trick_room",
    "torkoal": "trick_room",

    "バネブー": "special_attacker",
    "spoink": "special_attacker",

    "ブーピッグ": "special_attacker",
    "grumpig": "special_attacker",

    "パッチール": "balanced",
    "spinda": "balanced",

    "ナックラー": "physical_attacker",
    "trapinch": "physical_attacker",

    "ビブラーバ": "physical_attacker",
    "vibrava": "physical_attacker",

    "フライゴン": "physical_attacker",
    "flygon": "physical_attacker",

        "サボネア": "physical_attacker",
    "cacnea": "physical_attacker",

    "ノクタス": "physical_attacker",
    "cacturne": "physical_attacker",

    "チルット": "balanced",
    "swablu": "balanced",

    "チルタリス": "special_attacker",
    "altaria": "special_attacker",

    "ザングース": "physical_attacker",
    "zangoose": "physical_attacker",

    "ハブネーク": "physical_attacker",
    "seviper": "physical_attacker",

    "ルナトーン": "special_attacker",
    "lunatone": "special_attacker",

    "ソルロック": "physical_attacker",
    "solrock": "physical_attacker",

    "ドジョッチ": "slow_tank",
    "barboach": "slow_tank",

    "ナマズン": "slow_tank",
    "whiscash": "slow_tank",

    "ヘイガニ": "physical_attacker",
    "corphish": "physical_attacker",

    "シザリガー": "physical_attacker",
    "crawdaunt": "physical_attacker",

    "ヤジロン": "slow_tank",
    "baltoy": "slow_tank",

    "ネンドール": "slow_tank",
    "claydol": "slow_tank",

    "リリーラ": "slow_tank",
    "lileep": "slow_tank",

    "ユレイドル": "slow_tank",
    "cradily": "slow_tank",

    "アノプス": "physical_attacker",
    "anorith": "physical_attacker",

    "アーマルド": "physical_attacker",
    "armaldo": "physical_attacker",

    "ヒンバス": "balanced",
    "feebas": "balanced",

    "ミロカロス": "slow_tank",
    "milotic": "slow_tank",

    "ポワルン": "balanced",
    "castform": "balanced",

    "カクレオン": "balanced",
    "kecleon": "balanced",

    "カゲボウズ": "physical_attacker",
    "shuppet": "physical_attacker",

    "ジュペッタ": "physical_attacker",
    "banette": "physical_attacker",

    "ヨマワル": "slow_tank",
    "duskull": "slow_tank",

    "サマヨール": "slow_tank",
    "dusclops": "slow_tank",

    "トロピウス": "slow_tank",
    "tropius": "slow_tank",

    "チリーン": "special_attacker",
    "chimecho": "special_attacker",

    "アブソル": "physical_attacker",
    "absol": "physical_attacker",

    "ソーナノ": "slow_tank",
    "wynaut": "slow_tank",

    "ユキワラシ": "balanced",
    "snorunt": "balanced",

    "オニゴーリ": "balanced",
    "glalie": "balanced",

    "タマザラシ": "slow_tank",
    "spheal": "slow_tank",

    "トドグラー": "slow_tank",
    "sealeo": "slow_tank",

    "トドゼルガ": "slow_tank",
    "walrein": "slow_tank",

    "パールル": "special_attacker",
    "clamperl": "special_attacker",

    "ハンテール": "physical_attacker",
    "huntail": "physical_attacker",

    "サクラビス": "special_attacker",
    "gorebyss": "special_attacker",

    "ジーランス": "slow_tank",
    "relicanth": "slow_tank",

    "ラブカス": "special_attacker",
    "luvdisc": "special_attacker",

    "タツベイ": "physical_attacker",
    "bagon": "physical_attacker",

    "コモルー": "physical_attacker",
    "shelgon": "physical_attacker",

    "ボーマンダ": "physical_attacker",
    "salamence": "physical_attacker",

    "ダンバル": "physical_attacker",
    "beldum": "physical_attacker",

    "メタング": "physical_attacker",
    "metang": "physical_attacker",

    "メタグロス": "physical_attacker",
    "metagross": "physical_attacker",

    "レジロック": "slow_tank",
    "regirock": "slow_tank",

    "レジアイス": "slow_tank",
    "regice": "slow_tank",

    "レジスチル": "slow_tank",
    "registeel": "slow_tank",

    "ラティアス": "special_attacker",
    "latias": "special_attacker",

    "ラティオス": "special_attacker",
    "latios": "special_attacker",

    "カイオーガ": "special_attacker",
    "kyogre": "special_attacker",

    "グラードン": "physical_attacker",
    "groudon": "physical_attacker",

    "レックウザ": "physical_attacker",
    "rayquaza": "physical_attacker",

    "ジラーチ": "balanced",
    "jirachi": "balanced",

    "デオキシス": "special_attacker",
    "deoxys": "special_attacker",

        "ナエトル": "physical_attacker",
    "turtwig": "physical_attacker",

    "ハヤシガメ": "physical_attacker",
    "grotle": "physical_attacker",

    "ドダイトス": "trick_room",
    "torterra": "trick_room",

    "ヒコザル": "physical_attacker",
    "chimchar": "physical_attacker",

    "モウカザル": "physical_attacker",
    "monferno": "physical_attacker",

    "ゴウカザル": "physical_attacker",
    "infernape": "physical_attacker",

    "ポッチャマ": "special_attacker",
    "piplup": "special_attacker",

    "ポッタイシ": "special_attacker",
    "prinplup": "special_attacker",

    "エンペルト": "special_attacker",
    "empoleon": "special_attacker",

    "ムックル": "physical_attacker",
    "starly": "physical_attacker",

    "ムクバード": "physical_attacker",
    "staravia": "physical_attacker",

    "ムクホーク": "physical_attacker",
    "staraptor": "physical_attacker",

    "ビッパ": "balanced",
    "bidoof": "balanced",

    "ビーダル": "balanced",
    "bibarel": "balanced",

    "コロボーシ": "balanced",
    "kricketot": "balanced",

    "コロトック": "physical_attacker",
    "kricketune": "physical_attacker",

    "コリンク": "physical_attacker",
    "shinx": "physical_attacker",

    "ルクシオ": "physical_attacker",
    "luxio": "physical_attacker",

    "レントラー": "physical_attacker",
    "luxray": "physical_attacker",

    "スボミー": "special_attacker",
    "budew": "special_attacker",

    "ロズレイド": "special_attacker",
    "roserade": "special_attacker",

    "ズガイドス": "physical_attacker",
    "cranidos": "physical_attacker",

    "ラムパルド": "physical_attacker",
    "rampardos": "physical_attacker",

    "タテトプス": "slow_tank",
    "shieldon": "slow_tank",

    "トリデプス": "slow_tank",
    "bastiodon": "slow_tank",

    "ミノムッチ": "balanced",
    "burmy": "balanced",

    "ミノマダム": "balanced",
    "wormadam": "balanced",

    "ガーメイル": "special_attacker",
    "mothim": "special_attacker",

    "ミツハニー": "balanced",
    "combee": "balanced",

    "ビークイン": "slow_tank",
    "vespiquen": "slow_tank",

    "パチリス": "slow_tank",
    "pachirisu": "slow_tank",

    "ブイゼル": "physical_attacker",
    "buizel": "physical_attacker",

    "フローゼル": "physical_attacker",
    "floatzel": "physical_attacker",

    "チェリンボ": "balanced",
    "cherubi": "balanced",

    "チェリム": "special_attacker",
    "cherrim": "special_attacker",

    "カラナクシ": "slow_tank",
    "shellos": "slow_tank",

    "トリトドン": "slow_tank",
    "gastrodon": "slow_tank",

    "エテボース": "physical_attacker",
    "ambipom": "physical_attacker",

    "フワンテ": "special_attacker",
    "drifloon": "special_attacker",

    "フワライド": "special_attacker",
    "drifblim": "special_attacker",

    "ミミロル": "physical_attacker",
    "buneary": "physical_attacker",

    "ミミロップ": "physical_attacker",
    "lopunny": "physical_attacker",

    "ムウマージ": "special_attacker",
    "mismagius": "special_attacker",

    "ドンカラス": "physical_attacker",
    "honchkrow": "physical_attacker",

    "ニャルマー": "balanced",
    "glameow": "balanced",

    "ブニャット": "balanced",
    "purugly": "balanced",

    "リーシャン": "special_attacker",
    "chingling": "special_attacker",

    "スカンプー": "physical_attacker",
    "stunky": "physical_attacker",

    "スカタンク": "physical_attacker",
    "skuntank": "physical_attacker",

    "ドーミラー": "slow_tank",
    "bronzor": "slow_tank",

    "ドータクン": "slow_tank",
    "bronzong": "slow_tank",

    "ウソハチ": "trick_room",
    "bonsly": "trick_room",

    "マネネ": "special_attacker",
    "mime-jr": "special_attacker",

    "ピンプク": "slow_tank",
    "happiny": "slow_tank",

    "ペラップ": "special_attacker",
    "chatot": "special_attacker",

    "ミカルゲ": "slow_tank",
    "spiritomb": "slow_tank",

    "フカマル": "physical_attacker",
    "gible": "physical_attacker",

    "ガバイト": "physical_attacker",
    "gabite": "physical_attacker",

    "ガブリアス": "physical_attacker",
    "garchomp": "physical_attacker",

    "ゴンベ": "slow_tank",
    "munchlax": "slow_tank",

    "リオル": "physical_attacker",
    "riolu": "physical_attacker",

    "ルカリオ": "physical_attacker",
    "lucario": "physical_attacker",

    "ヒポポタス": "slow_tank",
    "hippopotas": "slow_tank",

    "カバルドン": "slow_tank",
    "hippowdon": "slow_tank",

    "スコルピ": "physical_attacker",
    "skorupi": "physical_attacker",

    "ドラピオン": "physical_attacker",
    "drapion": "physical_attacker",

    "グレッグル": "physical_attacker",
    "croagunk": "physical_attacker",

    "ドクロッグ": "physical_attacker",
    "toxicroak": "physical_attacker",

        "マスキッパ": "physical_attacker",
    "carnivine": "physical_attacker",

    "ケイコウオ": "special_attacker",
    "finneon": "special_attacker",

    "ネオラント": "special_attacker",
    "lumineon": "special_attacker",

    "タマンタ": "slow_tank",
    "mantyke": "slow_tank",

    "ユキカブリ": "special_attacker",
    "snover": "special_attacker",

    "ユキノオー": "special_attacker",
    "abomasnow": "special_attacker",

    "マニューラ": "physical_attacker",
    "weavile": "physical_attacker",

    "ジバコイル": "special_attacker",
    "magnezone": "special_attacker",

    "ベロベルト": "slow_tank",
    "lickilicky": "slow_tank",

    "ドサイドン": "trick_room",
    "rhyperior": "trick_room",

    "モジャンボ": "slow_tank",
    "tangrowth": "slow_tank",

    "エレキブル": "physical_attacker",
    "electivire": "physical_attacker",

    "ブーバーン": "special_attacker",
    "magmortar": "special_attacker",

    "トゲキッス": "special_attacker",
    "togekiss": "special_attacker",

    "メガヤンマ": "special_attacker",
    "yanmega": "special_attacker",

    "リーフィア": "physical_attacker",
    "leafeon": "physical_attacker",

    "グレイシア": "special_attacker",
    "glaceon": "special_attacker",

    "グライオン": "slow_tank",
    "gliscor": "slow_tank",

    "マンムー": "physical_attacker",
    "mamoswine": "physical_attacker",

    "ポリゴンZ": "special_attacker",
    "porygon-z": "special_attacker",

    "エルレイド": "physical_attacker",
    "gallade": "physical_attacker",

    "ダイノーズ": "slow_tank",
    "probopass": "slow_tank",

    "ヨノワール": "slow_tank",
    "dusknoir": "slow_tank",

    "ユキメノコ": "special_attacker",
    "froslass": "special_attacker",

    "ロトム": "special_attacker",
    "rotom": "special_attacker",

    "ユクシー": "slow_tank",
    "uxie": "slow_tank",

    "エムリット": "balanced",
    "mesprit": "balanced",

    "アグノム": "special_attacker",
    "azelf": "special_attacker",

    "ディアルガ": "special_attacker",
    "dialga": "special_attacker",

    "パルキア": "special_attacker",
    "palkia": "special_attacker",

    "ヒードラン": "special_attacker",
    "heatran": "special_attacker",

    "レジギガス": "physical_attacker",
    "regigigas": "physical_attacker",

    "ギラティナ": "slow_tank",
    "giratina": "slow_tank",

    "クレセリア": "slow_tank",
    "cresselia": "slow_tank",

    "フィオネ": "balanced",
    "phione": "balanced",

    "マナフィ": "special_attacker",
    "manaphy": "special_attacker",

    "ダークライ": "special_attacker",
    "darkrai": "special_attacker",

    "シェイミ": "special_attacker",
    "shaymin": "special_attacker",

    "アルセウス": "balanced",
    "arceus": "balanced",

    "ビクティニ": "physical_attacker",
    "victini": "physical_attacker",

    "ツタージャ": "special_attacker",
    "snivy": "special_attacker",

    "ジャノビー": "special_attacker",
    "servine": "special_attacker",

    "ジャローダ": "special_attacker",
    "serperior": "special_attacker",

    "ポカブ": "physical_attacker",
    "tepig": "physical_attacker",

    "チャオブー": "physical_attacker",
    "pignite": "physical_attacker",

    "エンブオー": "physical_attacker",
    "emboar": "physical_attacker",

    "ミジュマル": "special_attacker",
    "oshawott": "special_attacker",

    "フタチマル": "physical_attacker",
    "dewott": "physical_attacker",

    "ダイケンキ": "physical_attacker",
    "samurott": "physical_attacker",

    "ミネズミ": "balanced",
    "patrat": "balanced",

    "ミルホッグ": "balanced",
    "watchog": "balanced",

    "ヨーテリー": "physical_attacker",
    "lillipup": "physical_attacker",

    "ハーデリア": "physical_attacker",
    "herdier": "physical_attacker",

    "ムーランド": "physical_attacker",
    "stoutland": "physical_attacker",

    "チョロネコ": "physical_attacker",
    "purrloin": "physical_attacker",

    "レパルダス": "physical_attacker",
    "liepard": "physical_attacker",

        "ヤナップ": "special_attacker",
    "pansage": "special_attacker",

    "ヤナッキー": "special_attacker",
    "simisage": "special_attacker",

    "バオップ": "special_attacker",
    "pansear": "special_attacker",

    "バオッキー": "special_attacker",
    "simisear": "special_attacker",

    "ヒヤップ": "special_attacker",
    "panpour": "special_attacker",

    "ヒヤッキー": "special_attacker",
    "simipour": "special_attacker",

    "ムンナ": "special_attacker",
    "munna": "special_attacker",

    "ムシャーナ": "trick_room",
    "musharna": "trick_room",

    "マメパト": "physical_attacker",
    "pidove": "physical_attacker",

    "ハトーボー": "physical_attacker",
    "tranquill": "physical_attacker",

    "ケンホロウ": "physical_attacker",
    "unfezant": "physical_attacker",

    "シママ": "physical_attacker",
    "blitzle": "physical_attacker",

    "ゼブライカ": "physical_attacker",
    "zebstrika": "physical_attacker",

    "ダンゴロ": "trick_room",
    "roggenrola": "trick_room",

    "ガントル": "trick_room",
    "boldore": "trick_room",

    "ギガイアス": "trick_room",
    "gigalith": "trick_room",

    "コロモリ": "special_attacker",
    "woobat": "special_attacker",

    "ココロモリ": "special_attacker",
    "swoobat": "special_attacker",

    "モグリュー": "physical_attacker",
    "drilbur": "physical_attacker",

    "ドリュウズ": "physical_attacker",
    "excadrill": "physical_attacker",

    "タブンネ": "slow_tank",
    "audino": "slow_tank",

    "ドッコラー": "physical_attacker",
    "timburr": "physical_attacker",

    "ドテッコツ": "physical_attacker",
    "gurdurr": "physical_attacker",

    "ローブシン": "physical_attacker",
    "conkeldurr": "physical_attacker",

    "オタマロ": "special_attacker",
    "tympole": "special_attacker",

    "ガマガル": "special_attacker",
    "palpitoad": "special_attacker",

    "ガマゲロゲ": "physical_attacker",
    "seismitoad": "physical_attacker",

    "ナゲキ": "physical_attacker",
    "throh": "physical_attacker",

    "ダゲキ": "physical_attacker",
    "sawk": "physical_attacker",

    "クルミル": "physical_attacker",
    "sewaddle": "physical_attacker",

    "クルマユ": "slow_tank",
    "swadloon": "slow_tank",

    "ハハコモリ": "physical_attacker",
    "leavanny": "physical_attacker",

    "フシデ": "physical_attacker",
    "venipede": "physical_attacker",

    "ホイーガ": "physical_attacker",
    "whirlipede": "physical_attacker",

    "ペンドラー": "physical_attacker",
    "scolipede": "physical_attacker",

    "モンメン": "special_attacker",
    "cottonee": "special_attacker",

    "エルフーン": "special_attacker",
    "whimsicott": "special_attacker",

    "チュリネ": "special_attacker",
    "petilil": "special_attacker",

    "ドレディア": "special_attacker",
    "lilligant": "special_attacker",

    "バスラオ": "physical_attacker",
    "basculin": "physical_attacker",

    "メグロコ": "physical_attacker",
    "sandile": "physical_attacker",

    "ワルビル": "physical_attacker",
    "krokorok": "physical_attacker",

    "ワルビアル": "physical_attacker",
    "krookodile": "physical_attacker",

    "ダルマッカ": "physical_attacker",
    "darumaka": "physical_attacker",

    "ヒヒダルマ": "physical_attacker",
    "darmanitan": "physical_attacker",

    "マラカッチ": "special_attacker",
    "maractus": "special_attacker",

    "イシズマイ": "physical_attacker",
    "dwebble": "physical_attacker",

    "イワパレス": "slow_tank",
    "crustle": "slow_tank",

    "ズルッグ": "physical_attacker",
    "scraggy": "physical_attacker",

    "ズルズキン": "physical_attacker",
    "scrafty": "physical_attacker",

    "シンボラー": "special_attacker",
    "sigilyph": "special_attacker",

    "デスマス": "slow_tank",
    "yamask": "slow_tank",

    "デスカーン": "slow_tank",
    "cofagrigus": "slow_tank",

        "プロトーガ": "physical_attacker",
    "tirtouga": "physical_attacker",

    "アバゴーラ": "physical_attacker",
    "carracosta": "physical_attacker",

    "アーケン": "physical_attacker",
    "archen": "physical_attacker",

    "アーケオス": "physical_attacker",
    "archeops": "physical_attacker",

    "ヤブクロン": "slow_tank",
    "trubbish": "slow_tank",

    "ダストダス": "slow_tank",
    "garbodor": "slow_tank",

    "ゾロア": "special_attacker",
    "zorua": "special_attacker",

    "ゾロアーク": "special_attacker",
    "zoroark": "special_attacker",

    "チラーミィ": "physical_attacker",
    "minccino": "physical_attacker",

    "チラチーノ": "physical_attacker",
    "cinccino": "physical_attacker",

    "ゴチム": "special_attacker",
    "gothita": "special_attacker",

    "ゴチミル": "special_attacker",
    "gothorita": "special_attacker",

    "ゴチルゼル": "trick_room",
    "gothitelle": "trick_room",

    "ユニラン": "special_attacker",
    "solosis": "special_attacker",

    "ダブラン": "special_attacker",
    "duosion": "special_attacker",

    "ランクルス": "trick_room",
    "reuniclus": "trick_room",

    "コアルヒー": "special_attacker",
    "ducklett": "special_attacker",

    "スワンナ": "special_attacker",
    "swanna": "special_attacker",

    "バニプッチ": "special_attacker",
    "vanillite": "special_attacker",

    "バニリッチ": "special_attacker",
    "vanillish": "special_attacker",

    "バイバニラ": "special_attacker",
    "vanilluxe": "special_attacker",

    "シキジカ": "physical_attacker",
    "deerling": "physical_attacker",

    "メブキジカ": "physical_attacker",
    "sawsbuck": "physical_attacker",

    "エモンガ": "special_attacker",
    "emolga": "special_attacker",

    "カブルモ": "physical_attacker",
    "karrablast": "physical_attacker",

    "シュバルゴ": "trick_room",
    "escavalier": "trick_room",

    "タマゲタケ": "slow_tank",
    "foongus": "slow_tank",

    "モロバレル": "slow_tank",
    "amoonguss": "slow_tank",

    "プルリル": "special_attacker",
    "frillish": "special_attacker",

    "ブルンゲル": "slow_tank",
    "jellicent": "slow_tank",

    "ママンボウ": "slow_tank",
    "alomomola": "slow_tank",

    "バチュル": "special_attacker",
    "joltik": "special_attacker",

    "デンチュラ": "special_attacker",
    "galvantula": "special_attacker",

    "テッシード": "slow_tank",
    "ferroseed": "slow_tank",

    "ナットレイ": "slow_tank",
    "ferrothorn": "slow_tank",

    "ギアル": "balanced",
    "klink": "balanced",

    "ギギアル": "balanced",
    "klang": "balanced",

    "ギギギアル": "physical_attacker",
    "klinklang": "physical_attacker",

    "シビシラス": "balanced",
    "tynamo": "balanced",

    "シビビール": "special_attacker",
    "eelektrik": "special_attacker",

    "シビルドン": "special_attacker",
    "eelektross": "special_attacker",

    "リグレー": "special_attacker",
    "elgyem": "special_attacker",

    "オーベム": "trick_room",
    "beheeyem": "trick_room",

    "ヒトモシ": "special_attacker",
    "litwick": "special_attacker",

    "ランプラー": "special_attacker",
    "lampent": "special_attacker",

    "シャンデラ": "special_attacker",
    "chandelure": "special_attacker",

    "キバゴ": "physical_attacker",
    "axew": "physical_attacker",

    "オノンド": "physical_attacker",
    "fraxure": "physical_attacker",

    "オノノクス": "physical_attacker",
    "haxorus": "physical_attacker",

    "クマシュン": "physical_attacker",
    "cubchoo": "physical_attacker",

    "ツンベアー": "physical_attacker",
    "beartic": "physical_attacker",

    "フリージオ": "special_attacker",
    "cryogonal": "special_attacker",

    "チョボマキ": "special_attacker",
    "shelmet": "special_attacker",

    "アギルダー": "special_attacker",
    "accelgor": "special_attacker",

    "マッギョ": "slow_tank",
    "stunfisk": "slow_tank",

        "コジョフー": "physical_attacker",
    "mienfoo": "physical_attacker",

    "コジョンド": "physical_attacker",
    "mienshao": "physical_attacker",

    "クリムガン": "physical_attacker",
    "druddigon": "physical_attacker",

    "ゴビット": "physical_attacker",
    "golett": "physical_attacker",

    "ゴルーグ": "physical_attacker",
    "golurk": "physical_attacker",

    "コマタナ": "physical_attacker",
    "pawniard": "physical_attacker",

    "キリキザン": "physical_attacker",
    "bisharp": "physical_attacker",

    "バッフロン": "physical_attacker",
    "bouffalant": "physical_attacker",

    "ワシボン": "physical_attacker",
    "rufflet": "physical_attacker",

    "ウォーグル": "physical_attacker",
    "braviary": "physical_attacker",

    "バルチャイ": "slow_tank",
    "vullaby": "slow_tank",

    "バルジーナ": "slow_tank",
    "mandibuzz": "slow_tank",

    "クイタラン": "physical_attacker",
    "heatmor": "physical_attacker",

    "アイアント": "physical_attacker",
    "durant": "physical_attacker",

    "モノズ": "special_attacker",
    "deino": "special_attacker",

    "ジヘッド": "special_attacker",
    "zweilous": "special_attacker",

    "サザンドラ": "special_attacker",
    "hydreigon": "special_attacker",

    "メラルバ": "special_attacker",
    "larvesta": "special_attacker",

    "ウルガモス": "special_attacker",
    "volcarona": "special_attacker",

    "コバルオン": "physical_attacker",
    "cobalion": "physical_attacker",

    "テラキオン": "physical_attacker",
    "terrakion": "physical_attacker",

    "ビリジオン": "physical_attacker",
    "virizion": "physical_attacker",

    "トルネロス": "special_attacker",
    "tornadus": "special_attacker",

    "ボルトロス": "special_attacker",
    "thundurus": "special_attacker",

    "レシラム": "special_attacker",
    "reshiram": "special_attacker",

    "ゼクロム": "physical_attacker",
    "zekrom": "physical_attacker",

    "ランドロス": "physical_attacker",
    "landorus": "physical_attacker",

    "キュレム": "special_attacker",
    "kyurem": "special_attacker",

    "ケルディオ": "special_attacker",
    "keldeo": "special_attacker",

    "メロエッタ": "balanced",
    "meloetta": "balanced",

    "ゲノセクト": "special_attacker",
    "genesect": "special_attacker",

        "ハリマロン": "physical_attacker",
    "chespin": "physical_attacker",

    "ハリボーグ": "physical_attacker",
    "quilladin": "physical_attacker",

    "ブリガロン": "physical_attacker",
    "chesnaught": "physical_attacker",

    "フォッコ": "special_attacker",
    "fennekin": "special_attacker",

    "テールナー": "special_attacker",
    "braixen": "special_attacker",

    "マフォクシー": "special_attacker",
    "delphox": "special_attacker",

    "ケロマツ": "special_attacker",
    "froakie": "special_attacker",

    "ゲコガシラ": "special_attacker",
    "frogadier": "special_attacker",

    "ゲッコウガ": "special_attacker",
    "greninja": "special_attacker",

    "ホルビー": "physical_attacker",
    "bunnelby": "physical_attacker",

    "ホルード": "physical_attacker",
    "diggersby": "physical_attacker",

    "ヤヤコマ": "physical_attacker",
    "fletchling": "physical_attacker",

    "ヒノヤコマ": "physical_attacker",
    "fletchinder": "physical_attacker",

    "ファイアロー": "physical_attacker",
    "talonflame": "physical_attacker",

    "コフキムシ": "balanced",
    "scatterbug": "balanced",

    "コフーライ": "balanced",
    "spewpa": "balanced",

    "ビビヨン": "special_attacker",
    "vivillon": "special_attacker",

    "シシコ": "special_attacker",
    "litleo": "special_attacker",

    "カエンジシ": "special_attacker",
    "pyroar": "special_attacker",

    "フラベベ": "special_attacker",
    "flabebe": "special_attacker",

    "フラエッテ": "special_attacker",
    "floette": "special_attacker",

    "フラージェス": "special_attacker",
    "florges": "special_attacker",

    "メェークル": "physical_attacker",
    "skiddo": "physical_attacker",

    "ゴーゴート": "physical_attacker",
    "gogoat": "physical_attacker",

    "ヤンチャム": "physical_attacker",
    "pancham": "physical_attacker",

    "ゴロンダ": "physical_attacker",
    "pangoro": "physical_attacker",

    "トリミアン": "balanced",
    "furfrou": "balanced",

    "ニャスパー": "special_attacker",
    "espurr": "special_attacker",

    "ニャオニクス": "special_attacker",
    "meowstic": "special_attacker",

    "ヒトツキ": "physical_attacker",
    "honedge": "physical_attacker",

    "ニダンギル": "physical_attacker",
    "doublade": "physical_attacker",

    "ギルガルド": "physical_attacker",
    "aegislash": "physical_attacker",

    "シュシュプ": "special_attacker",
    "spritzee": "special_attacker",

    "フレフワン": "special_attacker",
    "aromatisse": "special_attacker",

    "ペロッパフ": "special_attacker",
    "swirlix": "special_attacker",

    "ペロリーム": "special_attacker",
    "slurpuff": "special_attacker",

    "マーイーカ": "physical_attacker",
    "inkay": "physical_attacker",

    "カラマネロ": "physical_attacker",
    "malamar": "physical_attacker",

    "カメテテ": "physical_attacker",
    "binacle": "physical_attacker",

    "ガメノデス": "physical_attacker",
    "barbaracle": "physical_attacker",

    "クズモー": "special_attacker",
    "skrelp": "special_attacker",

    "ドラミドロ": "special_attacker",
    "dragalge": "special_attacker",

    "ウデッポウ": "special_attacker",
    "clauncher": "special_attacker",

    "ブロスター": "special_attacker",
    "clawitzer": "special_attacker",

    "エリキテル": "special_attacker",
    "helioptile": "special_attacker",

    "エレザード": "special_attacker",
    "heliolisk": "special_attacker",

    "チゴラス": "physical_attacker",
    "tyrunt": "physical_attacker",

    "ガチゴラス": "physical_attacker",
    "tyrantrum": "physical_attacker",

    "アマルス": "special_attacker",
    "amaura": "special_attacker",

    "アマルルガ": "special_attacker",
    "aurorus": "special_attacker",

    "ニンフィア": "special_attacker",
    "sylveon": "special_attacker",

    "ルチャブル": "physical_attacker",
    "hawlucha": "physical_attacker",

    "デデンネ": "special_attacker",
    "dedenne": "special_attacker",

    "メレシー": "slow_tank",
    "carbink": "slow_tank",

    "ヌメラ": "special_attacker",
    "goomy": "special_attacker",

    "ヌメイル": "special_attacker",
    "sliggoo": "special_attacker",

    "ヌメルゴン": "special_attacker",
    "goodra": "special_attacker",

    "クレッフィ": "slow_tank",
    "klefki": "slow_tank",

    "ボクレー": "physical_attacker",
    "phantump": "physical_attacker",

    "オーロット": "physical_attacker",
    "trevenant": "physical_attacker",

    "バケッチャ": "trick_room",
    "pumpkaboo": "trick_room",

    "パンプジン": "trick_room",
    "gourgeist": "trick_room",

    "カチコール": "slow_tank",
    "bergmite": "slow_tank",

    "クレベース": "slow_tank",
    "avalugg": "slow_tank",

    "オンバット": "special_attacker",
    "noibat": "special_attacker",

    "オンバーン": "special_attacker",
    "noivern": "special_attacker",

        "ゼルネアス": "special_attacker",
    "xerneas": "special_attacker",

    "イベルタル": "special_attacker",
    "yveltal": "special_attacker",

    "ジガルデ": "physical_attacker",
    "zygarde": "physical_attacker",

    "ディアンシー": "special_attacker",
    "diancie": "special_attacker",

    "フーパ": "special_attacker",
    "hoopa": "special_attacker",

    "ボルケニオン": "special_attacker",
    "volcanion": "special_attacker",

    "モクロー": "physical_attacker",
    "rowlet": "physical_attacker",

    "フクスロー": "physical_attacker",
    "dartrix": "physical_attacker",

    "ジュナイパー": "physical_attacker",
    "decidueye": "physical_attacker",

    "ニャビー": "physical_attacker",
    "litten": "physical_attacker",

    "ニャヒート": "physical_attacker",
    "torracat": "physical_attacker",

    "ガオガエン": "slow_tank",
    "incineroar": "slow_tank",

    "アシマリ": "special_attacker",
    "popplio": "special_attacker",

    "オシャマリ": "special_attacker",
    "brionne": "special_attacker",

    "アシレーヌ": "special_attacker",
    "primarina": "special_attacker",

    "ツツケラ": "physical_attacker",
    "pikipek": "physical_attacker",

    "ケララッパ": "physical_attacker",
    "trumbeak": "physical_attacker",

    "ドデカバシ": "physical_attacker",
    "toucannon": "physical_attacker",

    "ヤングース": "physical_attacker",
    "yungoos": "physical_attacker",

    "デカグース": "physical_attacker",
    "gumshoos": "physical_attacker",

    "アゴジムシ": "physical_attacker",
    "grubbin": "physical_attacker",

    "デンヂムシ": "slow_tank",
    "charjabug": "slow_tank",

    "クワガノン": "special_attacker",
    "vikavolt": "special_attacker",

    "マケンカニ": "physical_attacker",
    "crabrawler": "physical_attacker",

    "ケケンカニ": "physical_attacker",
    "crabominable": "physical_attacker",

    "オドリドリ": "special_attacker",
    "oricorio": "special_attacker",

    "アブリー": "special_attacker",
    "cutiefly": "special_attacker",

    "アブリボン": "special_attacker",
    "ribombee": "special_attacker",

    "イワンコ": "physical_attacker",
    "rockruff": "physical_attacker",

    "ルガルガン": "physical_attacker",
    "lycanroc": "physical_attacker",

    "ヨワシ": "special_attacker",
    "wishiwashi": "special_attacker",

    "ヒドイデ": "slow_tank",
    "mareanie": "slow_tank",

    "ドヒドイデ": "slow_tank",
    "toxapex": "slow_tank",

    "ドロバンコ": "physical_attacker",
    "mudbray": "physical_attacker",

    "バンバドロ": "physical_attacker",
    "mudsdale": "physical_attacker",

    "シズクモ": "special_attacker",
    "dewpider": "special_attacker",

    "オニシズクモ": "slow_tank",
    "araquanid": "slow_tank",

    "カリキリ": "physical_attacker",
    "fomantis": "physical_attacker",

    "ラランテス": "physical_attacker",
    "lurantis": "physical_attacker",

    "ネマシュ": "special_attacker",
    "morelull": "special_attacker",

    "マシェード": "special_attacker",
    "shiinotic": "special_attacker",

    "ヤトウモリ": "special_attacker",
    "salandit": "special_attacker",

    "エンニュート": "special_attacker",
    "salazzle": "special_attacker",

    "ヌイコグマ": "physical_attacker",
    "stufful": "physical_attacker",

    "キテルグマ": "physical_attacker",
    "bewear": "physical_attacker",

    "アマカジ": "physical_attacker",
    "bounsweet": "physical_attacker",

    "アママイコ": "physical_attacker",
    "steenee": "physical_attacker",

    "アマージョ": "physical_attacker",
    "tsareena": "physical_attacker",

    "キュワワー": "special_attacker",
    "comfey": "special_attacker",

    "ヤレユータン": "trick_room",
    "oranguru": "trick_room",

    "ナゲツケサル": "physical_attacker",
    "passimian": "physical_attacker",

    "コソクムシ": "physical_attacker",
    "wimpod": "physical_attacker",

    "グソクムシャ": "physical_attacker",
    "golisopod": "physical_attacker",

    "スナバァ": "trick_room",
    "sandygast": "trick_room",

    "シロデスナ": "trick_room",
    "palossand": "trick_room",

    "ナマコブシ": "slow_tank",
    "pyukumuku": "slow_tank",

        "タイプ：ヌル": "slow_tank",
    "type-null": "slow_tank",

    "シルヴァディ": "balanced",
    "silvally": "balanced",

    "メテノ": "physical_attacker",
    "minior": "physical_attacker",

    "ネッコアラ": "balanced",
    "komala": "balanced",

    "バクガメス": "slow_tank",
    "turtonator": "slow_tank",

    "トゲデマル": "physical_attacker",
    "togedemaru": "physical_attacker",

    "ミミッキュ": "physical_attacker",
    "mimikyu": "physical_attacker",

    "ハギギシリ": "physical_attacker",
    "bruxish": "physical_attacker",

    "ジジーロン": "special_attacker",
    "drampa": "special_attacker",

    "ダダリン": "physical_attacker",
    "dhelmise": "physical_attacker",

    "ジャラコ": "physical_attacker",
    "jangmo-o": "physical_attacker",

    "ジャランゴ": "physical_attacker",
    "hakamo-o": "physical_attacker",

    "ジャラランガ": "physical_attacker",
    "kommo-o": "physical_attacker",

    "カプ・コケコ": "special_attacker",
    "tapu-koko": "special_attacker",

    "カプ・テテフ": "special_attacker",
    "tapu-lele": "special_attacker",

    "カプ・ブルル": "physical_attacker",
    "tapu-bulu": "physical_attacker",

    "カプ・レヒレ": "slow_tank",
    "tapu-fini": "slow_tank",

    "コスモッグ": "balanced",
    "cosmog": "balanced",

    "コスモウム": "slow_tank",
    "cosmoem": "slow_tank",

    "ソルガレオ": "physical_attacker",
    "solgaleo": "physical_attacker",

    "ルナアーラ": "special_attacker",
    "lunala": "special_attacker",

    "ウツロイド": "special_attacker",
    "nihilego": "special_attacker",

    "マッシブーン": "physical_attacker",
    "buzzwole": "physical_attacker",

    "フェローチェ": "physical_attacker",
    "pheromosa": "physical_attacker",

    "デンジュモク": "special_attacker",
    "xurkitree": "special_attacker",

    "テッカグヤ": "slow_tank",
    "celesteela": "slow_tank",

    "カミツルギ": "physical_attacker",
    "kartana": "physical_attacker",

    "アクジキング": "slow_tank",
    "guzzlord": "slow_tank",

    "ネクロズマ": "balanced",
    "necrozma": "balanced",

    "マギアナ": "special_attacker",
    "magearna": "special_attacker",

    "マーシャドー": "physical_attacker",
    "marshadow": "physical_attacker",

    "ベベノム": "special_attacker",
    "poipole": "special_attacker",

    "アーゴヨン": "special_attacker",
    "naganadel": "special_attacker",

    "ツンデツンデ": "trick_room",
    "stakataka": "trick_room",

    "ズガドーン": "special_attacker",
    "blacephalon": "special_attacker",

    "ゼラオラ": "physical_attacker",
    "zeraora": "physical_attacker",

    "メルタン": "physical_attacker",
    "meltan": "physical_attacker",

    "メルメタル": "physical_attacker",
    "melmetal": "physical_attacker",

    "サルノリ": "physical_attacker",
    "grookey": "physical_attacker",

    "バチンキー": "physical_attacker",
    "thwackey": "physical_attacker",

    "ゴリランダー": "physical_attacker",
    "rillaboom": "physical_attacker",

    "ヒバニー": "physical_attacker",
    "scorbunny": "physical_attacker",

    "ラビフット": "physical_attacker",
    "raboot": "physical_attacker",

    "エースバーン": "physical_attacker",
    "cinderace": "physical_attacker",

    "メッソン": "special_attacker",
    "sobble": "special_attacker",

    "ジメレオン": "special_attacker",
    "drizzile": "special_attacker",

    "インテレオン": "special_attacker",
    "inteleon": "special_attacker",

    "ホシガリス": "balanced",
    "skwovet": "balanced",

    "ヨクバリス": "slow_tank",
    "greedent": "slow_tank",

    "ココガラ": "physical_attacker",
    "rookidee": "physical_attacker",

    "アオガラス": "physical_attacker",
    "corvisquire": "physical_attacker",

    "アーマーガア": "slow_tank",
    "corviknight": "slow_tank",

    "サッチムシ": "balanced",
    "blipbug": "balanced",

    "レドームシ": "slow_tank",
    "dottler": "slow_tank",

    "イオルブ": "special_attacker",
    "orbeetle": "special_attacker",

    "クスネ": "physical_attacker",
    "nickit": "physical_attacker",

    "フォクスライ": "physical_attacker",
    "thievul": "physical_attacker",

        "ヒメンカ": "special_attacker",
    "gossifleur": "special_attacker",

    "ワタシラガ": "slow_tank",
    "eldegoss": "slow_tank",

    "ウールー": "slow_tank",
    "wooloo": "slow_tank",

    "バイウールー": "slow_tank",
    "dubwool": "slow_tank",

    "カムカメ": "physical_attacker",
    "chewtle": "physical_attacker",

    "カジリガメ": "physical_attacker",
    "drednaw": "physical_attacker",

    "ワンパチ": "physical_attacker",
    "yamper": "physical_attacker",

    "パルスワン": "physical_attacker",
    "boltund": "physical_attacker",

    "タンドン": "trick_room",
    "rolycoly": "trick_room",

    "トロッゴン": "trick_room",
    "carkol": "trick_room",

    "セキタンザン": "trick_room",
    "coalossal": "trick_room",

    "カジッチュ": "balanced",
    "applin": "balanced",

    "アップリュー": "physical_attacker",
    "flapple": "physical_attacker",

    "タルップル": "slow_tank",
    "appletun": "slow_tank",

    "スナヘビ": "physical_attacker",
    "silicobra": "physical_attacker",

    "サダイジャ": "physical_attacker",
    "sandaconda": "physical_attacker",

    "ウッウ": "special_attacker",
    "cramorant": "special_attacker",

    "サシカマス": "physical_attacker",
    "arrokuda": "physical_attacker",

    "カマスジョー": "physical_attacker",
    "barraskewda": "physical_attacker",

    "エレズン": "special_attacker",
    "toxel": "special_attacker",

    "ストリンダー": "special_attacker",
    "toxtricity": "special_attacker",

    "ヤクデ": "physical_attacker",
    "sizzlipede": "physical_attacker",

    "マルヤクデ": "physical_attacker",
    "centiskorch": "physical_attacker",

    "タタッコ": "physical_attacker",
    "clobbopus": "physical_attacker",

    "オトスパス": "physical_attacker",
    "grapploct": "physical_attacker",

    "ヤバチャ": "special_attacker",
    "sinistea": "special_attacker",

    "ポットデス": "special_attacker",
    "polteageist": "special_attacker",

    "ミブリム": "special_attacker",
    "hatenna": "special_attacker",

    "テブリム": "special_attacker",
    "hattrem": "special_attacker",

    "ブリムオン": "trick_room",
    "hatterene": "trick_room",

    "ベロバー": "physical_attacker",
    "impidimp": "physical_attacker",

    "ギモー": "physical_attacker",
    "morgrem": "physical_attacker",

    "オーロンゲ": "physical_attacker",
    "grimmsnarl": "physical_attacker",

    "タチフサグマ": "physical_attacker",
    "obstagoon": "physical_attacker",

    "ニャイキング": "physical_attacker",
    "perrserker": "physical_attacker",

    "サニゴーン": "slow_tank",
    "cursola": "slow_tank",

    "ネギガナイト": "physical_attacker",
    "sirfetchd": "physical_attacker",

    "バリコオル": "special_attacker",
    "mr-rime": "special_attacker",

    "デスバーン": "slow_tank",
    "runerigus": "slow_tank",

    "マホミル": "special_attacker",
    "milcery": "special_attacker",

    "マホイップ": "special_attacker",
    "alcremie": "special_attacker",

    "タイレーツ": "physical_attacker",
    "falinks": "physical_attacker",

    "バチンウニ": "special_attacker",
    "pincurchin": "special_attacker",

    "ユキハミ": "special_attacker",
    "snom": "special_attacker",

    "モスノウ": "special_attacker",
    "frosmoth": "special_attacker",

    "イシヘンジン": "physical_attacker",
    "stonjourner": "physical_attacker",

    "コオリッポ": "physical_attacker",
    "eiscue": "physical_attacker",

    "イエッサン": "special_attacker",
    "indeedee": "special_attacker",

    "モルペコ": "physical_attacker",
    "morpeko": "physical_attacker",

    "ゾウドウ": "physical_attacker",
    "cufant": "physical_attacker",

    "ダイオウドウ": "trick_room",
    "copperajah": "trick_room",

    "パッチラゴン": "physical_attacker",
    "dracozolt": "physical_attacker",

    "パッチルドン": "physical_attacker",
    "arctozolt": "physical_attacker",

    "ウオノラゴン": "physical_attacker",
    "dracovish": "physical_attacker",

    "ウオチルドン": "slow_tank",
    "arctovish": "slow_tank",

    "ジュラルドン": "special_attacker",
    "duraludon": "special_attacker",

    "ドラメシヤ": "physical_attacker",
    "dreepy": "physical_attacker",

    "ドロンチ": "physical_attacker",
    "drakloak": "physical_attacker",

    "ドラパルト": "physical_attacker",
    "dragapult": "physical_attacker",

        "ザシアン": "physical_attacker",
    "zacian": "physical_attacker",

    "ザマゼンタ": "slow_tank",
    "zamazenta": "slow_tank",

    "ムゲンダイナ": "special_attacker",
    "eternatus": "special_attacker",

    "ダクマ": "physical_attacker",
    "kubfu": "physical_attacker",

    "ウーラオス": "physical_attacker",
    "urshifu": "physical_attacker",

    "ザルード": "physical_attacker",
    "zarude": "physical_attacker",

    "レジエレキ": "special_attacker",
    "regieleki": "special_attacker",

    "レジドラゴ": "special_attacker",
    "regidrago": "special_attacker",

    "ブリザポス": "trick_room",
    "glastrier": "trick_room",

    "レイスポス": "special_attacker",
    "spectrier": "special_attacker",

    "バドレックス": "special_attacker",
    "calyrex": "special_attacker",

        "アヤシシ": "physical_attacker",
    "wyrdeer": "physical_attacker",

    "バサギリ": "physical_attacker",
    "kleavor": "physical_attacker",

    "ガチグマ": "trick_room",
    "ursaluna": "trick_room",

    "イダイトウ": "physical_attacker",
    "basculegion": "physical_attacker",

    "オオニューラ": "physical_attacker",
    "sneasler": "physical_attacker",

    "ハリーマン": "physical_attacker",
    "overqwil": "physical_attacker",

    "ラブトロス": "special_attacker",
    "enamorus": "special_attacker",

    "ニャオハ": "physical_attacker",
    "sprigatito": "physical_attacker",

    "ニャローテ": "physical_attacker",
    "floragato": "physical_attacker",

    "マスカーニャ": "physical_attacker",
    "meowscarada": "physical_attacker",

    "ホゲータ": "special_attacker",
    "fuecoco": "special_attacker",

    "アチゲータ": "special_attacker",
    "crocalor": "special_attacker",

    "ラウドボーン": "slow_tank",
    "skeledirge": "slow_tank",

    "クワッス": "physical_attacker",
    "quaxly": "physical_attacker",

    "ウェルカモ": "physical_attacker",
    "quaxwell": "physical_attacker",

    "ウェーニバル": "physical_attacker",
    "quaquaval": "physical_attacker",

    "グルトン": "balanced",
    "lechonk": "balanced",

    "パフュートン": "balanced",
    "oinkologne": "balanced",

    "タマンチュラ": "physical_attacker",
    "tarountula": "physical_attacker",

    "ワナイダー": "physical_attacker",
    "spidops": "physical_attacker",

    "マメバッタ": "physical_attacker",
    "nymble": "physical_attacker",

    "エクスレッグ": "physical_attacker",
    "lokix": "physical_attacker",

    "パモ": "physical_attacker",
    "pawmi": "physical_attacker",

    "パモット": "physical_attacker",
    "pawmo": "physical_attacker",

    "パーモット": "physical_attacker",
    "pawmot": "physical_attacker",

    "ワッカネズミ": "physical_attacker",
    "tandemaus": "physical_attacker",

    "イッカネズミ": "physical_attacker",
    "maushold": "physical_attacker",

    "パピモッチ": "slow_tank",
    "fidough": "slow_tank",

    "バウッツェル": "slow_tank",
    "dachsbun": "slow_tank",

    "ミニーブ": "special_attacker",
    "smoliv": "special_attacker",

    "オリーニョ": "special_attacker",
    "dolliv": "special_attacker",

    "オリーヴァ": "special_attacker",
    "arboliva": "special_attacker",

    "イキリンコ": "physical_attacker",
    "squawkabilly": "physical_attacker",

    "コジオ": "trick_room",
    "nacli": "trick_room",

    "ジオヅム": "trick_room",
    "naclstack": "trick_room",

    "キョジオーン": "slow_tank",
    "garganacl": "slow_tank",

    "カルボウ": "balanced",
    "charcadet": "balanced",

    "グレンアルマ": "special_attacker",
    "armarouge": "special_attacker",

    "ソウブレイズ": "physical_attacker",
    "ceruledge": "physical_attacker",

    "ズピカ": "special_attacker",
    "tadbulb": "special_attacker",

    "ハラバリー": "slow_tank",
    "bellibolt": "slow_tank",

    "カイデン": "special_attacker",
    "wattrel": "special_attacker",

    "タイカイデン": "special_attacker",
    "kilowattrel": "special_attacker",

    "オラチフ": "physical_attacker",
    "maschiff": "physical_attacker",

    "マフィティフ": "physical_attacker",
    "mabosstiff": "physical_attacker",

    "シルシュルー": "physical_attacker",
    "shroodle": "physical_attacker",

    "タギングル": "physical_attacker",
    "grafaiai": "physical_attacker",

    "アノクサ": "physical_attacker",
    "bramblin": "physical_attacker",

    "アノホラグサ": "physical_attacker",
    "brambleghast": "physical_attacker",

    "ノノクラゲ": "special_attacker",
    "toedscool": "special_attacker",

    "リククラゲ": "special_attacker",
    "toedscruel": "special_attacker",

    "ガケガニ": "physical_attacker",
    "klawf": "physical_attacker",

    "カプサイジ": "special_attacker",
    "capsakid": "special_attacker",

    "スコヴィラン": "special_attacker",
    "scovillain": "special_attacker",

        "シガロコ": "physical_attacker",
    "rellor": "physical_attacker",

    "ベラカス": "trick_room",
    "rabsca": "trick_room",

    "ヒラヒナ": "special_attacker",
    "flittle": "special_attacker",

    "クエスパトラ": "special_attacker",
    "espathra": "special_attacker",

    "カヌチャン": "physical_attacker",
    "tinkatink": "physical_attacker",

    "ナカヌチャン": "physical_attacker",
    "tinkatuff": "physical_attacker",

    "デカヌチャン": "physical_attacker",
    "tinkaton": "physical_attacker",

    "ウミディグダ": "physical_attacker",
    "wiglett": "physical_attacker",

    "ウミトリオ": "physical_attacker",
    "wugtrio": "physical_attacker",

    "オトシドリ": "physical_attacker",
    "bombirdier": "physical_attacker",

    "ナミイルカ": "physical_attacker",
    "finizen": "physical_attacker",

    "イルカマン": "physical_attacker",
    "palafin": "physical_attacker",

    "ブロロン": "physical_attacker",
    "varoom": "physical_attacker",

    "ブロロローム": "physical_attacker",
    "revavroom": "physical_attacker",

    "モトトカゲ": "physical_attacker",
    "cyclizar": "physical_attacker",

    "ミミズズ": "slow_tank",
    "orthworm": "slow_tank",

    "キラーメ": "special_attacker",
    "glimmet": "special_attacker",

    "キラフロル": "special_attacker",
    "glimmora": "special_attacker",

    "ボチ": "physical_attacker",
    "greavard": "physical_attacker",

    "ハカドッグ": "physical_attacker",
    "houndstone": "physical_attacker",

    "カラミンゴ": "physical_attacker",
    "flamigo": "physical_attacker",

    "アルクジラ": "physical_attacker",
    "cetoddle": "physical_attacker",

    "ハルクジラ": "physical_attacker",
    "cetitan": "physical_attacker",

    "ミガルーサ": "physical_attacker",
    "veluza": "physical_attacker",

    "ヘイラッシャ": "slow_tank",
    "dondozo": "slow_tank",

    "シャリタツ": "special_attacker",
    "tatsugiri": "special_attacker",

    "コノヨザル": "physical_attacker",
    "annihilape": "physical_attacker",

    "ドオー": "slow_tank",
    "clodsire": "slow_tank",

    "リキキリン": "trick_room",
    "farigiraf": "trick_room",

    "ノココッチ": "slow_tank",
    "dudunsparce": "slow_tank",

    "ドドゲザン": "physical_attacker",
    "kingambit": "physical_attacker",

    "イダイナキバ": "physical_attacker",
    "great-tusk": "physical_attacker",

    "サケブシッポ": "slow_tank",
    "scream-tail": "slow_tank",

    "アラブルタケ": "slow_tank",
    "brute-bonnet": "slow_tank",

    "ハバタクカミ": "special_attacker",
    "flutter-mane": "special_attacker",

    "チヲハウハネ": "physical_attacker",
    "slither-wing": "physical_attacker",

    "スナノケガワ": "special_attacker",
    "sandy-shocks": "special_attacker",

    "テツノワダチ": "physical_attacker",
    "iron-treads": "physical_attacker",

    "テツノツツミ": "special_attacker",
    "iron-bundle": "special_attacker",

    "テツノカイナ": "physical_attacker",
    "iron-hands": "physical_attacker",

    "テツノコウベ": "special_attacker",
    "iron-jugulis": "special_attacker",

    "テツノドクガ": "special_attacker",
    "iron-moth": "special_attacker",

    "テツノイバラ": "physical_attacker",
    "iron-thorns": "physical_attacker",

    "セビエ": "physical_attacker",
    "frigibax": "physical_attacker",

    "セゴール": "physical_attacker",
    "arctibax": "physical_attacker",

    "セグレイブ": "physical_attacker",
    "baxcalibur": "physical_attacker",

    "コレクレー": "balanced",
    "gimmighoul": "balanced",

    "サーフゴー": "special_attacker",
    "gholdengo": "special_attacker",

        "チオンジェン": "slow_tank",
    "wo-chien": "slow_tank",

    "パオジアン": "physical_attacker",
    "chien-pao": "physical_attacker",

    "ディンルー": "slow_tank",
    "ting-lu": "slow_tank",

    "イーユイ": "special_attacker",
    "chi-yu": "special_attacker",

    "トドロクツキ": "physical_attacker",
    "roaring-moon": "physical_attacker",

    "テツノブジン": "physical_attacker",
    "iron-valiant": "physical_attacker",

    "コライドン": "physical_attacker",
    "koraidon": "physical_attacker",

    "ミライドン": "special_attacker",
    "miraidon": "special_attacker",

    "ウネルミナモ": "special_attacker",
    "walking-wake": "special_attacker",

    "テツノイサハ": "physical_attacker",
    "iron-leaves": "physical_attacker",

    "カミッチュ": "slow_tank",
    "dipplin": "slow_tank",

    "チャデス": "special_attacker",
    "poltchageist": "special_attacker",

    "ヤバソチャ": "special_attacker",
    "sinistcha": "special_attacker",

    "イイネイヌ": "physical_attacker",
    "okidogi": "physical_attacker",

    "マシマシラ": "special_attacker",
    "munkidori": "special_attacker",

    "キチキギス": "special_attacker",
    "fezandipiti": "special_attacker",

    "オーガポン": "physical_attacker",
    "ogerpon": "physical_attacker",

    "ブリジュラス": "special_attacker",
    "archaludon": "special_attacker",

    "カミツオロチ": "special_attacker",
    "hydrapple": "special_attacker",

    "ウガツホムラ": "physical_attacker",
    "gouging-fire": "physical_attacker",

    "タケルライコ": "special_attacker",
    "raging-bolt": "special_attacker",

    "テツノイワオ": "physical_attacker",
    "iron-boulder": "physical_attacker",

    "テツノカシラ": "special_attacker",
    "iron-crown": "special_attacker",

    "テラパゴス": "special_attacker",
    "terapagos": "special_attacker",

    "モモワロウ": "special_attacker",
    "pecharunt": "special_attacker"
};

// 役割ルール
const roleRules = {
    physical_attacker: {
        name: "物理アタッカー",
        important: ["atk", "spe"],
        useful: ["hp", "def", "spd"],
        lowPriority: ["spa"],
        preferZero: []
    },

    special_attacker: {
        name: "特殊アタッカー",
        important: ["spa", "spe"],
        useful: ["hp", "def", "spd"],
        lowPriority: ["atk"],
        preferZero: ["atk"]
    },

    slow_tank: {
        name: "低速耐久型",
        important: ["hp", "def", "spd"],
        useful: ["atk", "spa"],
        lowPriority: ["spe"],
        preferZero: ["spe"]
    },

    trick_room: {
        name: "トリル型",
        important: ["hp", "atk", "spa"],
        useful: ["def", "spd"],
        lowPriority: [],
        preferZero: ["spe"]
    },

    balanced: {
        name: "汎用型",
        important: ["hp", "atk", "def", "spa", "spd", "spe"],
        useful: [],
        lowPriority: [],
        preferZero: []
    }
};

// 役割別倍率
const roleWeights = {
    physical_attacker: {
        hp: 1.0,
        atk: 1.6,
        def: 0.8,
        spa: 0.2,
        spd: 0.8,
        spe: 1.5
    },

    special_attacker: {
        hp: 1.0,
        atk: 0.2,
        def: 0.8,
        spa: 1.6,
        spd: 0.8,
        spe: 1.5
    },

    slow_tank: {
        hp: 1.6,
        atk: 0.5,
        def: 1.5,
        spa: 0.5,
        spd: 1.5,
        spe: 0.1
    },

    trick_room: {
        hp: 1.3,
        atk: 1.2,
        def: 1.0,
        spa: 1.2,
        spd: 1.0,
        spe: 0.1
    },

    balanced: {
        hp: 1.0,
        atk: 1.0,
        def: 1.0,
        spa: 1.0,
        spd: 1.0,
        spe: 1.0
    }
};

const statKeys = [
    "hp",
    "atk",
    "def",
    "spa",
    "spd",
    "spe"
];

const statLabels = {
    hp: "HP",
    atk: "攻撃",
    def: "防御",
    spa: "特攻",
    spd: "特防",
    spe: "素早さ"
};

// pokemon.json読み込み
async function loadPokemonData() {
    try {
        const response = await fetch("pokemon.json");

        if (!response.ok) {
            throw new Error("pokemon.json が読み込めません");
        }

        pokemonData = await response.json();

        console.log("pokemon.json 読み込み成功");
    }
    catch (error) {
        console.log(error);
        alert("pokemon.json 読み込み失敗");
    }
}

// オートコンプリート
function showSuggestions() {
    const inputName = document
        .getElementById("name")
        .value
        .trim();

    const suggestionArea =
        document.getElementById("suggestionArea");

    if (!suggestionArea) {
        return;
    }

    suggestionArea.innerHTML = "";

    if (inputName === "") {
        return;
    }

    const inputLower =
        inputName.toLowerCase();

    const suggestions = pokemonData
        .filter(
            pokemon =>
                pokemon.ja.includes(inputName) ||
                pokemon.en.includes(inputLower) ||
                (pokemon.apiName && pokemon.apiName.includes(inputLower))
        )
        .slice(0, 5);

    for (const pokemon of suggestions) {
        const div =
            document.createElement("div");

        div.className = "suggestion";

        div.innerText =
            `${pokemon.ja} / ${pokemon.en}`;

        div.onclick = function () {
            document.getElementById("name").value =
                pokemon.ja;

            suggestionArea.innerHTML = "";

            getPokemon();
        };

        suggestionArea.appendChild(div);
    }
}

// ポケモン取得
async function getPokemon() {
    try {
        const inputName = document
            .getElementById("name")
            .value
            .trim();

        if (inputName === "") {
            alert("ポケモン名を入力してください");
            return;
        }

        const inputLower =
            inputName.toLowerCase();

        const pokemon =
            pokemonData.find(
                p =>
                    p.ja === inputName ||
                    p.en === inputLower ||
                    p.apiName === inputLower
            );

        if (!pokemon) {
            alert("ポケモンが見つかりません");
            return;
        }

        selectedPokemon = pokemon;

        const apiName =
            pokemon.apiName || pokemon.en;

        const response =
            await fetch(
                `https://pokeapi.co/api/v2/pokemon/${apiName}`
            );

        if (!response.ok) {
            throw new Error("PokeAPI取得失敗");
        }

        const data =
            await response.json();

        document
            .getElementById("pokemonImage")
            .src =
                data.sprites.front_default;

        const role =
            getPokemonRole(pokemon);

        const roleName =
            roleRules[role].name;

        document
            .getElementById("pokemonInfo")
            .innerText =
            `${pokemon.ja} / ${pokemon.en} / ${roleName}`;
    }
    catch (error) {
        console.log(error);
        alert(error.message);
    }
}

// 役割取得
function getPokemonRole(pokemon) {
    if (!pokemon) {
        return "balanced";
    }

    if (pokemonRoles[pokemon.ja]) {
        return pokemonRoles[pokemon.ja];
    }

    if (pokemonRoles[pokemon.en]) {
        return pokemonRoles[pokemon.en];
    }

    if (pokemonRoles[pokemon.apiName]) {
        return pokemonRoles[pokemon.apiName];
    }

    return "balanced";
}

// ジャッジ
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
    return [
        Number(document.getElementById("hp").value),
        Number(document.getElementById("atk").value),
        Number(document.getElementById("def").value),
        Number(document.getElementById("spa").value),
        Number(document.getElementById("spd").value),
        Number(document.getElementById("spe").value)
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

// スコア表示
function formatScore(score) {
    if (score > 100) {
        return "100+";
    }

    return `${Math.round(score)}`;
}

// 役割別評価
function evaluateByRole(values, role) {
    const rule =
        roleRules[role] ||
        roleRules.balanced;

    const weights =
        roleWeights[role] ||
        roleWeights.balanced;

    let weightedScore = 0;

    const comments = [];

    for (let i = 0; i < statKeys.length; i++) {
        const key = statKeys[i];
        const iv = values[i];
        const weight = weights[key];

        weightedScore += iv * weight;

        if (rule.important.includes(key)) {
            if (iv === 31) {
                comments.push("役割的にかなり良い");
            }
            else if (iv >= 28) {
                comments.push("かなり優秀");
            }
            else if (iv >= 20) {
                comments.push("できればもっと欲しい");
            }
            else {
                comments.push("低め");
            }
        }
        else if (rule.useful.includes(key)) {
            if (iv === 31) {
                comments.push("高いと役立つ");
            }
            else if (iv >= 20) {
                comments.push("そこそこ良い");
            }
            else {
                comments.push("低め");
            }
        }
        else if (rule.preferZero.includes(key)) {
            if (iv === 0) {
                comments.push("0なのでかなり良い");
            }
            else if (iv <= 5) {
                comments.push("低めなので良い");
            }
            else {
                comments.push("高い必要は低い");
            }
        }
        else if (rule.lowPriority.includes(key)) {
            comments.push("重要度低め");
        }
        else {
            comments.push("普通");
        }
    }

    const baseMaxScore =
        31 * 6;

    const score =
        weightedScore / baseMaxScore * 100;

    const displayScore =
        formatScore(score);

    let rank = "";

    if (score > 100) {
        rank = "S+";
    }
    else if (score >= 90) {
        rank = "S";
    }
    else if (score >= 75) {
        rank = "A";
    }
    else if (score >= 60) {
        rank = "B";
    }
    else if (score >= 40) {
        rank = "C";
    }
    else {
        rank = "D";
    }

    return {
        rank,
        score: displayScore,
        rawScore: score,
        comments,
        roleName: rule.name
    };
}

// 個体値判定
function checkIV() {
    const values =
        getIVValues();

    if (!validateIVValues(values)) {
        alert("個体値は0〜31");
        return;
    }

    const name =
        document
            .getElementById("name")
            .value
            .trim();

    let pokemon =
        selectedPokemon;

    if (!pokemon && name !== "") {
        const inputLower =
            name.toLowerCase();

        pokemon =
            pokemonData.find(
                p =>
                    p.ja === name ||
                    p.en === inputLower ||
                    p.apiName === inputLower
            );
    }

    const role =
        getPokemonRole(pokemon);

    const evaluation =
        evaluateByRole(
            values,
            role
        );

    const vCount =
        values.filter(
            value => value === 31
        ).length;

    let extra = "";

    if (values[1] === 0) {
        extra += " A0";
    }

    if (values[5] === 0) {
        extra += " S0";
    }

    document
        .getElementById("rank")
        .innerText =
        `${name}
評価:${evaluation.rank}
スコア:${evaluation.score}
${vCount}V${extra}`;

    document
        .getElementById("comment")
        .innerText =
        `役割:${evaluation.roleName}`;

    showJudgeArea(
        values,
        evaluation.comments
    );

    drawRadarChart(
        values,
        statKeys.map(
            key => statLabels[key]
        )
    );
}

// ジャッジUI
function showJudgeArea(values, roleComments) {
    let html = "";

    for (let i = 0; i < values.length; i++) {
        const key =
            statKeys[i];

        const judge =
            judgeText(values[i]);

        html += `
            <div class="judge ${judge.className}">
                ${statLabels[key]} : ${values[i]} / ${judge.text}
                <br>
                <small>${roleComments[i]}</small>
            </div>
        `;
    }

    document
        .getElementById("judgeArea")
        .innerHTML =
        html;
}

// レーダーチャート
function drawRadarChart(values, labels) {
    const ctx =
        document.getElementById("radarChart");

    if (chart) {
        chart.destroy();
    }

    chart = new Chart(ctx, {
        type: "radar",
        data: {
            labels: labels,
            datasets: [
                {
                    label: "個体値",
                    data: values
                }
            ]
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
        alert("先に判定してください");
        return;
    }

    const savedList =
        JSON.parse(
            localStorage.getItem("savedPokemon")
        ) || [];

    savedList.push({
        rank: rank,
        date: new Date().toLocaleString()
    });

    localStorage.setItem(
        "savedPokemon",
        JSON.stringify(savedList)
    );

    showSavedPokemon();
}

// 保存一覧
function showSavedPokemon() {
    const savedList =
        JSON.parse(
            localStorage.getItem("savedPokemon")
        ) || [];

    const saveList =
        document.getElementById("saveList");

    saveList.innerHTML = "";

    for (const item of savedList) {
        const li =
            document.createElement("li");

        li.innerText =
            `${item.rank} / ${item.date}`;

        saveList.appendChild(li);
    }
}

// 起動時
loadPokemonData();
showSavedPokemon();
