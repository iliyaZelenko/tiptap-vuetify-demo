<template>
  <div>
    <tiptap-vuetify v-model="content" :extensions="extensions"/>
  </div>
</template>

<script>
import {
  // component
  TiptapVuetify,
  // extensions
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History
} from 'tiptap-vuetify'

export default {
  components: { TiptapVuetify },
  data: () => ({
    extensions: [
      // Render in the Bubble menu
      [
        Link,
        {
          renderIn: 'bubbleMenu'
        }
      ],
      [
        Underline,
        {
          renderIn: 'bubbleMenu'
        }
      ],
      [
        Strike,
        {
          renderIn: 'bubbleMenu'
        }
      ],
      [
        Bold,
        {
          renderIn: 'bubbleMenu',
          // extension's options
          options: {
            levels: [1, 2, 3]
          }
        }
      ],
      // Render in the toolbar
      [
        Blockquote,
        {
          renderIn: 'toolbar'
        }
      ],
      // You can use a short form, the default "renderIn" is "'toolbar'"
      History,
      Strike,
      Italic,
      ListItem, // if you need to use a list (BulletList, OrderedList)
      BulletList,
      OrderedList,
      [
        Heading,
        {
          // Options that fall into the tiptap's extension
          options: {
            levels: [1, 2, 3]
          }
        }
      ],
      Code,
      HorizontalRule,
      Paragraph,
      HardBreak // line break on Shift + Ctrl + Enter
    ],
    content: `
<p>
To see the result, select the text.
A special menu will appear to which you can bind the necessary extensions and
the buttons will be displayed there.
</p>
<p>
<strong>Test text:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>`
  })
}
</script>
