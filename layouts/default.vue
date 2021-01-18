<template>
  <div class="GlobalWrapper">
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: sans-serif;
  font-size: 16px;
  word-spacing: 0.02em;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  letter-spacing: 0.02em;
  color: #333333;
}
.GlobalWrapper {
  max-width: 800px;
  margin: 32px auto;
  padding: 0 16px;
}
a{
  color: #4ba22c;
}
  code{
    font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    background-color: #eee;
    padding: 4px 8px;
    border-radius: 4px;
    color: #E88060;
    font-weight: bold;
    font-size: 0.9em;
  }
</style>
