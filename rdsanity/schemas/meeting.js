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
        }
    ]
}