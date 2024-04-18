import React from 'react';
import styled from '@emotion/styled';

const StyledSlider = styled.div`
  animation-direction: ${({ isReverse }) => (isReverse ? 'reverse' : 'normal')};
`;

const InfiniteLoopSlider = ({ children, isReverse = false }) => {
  return (
    <StyledSlider className='flex w-full justify-center items-center animate-looping-tag'>
      {children}
    </StyledSlider>
  );
};

export default InfiniteLoopSlider;
