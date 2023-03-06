import PerfumeIcon from "@root/public/perfum-empty-icon.svg";
import { SvgIcon, SvgIconProps } from "@mui/material";

const Perfume = ({ ...props }: SvgIconProps) => {
  return <SvgIcon component={PerfumeIcon} inheritViewBox {...props} />;
};

export default Perfume;
