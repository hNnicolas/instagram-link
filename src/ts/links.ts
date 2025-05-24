interface ScreenshotType {
  imgName: string;
  imgAlt: string;
}

export interface LinkItemType {
  title: string;
  link: string;
  svgAlt: string;
  description: string;
  svgName: string;
  screenshots: ScreenshotType[];
  textArrow: string;
}

export const linksUA: LinkItemType[] = [
  {
    title: "LinkedIn",
    textArrow: "プロフィールを開く",
    link: "https://www.linkedin.com/in/huang-nicolas/",
    description: "俺が積極的に投稿する LinkedIn プロフィール",
    svgName: "linkedin",
    svgAlt: "linkedin-svg",
    screenshots: [
      {
        imgName: "linkedin-1",
        imgAlt: "linkedin-screenshot-first",
      },
      {
        imgName: "linkedin-2",
        imgAlt: "linkedin-screenshot-second",
      },
      {
        imgName: "linkedin-3",
        imgAlt: "linkedin-screenshot-third",
      },
      {
        imgName: "linkedin-4",
        imgAlt: "linkedin-screenshot-fourth",
      },
    ],
  },
  {
    title: "GitHub",
    textArrow: "プロフィールを開く",
    link: "https://github.com/hNnicolas",
    description: "俺のすべてのプロジェクトと作品を含む GitHub プロフィール",
    svgName: "github",
    svgAlt: "github-svg",
    screenshots: [
      {
        imgName: "github-1",
        imgAlt: "github-screenshot-first",
      },
      {
        imgName: "github-2",
        imgAlt: "github-screenshot-second",
      },
      {
        imgName: "github-3",
        imgAlt: "github-screenshot-third",
      },
      {
        imgName: "github-4",
        imgAlt: "github-screenshot-fourth",
      },
    ],
  },
  {
    title: "Instagram",
    textArrow: "プロフィールを開く",
    link: "https://www.instagram.com/hfnicolas_/",
    description: "IGで俺のプロジェクトを見つけてください",
    svgName: "instagram",
    svgAlt: "instagram-svg",
    screenshots: [
      { imgName: "instagram-1", imgAlt: "instagram-screenshot-first" },
      { imgName: "instagram-2", imgAlt: "instagram-screenshot-second" },
      { imgName: "instagram-3", imgAlt: "instagram-screenshot-third" },
      { imgName: "instagram-4", imgAlt: "instagram-screenshot-fourth" },
    ],
  },
  {
    title: "X",
    textArrow: "プロフィールを開く",
    link: "https://x.com/hf_nicolas",
    description:
      "Xでの俺のプロフィール",
    svgName: "x",
    svgAlt: "x-svg",
    screenshots: [
      {
        imgName: "X",
        imgAlt: "X-screenshot-first",
      },
    ],
  },
  {
    title: "履歴書を閉じる",
    textArrow: "履歴書を開く",
    link: "https://drive.google.com/file/d/1ZKkQIaIB5kIb2YaBNvaMLhAgk2PR8Xok/view?usp=sharing",
    description: "俺の履歴書への直接link",
    svgName: "cv",
    svgAlt: "cv-svg",
    screenshots: [
      {
        imgName: "CV_Nicolas_English",
        imgAlt: "cv-photo",
      },
    ],
  },
  {
    title: "Portfolio",
    textArrow: "website",
    link: "https://nicolashuang.netlify.app/",
    description: "私のポートフォリオ",
    svgName: "portfolio",
    svgAlt: "portfolio-svg",
    screenshots: [
      {
        imgName: "portfolio-1",
        imgAlt: "portfolio-screenshot-first",
      },
      {
        imgName: "portfolio-2",
        imgAlt: "portfolio-screenshot-second",
      },
      {
        imgName: "portfolio-3",
        imgAlt: "portfolio-screenshot-third",
      },
      {
        imgName: "portfolio-4",
        imgAlt: "portfolio-screenshot-fourth",
      },
    ],
  },
];
export const linksEN: LinkItemType[] = [
  {
    title: "LinkedIn",
    textArrow: "profile",
    link: "https://www.linkedin.com/in/huang-nicolas/",
    description: "LinkedIn profile where I actively post",
    svgName: "linkedin",
    svgAlt: "linkedin-svg",
    screenshots: [
      {
        imgName: "linkedin-1",
        imgAlt: "linkedin-screenshot-first",
      },
      {
        imgName: "linkedin-2",
        imgAlt: "linkedin-screenshot-second",
      },
      {
        imgName: "linkedin-3",
        imgAlt: "linkedin-screenshot-third",
      },
      {
        imgName: "linkedin-4",
        imgAlt: "linkedin-screenshot-fourth",
      },
    ],
  },
  {
    title: "GitHub",
    textArrow: "profile",
    link: "https://github.com/hNnicolas",
    description: "GitHub profile with all projects and works",
    svgName: "github",
    svgAlt: "github-svg",
    screenshots: [
      {
        imgName: "github-1",
        imgAlt: "github-screenshot-first",
      },
      {
        imgName: "github-2",
        imgAlt: "github-screenshot-second",
      },
      {
        imgName: "github-3",
        imgAlt: "github-screenshot-third",
      },
      {
        imgName: "github-4",
        imgAlt: "github-screenshot-fourth",
      },
    ],
  },
  {
    title: "Instagram",
    textArrow: "account",
    link: "https://www.instagram.com/hfnicolas_/",
    description: "discover my project on IG",
    svgName: "instagram",
    svgAlt: "instagram-svg",
    screenshots: [
      { imgName: "instagram-1", imgAlt: "instagram-screenshot-first" },
      { imgName: "instagram-2", imgAlt: "instagram-screenshot-second" },
      { imgName: "instagram-3", imgAlt: "instagram-screenshot-third" },
      { imgName: "instagram-4", imgAlt: "instagram-screenshot-fourth" },
    ],
  },
  {
    title: "X",
    textArrow: "account",
    link: "https://x.com/hf_nicolas",
    description:
      "My profil on X",
    svgName: "x",
    svgAlt: "x-svg",
    screenshots: [
      {
        imgName: "X",
        imgAlt: "x-screenshot-first",
      },
    ],
  },
  {
    title: "Resume",
    textArrow: "resume",
    link: "https://drive.google.com/file/d/1awqm0ZNciyN0XGuKHsEgwFr5nD6jJ0bf/view?usp=sharing",
    description: "direct link to the resume",
    svgName: "cv",
    svgAlt: "cv-svg",
    screenshots: [
      {
        imgName: "CV_Nicolas_HUANG",
        imgAlt: "cv-photo",
      },
    ],
  },
  {
    title: "Portfolio",
    textArrow: "website",
    link: "https://nicolashuang.netlify.app/",
    description: "My portfolio",
    svgName: "portfolio",
    svgAlt: "portfolio-svg",
    screenshots: [
      {
        imgName: "portfolio-1",
        imgAlt: "portfolio-screenshot-first",
      },
      {
        imgName: "portfolio-2",
        imgAlt: "portfolio-screenshot-second",
      },
      {
        imgName: "portfolio-3",
        imgAlt: "portfolio-screenshot-third",
      },
      {
        imgName: "portfolio-4",
        imgAlt: "portfolio-screenshot-fourth",
      },
    ],
  },
];
