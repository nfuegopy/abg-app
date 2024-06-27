<template>
    <div>
      <h2>Referenciales</h2>
      <router-link to="cliente">Cliente</router-link>
      <router-link to="juzgado">Juzgado</router-link>
      <router-link to="secretaria">Secretaria</router-link>
      <router-link to="demandado">Demandado</router-link>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ReferencialesView',
  };
  </script>
  
  <style scoped>
  </style>
  