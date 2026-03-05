import { motion, useTransform } from 'framer-motion'
import type { MotionValue } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import { SectionHeading } from '../components/ui'
import { COLORS } from '../constants/colors'
import { EXPERIENCE } from '../data/experience'
import { useScrollDrum, ITEM_HEIGHT, SCROLL_PER_ITEM } from '../hooks/useScrollDrum'
import { useSectionInView } from '../hooks/useSectionInView'
import type { ExperienceItem } from '../types'

// ─── Timeline column ──────────────────────────────────────────────────────────

interface TimelineProps {
    items: ExperienceItem[]
    selectedIndex: number
    drumPos: number
    drumPosValue: MotionValue<number>
}

function Timeline({ items, selectedIndex, drumPos, drumPosValue }: TimelineProps) {
    const activeItem = items[selectedIndex]
    const maxFill = (items.length - 1) * ITEM_HEIGHT
    const fillHeight = useTransform(drumPosValue, (pos) => Math.min(pos * ITEM_HEIGHT, maxFill))

    return (
        <div style={{ position: 'relative', height: items.length * ITEM_HEIGHT, userSelect: 'none' }}>
            {/* Background track */}
            <div
                style={{
                    position: 'absolute',
                    left: '6px',
                    top: ITEM_HEIGHT / 2,
                    width: '2px',
                    height: (items.length - 1) * ITEM_HEIGHT,
                    background: COLORS.slate800,
                    zIndex: 1,
                }}
            />

            {/* Progress fill — MotionValue-driven, no React state lag */}
            <motion.div
                style={{
                    position: 'absolute',
                    left: '6px',
                    top: ITEM_HEIGHT / 2,
                    width: '2px',
                    height: fillHeight,
                    background: `linear-gradient(to bottom, ${COLORS.indigo}, ${activeItem.color})`,
                    zIndex: 1,
                }}
            />

            {/* Step dots */}
            {items.map((exp, i) => (
                <div
                    key={`${exp.company}-dot`}
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: i * ITEM_HEIGHT + ITEM_HEIGHT / 2 - 7,
                        width: '14px',
                        height: '14px',
                        borderRadius: '50%',
                        background: i <= selectedIndex ? exp.color : '#0f172a',
                        border: `2px solid ${i <= selectedIndex ? exp.color : COLORS.slate700}`,
                        boxShadow: i === selectedIndex ? `0 0 14px ${exp.color}` : 'none',
                        zIndex: 3,
                        transition: 'background 0.4s, border-color 0.4s, box-shadow 0.4s',
                    }}
                />
            ))}

            {/* Text rows with perspective tilt */}
            <div style={{ perspective: '400px', perspectiveOrigin: '50% 50%' }}>
                {items.map((exp, i) => {
                    const dist = i - drumPos
                    const opacity = Math.max(0.18, 1 - Math.abs(dist) * 0.26)
                    const rotateX = dist * -11
                    const isActive = i === selectedIndex

                    return (
                        <div
                            key={exp.company}
                            style={{
                                height: ITEM_HEIGHT,
                                paddingLeft: '30px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                opacity,
                                transform: `rotateX(${rotateX}deg)`,
                                transformOrigin: 'center center',
                                transformStyle: 'preserve-3d',
                                willChange: 'transform, opacity',
                            }}
                        >
                            <div
                                style={{
                                    fontWeight: 700,
                                    fontSize: '0.95rem',
                                    lineHeight: 1.2,
                                    color: isActive ? exp.color : '#cbd5e1',
                                    transition: 'color 0.35s',
                                }}
                            >
                                {exp.company}
                            </div>
                            <div
                                style={{
                                    fontSize: '0.75rem',
                                    marginTop: '2px',
                                    color: isActive ? COLORS.textMuted : COLORS.slate700,
                                    transition: 'color 0.35s',
                                }}
                            >
                                {exp.role}
                            </div>
                            <span
                                style={{
                                    display: 'inline-block',
                                    marginTop: '5px',
                                    padding: '2px 10px',
                                    background: isActive ? `${exp.color}15` : 'transparent',
                                    border: `1px solid ${isActive ? exp.color + '35' : 'transparent'}`,
                                    borderRadius: '100px',
                                    fontSize: '0.68rem',
                                    color: isActive ? exp.color : COLORS.slate600,
                                    fontWeight: 500,
                                    width: 'fit-content',
                                    transition: 'all 0.35s',
                                }}
                            >
                                {exp.period}
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

// ─── Detail drum panel ────────────────────────────────────────────────────────

interface DetailDrumProps {
    items: ExperienceItem[]
    selectedIndex: number
    drumPos: number
}

function DetailDrum({ items, selectedIndex, drumPos }: DetailDrumProps) {
    const TILT = 32
    // 2em gap between stacked cards (assuming 16 px root font size)
    const GAP = 0

    const cardRefs = useRef<(HTMLDivElement | null)[]>([])
    const [heights, setHeights] = useState<number[]>(() => new Array(items.length).fill(220))

    // Re-measure whenever any card resizes
    useEffect(() => {
        const measure = () => setHeights(cardRefs.current.map((el) => el?.offsetHeight ?? 220))
        measure()
        const ro = new ResizeObserver(measure)
        cardRefs.current.forEach((el) => {
            if (el) ro.observe(el)
        })
        return () => ro.disconnect()
    }, [items.length])

    // Cumulative center offsets (card 0 center = 0)
    const relCenters = useMemo(() => {
        const centers: number[] = [0]
        for (let i = 1; i < items.length; i++) {
            centers[i] = centers[i - 1] + heights[i - 1] / 2 + GAP + heights[i] / 2
        }
        return centers
    }, [heights, items.length, GAP])

    // Interpolated center of the currently active (possibly fractional) position
    const lo = Math.floor(drumPos)
    const hi = Math.min(Math.ceil(drumPos), items.length - 1)
    const frac = drumPos - lo
    const activeCenter = (relCenters[lo] ?? 0) * (1 - frac) + (relCenters[hi] ?? 0) * frac

    // Container height: active card height + vertical breathing room
    const containerHeight = Math.max(240, heights[selectedIndex] + 80)

    return (
        <div
            style={{
                position: 'relative',
                height: `${containerHeight}px`,
                transition: 'height 0.4s ease',
                perspective: '1200px',
                perspectiveOrigin: '50% 50%',
                overflow: 'hidden',
            }}
        >
            {/* Cylinder fades */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                    zIndex: 10,
                    background:
                        'linear-gradient(to bottom, rgba(7,7,15,0.92) 0%, transparent 22%, transparent 78%, rgba(7,7,15,0.92) 100%)',
                }}
            />

            {items.map((exp, i) => {
                const dist = i - drumPos
                const absDist = Math.abs(dist)
                // Height-aware offset: shift card i so the active center sits at y=0
                const translateY = relCenters[i] - activeCenter
                const rotateX = dist * -TILT
                const opacity = Math.max(0, 1 - absDist * 0.55)
                const scale = Math.max(0.82, 1 - absDist * 0.08)
                const isActive = i === selectedIndex

                return (
                    <div
                        key={exp.company}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            display: 'flex',
                            alignItems: 'center',
                            transform: `translateY(${translateY}px) rotateX(${rotateX}deg) scale(${scale})`,
                            transformStyle: 'preserve-3d',
                            transformOrigin: 'center center',
                            opacity,
                            willChange: 'transform, opacity',
                            pointerEvents: isActive ? 'auto' : 'none',
                        }}
                    >
                        <div
                            ref={(el) => {
                                cardRefs.current[i] = el
                            }}
                            style={{
                                width: '100%',
                                padding: '28px 32px',
                                background: isActive ? 'rgba(13,13,31,0.85)' : 'rgba(13,13,31,0.5)',
                                backdropFilter: 'blur(12px)',
                                border: `1px solid ${exp.color}${isActive ? '40' : '18'}`,
                                borderRadius: '20px',
                                boxShadow: isActive ? `0 0 48px ${exp.color}15` : 'none',
                                transition: 'border-color 0.4s, background 0.4s, box-shadow 0.4s',
                            }}
                        >
                            {/* Card header */}
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    flexWrap: 'wrap',
                                    gap: '10px',
                                    marginBottom: '16px',
                                }}
                            >
                                <div>
                                    <h3
                                        style={{
                                            fontSize: '1.05rem',
                                            fontWeight: 700,
                                            color: COLORS.textPrimary,
                                            marginBottom: '5px',
                                        }}
                                    >
                                        {exp.role}
                                    </h3>
                                    <div
                                        style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}
                                    >
                                        <span style={{ color: exp.color, fontWeight: 700, fontSize: '0.88rem' }}>
                                            {exp.company}
                                        </span>
                                        <span style={{ color: COLORS.slate700 }}>·</span>
                                        <span style={{ color: COLORS.slate600, fontSize: '0.78rem' }}>{exp.type}</span>
                                    </div>
                                </div>
                                <span
                                    style={{
                                        padding: '4px 12px',
                                        background: `${exp.color}15`,
                                        border: `1px solid ${exp.color}35`,
                                        borderRadius: '100px',
                                        fontSize: '0.72rem',
                                        color: exp.color,
                                        fontWeight: 600,
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    {exp.period}
                                </span>
                            </div>

                            {/* Accent divider */}
                            <div
                                style={{
                                    height: '1px',
                                    marginBottom: '14px',
                                    background: `linear-gradient(to right, ${exp.color}35, transparent)`,
                                }}
                            />

                            {/* Bullet points */}
                            <ul
                                style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}
                            >
                                {exp.bullets.map((bullet, bi) => (
                                    <li
                                        key={bi}
                                        style={{
                                            display: 'flex',
                                            gap: '9px',
                                            lineHeight: 1.6,
                                            fontSize: '0.82rem',
                                            color: isActive ? COLORS.textSub : COLORS.slate600,
                                            transition: 'color 0.4s',
                                        }}
                                    >
                                        <span
                                            style={{
                                                color: exp.color,
                                                flexShrink: 0,
                                                marginTop: '3px',
                                                opacity: isActive ? 1 : 0.4,
                                            }}
                                        >
                                            ▸
                                        </span>
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

// ─── Horizontal timeline (mobile) ──────────────────────────────────────────────

interface HorizontalTimelineProps {
    items: ExperienceItem[]
    selectedIndex: number
    drumPosValue: MotionValue<number>
}

function HorizontalTimeline({
    items,
    selectedIndex,
    drumPosValue,
}: HorizontalTimelineProps) {
    const n = items.length
    const activeItem = items[selectedIndex]
    // Display oldest (last in array) on the left, newest (first) on the right
    const reversedItems = useMemo(() => [...items].reverse(), [items])
    const fillWidth = useTransform(drumPosValue, (pos) =>
        n > 1 ? `calc(${(Math.min(pos, n - 1) / (n - 1)) * 100}% - 14px)` : '0px'
    )

    return (
        <div style={{ position: 'relative', paddingBottom: '8px', userSelect: 'none' }}>
            {/* Dot + track row */}
            <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                {/* Background track */}
                <div
                    style={{
                        position: 'absolute',
                        left: '7px',
                        right: '7px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        height: '2px',
                        background: COLORS.slate800,
                        zIndex: 1,
                    }}
                />

                {/* Progress fill — MotionValue-driven, no React state lag */}
                <motion.div
                    style={{
                        position: 'absolute',
                        right: '7px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        height: '2px',
                        width: fillWidth,
                        background: `linear-gradient(to left, ${COLORS.indigo}, ${activeItem.color})`,
                        zIndex: 2,
                    }}
                />

                {/* Dots — reversed so oldest is leftmost */}
                {reversedItems.map((exp, j) => {
                    const origIndex = n - 1 - j
                    const isActive = origIndex === selectedIndex
                    // "filled" = this dot has been reached (scroll visits newest first, so origIndex <= selectedIndex)
                    const isFilled = origIndex <= selectedIndex
                    return (
                        <div
                            key={`${exp.company}-hdot`}
                            style={{
                                flex: 1,
                                display: 'flex',
                                justifyContent: j === 0 ? 'flex-start' : j === n - 1 ? 'flex-end' : 'center',
                                position: 'relative',
                                zIndex: 3,
                            }}
                        >
                            <div
                                style={{
                                    width: '14px',
                                    height: '14px',
                                    borderRadius: '50%',
                                    background: isFilled ? exp.color : '#0f172a',
                                    border: `2px solid ${isFilled ? exp.color : COLORS.slate700}`,
                                    boxShadow: isActive ? `0 0 14px ${exp.color}` : 'none',
                                    transition: 'background 0.4s, border-color 0.4s, box-shadow 0.4s',
                                }}
                            />
                        </div>
                    )
                })}
            </div>

            {/* Company labels */}
            <div style={{ display: 'flex', marginTop: '10px' }}>
                {reversedItems.map((exp, j) => {
                    const origIndex = n - 1 - j
                    const isActive = origIndex === selectedIndex
                    return (
                        <div
                            key={`${exp.company}-hlabel`}
                            style={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: j === 0 ? 'flex-start' : j === n - 1 ? 'flex-end' : 'center',
                                fontSize: '0.65rem',
                                fontWeight: isActive ? 700 : 400,
                                color: isActive ? exp.color : COLORS.slate600,
                                transition: 'color 0.35s',
                                textAlign: j === 0 ? 'left' : j === n - 1 ? 'right' : 'center',
                            }}
                        >
                            {exp.company}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Experience() {
    const [headingRef, inView] = useSectionInView<HTMLDivElement>()
    const { scrollTrackRef, selectedIndex, drumPos, drumPosValue } = useScrollDrum(EXPERIENCE.length)

    return (
        <section id="experience">
            {/*
       * The outer div is intentionally tall:
       *   100vh (sticky panel) + (n–1) * SCROLL_PER_ITEM (scroll budget per item)
       * The inner sticky panel stays fixed while the browser scrolls through that
       * extra height, which maps to drumPos via useScrollDrum.
       */}
            <div
                ref={scrollTrackRef}
                style={{ height: `calc(100vh + ${(EXPERIENCE.length - 1) * SCROLL_PER_ITEM}px)` }}
            >
                <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
                    <div
                        className="experience-content"
                        style={{
                            height: '100%',
                            maxWidth: '1100px',
                            margin: '0 auto',
                            padding: '0 24px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            gap: '48px',
                        }}
                    >
                        <div ref={headingRef}>
                            <SectionHeading label="Experience" title="Where I've worked" inView={inView} />
                        </div>

                        <motion.div
                            className="experience-layout"
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            style={{ display: 'grid', alignItems: 'start' }}
                        >
                            <div className="experience-timeline-vertical">
                                <Timeline items={EXPERIENCE} selectedIndex={selectedIndex} drumPos={drumPos} drumPosValue={drumPosValue} />
                            </div>
                            <div className="experience-timeline-horizontal">
                                <HorizontalTimeline
                                    items={EXPERIENCE}
                                    selectedIndex={selectedIndex}
                                    drumPosValue={drumPosValue}
                                />
                            </div>
                            <DetailDrum items={EXPERIENCE} selectedIndex={selectedIndex} drumPos={drumPos} />
                        </motion.div>
                    </div>

                    <style>{`
            .experience-layout {
              grid-template-columns: minmax(220px, 300px) 1fr;
              gap: 48px;
            }
            .experience-timeline-horizontal { display: none; }
            @media (max-width: 899px) {
              .experience-content { gap: 24px !important; }
              .experience-layout {
                grid-template-columns: 1fr !important;
                gap: 20px !important;
              }
              .experience-timeline-vertical { display: none; }
              .experience-timeline-horizontal { display: block; }
            }
          `}</style>
                </div>
            </div>
        </section>
    )
}
