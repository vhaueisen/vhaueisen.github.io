import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'
import { COLORS } from '../constants/colors'
import type { ContactLink } from '../types'

export const CONTACT_LINKS: ContactLink[] = [
  {
    icon: <FiMail size={20} />,
    label: 'Email',
    value: 'vitorhaueisen@gmail.com',
    href: 'mailto:vitorhaueisen@gmail.com',
    color: COLORS.indigo,
  },
  {
    icon: <FiLinkedin size={20} />,
    label: 'LinkedIn',
    value: 'in/vitor-ruas',
    href: 'https://linkedin.com/in/vitor-ruas',
    color: COLORS.cyan,
  },
  {
    icon: <FiGithub size={20} />,
    label: 'GitHub',
    value: 'vhaueisen',
    href: 'https://github.com/vhaueisen',
    color: COLORS.purple,
  },
]
