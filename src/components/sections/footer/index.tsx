import IconReferenced from "@/components/atoms/icon-referenced";
import TextReferenced from "@/components/atoms/text-referenced";
import clsx from "clsx";
import React from "react";

interface FooterProps {
  className?: string;
}

const FooterSection: React.FC<FooterProps> = ({ className }) => {
  return (
    <section
      className={clsx(
        className || null,
        "relative flex items-center justify-center w-full"
      )}
    >
      <footer className="flex flex-col w-full items-center text-center text-surface bg-gray-950 p-10">
        <div className="container p-10 text-center text-white text-4xl">
          <h1>Example</h1>
        </div>
        <div className="flex flex-row justify-center gap-4 p-6">
          <IconReferenced
            name="youtube"
            invertColor={true}
            size={30}
            url="/icons/black-youtube.svg"
            targetUrl="https://www.youtube.com/@Example"
            className="cursor-pointer"
          />

          <IconReferenced
            name="instagram"
            invertColor={true}
            size={30}
            url="/icons/black-instagram.svg"
            targetUrl="https://www.instagram.com/Example/"
            className="cursor-pointer"
          />

          <IconReferenced
            name="tiktok"
            invertColor={true}
            size={30}
            url="/icons/black-tiktok.svg"
            targetUrl="https://www.tiktok.com/@Example"
            className="cursor-pointer"
          />

          <IconReferenced
            name="linkedin"
            invertColor={true}
            size={30}
            url="/icons/black-linkedin.svg"
            targetUrl="https://www.linkedin.com/in/Example/"
            className="cursor-pointer"
          />

          <IconReferenced
            name="email"
            invertColor={true}
            size={30}
            url="/icons/black-email.svg"
            targetUrl="mailto:Example@hotmail.com"
            className="cursor-pointer"
          />
        </div>

        <div className="w-full text-center text-white">
          © 2024 Copyright:
          <TextReferenced
            linkedText=" Athayde Labs"
            targetUrl="https://linkedin.com/in/athaydaooo"
            className="cursor-pointer"
            name="Athayde Labs Link"
          />
        </div>
      </footer>
    </section>
  );
};

export default FooterSection;
