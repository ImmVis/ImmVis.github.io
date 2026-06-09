import Image from "next/image";
import Link from "next/link";
import { InitiativeData } from "@/helpers/InitiativeHelper";
import style from "@/styles/MiniInitiativeList.module.scss";

function MiniInitiativeEntry(initiative: InitiativeData, initiativeId: string) {
  console.assert(
    initiative === undefined || initiative.data.id === initiativeId,
  );

  if (initiative !== undefined) {
    return (
      <div key={initiativeId} className={style.item}>
        <Link
          href={`/initiatives/${initiative.data.id}`}
          title={initiative.data.name}
        >
          <Image
            width="256"
            height="256"
            alt={initiative.data.name}
            src={initiative.data.image}
          />
        </Link>
      </div>
    );
  } else {
    return (
      <div key={initiativeId} className={style.item}>
        <div title={initiativeId}>
          <span>{initiativeId}</span>
        </div>
      </div>
    );
  }
}

export default function MiniInitiativeList({
  initiatives,
  initiativeIdList,
}: {
  initiatives: InitiativeData[];
  initiativeIdList: string[];
}) {
  let validInitiative: { [key: string]: InitiativeData } = {};
  initiativeIdList.forEach((initiativeId) => {
    const initiative = initiatives.find(
      (initiative) => initiative.data.id == initiativeId,
    );
    if (initiative) {
      validInitiative[initiativeId] = initiative;
    }
  });

  return (
    <div className={style.list}>
      {initiativeIdList.map((initiativeId) =>
        MiniInitiativeEntry(validInitiative[initiativeId], initiativeId),
      )}
    </div>
  );
}
