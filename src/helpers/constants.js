import linkedin from '../images/linkedin.svg'
import instagram from '../images/instagram.svg'
import mail from '../images/mail.svg'
import accent from '../images/accent.png'
import cotton from '../images/cotton-on.png'
import nandos from '../images/nandos.png'

export const contact = [
  {
    icon: linkedin,
    a: 'https://www.linkedin.com/in/mark-chow-552945169/'
  },
  { icon: instagram, a: 'https://www.instagram.com/markanthonychow/' },
  {
    icon: mail,
    a: 'mailto:Markchow1994@gmail.com'
  }
]

export const links = [
  {
    to: '/',
    title: 'home'
  },
  {
    to: '/about',
    title: 'about'
  },
  {
    to: '/projects',
    title: 'projects'
  },
  {
    to: '/experience',
    title: 'experience'
  },
  {
    to: '/contact',
    title: 'contact'
  }
]

export const projects = [
  {
    to: '//markchow1994.wixsite.com/digmarketing',
    title: 'marketing blog',
    desc: `A blog I created about Digital marketing. My blog explores issues surrounding digital marketing along with my views on where this platform will be in the future.`
  },
  {
    to:
      '//docs.google.com/document/d/1WOoDAHmRlprfyi4LwSMAW-wWNObkX-WP0GBgPIDHfP0/edit',
    title: 'research reports',
    desc: `A research report co-written by myself. We explored factors that influenced injurious consumption within Australian’s and how marketing affects the way they are regulated and consumed.`
  },
  {
    to:
      '//docs.google.com/document/d/1kK4NtuQjVkN9SrRyJsIKtSOdpn6fDdwwiChuIfR2-8k/edit',
    title: 'IMC Reports',
    desc: `A report co-written by myself that explores the rebranding of Cadbury Mini-Blocks. We created an integrated marketing communications plan and implemented it using both digital and traditional marketing methods.  This plan involved a cross-channel strategy, creation of a marketing budget and the implementation of the IMC plan into a media schedule.`
  }
]

export const employers = [
  {
    icon: accent,
    alt: 'accent group logo'
  },
  {
    icon: cotton,
    alt: 'cotton on logo'
  },
  {
    icon: nandos,
    alt: 'nandos logo'
  }
]
