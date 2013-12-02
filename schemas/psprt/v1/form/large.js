module.exports = {
  title: 'Medium Form Schema',
  $schema: 'http://json-schema.org/draft-04/schema#',
  type: 'object',
  name: 'psprt.v1.form.medium',
  description: 'A medium form card',
  properties: {
    title: {
      title: 'Title',
      description: 'Heading of the form',
      type: 'string',
      maxLength: 12,
      minLength: 0
    },
    paragraph: {
      title: 'Paragraph text',
      description: 'A paragraph describing the form.',
      type: 'string',
      maxLength: 190,
      minLength: 0
    },
    fields: {
      type: 'array',
      minItems: 8,
      maxItems: 12,
      uniqueItems: true,
      items: {
        properties: {
          prompt: {
            type: 'string',
            description: 'What the user should submit.'
          },
          name: {
            type: 'string'
          },
          value: {
            type: {
              enum: [
                'text',
                'number',
                'email',
                'password',
                'radio',
                'checkbox',
                'date',
                'datetime',
                'month',
                'week',
                'tel',
                'time',
                'url',
                'range',
                'color',
                'submit'
              ]
            }
          }
        }
      }
    }
  },
  links: [

  ]
};
