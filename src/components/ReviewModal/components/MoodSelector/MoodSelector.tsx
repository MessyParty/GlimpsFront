import { useFormContext } from "react-hook-form";
import Select from "@/components/Select";
import styled from "@emotion/styled";

const DATA: { value: string; name: string }[] = [
  { value: "sensitive", name: "섬세한" },
];

const MoodSelector = () => {
  const { control } = useFormContext();

  return (
    <Select
      wrapper={Wrapper}
      formProps={{ control, name: "hashtag" }}
      names={DATA}
    />
  );
};

export default MoodSelector;

const Wrapper = styled.div``;
