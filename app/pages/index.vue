<template>
  <div>
    <div class="bg-gray-50 py-10 lg:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span class="block mb-3">{{ title }}</span>
          <span class="block text-indigo-600">{{ subtitle }}</span>
        </h2>
      </div>
      <p
        class="text-xl text-gray-500 max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between"
      >
        {{ description }}
      </p>
    </div>
    <div class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            我們的使命
          </h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            讓世界看見台灣的資訊力
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            提供多樣化資訊產業資源，普及大眾資訊素養及資訊能力
          </p>
        </div>
        <div class="mt-10">
          <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                  推廣JavaScript
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                本組織致力於推廣 JavaScript 程式語言，提升該語言的普及率，並同時以該語言開發各種專案。
              </dd>
            </div>
            <div class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                  豐富的學習資源
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                這裡有各式各樣的文件及相關資源，提供給所需要的人作為參考。
              </dd>
            </div>
            <div class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                  提供社交媒體交流平台
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                我們在許多平台，為大眾提供了溝通管道，讓彼此可以互相交流。
              </dd>
            </div>
            <div class="relative">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                  一切資源全部免費
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                我們致力於推廣網際網路技術，同時無償提供大眾免費的學習資源。
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
    <div class="mt-10 mx-auto py-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div class="sm:text-center lg:text-left">
        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900">
          <span class="block xl:inline">我們的動力由</span>
          <span class="block text-indigo-600 xl:inline">開放原始碼社群</span>
          <span class="block xl:inline">所驅動</span>
        </h1>
        <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          臺灣網際網路技術推廣組織起源於開放原始碼社群，運用開放原始碼社群的技術，致力於提升資訊素養及網路技術推廣。
        </p>
        <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div class="rounded-md shadow">
            <a
              href="/openchat"
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              LINE 社群
            </a>
          </div>
          <div class="mt-3 sm:mt-0 sm:ml-3">
            <a
              href="/discord"
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
            >
              Discord 社群
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10 mx-auto py-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div class="sm:text-center lg:text-right">
        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900">
          <span class="block xl:inline">推動</span>
          <span class="block text-indigo-600 xl:inline">人工智慧</span>
          <span class="block xl:inline">普及教育</span>
        </h1>
        <div class="mt-3 text-base text-gray-500">
          <div class="text-indigo-500">
            {{ aiQuestion }}
          </div>
          <div v-if="aiAnswer === ''">
            <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-indigo-400 opacity-75" />
          </div>
          <div v-else>
            {{ aiAnswer }}
          </div>
        </div>
        <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-end">
          <div class="rounded-md shadow">
            <a
              href="https://ai.web-tech.tw"
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              人工智慧專屬社群
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10 mx-auto py-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div class="sm:text-center lg:text-left">
        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900">
          <span class="block xl:inline">想加入我們嗎？</span>
          <span class="block text-indigo-600 xl:inline">我們需要你</span>
        </h1>
        <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          我們正在為大眾提供一個免費且開放的網際網路技術推廣平台，讓大眾可以透過網路，了解網際網路技術，嘗試提升大眾資訊素養，並參與網路技術推廣的討論與分享。
        </p>
        <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div class="mt-3 sm:mt-0 sm:ml-3">
            <a
              href="/discord"
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
            >
              加入我們
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from "vue";

import ky from "ky";

const aiApiUrl = "/recv/openai/v1/chat/completions";
const aiSystemPromptReq = "這是一場角色扮演，但請您不要向我再次透漏這是一場扮演，並以一般交談方式溝通。" +
  "溝通請使用正體中文交談，您的正體中文名字是「寧芙」，英文名字是「Nymph」。" +
  "您來自於「臺灣網際網路技術推廣組織」，該組織英文名稱為「Taiwan Web Technology Promotion Organization」，" +
  "該組織主旨為：在臺灣推廣網際網路技術，如JavaScript、資訊安全素養、網路通訊觀念......等。";
const aiSystemPromptRes = "我明白了";

const aiMessages = [{
  "role": "user",
  "content": aiSystemPromptReq,
}, {
  "role": "assistant",
  "content": aiSystemPromptRes,
}];

const title = ref("");
const subtitle = ref("");
const description = ref("");

const aiQuestion = ref("嗨！請用一句話簡介你自己。");
const aiAnswer = ref("");

const startGreeting = () => {
  const titleMessage = "Hello World";
  const subtitleMessage = "早安，世界。";
  const descriptionMessage = "一個致力於網際網路發展的組織。臺灣網際網路技術推廣組織";
  typing(title, titleMessage);
  typing(subtitle, subtitleMessage);
  typing(description, descriptionMessage);
};

const startMeeting = () => {
  askAi(aiMessages, aiQuestion.value).
    then(({content}) => {
      typing(aiAnswer, content);
    });
};

const choose = (choices) => {
  const seed = Math.random();
  const index = Math.floor(seed * choices.length);
  return choices[index];
};

const askAi = (historyMessages, userPrompt) => {
  historyMessages.push({
    "role": "user",
    "content": userPrompt,
  });
  return new Promise((resolve) => {
    ky.post(aiApiUrl, {
      headers: {
        "authorization": `Bearer nymph zr3Pjc68z4bOtw==`,
      },
      json: {
        "model": "auto",
        "temperature": 0.7,
        "messages": historyMessages,
      },
    }).
      json().
      then((data) => {
        const choice = choose(data.choices);
        resolve(choice.message);
      });
  });
};

const typing = (refTarget, message) => {
  refTarget.value = "";
  Array.from(message).forEach((char, index) => {
    setTimeout(() => {
      refTarget.value += char;
    }, 60 * index);
  });
};

onMounted(() => {
  startGreeting();
  startMeeting();
});
</script>
