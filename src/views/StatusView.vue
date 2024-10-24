<template>
    <div class="mt-9 mb-32 flex justify-center mx-5">
      <div class="prose">
        <h1>系統資訊</h1>
        <p>
            本組織系統為自研為主，部分服務採用開源軟體。<br>
            基於微服務架構建置，具有高可用性、高擴展性、高穩定性。<br>
            相關原始碼已於
            <a href="https://github.com/web-tech-tw" class="text-indigo-600 hover:text-indigo-500">
                GitHub
            </a>
            上公開發布，歡迎參與開發。
        </p>
        <h2>狀態</h2>
        <p>
            本組織線上服務基礎建設為委外建置，其服務狀態請前往：<br>
            <a href="https://status.starinc.xyz" class="text-indigo-600 hover:text-indigo-500">
                https://status.starinc.xyz
            </a>
            查看。
        </p>
        <h2>聯絡方式</h2>
        <p>
            煩請請前往：<br>
            <router-link to="/contact" class="text-indigo-600 hover:text-indigo-500">
                聯絡我們
            </router-link>
            頁面以獲取最新資訊。
        </p>
      </div>
    </div>
</template>

<script>
export default {
    name: 'AboutView'
}
</script>
