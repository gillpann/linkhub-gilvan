export default function GradientText({
  children,
  className = "",
  colors=["#50c9ce", "#2a9df4", "#50c9ce", "#2a9df4", "#50c9ce"],
  animationSpeed = 3,
  showBorder = false,
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div
      className={`relative inline-block text-transparent bg-cover animate-gradient ${className}`}
      style={{
        ...gradientStyle,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        backgroundSize: "300% 100%",
      }}
    >
      {children}
    </div>
  );
}
