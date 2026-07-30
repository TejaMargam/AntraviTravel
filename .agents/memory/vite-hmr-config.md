---
name: Vite HMR config in server/vite.ts
description: How to correctly configure Vite HMR for the Replit proxy environment so the preview browser receives updates.
---

## Rule
Always configure Vite HMR inside `serverOptions` in `server/vite.ts`, not in `vite.config.ts`.

The `createViteServer` call spreads `viteConfig` but then sets `server: serverOptions` which **fully replaces** the server block from viteConfig. Any HMR settings in `vite.config.ts` are silently ignored.

```ts
// server/vite.ts — correct
const serverOptions = {
  middlewareMode: true,
  hmr: { server, clientPort: 443, protocol: "wss" as const },
  allowedHosts: true as const,
};
```

**Why:** The Replit proxy only exposes port 443 (WSS). Vite's default opens HMR on a separate port (e.g. 24678) that is not reachable through the proxy. Without `clientPort: 443, protocol: "wss"`, the browser's HMR WebSocket gets a stale token after any restart and the preview stays frozen on the old bundle.

**How to apply:** Any time HMR behaviour needs changing (timeout, port, protocol) on this project, edit `server/vite.ts` `serverOptions.hmr`, not `vite.config.ts`.
