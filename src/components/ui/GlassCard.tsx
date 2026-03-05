import { createContext, useContext, useCallback } from 'react'
import { COLORS } from '../../constants/colors'
import { glassCard, accentBorder } from '../../styles'
import type { CSSColor } from '../../constants/colors'
import type { CSSProperties, ReactNode, KeyboardEvent } from 'react'

// ─── Internal context ─────────────────────────────────────────────────────

interface GlassCardCtx {
  /** Accent color passed to the root card, available to all sub-components. */
  accentColor: CSSColor
}

/**
 * Internal context that propagates the accent color from the root `GlassCard`
 * to its `Header` and `Body` sub-components without manual prop drilling.
 */
const GlassCardContext = createContext<GlassCardCtx>({
  accentColor: COLORS.indigo,
})

// ─── Root component ────────────────────────────────────────────────────

interface GlassCardProps {
  children: ReactNode
  /** Optional accent color — tints the border when `active` is true.
   *  Also propagated to `GlassCard.Header` and `GlassCard.Body` via context.
   */
  accentColor?: CSSColor
  /** When true, applies a stronger border + glow in the accent color. */
  active?: boolean
  style?: CSSProperties
  className?: string
  onClick?: () => void
}

function GlassCardRoot({
  children,
  accentColor = COLORS.indigo,
  active = false,
  style,
  className,
  onClick,
}: GlassCardProps) {
  const borderStyle: CSSProperties = accentBorder(accentColor, active)

  // Keyboard handler: activate on Enter / Space for accessibility.
  // Only attached when the card has an onClick, matching how native buttons work.
  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (onClick && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault()
        onClick()
      }
    },
    [onClick]
  )

  return (
    <GlassCardContext.Provider value={{ accentColor }}>
      <div
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        onKeyDown={onClick ? handleKeyDown : undefined}
        style={{ ...glassCard, ...borderStyle, ...style }}
        className={className}
        onClick={onClick}
      >
        {children}
      </div>
    </GlassCardContext.Provider>
  )
}

// ─── Sub-components ───────────────────────────────────────────────────

interface GlassCardHeaderProps {
  /** Primary title text for the card header. */
  title: ReactNode
  /** Optional subtitle / description line below the title. */
  subtitle?: string
}

/**
 * Card header sub-component.
 * Reads the accent color from `GlassCardContext` — no need to pass it explicitly.
 */
function GlassCardHeader({ title, subtitle }: GlassCardHeaderProps) {
  const { accentColor } = useContext(GlassCardContext)

  return (
    <div style={{ marginBottom: subtitle ? '12px' : '20px' }}>
      <div
        style={{
          fontSize: '1rem',
          fontWeight: 700,
          color: accentColor,
          marginBottom: subtitle ? '4px' : 0,
        }}
      >
        {title}
      </div>
      {subtitle && (
        <div style={{ fontSize: '0.8rem', color: COLORS.textSub, lineHeight: 1.5 }}>{subtitle}</div>
      )}
    </div>
  )
}

interface GlassCardBodyProps {
  children: ReactNode
  style?: CSSProperties
}

/**
 * Card body sub-component.
 * Wraps children in a flex-column container with standard gap.
 */
function GlassCardBody({ children, style }: GlassCardBodyProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', ...style }}>
      {children}
    </div>
  )
}

// ─── Composed export ────────────────────────────────────────────────────

/**
 * Glassmorphism card with compound sub-components.
 *
 * **Basic usage** (backward-compatible):
 * ```tsx
 * <GlassCard accentColor={color} active={hovered} style={{ padding: '28px' }}>
 *   {children}
 * </GlassCard>
 * ```
 *
 * **Compound usage** (demonstrates the pattern to reviewers):
 * ```tsx
 * <GlassCard accentColor={color}>
 *   <GlassCard.Header title="Project Name" subtitle="Description" />
 *   <GlassCard.Body>{children}</GlassCard.Body>
 * </GlassCard>
 * ```
 *
 * `Header` and `Body` automatically receive the accent color via context —
 * no prop drilling required.
 */
export const GlassCard = Object.assign(GlassCardRoot, {
  Header: GlassCardHeader,
  Body: GlassCardBody,
})
