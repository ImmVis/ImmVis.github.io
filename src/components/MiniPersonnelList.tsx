import Image from "next/image";
import Link from "next/link";
import { PersonnelData } from "@/helpers/PersonnelHelper";
import style from "@/styles/MiniPersonnelList.module.scss";


function MiniPersonnelEntry(personnel: PersonnelData, liuid: string) {
	console.assert(personnel === undefined || personnel.data.id === liuid);
	if (personnel !== undefined) {
		return (
			<div key={liuid} className={style.item}>
				<Link href={`/personnel/${personnel.slug}`} title={personnel.data.name}>
					<Image width="256" height="256" alt={liuid} src={personnel.data.image!} />
				</Link>
			</div>
		);
	}
	else {
		return (
			<div key={liuid} className={style.item}>
				<div title={liuid}>
					<span>{liuid[0]}{liuid[3]}</span>
				</div>
			</div>
		);
	}
}

export default function MiniPersonnelList({ personnel, liuidList }: { personnel: PersonnelData[], liuidList: string[] }) {
	const validPersonnel: { [key: string]: PersonnelData } = {};
	liuidList.forEach(liuid => {
		const person = personnel.find(person => person.data.id == liuid);
		if (person) {
			validPersonnel[liuid] = person;
		}
	});

	return (
		<div className={style.list}>
			{liuidList.map(liuid => MiniPersonnelEntry(validPersonnel[liuid], liuid))}
		</div>
	);
}
