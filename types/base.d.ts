
declare module "*.svg" {
  import type { ReactElement, HTMLAttributes } from "react";

  const content: (props: HTMLAttributes<HTMLDivElement>) => ReactElement;

  export default content;
}
