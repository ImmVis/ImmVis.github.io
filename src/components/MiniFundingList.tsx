import Image from "next/image";
import { FundingData } from "@/helpers/FundingHelper";
import style from "@/styles/MiniFundingList.module.scss";


export default function MiniFundingList({ fundings, fundingIdList }: { fundings: FundingData[], fundingIdList: string[] }) {
	const validFunding: { [key: string]: FundingData } = {};
	fundingIdList.forEach(fundingId => {
		const funding = fundings.find(funding => funding.data.id == fundingId);
		if (funding) {
			validFunding[fundingId] = funding;
		}
	});

	return (
		<div className={style.list}>
			{fundingIdList.map(fundingId =>
				<div key={fundingId} className={style.item}>
					{validFunding[fundingId]
						?
						<a href={validFunding[fundingId].data.link} title={validFunding[fundingId].data.name} target="_blank">
							<Image width="256" height="256" alt={fundingId} src={validFunding[fundingId].data.icon!} />
						</a>
						:
						<div title={fundingId}>
							<span>{fundingId}</span>
						</div>
					}
				</div>
			)}
		</div>

		// <div className={style.list}>
		// 	{fundingIdList.map(fundingId =>
		// 		<div key={fundingId} className={style.item} title={validFunding[fundingId]?.name || fundingId}>
		// 			{
		// 				validFunding[fundingId]
		// 					?
		// 					<Image width="256" height="256" alt={validFunding[fundingId].id} src={validFunding[fundingId].icon!} />
		// 					:
		// 					<span>{fundingId[0]}</span>
		// 			}
		// 		</div>
		// 	)}
		// </div>
	);
}
{/* <div key={fundingId} className="fundings-list-item bg-zinc-500 rounded-full uppercase text-center text-2xl text-white" style={{ width: "64px", height: "64px", lineHeight: "64px" }}></div> */ }
