import cn from "@/helpers/utils";

const Badge = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "w-fit rounded-[3px] bg-gray-50 px-2 py-1 text-xs",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Badge;
