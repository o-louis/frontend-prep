<template>
  <svg v-if="code === FR" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" :width="width" :height="height">
    <rect width="300" height="600" fill="#002395"/>
    <rect x="300" width="300" height="600" fill="#fff"/>
    <rect x="600" width="300" height="600" fill="#ED2939"/>
  </svg>
  <svg v-else-if="code === EN" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" :width="width" :height="height">
    <clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
    <clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
    <g clip-path="url(#s)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>
      <path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t)" stroke="#C8102E" stroke-width="4"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/>
    </g>
  </svg>
</template>

<script setup>
import { LANG_FR, LANG_EN } from '../composables/useLang.js'

const FR = LANG_FR
const EN = LANG_EN

defineProps({
  code: { type: String, required: true },
  width: { type: Number, default: 20 },
  height: { type: Number, default: 14 }
})
</script>
