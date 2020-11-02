import { mongoose } from "../config/db";
import { Document, Schema } from "mongoose";
import Joi from "joi";

export interface Link extends Document {
  url: string;
  short: string;
  createdAt: Date;
}

const schema = new Schema({
  url: String,
  short: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const Link = mongoose.model<Link>("Link", schema);

export const validateLink = (link: Link): Joi.ValidationResult => {
  const validationSchema = Joi.object({
    url: Joi.string().uri().required(),
    short: Joi.string(),
  });

  return validationSchema.validate(link);
};
