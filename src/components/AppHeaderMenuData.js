export const title = "Taiwan Web Technology Promotion Organization";
export const subtitle = "臺灣網際網路技術推廣組織";
export const label = "Web-Tech-TW";

export const isSaraEnabled = true;
export const onClickSara = () => {
  const {
    VITE_SARA_INTE_HOST: saraInteHost,
  } = import.meta.env;
  location.assign(saraInteHost);
};

export const menuItems = [
  {
    name: "交流平台",
    type: "dropdown",
    status: "chat_platform",
    children: [
      {
        name: "LINE OpenChat",
        description: "提供了能在各領域彼此互相切磋、協助的社群空間",
        icon: "LINE",
        onClick: () => window.open("/openchat"),
      },
      {
        name: "Discord",
        description: "這是我們的 Discord 伺服器，自由多元的交流空間",
        icon: "Discord",
        onClick: () => window.open("/discord"),
      },
      {
        name: "Wiki",
        description: "自由的資訊科技技術百科全書",
        icon: "AcademicCapIcon",
        onClick: () => window.open("/wiki"),
      },
    ],
  },
  {
    name: "線上服務",
    type: "dropdown",
    status: "online_service",
    children: [
      {
        name: "Nymph 寧芙",
        description: "社群驅動人工智慧技術平台",
        icon: "SparklesIcon",
        onClick: () => window.open("/nymph"),
      },
      {
        name: "Chew 口香糖",
        description: "文字片段分享平台",
        icon: "ClipboardIcon",
        onClick: () => window.open("/chew"),
      },
      {
        name: "Freya 芙蕾雅",
        description: "LINE 社群加入申請驗證平台",
        icon: "BuildingLibraryIcon",
        onClick: () => window.open("/freya"),
      },
      {
        name: "meJob 咪價",
        description: "自由的工作機會平台",
        icon: "BriefcaseIcon",
        onClick: () => window.open("/mejob"),
      },
      {
        name: "Lucid",
        description: "基於純網頁運行的 Linux x86 相容虛擬電腦",
        icon: "BoltIcon",
        onClick: () => window.open("/lucid"),
      },
    ],
  },
  {
    name: "GitHub",
    type: "function",
    icon: "GitHub",
    onClick: () => window.open("https://github.com/web-tech-tw"),
  },
];
