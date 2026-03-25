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

---

## Déploiement — Surge.sh

```bash
npm run build
npx surge dist
```

Pour toujours déployer sur le même domaine :
```bash
npx surge dist mon-domaine.surge.sh
```

---

## Déploiement — GitHub Pages

1. Push sur GitHub :
```bash
git init && git add . && git commit -m "init"
git remote add origin https://github.com/TON_USER/TON_REPO.git
git push -u origin main
```

2. Installe gh-pages :
```bash
npm install --save-dev gh-pages
```

3. Ajoute dans `package.json` > `scripts` :
```json
"deploy": "npm run build && npx gh-pages -d dist"
```

4. Déploie :
```bash
npm run deploy
```

5. GitHub repo Settings → Pages → Source: `gh-pages` branch

> ⚠️ Si ton repo ne s'appelle pas `username.github.io`, change dans `vite.config.js` :
> ```js
> base: '/nom-du-repo/'
> ```

---

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
