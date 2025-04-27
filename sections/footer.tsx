import { Mail, Phone } from "lucide-react";
import Tag from "../components/tag";
import Typography from "../components/typography";
import Icon from "../components/icon";
import Socials from "../components/socials";
import Container from "../components/container";

const Footer = () => {
  return (
    <>
      <Container id="#contact">
        <section className="flex flex-col items-center gap-6">
          <Tag>Restons en contact</Tag>
          <Typography variant={"subtitle"} className="text-center">
            Et maintenant ? N&apos;hésitez pas à me contacter si vous êtes à la
            recherche d&apos;un développeur, si vous avez une question ou
            souhaitez établir un premier contact.
          </Typography>
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-4">
              <Icon variant={"auto"}>
                <Mail />
              </Icon>
              <Typography variant={"h2"}>michaelyvars1@gmail.com</Typography>
              {/* <IconButton>
                <Copy />
              </IconButton> */}
            </div>
            <div className="flex items-center gap-4">
              <Icon variant={"auto"}>
                <Phone />
              </Icon>
              <Typography variant={"h2"}>+33650226921</Typography>
              {/* <IconButton>
                <Copy />
              </IconButton> */}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Typography variant={"body2"}>
              Vous pouvez aussi me trouver sur ces plateformes!
            </Typography>
            <Socials />
          </div>
        </section>
      </Container>
    </>
  );
};

export default Footer;
