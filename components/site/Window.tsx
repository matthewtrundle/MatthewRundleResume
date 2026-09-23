import type { ReactNode } from "react";

type WindowProps = {
  title: ReactNode;
  aside?: ReactNode;
  className?: string;
  children: ReactNode;
};

export default function Window({ title, aside, className = "", children }: WindowProps) {
  return (
    <div className={`win ${className}`}>
      <div className="win-bar"><span>{title}</span>{aside && <span>{aside}</span>}</div>
      <div className="win-body">{children}</div>
    </div>
  );
}
