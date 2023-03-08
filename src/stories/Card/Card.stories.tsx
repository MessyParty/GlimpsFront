import { ComponentMeta, ComponentStory } from "@storybook/react";

import CardMedia from "@mui/material/CardMedia";
import styled from "@emotion/styled";

import Card from "@/components/Card";
import Text from "@/components/Text";

export default {
  title: "MUI/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Content = (
  <div>
    <Text variant="h5">Title</Text>
    <Text variant="body1">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam doloribus
      ratione perferendis ipsa et ducimus commodi veniam, officia aspernatur
      cupiditate tempore, esse fugiat amet. Reiciendis iusto sunt quae commodi
      odit? Ducimus, non dolor maiores accusantium saepe expedita qui fuga
      dolorum adipisci pariatur mollitia omnis dignissimos?
    </Text>
    <Text variant="body1">BRAND</Text>
    <Text variant="body1">PERFUME NAME</Text>
  </div>
);
const Wrapper = styled.div`
  width: 750px;
  height: 400px;
  display: flex;

  &:hover {
    cursor: pointer;
  }
`;

export const Default: ComponentStory<typeof Card> = () => (
  <Wrapper>
    <CardMedia
      component="img"
      image="https://source.unsplash.com/random/500x500"
      alt="Random Image"
      height="400px"
      width="100px"
    />
    <Card content={Content} />
  </Wrapper>
);

export const RightCard: ComponentStory<typeof Card> = () => (
  <Wrapper>
    <Card content={Content} />
    <CardMedia
      component="img"
      image="https://source.unsplash.com/random/500x500"
      alt="Random Image"
      height="400px"
      width="375px"
    />
  </Wrapper>
);

const Score = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  padding: 20px 10px;
  border-radius: 50%;
  background-color: #000000;
  color: #ffffff;
`;

const PerfumeContent = (
  <div>
    <Score>Score</Score>
    <Text variant="subtitle1">BRAND</Text>
    <Text variant="subtitle1">PERFUME NAME</Text>
  </div>
);

const PerfumeWrapper = styled.div`
  width: 370px;
`;

export const PerfumeCard: ComponentStory<typeof Card> = () => (
  <PerfumeWrapper>
    <CardMedia
      component="img"
      image="https://source.unsplash.com/random/500x500"
      alt="Random Image"
      height="385px"
      width="385px"
    />
    <Card content={PerfumeContent} />
  </PerfumeWrapper>
);

const ReviewContent = (
  <>
    <Text variant="subtitle1">BRAND</Text>
    <Text variant="subtitle1">PERFUME NAME</Text>
    <Text variant="body1" gutterBottom>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam doloribus
      ratione perferendis ipsa et ducimus commodi veniam, officia aspernatur
      cupiditate tempore, esse fugiat amet. Reiciendis iusto sunt quae commodi
      odit? Ducimus, non dolor maiores accusantium saepe expedita qui fuga
      dolorum adipisci pariatur mollitia omnis dignissimos?
    </Text>
  </>
);

const TextWrapper = styled.div`
  width: 400px;

  &:hover {
    cursor: pointer;
  }
`;

export const ReviewTextCard: ComponentStory<typeof Card> = () => (
  <TextWrapper>
    <Card content={ReviewContent} />
  </TextWrapper>
);

const DetailContent = (
  <>
    <Text variant="h4">BRAND</Text>
    <Text variant="h6">PERFUME NAME</Text>
    <Text variant="body1" gutterBottom>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam doloribus
      ratione perferendis ipsa et ducimus commodi veniam, officia aspernatur
      cupiditate tempore, esse fugiat amet. Reiciendis iusto sunt quae commodi
      odit? Ducimus, non dolor maiores accusantium saepe expedita qui fuga
      dolorum adipisci pariatur mollitia omnis dignissimos?
    </Text>
    <p>
      태그 <span>TAG</span>
    </p>
    <p>
      태그 <span>TAG</span>
    </p>
    <p>
      태그 <span>TAG</span>
    </p>
  </>
);

const MainWrapper = styled.div`
  width: 1180px;
  display: flex;

  &:hover {
    cursor: pointer;
  }
`;

export const DetailCard: ComponentStory<typeof Card> = () => (
  <MainWrapper>
    <CardMedia
      component="img"
      image="https://source.unsplash.com/random/500x500"
      alt="Random Image"
      height="580px"
      width="580px"
    />
    <Card content={DetailContent} />
  </MainWrapper>
);
