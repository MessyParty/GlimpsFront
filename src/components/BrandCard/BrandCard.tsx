import styled from "@emotion/styled";
import {
  CardContent,
  CardMedia,
  Typography,
  Card,
  CardProps,
} from "@mui/material";

interface BrandCardProps extends CardProps {
  brandName: string;
  perfumeName: string;
  score: number;
  imgSrc?: string;
}

const BrandCard = ({
  brandName,
  perfumeName,
  score,
  imgSrc,
  ...props
}: BrandCardProps) => {
  return (
    <Container {...props}>
      <Content>
        <div className="perfume-img">
          <CardMedia component="img" image={imgSrc} alt="perfume image" />
        </div>
        <PerfumeBox>
          <div className="perfumeInfo">
            <Typography fontSize="21px" fontWeight="bold">
              {brandName}
            </Typography>
            <Typography fontSize="18px">{perfumeName}</Typography>
          </div>
          <div className="score">
            <Typography fontSize="17px">{score}</Typography>
          </div>
        </PerfumeBox>
      </Content>
    </Container>
  );
};

export default BrandCard;

const Container = styled(Card)`
  width: 409px;
  border-radius: 0;
  border: 1px solid #000;
`;
const Content = styled(CardContent)`
  padding: 0;
  & > .perfume-img img {
    width: 100%;
    height: 100%;
    min-height: 405px;
  }
`;
const PerfumeBox = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #000;
  margin: 2rem 1.5rem;

  & .perfumeInfo {
  }

  & .score {
    width: 66px;
    height: 66px;
    background-color: #000;

    & p {
      text-align: center;
      line-height: 66px;
      color: #fff;
    }
  }
`;
