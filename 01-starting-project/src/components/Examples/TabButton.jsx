export default function TabButton({children, isActive, ...props}) {
  return (
    <li>
      <button className={ isActive ? 'active' : undefined } {...props}>{children}</button>
    </li>
  )
}
