import { PokeCard } from "@/components/organisms";
import { PageTitle, SubsectionTitle } from "@/components/atoms";
import { DetailSection, TypeBadge } from "@/components/molecules";
import { TYPE_COLORS } from "@/consts";

type TypeEfficacy = {
  name: string;
  displayName: string;
  damageFactor: number;
};

type PokemonType = {
  name: string;
  displayName: string;
};

type Pokemon = {
  id: number;
  name: string;
  pokemon_species_id: number | null;
  speciesName: string;
  formName?: string;
  types: PokemonType[];
};

type PokeType = {
  id: number;
  name: string;
  displayName: string;
};

type TypeDetailPageProps = {
  pokeType: PokeType;
  effectiveAgainst: TypeEfficacy[];
  effectiveFrom: TypeEfficacy[];
  allPokemon: Pokemon[];
};

export function TypeDetailPage({
  pokeType,
  effectiveAgainst,
  effectiveFrom,
  allPokemon,
}: TypeDetailPageProps) {
  return (
    <div className="flex flex-col gap-16">
      <PageTitle>{pokeType.displayName}</PageTitle>

      <div className="grid grid-cols-1 gap-16">
        <DetailSection title="Attacking effectiveness">
          <p className="mb-2">
            The effectiveness of{" "}
            <span
              className="font-bold"
              style={{
                color: TYPE_COLORS[pokeType.name],
              }}
            >
              {pokeType.displayName}
            </span>{" "}
            against other types.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {effectiveAgainst.map((efficacy) => (
              <TypeBadge
                key={efficacy.name}
                name={efficacy.name}
                displayName={efficacy.displayName}
                variant="efficacy"
                factor={efficacy.damageFactor}
              />
            ))}
          </div>
        </DetailSection>

        <DetailSection title="Weaknesses">
          <p className="mb-2">
            The effectiveness of other types against{" "}
            <span
              className="font-bold"
              style={{ color: TYPE_COLORS[pokeType.name] }}
            >
              {pokeType.displayName}
            </span>
            .
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {effectiveFrom.map((efficacy) => (
              <TypeBadge
                key={efficacy.name}
                name={efficacy.name}
                displayName={efficacy.displayName}
                variant="efficacy"
                factor={efficacy.damageFactor}
              />
            ))}
          </div>
        </DetailSection>
      </div>

      <div>
        <SubsectionTitle
          className="mb-8"
          description={`View all ${allPokemon.length} Pokemon with a type of ${pokeType.displayName}.`}
        >
          Pokemon with this type
        </SubsectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {allPokemon.map((p) => (
            <PokeCard
              key={p.id}
              isLink={true}
              speciesId={p.pokemon_species_id!}
              name={p.name}
              speciesName={p.speciesName}
              formName={p.formName}
              types={p.types}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
