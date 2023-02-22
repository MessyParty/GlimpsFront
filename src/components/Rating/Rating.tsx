import { Rating as MuiRating, RatingProps } from "@mui/material";
import { Perfume, PerfumeFull, PerfumeHalf } from "../CustomIcon";
import type {
  FieldPath,
  UseControllerProps,
  FieldValues,
} from "react-hook-form";
import EditAbleRating from "./components/EditAbleRating";

interface CustomRatingProps<T = unknown> extends RatingProps {
  controlProps?: T;
}

const DEFAULT_ICONS: Pick<RatingProps, "icon" | "emptyIcon"> = {
  icon: <PerfumeFull />,
  emptyIcon: <Perfume />,
};

const ReadOnlyRating = ({ ...props }: RatingProps) => {
  return <MuiRating {...props} readOnly />;
};

const Rating = <
  T extends FieldValues = FieldValues,
  K extends FieldPath<T> = FieldPath<T>
>({
  controlProps,
  ...props
}: CustomRatingProps<UseControllerProps<T, K>>) => {
  return controlProps === undefined ? (
    <ReadOnlyRating {...DEFAULT_ICONS} {...props} />
  ) : (
    <EditAbleRating {...DEFAULT_ICONS} {...props} controlProps={controlProps} />
  );
};

export default Rating;
