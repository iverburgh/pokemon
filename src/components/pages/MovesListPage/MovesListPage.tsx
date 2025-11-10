import { DetailSection } from "@/components/molecules";
import { AppLink, PageTitle } from "@/components/atoms";
import { startCase } from "lodash-es";
import { Fragment } from "react";

type Move = {
  id: number;
  name: string;
  displayName: string;
  power: number | null;
  accuracy: number | null;
  pp: number | null;
  damageClassName: string | null;
};

type MovesByType = {
  type: string;
  typeName: string;
  moves: Move[];
};

type MovesListPageProps = {
  movesByType: MovesByType[];
};

export function MovesListPage({ movesByType }: MovesListPageProps) {
  return (
    <Fragment>
      <PageTitle className="mb-16">Moves</PageTitle>

      <div className="grid grid-cols-1 gap-16">
        {movesByType.map(({ type, typeName, moves }) => (
          <DetailSection key={type} title={typeName} innerClassName="pt-16">
            <div className="grid grid-cols-[1fr_60px_60px] sm:grid-cols-[1fr_80px_80px_80px_80px] gap-x-1 gap-y-1.5 relative">
              <div className="contents">
                <div className="font-medium text-muted-foreground">Move</div>
                <div className="hidden sm:block font-medium text-muted-foreground">
                  Class
                </div>
                <div className="font-medium text-muted-foreground text-center">
                  Power
                </div>
                <div className="font-medium text-muted-foreground text-center">
                  Accuracy
                </div>
                <div className="hidden sm:block font-medium text-muted-foreground text-center">
                  PP
                </div>
              </div>
              {moves.map((move) => (
                <Fragment key={move.name}>
                  <AppLink
                    href={`/moves/${move.name}`}
                    className="font-medium hover:underline"
                  >
                    {move.displayName}
                  </AppLink>
                  <div className="hidden sm:block">
                    {move.damageClassName ? startCase(move.damageClassName) : "–"}
                  </div>
                  <div className="text-center">{move.power || "–"}</div>
                  <div className="text-center">
                    {move.accuracy ? `${move.accuracy}%` : "–"}
                  </div>
                  <div className="hidden sm:block text-center">
                    {move.pp || "–"}
                  </div>
                </Fragment>
              ))}
            </div>
          </DetailSection>
        ))}
      </div>
    </Fragment>
  );
}
