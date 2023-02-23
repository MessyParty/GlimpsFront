import useLoginQuery from "@/hooks/queries/useLoginQuery";
import { useRouter } from "next/router";
import { useEffect } from "react";

const oauth = () => {
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    if (!router.isReady) return;
  }, [router.isReady]);

  useLoginQuery((code as string) || "");

  return null;
};

export default oauth;
