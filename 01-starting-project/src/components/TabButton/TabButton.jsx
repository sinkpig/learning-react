export default function TabButton({children, onSelect, isActive}) {
  return (
    <li>
      <button className={ isActive && 'active' } onClick={onSelect}>{children}</button>
    </li>
  )
}
