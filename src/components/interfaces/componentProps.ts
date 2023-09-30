import { HTMLAttributes } from "react";
interface componentProps extends HTMLAttributes<HTMLDivElement> {
  // Otras propiedades específicas de tu componente
  children: HTMLAttributes<HTMLDivElement>;
}
