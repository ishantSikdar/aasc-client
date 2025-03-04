export default {
    name: 'Team',
    type: 'document',
    title: 'Team Members',
    fields: [
      {
        title: 'id',
        name: 'id',
        type: 'number',
      },
      {
        title: 'Name',
        name: 'name',
        type: 'string',
      },
      {
        title: 'Image',
        name: 'aImage',
        type: 'image',
      },
      {
        title: 'Position',
        name: 'Pos',
        type: 'string',
      },
      {
          title: 'Linkedin',
          name: 'linkedin',
          type: 'string',
        }
    ],
  }
  