import { keyframes } from 'styled-components'

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate(-200px, -100px);
  }
  to {
    opacity: 1;
    transform: translateY(-200px, 0);
  }
`;