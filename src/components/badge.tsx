import cn from "@/helpers/utils";

const Badge = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return <div className={cn("bg-gray-50", className)}>{children}</div>;
};

export default Badge;
