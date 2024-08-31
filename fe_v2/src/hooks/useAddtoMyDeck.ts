import React, { useEffect, useState } from "react";

export default function useCreateDeck() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
