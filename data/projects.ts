export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  cover: string;
  summary: string;
};

// TODO: 替换为真实案例信息与封面图（放入 public/images）
export const projects: Project[] = [
  {
    slug: "project-one",
    title: "案例一标题",
    category: "品牌设计",
    year: "2025",
    cover: "/images/project-1.jpg",
    summary: "一句话说明这个案例解决了什么问题。",
  },
  {
    slug: "project-two",
    title: "案例二标题",
    category: "产品界面",
    year: "2025",
    cover: "/images/project-2.jpg",
    summary: "一句话说明这个案例解决了什么问题。",
  },
  {
    slug: "project-three",
    title: "案例三标题",
    category: "视觉设计",
    year: "2024",
    cover: "/images/project-3.jpg",
    summary: "一句话说明这个案例解决了什么问题。",
  },
  {
    slug: "project-four",
    title: "案例四标题",
    category: "网站设计",
    year: "2024",
    cover: "/images/project-4.jpg",
    summary: "一句话说明这个案例解决了什么问题。",
  },
];
