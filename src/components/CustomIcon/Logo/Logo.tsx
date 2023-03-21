import GlimsIcon from "@root/public/glims-logo.svg";
import { SvgIcon, SvgIconProps } from "@mui/material";

const Logo = ({ ...props }: SvgIconProps) => {
  return <SvgIcon component={GlimsIcon} inheritViewBox {...props} />;
};

export default Logo;
