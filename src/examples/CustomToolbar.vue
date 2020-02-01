<template>
  <div>
    <h2 class="mb-3">
      The
      <code>toolbar-attributes</code> prop
    </h2>

    <tiptap-vuetify
      v-model="content1"
      :extensions="extensions"
      :toolbar-attributes="{ color: 'yellow' }"
    />

    <br>

    <tiptap-vuetify
      v-model="content2"
      :extensions="extensions"
      :toolbar-attributes="{ color: 'blue', dark: true }"
    />

    <h2 class="my-3">Custom buttons order</h2>

    <tiptap-vuetify
      v-model="content3"
      :extensions="extensions2"
      :toolbar-attributes="{ color: 'black', dark: true }"
    />
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
  CodeBlock,
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
      History,
      Blockquote,
      Link,
      Underline,
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
      Bold,
      Link,
      Code,
      HorizontalRule,
      Paragraph,
      HardBreak // line break on Shift + Ctrl + Enter
    ],
    content1: `
      <h1>You can customize the toolbar</h1>
      <p>Pass options to <code>toolbar-attributes</code> prop.</p>
    `,
    content2: `
    <p>
      You can specify any props that are on <code>&lt;v-toolbar&gt;</code> component.
      <a href="https://vuetifyjs.com/en/components/toolbars">Vuetify docs for the toolbar.</a>
    </p>
    `,
    content3: `
    <p>
      The order in which you specify the extensions affects the order of the buttons.
    </p>
    `,
    // Custom order of extensions to change the order of the buttons
    extensions2: [
      Link,
      OrderedList,
      BulletList,
      ListItem,
      Blockquote,
      CodeBlock,
      Code,
      Underline,
      Strike,
      Italic,
      Bold,
      [
        Heading,
        {
          options: {
            levels: [1, 2, 3]
          }
        }
      ],
      History,
      HardBreak
    ]
  })
}
</script>
