import { Rating as MuiRating, RatingProps } from "@mui/material";
import { Perfume, PerfumeFull } from "../CustomIcon";
import { useController } from "react-hook-form";
import type {
  FieldPath,
  UseControllerProps,
  FieldValues,
} from "react-hook-form";

interface CustomRatingProps<
  T extends FieldValues = FieldValues,
  K extends FieldPath<T> = FieldPath<T>
> extends RatingProps {
  controlProps?: UseControllerProps<T, K>;
}

type ControlType = {
  controlProps: Exclude<CustomRatingProps["controlProps"], undefined>;
};
type OmitedRatingProps = Omit<CustomRatingProps, "controlProps">;

const DEFAULT_ICONS: Pick<RatingProps, "icon" | "emptyIcon"> = {
  icon: <PerfumeFull />,
  emptyIcon: <Perfume />,
};

const ReadOnlyRating = ({ ...props }: RatingProps) => {
  return <MuiRating {...props} readOnly />;
};

const EditAbleRating = ({
  controlProps,
  ...props
}: OmitedRatingProps & ControlType) => {
  const { field } = useController({ ...controlProps });

  return <MuiRating {...props} {...field} />;
};

const Rating = ({ controlProps, ...props }: CustomRatingProps) => {
  return controlProps === undefined ? (
    <ReadOnlyRating {...DEFAULT_ICONS} {...props} />
  ) : (
    <EditAbleRating {...DEFAULT_ICONS} controlProps={controlProps} {...props} />
  );
};

export default Rating;
