import Head from "next/head"
import Image from "next/image"

export default function About() {
	return (
		<>
			<Head>
				<title>About - ImmVis</title>
			</Head>
			<main className="page-padding pt-16 pb-8">
				<h1 className="mt-0">
					About
				</h1>
				<Image className="float-right ml-4" width="1000" height="1000" alt="image" src="https://picsum.photos/400/200" />
				<p>Velit sunt nisi irure voluptate eu nostrud magna sit nisi. Qui ipsum magna in eu culpa qui. Cillum anim eu ea qui consectetur sunt in. Consequat aute ipsum tempor et est magna aute ad ullamco quis sint anim duis do.</p>
				<p>Aliqua eu tempor irure cupidatat mollit. Cupidatat nisi excepteur deserunt pariatur eu esse Lorem cupidatat consequat pariatur incididunt et. Cupidatat minim Lorem dolore aliqua minim duis reprehenderit. Tempor irure culpa excepteur aliqua ad. Non aliqua in culpa magna. In officia occaecat eu ea et veniam sunt occaecat. Aute cupidatat sit dolore deserunt sit voluptate culpa et esse fugiat.</p>
				<Image className="float-left mr-4" width="1000" height="1000" alt="image" src="https://picsum.photos/300/151" />
				<p>Dolore tempor eiusmod magna voluptate eiusmod do esse et occaecat incididunt consectetur exercitation nulla. Est aute occaecat culpa ex irure enim consectetur commodo duis et veniam. Et duis enim tempor anim nostrud quis eiusmod tempor sunt. Officia reprehenderit aliquip quis consectetur. Ullamco irure adipisicing consequat Lorem eu excepteur aliquip consequat mollit. Excepteur cupidatat sunt ex occaecat mollit commodo amet.</p>
				<p>Velit veniam pariatur minim quis. Sit veniam veniam irure eiusmod nulla eiusmod et consectetur consectetur reprehenderit dolor do amet. Ipsum eu Lorem irure officia sint minim deserunt sit et eu nisi.</p>
				<p>Ipsum minim deserunt mollit mollit. Commodo est amet est ex cupidatat incididunt dolore sint sint sit. Sunt anim id anim proident qui aute qui occaecat labore in culpa anim eiusmod. Ut amet adipisicing irure quis et laborum.</p>
			</main>
		</>
	)
}
