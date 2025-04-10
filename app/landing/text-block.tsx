const TextBlock = ({
  children,
  isBold = false,
  className = "",
}: {
  children: React.ReactNode;
  isBold?: boolean;
  className?: string;
}) => {
  const baseStyles = "text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed tracking-normal text-stone-800";
  const fontStyles = isBold ? "font-semibold italic" : "";
  const spacing = "mb-5";

  return (
    <p className={`${baseStyles} ${fontStyles} ${spacing} ${className}`}>
      {children}
    </p>
  );
};

export default TextBlock;