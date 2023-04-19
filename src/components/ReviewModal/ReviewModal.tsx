import { FormProvider, useForm, useFormState } from "react-hook-form";
import styled from "@emotion/styled";
import { OverallRating } from "./components";
import type { ReviewPostType } from "@/apis/Interface/review.interface";
import SpecificRating from "./components/SpecificRating";
import MoodSelector from "./components/MoodSelector";
import TitleInput from "./components/TitleInput";
import Description from "./components/Description";
import ImageInput from "./components/ImageInput";
import { Divider, Typography } from "@mui/material";
import useCreateReview from "@/hooks/queries/useCreateReview";
import Button from "../Button";
import Spacer from "../Spacer";

type ReviewFormType = Omit<ReviewPostType, "perfumeUuid">;
type ReviewModalPropsType = Pick<ReviewPostType, "perfumeUuid"> & {
  perfumeName?: string;
  perfumeSubName?: string;
};

const ReviewModal = ({
  perfumeUuid,
  perfumeName = "GENTLE NIGHT",
  perfumeSubName = "NONFICTION",
}: ReviewModalPropsType) => {
  const methods = useForm<ReviewFormType>({
    defaultValues: {
      body: "",
      longevityRatings: 0,
      overallRatings: 0,
      photoUrls: [],
      tags: [],
      sillageRatings: 0,
      title: "",
    },
  });
  const { errors } = useFormState({
    control: methods.control,
    name: ["tags", "title", "body"],
  });
  const { mutate } = useCreateReview();

  const onSubmit = (data: ReviewFormType) => {
    // console.log(data);
    mutate({ perfumeUuid, ...data });
  };

  return (
    <FormProvider {...methods}>
      <FormWrapper>
        <HeaderText>
          <Typography variant="h5">{perfumeName}</Typography>
          <Typography variant="subtitle1">{perfumeSubName}</Typography>
        </HeaderText>
        <Spacer y={2} />
        <ReviewDivider variant="middle" />
        <Spacer />
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          <OverallRating />
          <Spacer />
          <ReviewDivider variant="middle" />
          <Spacer />
          <WrapperLeft>
            <Typography variant="h6">Detail</Typography>
            <SpecificRating />
          </WrapperLeft>
          <Spacer />
          <WrapperFull>
            <Typography variant="h6">Mood</Typography>
            <MoodSelector />
            {errors?.tags?.message ? (
              <ErrorMsg>{errors?.tags?.message}</ErrorMsg>
            ) : null}
          </WrapperFull>
          <Spacer />
          <WrapperFull>
            <Typography variant="h6">Title</Typography>
            <TitleInput />
            {errors?.title?.message ? (
              <ErrorMsg>{errors?.title?.message}</ErrorMsg>
            ) : null}
          </WrapperFull>
          <Spacer />
          <WrapperFull>
            <Typography variant="h6">Description</Typography>
            <Description />
            {errors?.body?.message ? (
              <ErrorMsg>{errors?.body?.message}</ErrorMsg>
            ) : null}
          </WrapperFull>
          <Spacer />
          <WrapperLeft>
            <Typography variant="h6">File</Typography>
            <ImageInput />
          </WrapperLeft>
          <Spacer />
          <Button
            type="submit"
            variant="contained"
            customColor="black"
            customTextColor="white"
          >
            리뷰 남기기
          </Button>
        </Form>
      </FormWrapper>
    </FormProvider>
  );
};

export default ReviewModal;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ReviewDivider = styled(Divider)`
  width: 100%;
`;

const WrapperLeft = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
`;

const WrapperFull = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
`;

const ErrorMsg = styled(Typography)`
  color: red;
`;
