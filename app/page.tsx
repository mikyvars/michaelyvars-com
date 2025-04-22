import { Github } from 'lucide-react'
import Icon from './components/icon'
import Typography from './components/typography'
import Button from './components/button'
import IconButton from './components/icon-button'

export default function Home() {
  return (
    <>
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

      <IconButton icon={Github} variant="md" />
      <IconButton icon={Github} variant="lg" />
    </>
  )
}
