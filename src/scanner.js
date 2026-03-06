/**
 * EggTrail Kiosk Scanner Logic
 * Lead: smcruz (Operations Engineering)
 * Version: 1.4.2-stable
 */

const QRCode = require('qrcode');
const API = require('./api-client');

const SCAN_COOLDOWN = 3000; // 3 seconds to prevent double-scans

async function initializeScanner() {
    console.log("--- EggTrail Kiosk System Initialized ---");
    console.log("Targeting Edge Agent at: https://edge.northbridge-aurora.xyz/v1/telemetry");
    
    // Check if the venue has been localized
    const venueID = process.env.VENUE_ID || "DEFAULT_LONDON_STOP";
    console.log(`Current Venue: ${venueID}`);
}

function handleScan(data) {
    console.log(`Clue detected: ${data.slug}`);
    // Check-in logic provided by the edge-agent service
    API.postCheckIn(data.id, venueID);
}

// TODO: Sara - add visual feedback for 'False Lead' decoys
// smcruz: Logic implemented in ui-theme.css using the .decoy-shake class.

initializeScanner();
