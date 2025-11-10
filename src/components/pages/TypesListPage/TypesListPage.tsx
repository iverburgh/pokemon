import { PageTitle } from "@/components/atoms";
import { TypeBadge } from "@/components/molecules";
import { TypeComboSelector } from "@/app/types/TypeComboSelector";
import { AllPokemonForTypeSelector } from "@/app/types/page";
import { Suspense } from "react";

type PokeType = {
  id: number;
  name: string;
  displayName: string;
};

type Props = {
  allTypes: PokeType[];
  allPokemon: AllPokemonForTypeSelector;
};

export function TypesListPage({ allTypes, allPokemon }: Props) {
  return (
    <div className="flex flex-col gap-16">
      <PageTitle description="Select a type below to view it's details.">
        Types
      </PageTitle>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {allTypes.map((pokeType) => (
          <li key={pokeType.id}>
            <TypeBadge
              name={pokeType.name}
              displayName={pokeType.displayName}
              size="large"
            />
          </li>
        ))}
      </ul>

      <hr className="border-primary/20" />

      <Suspense
        fallback={
          <div className="animate-pulse">
            <div className="h-40 bg-gray-200 rounded mb-8"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-64 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        }
      >
        <TypeComboSelector
          allPokemon={allPokemon}
          allTypes={allTypes.map((t) => ({
            name: t.name,
            displayName: t.displayName,
          }))}
        />
      </Suspense>
    </div>
  );
}
