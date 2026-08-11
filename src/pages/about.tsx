import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import style from "@/styles/About.module.scss";
import { PersonnelData, getAllPersonnels } from "@/helpers/PersonnelHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";


export default function About({ personnel }: { personnel: PersonnelData[] }) {
  const ids = ["erisu46", "marro71", "petwe33"];
  const contacts = ids.map((id) =>
    personnel.find((person) => id == person.data.id)
  );

  return (
    <>
      <Head>
        <title>About - ImmVis</title>
      </Head>
      <main className={style.main}>
        <figure className={style.headerImage}>
          <Image width={2500} height={1000} alt="ImmVis Team" src="/content/about/immersiv-visualisering-MIT-LiU.jpg"/>
          <figcaption>Photo credits: Partic Ljung</figcaption>
        </figure>

        <h1 className={style.title}>About</h1>

        <div className={style.aboutDescription}>
          <p className="text-xl text-zinc-700">
            The Immersive and Applied Visualization team is a combination of
            two units at Linköping University, joining efforts into research
            and development in a range of technologies to create an immersive
            and engaging visualization of data.
          </p>
          <p>
            The Unit for Applied Visualization conducts internal and external
            production development with the goal of combining research data and
            visualization technology for improved science communication and use
            beyond research, with a focus on the public, schools, and business.
          </p>
          <p>
            The Immersive Visualization Unit researches and develops various
            techniques to create an immersive and captivating visualization of
            data using large-scale display systems, such as immersive domes and
            stereoscopic vision (3D), including technologies such as Augmented
            and Virtual Reality (AR/VR).
          </p>
          <p>
            Members of the group are also part of C-tech, which provides technical support 
            and maintenance of the infrastructure in the spaces (such as the dome) at Norrköping 
            Visualization Center C.
          </p>
          <p>
            Our vision is to create systems and software that enable the user
            to feel immersed and deeply engaged with their content regardless
            of the type of devices or display system and interaction techniques being
            used. The goal is to make the technology as transparent as possible such
            that the user maintains focused on and work with their content and to
            minimize distracting factors of the technologies, hardware as well as
            software. It should feel as natural as possible to continue to work with
            the data and content even though the user change devices or systems for
            visualization.
          </p>
        </div>

        <h2 className={style.subtitle}>Contact</h2>
        <div className={style.contactList}>
          {contacts.map((person) => (
            <ContactCard key={person!.data.id} person={person!} />
          ))}
        </div>
      </main>
    </>
  );
}

function ContactCard({ person }: { person: PersonnelData }) {
  const { id, name, image, position, contact_info } = person.data || {};
  const { email, phone } = contact_info || {};

  return (
    <div className={style.contact}>
      <Link href={`/personnel/${id}/`} className="flex gap-4 no-underline">
        <div className="className={style.bundle}">
          <Image width="64" height="64" alt={name} src={image!} />
        </div>

        <div className={style.bundle}>
          <span role="name">{name}</span>
          <span role="position">{position.join(", ")}</span>
        </div>
      </Link>

      <div className={style.bundle}>
        {email && (
          <div className={style.iconRow}>
            <FontAwesomeIcon icon={solidIcons.faEnvelope} fixedWidth />
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        )}
        {phone && (
          <div className={style.iconRow}>
            <FontAwesomeIcon icon={solidIcons.faPhone} fixedWidth />
            <a href={`tel:${phone}`}>{phone}</a>
          </div>
        )}
      </div>
    </div>
  );
}

// Static props used in the pre-render of this page
export async function getStaticProps({ params }: { params: { slug: string } }) {
  return {
    props: {
      personnel: await getAllPersonnels(),
    },
  };
}
