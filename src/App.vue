<template>
  <div class="relative bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="/">
            <h1 class="flex-auto text-lg font-semibold text-gray-900 hidden sm:block">
              Taiwan Web Technology Promotion Organization
            </h1>
            <h1 class="flex-auto text-lg font-semibold text-gray-900 sm:hidden">
              Web Tech TW
            </h1>
          </a>
        </div>
        <nav class="md:flex space-x-10 hidden">
          <div v-for="(item, index) in menu" :key="index">
            <div v-if="item.type === 'dropdown'" class="relative">
              <button
                  aria-expanded="false"
                  class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  type="button"
                  @click="item.status = !item.status"
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
                    v-show="item.status"
                    class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                >
                  <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <div
                        v-for="(child, index) in item.items"
                        :key="index"
                        class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer"
                        @click="child.action"
                    >
                      <svg
                          aria-hidden="true"
                          class="flex-shrink-0 h-6 w-6 text-indigo-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                        />
                      </svg>
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
              @click="mobile_menu.status = true"
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
    <div v-show="mobile_menu.status"
         class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        <div class="pt-5 pb-6 px-5">
          <div class="flex items-center justify-between" @click="mobile_menu.status = false">
            <div>
              <h1 class="flex-auto text-lg font-semibold text-gray-900 sm:hidden">
                Web Tech TW
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
                      @click="item.status = !item.status"
                  >
                    <span>{{ item.name }}</span>
                    <svg
                        aria-hidden="true"
                        class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500 ml-auto"
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
                        v-show="item.status"
                        class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                    >
                      <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        <div
                            v-for="(child, index) in item.items"
                            :key="index"
                            class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer"
                            @click="child.action"
                        >
                          <svg
                              aria-hidden="true"
                              class="flex-shrink-0 h-6 w-6 text-indigo-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                            />
                          </svg>
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
                  <svg aria-hidden="true" class="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none"
                       stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2"/>
                  </svg>
                  <span class="ml-3 text-base font-medium text-gray-900">{{ item.name }}</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menu: [
      {
        name: "Social Media",
        type: "dropdown",
        status: false,
        items: [
          {
            name: "Discord",
            description: "Get a better understanding of where your traffic is coming from.",
            action: () => location.assign("https://discord.gg/xpyuq342nX")
          },
          {
            name: "LINE OpenChat",
            description: "Get a better understanding of where your traffic is coming from.",
            action: () => location.assign("https://github.com/web-tech-tw/openchat")
          }
        ]
      },
      {
        name: "GitHub",
        type: "function",
        action: () => location.assign("https://github.com/web-tech-tw")
      }
    ],
    mobile_menu: {
      status: false
    },
  })
}
</script>
