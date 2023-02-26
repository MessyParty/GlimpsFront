import { SvgIcon, SvgIconProps } from "@mui/material";
import QutoeLeftIcon from "@root/public/quote-left.svg";

const QuoteLeft = ({ ...props }: SvgIconProps) => {
  return <SvgIcon component={QutoeLeftIcon} inheritViewBox {...props} />;
};

export default QuoteLeft;
