import styled from 'styled-components';

const FlexContainer = styled.div(
  ({ $justify = 'flex-start',$direction='row', $alignItems='flex-start', $mt = 0, $mr = 0, $mb = 0, $ml = 0, fluid=false }) => ({
    display: 'flex',
    justifyContent: $justify,
    alignItems: $alignItems,
    flexDirection: $direction,
    margin: `${$mt}px ${$mr}px ${$mb}px ${$ml}px`,
    width: `${fluid ? '100%' : 'auto'}`
  }),
);

export default FlexContainer;