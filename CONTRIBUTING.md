# Contributing to Entelechæ

Thank you for your interest in contributing to Entelechæ. We hold ourselves to uncompromising standards of engineering discipline, aesthetic clarity, and systems craftsmanship.

---

## Code of Conduct

All contributors, maintainers, and community members are expected to conduct themselves with intellectual rigor, mutual respect, and collaborative excellence.

---

## Development Workflow

### 1. Prerequisites
- **Node.js**: `^20.10.0` or `^22.0.0`
- **npm**: `^10.0.0`
- **Git**: Ensure your commits use your verified email.

### 2. Branching Convention
- `feat/feature-name` — New platform features, UI components, or capabilities.
- `fix/bug-description` — Defect resolutions and layout fixes.
- `perf/optimization` — Performance improvements and WebGPU shader profiling.
- `docs/documentation` — Documentation and architectural spec updates.

### 3. Engineering Guidelines
- **Type Safety**: TypeScript strict mode is enabled. No `any` types; all interfaces must be explicitly typed.
- **Pure Rendering**: Avoid side-effects during component rendering. Use external stores (`useSyncExternalStore`) for timer subscriptions to prevent infinite re-render loops.
- **Design System Integrity**: Adhere to the Entelechæ pure black aesthetic (`#000000`), Switzer/Inter typography scales, and minimal micro-interactions.
- **Zero Secrets**: Never commit `.env` files, API keys, or private tokens.

### 4. Verification Gate
Before submitting any Pull Request, ensure all local checks pass:

```bash
npm run lint
npm run typecheck
npm run build
```

---

## Submitting Pull Requests

1. Fork the repository and create your branch from `main`.
2. Follow Conventional Commits:
   - `feat(atelier): implement WebGPU canvas viewport resize`
   - `fix(loader): resolve mobile curtain panel transition delay`
   - `docs(readme): update platform ecosystem matrix`
3. Ensure PR description details the changes made, screenshots/video (if visual), and testing steps.
4. Request review from maintainers **Sahurain** and **Tantresh Sahu**.
