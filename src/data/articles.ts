import { COLORS } from '../constants/colors'
import type { ArticleItem } from '../types'

export const ARTICLES: ArticleItem[] = [
    {
        id: 'ugc-platforms-brands',
        title: 'UGC Gaming Platforms: The Convergence of Web 2.0, Creativity, and Brand Advertising',
        publication: 'Voxel · TecMundo',
        publicationUrl: 'https://www.tecmundo.com.br/voxel',
        date: 'Jul 2024',
        description:
            'An analysis of how UGC gaming platforms (Roblox, ZEPETO, Fortnite Creative) are reshaping brand advertising by turning players into creators. Drawing from first-hand experience building branded worlds for Nestlé, Palmeiras, LOUD, and SporTV, the article argues that the most effective brand activations on these platforms are the ones that respect the native creative culture.',
        href: 'https://www.tecmundo.com.br/voxel/286520-plataformas-jogos-ugc-convergencia-entre-web-2-0-criatividade-publicidade-marcas.htm',
        color: COLORS.indigo,
        tags: ['Roblox', 'ZEPETO', 'UGC', 'Brand Strategy', 'Gaming'],
    },
    {
        id: 'propmark-palmeiras-bloxverse',
        title: 'Palmeiras estreia universo virtual no Roblox',
        publication: 'Propmark',
        publicationUrl: 'https://propmark.com.br',
        date: 'Apr 2025',
        description:
            'Press coverage of the Palmeiras Bloxverse launch on Roblox, featuring a direct quote from Vítor Haueisen as CTO of Rogue Unit. The article covers how the branded virtual world targets Gen Z and Millennial fans through mini-games, a virtual trophy room, and limited-edition avatar items.',
        href: 'https://propmark.com.br/palmeiras-estreia-universo-virtual-no-roblox/',
        color: COLORS.cyan,
        tags: ['Roblox', 'Palmeiras', 'Branded Worlds', 'Press Coverage'],
        type: 'press' as const,
    },
    {
        id: 'ieee-3d-workflow-vr',
        title: 'Workflow to Optimization of 3D Models for Game Development',
        publication: 'IEEE Xplore · SVR 2018',
        publicationUrl: 'https://ieeexplore.ieee.org',
        date: 'Oct 2018',
        description:
            'Co-authored research paper presented at the 20th IEEE Symposium on Virtual and Augmented Reality (Foz do Iguaçu, Brazil). Proposes a polygon-reduction workflow for creating 3D models suited for VR hardware constraints, with a case study on railway wagon maintenance centers. Benchmarks appearance and game engine performance between optimized and non-optimized models. Cited by 2 papers, 206 full-text views.',
        href: 'https://ieeexplore.ieee.org/document/8802470/',
        color: COLORS.purple,
        tags: ['VR', '3D Models', 'Unity', 'Game Dev', 'Research', 'IEEE'],
    },
]
