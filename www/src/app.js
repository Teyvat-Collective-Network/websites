import h from 'stage0';
import images from './images.js';
import * as fzy from 'fzy.js';
const $ = (...args) => document.querySelector(...args);

async function partners() {
  const guilds = await fetch('https://api.teyvatcollective.network/guilds').then(res => res.ok ? res.json() : []);

  const partner = guild => /* html */`
    <div class="partner">
      <img src="${images[guild.character]}" height="128px" width="128px">
      <h3>${guild.name}</h3>
      <a class="button" href="https://discord.gg/${partner.invite}" target="_blank">Join</a>
    </div>
  `;

  const root = h/* html */`
    <div>
      <input type="text" placeholder="Search.." #searchbar>
      <div class="list" #list>stuff</div>
    </div>
  `;

  const { searchbar, list } = root.collect(root);

  const getScore = (needle, haystack) => fzy.hasMatch(needle, haystack) ? fzy.score(needle, haystack) : 0;
  const update = query => {
    const filtered = query 
      ? guilds
        .filter(guild => fzy.hasMatch(query, guild.name) || fzy.hasMatch(query, guild.character))
        .sort((a, b) => Math.max(getScore(query, b.name), getScore(query, b.character)) - Math.max(getScore(query, a.name), getScore(query, a.character)))
      : [...guilds].sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);
    list.innerHTML = filtered.map(partner).join('');
  }

  searchbar.oninput = () => update(searchbar.value);

  update();
  return root;
}


function themeswitch() {
  const icons = {
    dark: 'moon',
    light: 'sun',
    hover: {
      dark: 'sun',
      light: 'moon',
    }
  }

  const root = h/* html */`
    <div>
      <span class="fa-stack">
        <span class="fa-solid fa-stack-2x" #icon></span>
        <span class="fa-solid fa-stack-2x hover" #hovericon></span>
      </span>
      <input type="checkbox" ${window.localStorage.getItem('theme') !== 'light' ? 'checked' : ''} #checkbox>
    </div>
  `;

  const { icon, hovericon, checkbox } = root.collect(root);

  const update = (theme) => {
    window.localStorage.setItem('theme', theme);
    $('#themelink').href = `styles/${theme}.css`;
    
    icon.classList.remove(`fa-${icons.hover[theme]}`);
    icon.classList.add(`fa-${icons[theme]}`);

    hovericon.classList.remove(`fa-${icons[theme]}`);
    hovericon.classList.add(`fa-${icons.hover[theme]}`);
  }

  checkbox.oninput = e => update(e.target.checked ? 'dark' : 'light')

  update(window.localStorage.getItem('theme') || 'dark');
  return root;
}


partners().then(root => $('#partners').appendChild(root));
$('#themeswitch').appendChild(themeswitch());