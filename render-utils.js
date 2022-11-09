export function renderPest(pestData) {
    const pestEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const emojiEl = document.createElement('p');
    const hpEl = document.createElement('p');

    pestEl.classList.add('pest');

    nameEl.textContent = pestData.name;
    hpEl.id = `pest-hp-${pestData.id}`;
    hpEl.textContent = pestData.hp < 0 ? 0 : pestData.hp;

    // use a weird "ternary" to set the face
    // if the pest lives, do a imp emoji, else do a fire emoji
    emojiEl.id = `pest-face-${pestData.id}`;
    emojiEl.textContent = pestData.hp > 0 ? '🦗' : '💀';

    if (pestData.hp < 0) {
        pestEl.classList.add('dead');
    }

    pestEl.append(nameEl, emojiEl, hpEl);

    return pestEl;
}
