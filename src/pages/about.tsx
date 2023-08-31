import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import style from "@/styles/About.module.scss";
import { PersonnelData, getAllPersonnels } from "@/helpers/PersonnelHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";


export default function About({ personnel }: { personnel: PersonnelData[] }) {
  const ids = ["petwe33", "alebo68", "erisu46"];
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
            The Immersive Visualization group is conducting research and development in a range of technologies to create an immersive and engaging visualization of data.
          </p>
          <p>
            The visualization of data is created with the help of large scale display systems, such as domes and stereoscopic viewing (3D), also including technologies such as Augmented and Virtual Reality (AR/VR).
          </p>
          <p>
            Part of the group is also C-tech, with technical director Erik Sundén, providing technical support and maintenance of the dome and related equipment and systems at Norrköping Visualization Center C.
          </p>
          <p>
            Our vision is to create systems and software that enable the user to feel immersed and deeply engaged with their content regardless of the type of devices or display system and interaction techniques being used.
          </p>
          <p>
            The goal is to make the technology as transparent as possible such that the user maintains focused on and work with their content and to minimize distracting factors of the technologies, hardware as well as software. It should feel as natural as possible to continue to work with the data and content even though the user change devices or systems for visualization.
          </p>
          <h2>Research projects </h2>
          <ul>
            <li>
              With the CUAS project (Collaborative Unmanned Aircraft Systems) members of the group work with augmented reality to create efficient interaction methods for collaboration and navigation of unmanned aircrafts and drones through the use of handheld devices.
            </li>
            <li>
              Visualization and analysis of heterogeneous data, including provenance and persistence of data, is a challenging task growing ever more relevant as sensors and technical systems creates huge amounts of streaming data in a variety of forms.
            </li>
          </ul>
          <h2>Development projects</h2>
          <ul>
            <li>
              AVA (Aeronautic Visualization and Analysis) comprises of infrastructure and software ecosystem for the visualization and analysis of air traffic management.
            </li>
            <li>
              SGCT (Simple Graphics Cluster Toolkit) is a software component to synchronize visualization across a computer cluster with multiple projectors.
            </li>
            <li>
              DomePres is a system to easily create immersive presentation with standard tools such as PowerPoint and Keynote.
            </li>
          </ul>
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
  const { name, image, position, contact_info } = person.data || {};
  const { email, phone } = contact_info || {};

  return (
    <div className={style.contact}>
      <Link href="/personnel/petwe33/" className="flex gap-4 no-underline">
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
