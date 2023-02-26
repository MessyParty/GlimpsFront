import {
  Card,
  CardProps,
  CardMedia,
  CardContent,
  Typography,
  Divider,
} from "@mui/material";
import { QuoteLeft, QuoteRight } from "@/components/CustomIcon";
import styled from "@emotion/styled";
import Rating from "../Rating";

interface ReviewCardProps extends CardProps {
  reviewTitle?: string;
  author?: string;
  score?: number;
  description?: string;
  imgSrc?: string;
}

const ReviewCard = ({
  reviewTitle,
  author,
  score,
  description,
  imgSrc,
  ...props
}: ReviewCardProps) => {
  return (
    <Container {...props}>
      <Wrapper>
        <Content>
          <Quote>
            <div className="main">
              <div className="icon">
                <QuoteLeft />
              </div>
              <div className="quote">
                <Typography variant="h5" component="blockquote" fontSize="28px">
                  {reviewTitle}
                </Typography>
              </div>
              <div className="icon">
                <QuoteRight />
              </div>
            </div>
            <div className="author">
              <Typography>by {author}</Typography>
            </div>
          </Quote>
          <Divider />
          <Rating value={score ?? 1.5} precision={0.5} size="large" />
          <Divider />
          <Typography>{description}</Typography>
        </Content>
      </Wrapper>
      <PerfumeImg>
        <CardMedia component="img" image={imgSrc} alt="review image" />
      </PerfumeImg>
    </Container>
  );
};

export default ReviewCard;

const Container = styled(Card)`
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Content = styled(CardContent)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  flex-basis: 60%;
`;

const Quote = styled.div`
  display: flex;
  flex-direction: column;
  & > .main {
    display: flex;
    & > .quote {
      padding: 0 10px;
      display: flex;
      align-items: center;
      & > blockquote {
        font-weight: bold;
      }
    }
    & > .icon {
      min-width: 39px;
      min-height: 38px;
      & > svg {
        width: 100% !important;
        height: 100% !important;
      }
    }
  }
  & > .author {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

const PerfumeImg = styled.div`
  flex-basis: 40%;
  height: 100%;
  & > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
