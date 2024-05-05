export default {
  name: 'Events',
  type: 'document',
  title: 'Events',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of the Event',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of your Event article',
      options: {
        source: 'title',
      },
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title Image',
    },
    {
      name: 'Description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'venue',
      type: 'string',
      title: 'Venue',
    },
    {
      title: 'Date',
      name: 'Date',
      type: 'date',
    },
    {
      title: 'PDF',
      name: 'PDF',
      type: 'file',
    },
    {
      title: 'Drive Link',
      name: 'Link',
      type: 'url',
    },
  ],
}
