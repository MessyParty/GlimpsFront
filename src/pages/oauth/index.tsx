import useLoginQuery from "@/hooks/queries/useLoginQuery";
import { useRouter } from "next/router";
import { useEffect } from "react";

const oauth = () => {
  const router = useRouter();
  const { code } = router.query as { code: string };

  useEffect(() => {
    if (!router.isReady) return;
  }, [router.isReady]);

  useLoginQuery(code ?? "");

  return null;
};

export default oauth;
