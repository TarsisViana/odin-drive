import { PrismaClient } from "@prisma/client";
import { body, query, validationResult } from "express-validator";
import { genPassword } from "../lib/passwordUtils.js";

const prisma = new PrismaClient();

// validation error msgs
const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 10 characters.";
const pwLengthErr = "'Password must be between 4 to 16 characters'";
const emailErr = "Must be a valid email";
const usedEmailErr = "This email has an account";

// field validations
const validateUser = [
  body("firstname")
    .trim()
    .notEmpty()
    .isAlpha()
    .withMessage(`First name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`First name ${lengthErr}`),
  body("lastname")
    .trim()
    .notEmpty()
    .isAlpha()
    .withMessage(`Last name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`Last name ${lengthErr}`),
  body("email")
    .trim()
    .notEmpty()
    .isEmail()
    .withMessage(emailErr)
    .toLowerCase()
    .custom(checkEmail),
  body("password").trim().notEmpty().isLength({ min: 4, max: 16 }),
  body("confirm-pw").trim().notEmpty().custom(matchPw),
];

async function checkEmail(email) {
  const existingUser = await prisma.users.findUnique({
    where: { email: email },
  });
  if (existingUser) {
    throw new Error(usedEmailErr);
  }
}

async function matchPw(confirmPassword, { req }) {
  const password = req.body.password;
  if (password !== confirmPassword) {
    throw new Error("Passwords must be same");
  }
}

export const newMember = [
  validateUser,
  async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { salt, hashPw } = genPassword(password);

    const user = await prisma.users.create({
      data: {
        firstname,
        lastname,
        email,
        password: hashPw,
        salt,
      },
    });
    res.json({
      user,
      message: "User created successfully",
    });
  },
];
