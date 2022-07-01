import styled, { keyframes } from "styled-components";
import Typo from "./Typo.svg";

const Section4Wrap = styled.div`
  height: 100vh;
  background-color: #1e33b5;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Typography = styled.p`
  position: relative;
`;

const typomove1 = keyframes`
 0%{
       right: 0%;
    }
    100%{
        right:100%;
       
    }
`;

const Typo1 = styled.p`
  animation: ${typomove1} 5s infinite alternate;
  position: absolute;
  top: 0;
  right: 0;
`;

const Typo2 = styled.p``;
const Typo3 = styled.p``;

export const Section_4 = () => {
  return (
    <Section4Wrap>
      <Typography>
        <Typo1>
          <img src={Typo} />
        </Typo1>
        <Typo2>
          <img src={Typo} />
        </Typo2>
        <Typo3>
          <img src={Typo} />
        </Typo3>
      </Typography>
    </Section4Wrap>
  );
};
