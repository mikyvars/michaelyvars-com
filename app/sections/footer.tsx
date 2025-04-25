import { Copy, Mail, Phone } from "lucide-react";
import Tag from "../components/tag";
import Typography from "../components/typography";
import IconButton from "../components/icon-button";
import Icon from "../components/icon";
import Socials from "../components/socials";
import Container from "../components/container";

const Footer = () => {
  return (
    <>
      <Container>
        <section className="flex flex-col items-center gap-6">
          <Tag>Get in touch</Tag>
          <Typography variant={"subtitle"} className="text-center">
            {
              "What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect."
            }
          </Typography>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4">
              <Icon variant={"auto"}>
                <Mail />
              </Icon>
              <Typography variant={"h2"}>michaelyvars1@gmail.com</Typography>
              <IconButton>
                <Copy />
              </IconButton>
            </div>
            <div className="flex items-center gap-4">
              <Icon variant={"auto"}>
                <Phone />
              </Icon>
              <Typography variant={"h2"}>+33650226921</Typography>
              <IconButton>
                <Copy />
              </IconButton>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Typography variant={"body2"}>
              You may also find me on these platforms!
            </Typography>
            <Socials />
          </div>
        </section>
      </Container>
    </>
  );
};

export default Footer;
