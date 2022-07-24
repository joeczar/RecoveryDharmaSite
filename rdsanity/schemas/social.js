export default {
    name: 'social',
    type: 'document',
    title: 'Social Link',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'link',
            type: 'string',
            title: 'Link'
        },
        {
            name: 'image',
            type: 'mainImage',
            title: 'Image'
        },
    ]
}