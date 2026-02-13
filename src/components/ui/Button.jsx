export default function Button({ 
  children, 
  variant = "primary", 
  size = "md",
  className = "",
  ...props 
}) {
  
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm sm:text-base",
    lg: "px-8 py-3 text-base sm:text-lg",
    xl: "px-10 py-4 text-lg sm:text-xl"
  }

  return (
    <button 
      className={`
        rounded-lg font-medium transition
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  )
}