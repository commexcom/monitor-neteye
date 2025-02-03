import React from "react";

interface ExampleOrganismProps {
  text: string;
}

const TopMenu: React.FC<ExampleOrganismProps> = ({ text }) => {
  return (
    <header className="relative lg:absolute top-0 left-0 w-full z-10 items-center bg-inherit">
      {text}
    </header>
  );
};

export default TopMenu;
