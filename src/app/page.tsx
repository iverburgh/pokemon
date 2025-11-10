import { PageTitle } from "@/components/atoms";
import { PokemonListPage } from "@/components/pages";

export default async function Home() {
  return (
    <PokemonListPage pageNum={1}>
      <PageTitle className="mb-16">Pokemon</PageTitle>
    </PokemonListPage>
  );
}

