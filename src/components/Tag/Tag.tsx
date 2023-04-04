import styled from "@emotion/styled";

interface TagProps {
  content: string;
}

const Tag = ({ content }: TagProps) => {
  return <Square>#{content}</Square>;
};

export default Tag;

const Square = styled.div`
  display: inline-block;
  margin: 5px;
  border: 1px solid;
  width: fit-content;
  font-size: 16px;
  padding: 10px;
`;
