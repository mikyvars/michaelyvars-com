import { Github } from 'lucide-react'
import Icon from './components/icon'
import Typography from './components/typography'

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
    </>
  )
}
