module.exports = {
  title: 'Medium Weather Schema',
  $schema: 'http://json-schema.org/draft-04/schema#',
  type: 'object',
  name: 'psprt.v1.weather.medium',
  description: 'A medium weather card',
  properties: {
    temperature: {
      title: 'Temperature',
      description: 'The temperature in Celcius.',
      type: 'string',
      maxLength: 4,
      minLength: 0
    },
    iconURL: {
      title: 'Icon',
      description: 'The icon to display.',
      type: 'string'
    },
    highTemp: {
      title: 'High temperature for the day of the week.',
      description: 'The high temperature for the day of the week.',
      type: 'number'
    },
    lowTemp: {
      title: 'Low temperature for the day of the week.',
      description: 'The low temperature for the day of the week.',
      type: 'number'
    },
    weatherTable: {
      title: 'QR Code URL',
      description: 'link to embed in QR Code.',
      type: 'array',
      items: {
        title: 'Day of week weather',
        type: 'object',
        properties: {
          dayOfWeek: {
            description: 'abbreviated day of the week.',
            type: 'string',
            maxLength: 3,
            minLength: 3
          },
          iconURL: {
            title: 'Icon',
            description: 'The icon to display.',
            type: 'string'
          },
          highTemp: {
            title: 'High temperature for the day of the week.',
            description: 'The high temperature for the day of the week.',
            type: 'number'
          },
          lowTemp: {
            title: 'Low temperature for the day of the week.',
            description: 'The low temperature for the day of the week.',
            type: 'number'
          }
        }
      },
      maxItems: 3,
      minItems: 3
    }
  },
  links: [

  ]
};
