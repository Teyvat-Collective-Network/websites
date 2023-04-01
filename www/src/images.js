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
    taroumaru: 'https://i.imgur.com/tfZXyvz.png',
    tingyun: 'https://i.imgur.com/GAwBzSz.png',
    radish: 'https://i.imgur.com/m0qAIN8.png',
    secretary: 'https://i.imgur.com/FA0mMOc.png',
    sonic: 'https://i.imgur.com/1fjomW8.png',
    crab: 'https://i.imgur.com/zRopTje.png',
    abyss: 'https://i.imgur.com/dVptLYU.png',
    azar: 'https://i.imgur.com/drN6SKX.png',
    dvalin: 'https://i.imgur.com/PyezcFT.png',
    wooper: 'https://i.imgur.com/Sh6toNC.png',
    xiaoyai: 'https://i.imgur.com/CdeJd77.png',
    oz: 'https://i.imgur.com/EE0tfvT.png',
    karkata: 'https://i.imgur.com/UwF33Qa.png',
    N03113: 'https://i.imgur.com/M2PERyB.png',
    jinyun: 'https://i.imgur.com/WQMawLR.png',
  })[name] || mhy(name[0].toUpperCase()+name.slice(1));
}
