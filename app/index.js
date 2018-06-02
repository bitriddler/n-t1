import './index.css';

import Grid from './grid/Grid';
import Box from './grid/Box';
import getRandomColor from './utils/getRandomColor';

const grid = new Grid({
  boxesPerRow: 6,
});

for (let i = 0; i < 20; i++) {
  grid.add(new Box({
    color: getRandomColor(),
    text: `Box ${i+1}`,
  }));
}

grid.render();
