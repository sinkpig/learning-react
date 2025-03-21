import './Tabs.css'

export default function Tabs({ buttons, children }) {
  return (
    <>
      <menu>{buttons}</menu>
      {children}
    </>
  )
}
