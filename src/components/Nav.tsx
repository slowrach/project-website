import { Link } from "./Link";

type Props = React.ComponentProps<"nav">

export function Nav({ className, ...rest }: Props) {
  return (
    <nav className={className} {...rest}>
      <Link title="Home" href="/"/>
      
      <Link title="Símbolos" href="/simbolos"/>

      <Link title="Orações" href="/oracoes"/>

      <Link title="Mais" href="/mais"/>
    </nav>
  );
}
