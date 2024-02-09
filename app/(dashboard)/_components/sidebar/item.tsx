"use client";

import Image from "next/image";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Hint } from "@/components/hint";

interface Props {
  id: string;
  name: string;
  imageUri: string;
}

export const Item = ({ id, name, imageUri }: Props) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;

  const onClick = () => {
    if (!setActive) return;

    setActive({ organization: id });
  };

  return (
    <div className="aspect-square relative">
      <Hint label={name} side="right" align="start" sideOffset={18}>
        <Image
          src={imageUri}
          alt={name}
          fill
          onClick={onClick}
          className={cn(
            "rounded-md",
            "cursor-pointer",
            "hover:opacity-100",
            "transition",
            "opacity-75",
            isActive && "opacity-100"
          )}
        />
      </Hint>
    </div>
  );
};
