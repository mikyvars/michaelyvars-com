import Image from "next/image";
import Tag from "../components/tag";
import Typography from "../components/typography";
import Container from "../components/container";

const About = () => {
  return (
    <Container className="bg-gray-50">
      <div className="flex flex-col items-center gap-6 md:gap-12">
        <Tag>À propos de moi</Tag>
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="mb-auto flex flex-1">
            <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
              <Image
                src="/images/avatar-2.jpg"
                alt="Michael Yvars"
                className="absolute right-5 z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:top-0 md:right-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
                width={240}
                height={280}
                style={{ objectFit: "cover" }}
              />
              <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-6">
            <Typography variant="h3">
              Vous êtes curieux à mon sujet ?
            </Typography>
            <Typography variant="body2" className="text-justify">
              Depuis bientôt <strong>10 ans</strong>, je gravite autour du monde
              du développement. J&apos;ai commencé par bidouiller des projets
              sur des jeux vidéo, en codant en <strong>Java</strong> et en{" "}
              <strong>Lua</strong>, sans vraiment savoir que j&apos;étais en
              train de trouver ma voie. Cette curiosité m&apos;a suivi
              jusqu&apos;à aujourd&apos;hui, nourrissant mon envie constante
              d&apos;apprendre, d&apos;explorer de nouvelles technologies et de
              donner vie à des projets concrets. Aujourd&apos;hui, je me
              spécialise dans le <strong>développement web</strong>, en
              travaillant principalement avec <strong>JavaScript</strong>,{" "}
              <strong>Next.js</strong> et <strong>TailwindCSS</strong> pour
              créer des applications modernes, rapides et élégantes.
            </Typography>

            <Typography variant="body2" className="text-justify">
              Ce que j&apos;aime par-dessus tout, c&apos;est transformer une
              idée en un produit abouti. J&apos;accorde une attention
              particulière à <strong>l&apos;expérience utilisateur</strong> et à{" "}
              <strong>la qualité visuelle</strong> de mes projets. Un site ou
              une application doit être <strong>fluide</strong>,{" "}
              <strong>rapide</strong> et <strong>agréable à utiliser</strong>,
              tout en offrant une <strong>esthétique soignée</strong>.
              J&apos;aime chercher cet équilibre entre{" "}
              <strong>performance technique</strong> et{" "}
              <strong>plaisir visuel</strong>, pour créer des expériences
              numériques qui donnent envie de rester.
            </Typography>

            <Typography variant="body2" className="text-justify">
              Aujourd&apos;hui, je suis à la recherche d&apos;une{" "}
              <strong>alternance</strong> pour continuer à développer mes
              compétences aux côtés de professionnels expérimentés. Grâce à ma{" "}
              <strong>capacité d&apos;apprentissage rapide</strong> et à ma{" "}
              <strong>curiosité naturelle</strong>, je suis capable de monter en
              compétence efficacement sur de nouvelles technologies ou de
              nouveaux outils. J&apos;aime sortir de ma zone de confort, relever
              des défis, et pousser chaque projet à donner le meilleur de
              lui-même — tout comme moi.
            </Typography>

            <Typography variant="body2" className="text-justify">
              En dehors du code, je suis passionné de <strong>cinéma</strong>,
              toujours à la recherche du prochain film qui me marquera, et grand
              amateur de la franchise <strong>Marvel</strong>. J&apos;adore
              aussi organiser des projets autour des <strong>jeux vidéo</strong>{" "}
              avec mes amis : brainstormer, construire, créer ensemble… Le{" "}
              <strong>travail d&apos;équipe</strong> et la{" "}
              <strong>créativité</strong> ont toujours été au cœur de ce que
              j&apos;aime faire.
            </Typography>

            <Typography variant="body2" className="text-justify">
              Si vous souhaitez en savoir plus ou échanger avec moi, toutes mes
              informations de contact sont disponibles en bas de page.
            </Typography>

            <Typography variant="body2" className="text-justify">
              À bientôt !
            </Typography>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
