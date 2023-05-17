import useLoginQuery from "@/hooks/queries/useLoginQuery";
import styled from "@emotion/styled";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";

const OAuth = () => {
  const router = useRouter();
  const { code } = router.query as { code: string };

  useEffect(() => {
    if (!router.isReady) return;
  }, [router.isReady]);

  useLoginQuery(code ?? "");

  return (
    <Container>
      <Box position="relative" display="inline-flex">
        <CircularProgress
          variant="determinate"
          size={90}
          thickness={6}
          sx={{ color: "#e0e0e0", position: "absolute" }}
          value={100}
        />
        <CircularProgress
          variant="indeterminate"
          size={90}
          thickness={6}
          sx={{ position: "relative" }}
        />
      </Box>
      <Typography fontSize={28} fontWeight="bold" paddingTop="46px">
        로그인 중입니다.
      </Typography>
      <Typography fontSize={20}>잠시만 기다려주세요.</Typography>
    </Container>
  );
};

export default OAuth;

const Container = styled.div`
  padding: 100px 0px;
  text-align: center;
`;
