import styled from "@emotion/styled";

const Footer = () => {
  const FooterContainer = styled.footer`
    text-align: center;
    border-top: 1px solid #000;
    margin-top: 3rem;

    & p {
      padding: 1.5rem 0;
    }
  `;

  return (
    <FooterContainer>
      <p>Copyright 2023 by glims. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
