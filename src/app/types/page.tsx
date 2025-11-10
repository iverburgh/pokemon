import { ENGLISH_LANG_ID, EXCLUDED_POKEMON_IDS, MAX_TYPE_ID } from "@/consts";
import { db } from "@/db";
import { TypesListPage } from "@/components/pages";

export default async function TypeListingPage() {
  const allTypes = await db.pokemon_v2_type.findMany({
    where: {
      id: {
        lte: MAX_TYPE_ID,
      },
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

  const allPokemon = await getAllPokemonForTypeSelector();

  return (
    <TypesListPage
      allTypes={allTypes.map((t) => ({
        id: t.id,
        name: t.name,
        displayName: t.pokemon_v2_typename[0].name,
      }))}
      allPokemon={allPokemon}
    />
  );
}

export type AllPokemonForTypeSelector = Awaited<
  ReturnType<typeof getAllPokemonForTypeSelector>
>;

async function getAllPokemonForTypeSelector() {
  return db.pokemon_v2_pokemon.findMany({
    where: {
      NOT: { id: { in: EXCLUDED_POKEMON_IDS } },
    },
    orderBy: { pokemon_species_id: "asc" },
    select: {
      name: true,
      pokemon_v2_pokemonspecies: {
        select: {
          id: true,
          pokemon_v2_pokemonspeciesname: {
            where: {
              language_id: { equals: ENGLISH_LANG_ID },
            },
          },
        },
      },
      pokemon_v2_pokemonform: {
        include: {
          pokemon_v2_pokemonformname: {
            where: { language_id: ENGLISH_LANG_ID },
          },
        },
      },
      pokemon_v2_pokemontype: {
        select: {
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
}

