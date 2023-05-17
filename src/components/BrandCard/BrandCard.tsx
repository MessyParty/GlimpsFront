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
          <div className="perfume-info">
            <Typography fontSize="21px" textAlign="left">
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
  max-width: 781px;
  min-width: 384px;
  height: 540px;
  border-radius: 0;
  border: 1px solid #000;
`;

const Content = styled(CardContent)`
  padding: 0;

  & > .perfume-img img {
    width: 100%;
    height: 405px;
    object-fit: contain;
  }
`;

const PerfumeBox = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #000;
  margin: 23px 26px 14px 26px;

  & .score {
    width: 66px;
    height: 66px;
    background-color: #000;

    & p {
      line-height: 66px;
      color: #fff;
    }
  }
`;
