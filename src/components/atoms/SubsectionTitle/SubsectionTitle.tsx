import { clsx } from "clsx";
import { type PropsWithChildren, type ReactNode } from "react";
import styles from "./SubsectionTitle.module.scss";

export function SubsectionTitle({
  children,
  className,
  description,
}: PropsWithChildren<{ className?: string; description?: ReactNode }>) {
  return (
    <div className={clsx(styles.subsectionTitle, className)}>
      <h2 className={clsx("font-bold text-xl")}>{children}</h2>
      {description && <div className="text-sm">{description}</div>}
    </div>
  );
}
