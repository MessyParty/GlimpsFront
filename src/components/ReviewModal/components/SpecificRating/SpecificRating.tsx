import Rating from "@/components/Rating";
import { Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import styled from "@emotion/styled";

type RatingListType = {
  name: string;
  title: string;
};

const RatingList: RatingListType[] = [
  { name: "longevityRatings", title: "지속력" },
  { name: "sillageRatings", title: "잔향" },
  { name: "scentRatings", title: "본연의 향" },
];

const SpecificRating = () => {
  const { control } = useFormContext();

  return (
    <Wrapper>
      {RatingList.map(({ name, title }) => (
        <Item key={name}>
          <div className="title">
            <Typography>{title}</Typography>
          </div>
          <Rating controlProps={{ name, control }} precision={0.5} />
        </Item>
      ))}
    </Wrapper>
  );
};

export default SpecificRating;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  display: flex;
  & > .title {
    display: flex;
    flex-direction: column;
  }
`;
