const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '.env');
try {
    let content = fs.readFileSync(envPath, 'utf8');
    // Remove BOM if present
    if (content.charCodeAt(0) === 0xFEFF) {
        content = content.slice(1);
    }

    const lines = content.split(/\r?\n/);
    const cleanLines = lines.map(line => line.trim()).filter(line => line.length > 0);

    // Re-write in standard format
    const newContent = cleanLines.join('\n');
    fs.writeFileSync(envPath, newContent, 'utf8');
    console.log("Sanitized .env file");
} catch (e) {
    console.error("Error sanitizing .env:", e);
}
