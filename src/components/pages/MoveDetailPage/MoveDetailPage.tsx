import { PokeCard } from "@/components/organisms";
import { DetailSection } from "@/components/molecules";
import { PageTitle, SubsectionTitle } from "@/components/atoms";

type Pokemon = {
  id: number;
  name: string;
  pokemon_species_id: number | null;
  speciesName: string;
  formName?: string;
  types: {
    name: string;
    displayName: string;
  }[];
};

type MoveDetailPageProps = {
  moveName: string;
  power: number | null;
  accuracy: number | null;
  pp: number | null;
  effects: string[];
  pokemonLearnedFromLevelUp: Pokemon[];
  pokemonLearnedFromTMHM: Pokemon[];
};

function StatItem({
  label,
  value,
}: {
  label: string;
  value: number | string | null;
}) {
  return (
    <div className="flex flex-col gap-1 items-center">
      <div className="text-3xl font-bold">{value || "–"}</div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </div>
  );
}

export function MoveDetailPage({
  moveName,
  power,
  accuracy,
  pp,
  effects,
  pokemonLearnedFromLevelUp,
  pokemonLearnedFromTMHM,
}: MoveDetailPageProps) {
  return (
    <div className="flex flex-col gap-16">
      <PageTitle>{moveName}</PageTitle>

      <DetailSection title="Stats" innerClassName="pt-8">
        <div className="flex justify-center gap-12">
          <StatItem label="Power" value={power} />
          <StatItem
            label="Accuracy"
            value={accuracy ? `${accuracy}%` : "–"}
          />
          <StatItem label="PP" value={pp} />
        </div>

        {effects.length > 0 && (
          <div className="mt-8">
            <div className="text-muted-foreground font-medium">Effects</div>
            <div className="text-sm">{effects.join(", ")}</div>
          </div>
        )}
      </DetailSection>

      {pokemonLearnedFromLevelUp.length > 0 && (
        <div>
          <SubsectionTitle className="mb-8">
            Pokemon that learn this move by level up
          </SubsectionTitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {pokemonLearnedFromLevelUp.map((pokemon) => (
              <PokeCard
                key={pokemon.id}
                speciesId={pokemon.pokemon_species_id!}
                name={pokemon.name}
                formName={pokemon.formName}
                speciesName={pokemon.speciesName}
                types={pokemon.types}
                isLink={true}
              />
            ))}
          </div>
        </div>
      )}

      {pokemonLearnedFromTMHM.length > 0 && (
        <div>
          <SubsectionTitle className="mb-8">
            Pokemon that learn this move by TM/HM
          </SubsectionTitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {pokemonLearnedFromTMHM.map((pokemon) => (
              <PokeCard
                speciesId={pokemon.pokemon_species_id!}
                key={pokemon.id}
                name={pokemon.name}
                formName={pokemon.formName}
                speciesName={pokemon.speciesName}
                types={pokemon.types}
                isLink={true}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
