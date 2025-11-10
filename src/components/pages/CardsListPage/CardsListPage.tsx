import { PageTitle, AppLink, CardBanner } from "@/components/atoms";
import { URLS } from "@/urls";
import { cn } from "@/lib/utils";
import { TCG_ASPECT_CLASS } from "@/utils/tcg";

type Card = {
  id: string;
  name: string | null;
  image_small_url: string | null;
};

type Set = {
  id: string;
  name: string;
  release_date: Date;
  topCards: Card[];
};

type Series = {
  name: string;
  sets: Set[];
};

type CardsListPageProps = {
  series: Series[];
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
});

export function CardsListPage({ series }: CardsListPageProps) {
  return (
    <div className="flex flex-col gap-16">
      <PageTitle>TCG Cards</PageTitle>

      {series.map((seriesItem) => (
        <div key={seriesItem.name}>
          <h2 className="font-bold text-4xl mb-12">{seriesItem.name}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
            {seriesItem.sets.map((set) => (
              <AppLink
                key={set.id}
                className="drop-border-sm interactive rounded-lg p-3 bg-card-background relative isolate pt-10"
                href={URLS.cardSet({ id: set.id })}
              >
                <CardBanner border="sm">
                  {set.name}{" "}
                  <span className="text-foreground/60 text-sm">
                    ({dateFormatter.format(set.release_date)})
                  </span>
                </CardBanner>
                <div className="grid grid-cols-4 gap-2">
                  {set.topCards.map((card) => (
                    <img
                      key={card.id}
                      className={cn("w-full", TCG_ASPECT_CLASS)}
                      src={card.image_small_url!}
                      loading="lazy"
                      alt={card.name!}
                    />
                  ))}
                </div>
              </AppLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
