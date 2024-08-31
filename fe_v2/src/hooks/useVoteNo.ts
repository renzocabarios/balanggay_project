import React, { useEffect, useState } from "react";

export default function useVoteNo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
