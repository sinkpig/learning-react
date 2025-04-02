export default function Button({children, ...props}) {
  return (
    <button className="py-4 px-8 font-semibold uppercase bg-amber-400 text-stone-900 rounded-md border-none hover:bg-amber-500" {...props}>{children}</button>
  )
}
