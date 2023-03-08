import { Typography, TypographyProps } from "@mui/material";

export interface CustomTypographyProps extends TypographyProps {
  gutterBottom?: boolean;
  noWrap?: boolean;
  paragraph?: boolean;
  textStyle?: React.CSSProperties;
  children?: React.ReactNode;
  component?: React.ElementType;
}

const Text = ({
  variant,
  gutterBottom,
  noWrap,
  paragraph,
  align,
  textStyle,
  children,
  color,
  component = "div",
  ...props
}: CustomTypographyProps & TypographyProps) => {
  if (typeof children === "boolean") {
    return null;
  }
  return (
    <Typography
      variant={variant}
      gutterBottom={gutterBottom}
      noWrap={noWrap}
      paragraph={paragraph}
      align={align}
      style={textStyle}
      color={color}
      component={component}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default Text;
