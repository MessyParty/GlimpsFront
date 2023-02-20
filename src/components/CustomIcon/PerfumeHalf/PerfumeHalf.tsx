import { SvgIcon, SvgIconProps } from "@mui/material";
import PerfumeHalfIcon from "@root/public/perfum-half-icon.svg";

const PerfumeHalf = ({ ...props }: SvgIconProps) => {
  return <SvgIcon component={PerfumeHalfIcon} inheritViewBox {...props} />;
};

export default PerfumeHalf;
