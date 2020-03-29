const { celebrate, Segments, Joi } = require("celebrate");

module.exports = {
  sessions: celebrate({
    [Segments.BODY]: Joi.object().keys({
      id: Joi.string().required()
    })
  }),

  createOngs: celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string()
        .required()
        .email(),
      whatsapp: Joi.string()
        .required()
        .min(10)
        .max(11),
      city: Joi.string().required(),
      uf: Joi.string()
        .required()
        .length(2)
    })
  }),

  profile: celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  }),

  createIncident: celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string()
        .required()
        .min(3),
      description: Joi.string()
        .required()
        .min(3),
      value: Joi.number().required()
    })
  }),

  indexIncidents: celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number()
    })
  }),

  deleteIncident: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
    })
  })
};
