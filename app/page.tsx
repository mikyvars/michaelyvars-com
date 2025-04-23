import { Github } from "lucide-react";
import Icon from "./components/icon";
import Typography from "./components/typography";
import Button from "./components/button";
import IconButton from "./components/icon-button";
import Tag from "./components/tag";

export default function Home() {
  return (
    <div className="flex">
      <div className="flex-1">
        <Typography variant="h1">Hello World</Typography>
        <Typography variant="h2">Hello World</Typography>
        <Typography variant="h3">Hello World</Typography>
        <Typography variant="subtitle">Hello World</Typography>
        <Typography variant="body1">Hello World</Typography>
        <Typography variant="body2">Hello World</Typography>
        <Typography variant="body3">Hello World</Typography>

        <Icon icon={Github} variant="md" />
        <Icon icon={Github} variant="lg" />

        <Button>Button</Button>
        <Button>Long Button</Button>

        <IconButton variant="md">
          <Github />
        </IconButton>
        <IconButton variant="lg">
          <Github />
        </IconButton>

        <Tag>Tag</Tag>
        <Tag>Long Tag</Tag>
      </div>
      <div className="dark h-screen flex-1 bg-[var(--background)]">
        <Typography variant="h1">Hello World</Typography>
        <Typography variant="h2">Hello World</Typography>
        <Typography variant="h3">Hello World</Typography>
        <Typography variant="subtitle">Hello World</Typography>
        <Typography variant="body1">Hello World</Typography>
        <Typography variant="body2">Hello World</Typography>
        <Typography variant="body3">Hello World</Typography>

        <Icon icon={Github} variant="md" />
        <Icon icon={Github} variant="lg" />

        <Button>Button</Button>
        <Button>Long Button</Button>

        <IconButton variant="md">
          <Github />
        </IconButton>
        <IconButton variant="lg">
          <Github />
        </IconButton>

        <Tag>Tag</Tag>
        <Tag>Long Tag</Tag>
      </div>
    </div>
  );
}
