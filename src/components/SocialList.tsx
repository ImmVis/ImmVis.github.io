import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as brandIcons from "@fortawesome/free-brands-svg-icons";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
// faBandcamp, faBitbucket, faBlogger, faDeviantart, faDiscord, faFacebook, faFacebookF, faFacebookSquare, faFigma, faFlickr, faGitAlt, faGithub, faGithubAlt, faGithubSquare, faGitlab, faGitlabSquare, faGitSquare, faInstagram, faInstagramSquare, faItchIo, faLinkedin, faLinkedinIn, faOrcid, faPatreon, faPinterest, faReddit, faRedditSquare, faSlack, faSlackHash, faSnapchat, faSnapchatGhost, faSnapchatSquare, faSoundcloud, faSquareFacebook, faSquareGit, faSquareGithub, faSquareGitlab, faSquareInstagram, faSquareReddit, faSquareSnapchat, faSquareSteam, faSquareTumblr, faSquareTwitter, faSquareVimeo, faSquareWhatsapp, faSquareYoutube, faStackExchange, faStackOverflow, faSteam, faSteamSquare, faSteamSymbol, faTelegram, faTelegramPlane, faTiktok, faTrello, faTumblr, faTumblrSquare, faTwitch, faTwitter, faTwitterSquare, faVimeoSquare, faVuejs, faWhatsappSquare, faYoutube, faYoutubeSquare

export default function SocialList({ social }: { social?: { [key: string]: string } }) {
	const icons: { [key: string]: any } = {
		"facebook": brandIcons.faFacebookSquare,
		"github": brandIcons.faGithubSquare,
		"gitlab": brandIcons.faGitlabSquare,
		"git": brandIcons.faGitSquare,
		"instagram": brandIcons.faInstagramSquare,
		"linkedin": brandIcons.faLinkedin,
		"reddit": brandIcons.faRedditSquare,
		"snapchat": brandIcons.faSnapchatSquare,
		"steam": brandIcons.faSteamSquare,
		"trello": brandIcons.faTrello,
		"tumblr": brandIcons.faTumblrSquare,
		"twitter": brandIcons.faTwitterSquare,
		"youtube": brandIcons.faYoutubeSquare,
	};

	if (social) {
		const brands = Object.keys(social);

		return (
			<div className="flex flex-wrap gap-3">
				{brands.map(brand =>
					social[brand] && (
						<a key={brand} title={brand} href={social[brand]} className="text-zinc-500" target="_blank">
							<FontAwesomeIcon icon={icons[brand]} size="2x" />
						</a>
					)
				)}
			</div>
		);
	}

	else {
		return <></>;
	}
}
