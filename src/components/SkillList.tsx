import style from "@/styles/SkillList.module.scss";


export default function SkillList({ skills }: { skills?: string[] }) {
	return (
		<div className={style.list}>
			{skills?.map(skill =>
				<span key={skill} className={style.item}>
					{skill}
				</span>
			)}
		</div>
	);
}
