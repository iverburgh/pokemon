import { PokemonDetailPage } from "@/components/pages";
import { ENGLISH_LANG_ID, EXCLUDED_POKEMON_IDS } from "@/consts";
import { db } from "@/db";
import { getPokemonColors } from "@/utils/getPokemonColors";
import {
  getFullPokemonDetails,
  getTcgCardsForSpecies,
} from "@/utils/getPokemonDetails";
import { sumBy } from "lodash-es";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export default async function PokemonDetailRoute({
  params,
}: {
  params: Promise<{ pokemon: string }>;
}) {
  const name = (await params).pokemon;

  const details = await getFullPokemonDetails({ name });
  if (!details) {
    notFound();
  }

  const statsTotal = sumBy(
    details.pokemon.pokemon_v2_pokemonstat ?? [],
    "base_stat",
  );

  const { displayName, species, pokemon } = details;
  const { lightVibrant } = getPokemonColors(pokemon.name);

  const evChain = species?.pokemon_v2_evolutionchain;

  // Get previous/next pokemon
  const prevPokemon = await db.pokemon_v2_pokemonspecies.findFirst({
    where: {
      id: species!.id - 1,
    },
    include: {
      pokemon_v2_pokemonspeciesname: {
        where: {
          language_id: ENGLISH_LANG_ID,
        },
      },
      pokemon_v2_pokemon: {
        take: 1,
        orderBy: {
          id: "asc",
        },
        where: {
          id: { not: { in: EXCLUDED_POKEMON_IDS } },
        },
      },
    },
  });

  const nextPokemon = await db.pokemon_v2_pokemonspecies.findFirst({
    where: {
      id: species!.id + 1,
    },
    include: {
      pokemon_v2_pokemonspeciesname: {
        where: {
          language_id: ENGLISH_LANG_ID,
        },
      },
      pokemon_v2_pokemon: {
        take: 1,
        orderBy: {
          id: "asc",
        },
        where: {
          id: { not: { in: EXCLUDED_POKEMON_IDS } },
        },
      },
    },
  });

  const tcgCards = await getTcgCardsForSpecies(displayName);

  const relatedPokemon = await db.pokemon_v2_pokemon.findMany({
    where: {
      AND: [
        { id: { not: { in: EXCLUDED_POKEMON_IDS } } },
        { pokemon_species_id: species!.id },
      ],
    },
    include: {
      pokemon_v2_pokemonform: {
        include: {
          pokemon_v2_pokemonformname: {
            where: {
              language_id: ENGLISH_LANG_ID,
            },
          },
        },
      },
    },
  });

  // Transform navigation Pokemon data
  const transformNavPokemon = (
    navPokemon: typeof prevPokemon | typeof nextPokemon,
  ) => {
    if (!navPokemon || navPokemon.pokemon_v2_pokemon.length === 0) {
      return null;
    }
    return {
      name: navPokemon.pokemon_v2_pokemon[0].name,
      displayName: navPokemon.pokemon_v2_pokemonspeciesname[0]!.name,
      imageName: navPokemon.pokemon_v2_pokemon[0].name,
    };
  };

  return (
    <PokemonDetailPage
      name={name}
      displayName={displayName}
      speciesId={species!.id}
      formName={
        pokemon.pokemon_v2_pokemonform[0]?.pokemon_v2_pokemonformname[0]?.name
      }
      types={pokemon.pokemon_v2_pokemontype!.map((type) => ({
        name: type.pokemon_v2_type!.name,
        displayName: type.pokemon_v2_type!.pokemon_v2_typename[0].name,
      }))}
      statsTotal={statsTotal}
      statData={details.pokemon.pokemon_v2_pokemonstat}
      statsColor={lightVibrant ?? "#000000"}
      details={details}
      evolutionChain={evChain}
      hasEvolutionChain={
        Number(evChain?.pokemon_v2_pokemonspecies?.length) > 1
      }
      relatedPokemon={relatedPokemon.map((p) => ({
        id: p.id,
        name: p.name,
        formName:
          p.pokemon_v2_pokemonform[0]?.pokemon_v2_pokemonformname[0]?.name,
      }))}
      moveData={details.pokemon.pokemon_v2_pokemonmove}
      tcgCards={tcgCards}
      prevPokemon={transformNavPokemon(prevPokemon)}
      nextPokemon={transformNavPokemon(nextPokemon)}
      currentPokemonId={pokemon.id}
    />
  );
}

export async function generateStaticParams() {
  const pokemon = await db.pokemon_v2_pokemon.findMany({
    where: {
      NOT: {
        id: { in: EXCLUDED_POKEMON_IDS },
      },
    },
  });

  return pokemon.map((p) => ({
    pokemon: p.name,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pokemon: string }>;
}): Promise<Metadata> {
  const name = (await params).pokemon;
  const pokemon = await db.pokemon_v2_pokemon.findFirst({
    where: {
      name,
    },
    select: {
      pokemon_v2_pokemonspecies: {
        select: {
          pokemon_v2_pokemonspeciesname: {
            where: {
              language_id: ENGLISH_LANG_ID,
            },
          },
        },
      },
    },
  });

  const displayName =
    pokemon?.pokemon_v2_pokemonspecies?.pokemon_v2_pokemonspeciesname[0]
      ?.name ?? name;

  return {
    title: `${displayName} | Pokemon`,
    icons: {
      icon: `/img/favicon/pokemon/${name}.png`,
    },
    // description: `Details about ${displayName}`,
  };
}
