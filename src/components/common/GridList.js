import styled from 'styled-components';

const GridList = styled.div(
  ({ $mt = 0, $mr = 0, $mb = 0, $ml = 0, $min=100, $max=240, $rgap=120, $cgap=38, $justifyContent='center'}) => ({
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fit, minmax(${$min}px, ${$max}px))`,
    justifyContent: `${$justifyContent}`,
    rowGap: `${$rgap}px`,
    columnGap: `${$cgap}px`,
    margin: `${$mt}px ${$mr}px ${$mb}px ${$ml}px`
  }),
);

export default GridList;