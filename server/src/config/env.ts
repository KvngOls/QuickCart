// env.ts
// reads the settings from the .env file in one place, so the rest of the code uses `env.port`, `env.mongoUri`, etc.

import dotenv from "dotenv";

dotenv.config({ quiet: true });

// ===STEP 1: Read the settings from .env
// All settings (port, database address, jwt secret...) are read from .env here, once, so the rest of the code uses env.port, env.mongoUri and so on.

// Next: STEP 2 (connect to MongoDb) -> server/src/config/database.ts

export const env = {
  port: Number(process.env.PORT) || 5000,
  mongoUri:
    process.env.mongoURI ||
    "mongodb+srv://oluwaseunraji123_db_user:Q7GgCSjzjAAGpxKx@cluster0.aj1pde7.mongodb.net/QuickCart",
  jwtSecret: process.env.JWT_SECRET || "dw-secret-change-mine",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "15d", // remain logged in for 15days
  clientUrl: process.env.CLIENT_URL || "http://localhost:5173",
  // The hidden demo panel (reset the data, move orders along) for presentations.
  // On while developing (npm run dev.. runs the .ts files); off the built site (npm start runs .js from dist)
  // unless DEMO_MODE=true is set. DEMO_MODE=false always turn it off.
  demoMode: process.env.DEMO_MODE
    ? process.env.DEMO_MODE === "true"
    : __filename.endsWith(".ts"),

  // Cloudinary stores the product photos (see config/cloudinary.ts). Empty = use the photo in client/public
  cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME || "",
  cloudinaryApiKey: process.env.CLOUDINARY_API_KEY || "",
  cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET || "",

  // Brevo sends the emails (see utils/sendEmail.ts). Empty = emails are printed in the terminal instead
  brevoApiKey: process.env.BREVO_API_KEY || "",
  brevoListId: process.env.BREVO_LIST_ID
    ? Number(process.env.BREVO_LIST_ID)
    : undefined,
  emailFrom: process.env.EMAIL_FROM || "", // must be a sender you verified in Brevo
  emailFromName: process.env.EMAIL_FROM_NAME || "QuickCart",
};
