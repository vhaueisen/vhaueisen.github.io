import {
    FiZap,
    FiBox,
    FiCloud,
    FiTool,
    FiFlag,
    FiGitMerge,
    FiLayers,
    FiGlobe,
    FiSmartphone,
} from 'react-icons/fi'
import {
    SiReact,
    SiTypescript,
    SiJavascript,
    SiExpo,
    SiFirebase,
    SiGithubactions,
    SiAngular,
    SiSvelte,
    SiPython,
    SiUnity,
    SiTailwindcss,
    SiReactquery,
    SiNodedotjs,
    SiVite,
    SiGodotengine,
} from 'react-icons/si'
import { TbBrandReactNative, TbRoute, TbAtom, TbAugmentedReality, TbCube } from 'react-icons/tb'
import { COLORS } from '../constants/colors'
import type { SkillGroup } from '../types'

export const SKILL_GROUPS: SkillGroup[] = [
    {
        label: 'Mobile',
        icon: <TbBrandReactNative size={16} />,
        color: COLORS.indigo,
        skills: [
            { name: 'React Native', icon: <SiReact size={14} /> },
            { name: 'Expo', icon: <SiExpo size={14} /> },
            { name: 'Reanimated', icon: <FiZap size={14} /> },
            { name: 'Gesture Handler', icon: <FiBox size={14} /> },
            { name: 'React Navigation', icon: <TbRoute size={14} /> },
            { name: 'Brownfield / Native', icon: <FiLayers size={14} /> },
            { name: 'Feature Flagging', icon: <FiFlag size={14} /> },
            { name: 'App Store / Play Store', icon: <FiSmartphone size={14} /> },
        ],
    },
    {
        label: 'Web / Frontend',
        icon: <FiBox size={16} />,
        color: COLORS.cyan,
        skills: [
            { name: 'React', icon: <SiReact size={14} /> },
            { name: 'SvelteKit', icon: <SiSvelte size={14} /> },
            { name: 'Angular', icon: <SiAngular size={14} /> },
            { name: 'Three.js', icon: <FiBox size={14} /> },
            { name: 'Framer Motion', icon: <FiZap size={14} /> },
            { name: 'Tailwind CSS', icon: <SiTailwindcss size={14} /> },
            { name: 'Vite', icon: <SiVite size={14} /> },
            { name: 'Node.js', icon: <SiNodedotjs size={14} /> },
        ],
    },
    {
        label: 'DevOps & CI/CD',
        icon: <FiTool size={16} />,
        color: COLORS.purple,
        skills: [
            { name: 'Fastlane', icon: <FiZap size={14} /> },
            { name: 'GitHub Actions', icon: <SiGithubactions size={14} /> },
            { name: 'EAS Build', icon: <SiExpo size={14} /> },
            { name: 'CI/CD Pipelines', icon: <FiGitMerge size={14} /> },
            { name: 'White-label Builds', icon: <FiLayers size={14} /> },
        ],
    },
    {
        label: 'Backend & Cloud',
        icon: <FiCloud size={16} />,
        color: COLORS.cyan,
        skills: [
            { name: 'Firebase', icon: <SiFirebase size={14} /> },
            { name: 'Firestore', icon: <SiFirebase size={14} /> },
            { name: 'Cloud Functions', icon: <SiFirebase size={14} /> },
            { name: 'REST APIs', icon: <FiGlobe size={14} /> },
            { name: 'React Query', icon: <SiReactquery size={14} /> },
            { name: 'Zustand', icon: <TbAtom size={14} /> },
        ],
    },
    {
        label: 'Languages',
        icon: <FiZap size={16} />,
        color: COLORS.indigo,
        skills: [
            { name: 'TypeScript', icon: <SiTypescript size={14} /> },
            { name: 'JavaScript', icon: <SiJavascript size={14} /> },
            { name: 'C#', icon: <SiUnity size={14} /> },
            { name: 'Python', icon: <SiPython size={14} /> },
        ],
    },
    {
        label: '3D & AR',
        icon: <TbCube size={16} />,
        color: COLORS.purple,
        skills: [
            { name: 'Unity', icon: <SiUnity size={14} /> },
            { name: 'ARFoundation', icon: <TbAugmentedReality size={14} /> },
            { name: 'Web AR', icon: <TbAugmentedReality size={14} /> },
            { name: 'Godot', icon: <SiGodotengine size={14} /> },
            { name: 'Roblox / Luau', icon: <FiBox size={14} /> },
            { name: 'ZEPETO', icon: <FiBox size={14} /> },
        ],
    },
]
