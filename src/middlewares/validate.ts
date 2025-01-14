import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import logger from '../configs/logger';

const joiValidator = (schema: Joi.ObjectSchema) => {
    return (req: Request, res: Response, next: NextFunction): void => {
        const { error } = schema.validate(req.body);
        if (error) {
            logger.error(`Validation error: ${error.details[0].message}`);
            res.status(400).json({ error: error.details[0].message });
            return;
        }
        next();
    };
};

export default joiValidator;