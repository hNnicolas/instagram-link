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
    title: "Instagram (Enjoy Stretch Studio)",
    textArrow: "プロフィールを開く",
    link: "https://www.instagram.com/hnicolas_dev",
    description: "IGで俺のプロジェクトを見つけてください",
    svgName: "instagram",
    svgAlt: "instagram-svg",
    screenshots: [
      { imgName: "instagram", imgAlt: "instagram-screenshot-first" },
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
    link: "https://drive.google.com/file/d/1awqm0ZNciyN0XGuKHsEgwFr5nD6jJ0bf/view?usp=sharing",
    description: "俺の履歴書への直接link",
    svgName: "cv",
    svgAlt: "cv-svg",
    screenshots: [
      {
        imgName: "cv",
        imgAlt: "cv-photo",
      },
    ],
  },
  {
    title: "Portfolio",
    textArrow: "website",
    link: "https://nicolas-huang-portfolio.netlify.app/",
    description: "React Fiber と three.js を使用した私のシンプルな 3D ポートフォリオ",
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
    link: "https://www.instagram.com/hnicolas_dev",
    description: "discover my project on IG",
    svgName: "instagram",
    svgAlt: "instagram-svg",
    screenshots: [
      { imgName: "instagram", imgAlt: "instagram-screenshot-first" },
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
        imgName: "cv",
        imgAlt: "cv-photo",
      },
    ],
  },
  {
    title: "Portfolio",
    textArrow: "website",
    link: "https://nicolas-huang-portfolio.netlify.app/",
    description: "My simple 3D portfolio with react fiber and three.js",
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
