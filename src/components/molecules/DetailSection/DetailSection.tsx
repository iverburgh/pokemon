"use client";
import { CardBanner } from "@/components/atoms";
import { cn } from "@/lib/utils";
import { PropsWithChildren, ReactNode } from "react";
import styles from "./DetailSection.module.scss";

type Props = {
  title: ReactNode;
  className?: string;
  innerClassName?: string;
};

export function DetailSection({
  children,
  title,
  className,
  innerClassName,
}: PropsWithChildren<Props>) {
  return (
    <div
      className={cn(
        styles.detailSection,
        "drop-border flex-grow bg-card-background rounded-xl relative isolate",
        className,
      )}
    >
      <CardBanner size="large">{title}</CardBanner>
      <div
        className={cn(
          "overflow-hidden relative p-4 pt-8 flex flex-col gap-4 rounded-xl",
          innerClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}
