import SingleSelect from "../../../SingleSelect/SingleSelect";
import { useFormContext } from "react-hook-form";

import styled from "@emotion/styled";

const OPTION: { value: string; name: string }[] = [
  { value: "brandname", name: "Brand" },
  { value: "perfumename", name: "Perfume" },
  { value: "notes", name: "Notes" },
];

export default function SearchSelect() {
  const { control } = useFormContext();
  return (
    <SingleSelect
      wrapper={Wrapper}
      formProps={{
        control,
        name: "option",
        rules: { required: "필수 선택값입니다!" },
      }}
      names={OPTION}
      variant="outlined"
      defaultValue="Brand"
      style={{ borderRadius: 0, borderColor: "#000" }}
    ></SingleSelect>
  );
}

const Wrapper = styled.div`
  width: 30%;
  max-width: 30%;
`;
