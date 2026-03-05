import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { TbPencil, TbNews } from 'react-icons/tb'
import { SectionHeading, AnimatedEntrance, TagPill } from '../components/ui'
import { COLORS } from '../constants/colors'
import { ARTICLES } from '../data/articles'
import { useSectionInView } from '../hooks/useSectionInView'
import { glassCard, gradientTextShort, bodyText } from '../styles'
import type { ArticleItem } from '../types'
import type { CSSProperties } from 'react'

// ─── Module-scope style constants ─────────────────────────────────────────────

const writingGridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '24px',
}

const articlePublicationStyle: CSSProperties = {
    fontSize: '0.75rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: COLORS.textMuted,
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    marginBottom: '12px',
}

const articleTitleStyle: CSSProperties = {
    fontSize: '1.1rem',
    fontWeight: 700,
    color: COLORS.textPrimary,
    lineHeight: 1.35,
    marginBottom: '12px',
    letterSpacing: '-0.02em',
}

const articleTagsStyle: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: '16px',
}

const articleFooterStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '20px',
    paddingTop: '16px',
    borderTop: `1px solid ${COLORS.indigo}1a`,
}

const articleDateStyle: CSSProperties = {
    fontSize: '0.75rem',
    color: COLORS.textMuted,
    fontWeight: 500,
}

const readLinkStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '0.8rem',
    fontWeight: 600,
    textDecoration: 'none',
    color: COLORS.indigo,
}

// ─── Single article card ──────────────────────────────────────────────────────

interface ArticleCardProps {
    article: ArticleItem
    index: number
    inView: boolean
}

function ArticleCard({ article, index, inView }: ArticleCardProps) {
    return (
        <motion.a
            href={article.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.12 }}
            whileHover={{ y: -4, boxShadow: `0 12px 40px ${article.color}18` }}
            style={{
                ...glassCard,
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                cursor: 'pointer',
            }}
        >
            {/* Publication label */}
            <div style={articlePublicationStyle}>
                {article.type === 'press' ? <TbNews size={13} /> : <TbPencil size={13} />}
                <span>{article.publication}</span>
                {article.type === 'press' && (
                    <span
                        style={{
                            fontSize: '0.65rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            background: `${COLORS.cyan}22`,
                            color: COLORS.cyan,
                            border: `1px solid ${COLORS.cyan}44`,
                            borderRadius: '4px',
                            padding: '1px 6px',
                            marginLeft: '4px',
                        }}
                    >
                        Press
                    </span>
                )}
            </div>

            {/* Title */}
            <div style={articleTitleStyle}>{article.title}</div>

            {/* Description */}
            <p style={{ ...bodyText, fontSize: '0.875rem', flexGrow: 1 }}>{article.description}</p>

            {/* Tags */}
            <div style={articleTagsStyle}>
                {article.tags.map((tag) => (
                    <TagPill key={tag} label={tag} color={article.color} />
                ))}
            </div>

            {/* Footer: date + read hint */}
            <div style={articleFooterStyle}>
                <span style={articleDateStyle}>{article.date}</span>
                <span style={readLinkStyle}>
                    Read article <FiArrowUpRight size={14} />
                </span>
            </div>
        </motion.a>
    )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Writing() {
    const [sectionRef, inView] = useSectionInView<HTMLDivElement>()

    return (
        <section id="writing" className="section-container">
            <div ref={sectionRef}>
                <SectionHeading
                    label="Writing"
                    title={
                        <>
                            Published <span style={gradientTextShort}>articles</span>
                        </>
                    }
                    inView={inView}
                />

                <AnimatedEntrance delay={0.1} inView={inView}>
                    <p style={{ ...bodyText, marginBottom: '48px', maxWidth: '520px' }}>
                        Occasionally I write about things I build and think about: game platforms, brand
                        strategy, interactive experiences, and the web.
                    </p>
                </AnimatedEntrance>

                <div style={writingGridStyle}>
                    {ARTICLES.map((article, i) => (
                        <ArticleCard key={article.id} article={article} index={i} inView={inView} />
                    ))}
                </div>
            </div>
        </section>
    )
}
