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
