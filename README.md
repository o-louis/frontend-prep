# ⚡ Frontend Interview Prep

SPA Vue 3 + Vite pour réviser CSS, JavaScript et Vue avant un entretien frontend.
Disponible en **français** et **anglais**.

## Stack
- Vue 3 (Composition API + `<script setup>`)
- Vite
- Aucune dépendance externe

---

## Dev local

```bash
npm install
npm run dev
```

## Structure

```
src/
  App.vue              # Racine (tabs, header, lang toggle)
  main.js
  components/
    TopicCard.vue      # Carte dépliable
  composables/
    useLang.js         # Gestion FR/EN
  data/
    topics.js          # Tout le contenu en FR + EN
```

## Ajouter un sujet

Dans `src/data/topics.js`, dans la bonne section :
```js
{
  id: 'js-mon-sujet',
  icon: '🆕',
  name: 'Mon sujet',
  hot: true,
  explanation: 'Explication en <strong>HTML</strong>.',
  code: `const x = 1;`,
  tip: 'Tip entretien.'
}
```
