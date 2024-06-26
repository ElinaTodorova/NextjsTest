import { Hero } from "../sections";
import { AgencySelection } from "../sections/AgencySelection/AgencySelection.jsx";

const heroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};

const data = {
  title: "Managed agency selection",
  subtitle: "Stengthen your onboarding process",
  cards: [
    {
      id: 1,
      icon: { src: "/img/brief-icon.png", alt: "", width: "3rem", height: "3rem" },
      title: "Brief",
      content:
        "Complete brief writing or simple guidance on what to include, we've got you covered",
    },
    {
      id: 2,
      icon: { src: "/img/search-icon.png", alt: "", width: "3rem", height: "3rem" },
      title: "Search",
      content:
        "In-depth agency search covering; criteria matching, door knocking and due-dilligence vetting.",
    },
    {
      id: 3,
      icon: { src: "/img/pitch-icon.png", alt: "", width: "3rem", height: "3rem" },
      title: "Pitch",
      content:
        "Comprehensive pitch management, including comms, diary management and pitch hosting",
    },
  ],
  video: { src: "/img/video.png", alt: "", width: "20rem", height: "35rem" },
  image: {
    src: "/img/background.png",
    alt: "background-img",
    width: 500,
    height: 400,
  },
}

export default function Home() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div>
        {/* <Hero {...heroProps} /> */}
        <AgencySelection {...data} />
      </div>
    </>
  );
}
