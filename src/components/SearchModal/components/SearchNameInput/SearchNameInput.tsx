import Input from "@/components/Input";
import styled from "@emotion/styled";

import { useFormContext } from "react-hook-form";

const SearchNameInput = () => {
  const { control } = useFormContext();

  return (
    <Wrapper>
      <Input
        controlProps={{
          control,
          name: "name",
          rules: {
            required: "필수값입니다!",
          },
        }}
        variant="outlined"
        placeholder="당신의 향수를 찾아보세요"
      />
    </Wrapper>
  );
};

export default SearchNameInput;

const Wrapper = styled.div`
  & .MuiOutlinedInput-notchedOutline {
    border-color: transparent;
  }
`;
