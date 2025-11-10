"use client";

import { cn } from "@/lib/utils";
import { ImageOff } from "lucide-react";
import { useState } from "react";
import styles from "./ImageWithFallback.module.scss";

type ImageWithFallbackProps = React.ComponentProps<"img">;

export function ImageWithFallback({
  className,
  ...props
}: ImageWithFallbackProps) {
  const [hasFailed, setHasFailed] = useState(false);

  if (hasFailed) {
    return (
      <div className={cn(styles.fallback, className, "flex items-center justify-center")}>
        <ImageOff className="w-full h-full" />
      </div>
    );
  }

  return (
    <img
      {...props}
      className={cn(styles.image, className)}
      onError={() => setHasFailed(true)}
      alt={props.alt}
    />
  );
}
