<template>
  <div class="container">
    <div>
      <h1 class="title">Nuxt Composition APIで作る完全静的サイト</h1>
      <p class="lead">いくつかの非同期処理の静的ジェネレート後の挙動の違い</p>
      <section>
        <h2 class="methodName">UseAsync</h2>
        <p class="description">
          <span class="feature">特徴</span
          >：アクセス時に非同期処理が呼ばれる。従来のasyncDataに近いメソッド。
        </p>
        <p>
          <nuxt-link to="/kilimanjaro"
            >UseAsyncのデモ (Mount Kilimanjaro)</nuxt-link
          >
        </p>
      </section>
      <section>
        <h2 class="methodName">UseFetch</h2>
        <p class="description">
          <span class="feature">特徴</span
          >：ジェネレート時に非同期処理の結果をpayload.jsとして保存し、生成配信後はAPIが呼ばれない。NuxtのFetchメソッドのComposition
          API版。<code>$fetch</code>、<code>$fetchState</code>が利用できる
        </p>
        <p>
          <nuxt-link to="/denali">UseFetchのデモ (Denali)</nuxt-link>
        </p>
      </section>
      <section>
        <h2 class="methodName">UseStatic</h2>
        <p class="description">
          <span class="feature">特徴</span
          >：ジェネレート時に非同期処理の結果をJSONデータとして保存し、生成配信後はAPIが呼ばれない。SSR時でも初回アクセス時に内容が保存されるので2回目以降のアクセスが高速。
        </p>
        <p>
          <nuxt-link to="/everest">UseStaticのデモ (Mount Everest)</nuxt-link>
        </p>
      </section>
      <section>
        <h2 class="methodName">比較：AsyncData</h2>
        <nuxt-link to="/aconcagua">AsyncDataのデモ (Aconcagua)</nuxt-link>
      </section>
      <section>
        <h2 class="methodName">比較：Fetch</h2>
        <nuxt-link to="/kosciuszko">Fetchのデモ (Kosciuszko)</nuxt-link>
      </section>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.title {
  font-size: 24px;
  margin-bottom: 8px;
  line-height: 1.3;
  color: #445273;
}
.lead {
  margin-bottom: 24px;
}
.methodName {
  font-size: 20px;
  margin-bottom: 4px;
  color: #445273;
}
.description {
  margin-bottom: 12px;
}
.feature {
  font-weight: bold;
}

section {
  margin-bottom: 32px;
}
</style>
