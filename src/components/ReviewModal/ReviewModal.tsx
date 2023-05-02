import { FormProvider, useForm, useFormState } from "react-hook-form";
import styled from "@emotion/styled";
import { OverallRating } from "./components";
import type { Review, ReviewPostType } from "@/apis/Interface/review.interface";
import SpecificRating from "./components/SpecificRating";
import MoodSelector from "./components/MoodSelector";
import TitleInput from "./components/TitleInput";
import Description from "./components/Description";
import ImageInput from "./components/ImageInput";
import { Divider, Typography } from "@mui/material";
import Button from "../Button";
import Spacer from "../Spacer";
import { updateReview } from "@/apis/review";

type ReviewFormType = Omit<ReviewPostType, "perfumeUuid">;
type ReviewModalPropsType = Pick<ReviewPostType, "perfumeUuid"> & {
  perfumeName?: string;
  perfumeBrandEng?: string;
  reviewData?: Review;
};

const ReviewModal = ({
  perfumeUuid,
  perfumeName = "GENTLE NIGHT",
  perfumeBrandEng = "NONFICTION",
  reviewData,
}: ReviewModalPropsType) => {
  const methods = useForm<ReviewFormType>({
    defaultValues: {
      ...(reviewData || {
        body: "",
        longevityRatings: 0,
        overallRatings: 0,
        photoUrls: [],
        tags: [],
        sillageRatings: 0,
        title: "",
      }),
      ...reviewData,
    },
  });

  const { errors } = useFormState({
    control: methods.control,
    name: ["tags", "title", "body"],
  });

  const isEditMode = true;

  const onSubmit = async (data: ReviewFormType) => {
    console.log(data);

    if (isEditMode && reviewData?.uuid) {
      try {
        const updatedReview = await updateReview<Review, ReviewPostType>(
          reviewData.uuid,
          data,
        );
        console.log(updatedReview);
      } catch (error) {
        console.error(error);
      }
    } else {
      // 새로운 리뷰 작성
    }
  };

  return (
    <FormProvider {...methods}>
      <FormWrapper>
        <HeaderText>
          <Typography variant="h5">{perfumeName}</Typography>
          <Typography variant="subtitle1">
            {reviewData ? reviewData.perfumeBrandEng : perfumeBrandEng}
          </Typography>
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
            {/* <MoodSelector /> */}
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
            {reviewData ? "수정하기" : "리뷰 남기기"}
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
