import Rating from "@/components/Rating";
import { Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import styled from "@emotion/styled";

type RatingListType = {
  name: string;
  title: string;
  subTitle: string;
};

const RatingList: RatingListType[] = [
  { name: "scentRatings", title: "본연의 향", subTitle: "SCENT" },
  { name: "longevityRatings", title: "지속력", subTitle: "LONGEVITY" },
  { name: "sillageRatings", title: "잔향", subTitle: "SILLAGE" },
];

const SpecificRating = () => {
  const { control } = useFormContext();

  return (
    <Wrapper>
      {RatingList.map(({ name, title, subTitle }) => (
        <Item key={name}>
          <div className="title">
            <Typography fontWeight="bold" fontSize={18}>
              {title}
            </Typography>
            <Typography fontSize={15} color="#474747">
              {subTitle}
            </Typography>
          </div>
          <Rating
            controlProps={{ name, control }}
            sx={{ fontSize: "40px" }}
            precision={0.5}
            size="large"
          />
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
  justify-content: space-between;
  align-items: center;
  & > .title {
    display: flex;
    flex-direction: column;
    margin-right: 2rem;
  }
`;
