export default function SkillList({ skills }: { skills?: string[] }) {
	return (
		<div className="skill-list">
			{skills?.map(skill =>
				<span key={skill} className="skill-list-item">
					{skill}
				</span>
			)}
		</div>
	);
}
