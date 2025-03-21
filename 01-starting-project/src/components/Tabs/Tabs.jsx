import './Tabs.css'

export default function Tabs({ buttons, children, Wrapper = 'menu' }) {
  return (
    <>
      <Wrapper>{buttons}</Wrapper>
      {children}
    </>
  )
}
