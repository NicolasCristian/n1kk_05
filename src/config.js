// You can choose any icon from this list: https://react-icons.github.io/react-icons
import {
  FaAngleDown,
  FaCode,
  FaCommentDots,
  FaEnvelope,
  FaFacebook,
  FaGitlab,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp
} from 'react-icons/fa';

import {
  SiHackerone,
  SiHackthebox,
} from "react-icons/si";

// This is the color list you can use for now: https://mui.com/material-ui/customization/color/
import {
  amber,
  lightGreen,
  lime,
} from '@mui/material/colors';

import Youtube from './components/Youtube'

// @TODO: Create colorset for light and dark modes.
// @TODO: Properly use button and icon colors or maybe even ditch out
const colors = {
  "mode": "dark",
  "primary": lightGreen,
  "secondary": amber,
  "button": lightGreen,
  "icon": lime,
}

const routes = {
  "blog": "https://devjourney.osouza.de/blog",
  "devjourney": "https://devjourney.osouza.de",
  // "discord": "",
  // "email": "",
  // "facebook": "",
  "gitlab": "https://gitlab.com/osouza.de/bah-link-tri",
  "hackerone": "https://hackerone.com",
  "hackthebox": "https://hackthebox.com",
  // "instagram": "",
  // "linkedin": "",
  "tryhackme": "https://tryhackme.com/",
  // "website": "",
  // "whatsapp": "",
}

const icons = [
  {
    "tooltip": "My pics's place",
    "icon": <FaInstagram />,
    "route": "instagram"
  },
  {
    "tooltip": "Checkout my Facebook profile.",
    "icon": <FaFacebook />,
    "route": "facebook",
  },
  {
    "tooltip": "Send me a whatsapp message!",
    "icon": <FaWhatsapp />,
    "route": "whatsapp",
    "hidden": true
  },
  {
    "tooltip": "Send me a e-mail!",
    "icon": <FaEnvelope />,
    "route": "email",
  },
  {
    "tooltip": "Check out my Linkedin profile.",
    "icon": <FaLinkedin />,
    "route": "linkedin"
  },
]

// @TODO: maybe create a grouping option?

const items = [
  {
    "title": "//whoami",
    "content": "I'm a free alternative to link repositories services!</p><br/><small style='font-style:italic; float: right'>Open source and always free!</small><br/>",
    "icon": <FaAngleDown />,
    "type": "accordion",
    "expanded": true
  },
  {
    "title": "Dev Journey",
    "content": "My journey into the Development World!",
    "icon": <FaCode />,
    "route": "devjourney",
    "type": "link",
  },
  {
    "title": "Blog",
    "content": "My personal blog!",
    "icon": <FaCommentDots />,
    "route": "blog",
    "type": "link",
  },
  {
    "title": "GitLab",
    "content": "BahLinkTri repository!",
    "icon": <FaGitlab />,
    "route": "gitlab",
    "type": "link",
  },
  {
    "title": "Instagram",
    "content": "My pics's place",
    "icon": <FaInstagram />,
    "route": "instagram",
    "type": "link",
    "hidden": true
  },
  {
    "title": "//extra",
    "content": "<iframe width='100%' src='https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?controls=0' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
    "icon": <FaAngleDown />,
    "type": "accordion",
    "hidden": true
  },
  {
    "title": "Listen (look) at this",
    "content": <Youtube embedId="dQw4w9WgXcQ?controls=0" />,
    "type": "popup"
  },
  {
    "title": "HackerOne",
    "content": "Check it out!",
    "icon": <SiHackerone />,
    "route": "hackerone",
    "type": "link",
  },
  {
    "title": "HackTheBox",
    "content": "Check it out!",
    "icon": <SiHackthebox />,
    "route": "hackthebox",
    "type": "link",
  }
]

const config = {
  "avatar": "",
  "title": "Bah Link Tri",
  colors,
  icons,
  items,
  routes
}

export default config
