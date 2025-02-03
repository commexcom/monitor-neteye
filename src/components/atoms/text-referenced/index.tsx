import clsx from "clsx";
import React from "react";

interface TextProps {
  name: string;
  linkedText: string;
  targetUrl: string;
  className?: string;
}

const TextReferenced: React.FC<TextProps> = ({
  name,
  linkedText,
  targetUrl,
  className,
}) => {
  return (
    <a
      key={name}
      target="_blank"
      className={clsx(className || null)}
      href={targetUrl}
    >
      {linkedText}
    </a>
  );
};

export default TextReferenced;
