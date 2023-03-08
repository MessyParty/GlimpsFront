import {
  Card as MuiCard,
  CardProps as MuiCardProps,
  CardContent,
} from "@mui/material";

interface CardProps extends MuiCardProps {
  variant?: "outlined" | "elevation";
  useHeader?: boolean;
  content?: React.ReactNode;
  actions?: React.ReactNode;
  custom?: boolean;
  children?: React.ReactNode;
}

const Card = ({ variant, content, custom, children, ...props }: CardProps) => {
  return (
    <MuiCard variant={variant} {...props}>
      {custom ? (
        children
      ) : (
        <>
          <CardContent>{content}</CardContent>
        </>
      )}
    </MuiCard>
  );
};

export default Card;
