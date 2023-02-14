export interface ReviewCardProps {
  title: string;
  description: string;
  brand: string;
  productName: string;
}

export default function ReviewCard({
  title,
  description,
  brand,
  productName,
}: ReviewCardProps) {
  const style = {
    textTransform: "uppercase" as const,
  };
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul style={style}>
        <li>{brand}</li>
        <li>{productName}</li>
      </ul>
    </div>
  );
}
