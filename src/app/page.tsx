import { PageTitle } from "@/components/atoms";
import { PokemonListPage } from "@/components/templates/PokemonListPage";

export default async function Home() {
  return (
    <PokemonListPage pageNum={1}>
      <PageTitle className="mb-16">Pokemon</PageTitle>
    </PokemonListPage>
  );
}

