// icon:arrow-right | Lucide https://lucide.dev/ | Lucide
import * as React from "react";

function IconArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="14px"
      width="14px"
      {...props}
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default IconArrowRight;
