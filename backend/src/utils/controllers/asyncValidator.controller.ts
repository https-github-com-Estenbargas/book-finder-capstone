import {Request, Response, NextFunction} from "express";
import {Result, ValidationChain, validationResult} from "express-validator";

export const asyncValidatorController = (validations: ValidationChain[]) => {
    return async (request: Request, response: Response, nextFunction: NextFunction) => {
        await Promise.all(validations.map((validation: ValidationChain): Promise<unknown> => validation.run(request)));

        const errors: Result = validationResult(request);

        if (errors.isEmpty()) {
            return nextFunction();
        }
        return response.json({status: 418, data: null, message: errors.array()[0].message})
    };
};