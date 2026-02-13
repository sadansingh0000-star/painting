export default function Container({ children, className = "" }) {
  return (
    <div className={`
      w-full 
      px-4 sm:px-6 lg:px-8 
      mx-auto 
      max-w-7xl 
      ${className}
    `}>
      {children}
    </div>
  )
}