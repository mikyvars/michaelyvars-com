import Image from "next/image";
import Tag from "../components/tag";
import Typography from "../components/typography";

const About = () => {
  return (
    <div className="flex flex-col items-center gap-6 bg-gray-50 px-4 py-16 md:gap-12 md:px-20 md:py-24">
      <Tag>About me</Tag>
      <div className="flex flex-col gap-12 max-md:items-center md:flex-row">
        <div className="flex flex-1">
          <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
            <Image
              src="/images/avatar-2.jpg"
              alt="Michael Yvars"
              className="border-gray-default absolute right-5 z-10 h-[280px] w-[240px] border-8 md:top-0 md:right-0 md:h-[320px] md:w-[280px]"
              width={240}
              height={280}
            />
            <div className="absolute top-5 h-[280px] w-[280px] border-8 border-transparent bg-gray-100 md:top-10 md:bottom-0 md:left-0 md:h-[320px]"></div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            metus felis, blandit ac dui ac, cursus convallis erat. Aenean eros
            dolor, tristique et neque ac, lobortis tristique eros. Duis et
            commodo nibh. Pellentesque in sodales diam. Curabitur vitae urna
            ipsum. Praesent pulvinar tincidunt metus vel gravida. In mattis
            tellus nulla, eu varius lacus posuere ac. Sed dictum, mauris a
            sollicitudin fermentum, augue enim tincidunt purus, cursus
            vestibulum tortor ante in metus. Donec blandit ipsum a felis mollis
            cursus ac a ex. Ut pharetra nec mi non suscipit.
          </Typography>
          <Typography variant="body2">
            Curabitur porta, felis non finibus volutpat, dolor massa posuere
            erat, et efficitur neque turpis vitae est. Nunc et sollicitudin
            nunc, a dapibus est. Ut ac ligula et nulla consectetur dapibus.
            Proin placerat elit tristique, placerat mauris eget, accumsan neque.
            Integer vestibulum pellentesque lacus in mattis. In venenatis auctor
            felis, non viverra nibh aliquam in. Cras sed mi elit. Praesent
            ultricies dui eu tortor aliquet dignissim. Maecenas a sapien
            dignissim, consequat mi ut, interdum magna. Ut orci neque, pretium
            sed dignissim in, ultricies accumsan felis. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. In quis lectus quis eros convallis ultrices.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
