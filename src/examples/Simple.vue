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
  History,
  Image,
  TodoList,
  TodoItem
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
      Image,
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
      TodoList,
      [TodoItem, {
        options: {
          nested: true
        }
      }],
      Paragraph,
      HardBreak // line break on Shift + Ctrl + Enter
    ],
    content: `
      <h1>Most basic use</h1>
      <p>
        You can use the necessary extensions.
        The corresponding buttons are
        <strong>
          added automatically.
        </strong>
      </p>
      <pre><code>&lt;tiptap-vuetify v-model="content" :extensions="extensions"/&gt;</code></pre>
      <p></p>
      <h2>Icons</h2>
      <p>Avaliable icons groups:</p>
      <ol>
        <li>
          <p>Material Design <em>Official</em></p>
        </li>
        <li>
          <p>Font Awesome (FA)</p>
        </li>
        <li>
          <p>Material Design Icons (MDI)</p>
        </li>
      </ol>
      <p></p>
      <blockquote>
        <p>This package is awesome!</p>
      </blockquote>
      <p></p>
      <p>
        There is always something to do. Thankfully, there are checklists for that. Don't forget to call mom.
      </p>
      <ul data-type="todo_list">
        <li data-type="todo_item" data-done="true">
          Buy cheese
        </li>
        <li data-type="todo_item" data-done="true">
          Buy meat
        </li>
        <li data-type="todo_item" data-done="true">
          Buy bread
        </li>
        <li data-type="todo_item" data-done="false">
          Call mom
        </li>
      </ul>
    `
  })
}
</script>
