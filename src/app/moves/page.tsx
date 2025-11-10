import { MovesListPage } from "@/components/pages";
import { ENGLISH_LANG_ID, MAX_TYPE_ID } from "@/consts";
import { db } from "@/db";
import { groupBy } from "lodash-es";

export default async function MovesRoute() {
  const moves = await db.pokemon_v2_move.findMany({
    include: {
      pokemon_v2_movename: {
        where: { language_id: ENGLISH_LANG_ID },
      },
      pokemon_v2_type: {
        include: {
          pokemon_v2_typename: {
            where: { language_id: ENGLISH_LANG_ID },
          },
        },
      },
      pokemon_v2_movedamageclass: {
        include: {
          pokemon_v2_movedamageclassname: {
            where: { language_id: ENGLISH_LANG_ID },
          },
        },
      },
    },
    where: {
      type_id: {
        lte: MAX_TYPE_ID,
      },
    },
    orderBy: {
      id: "asc",
    },
  });
  const movesByType = groupBy(moves, "type_id");

  // Transform data for the component
  const transformedMovesByType = Object.entries(movesByType).map(
    ([type, moves]) => ({
      type,
      typeName: moves[0]!.pokemon_v2_type!.pokemon_v2_typename[0].name,
      moves: moves.map((move) => ({
        id: move.id,
        name: move.name,
        displayName: move.pokemon_v2_movename[0]?.name ?? move.name,
        power: move.power,
        accuracy: move.accuracy,
        pp: move.pp,
        damageClassName:
          move.pokemon_v2_movedamageclass?.pokemon_v2_movedamageclassname[0]
            ?.name ?? null,
      })),
    }),
  );

  return <MovesListPage movesByType={transformedMovesByType} />;
}

