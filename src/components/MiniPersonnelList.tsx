import Image from "next/image";
import Link from "next/link";
import { PersonnelData } from "@/helpers/PersonnelHelper";
import style from "@/styles/MiniPersonnelList.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";

function MiniPersonnelEntry(personnel: PersonnelData, liuid: string) {
	console.assert(personnel === undefined || personnel.data.id === liuid);

	if (personnel !== undefined) {
		let link: string = `/personnel/${personnel.slug}`;
		if (personnel.data.external) {
			link = personnel.data.personal_webpage || "#";
		}

		return (
			<div key={liuid} className="relative">
				<div key={liuid} className={style.item}>
					<Link href={link} title={personnel.data.name}>
						<Image
							width="256"
							height="256"
							alt={liuid}
							src={personnel.data.image!}
						/>
					</Link>
				</div>
				{personnel.data.external && (
					<div className={style.external}>
						<FontAwesomeIcon icon={solidIcons.faExternalLink} />
					</div>
				)}
			</div>
		);
	} else {
		return (
			<div key={liuid} className={style.item}>
				<div title={liuid}>
					<span>
						{liuid[0]}
						{liuid[3]}
					</span>
				</div>
			</div>
		);
	}
}

export default function MiniPersonnelList({
	personnel,
	liuidList,
}: {
	personnel: PersonnelData[];
	liuidList: string[];
}) {
	const validPersonnel: { [key: string]: PersonnelData } = {};
	liuidList.forEach((liuid) => {
		const person = personnel.find((person) => person.data.id == liuid);
		if (person) {
			validPersonnel[liuid] = person;
		}
	});

	return (
		<div className={style.list}>
			{liuidList.map((liuid) =>
				MiniPersonnelEntry(validPersonnel[liuid], liuid)
			)}
		</div>
	);
}
