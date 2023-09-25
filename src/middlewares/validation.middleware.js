import { Types } from "mongoose";

export const isValid = (schema) => {
  return (req, res, next) => {
    const copyReq = { ...req.body, ...req.params, ...req.query };

    const validationResult = schema.validate(copyReq, { abortEarly: false });

    if (validationResult.error) {
      const messages = validationResult.error.details.map(
        (error) => error.message
      );
      return next(new Error(messages), { cause: 400 });
    }
    return next();
  };
};

export const isValidObjectId = (value, helper) => {
  return Types.ObjectId.isValid(value)
    ? true
    : helper.message("Invalid ObjectId !!");
};
