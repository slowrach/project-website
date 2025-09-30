type Props = React.ComponentProps<"a"> & {
   title: string
}

export function Link({title, ...rest}: Props) {
   return (
      <a href="/" className="uppercase border-t border-green-500 py-2 flex justify-center md:border-none px-6 focus:bg-linear-to-t hover:bg-linear-to-t from-shadow to-transparent" {...rest}>{title}</a>
   )
}