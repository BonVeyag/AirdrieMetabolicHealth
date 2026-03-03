"use client";

import Image, { type ImageProps } from "next/image";
import { useMemo, useState } from "react";
import { getVideoThumbnailCandidates } from "@/lib/video-recommendations";

type YouTubeThumbnailProps = Omit<ImageProps, "src"> & {
  videoId: string;
  alt: string;
};

export function YouTubeThumbnail({
  videoId,
  alt,
  onLoad,
  onError,
  ...imageProps
}: YouTubeThumbnailProps) {
  const sources = useMemo(() => getVideoThumbnailCandidates(videoId), [videoId]);
  const [sourceIndex, setSourceIndex] = useState(0);
  const activeSource = sources[sourceIndex] ?? sources[0];

  const tryNextSource = () => {
    setSourceIndex((current) => (current < sources.length - 1 ? current + 1 : current));
  };

  return (
    <Image
      {...imageProps}
      src={activeSource.src}
      alt={alt}
      unoptimized
      onLoad={(event) => {
        const naturalWidth = event.currentTarget.naturalWidth;
        const minWidth = activeSource.minWidth ?? 0;

        if (minWidth > 0 && naturalWidth < minWidth) {
          tryNextSource();
          return;
        }

        onLoad?.(event);
      }}
      onError={(event) => {
        tryNextSource();
        onError?.(event);
      }}
    />
  );
}
