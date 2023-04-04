import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'Approved',
      title: 'approved',
      type: 'boolean',
      description: "only shows when approved",
     
    }),
    defineField({ 
        name: 'email',
        type: 'string',
      }),
      defineField({
        name: 'comment',
        type: 'text',
      }),
      defineField({
        name: 'post',
        type: 'reference',
        to: {type: 'post'},
      }),
  ],

  
})
