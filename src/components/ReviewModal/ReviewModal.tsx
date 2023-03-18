import { FormProvider, useForm, useFormState } from "react-hook-form";
import styled from "@emotion/styled";
import { OverallRating } from "./components";
import type { ReviewPostType } from "@/apis/Interface/review.interface";
import SpecificRating from "./components/SpecificRating";

type ReviewFormType = Omit<ReviewPostType, "perfumeUuid">;
type ReviewModalPropsType = Pick<ReviewPostType, "perfumeUuid">;

const ReviewModal = ({ perfumeUuid }: ReviewModalPropsType) => {
  const methods = useForm<ReviewFormType>({
    defaultValues: {
      body: "",
      longevityRatings: 0,
      overallRatings: 0,
      photoUrls: [],
      sillageRatings: 0,
      title: "",
    },
  });
  const { errors } = useFormState({
    control: methods.control,
    name: "overallRatings",
  });

  const onSubmit = (data: ReviewFormType) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <OverallRating />
        <SpecificRating />
        <button type="submit">submit</button>
      </Form>
    </FormProvider>
  );
};

export default ReviewModal;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
