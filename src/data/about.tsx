import { SiGoogleplay, SiAppstore } from 'react-icons/si'
import { COLORS, css } from '../constants/colors'
import type { StatItem, StoreLink } from '../types'

export const STATS: StatItem[] = [
    { value: '7+', label: 'Years Experience' },
    { value: '7', label: 'Apps Shipped' },
    { value: '20', label: 'Public Projects' },
    { value: '3M+', label: 'Users Reached' },
]

export const BIO_PARAGRAPHS: string[] = [
    'Senior Mobile Engineer with 7+ years designing scalable cross-platform architectures using React Native and Expo. Specialized in mobile modernization, white-label platforms, CI/CD automation, and brownfield native integrations with Swift and Kotlin.',
    "Proven track record leading React Native version upgrades, Expo workflow migrations, and Fastlane build automation initiatives that improve release reliability and reduce operational overhead. Former game developer with deep expertise in performance optimization, real-time systems, and polished interactive experiences.",
    "Shipped products for Nestlé, Coca-Cola, Vale S.A., Palmeiras, and SporTV.",
    'Across 20+ public projects, shipped 7 mobile cross platform apps, spanning AR training tools, educational games, and production-grade React Native apps on both stores. Also built branded interactive worlds on Roblox and ZEPETO, and 3D web experiences with Three.js and WebAR.',
]

export const ENTERPRISE_CLIENTS: string[] = [
    'Nestlé',
    'Vale S.A.',
    'Palmeiras',
    'Sportv',
    'LOUD',
]

export const STORE_LINKS: StoreLink[] = [
    {
        label: 'Google Play',
        sub: '5+ apps published',
        icon: <SiGoogleplay size={18} />,
        href: 'https://play.google.com/store/apps/dev?id=7255636574877532443&hl=pt',
        color: COLORS.googlePlay,
        bg: css('rgba(52,211,153,0.08)'),
        border: css('rgba(52,211,153,0.25)'),
        hoverBg: css('rgba(52,211,153,0.15)'),
        hoverBorder: css('rgba(52,211,153,0.5)'),
    },
    {
        label: 'App Store',
        sub: '5+ apps published',
        icon: <SiAppstore size={18} />,
        href: 'https://apps.apple.com/br/developer/realink-solucoes-em-jogos-eletronicos-ltda/id1563589903',
        color: COLORS.appStore,
        bg: css('rgba(96,165,250,0.08)'),
        border: css('rgba(96,165,250,0.25)'),
        hoverBg: css('rgba(96,165,250,0.15)'),
        hoverBorder: css('rgba(96,165,250,0.5)'),
    },
]
