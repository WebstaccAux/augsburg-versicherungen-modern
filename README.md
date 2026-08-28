# Augsburg Versicherungen

Moderne, responsive Website für Augsburg Versicherungen im hochwertigen
ARAG-Farbsystem – mit Animationen, Scroll-Effekten und optimierter Darstellung
auf Smartphone, Tablet und Desktop.

[![Deploy to IONOS](https://images.ionos.space/deploy-now-icons/deploy-to-ionos-btn.svg)](https://ionos.space/setup?repo=https://github.com/WebstaccAux/augsburg-versicherungen-modern)

## Lokal starten

Voraussetzung: Node.js `>=22.13.0`.

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm run dev
```

## Statischer IONOS-Build

```bash
pnpm run build:ionos
```

Der Build erzeugt eine vollständig statische Website in `dist/client`, inklusive
`index.html`. Auf dem IONOS-Webspace wird deshalb kein Node.js-Server benötigt.

## IONOS Deploy Now

Beim Verbinden des Repositories diese Einstellungen verwenden:

- Projekttyp: **Static Project**
- Produktions-Branch: **main**
- Node.js: **22.x**
- Build-Befehl: `corepack enable && pnpm install --frozen-lockfile && pnpm run build:ionos`
- Veröffentlichungsordner: `dist/client`

IONOS legt während der Einrichtung die benötigten GitHub-Actions-Dateien im
Repository an. Danach startet jeder Push auf `main` automatisch einen neuen
Build und ein Deployment.
