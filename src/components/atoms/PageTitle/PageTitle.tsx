import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";
import styles from "./PageTitle.module.scss";

export function PageTitle({
  children,
  className,
  description,
}: PropsWithChildren<{
  className?: string;
  description?: string;
}>) {
  return (
    <div className={styles.pageTitle}>
      <h1 className={cn("font-black text-5xl sm:text-6xl", className)}>
        {children}
      </h1>
      {description && (
        <p className="mt-2 text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
