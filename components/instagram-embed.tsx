"use client";

import dynamic from "next/dynamic";

const InstagramEmbed = dynamic(
  () => import("react-social-media-embed").then((mod) => mod.InstagramEmbed),
  {
    ssr: false,
    loading: () => (
      <div className="flex justify-center">
        <div
          className="bg-[#171717]/5 rounded-sm animate-pulse"
          style={{ width: 328, height: 400 }}
        />
      </div>
    ),
  }
);

export function InstagramVideo({ url }: { url: string }) {
  return (
    <div className="flex justify-center">
      <InstagramEmbed url={url} width={328} />
    </div>
  );
}
