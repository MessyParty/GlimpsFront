import styled from "@emotion/styled";
import { Card, CardMedia, CardProps, Typography } from "@mui/material";
import { AlignPropertyParams } from "@mui/material/styles/cssUtils";
import { minHeight } from "@mui/system";
import { Score } from "../CustomIcon";

interface PerfumeCardProps extends CardProps {
  name: string;
  brand: string;
  align?: "left" | "right";
  imgSrc?: string;
  score?: number;
}

const PerfumeCard = ({
  name,
  brand,
  align,
  imgSrc,
  score,
  ...props
}: PerfumeCardProps) => {
  return (
    <Container {...props} elevation={0} style={{ overflow: "visible" }}>
      <div className="perfume-img">
        <CardMedia
          component="img"
          image={imgSrc}
          alt="perfume image"
          width={380}
          height={380}
          style={{ minWidth: "380px", minHeight: "380px" }}
        />
        {score ? (
          <div className="score">
            <Score score={score} />
          </div>
        ) : null}
      </div>
      <Typography align={align ?? "right"} fontWeight="bold" fontSize={22}>
        {name}
      </Typography>
      <Typography align={align ?? "right"} fontSize={18}>
        {brand}
      </Typography>
    </Container>
  );
};

export default PerfumeCard;

const Container = styled(Card)`
  width: fit-content;
  flex: 0 0 385px;

  & > .perfume-img {
    width: 100%;
    border: 1px solid;
    position: relative;

    & > .score {
      position: absolute;
      top: 22px;
      left: 22px;
    }
  }
`;
