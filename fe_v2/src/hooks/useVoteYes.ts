import React, { useEffect, useState } from "react";

export default function useVoteYes() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
