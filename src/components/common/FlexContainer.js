import styled from 'styled-components';

const FlexContainer = styled.div(
  ({ $justify = 'flex-start',$direction='flex', $alignItems='flex-start', $mt = 0, $mr = 0, $mb = 0, $ml = 0 }) => ({
    display: 'flex',
    justifyContent: $justify,
    alignItems: $alignItems,
    flexDirection: $direction,
    margin: `${$mt}px ${$mr}px ${$mb}px ${$ml}px`,
    width: '100%'
  }),
);

export default FlexContainer;