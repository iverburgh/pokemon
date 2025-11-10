import type { PropsWithChildren } from "react";
import Link from "next/link";
import styles from "./AppLink.module.scss";

export function AppLink({
  href,
  children,
  className,
}: PropsWithChildren<{ href: string; className?: string }>) {
  return (
    <Link href={href} className={`${styles.appLink} ${className || ""}`}>
      {children}
    </Link>
  );
}
