import Image from "next/image";
import { FundingData } from "@/helpers/FundingHelper";
import style from "@/styles/MiniFundingList.module.scss";


function MiniFundingEntry(funding: FundingData, fundingId: string) {
	console.assert(funding === undefined || funding.data.id === fundingId);

	if (funding !== undefined) {
		return (
			<div key={fundingId} className={style.item}>
				<a href={funding.data.link} title={funding.data.name} target="_blank">
					<Image width="256" height="256" alt={funding.data.id} src={funding.data.icon!} />
				</a>
			</div>
		);
	}
	else {
		return (
			<div key={fundingId} className={style.item}>
				<div title={fundingId}>
					<span>{fundingId}</span>
				</div>
			</div>
		);
	}
}

export default function MiniFundingList({ fundings, fundingIdList }: { fundings: FundingData[], fundingIdList: string[] }) {
	let validFunding: { [key: string]: FundingData } = {};
	fundingIdList.forEach(fundingId => {
		const funding = fundings.find(funding => funding.data.id == fundingId);
		if (funding) {
			validFunding[fundingId] = funding;
		}
	});

	return (
		<div className={style.list}>
			{fundingIdList.map(fundingId => MiniFundingEntry(validFunding[fundingId], fundingId))}
		</div>
	);
}
