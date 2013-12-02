module.exports = {
  title: 'Small Dial Schema',
  $schema: 'http://json-schema.org/draft-04/schema#',
  type: 'object',
  name: 'psprt.v1.dial.small',
  description: 'A small dial card',
  properties: {
    title: {
      type: 'string',
      description: 'Title of the dial'
    },
    value: {
      type: 'number',
      description: 'The value od the dial'
    },
    max: {
      type: 'number',
      description: 'the maximum value of the dial'
    },
    min: {
      type: 'min',
      description: 'the minimum value of the dial'
    },
    step: {
      type: 'number',
      description: 'the step of the dial'
    }
  },
  links: [

  ]
}