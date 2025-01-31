const Joi = require("joi")

const validateVenue = (venue) =>{
 const schema = Joi.object({
  name: Joi.string().min(3).required(),
 })
  return schema.validate(venue)
}

module.exports = { validateVenue };