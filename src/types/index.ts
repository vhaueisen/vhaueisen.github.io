import type { CSSColor } from '../constants/colors'
import type { ReactNode } from 'react'

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface NavLink {
    label: string
    href: string
}

// ─── About ───────────────────────────────────────────────────────────────────

export interface StatItem {
    value: string
    label: string
}

export interface StoreLink {
    label: string
    sub: string
    icon: ReactNode
    href: string
    /** Branded CSS color — must use COLORS.* or css() helper. */
    color: CSSColor
    /** Branded CSS color background (e.g. rgba alpha variant). */
    bg: CSSColor
    /** Branded CSS color border. */
    border: CSSColor
    /** Branded CSS color background on hover. */
    hoverBg: CSSColor
    /** Branded CSS color border on hover. */
    hoverBorder: CSSColor
}

// ─── Experience ──────────────────────────────────────────────────────────────

export interface ExperienceItem {
    role: string
    company: string
    period: string
    type: string
    /** Branded CSS color — must use COLORS.* or css() helper. */
    color: CSSColor
    bullets: string[]
}

// ─── Projects ────────────────────────────────────────────────────────────────

export type ProjectCategory = 'All' | 'Mobile' | 'Web' | 'Games' | '3D / AR'

export interface ProjectItem {
    id: string
    name: string
    icon: ReactNode
    description: string
    categories: Exclude<ProjectCategory, 'All'>[]
    tags: string[]
    github?: string
    link?: string
    playStore?: string
    appStore?: string
    featured: boolean
    /** Branded CSS color — must use COLORS.* or css() helper. */
    color: CSSColor
}

// ─── Skills ──────────────────────────────────────────────────────────────────

export interface Skill {
    name: string
    /**
     * Optional icon element for the tag pill.
     * Typed as `ReactNode | undefined` (not null) to match TagPill's icon prop
     * and avoid `?? undefined` coercions at every call site.
     */
    icon: ReactNode | undefined
}

export interface SkillGroup {
    label: string
    icon: ReactNode
    /** Branded CSS color — must use COLORS.* or css() helper. */
    color: CSSColor
    skills: Skill[]
}

// ─── Contact ─────────────────────────────────────────────────────────────────

export interface ContactLink {
    icon: ReactNode
    label: string
    value: string
    href: string
    /** Branded CSS color — must use COLORS.* or css() helper. */
    color: CSSColor
}
