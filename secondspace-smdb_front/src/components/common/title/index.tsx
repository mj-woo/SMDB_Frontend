import { ITitleProps } from "./title.interface";
import style from "./title.module.scss";

export default function TitleComponent({
  title,
  actionLabel,
  link,
  children,
}: ITitleProps) {
  return (
    <div className={style.container}>
      {title && <h2>{title}</h2>}
      {children}

      {actionLabel && link && <a href={link}>{actionLabel}</a>}
    </div>
  );
}
