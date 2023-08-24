import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "@/styles/SkillList.module.scss";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";


export default function SkillList({ skills, peopleCounter }: { skills?: string[], peopleCounter?: string }) {
	return (
		<div className={style.list}>
			{skills?.map(skill =>
				<span key={skill} className={style.item}>
					{skill}
				</span>
			)}
			{peopleCounter && (
				<div className={style.people}>
					<FontAwesomeIcon icon={solidIcons.faUser} fixedWidth />
					{peopleCounter}
				</div>
			)}
		</div>
	);
}
