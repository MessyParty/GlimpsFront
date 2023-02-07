export interface HashtagProps {
  label: string;
}

function Hashtag({ label }: HashtagProps) {
  const style = {
    border: "none",
  };

  return <button style={style}># {label}</button>;
}

export default Hashtag;
