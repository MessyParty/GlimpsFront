import { FormProvider, useForm, useFormState } from "react-hook-form";
import styled from "@emotion/styled";
import { OverallRating } from "./components";
import type { ReviewPostType } from "@/apis/Interface/review.interface";
import SpecificRating from "./components/SpecificRating";
import MoodSelector from "./components/MoodSelector";
import TitleInput from "./components/TitleInput";
import Description from "./components/Description";
import ImageInput from "./components/ImageInput";

type ReviewFormType = Omit<ReviewPostType, "perfumeUuid">;
type ReviewModalPropsType = Pick<ReviewPostType, "perfumeUuid">;

const ReviewModal = ({ perfumeUuid }: ReviewModalPropsType) => {
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

  const onSubmit = (data: ReviewFormType) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <OverallRating />
        <SpecificRating />
        <MoodSelector />
        <p>{errors?.tags?.message}</p>
        <TitleInput />
        <p>{errors?.title?.message}</p>
        <Description />
        <p>{errors?.body?.message}</p>
        <ImageInput />
        <button type="submit">submit</button>
      </Form>
    </FormProvider>
  );
};

export default ReviewModal;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
