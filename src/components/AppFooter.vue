<template>
  <footer class="mt-16 pb-16 text-sm leading-6">
    <div class="max-w-7xl mx-auto mt-11 divide-y divide-gray-200 px-4 sm:px-6 md:px-8">
      <div class="flex">
        <div class="flex-none w-1/2 space-y-10 sm:space-y-8 lg:flex lg:space-y-0">
          <div class="lg:flex-none lg:w-1/2">
            <h2 class="font-semibold text-gray-900">
              組織資訊
            </h2>
            <ul class="mt-3 space-y-2">
              <li>
                <router-link
                  class="hover:text-gray-900"
                  to="/about"
                >
                  關於我們
                </router-link>
              </li>
              <li>
                <router-link
                  class="hover:text-gray-900"
                  to="/contact"
                >
                  聯絡我們
                </router-link>
              </li>
              <li>
                <router-link
                  class="hover:text-gray-900"
                  to="/status"
                >
                  系統資訊
                </router-link>
              </li>
            </ul>
          </div>
          <div class="lg:flex-none lg:w-1/2">
            <h2 class="font-semibold text-gray-900">
              產品列表
            </h2>
            <ul class="mt-3 space-y-2">
              <li>
                <a
                  class="hover:text-gray-900"
                  href="https://github.com/web-tech-tw/swollen"
                >Swollen</a>
              </li>
              <li>
                <a
                  class="hover:text-gray-900"
                  href="https://github.com/web-tech-tw/sara"
                >Sara 無密碼式身分認證系統</a>
              </li>
              <li>
                <a
                  class="hover:text-gray-900"
                  href="https://github.com/web-tech-tw/meow"
                >meow 微型部落格社交平台</a>
              </li>
              <li>
                <a
                  class="hover:text-gray-900"
                  href="https://github.com/web-tech-tw"
                >更多產品</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex-none w-1/2 space-y-10 sm:space-y-8 lg:flex lg:space-y-0">
          <div class="lg:flex-none lg:w-1/2">
            <h2 class="font-semibold text-gray-900">
              就業資源
            </h2>
            <ul class="mt-3 space-y-2">
              <li>
                <a
                  class="hover:text-gray-900"
                  href="/mejob/#/hiring"
                >徵才平台</a>
              </li>
              <li>
                <a
                  class="hover:text-gray-900"
                  href="/mejob/#/jobs"
                >求職平台</a>
              </li>
              <li>
                <a
                  class="hover:text-gray-900"
                  href="/mejob/#/chat"
                >職場討論</a>
              </li>
            </ul>
          </div>
          <div class="lg:flex-none lg:w-1/2">
            <h2 class="font-semibold text-gray-900">
              學習資源
            </h2>
            <ul class="mt-3 space-y-2">
              <li>
                <a
                  class="hover:text-gray-900"
                  target="_blank"
                  href="https://ncurl.xyz/s/zkF8zBgNg"
                >
                  為什麼我要更新瀏覽器呢？
                </a>
              </li>
              <li>
                <a
                  class="hover:text-gray-900"
                  target="_blank"
                  href="https://ncurl.xyz/s/Eg2QzfgNg"
                >
                  網際網路基礎觀念
                </a>
              </li>
              <li>
                <a
                  class="hover:text-gray-900"
                  target="_blank"
                  href="https://ncurl.xyz/s/b0AIBYTnR"
                >
                  JavaScript 基礎教學（MDN）
                </a>
              </li>
              <li>
                <a
                  class="hover:text-gray-900"
                  target="_blank"
                  href="https://ncurl.xyz/s/Wgy1zfgNg"
                >
                  網際網路後端伺服器開發基礎（Express.js）
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto mt-5 divide-y divide-gray-200 px-4 sm:px-6 md:px-8 text-sky-700">
      <a
        class="mr-3"
        href="https://github.com/web-tech-tw/index"
      >網站原始碼</a>
      <router-link
        class="mr-3"
        to="/privacy"
      >
        隱私權政策
      </router-link>
    </div>
    <div class="max-w-7xl mx-auto mt-5 divide-y divide-gray-200 px-4 sm:px-6 md:px-8">
      &copy; {{ year }}
      <a
        class="ml-1 hover:text-slate-900"
        :href="homeInteHost"
      >
        臺灣網際網路技術推廣組織
        Taiwan Web Technology Promotion Organization (Web Tech TW)
      </a>
    </div>
  </footer>
</template>

<script setup>
const homeInteHost = import.meta.env.VITE_HOME_INTE_HOST;
const year = new Date().getFullYear();
</script>
