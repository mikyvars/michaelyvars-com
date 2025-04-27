import Image from "next/image";
import Typography from "../components/typography";
import Icon from "../components/icon";
import Socials from "../components/socials";
import { CircleCheck, MapPin } from "lucide-react";
import Container from "../components/container";

const Hero = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
        <div className="flex md:order-last">
          <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
            <Image
              src="/images/avatar-1.jpg"
              alt="Michael Yvars"
              className="border-gray-default absolute left-5 z-10 h-[280px] w-[240px] border-8 md:top-0 md:left-0 md:h-[320px] md:w-[280px]"
              width={240}
              height={280}
            />
            <div className="absolute top-5 h-[280px] w-[280px] border-8 border-transparent bg-gray-100 md:top-10 md:right-0 md:bottom-0 md:h-[320px]"></div>
          </div>
        </div>
        <div className="flex flex-col gap-12 md:w-1/2">
          <div className="flex flex-col gap-2">
            <Typography variant="h1">
              {"Hello, moi c'est Michael 👋"}
            </Typography>
            <Typography variant="body2">
              Développeur web en devenir, passionné par le JavaScript et les
              technologies modernes. J&apos;aime apprendre, expérimenter et
              créer des projets rapides, accessibles et agréables à utiliser.
              Aujourd&apos;hui, je cherche une alternance pour grandir et
              progresser aux côtés de professionnels.
            </Typography>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Icon variant="md">
                <MapPin />
              </Icon>
              <Typography variant="body2">
                Plaisance-du-Touch, France
              </Typography>
            </div>
            <div className="flex gap-2">
              <Icon variant="md">
                <CircleCheck className="text-emerald-500" />
              </Icon>
              <Typography variant="body2">
                Disponible pour une alternance
              </Typography>
            </div>
          </div>
          <Socials />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
