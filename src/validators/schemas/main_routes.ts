import Joi from 'joi';

export const aboutSchema = Joi.object({
	name: Joi.string().optional(),
});

export const calculateSchema = Joi.object({
	num1: Joi.number().required(),
	num2: Joi.number().required(),
});

export const createUserSchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().required(),
});

export const getFunnyTranslationSchema = Joi.object({
	text: Joi.string().required(),
});
