export default function InputWithLabel({ label, invalid, ...props }) {
  let labelClasses = 'block mb-2 text-xs font-bold tracking-widest uppercase'
  let inputClasses = 'w-full py-3 px-4 leading-6 border rounded-sm shadow'

  if (invalid) {
    labelClasses += ' text-red-400'
    inputClasses += ' bg-red-100 text-red-500 border-red-400'
  } else {
    labelClasses += ' text-stone-500'
    inputClasses += ' bg-stone-300 text-gray-700 border-none'
  }

  return (
    <p>
      <label className={labelClasses}>{label}</label>
      <input className={inputClasses} {...props} />
    </p>
  )
}
