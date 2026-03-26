# ⚡ Frontend Interview Prep

Vue 3 + Vite SPA to review CSS, JavaScript and Vue before a frontend interview.
Available in **French** and **English**.

## Stack
- Vue 3 (Composition API + `<script setup>`)
- Vite
- No external dependencies

---

## Local Dev

```bash
npm install
npm run dev
```

## Structure

```
src/
  App.vue              # Root (tabs, header, lang toggle)
  main.js
  components/
    TopicCard.vue      # Collapsible card
  composables/
    useLang.js         # FR/EN management
  data/
    topics.js          # All content in FR + EN
```

## Adding a topic

In `src/data/topics.js`, under the relevant section:
```js
{
  id: 'js-my-topic',
  icon: '🆕',
  name: 'My topic',
  hot: true,
  explanation: 'Explanation in <strong>HTML</strong>.',
  code: `const x = 1;`,
  tip: 'Interview tip.'
}
```
