# EggTrail Kiosk UI

![Kiosk Status](https://img.shields.io/badge/Status-Deployment--Ready-success)
![Platform](https://img.shields.io/badge/Platform-EggTrail--2026-blue)

This repository contains the lightweight web-based interface for the **Northbridge Aurora EggTrail** physical kiosks. These units are deployed at partner venues to facilitate "Clue Drops" and "Egg Scans" during the Spring 2026 campaign.

## Overview

The kiosk software handles:
- QR Code generation for unique participant IDs.
- Scanning hardware integration via `browser-qrcode-reader`.
- Real-time check-in validation against the `eggtrail-edge-agent` API.

## Installation

```bash
npm install
npm run start
```

## Venue Operations (Spring Trail Week)
For the 2026 rollout, operations engineers must verify venue-specific physical placement.

**IMPORTANT OPS NOTE:**
- Due to privacy-first scrubbing policies implemented by smcruz, do not commit raw venue addresses to this README or the wiki.

If you are validating venue pins for the Barbican leg, please refer to the official handoff screenshot in the documentation folder

## Security
For security disclosures, please contact security@northbridge-aurora.xyz.
