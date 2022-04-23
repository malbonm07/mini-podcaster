import styled from 'styled-components';

const GridList = styled.div(
  ({ $mt = 0, $mr = 0, $mb = 0, $ml = 0, $min=100, $max=240, $rgap=120}) => ({
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fit, minmax(${$min}px, ${$max}px))`,
    justifyContent: 'space-between',
    rowGap: `${$rgap}px`,
    margin: `${$mt}px ${$mr}px ${$mb}px ${$ml}px`
  }),
);

export default GridList;