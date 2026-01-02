"use client";

import { useState, useEffect } from "react";
import { InstagramEmbed } from "react-social-media-embed";

export function InstagramVideo({ url }: { url: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex justify-center">
        <div
          className="bg-[#171717]/5 rounded-sm animate-pulse"
          style={{ width: 328, height: 400 }}
        />
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <InstagramEmbed url={url} width={328} />
    </div>
  );
}
