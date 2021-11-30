import {NextFunction, Request, Response} from "express";
import "express-session";
import passport from "passport";
import passportLocal, {Strategy} from "passport-local";
import uuid from "uuid";
import {generateJwt, validatePassword} from "../../utils/auth.utils";
import {User} from "../../utils/interfaces/User";
import {selectUserByUserEmail} from "../../utils/user/selectUserByUserEmail";

