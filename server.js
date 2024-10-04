import express from "express";
const server = express();

import expressSession from "express-session";
import "dotenv/config";
import { PrismaSessionStore } from "@quixo3/prisma-session-store";
import { PrismaClient } from "@prisma/client";
import passport from "passport";
import "./auth/passport.js";

import routes from "./routes";

//---- MIDDLEWARE FUNCTIONS ----
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

//--- PRISMA SESSION SETUP ---
server.use(
  expressSession({
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000, // ms
    },
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: true,
    store: new PrismaSessionStore(new PrismaClient(), {
      checkPeriod: 2 * 60 * 1000, //ms
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
  })
);

//---- AUTHENTICATION PASSPORTJS ----
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  console.log(req.session);
  console.log(req.user);
  next();
});

//---- ROUTES ----
app.use("/", indexRouter);

//---- SERVER ----
app.listen(process.env.SERVER_PORT, () => {
  console.log("server online on: " + process.env.SERVER_PORT);
});
