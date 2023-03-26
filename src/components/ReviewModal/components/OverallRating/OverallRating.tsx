import Rating from "@/components/Rating";
import { useFormContext } from "react-hook-form";
import styled from "@emotion/styled";

const OverallRating = () => {
  const { control } = useFormContext();

  return (
    <Wrapper>
      <Rating
        controlProps={{
          control,
          name: "overallRatings",
          rules: { required: true },
        }}
        precision={0.5}
        sx={{ fontSize: "48px" }}
      />
    </Wrapper>
  );
};

export default OverallRating;

const Wrapper = styled.div``;
