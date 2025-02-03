import IconReferenced from "@/components/atoms/icon-referenced";
import TextReferenced from "@/components/atoms/text-referenced";
import clsx from "clsx";

interface MoleculeExempleProps {
  name: string;
  className?: string;
}

const MoleculeExemple: React.FC<MoleculeExempleProps> = ({
  name,
  className,
}) => {
  return (
    <div className={clsx("flex flex-col", className || null)}>
      <TextReferenced name={name} linkedText="example" targetUrl="example" />
      <IconReferenced name={name} size={32} targetUrl="example" url="" />
    </div>
  );
};

export default MoleculeExemple;
