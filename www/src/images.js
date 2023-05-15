const mhy = (name) => `https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_${name}.png`;

export function getImage(name) {
  return ({
    amber: mhy`Ambor`,
    dainsleif: 'https://i.ibb.co/svCrpqD/d87702b9c1ba7231d3e898906d56a0b7-removebg-preview.png',
    noelle: mhy`Noel`,
    jean: mhy`Qin`,
    raiden: mhy`Shougun`,
    thoma: mhy`Tohma`,
    traveler: mhy`PlayerBoy`,
    yanfei: mhy`Feiyan`,
    alhaitham: mhy`Alhatham`,
    childe: mhy`Tartaglia`,
    baizhu: mhy`Baizhuer`,
  })[name] || mhy(name[0].toUpperCase()+name.slice(1));
}
