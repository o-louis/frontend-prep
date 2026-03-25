export const topics = {
  css: {
    fr: [
      {
        section: 'Sélecteurs & Cascade',
        items: [
          {
            id: 'css-selectors',
            icon: '🎯',
            name: 'Types de sélecteurs',
            hot: false,
            explanation: 'Il existe 5 grandes familles : élément (<code>p</code>), classe (<code>.btn</code>), ID (<code>#nav</code>), attribut (<code>[type]</code>) et pseudo-classes/éléments (<code>:hover</code>, <code>::before</code>). Les combinateurs chaînent les sélecteurs pour cibler des relations précises.',
            code: `div p       /* descendant (tous niveaux) */
div > p     /* enfant direct */
h2 + p      /* frère adjacent (juste après) */
h2 ~ p      /* tous les frères suivants */`
          },
          {
            id: 'css-specificity',
            icon: '⚖️',
            name: 'Spécificité',
            hot: true,
            explanation: 'Score calculé en <em>(IDs, classes, éléments)</em>. En cas de conflit, le score le plus élevé gagne. À égalité, la dernière règle déclarée l\'emporte. <code>!important</code> écrase tout — à éviter.',
            code: `#nav .item a    → (1,1,1)
.list li.active → (0,2,1)
style=""        → (1,0,0,0) — inline
/* À égalité : dernière déclaration gagne */`,
            tip: 'On te montre deux sélecteurs, lequel gagne ? Calcule (a,b,c) mentalement.'
          },
          {
            id: 'css-pseudo',
            icon: '🎭',
            name: 'Pseudo-classes vs pseudo-éléments',
            hot: false,
            explanation: '<strong>Pseudo-classes</strong> (<code>:</code>) ciblent un état ou une position : <code>:hover</code>, <code>:nth-child()</code>, <code>:not()</code>. <strong>Pseudo-éléments</strong> (<code>::</code>) créent ou ciblent un sous-élément virtuel : <code>::before</code>, <code>::after</code>, <code>::placeholder</code>.',
            code: `a:hover          /* état souris */
li:nth-child(2)  /* 2e enfant */
p::first-line    /* première ligne */
.btn::after      /* élément virtuel */`
          }
        ]
      },
      {
        section: 'Box Model & Layout',
        items: [
          {
            id: 'css-boxmodel',
            icon: '📦',
            name: 'Box Model & box-sizing',
            hot: true,
            explanation: 'Chaque élément = <em>content → padding → border → margin</em>. Par défaut (<code>content-box</code>), <code>width</code> ne compte que le contenu. Avec <code>border-box</code>, width inclut padding + border. Presque tous les projets modernes appliquent <code>border-box</code> globalement.',
            code: `* { box-sizing: border-box; } /* bonne pratique */

/* content-box : width=200px + padding=20px + border=5px
   → largeur réelle = 250px ⚠️ */

/* border-box : width=200px tout compris ✅ */`,
            tip: '"Pourquoi mon élément de 200px déborde ?" → c\'est box-sizing: content-box.'
          },
          {
            id: 'css-positioning',
            icon: '📍',
            name: 'Positioning',
            hot: true,
            explanation: '<code>static</code> = flux normal. <code>relative</code> = décalé de sa position normale, reste dans le flux. <code>absolute</code> = sorti du flux, relatif à l\'ancêtre positionné le plus proche. <code>fixed</code> = relatif à la viewport. <code>sticky</code> = relative puis fixed au scroll.',
            code: `.parent { position: relative; }
.child  { position: absolute; top: 0; right: 0; }
/* Sans relative sur .parent,
   .child se positionne par rapport au body ⚠️ */`,
            tip: 'Le bug classique : oublier position: relative sur le parent d\'un enfant absolute.'
          },
          {
            id: 'css-flexbox',
            icon: '↔️',
            name: 'Flexbox',
            hot: true,
            explanation: 'Layout <em>1D</em> (une direction). <code>justify-content</code> gère l\'axe principal, <code>align-items</code> l\'axe secondaire. <code>flex: 1</code> = raccourci pour <code>grow:1 shrink:1 basis:0</code>.',
            code: `.container {
  display: flex;
  justify-content: space-between; /* axe → */
  align-items: center;            /* axe ↓ */
  gap: 16px;
  flex-wrap: wrap;
}`
          },
          {
            id: 'css-grid',
            icon: '⊞',
            name: 'Grid',
            hot: false,
            explanation: 'Layout <em>2D</em> (lignes + colonnes). <code>auto-fit</code> + <code>minmax</code> pour du responsive sans media queries. <code>auto-fill</code> garde les colonnes vides, <code>auto-fit</code> les collapse.',
            code: `.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}
.item { grid-column: span 2; }`
          },
          {
            id: 'css-stacking',
            icon: '🗂️',
            name: 'Stacking context & z-index',
            hot: false,
            explanation: 'Le z-index ne fonctionne qu\'au sein d\'un même <em>stacking context</em>. Un contexte est créé par <code>position</code> + <code>z-index</code>, <code>opacity < 1</code>, <code>transform</code>, <code>filter</code>. Un enfant ne peut jamais dépasser le contexte de son parent.',
            tip: 'z-index élevé qui ne passe pas → le parent a un stacking context qui le bloque.'
          }
        ]
      },
      {
        section: 'CSS Moderne',
        items: [
          {
            id: 'css-vars',
            icon: '🎨',
            name: 'Custom Properties (variables CSS)',
            hot: false,
            explanation: 'Déclarées avec <code>--nom: valeur</code>, utilisées avec <code>var(--nom)</code>. Contrairement aux variables SASS, elles sont <strong>dynamiques</strong> (modifiables en JS, en cascade). Portée = élément et ses descendants.',
            code: `:root { --color-primary: #a78bfa; }
.btn  { color: var(--color-primary, blue); /* fallback */ }`
          },
          {
            id: 'css-animations',
            icon: '🎬',
            name: 'Transitions & Animations',
            hot: false,
            explanation: '<strong>Transition</strong> = déclenchée par un changement d\'état (hover, classe). <strong>Animation</strong> = tourne automatiquement via <code>@keyframes</code>. Toujours préférer animer <code>transform</code> et <code>opacity</code> — composited, pas de reflow.',
            code: `.btn { transition: transform 0.2s ease; }
.btn:hover { transform: scale(1.05); }

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}`
          },
          {
            id: 'css-responsive',
            icon: '📱',
            name: 'Responsive Design',
            hot: false,
            explanation: 'Approche <em>mobile-first</em> : partir du petit écran, ajouter des <code>min-width</code> pour le grand. <code>clamp(min, idéal, max)</code> permet une taille fluide sans media query. <code>@container</code> permet de styler selon la taille du parent.',
            code: `/* Mobile first */
.text { font-size: 1rem; }
@media (min-width: 768px) { .text { font-size: 1.2rem; } }

/* Fluid sans media query */
.title { font-size: clamp(1rem, 4vw, 2rem); }`
          }
        ]
      }
    ],
    en: [
      {
        section: 'Selectors & Cascade',
        items: [
          {
            id: 'css-selectors',
            icon: '🎯',
            name: 'Selector types',
            hot: false,
            explanation: '5 main families: element (<code>p</code>), class (<code>.btn</code>), ID (<code>#nav</code>), attribute (<code>[type]</code>), and pseudo-classes/elements (<code>:hover</code>, <code>::before</code>). Combinators chain selectors to target specific relationships.',
            code: `div p       /* descendant (any depth) */
div > p     /* direct child */
h2 + p      /* adjacent sibling (right after) */
h2 ~ p      /* all following siblings */`
          },
          {
            id: 'css-specificity',
            icon: '⚖️',
            name: 'Specificity',
            hot: true,
            explanation: 'Score calculated as <em>(IDs, classes, elements)</em>. On conflict, the highest score wins. On a tie, the last declared rule wins. <code>!important</code> overrides everything — avoid it.',
            code: `#nav .item a    → (1,1,1)
.list li.active → (0,2,1)
style=""        → (1,0,0,0) — inline
/* On tie: last declaration wins */`,
            tip: 'They show you two selectors and ask which one wins — calculate (a,b,c) mentally.'
          },
          {
            id: 'css-pseudo',
            icon: '🎭',
            name: 'Pseudo-classes vs pseudo-elements',
            hot: false,
            explanation: '<strong>Pseudo-classes</strong> (<code>:</code>) target a state or position: <code>:hover</code>, <code>:nth-child()</code>, <code>:not()</code>. <strong>Pseudo-elements</strong> (<code>::</code>) create or target virtual sub-elements: <code>::before</code>, <code>::after</code>, <code>::placeholder</code>.',
            code: `a:hover          /* mouse state */
li:nth-child(2)  /* 2nd child */
p::first-line    /* first line of text */
.btn::after      /* virtual element */`
          }
        ]
      },
      {
        section: 'Box Model & Layout',
        items: [
          {
            id: 'css-boxmodel',
            icon: '📦',
            name: 'Box Model & box-sizing',
            hot: true,
            explanation: 'Every element = <em>content → padding → border → margin</em>. By default (<code>content-box</code>), <code>width</code> only counts the content. With <code>border-box</code>, width includes padding + border. Almost all modern projects apply <code>border-box</code> globally.',
            code: `* { box-sizing: border-box; } /* best practice */

/* content-box: width=200px + padding=20px + border=5px
   → actual width = 250px ⚠️ */

/* border-box: width=200px total ✅ */`,
            tip: '"Why does my 200px element overflow?" → it\'s box-sizing: content-box.'
          },
          {
            id: 'css-positioning',
            icon: '📍',
            name: 'Positioning',
            hot: true,
            explanation: '<code>static</code> = normal flow. <code>relative</code> = offset from its normal position, stays in flow. <code>absolute</code> = removed from flow, positioned relative to the nearest positioned ancestor. <code>fixed</code> = relative to viewport. <code>sticky</code> = relative then fixed on scroll.',
            code: `.parent { position: relative; }
.child  { position: absolute; top: 0; right: 0; }
/* Without relative on .parent,
   .child is positioned relative to body ⚠️ */`,
            tip: 'The classic bug: forgetting position: relative on the parent of an absolute child.'
          },
          {
            id: 'css-flexbox',
            icon: '↔️',
            name: 'Flexbox',
            hot: true,
            explanation: '<em>1D</em> layout (one direction). <code>justify-content</code> controls the main axis, <code>align-items</code> the cross axis. <code>flex: 1</code> = shorthand for <code>grow:1 shrink:1 basis:0</code>.',
            code: `.container {
  display: flex;
  justify-content: space-between; /* main axis → */
  align-items: center;            /* cross axis ↓ */
  gap: 16px;
  flex-wrap: wrap;
}`
          },
          {
            id: 'css-grid',
            icon: '⊞',
            name: 'Grid',
            hot: false,
            explanation: '<em>2D</em> layout (rows + columns). <code>auto-fit</code> + <code>minmax</code> for responsive layouts without media queries. <code>auto-fill</code> keeps empty columns, <code>auto-fit</code> collapses them.',
            code: `.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}
.item { grid-column: span 2; }`
          },
          {
            id: 'css-stacking',
            icon: '🗂️',
            name: 'Stacking context & z-index',
            hot: false,
            explanation: 'z-index only works within the same <em>stacking context</em>. A context is created by <code>position</code> + <code>z-index</code>, <code>opacity < 1</code>, <code>transform</code>, <code>filter</code>. A child can never exceed its parent\'s stacking context.',
            tip: 'High z-index not working → the parent has a stacking context blocking it.'
          }
        ]
      },
      {
        section: 'Modern CSS',
        items: [
          {
            id: 'css-vars',
            icon: '🎨',
            name: 'Custom Properties (CSS variables)',
            hot: false,
            explanation: 'Declared with <code>--name: value</code>, used with <code>var(--name)</code>. Unlike SASS variables, they are <strong>dynamic</strong> (can be changed by JS, cascade). Scope = element and its descendants.',
            code: `:root { --color-primary: #a78bfa; }
.btn  { color: var(--color-primary, blue); /* fallback */ }`
          },
          {
            id: 'css-animations',
            icon: '🎬',
            name: 'Transitions & Animations',
            hot: false,
            explanation: '<strong>Transition</strong> = triggered by a state change (hover, class toggle). <strong>Animation</strong> = runs automatically via <code>@keyframes</code>. Always prefer animating <code>transform</code> and <code>opacity</code> — composited, no reflow.',
            code: `.btn { transition: transform 0.2s ease; }
.btn:hover { transform: scale(1.05); }

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}`
          },
          {
            id: 'css-responsive',
            icon: '📱',
            name: 'Responsive Design',
            hot: false,
            explanation: '<em>Mobile-first</em> approach: start from small screen, add <code>min-width</code> breakpoints for larger. <code>clamp(min, ideal, max)</code> gives fluid sizing without media queries. <code>@container</code> lets you style based on parent size.',
            code: `/* Mobile first */
.text { font-size: 1rem; }
@media (min-width: 768px) { .text { font-size: 1.2rem; } }

/* Fluid without media query */
.title { font-size: clamp(1rem, 4vw, 2rem); }`
          }
        ]
      }
    ]
  },
  js: {
    fr: [
      {
        section: 'Fondamentaux du langage',
        items: [
          {
            id: 'js-hoisting',
            icon: '🏗️',
            name: 'Hoisting',
            hot: true,
            explanation: 'JS remonte les déclarations avant d\'exécuter le code. <code>var</code> est hoistée ET initialisée à <code>undefined</code>. <code>let</code>/<code>const</code> sont hoistées mais <strong>pas initialisées</strong> (TDZ). Les déclarations de fonctions sont entièrement hoistées — pas les expressions.',
            code: `console.log(x);  // undefined — var hoistée
var x = 5;

console.log(y);  // ReferenceError — TDZ ❌
let y = 5;

greet();         // ✅ fonctionne
function greet() {}

sayHi();         // ❌ TypeError
var sayHi = function() {};`,
            tip: 'var → undefined, let/const → ReferenceError (TDZ), function declaration → accessible partout.'
          },
          {
            id: 'js-scope',
            icon: '🔒',
            name: 'Scope & Closures',
            hot: true,
            explanation: 'JS utilise le <em>scope lexical</em> : une fonction voit le scope où elle est <strong>définie</strong>, pas où elle est appelée. Une <strong>closure</strong> = une fonction qui retient l\'accès aux variables de son scope parent même après que celui-ci a terminé.',
            code: `function makeCounter() {
  let count = 0;
  return () => ++count; // closure sur count
}
const inc = makeCounter();
inc(); // 1  inc(); // 2

// Piège var en boucle → utiliser let
for (let i = 0; i < 3; i++)
  setTimeout(() => console.log(i), 0);
// 0, 1, 2  (avec var : 3, 3, 3)`,
            tip: 'Les closures sont partout : event listeners, debounce, modules...'
          },
          {
            id: 'js-this',
            icon: '🔑',
            name: 'this keyword',
            hot: true,
            explanation: '<code>this</code> dépend de <strong>comment la fonction est appelée</strong>. Fonction classique : <code>this</code> = l\'appelant. Arrow function : <code>this</code> = hérité du scope parent. <code>bind/call/apply</code> permettent de forcer <code>this</code>.',
            code: `const obj = {
  name: 'Alice',
  greet() { console.log(this.name); },  // 'Alice'
  arrow: () => console.log(this.name)   // undefined ⚠️
};
const fn = obj.greet;
fn();             // undefined — this perdu
fn.bind(obj)();   // 'Alice' ✅`,
            tip: 'Extraire une méthode dans une variable → this est perdu. Corriger avec bind ou arrow.'
          },
          {
            id: 'js-proto',
            icon: '🧬',
            name: 'Prototypes & héritage',
            hot: false,
            explanation: 'Chaque objet a un <code>[[Prototype]]</code> qui pointe vers un autre objet. Si une propriété n\'est pas trouvée, JS remonte la chaîne. Les classes ES6 sont du <strong>sucre syntaxique</strong> par-dessus les prototypes.',
            code: `class Animal {
  speak() { return '...'; }
}
class Dog extends Animal {
  speak() { return 'Woof'; }
}
// Dog.prototype → Animal.prototype → Object.prototype → null`
          },
          {
            id: 'js-types',
            icon: '🔢',
            name: 'Types & coercition',
            hot: false,
            explanation: '7 primitives : <code>string, number, boolean, null, undefined, symbol, bigint</code>. <code>==</code> fait de la coercition (éviter), <code>===</code> compare sans conversion. Valeurs falsy : <code>0, \'\', null, undefined, NaN, false</code>.',
            code: `typeof null       // 'object' — bug historique
NaN === NaN       // false → utiliser Number.isNaN()
0 == ''          // true  (coercition)
0 === ''         // false (strict)`
          }
        ]
      },
      {
        section: 'Async & Event Loop',
        items: [
          {
            id: 'js-eventloop',
            icon: '⏱️',
            name: 'Event Loop',
            hot: true,
            explanation: 'JS est single-threaded. Ordre d\'exécution : <em>code sync → microtasks (Promises) → macrotasks (setTimeout)</em>. Les microtasks s\'exécutent entièrement avant la prochaine macrotask.',
            code: `console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');
// → 1, 4, 3, 2`,
            tip: 'Ce snippet exact revient dans presque tous les entretiens JS.'
          },
          {
            id: 'js-promises',
            icon: '🤝',
            name: 'Promises',
            hot: true,
            explanation: 'États : <em>pending → fulfilled / rejected</em>. Les 4 combinateurs à connaître par cœur. <code>all</code> échoue vite, <code>allSettled</code> attend tout, <code>race</code> prend le premier, <code>any</code> prend le premier succès.',
            code: `Promise.all([a, b])        // échoue si l'un échoue
Promise.allSettled([a, b]) // attend tous
Promise.race([a, b])       // premier qui termine
Promise.any([a, b])        // premier succès`
          },
          {
            id: 'js-async',
            icon: '⚡',
            name: 'async / await',
            hot: false,
            explanation: 'Une fonction <code>async</code> retourne toujours une Promise. <code>await</code> suspend la <strong>fonction courante seulement</strong>. Pour des opérations indépendantes, les lancer en parallèle avec <code>Promise.all</code>.',
            code: `// ❌ Séquentiel (lent)
const a = await fetchA();
const b = await fetchB();

// ✅ Parallèle (rapide)
const [a, b] = await Promise.all([fetchA(), fetchB()]);`
          }
        ]
      },
      {
        section: 'Patterns & ES6+',
        items: [
          {
            id: 'js-destructuring',
            icon: '📦',
            name: 'Destructuring',
            hot: false,
            explanation: 'Permet d\'extraire des valeurs d\'objets ou tableaux en une ligne. On peut renommer, définir des défauts, et destructurer des structures imbriquées.',
            code: `const { name: fullName = 'Anon', age } = user;
const [first, , third] = arr; // skip 2e
const { a: { b } } = obj;    // imbriqué`
          },
          {
            id: 'js-spread',
            icon: '🌊',
            name: 'Spread & Rest',
            hot: false,
            explanation: '<em>Spread</em> <code>...</code> étale un itérable. <em>Rest</em> collecte le reste dans un tableau. Le spread fait une copie <strong>superficielle</strong> — les objets imbriqués sont partagés par référence.',
            code: `const copy   = { ...obj };               // shallow clone
const merged = { ...defaults, ...opts }; // dernier gagne
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}`
          },
          {
            id: 'js-immutability',
            icon: '🧊',
            name: 'Immutabilité',
            hot: false,
            explanation: '<code>const</code> rend le <strong>binding</strong> immuable, pas la valeur. <code>Object.freeze()</code> gèle superficiellement. En React/Vue, ne jamais muter l\'état directement — toujours créer une nouvelle référence.',
            code: `const arr = [1, 2, 3];
// ❌ arr.push(4)           → mutation directe
// ✅
const newArr = [...arr, 4]; // nouvelle référence`
          },
          {
            id: 'js-debounce',
            icon: '🎚️',
            name: 'Debounce & Throttle',
            hot: true,
            explanation: '<em>Debounce</em> : attend N ms après le <strong>dernier</strong> appel → pour la recherche. <em>Throttle</em> : exécute au max 1 fois par N ms → pour scroll/resize.',
            code: `function debounce(fn, delay) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
}
function throttle(fn, limit) {
  let last = 0;
  return (...args) => {
    if (Date.now() - last >= limit) {
      last = Date.now(); fn(...args);
    }
  };
}`,
            tip: 'On te demande souvent d\'implémenter l\'un ou l\'autre from scratch.'
          },
          {
            id: 'js-mapset',
            icon: '🗺️',
            name: 'Map & Set',
            hot: false,
            explanation: '<code>Map</code> = clé-valeur avec n\'importe quel type de clé, préserve l\'ordre, a <code>.size</code>. <code>Set</code> = valeurs uniques, lookup O(1). Meilleurs qu\'un objet plain pour les clés dynamiques.',
            code: `const map = new Map();
map.set(obj, 'val'); // clé = objet ✅

const set = new Set([1, 2, 2, 3]); // → {1, 2, 3}
const dedup = [...new Set(arr)];    // supprimer doublons`
          }
        ]
      }
    ],
    en: [
      {
        section: 'Language Fundamentals',
        items: [
          {
            id: 'js-hoisting',
            icon: '🏗️',
            name: 'Hoisting',
            hot: true,
            explanation: 'JS moves declarations to the top of their scope before executing. <code>var</code> is hoisted AND initialized to <code>undefined</code>. <code>let</code>/<code>const</code> are hoisted but <strong>not initialized</strong> (TDZ). Function declarations are fully hoisted — expressions are not.',
            code: `console.log(x);  // undefined — var hoisted
var x = 5;

console.log(y);  // ReferenceError — TDZ ❌
let y = 5;

greet();         // ✅ works
function greet() {}

sayHi();         // ❌ TypeError
var sayHi = function() {};`,
            tip: 'var → undefined, let/const → ReferenceError (TDZ), function declaration → callable anywhere.'
          },
          {
            id: 'js-scope',
            icon: '🔒',
            name: 'Scope & Closures',
            hot: true,
            explanation: 'JS uses <em>lexical scope</em>: a function sees the scope where it was <strong>defined</strong>, not where it\'s called. A <strong>closure</strong> = a function that retains access to its parent scope\'s variables even after the parent has returned.',
            code: `function makeCounter() {
  let count = 0;
  return () => ++count; // closure over count
}
const inc = makeCounter();
inc(); // 1  inc(); // 2

// var trap in loop → use let
for (let i = 0; i < 3; i++)
  setTimeout(() => console.log(i), 0);
// 0, 1, 2  (with var: 3, 3, 3)`,
            tip: 'Closures are everywhere: event listeners, debounce, modules...'
          },
          {
            id: 'js-this',
            icon: '🔑',
            name: 'this keyword',
            hot: true,
            explanation: '<code>this</code> depends on <strong>how the function is called</strong>. Regular function: <code>this</code> = the caller. Arrow function: <code>this</code> = inherited from the parent scope. <code>bind/call/apply</code> let you force <code>this</code>.',
            code: `const obj = {
  name: 'Alice',
  greet() { console.log(this.name); },  // 'Alice'
  arrow: () => console.log(this.name)   // undefined ⚠️
};
const fn = obj.greet;
fn();             // undefined — this lost
fn.bind(obj)();   // 'Alice' ✅`,
            tip: 'Extracting a method into a variable → this is lost. Fix with bind or arrow function.'
          },
          {
            id: 'js-proto',
            icon: '🧬',
            name: 'Prototypes & inheritance',
            hot: false,
            explanation: 'Every object has a <code>[[Prototype]]</code> pointing to another object. If a property isn\'t found, JS walks up the chain. ES6 classes are <strong>syntactic sugar</strong> over prototypes.',
            code: `class Animal {
  speak() { return '...'; }
}
class Dog extends Animal {
  speak() { return 'Woof'; }
}
// Dog.prototype → Animal.prototype → Object.prototype → null`
          },
          {
            id: 'js-types',
            icon: '🔢',
            name: 'Types & coercion',
            hot: false,
            explanation: '7 primitives: <code>string, number, boolean, null, undefined, symbol, bigint</code>. <code>==</code> coerces (avoid it), <code>===</code> compares without conversion. Falsy values: <code>0, \'\', null, undefined, NaN, false</code>.',
            code: `typeof null       // 'object' — historical bug
NaN === NaN       // false → use Number.isNaN()
0 == ''          // true  (coercion)
0 === ''         // false (strict)`
          }
        ]
      },
      {
        section: 'Async & Event Loop',
        items: [
          {
            id: 'js-eventloop',
            icon: '⏱️',
            name: 'Event Loop',
            hot: true,
            explanation: 'JS is single-threaded. Execution order: <em>sync code → microtasks (Promises) → macrotasks (setTimeout)</em>. Microtasks run completely before the next macrotask.',
            code: `console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');
// → 1, 4, 3, 2`,
            tip: 'This exact snippet appears in almost every JS interview.'
          },
          {
            id: 'js-promises',
            icon: '🤝',
            name: 'Promises',
            hot: true,
            explanation: 'States: <em>pending → fulfilled / rejected</em>. 4 combinators to know by heart. <code>all</code> fails fast, <code>allSettled</code> waits for all, <code>race</code> takes the first, <code>any</code> takes the first success.',
            code: `Promise.all([a, b])        // fails if any fails
Promise.allSettled([a, b]) // waits for all
Promise.race([a, b])       // first to settle
Promise.any([a, b])        // first to fulfill`
          },
          {
            id: 'js-async',
            icon: '⚡',
            name: 'async / await',
            hot: false,
            explanation: 'An <code>async</code> function always returns a Promise. <code>await</code> only suspends the <strong>current function</strong>, not the whole thread. For independent operations, run them in parallel with <code>Promise.all</code>.',
            code: `// ❌ Sequential (slow)
const a = await fetchA();
const b = await fetchB();

// ✅ Parallel (fast)
const [a, b] = await Promise.all([fetchA(), fetchB()]);`
          }
        ]
      },
      {
        section: 'Patterns & ES6+',
        items: [
          {
            id: 'js-destructuring',
            icon: '📦',
            name: 'Destructuring',
            hot: false,
            explanation: 'Extract values from objects or arrays in one line. You can rename, set defaults, and destructure nested structures.',
            code: `const { name: fullName = 'Anon', age } = user;
const [first, , third] = arr; // skip 2nd
const { a: { b } } = obj;    // nested`
          },
          {
            id: 'js-spread',
            icon: '🌊',
            name: 'Spread & Rest',
            hot: false,
            explanation: '<em>Spread</em> <code>...</code> expands an iterable. <em>Rest</em> collects the rest into an array. Spread does a <strong>shallow copy</strong> — nested objects are shared by reference.',
            code: `const copy   = { ...obj };               // shallow clone
const merged = { ...defaults, ...opts }; // last wins
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}`
          },
          {
            id: 'js-immutability',
            icon: '🧊',
            name: 'Immutability',
            hot: false,
            explanation: '<code>const</code> makes the <strong>binding</strong> immutable, not the value. <code>Object.freeze()</code> does a shallow freeze. In React/Vue, never mutate state directly — always create a new reference.',
            code: `const arr = [1, 2, 3];
// ❌ arr.push(4)           → direct mutation
// ✅
const newArr = [...arr, 4]; // new reference`
          },
          {
            id: 'js-debounce',
            icon: '🎚️',
            name: 'Debounce & Throttle',
            hot: true,
            explanation: '<em>Debounce</em>: waits N ms after the <strong>last</strong> call → for search inputs. <em>Throttle</em>: runs at most once per N ms → for scroll/resize.',
            code: `function debounce(fn, delay) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
}
function throttle(fn, limit) {
  let last = 0;
  return (...args) => {
    if (Date.now() - last >= limit) {
      last = Date.now(); fn(...args);
    }
  };
}`,
            tip: 'You\'re often asked to implement either one from scratch.'
          },
          {
            id: 'js-mapset',
            icon: '🗺️',
            name: 'Map & Set',
            hot: false,
            explanation: '<code>Map</code> = key-value with any type as key, preserves order, has <code>.size</code>. <code>Set</code> = unique values, O(1) lookup. Better than plain objects for dynamic keys.',
            code: `const map = new Map();
map.set(obj, 'val'); // key = object ✅

const set = new Set([1, 2, 2, 3]); // → {1, 2, 3}
const dedup = [...new Set(arr)];    // remove duplicates`
          }
        ]
      }
    ]
  },
  vue: {
    fr: [
      {
        section: 'Réactivité',
        items: [
          {
            id: 'vue-ref',
            icon: '⚛️',
            name: 'ref vs reactive',
            hot: true,
            explanation: '<code>ref()</code> fonctionne pour tout, accès via <code>.value</code> en JS (auto-unwrap dans le template). <code>reactive()</code> uniquement pour les objets, pas de <code>.value</code>, mais perd la réactivité si destructuré. Préférer <code>ref</code> en général.',
            code: `const count = ref(0); count.value++;

const state = reactive({ name: 'Alice' });
const { name } = state;         // ❌ réactivité perdue
const { name } = toRefs(state); // ✅`,
            tip: '"Pourquoi ma variable reactive n\'est plus réactive après destructuration ?" → toRefs.'
          },
          {
            id: 'vue-computed',
            icon: '🧮',
            name: 'computed vs watch vs watchEffect',
            hot: true,
            explanation: '<code>computed</code> = valeur dérivée, mise en cache. <code>watch</code> = effet secondaire sur une source précise, lazy. <code>watchEffect</code> = s\'exécute immédiatement, détecte ses dépendances automatiquement.',
            code: `const full = computed(() => \`\${first.value} \${last.value}\`)

watch(userId, async (id) => {
  data.value = await fetch(id);
})

watchEffect(() => console.log(count.value)) // run immédiat`,
            tip: 'computed = valeur dérivée. watch = effet secondaire (appel API, etc.).'
          },
          {
            id: 'vue-reactivity',
            icon: '🔧',
            name: 'Comment fonctionne la réactivité Vue 3',
            hot: false,
            explanation: 'Vue 3 utilise <code>Proxy</code> pour intercepter les accès (get) et mutations (set). Quand une donnée réactive est lue dans un effet, elle s\'y abonne. Quand elle mute, tous les effets se relancent. Vue 2 utilisait <code>Object.defineProperty</code> — ne détectait pas les nouveaux ajouts.'
          }
        ]
      },
      {
        section: 'Composants',
        items: [
          {
            id: 'vue-props',
            icon: '📡',
            name: 'Props & Emits',
            hot: true,
            explanation: 'Les données descendent via les <em>props</em>, remontent via les <em>emits</em>. Ne jamais muter une prop directement. <code>v-model</code> sur un composant = <code>:modelValue</code> + <code>@update:modelValue</code>.',
            code: `// Enfant
const props = defineProps({ modelValue: String })
const emit  = defineEmits(['update:modelValue'])

// v-model sur composant = sucre syntaxique :
// :modelValue="val" + @update:modelValue="val = $event"`
          },
          {
            id: 'vue-slots',
            icon: '🧩',
            name: 'Slots',
            hot: false,
            explanation: 'Les slots permettent au parent d\'injecter du contenu dans un composant enfant. <strong>Slots nommés</strong> pour plusieurs zones. <strong>Scoped slots</strong> pour exposer des données de l\'enfant vers le parent.',
            code: `<!-- Enfant -->
<slot name="header" :data="items" />

<!-- Parent -->
<template #header="{ data }">
  <h1>{{ data }}</h1>
</template>`
          },
          {
            id: 'vue-provide',
            icon: '💉',
            name: 'provide / inject',
            hot: false,
            explanation: 'Évite le prop drilling — un ancêtre fournit des données à n\'importe quel descendant. Pas réactif par défaut, envelopper dans <code>ref</code> ou <code>computed</code> pour la réactivité.',
            code: `// Ancêtre
provide('theme', ref('dark'))

// N'importe quel descendant
const theme = inject('theme')`
          },
          {
            id: 'vue-lifecycle',
            icon: '🔄',
            name: 'Lifecycle hooks',
            hot: true,
            explanation: '<code>onMounted</code> = DOM prêt, faire les appels API ici. <code>onUnmounted</code> = nettoyage (timers, listeners). <code>onUpdated</code> = après chaque re-render. Le <code>setup()</code> lui-même remplace <code>created</code>.',
            code: `onMounted(async () => {
  data.value = await fetchData();
})
onUnmounted(() => {
  clearInterval(timer);
  window.removeEventListener('resize', fn);
})`
          }
        ]
      },
      {
        section: 'Template & Directives',
        items: [
          {
            id: 'vue-directives',
            icon: '📋',
            name: 'Directives clés',
            hot: true,
            explanation: '<code>v-if</code> retire du DOM, <code>v-show</code> utilise <code>display:none</code>. <code>v-for</code> toujours avec <code>:key</code>. <code>v-bind</code>/<code>:</code> pour les attributs dynamiques. <code>v-on</code>/<code>@</code> pour les événements.',
            code: `<div v-if="show">   <!-- retiré du DOM si false -->
<div v-show="show"> <!-- display:none si false -->
<li v-for="item in list" :key="item.id">
<button @click="handleClick">`
          },
          {
            id: 'vue-key',
            icon: '🗝️',
            name: ':key — pourquoi c\'est important',
            hot: false,
            explanation: 'La <code>key</code> aide l\'algorithme de diff de Vue à identifier les nœuds modifiés. Sans clé stable, Vue réutilise les éléments en place → bugs visuels. Utiliser un ID unique, pas l\'index si la liste peut être réordonnée.',
            tip: 'Changer la key d\'un composant force son démontage/remontage complet — utile pour forcer un reset.'
          }
        ]
      },
      {
        section: 'Écosystème',
        items: [
          {
            id: 'vue-pinia',
            icon: '🗂️',
            name: 'Pinia',
            hot: true,
            explanation: 'Remplace Vuex. Un store = state + getters (computed) + actions (méthodes + async). Pas de mutations obligatoires. <code>storeToRefs()</code> pour destructurer sans perdre la réactivité.',
            code: `export const useStore = defineStore('main', () => {
  const user = ref(null);
  const isAuth = computed(() => !!user.value);
  async function login(creds) {
    user.value = await auth(creds);
  }
  return { user, isAuth, login };
});

const { user, isAuth } = storeToRefs(useStore()); // ✅`
          },
          {
            id: 'vue-router',
            icon: '🛣️',
            name: 'Vue Router',
            hot: false,
            explanation: '<code>useRoute()</code> pour accéder aux params/query. <code>useRouter()</code> pour naviguer programmatiquement. Guards de navigation pour l\'auth. Lazy loading des pages pour optimiser le bundle.',
            code: `const route  = useRoute();    // route.params.id
const router = useRouter();  router.push('/home');

// Lazy loading
{ path: '/about', component: () => import('./About.vue') }`
          },
          {
            id: 'vue-composables',
            icon: '🪝',
            name: 'Composables',
            hot: false,
            explanation: 'Fonctions préfixées <code>use</code> qui encapsulent de la logique réactive réutilisable. Remplacent les mixins Vue 2 sans leurs problèmes (conflits de noms, origine des données floue).',
            code: `// useFetch.js
export function useFetch(url) {
  const data  = ref(null);
  const error = ref(null);
  onMounted(async () => {
    try { data.value = await (await fetch(url)).json(); }
    catch(e) { error.value = e; }
  });
  return { data, error };
}`
          }
        ]
      }
    ],
    en: [
      {
        section: 'Reactivity',
        items: [
          {
            id: 'vue-ref',
            icon: '⚛️',
            name: 'ref vs reactive',
            hot: true,
            explanation: '<code>ref()</code> works for everything, accessed via <code>.value</code> in JS (auto-unwrapped in templates). <code>reactive()</code> only for objects, no <code>.value</code>, but loses reactivity if destructured. Generally prefer <code>ref</code>.',
            code: `const count = ref(0); count.value++;

const state = reactive({ name: 'Alice' });
const { name } = state;         // ❌ reactivity lost
const { name } = toRefs(state); // ✅`,
            tip: '"Why is my reactive variable no longer reactive after destructuring?" → toRefs.'
          },
          {
            id: 'vue-computed',
            icon: '🧮',
            name: 'computed vs watch vs watchEffect',
            hot: true,
            explanation: '<code>computed</code> = derived value, cached. <code>watch</code> = side effect on a specific source, lazy. <code>watchEffect</code> = runs immediately, auto-tracks its dependencies.',
            code: `const full = computed(() => \`\${first.value} \${last.value}\`)

watch(userId, async (id) => {
  data.value = await fetch(id);
})

watchEffect(() => console.log(count.value)) // runs immediately`,
            tip: 'computed = derived value. watch = side effect (API call, etc.).'
          },
          {
            id: 'vue-reactivity',
            icon: '🔧',
            name: 'How Vue 3 reactivity works',
            hot: false,
            explanation: 'Vue 3 uses <code>Proxy</code> to intercept reads (get) and writes (set). When reactive data is read inside an effect, it subscribes. When it mutates, all subscribed effects re-run. Vue 2 used <code>Object.defineProperty</code> — couldn\'t detect new property additions.'
          }
        ]
      },
      {
        section: 'Components',
        items: [
          {
            id: 'vue-props',
            icon: '📡',
            name: 'Props & Emits',
            hot: true,
            explanation: 'Data flows down via <em>props</em>, up via <em>emits</em>. Never mutate a prop directly. <code>v-model</code> on a component = <code>:modelValue</code> + <code>@update:modelValue</code>.',
            code: `// Child component
const props = defineProps({ modelValue: String })
const emit  = defineEmits(['update:modelValue'])

// v-model on a component is syntactic sugar for:
// :modelValue="val" + @update:modelValue="val = $event"`
          },
          {
            id: 'vue-slots',
            icon: '🧩',
            name: 'Slots',
            hot: false,
            explanation: 'Slots let the parent inject content into a child component. <strong>Named slots</strong> for multiple zones. <strong>Scoped slots</strong> expose child data to the parent.',
            code: `<!-- Child -->
<slot name="header" :data="items" />

<!-- Parent -->
<template #header="{ data }">
  <h1>{{ data }}</h1>
</template>`
          },
          {
            id: 'vue-provide',
            icon: '💉',
            name: 'provide / inject',
            hot: false,
            explanation: 'Avoids prop drilling — an ancestor provides data to any descendant. Not reactive by default; wrap in <code>ref</code> or <code>computed</code> for reactivity.',
            code: `// Ancestor
provide('theme', ref('dark'))

// Any descendant
const theme = inject('theme')`
          },
          {
            id: 'vue-lifecycle',
            icon: '🔄',
            name: 'Lifecycle hooks',
            hot: true,
            explanation: '<code>onMounted</code> = DOM ready, make API calls here. <code>onUnmounted</code> = cleanup (timers, listeners). <code>onUpdated</code> = after every re-render. <code>setup()</code> itself replaces <code>created</code>.',
            code: `onMounted(async () => {
  data.value = await fetchData();
})
onUnmounted(() => {
  clearInterval(timer);
  window.removeEventListener('resize', fn);
})`
          }
        ]
      },
      {
        section: 'Template & Directives',
        items: [
          {
            id: 'vue-directives',
            icon: '📋',
            name: 'Key directives',
            hot: true,
            explanation: '<code>v-if</code> removes from DOM, <code>v-show</code> uses <code>display:none</code>. <code>v-for</code> always with <code>:key</code>. <code>v-bind</code>/<code>:</code> for dynamic attributes. <code>v-on</code>/<code>@</code> for events.',
            code: `<div v-if="show">   <!-- removed from DOM if false -->
<div v-show="show"> <!-- display:none if false -->
<li v-for="item in list" :key="item.id">
<button @click="handleClick">`
          },
          {
            id: 'vue-key',
            icon: '🗝️',
            name: ':key — why it matters',
            hot: false,
            explanation: '<code>key</code> helps Vue\'s diffing algorithm identify changed nodes. Without a stable key, Vue reuses elements in place → visual bugs. Use a unique ID, not the index if the list can be reordered.',
            tip: 'Changing a component\'s key forces a full unmount/remount — useful to force a reset.'
          }
        ]
      },
      {
        section: 'Ecosystem',
        items: [
          {
            id: 'vue-pinia',
            icon: '🗂️',
            name: 'Pinia',
            hot: true,
            explanation: 'Replaces Vuex. A store = state + getters (computed) + actions (methods + async). No mandatory mutations. <code>storeToRefs()</code> to destructure without losing reactivity.',
            code: `export const useStore = defineStore('main', () => {
  const user = ref(null);
  const isAuth = computed(() => !!user.value);
  async function login(creds) {
    user.value = await auth(creds);
  }
  return { user, isAuth, login };
});

const { user, isAuth } = storeToRefs(useStore()); // ✅`
          },
          {
            id: 'vue-router',
            icon: '🛣️',
            name: 'Vue Router',
            hot: false,
            explanation: '<code>useRoute()</code> to access params/query. <code>useRouter()</code> for programmatic navigation. Navigation guards for auth. Lazy loading routes to optimize bundle size.',
            code: `const route  = useRoute();    // route.params.id
const router = useRouter();  router.push('/home');

// Lazy loading
{ path: '/about', component: () => import('./About.vue') }`
          },
          {
            id: 'vue-composables',
            icon: '🪝',
            name: 'Composables',
            hot: false,
            explanation: '<code>use</code>-prefixed functions that encapsulate reusable reactive logic. They replace Vue 2 mixins without their issues (name conflicts, unclear data origin).',
            code: `// useFetch.js
export function useFetch(url) {
  const data  = ref(null);
  const error = ref(null);
  onMounted(async () => {
    try { data.value = await (await fetch(url)).json(); }
    catch(e) { error.value = e; }
  });
  return { data, error };
}`
          }
        ]
      }
    ]
  }
}
