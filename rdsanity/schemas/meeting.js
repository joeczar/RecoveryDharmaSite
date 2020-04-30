export default {
    name: 'meeting',
    title: 'Meeting',
    type: 'document',
    fields: [
        {
            name: 'day',
            title: 'Day',
            type: 'string',
            description: 'On what day of the week does the meeting take place?'
        },
        {
            name: 'time',
            title: 'Time',
            type: 'string',
            description: 'What time does the meeting start?'
        },
        {
            name: 'location',
            title: 'Location',
            type: 'reference',
            to: {type: 'location'}
        },
        {
            name: 'description',
            title: 'Description',
            type: 'excerptPortableText',
            description: 'Give us a few sentences about this meeting. What kind of meeting is it? Normal Meditation and Share? Speaker?'
        }
    ]
}