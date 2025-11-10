import { PokeCard } from "@/components/organisms";
import { DetailSection } from "@/components/molecules";
import { PokemonEvolutions } from "@/app/pokemon/[pokemon]/PokemonEvolutions";
import { AppLink, SubsectionTitle } from "@/components/atoms";
import { PokemonDetails } from "@/app/pokemon/[pokemon]/PokemonDetails";
import { PokemonMoves } from "@/app/pokemon/[pokemon]/PokemonMoves";
import { PokemonStats } from "@/app/pokemon/[pokemon]/PokemonStats";
import { URLS } from "@/urls";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Fragment, Suspense } from "react";
import { PokemonTcgCards } from "@/app/pokemon/[pokemon]/PokemonTcgCards";
import type {
  PokemonSpeciesDetails,
  TcgCard,
} from "@/utils/getPokemonDetails";

type PokemonType = {
  name: string;
  displayName: string;
};

type RelatedPokemon = {
  id: number;
  name: string;
  formName?: string;
};

type NavigationPokemon = {
  name: string;
  displayName: string;
  imageName: string;
} | null;

type PokemonDetailPageProps = {
  name: string;
  displayName: string;
  speciesId: number;
  formName?: string;
  types: PokemonType[];
  statsTotal: number;
  statData: unknown[];
  statsColor: string;
  details: PokemonSpeciesDetails;
  evolutionChain: unknown;
  hasEvolutionChain: boolean;
  relatedPokemon: RelatedPokemon[];
  moveData: unknown[];
  tcgCards: TcgCard[];
  prevPokemon: NavigationPokemon;
  nextPokemon: NavigationPokemon;
  currentPokemonId: number;
};

export function PokemonDetailPage({
  name,
  displayName,
  speciesId,
  formName,
  types,
  statsTotal,
  statData,
  statsColor,
  details,
  evolutionChain,
  hasEvolutionChain,
  relatedPokemon,
  moveData,
  tcgCards,
  prevPokemon,
  nextPokemon,
  currentPokemonId,
}: PokemonDetailPageProps) {
  return (
    <Fragment>
      <div className="grid gap-x-8 gap-y-12 grid-cols-1 sm:grid-cols-2">
        <PokeCard
          speciesId={speciesId}
          name={name}
          speciesName={displayName}
          formName={formName}
          types={types}
          isLarge
          className="order-1"
        />

        <DetailSection
          title={`Stats (${statsTotal} total)`}
          className="order-3 sm:order-2"
          innerClassName="aspect-square"
        >
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          <PokemonStats statData={statData as any} color={statsColor} />
        </DetailSection>

        <DetailSection
          title="Details"
          className="order-2 sm:order-3 sm:col-span-2 flex flex-col"
          innerClassName="gap-12"
        >
          {hasEvolutionChain && (
            <PokemonEvolutions
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              evolutionChain={evolutionChain as any}
              pokemon={details.pokemon}
              displayName={displayName}
            />
          )}

          <PokemonDetails species={details} />

          {relatedPokemon.length > 1 && (
            <div>
              <SubsectionTitle
                className="mb-4"
                description={`Other variants of ${displayName}`}
              >
                Related Pokémon
              </SubsectionTitle>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {relatedPokemon.map((p) => (
                  <PokeCard
                    key={p.id}
                    name={p.name}
                    speciesName={displayName}
                    formName={p.formName}
                    types={[]}
                    isLink={p.id !== currentPokemonId}
                    noViewTransition
                  />
                ))}
              </div>
            </div>
          )}
        </DetailSection>

        <Suspense fallback={<div>Loading...</div>}>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          <PokemonMoves moveData={moveData as any} />
        </Suspense>

        {tcgCards.length > 0 && (
          <Suspense fallback={<div>Loading...</div>}>
            <PokemonTcgCards cards={tcgCards} speciesName={displayName} />
          </Suspense>
        )}
      </div>

      {/* bottom pagination */}
      <div className="sticky bottom-0 inset-x-0 mt-8 max-w-content mx-auto content-x-padding pb-6 sm:pb-2 flex justify-center">
        <div
          className="bg-background rounded-lg drop-border-sm overflow-hidden flex"
          style={{ viewTransitionName: "pagination-footer" }}
        >
          <AppLink
            href={
              prevPokemon
                ? URLS.pokemonDetail({ name: prevPokemon.name })
                : URLS.home()
            }
            className="flex items-center justify-between py-2 px-2 gap-1 min-w-40 hover:bg-card-background/60 active:bg-card-background/60 transition-[background] duration-150"
          >
            <ChevronLeft className="w-4" />
            {prevPokemon ? (
              <img
                src={`/img/pokemon/${prevPokemon.imageName}.avif`}
                className="w-5 aspect-square object-center object-contain"
                loading="lazy"
                alt={prevPokemon.imageName}
              />
            ) : (
              <span className="w-4" />
            )}
            <span className="flex-1 text-center">
              {prevPokemon ? prevPokemon.displayName : "Pokémon"}
            </span>
          </AppLink>
          <AppLink
            href={
              nextPokemon
                ? URLS.pokemonDetail({ name: nextPokemon.name })
                : URLS.home()
            }
            className="flex items-center py-2 px-2 gap-1 w-40 hover:bg-card-background/60 active:bg-card-background/60 transition-[background] duration-150"
          >
            <span className="flex-1 text-center truncate">
              {nextPokemon ? nextPokemon.displayName : "Pokémon"}
            </span>
            {nextPokemon ? (
              <img
                src={`/img/pokemon/${nextPokemon.imageName}.avif`}
                className="w-5 aspect-square object-center object-contain"
                loading="lazy"
                alt={nextPokemon.imageName}
              />
            ) : (
              <span className="w-4" />
            )}
            <ChevronRight className="w-4 shrink-0" />
          </AppLink>
        </div>
      </div>
    </Fragment>
  );
}
