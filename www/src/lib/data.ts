const PYRO = "<:pyro:1021232648351387668>";
const HYDRO = "<:hydro:1021232713149190264>";
const ANEMO = "<:anemo:1021232755608133712>";
const ELECTRO = "<:electro:1021232812835213362>";
const DENDRO = "<:dendro:1021232875665883196>";
const CRYO = "<:cryo:1021232910268903434>";
const GEO = "<:geo:1021232946289578004>";
const OTHER = "<:other:1021233139856719932>";

const SWORD = "<:sword:1021232974848589864>";
const POLEARM = "<:polearm:1021233017055871006>";
const CLAYMORE = "<:claymore:1021233053097525348>";
const BOW = "<:bow:1021233074618515486>";
const CATALYST = "<:catalyst:1021233107287937074>";
const UNKNOWN = ":question:";

const MONDSTADT = "<:mondstadt:1026030859071004743>";
const LIYUE = "<:liyue:1026030857812705391>";
const INAZUMA = "<:inazuma:1026030856420204584>";
const SUMERU = "<:sumeru:1026030854788616302>";
const FONTAINE = "<:other_region:1026031780039499826>"; // TODO: needs new emoji
const SNEZHNAYA = "<:other_region:1026031780039499826>"; // TODO: needs new emoji
const KHAENRIAH = "<:other_region:1026031780039499826>"; // TODO: needs new emoji
const OTHER_REGION = "<:other_region:1026031780039499826>";

export const characters = {
    aether: [OTHER, SWORD, OTHER_REGION, "Aether"],
    albedo: [GEO, SWORD, MONDSTADT, "Albedo"],
    alhaitham: [DENDRO, SWORD, SUMERU, "Alhaitham"],
    aloy: [CRYO, BOW, OTHER_REGION, "Aloy"],
    amber: [PYRO, BOW, MONDSTADT, "Amber"],
    itto: [GEO, CLAYMORE, INAZUMA, "Arataki Itto"],
    baizhu: [DENDRO, CATALYST, LIYUE, "Baizhu"],
    barbara: [HYDRO, CATALYST, MONDSTADT, "Barbara"],
    beidou: [ELECTRO, CLAYMORE, LIYUE, "Beidou"],
    bennett: [PYRO, SWORD, MONDSTADT, "Bennett"],
    candace: [HYDRO, POLEARM, SUMERU, "Candace"],
    chongyun: [CRYO, CLAYMORE, LIYUE, "Chongyun"],
    collei: [DENDRO, BOW, SUMERU, "Collei"],
    cyno: [ELECTRO, POLEARM, SUMERU, "Cyno"],
    dainsleif: [OTHER, UNKNOWN, KHAENRIAH, "Dainsleif"], // TODO: needs element, weapon, and new icon
    dehya: [PYRO, CLAYMORE, SUMERU, "Dehya"],
    diluc: [PYRO, CLAYMORE, MONDSTADT, "Diluc"],
    diona: [CRYO, BOW, MONDSTADT, "Diona"],
    dori: [ELECTRO, CLAYMORE, SUMERU, "Dori"],
    eula: [CRYO, CLAYMORE, MONDSTADT, "Eula"],
    faruzan: [ANEMO, BOW, SUMERU, "Faruzan"],
    fischl: [ELECTRO, BOW, MONDSTADT, "Fischl"],
    freminet: [CRYO, UNKNOWN, FONTAINE, "Freminet"], // TODO: needs weapon and new icon
    ganyu: [CRYO, BOW, LIYUE, "Ganyu"],
    gorou: [GEO, BOW, INAZUMA, "Gorou"],
    hutao: [PYRO, POLEARM, LIYUE, "Hu Tao"],
    jean: [ANEMO, SWORD, MONDSTADT, "Jean"],
    kazuha: [ANEMO, SWORD, INAZUMA, "Kaedehara Kazuha"],
    kaeya: [CRYO, SWORD, MONDSTADT, "Kaeya"],
    ayaka: [CRYO, SWORD, INAZUMA, "Kamisato Ayaka"],
    ayato: [HYDRO, SWORD, INAZUMA, "Kamisato Ayato"],
    kaveh: [DENDRO, CLAYMORE, SUMERU, "Kaveh"],
    keqing: [ELECTRO, SWORD, LIYUE, "Keqing"],
    kirara: [DENDRO, SWORD, INAZUMA, "Kirara"],
    klee: [PYRO, CATALYST, MONDSTADT, "Klee"],
    sara: [ELECTRO, BOW, INAZUMA, "Kujou Sara"],
    shinobu: [ELECTRO, SWORD, INAZUMA, "Kuki Shinobu"],
    layla: [CRYO, SWORD, SUMERU, "Layla"],
    lisa: [ELECTRO, CATALYST, MONDSTADT, "Lisa"],
    lumine: [OTHER, SWORD, OTHER_REGION, "Lumine"],
    lynette: [ANEMO, UNKNOWN, FONTAINE, "Lynette"], // TODO: needs weapon
    lyney: [PYRO, UNKNOWN, FONTAINE, "Lyney"], // TODO: needs weapon
    mika: [CRYO, POLEARM, MONDSTADT, "Mika"],
    mona: [HYDRO, CATALYST, MONDSTADT, "Mona"],
    nahida: [DENDRO, CATALYST, SUMERU, "Nahida"],
    nilou: [HYDRO, SWORD, SUMERU, "Nilou"],
    ningguang: [GEO, CATALYST, LIYUE, "Ningguang"],
    noelle: [GEO, CLAYMORE, MONDSTADT, "Noelle"],
    qiqi: [CRYO, SWORD, LIYUE, "Qiqi"],
    raiden: [ELECTRO, POLEARM, INAZUMA, "Raiden Shogun"],
    razor: [ELECTRO, CLAYMORE, MONDSTADT, "Razor"],
    rosaria: [CRYO, POLEARM, MONDSTADT, "Rosaria"],
    kokomi: [HYDRO, CATALYST, INAZUMA, "Sangonomiya Kokomi"],
    sayu: [ANEMO, CLAYMORE, INAZUMA, "Sayu"],
    shenhe: [CRYO, POLEARM, LIYUE, "Shenhe"],
    heizou: [ANEMO, CATALYST, INAZUMA, "Shikanoin Heizou"],
    sucrose: [ANEMO, CATALYST, MONDSTADT, "Sucrose"],
    tartaglia: [HYDRO, BOW, SNEZHNAYA, "Tartaglia"],
    thoma: [PYRO, POLEARM, INAZUMA, "Thoma"],
    tighnari: [DENDRO, BOW, SUMERU, "Tighnari"],
    traveler: [OTHER, SWORD, OTHER_REGION, "Traveler"],
    venti: [ANEMO, BOW, MONDSTADT, "Venti"],
    wanderer: [ANEMO, CATALYST, SUMERU, "Wanderer"],
    xiangling: [PYRO, POLEARM, LIYUE, "Xiangling"],
    xiao: [ANEMO, POLEARM, LIYUE, "Xiao"],
    xingqiu: [HYDRO, SWORD, LIYUE, "Xingqiu"],
    xinyan: [PYRO, CLAYMORE, LIYUE, "Xinyan"],
    yae: [ELECTRO, CATALYST, INAZUMA, "Yae Miko"],
    yanfei: [PYRO, CATALYST, LIYUE, "Yanfei"],
    yaoyao: [DENDRO, POLEARM, LIYUE, "Yaoyao"],
    yelan: [HYDRO, BOW, LIYUE, "Yelan"],
    yoimiya: [PYRO, BOW, INAZUMA, "Yoimiya"],
    yunjin: [GEO, POLEARM, LIYUE, "Yun Jin"],
    zhongli: [GEO, POLEARM, LIYUE, "Zhongli"],
} as Record<string, string[]>;

// Taken with permission from
// https://github.com/Teyvat-Collective-Network/websites/blob/main/www/src/images.js

export const bar = { image: { url: "https://i.imgur.com/U9Wqlug.png" } };
export const space = "<:space:1021233715751424060>";
