import chroma from 'chroma-js';

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

export const generatePalette = palette => {
  const newPalette = {
    paletteName: palette.paletteName,
    id: palette.id,
    emoji: palette.emoji,
    colors: {},
  };

  for (let level of levels) {
    newPalette.colors[level] = [];
  }

  for (let color of palette.colors) {
    const scale = getScale(color.color, levels.length).reverse();
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, '-'),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace('rgb', 'rgba')
          .replace(')', ',1.0)'),
      });
    }
  }
  return newPalette;
};

const getRange = color => {
  const endRange = '#fff';
  return [
    chroma(color)
      .darken(1.4)
      .hex(),
    color,
    endRange,
  ];
};

const getScale = (color, numOfColors) => {
  return chroma
    .scale(getRange(color))
    .mode('lab')
    .colors(numOfColors);
};
