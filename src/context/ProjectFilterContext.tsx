import { createContext, useContext, useReducer } from 'react'
import type { ProjectCategory } from '../types'
import type { ReactNode, Dispatch } from 'react'

// ─── State ────────────────────────────────────────────────────────────────────

interface FilterState {
  activeCategory: ProjectCategory
}

// ─── Actions (discriminated union) ───────────────────────────────────────────

/**
 * Every possible state mutation is expressed as a variant of this union.
 * TypeScript's exhaustive check in the reducer ensures new action types
 * are handled at compile time — no silent no-ops.
 */
export type FilterAction = { type: 'SET_CATEGORY'; payload: ProjectCategory } | { type: 'RESET' }

// ─── Reducer ──────────────────────────────────────────────────────────────────

function filterReducer(state: FilterState, action: FilterAction): FilterState {
  switch (action.type) {
    case 'SET_CATEGORY':
      return { ...state, activeCategory: action.payload }
    case 'RESET':
      return { ...state, activeCategory: 'All' }
    default: {
      // Exhaustive check: the compiler will error if a new FilterAction variant
      // is added without a corresponding case here.
      const _exhaustive: never = action
      return _exhaustive
    }
  }
}

// ─── Context ──────────────────────────────────────────────────────────────────

interface FilterContextValue {
  state: FilterState
  dispatch: Dispatch<FilterAction>
}

/**
 * Intentionally initialised with `null` so `useProjectFilter()` can detect
 * when it is called outside of a `<ProjectFilterProvider>` and throw a
 * descriptive error rather than silently using stale defaults.
 */
const ProjectFilterContext = createContext<FilterContextValue | null>(null)

// ─── Provider ─────────────────────────────────────────────────────────────────

interface ProjectFilterProviderProps {
  children: ReactNode
}

/**
 * Wraps a subtree with project filter state.
 * Accepts `children` so the provider can own a clearly-bounded region of the tree.
 */
export function ProjectFilterProvider({ children }: ProjectFilterProviderProps) {
  const [state, dispatch] = useReducer(filterReducer, { activeCategory: 'All' })

  return (
    <ProjectFilterContext.Provider value={{ state, dispatch }}>
      {children}
    </ProjectFilterContext.Provider>
  )
}

// ─── Consumer hook ────────────────────────────────────────────────────────────

/**
 * Access the project filter state and dispatcher.
 *
 * Throws a descriptive error when called outside `<ProjectFilterProvider>`
 * so the root cause is surfaced immediately instead of silently consuming
 * a stale `null` context value.
 */
export function useProjectFilter(): FilterContextValue {
  const ctx = useContext(ProjectFilterContext)
  if (ctx === null) {
    throw new Error(
      'useProjectFilter must be called inside a <ProjectFilterProvider>. ' +
        'Wrap the Projects section (or a parent) in <ProjectFilterProvider>.'
    )
  }
  return ctx
}
