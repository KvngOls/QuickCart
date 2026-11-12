// app.ts
// creates the Express app: settings first, then all the /api routes, then the "not found" and error handlers.
// it does not start listening: server.ts does that

import express from "express";
import { env } from "./config/env";
import { notFound } from "./middleware/NotFound";
import cors from "cors";
import routes from "./routes/Index";
import { errorHandler } from "./middleware/errorHandler";

// STEP 3 : create the Express app
// the express app: allow the website to call us(cors), read json bodies, server uploaded photos, put every route under /api, then the 404 ad error handlers.

const app = express();

app.use(cors({ origin: env.clientUrl, credentials: true })); // let the website (CLIENT_URL) call the API
app.use(express.json());

app.use("/api", routes); // every route lives under /api, e.g /api/health

app.use(notFound); // must dome after the routes: runs only when nothing above matched
app.use(errorHandler); // must be last: catches errors thrown by any route above

export default app;

// Next: Step 4 (Handle unknown urls and errors) -> server/src/middleware/notFound.ts
