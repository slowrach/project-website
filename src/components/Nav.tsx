import { Merge } from "../utils/merge";

type Props = React.ComponentProps<"nav">

export function Nav({ className, ...rest }: Props) {
  return (
    <nav className={Merge(["flex flex-col items-center py-5", className])} {...rest}>
      <a href="/">Home</a>
      <a href="/noticias">Notícias</a>
      <a href="/curiosidades">Curiosidades</a>
      <a href="/video">Video</a>
      <a href="/fale-conosco">Fale Conosco</a>
    </nav>
  );
}
