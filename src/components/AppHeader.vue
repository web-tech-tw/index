<template>
  <div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link to="/">
            <h1 class="flex-auto text-lg font-semibold text-gray-900 hidden sm:block">
              {{ title.long }}
            </h1>
            <h1 class="flex-auto text-lg font-semibold text-gray-900 sm:hidden">
              {{ title.short }}
            </h1>
          </router-link>
        </div>
        <nav class="md:flex space-x-10 hidden">
          <div v-for="(item, index) in menu" :key="index">
            <div v-if="item.type === 'dropdown'" class="relative">
              <button
                  aria-expanded="false"
                  class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  type="button"
                  @click="openMenu(item.status)"
              >
                <span>{{ item.name }}</span>
                <svg
                    aria-hidden="true"
                    class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      clip-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      fill-rule="evenodd"
                  />
                </svg>
              </button>
              <div
                  class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                <div
                    v-show="menu_collapse[item.status]"
                    class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                >
                  <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <div
                        v-for="(child, index) in item.items"
                        :key="index"
                        class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer"
                        @click="child.action"
                    >
                      <img :alt="child.name" :src="child.icon" class="rounded-full" height="30" width="30">
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          {{ child.name }}
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          {{ child.description }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
                v-else-if="item.type === 'function'"
                aria-expanded="false"
                class="text-base font-medium text-gray-500 hover:text-gray-900"
                type="button"
                @click="item.action"
            >
              {{ item.name }}
            </button>
          </div>
        </nav>
        <div class="-mr-2 -my-2 md:hidden">
          <button
              aria-expanded="false"
              class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              type="button"
              @click="menu_collapse.mobile_menu = true"
          >
            <span class="sr-only">Open menu</span>
            <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div 
         v-show="menu_collapse.mobile_menu"
         class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        <div class="pt-5 pb-6 px-5">
          <div class="flex items-center justify-between" @click="menu_collapse.mobile_menu = false">
            <div>
              <h1 class="flex-auto text-lg font-semibold text-gray-900 sm:hidden">
                {{ title.short }}
              </h1>
            </div>
            <div class="-mr-2">
              <button
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  type="button">
                <span class="sr-only">Close menu</span>
                <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="mt-6">
            <nav class="grid gap-y-8">
              <div v-for="(item, index) in menu" :key="index">
                <div v-if="item.type === 'dropdown'" class="relative">
                  <button
                      aria-expanded="false"
                      class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full"
                      type="button"
                      @click="openMenu(item.status)"
                  >
                    <span>{{ item.name }}</span>
                    <svg
                        aria-hidden="true"
                        class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                          clip-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          fill-rule="evenodd"
                      />
                    </svg>
                  </button>
                  <div
                      class="absolute z-10 -ml-7 mt-3 transform px-2 w-screen max-w-md sm:px-0 sm:-ml-4 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div
                        v-show="menu_collapse[item.status]"
                        class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                    >
                      <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        <div
                            v-for="(child, index) in item.items"
                            :key="index"
                            class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer"
                            @click="child.action"
                        >
                          <img :alt="child.name" :src="child.icon" class="rounded-full" height="30" width="30">
                          <div class="ml-4">
                            <p class="text-base font-medium text-gray-900">
                              {{ child.name }}
                            </p>
                            <p class="mt-1 text-sm text-gray-500">
                              {{ child.description }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                    v-else-if="item.type === 'function'"
                    class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 w-full"
                    type="button"
                    @click="item.action"
                >
                  <img :alt="item.name" :src="item.icon" class="rounded-full" height="30" width="30">
                  <span class="ml-3 text-base font-medium text-gray-900">{{ item.name }}</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data: () => ({
    title: {
      short: "Web Tech TW",
      long: "Taiwan Web Technology Promotion Organization"
    },
    menu_collapse: {
      mobile_menu: false,
      chat_platform: false,
      online_service: false
    },
    profile: null
  }),
  computed: {
    menu() {
      return [
        {
          name: "交流平台",
          type: "dropdown",
          status: "chat_platform",
          items: [
            {
              name: "LINE OpenChat",
              description: "歡迎加入我們的 LINE 社群，這裡提供了能在各領域彼此互相切磋、詢問、協助的社群空間",
              icon: require("@/assets/images/brands/line.svg"),
              action: () => window.open("/openchat")
            },
            {
              name: "Discord",
              description: "這裡是我們的 Discord 伺服器，透過 Discord 強大的開放 API 平台，使互動變得更加流暢",
              icon: require("@/assets/images/brands/discord.svg"),
              action: () => window.open("https://discord.gg/nM7ub6Dz5J")
            }
          ]
        },
        {
          name: "線上服務",
          type: "dropdown",
          status: "online_service",
          items: [
            {
              name: "Chew 口香糖",
              description: "文字片段分享平台",
              icon: require("@/assets/images/icons/clipboard.svg"),
              action: () => window.open("/chew")
            },
            {
              name: "Lucid",
              description: "基於純網頁運行的 SliTaz/xPUD Linux x86-compatible 虛擬電腦",
              icon: require("@/assets/images/icons/lightning-bolt.svg"),
              action: () => window.open("/lucid")
            },
          ]
        },
        {
          name: "GitHub",
          type: "function",
          icon: require("@/assets/images/brands/github.svg"),
          action: () => window.open("https://github.com/web-tech-tw")
        },
        {
          name: this.profile?.nickname || "登入",
          type: "function",
          icon: require(`@/assets/images/icons/${this.profile ? 'user' : 'login'}.svg`),
          action: () => location.assign(process.env.VUE_APP_SARA_INTE_HOST)
        }
      ]
    }
  },
  async created() {
    document.addEventListener('click', this.handleDocumentClick);
    this.profile = this.$profile();
  },
  methods: {
    openMenu(item) {
      Object.keys(this.menu_collapse).forEach(key => {
        if (key === 'mobile_menu') return
        if (key === item ) {
          this.menu_collapse[key] = !this.menu_collapse[key];
        } else {
          this.menu_collapse[key] = false;
        }
      });
    },
    handleDocumentClick(e) {
      if (!this.$el.contains(e.target)) {
        Object.keys(this.menu_collapse).forEach(key => {
          this.menu_collapse[key] = false;
        });        
      }
    }
  }
}
</script>
