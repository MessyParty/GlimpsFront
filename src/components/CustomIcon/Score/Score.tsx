import styled from "@emotion/styled";

interface ScoreIconProps {
  score: number;
}

const Score = ({ score }: ScoreIconProps) => {
  return <Circle>{score}</Circle>;
};

export default Score;

const Circle = styled.div`
  width: 55px;
  height: 55px;
  background-color: black;
  text-align: center;
  vertical-align: middle;
  line-height: 55px;
  font-size: 22px;
  color: white;
  border-radius: 50%;
  font-weight: bold;
`;
