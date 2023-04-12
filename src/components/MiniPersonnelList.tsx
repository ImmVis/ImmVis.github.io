import Image from "next/image";
import Link from "next/link";
import { PersonnelData } from "@/helpers/PersonnelHelper";
import style from "@/styles/MiniPersonnelList.module.scss";


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
			{liuidList.map(liuid =>
				<div key={liuid} className={style.item}>
					{validPersonnel[liuid]
						?
						<Link href={`/personnel/${validPersonnel[liuid].slug}`} title={validPersonnel[liuid].data.name}>
							<Image width="256" height="256" alt={liuid} src={validPersonnel[liuid].data.image!} />
						</Link>
						:
						<div title={liuid}>
							<span>{liuid[0]}{liuid[3]}</span>
						</div>
					}
				</div>
			)}
		</div>
	);
}
