import React from "react";
import { Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import styled from "@emotion/styled";
import Rating from "@/components/Rating";
import { CatchingPokemon } from "@mui/icons-material";

type RatingListType = {
  name: string;
  title: string;
  subTitle: string;
  value: number;
};

type DetailRatingProps = {
  scentRatings: number;
  longevityRatings: number;
  sillageRatings: number;
};

export default function DetailRating({
  scentRatings,
  longevityRatings,
  sillageRatings,
}: DetailRatingProps) {
  const RatingList: RatingListType[] = [
    {
      name: "scentRatings",
      title: "본연의 향",
      subTitle: "SCENT",
      value: scentRatings,
    },
    {
      name: "longevityRatings",
      title: "지속력",
      subTitle: "LONGEVITY",
      value: longevityRatings,
    },
    {
      name: "sillageRatings",
      title: "잔향",
      subTitle: "SILLAGE",
      value: sillageRatings,
    },
  ];

  return (
    <Wrapper>
      {RatingList.map(({ name, title, subTitle, value }) => (
        <Item key={name}>
          <div className="title">
            <Typography fontWeight="bold" fontSize={20}>
              {title}
            </Typography>
            <Typography fontSize={18} color="#474747">
              {subTitle}
            </Typography>
          </div>
          <Rating
            sx={{ fontSize: "48px" }}
            value={value ?? 0.5}
            precision={0.5}
            size="large"
          />
        </Item>
      ))}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
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
