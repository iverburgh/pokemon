import { TypeDetailPage } from "@/components/pages";
import {
  ENGLISH_LANG_ID,
  EXCLUDED_POKEMON_IDS,
  MAX_TYPE_ID,
} from "@/consts";
import { db } from "@/db";
import { getPokemonTypeEfficacies } from "@/utils/pokemonTypes";
import { notFound } from "next/navigation";

export default async function TypeDetailRoute({
  params,
}: {
  params: Promise<{ typename: string }>;
}) {
  const { typename } = await params;

  const pokeType = await db.pokemon_v2_type.findFirst({
    where: {
      name: typename,
    },
    include: {
      pokemon_v2_typename: {
        where: {
          language_id: {
            equals: ENGLISH_LANG_ID,
          },
        },
      },
    },
  });

  if (!pokeType) {
    notFound();
  }

  const { effectiveAgainst, effectiveFrom } = await getPokemonTypeEfficacies({
    typeId: pokeType.id,
  });

  const typeId = pokeType.id;
  const allPokemon = await db.pokemon_v2_pokemon.findMany({
    orderBy: {
      pokemon_species_id: "asc",
    },

    where: {
      AND: [
        {
          NOT: { id: { in: EXCLUDED_POKEMON_IDS } },
        },
        {
          pokemon_v2_pokemontype: {
            some: {
              type_id: typeId,
            },
          },
        },
      ],
    },

    include: {
      pokemon_v2_pokemonform: {
        include: {
          pokemon_v2_pokemonformname: {
            where: { language_id: ENGLISH_LANG_ID },
          },
        },
      },

      pokemon_v2_pokemonspecies: {
        include: {
          pokemon_v2_pokemonspeciesname: {
            where: {
              language_id: {
                equals: ENGLISH_LANG_ID,
              },
            },
          },
        },
      },

      pokemon_v2_pokemontype: {
        include: {
          pokemon_v2_type: {
            select: {
              name: true,
              pokemon_v2_typename: {
                where: {
                  language_id: ENGLISH_LANG_ID,
                },
              },
            },
          },
        },
      },
    },
  });

  // Transform data for the component
  const transformedPokemon = allPokemon.map((p) => ({
    id: p.id,
    name: p.name,
    pokemon_species_id: p.pokemon_species_id,
    speciesName:
      p.pokemon_v2_pokemonspecies?.pokemon_v2_pokemonspeciesname[0]?.name ??
      p.name,
    formName:
      p.pokemon_v2_pokemonform?.at(0)?.pokemon_v2_pokemonformname[0]?.name,
    types: p.pokemon_v2_pokemontype.map((t) => ({
      name: t.pokemon_v2_type!.name,
      displayName: t.pokemon_v2_type!.pokemon_v2_typename[0].name,
    })),
  }));

  return (
    <TypeDetailPage
      pokeType={{
        id: pokeType.id,
        name: pokeType.name,
        displayName: pokeType.pokemon_v2_typename[0].name,
      }}
      effectiveAgainst={effectiveAgainst}
      effectiveFrom={effectiveFrom}
      allPokemon={transformedPokemon}
    />
  );
}

export async function generateStaticParams() {
  const allTypes = await db.pokemon_v2_type.findMany({
    where: {
      id: { lte: MAX_TYPE_ID },
    },
  });

  return allTypes.map((type) => ({
    typename: type.name,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ typename: string }>;
}) {
  const { typename } = await params;

  const pokeType = await db.pokemon_v2_type.findFirst({
    where: {
      name: typename,
    },
    include: {
      pokemon_v2_typename: {
        where: {
          language_id: ENGLISH_LANG_ID,
        },
      },
    },
  });

  return {
    title: `${pokeType?.pokemon_v2_typename[0].name} | Type`,
  };
}
