import clsx from "clsx";
import Image from "next/image";
import React from "react";

interface IconProps {
  name: string;
  url: string;
  size: number;
  targetUrl: string;
  invertColor?: boolean;
  className?: string;
}

const IconReferenced: React.FC<IconProps> = ({
  name,
  size,
  url,
  targetUrl,
  invertColor,
  className,
}) => {
  return (
    <a href={targetUrl} target="_blank" rel="noopener noreferrer">
      <Image
        className={clsx(invertColor ? "invert" : null, className || null)}
        key={`icon-${name}`}
        alt={name}
        src={url}
        width={size}
        height={size}
      />
    </a>
  );
};

export default IconReferenced;
