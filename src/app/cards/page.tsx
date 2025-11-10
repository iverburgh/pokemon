import { CardsListPage } from "@/components/pages";
import { db } from "@/db";
import { groupBy } from "lodash-es";
import { sortTcgCardByBadassness } from "@/utils/tcg";

export default async function CardsRoute() {
  const sets = await db.tcg_set.findMany({
    orderBy: {
      release_date: "desc",
    },
    where: {
      name: {
        not: {
          contains: "mcdonald",
        },
      },
    },
    include: {
      tcg_card: true,
    },
  });

  const seriesGrouped = groupBy(sets, "series");

  // Transform data for the component
  const transformedSeries = Object.entries(seriesGrouped).map(
    ([seriesName, sets]) => ({
      name: seriesName,
      sets: sets.map((set) => ({
        id: set.id,
        name: set.name ?? "",
        release_date: set.release_date,
        topCards: set.tcg_card
          .toSorted(sortTcgCardByBadassness)
          .slice(0, 4)
          .map((card) => ({
            id: card.id,
            name: card.name,
            image_small_url: card.image_small_url,
          })),
      })),
    }),
  );

  return <CardsListPage series={transformedSeries} />;
}

export async function generateMetadata() {
  return {
    title: "TCG Cards",
  };
}

