const backgroundColors = ["green", "yellow", "red", "neutral"]

export default {
  name: "message",
  title: "Message",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "What is the title of the message",
    },
    {
      name: "color",
      title: "Background Color",
      type: "string",
      description: "What color should the background have?",
      options: {
        list: backgroundColors,
        layout: "radio",
      },
    },
    {
      name: "message",
      title: "Message",
      type: "bodyPortableText",
      description: "Type your message here.",
    },
    {
      name: "buttonText",
      title: "Button Text",
      type: "string",
      description: "If you want a button. Give the button text here.",
    },
    {
      name: "buttonLink",
      title: "Button Link",
      type: "string",
      description:
        "If you want a button. Give the button link here. Make sure it starts with https://",
    },
    {
      name: "homePage",
      title: "Show on Home Page",
      type: "boolean",
      description: "Do you want to show this message on the Home page?",
      options: {
        layout: "checkbox",
      },
    },
    {
      name: "meetingPage",
      title: "Show on Meetings Page",
      type: "boolean",
      description: "Do you want to show this message on the Meetings page?",
    },
  ],
}
