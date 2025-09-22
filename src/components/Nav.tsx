import { Link } from "./Link";

type Props = React.ComponentProps<"nav">

export function Nav({ className, ...rest }: Props) {
  return (
    <nav className={className} {...rest}>
      <Link title="Home"/>
      
      <Link title="Símbolos"/>

      <Link title="Curiosidades"/>

      <Link title="Orações"/>

      <Link title="Mais"/>
    </nav>
  );
}
