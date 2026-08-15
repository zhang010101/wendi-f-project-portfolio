export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  cover: string;
  summary: string;
  caseStudy?: {
    hero: {
      tagline: string;
      subtitle: string;
      keyInfo: string[];
    };
    background?: {
      heading: string;
      paragraphs: string[];
      systems: { tool: string; use: string }[];
    };
    systemDesign?: {
      heading: string;
      intro: string[];
      functionalMapImage: string;
      storyMapIntro: string;
      storyMapImage: string;
      decisionsIntro: string;
      decisions: { title: string; description: string }[];
      featuresHeading: string;
      features: { name: string; description: string }[];
      closing: string;
    };
    deepDive?: {
      heading: string;
      intro: string;
      problem: { heading: string; paragraphs: string[] };
      process: {
        heading: string;
        paragraphs: string[];
        images: { src: string; caption: string }[];
      };
      decision: {
        heading: string;
        paragraphs: string[];
        images: { src: string; caption: string }[];
      };
      result: {
        heading: string;
        paragraphs: string[];
        image: string;
        video: string;
      };
    };
  };
};

// TODO: 替换为真实案例信息与封面图（放入 public/images）
export const projects: Project[] = [
  {
    slug: "pr",
    title: "Project Room（PR）",
    category: "产品界面",
    year: "2025-今",
    cover: "/images/pr-hero.png",
    summary:
      "建筑工程项目的文档天然分散在七八个专业系统里。PR 不是又一个文件夹，而是把它们汇聚到一处的接收端。",
    caseStudy: {
      hero: {
        tagline:
          "Project Room（PR）—— mydocma 生态里为建筑工程项目打造的集中式协作与文档管理平台。",
        subtitle:
          "建筑工程项目的文档天然分散在七八个专业系统里。PR 不是又一个文件夹，而是把它们汇聚到一处的接收端。",
        keyInfo: [
          "角色：与 Elisa 共同负责设计，体现跨职能协作",
          "交付节奏：分阶段迭代（User Story Map Volumen 1/2/3）",
          "平台：Desktop + Tablet（办公室与工地两种使用场景）",
        ],
      },
      background: {
        heading: "背景与挑战",
        paragraphs: [
          "建筑工程项目的文档，从来不是“存在一个地方”这么简单。",
          "同一个项目的信息，散落在七八个专业系统里，没有一个地方能看到全貌。这不是某个团队疏于管理，而是建筑工程行业的工作方式决定的：不同专业角色本来就活在不同的工具里。",
          "我们梳理了 8 类项目干系人的使用场景后发现，几乎每一类角色都把“文档分散、找不到、格式不统一”列为核心痛点，其中项目负责人（Projektleiter）明确把“数据碎片化”（Datenfragmentierung）标记为首要挑战。",
          "PR 要解决的不是“再建一个文档库”，而是做**接收端**——通过 PR-API / Files-API 主动对接各专业模块，把文档自动同步进来。用户不需要在多个系统之间来回切换，PR 已经把该有的信息聚在了一起。",
          "这个方向是不是选对了，2026 年 7 月一封客户主动发来的早鸟申请邮件（Wolfgang Schmid 写给 Herr Ripperda，希望提前用上 PR）给出了一个真实的信号。",
        ],
        systems: [
          { tool: "AppBuilder", use: "现场检查" },
          { tool: "RP", use: "日报" },
          { tool: "MM", use: "缺陷记录" },
          { tool: "JF", use: "会议纪要" },
          { tool: "PX", use: "图纸" },
        ],
      },
      systemDesign: {
        heading: "系统设计概览",
        intro: [
          "PR 要同时服务的，是一群工作方式完全不同的人。",
          "坐在办公室里的项目负责人需要看全局、管权限、追版本；戴着安全帽在工地上的工长，可能只有几十秒时间，用平板打开一张图纸核对现场情况。同一份文档，要在两种完全不同的使用场景里都“好用”——这是 PR 系统设计上最核心的约束。",
          "下面这张图是我们梳理的角色协作流程：项目负责人（PL）、现场负责人（Bauleiter）、建筑师/规划师（Architekt）、分包商（Subunternehmer）、行政助理（Sekretariat）等角色，各自在什么节点介入、文档如何从一个角色流向下一个角色。",
        ],
        functionalMapImage: "/images/pr-functional-map.png",
        storyMapIntro:
          "理清协作流程之后，我们把整个模块要做的事情用 User Story Map 拆解成 Activities → Steps → Details 三层，再按 P0/P1/P2 分成三个 Release 逐步交付——这也是下面“分阶段交付”这个判断背后具体的规划方式。",
        storyMapImage: "/images/pr-user-story-map.png",
        decisionsIntro: "围绕这个协作模型，PR 的系统设计还有两个值得一提的判断：",
        decisions: [
          {
            title: "两种组织方式并存",
            description:
              "Structure（从项目管理模块同步过来的技术层级，系统生成、用户不可改）和 Folder（用户自定义的灵活文件夹树）并行存在，分别满足“系统性归档”和“个人习惯整理”两种需求，不强迫用户二选一。",
          },
          {
            title: "分阶段交付",
            description:
              "整个模块按 User Story Map 拆成 Volumen 1/2/3 逐步上线，不是一次性设计到位再交付。",
          },
        ],
        featuresHeading: "已上线的核心功能",
        features: [
          { name: "上传文档 Upload", description: "拖拽上传、批量处理、超大文件提示" },
          { name: "下载文档 Download", description: "单/多文档下载" },
          { name: "分享文档 Share", description: "生成受限链接，与外部伙伴协作" },
          {
            name: "文档查看器 Viewer",
            description: "支持 PDF、图片、ZIP、360 全景等多种预览",
          },
          { name: "Dashboard", description: "项目文档总览、按类型/公司筛选统计" },
          { name: "文件夹结构 Folder", description: "自定义文件夹树，支持拖拽整理" },
          {
            name: "跨模块集成",
            description: "与 AppBuilder、PX 等模块打通，文档自动同步",
          },
        ],
        closing:
          "跨模块集成不是一句“做了 API 对接”就能说清楚的。比如 AppBuilder 里现场检查添加的照片同步到 PR 时，“谁上传的”“谁创建的”这两个字段在跨模块场景下要怎么定义都需要单独澄清——细节多到超出这个板块要展开的范围，只在这里点一句。",
      },
      deepDive: {
        heading: "深度案例主线 —— Upload 可用性测试迭代",
        intro:
          "PR 上线后，我们没有假设“新建/上传文档”这条最高频的操作就一定好用——而是做了两轮可用性测试，每轮找 4 位参与者，先测线上版本，再测重新设计的原型。",
        problem: {
          heading: "问题",
          paragraphs: [
            "第一轮测试用的是当时线上的 PR。4 位参与者里，2 位在点击“ablegen”（归档）之后，发现弹窗还留在原地，不确定文档到底传没传上去——一位参与者的原话是“以为这三个文档已经上传完了”。",
            "Inbox 这个入口，没有一个人真正看懂：有人猜“跟 Docuware 差不多”，有人以为是用来收发邮件的，还有一位干脆没弄明白 Inbox 是什么，直接跳过没管（这位参与者也坦言自己没用过 Docuware）。",
            "属性表单里的“Tags”字段也让人卡壳——“Tags 是什么？”这是当场问出来的原话。",
          ],
        },
        process: {
          heading: "过程",
          paragraphs: [
            "针对这些问题，我们重新设计了“新建/上传文档”这条流程：把原来含糊的“点了就传”，改成一个明确的三选一入口——存进 Inbox、把所有文件合并成一个文档、或者每个文件单独建一个文档；同时在属性表单里加上实时校验，必填项没填会立刻标红提示，而不是等点了“上传”才告诉用户失败了。",
            "带着这个新原型，我们做了第二轮测试。",
          ],
          images: [
            {
              src: "/images/pr-upload-workflow-reference.png",
              caption: "新流程的完整逻辑图",
            },
            {
              src: "/images/pr-upload-choice.png",
              caption: "三选一入口：Inbox / 合并成一个文档 / 每个文件单独建一个文档",
            },
            {
              src: "/images/pr-upload-validation-warning.png",
              caption: "实时校验：必填项未填时立即标红提示",
            },
          ],
        },
        decision: {
          heading: "决策",
          paragraphs: [
            "“合并成一个文档”这个选项，直接命中了 3/4 参与者“想要一次性把所有文件存起来”的诉求，不用再对着一个个文件重复走一遍流程。",
            "实时校验反馈解决了第一轮里“点了上传才发现失败”的问题——必填项漏填会立刻标红，用户当场就能改，不用等一个弹窗告诉他失败了再回头找。",
          ],
          images: [
            {
              src: "/images/pr-upload-all-in-one.png",
              caption: "多个文件合并成一个文档",
            },
            {
              src: "/images/pr-upload-validation-resolved.png",
              caption: "必填项填完后，提示消失、上传按钮变亮",
            },
          ],
        },
        result: {
          heading: "结果",
          paragraphs: [
            "第二轮测试，4/4 参与者顺利走完了整个新建文档流程——用一位参与者的话说，“结果出乎他意料地顺利”。",
            "不过测试也诚实地暴露了新问题：想在“属性填写”这一步给已经选好的文档追加文件时，4/4 参与者都卡住了——没人愿意点“返回”，更希望这一步直接有个“+”按钮。这个改动目前还没做，留到下一轮迭代里解决。",
          ],
          image: "/images/pr-upload-success-grid.png",
          video: "/videos/pr-upload-demo.mp4",
        },
      },
    },
  },
  {
    slug: "project-one",
    title: "案例一标题",
    category: "品牌设计",
    year: "2025",
    cover: "/images/project-1.jpg",
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
