import {
    TbStethoscope,
    TbAugmentedReality,
    TbCube,
    TbBus,
    TbRocket,
    TbLink,
    TbPlaneTilt,
    TbTrophy,
    TbDeviceTv,
    TbWorld,
    TbFish,
    TbPalette,
    TbRun,
    TbLeaf,
    TbChefHat,
    TbSword,
    TbBallFootball,
    TbSwords,
    TbCar,
} from 'react-icons/tb'
import { COLORS } from '../constants/colors'
import type { ProjectItem, ProjectCategory } from '../types'
import type { ReactNode } from 'react'

// Icons must be created here as JSX — React elements, not components.
// TypeScript uses ReactNode so the data file can own them cleanly.

const icons: Record<string, ReactNode> = {
    plantao: <TbStethoscope size={22} />,
    nestle: <TbAugmentedReality size={22} />,
    vale: <TbCube size={22} />,
    bulli: <TbBus size={22} />,
    rogueunit: <TbRocket size={22} />,
    realink: <TbLink size={22} />,
    hyperlightwings: <TbPlaneTilt size={22} />,
    loudliga: <TbTrophy size={22} />,
    sportvland: <TbDeviceTv size={22} />,
    nestle_mundo: <TbWorld size={22} />,
    papapeixe: <TbFish size={22} />,
    colorindo: <TbPalette size={22} />,
    boneconeco: <TbRun size={22} />,
    letrasSons: <TbLeaf size={22} />,
    culinaria: <TbChefHat size={22} />,
    revolta: <TbSword size={22} />,
    palmeiras: <TbBallFootball size={22} />,
    bladeball: <TbSwords size={22} />,
    bladeballthin: <TbSwords size={22} />,
    soapbox: <TbCar size={22} />,
}

export const PROJECTS: ProjectItem[] = [
    // ── Mobile-first (most relevant for mobile dev positions) ──────────────
    {
        id: 'plantao',
        name: 'Plantão 360',
        icon: icons.plantao,
        description:
            'Full-featured React Native app for doctors to manage shifts, finances, and documents. Includes 60+ analytics events, Fastlane CI/CD, and Firebase backend.',
        categories: ['Mobile'] as Exclude<ProjectCategory, 'All'>[],
        tags: ['React Native', 'Expo', 'Firebase', 'Fastlane'],
        github: 'https://github.com/vhaueisen/plantao-360',
        playStore: 'https://play.google.com/store/apps/details?id=com.medfinance.plantao360',
        appStore: 'https://apps.apple.com/br/app/plant%C3%A3o-360/id6748095218',
        featured: true,
        color: COLORS.indigo,
    },
    {
        id: 'vale-ra',
        name: 'Vale RA',
        icon: icons.vale,
        description:
            'Augmented Reality mobile app built in Unity for Vale S.A., providing immersive 3D maintenance training with QR code model loading and cross-platform AR support.',
        categories: ['3D / AR', 'Mobile'] as Exclude<ProjectCategory, 'All'>[],
        tags: ['Unity', 'C#', 'ARFoundation'],
        github: 'https://github.com/vhaueisen/vale-ra',
        featured: true,
        color: COLORS.cyan,
    },
    {
        id: 'papa-peixe',
        name: 'Papa-Peixe',
        icon: icons.papapeixe,
        description:
            'Educational mobile puzzle game focused on Mato Grosso culture. Offers two gameplay modes, crossword and word search, with 300 challenges across Tourism, History, and Literature trails.',
        categories: ['Mobile', 'Games'] as Exclude<ProjectCategory, 'All'>[],
        tags: ['Unity', 'C#', 'Educational'],
        playStore: 'https://play.google.com/store/apps/details?id=com.Realink.Words.PapaPeixe',
        appStore: 'https://apps.apple.com/br/app/papa-peixe/id6447073898',
        featured: true,
        color: COLORS.cyan,
    },
    // ── Web projects with open source + live demos ─────────────────────────
    {
        id: 'rogueunit',
        name: 'Rogueunit.gg',
        icon: icons.rogueunit,
        description:
            'Official studio website for Rogue Unit, featuring animated carousels, project case studies, and contact forms. Built with SvelteKit and smooth transitions.',
        categories: ['Web'] as Exclude<ProjectCategory, 'All'>[],
        tags: ['SvelteKit', 'TypeScript', 'Vite', 'CSS'],
        github: 'https://github.com/vhaueisen/rogueunit-gg',
        link: 'https://vhaueisen.github.io/rogueunit-gg',
        featured: true,
        color: COLORS.indigo,
    },
    {
        id: 'bulli',
        name: 'Build-Your-Bulli',
        icon: icons.bulli,
        description:
            'Interactive 3D browser configurator for VW T1 camper vans. Real-time model swapping, live WebGL previews, PDF export, and email delivery via Node.js.',
        categories: ['3D / AR', 'Web'] as Exclude<ProjectCategory, 'All'>[],
        tags: ['React', 'Three.js', 'Node.js', 'jsPDF'],
        github: 'https://github.com/vhaueisen/build-your-bulli',
        link: 'https://vhaueisen.github.io/build-your-bulli',
        featured: true,
        color: COLORS.purple,
    },
    {
        id: 'nestle-surpresa',
        name: 'Nestlé Surpresa RA',
        icon: icons.nestle,
        description:
            'Branded web AR experience for Nestlé Chocolates where users scan packaging to bring 6 collectible Brazilian wildlife animals to life in augmented reality, paired with a Roblox integration.',
        categories: ['3D / AR', 'Web'] as Exclude<ProjectCategory, 'All'>[],
        tags: ['Web AR', 'React', 'Three.js', 'Roblox'],
        link: 'https://amostras.euqueronestle.com.br/sites/chocolates/surpresa-ra/',
        featured: true,
        color: COLORS.cyan,
    },
    // ── Remaining mobile apps ──────────────────────────────────────────────
    {
        id: 'colorindo',
        name: 'Colorindo a Cultura Capixaba',
        icon: icons.colorindo,
        description:
            'AR mobile coloring app featuring three books from Muqueca Editorial. Scan covers to unlock augmented reality content; paint over 60 original illustrations on iOS and Android.',
        categories: ['Mobile', '3D / AR'] as Exclude<ProjectCategory, 'All'>[],
        tags: ['Unity', 'C#', 'ARFoundation'],
        playStore:
            'https://play.google.com/store/apps/details?id=com.BardoSolutions.Coloring.MuquecaEditorial',
        appStore: 'https://apps.apple.com/br/app/colorindo-a-cultura-capixaba/id1563589901',
        featured: false,
        color: COLORS.purple,
    },
    {
        id: 'boneco-neco',
        name: 'Boneco Neco',
        icon: icons.boneconeco,
        description:
            'Endless runner mobile game following Neco and his donkey Jiló through Espírito Santo mountains and beaches, collecting cultural items from Grupo Estripolia.',
        categories: ['Mobile', 'Games'] as Exclude<ProjectCategory, 'All'>[],
        tags: ['Godot', 'Endless Runner', 'GDScript'],
        playStore:
            'https://play.google.com/store/apps/details?id=com.BardoSolutions.EndlessRunner.GrupoEstripolia',
        appStore: 'https://apps.apple.com/br/app/boneco-neco/id1585767464',
        link: 'https://grupoestripolia.com.br/jogo/',
        featured: false,
        color: COLORS.indigo,
    },
    {
        id: 'letras-sons',
        name: 'Letras e Sons da Natureza',
        icon: icons.letrasSons,
        description:
            'Educational literacy puzzle app for children aged 5–8. Four game modes covering letter and syllable ordering, themed around Espírito Santo mangrove ecosystem and food culture.',
        categories: ['Mobile', 'Games'] as Exclude<ProjectCategory, 'All'>[],
        tags: ['Unity', 'C#', 'Educational'],
        playStore: 'https://play.google.com/store/apps/details?id=com.Realink.Quiz.AlefBet',
        appStore: 'https://apps.apple.com/br/app/letras-e-sons-da-natureza/id6452470798',
        featured: false,
        color: COLORS.indigo,
    },
    {
        id: 'culinaria-capixaba',
        name: 'Culinária Capixaba',
        icon: icons.culinaria,
        description:
            'AR cooking app with a 3D virtual Capixaba chef guiding users through traditional moqueca and torta capixaba recipes. Fallback mode for devices without AR support.',
        categories: ['Mobile', '3D / AR'] as Exclude<ProjectCategory, 'All'>[],
        tags: ['Unity', 'C#', 'ARFoundation'],
        playStore:
            'https://play.google.com/store/apps/details?id=com.Realink.Persona.CulinariaCapixaba',
        appStore: 'https://apps.apple.com/br/app/culin%C3%A1ria-capixaba/id6462795816',
        featured: false,
        color: COLORS.cyan,
    },
    {
        id: 'revolta-queimados',
        name: 'Revolta de Queimados',
        icon: icons.revolta,
        description:
            'Educational AR app bringing Chico Prego, leader of the historical Revolta de Queimados, to life in 3D and augmented reality for cultural heritage preservation.',
        categories: ['Mobile', '3D / AR'] as Exclude<ProjectCategory, 'All'>[],
        tags: ['Unity', 'C#', 'ARFoundation'],
        playStore:
            'https://play.google.com/store/apps/details?id=com.Realink.Persona.RevoltaDeQueimados',
        appStore: 'https://apps.apple.com/br/app/revolta-de-queimados/id6462795574',
        featured: false,
        color: COLORS.purple,
    },
    // ── Web ────────────────────────────────────────────────────────────────
    {
        id: 'realink',
        name: 'Realink.io',
        icon: icons.realink,
        description:
            'Institutional SvelteKit website with Gmail OAuth integration, rate-limited quote forms, product pages, and modular content system.',
        categories: ['Web'] as Exclude<ProjectCategory, 'All'>[],
        tags: ['SvelteKit', 'Gmail API', 'Vite', 'JavaScript'],
        github: 'https://github.com/vhaueisen/realink-io',
        featured: false,
        color: COLORS.cyan,
    },
    // ── Games / Roblox / ZEPETO ────────────────────────────────────────────
    {
        id: 'palmeiras-bloxverse',
        name: 'Palmeiras Bloxverse',
        icon: icons.palmeiras,
        description:
            'First South American football club on Roblox. An immersive branded world for SE Palmeiras featuring a virtual Allianz Parque city, themed mini-games, a Trophy Room, and mascot races. Built by Rogue Unit.',
        categories: ['3D / AR', 'Games'] as Exclude<ProjectCategory, 'All'>[],
        tags: ['Roblox', 'Luau', 'Branded', 'Sports'],
        link: 'https://www.roblox.com/games/100254794433803/Universo-Palmeiras',
        featured: true,
        color: COLORS.indigo,
    },
    {
        id: 'blade-ball-z',
        name: 'Blade Ball Z',
        icon: icons.bladeball,
        description:
            'Original multiplayer PvP arena game on ZEPETO by Rogue Unit. Wield swords and redirect a fiery ball at opponents to be the last one standing. 471K+ visits, 92% rating across 3K+ reviews.',
        categories: ['3D / AR', 'Games'] as Exclude<ProjectCategory, 'All'>[],
        tags: ['ZEPETO', 'Multiplayer', 'PvP'],
        link: 'https://web.zepeto.me/pt/detail/com.rogue.blade-ball',
        featured: true,
        color: COLORS.purple,
    },
    {
        id: 'hyperlight-wings',
        name: 'Hyperlight Wings',
        icon: icons.hyperlightwings,
        description:
            'Multiplayer aerial dogfight experience on Roblox. Join friends or global players, customise aircraft with skins, materials, accessories, and ammo types. Up to 10 players per match.',
        categories: ['3D / AR', 'Games'] as Exclude<ProjectCategory, 'All'>[],
        tags: ['Roblox', 'Luau', 'Multiplayer'],
        link: 'https://www.roblox.com/games/6882790797/Open-Alpha-Hyperlight-Wings',
        featured: true,
        color: COLORS.indigo,
    },
    {
        id: 'loud-liga',
        name: 'LOUD: Liga Lendas do Futebol',
        icon: icons.loudliga,
        description:
            'Branded Roblox football game for Brazilian esports org LOUD. Competitive multiplayer matches, seasonal rankings, and exclusive in-game cosmetic items.',
        categories: ['3D / AR', 'Games'] as Exclude<ProjectCategory, 'All'>[],
        tags: ['Roblox', 'Luau', 'Branded', 'Multiplayer'],
        link: 'https://www.roblox.com/games/15505318000/LOUD-League-Soccer-Legends',
        featured: true,
        color: COLORS.purple,
    },
    {
        id: 'nestle-mundo',
        name: 'Nestlé Mundo Surpresa',
        icon: icons.nestle_mundo,
        description:
            'Branded Roblox experience for the Nestlé Chocolates Mundo Surpresa campaign. Immersive world with collectibles and interactive brand touchpoints for the Roblox youth audience.',
        categories: ['3D / AR', 'Games'] as Exclude<ProjectCategory, 'All'>[],
        tags: ['Roblox', 'Luau', 'Branded', 'Co-op'],
        link: 'https://www.roblox.com/games/16187824627/Mundo-Surpresa',
        featured: true,
        color: COLORS.cyan,
    },
    {
        id: 'sportv-land',
        name: 'Sportv Land',
        icon: icons.sportvland,
        description:
            'Immersive branded Roblox world for SporTV. Features mini-games, a football arena, stadium backstage studio, Ferris wheel, and collectible themed items.',
        categories: ['3D / AR', 'Games'] as Exclude<ProjectCategory, 'All'>[],
        tags: ['Roblox', 'Luau', 'Branded', 'PvP'],
        link: 'https://www.roblox.com/games/11512530631/SportvLand',
        featured: false,
        color: COLORS.cyan,
    },
    {
        id: 'blade-ball-thin-ice',
        name: 'Blade Ball Z: Thin Ice',
        icon: icons.bladeballthin,
        description:
            'Sequel to Blade Ball Z on ZEPETO with the same intense sword-deflect PvP, adding new maps, abilities, and an icy arena twist. 30K+ visits by Rogue Unit.',
        categories: ['3D / AR', 'Games'] as Exclude<ProjectCategory, 'All'>[],
        tags: ['ZEPETO', 'Multiplayer', 'PvP'],
        link: 'https://web.zepeto.me/pt/detail/com.rogue.blade-ball-thin-ice@66d8b912e32c222feded2caa2b321235',
        featured: false,
        color: COLORS.purple,
    },
    {
        id: 'soapbox-race-mayhem',
        name: 'Soapbox Race Mayhem',
        icon: icons.soapbox,
        description:
            'Fast-paced downhill kart racing game on Roblox by Rogue Unit. Build and customise your soapbox car, collect unique parts and keychains, race friends, and set track records to earn rewards.',
        categories: ['3D / AR', 'Games'] as Exclude<ProjectCategory, 'All'>[],
        tags: ['Roblox', 'Luau', 'Racing', 'Multiplayer'],
        link: 'https://www.roblox.com/games/123488047751324/Soapbox-Race-Mayhem',
        featured: false,
        color: COLORS.cyan,
    },
]

export const PROJECT_TABS: ProjectCategory[] = ['All', 'Mobile', 'Web', 'Games', '3D / AR']
