import { useFormContext } from "react-hook-form";
import { Box, Chip } from "@mui/material";
import Select from "@/components/Select";
import styled from "@emotion/styled";
import type { ReviewFormType } from "@/apis/Interface/review.interface";

const DATA: { value: string; name: string }[] = [
  { value: "sensitive", name: "섬세한" },
  { value: "mood", name: "분위기있는" },
];

const MoodSelector = () => {
  const { control } = useFormContext();

  return (
    <Select
      wrapper={Wrapper}
      formProps={{ control, name: "tags" }}
      names={DATA}
      multiple
      renderValue={(value) => (
        <ChipBox>
          {(value as string[]).map((v) => (
            <Chip key={v} label={v} />
          ))}
        </ChipBox>
      )}
    />
  );
};

export default MoodSelector;

const Wrapper = styled.div``;

const ChipBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
`;
