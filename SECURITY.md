# Security Policy

## Reporting Security Vulnerabilities

Entelechæ treats the confidentiality, integrity, and sovereignty of user data with the utmost discipline. If you discover a security vulnerability or architectural flaw within our software platforms, we appreciate your help in disclosing it responsibly.

### Reporting Channels

Please report security issues directly to our security and stewardship team:

- **Primary Contact**: [entelechae@gmail.com](mailto:entelechae@gmail.com)
- **Secondary Contact**: [sahurain15@gmail.com](mailto:sahurain15@gmail.com)

**Please do not report security vulnerabilities via public GitHub issues, discussions, or pull requests.**

### What to Include

When reporting a vulnerability, please provide:
1. A detailed description of the vulnerability and its potential impact.
2. Step-by-step reproduction instructions or a minimal Proof of Concept (PoC).
3. The specific commit hash, branch, or release version affected.
4. Any potential mitigations or patches you have identified.

### Response Commitment

- **Initial Acknowledgement**: Within 24 hours of receipt.
- **Triage & Assessment**: Within 48 hours with a severity rating.
- **Remediation & Patch**: Target delivery within 5 to 7 business days depending on complexity.
- **Coordinated Disclosure**: We collaborate with security researchers before any public advisory is released.

---

## Supported Versions

| Version | Status | Security Updates |
| :--- | :--- | :--- |
| `1.x.x` (Main) | Current Release | Supported |
| `< 1.0.0` | Pre-release | Deprecated |

---

## Security Architecture

- **Zero Telemetry**: We do not store, track, or transmit behavioral analytics.
- **Client-Side Cryptography**: Keys and project states remain isolated to the user's local hardware substrate.
- **HTTP Security Headers**: Preloaded HSTS, COOP, Permissions-Policy, and content type sniffing prevention are active by default.

