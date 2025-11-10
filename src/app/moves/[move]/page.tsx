import { MoveDetailPage } from "@/components/pages";
import {
  ENGLISH_LANG_ID,
  LEVEL_UP_LEARN_METHOD_ID,
  TM_LEARN_METHOD_ID,
} from "@/consts";
import { db } from "@/db";
import { isNotNull } from "@/utils/filters";
import { uniqBy } from "lodash-es";
import { notFound } from "next/navigation";

export default async function MoveRoute({
  params,
}: {
  params: Promise<{ move: string }>;
}) {
  const { move: movename } = await params;

  const move = await getMoveDetails(movename);

  if (!move) {
    notFound();
  }

  const effects = (
    move.pokemon_v2_moveeffect?.pokemon_v2_moveeffecteffecttext ?? []
  ).map((effect) => {
    if (move.move_effect_chance) {
      return effect.effect.replace(
        "$effect_chance",
        move.move_effect_chance.toString(),
      );
    }

    return effect.effect;
  });

  const pokemonLearnedFromLevelUp = uniqBy(
    move.pokemon_v2_pokemonmove
      .filter(
        (pokemonMove) =>
          pokemonMove.move_learn_method_id === LEVEL_UP_LEARN_METHOD_ID,
      )
      .map((pokemonMove) => pokemonMove.pokemon_v2_pokemon)
      .filter(isNotNull),
    "id",
  );

  const pokemonLearnedFromTMHM = uniqBy(
    move.pokemon_v2_pokemonmove
      .filter(
        (pokemonMove) =>
          pokemonMove.move_learn_method_id === TM_LEARN_METHOD_ID,
      )
      .map((pokemonMove) => pokemonMove.pokemon_v2_pokemon)
      .filter(isNotNull),
    "id",
  );

  // Transform Pokemon data
  const transformPokemon = (pokemon: (typeof pokemonLearnedFromLevelUp)[number]) => ({
    id: pokemon.id,
    name: pokemon.name,
    pokemon_species_id: pokemon.pokemon_species_id,
    speciesName:
      pokemon.pokemon_v2_pokemonspecies!.pokemon_v2_pokemonspeciesname[0]!.name,
    formName:
      pokemon.pokemon_v2_pokemonform?.[0]?.pokemon_v2_pokemonformname[0]?.name,
    types: pokemon.pokemon_v2_pokemontype.map((pokemonType) => ({
      name: pokemonType.pokemon_v2_type!.name,
      displayName: pokemonType.pokemon_v2_type!.pokemon_v2_typename[0]?.name,
    })),
  });

  return (
    <MoveDetailPage
      moveName={move.pokemon_v2_movename[0]?.name ?? movename}
      power={move.power}
      accuracy={move.accuracy}
      pp={move.pp}
      effects={effects}
      pokemonLearnedFromLevelUp={pokemonLearnedFromLevelUp.map(transformPokemon)}
      pokemonLearnedFromTMHM={pokemonLearnedFromTMHM.map(transformPokemon)}
    />
  );
}
export async function generateStaticParams() {
  const moves = await db.pokemon_v2_move.findMany();

  return moves.map((move) => ({
    move: move.name,
  }));
}

async function getMoveDetails(movename: string) {
  return db.pokemon_v2_move.findFirst({
    where: {
      name: movename,
    },
    include: {
      pokemon_v2_movename: {
        where: {
          language_id: ENGLISH_LANG_ID,
        },
      },

      pokemon_v2_moveeffect: {
        include: {
          pokemon_v2_moveeffecteffecttext: {
            where: {
              language_id: ENGLISH_LANG_ID,
            },
          },
        },
      },

      pokemon_v2_pokemonmove: {
        include: {
          pokemon_v2_pokemon: {
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
              pokemon_v2_pokemonspecies: {
                include: {
                  pokemon_v2_pokemonspeciesname: {
                    where: {
                      language_id: ENGLISH_LANG_ID,
                    },
                  },
                },
              },
              pokemon_v2_pokemontype: {
                include: {
                  pokemon_v2_type: {
                    include: {
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
          },
        },
      },
    },
  });
}

export type MoveDetails = Awaited<ReturnType<typeof getMoveDetails>>;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ move: string }>;
}) {
  const { move: movename } = await params;

  const move = await db.pokemon_v2_move.findFirst({
    where: {
      name: movename,
    },
    include: {
      pokemon_v2_movename: {
        where: {
          language_id: ENGLISH_LANG_ID,
        },
      },
    },
  });

  return {
    title: `${move?.pokemon_v2_movename[0]?.name} | Move`,
  };
}
