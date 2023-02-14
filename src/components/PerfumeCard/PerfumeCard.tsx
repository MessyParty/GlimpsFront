export interface PerfumeCardProps {
  brand: string;
  product: string;
  score: number;
}

export default function PerfumeCard({
  brand,
  product,
  score,
}: PerfumeCardProps) {
  const style = {
    textTransform: "uppercase" as const,
  };
  return (
    <div>
      <ul style={style}>
        <li>{brand}</li>
        <li>{product}</li>
        <li>{score}</li>
      </ul>
    </div>
  );
}
