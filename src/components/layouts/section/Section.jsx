import './_section.scss'
const Section = ({children, className}) => {
  return (
    <div className={`flex ${className}`}>
      {children}
    </div>
  )
}

export default Section