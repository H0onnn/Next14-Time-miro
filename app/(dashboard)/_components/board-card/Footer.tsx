import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  authorLabel: string;
  careatedAtLabel: string;
  isFavorite: boolean;
  onClick: () => void;
  disabled: boolean;
}

export const Footer = ({
  title,
  authorLabel,
  careatedAtLabel,
  isFavorite,
  onClick,
  disabled,
}: Props) => {
  return (
    <div className="bg-white p-3 relative">
      <p className="text-[13px] truncate max-w-[calc(100%-20px)]">{title}</p>
      <p className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px] text-muted-foreground truncate">
        {authorLabel} - {careatedAtLabel}
      </p>
      <button
        disabled={disabled}
        onClick={onClick}
        className={cn(
          "opacity-0 group-hover:opacity-100 transition absolute top-3 right-3 text-muted-foreground hover:text-blue-600",
          disabled && "cursor-not-allowed opacity-75"
        )}
      >
        <Star
          className={cn("h-4 w-4", isFavorite && "text-blue-600 fill-blue-600")}
        />
      </button>
    </div>
  );
};
