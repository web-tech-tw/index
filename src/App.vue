<template>
  <div class="relative bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span class="sr-only">Workflow</span>
            <img alt="" class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg">
          </a>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <button aria-expanded="false"
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  type="button">
            <span class="sr-only">Open menu</span>
            <svg aria-hidden="true" class="h-6 w-6" fill="none" stroke="currentColor"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            </svg>
          </button>
        </div>
        <nav class="hidden md:flex space-x-10">
          <div class="relative">
            <button aria-expanded="false"
                    class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    type="button">
              <span>Solutions</span>
              <svg aria-hidden="true" class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
                   fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      fill-rule="evenodd"/>
              </svg>
            </button>
            <div
                class="hidden absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
              <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  <a class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50" href="#">
                    <svg aria-hidden="true" class="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none"
                         stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2"/>
                    </svg>
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">
                        Analytics
                      </p>
                      <p class="mt-1 text-sm text-gray-500">
                        Get a better understanding of where your traffic is coming from.
                      </p>
                    </div>
                  </a>
                  <a class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50" href="#">
                    <svg aria-hidden="true" class="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none"
                         stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2"/>
                    </svg>
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">
                        Engagement
                      </p>
                      <p class="mt-1 text-sm text-gray-500">
                        Speak directly to your customers in a more meaningful way.
                      </p>
                    </div>
                  </a>
                  <a class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50" href="#">
                    <svg aria-hidden="true" class="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none"
                         stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2"/>
                    </svg>
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">
                        Security
                      </p>
                      <p class="mt-1 text-sm text-gray-500">
                        Your customers&#039; data will be safe and secure.
                      </p>
                    </div>
                  </a>
                  <a class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50" href="#">
                    <svg aria-hidden="true" class="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none"
                         stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2"/>
                    </svg>
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">
                        Integrations
                      </p>
                      <p class="mt-1 text-sm text-gray-500">
                        Connect with third-party tools that you&#039;re already using.
                      </p>
                    </div>
                  </a>
                  <a class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50" href="#">
                    <svg aria-hidden="true" class="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none"
                         stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2"/>
                    </svg>
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">
                        Automations
                      </p>
                      <p class="mt-1 text-sm text-gray-500">
                        Build strategic funnels that will drive your customers to convert
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a class="text-base font-medium text-gray-500 hover:text-gray-900" href="#">
            Pricing
          </a>
        </nav>
      </div>
    </div>
    <div class="hidden absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        <div class="py-6 px-5 space-y-6">
          <div class="grid grid-cols-2 gap-y-4 gap-x-8">
            <a class="text-base font-medium text-gray-900 hover:text-gray-700" href="#">
              Pricing
            </a>
          </div>
        </div>
        <div class="pt-5 pb-6 px-5">
          <div class="flex items-center justify-between">
            <div>
              <img alt="Workflow" class="h-8 w-auto"
                   src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg">
            </div>
            <div class="-mr-2">
              <button class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
              <a class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" href="#">
                <svg aria-hidden="true" class="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none"
                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2"/>
                </svg>
                <span class="ml-3 text-base font-medium text-gray-900">Analytics</span>
              </a>
              <a class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" href="#">
                <svg aria-hidden="true" class="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none"
                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2"/>
                </svg>
                <span class="ml-3 text-base font-medium text-gray-900">Engagement</span>
              </a>
              <a class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" href="#">
                <svg aria-hidden="true" class="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none"
                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2"/>
                </svg>
                <span class="ml-3 text-base font-medium text-gray-900">Security</span>
              </a>
              <a class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" href="#">
                <svg aria-hidden="true" class="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none"
                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2"/>
                </svg>
                <span class="ml-3 text-base font-medium text-gray-900">Integrations</span>
              </a>
              <a class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" href="#">
                <svg aria-hidden="true" class="flex-shrink-0 h-6 w-6 text-indigo-600" fill="none"
                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2"/>
                </svg>
                <span class="ml-3 text-base font-medium text-gray-900">
                Automations
              </span>
              </a>
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
  data: () => ({})
}
</script>
