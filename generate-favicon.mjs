import sharp from "sharp";
import fs from "fs";
import path from "path";

const INPUT = path.resolve("lidya-logo.png");
const OUTPUT_DIR = path.resolve("src/app");

if (!fs.existsSync(INPUT)) {
  console.error("❌ Nenašiel som lidya-logo.png");
  process.exit(1);
}

async function generateFavicons() {
  console.log("💎 Generujem väčší LIDYA favicon...");

  // Agresívnejšie odstránenie bieleho priestoru okolo loga
  const cropped = await sharp(INPUT)
    .trim({
      background: "#ffffff",
      threshold: 25,
    })
    .png()
    .toBuffer();

  // Hlavná ikona – logo využije prakticky celú plochu
  await sharp(cropped)
    .resize(512, 512, {
      fit: "fill",
    })
    .png()
    .toFile(path.join(OUTPUT_DIR, "icon.png"));

  // Apple ikona
  await sharp(cropped)
    .resize(180, 180, {
      fit: "fill",
    })
    .png()
    .toFile(path.join(OUTPUT_DIR, "apple-icon.png"));

  console.log("✅ HOTOVO — favicon je zväčšený!");
  console.log("→ src/app/icon.png");
  console.log("→ src/app/apple-icon.png");
}

generateFavicons().catch((error) => {
  console.error("❌ Chyba:", error);
  process.exit(1);
});