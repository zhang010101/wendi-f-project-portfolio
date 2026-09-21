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
      imageCaption: string;
    };
    background?: {
      heading: string;
      paragraphs: string[];
      systems?: { tool: string; use: string }[];
      targetLabel?: string;
    };
    decisionOverview?: {
      heading: string;
      paragraphs: string[];
      legacyExample?: {
        intro: string;
        images: { src: string; caption: string }[];
        connection: string;
      };
      tracksIntro: string;
      tracks: { title: string; description: string }[];
      image: string;
      imageCaption: string;
    };
    personas?: {
      heading: string;
      intro: string;
      entryLabel: string;
      items: {
        title: string;
        context: string;
        zone: "office" | "site" | "both";
        photo: string;
        painPoint: string;
        goal: string;
        docs?: string;
      }[];
    };
    systemDesign?: {
      heading: string;
      intro: string[];
      storyMapIntro: string;
      storyMapImage: string;
      decisionsIntro: string;
      decisions: { title: string; description: string }[];
      featuresHeading: string;
      features: { name: string; description: string }[];
      closing: string;
    };
    roles?: {
      heading: string;
      intro: string;
      items: { title: string; description: string }[];
    };
    deepDive?: {
      heading: string;
      intro: string;
      sheet: string;
      label: string;
      decisionFigStart?: number;
      problem: { heading: string; paragraphs: string[] };
      process?: {
        heading: string;
        paragraphs: string[];
        images: { src?: string; caption: string }[];
      };
      decision: {
        heading: string;
        paragraphs: string[];
        images: { src?: string; caption: string }[];
      };
      result?: {
        heading: string;
        paragraphs: string[];
        image: string;
        video: string;
      };
    };
    meetingRelation?: {
      heading: string;
      sheet: string;
      label: string;
      intro: string;
      startPage: {
        heading: string;
        intro: string;
        highlights: { title: string; description: string }[];
        images: { src: string; caption: string }[];
        closing: string;
      };
      relationHeading: string;
      scenario: string;
      modes: { label: string; title: string; description: string; fit: string }[];
      switching: { heading: string; paragraph: string };
    };
    systemsThinking?: {
      heading: string;
      intro: string;
      panelWidths: {
        paragraph: string;
        images: { src: string; caption: string }[];
      };
      structure: {
        paragraph: string;
        image: string;
        caption: string;
      };
    };
    impact?: {
      heading: string;
      items: { title: string; description: string }[];
      note: string;
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
        imageCaption:
          "Document grid —— 三栏经典布局：Structure 树 / 文档表格 / Detail 预览",
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
        targetLabel: "PR",
      },
      personas: {
        heading: "先搞清楚 8 个人分别要什么",
        intro:
          "动手设计之前，我们先梳理了会用到 PR 的 8 类角色。素材来自和客户经理、专业顾问、销售等客户接触多、有行业背景的同事的访谈，也访谈了部分真实用户——不是凭空猜测的画像。这份梳理后来直接喂给了下面的系统设计和角色深挖。",
        entryLabel: "查看完整的 8 个角色 Personas →",
        items: [
          {
            title: "Projektleiter (PL) 项目负责人",
            context: "办公室 · Desktop",
            zone: "office",
            photo: "/images/personas/pl.jpg",
            painPoint: "数据碎片化，变更版本难追踪",
            goal: "集中管理文档、设定权限、快速查找与分发、自动化通知",
            docs: "结算、合同、往来邮件",
          },
          {
            title: "Bauleiter (BL) 现场负责人",
            context: "工地 · Tablet",
            zone: "site",
            photo: "/images/personas/bl.jpg",
            painPoint: "现场时间紧迫，找文档不能等",
            goal: "快速查找/打开文档核实信息，直接录入专业模块数据",
            docs: "图纸、发票、往来邮件",
          },
          {
            title: "Architekt / Planer 建筑师/专业规划师",
            context: "办公室 · Desktop",
            zone: "office",
            photo: "/images/personas/architekt.jpg",
            painPoint: "版本管理混乱，跨专业协作容易出错",
            goal: "上传图纸（单个/批量），核对版本，批量上传自动生成版本号并通知",
            docs: "图纸",
          },
          {
            title: "Polier 工长",
            context: "工地 · Tablet",
            zone: "site",
            photo: "/images/personas/polier.jpg",
            painPoint: "不熟悉软件操作，现场访问要求快",
            goal: "用 PR 快速打开图纸，易用性优先",
            docs: "图纸、BIM 模型",
          },
          {
            title: "Subunternehmer 分包商",
            context: "办公室/工地 · Desktop/Tablet",
            zone: "both",
            photo: "/images/personas/subunternehmer.jpg",
            painPoint: "文档要传给总包（GU），沟通成本高",
            goal: "上传要求的文档到指定文件夹",
            docs: "图纸、进度计划",
          },
          {
            title: "Sekretariat 行政助理",
            context: "办公室 · Desktop",
            zone: "office",
            photo: "/images/personas/sekretariat.jpg",
            painPoint: "要管理的文档种类多、量大",
            goal: "归档、分发文档",
            docs: "几乎所有类型",
          },
          {
            title: "Bauherr 业主/发包方",
            context: "办公室 · Desktop（外部用户，只能看部分文档）",
            zone: "office",
            photo: "/images/personas/bauherr.jpg",
            painPoint: "非技术背景，需要清晰呈现",
            goal: "看项目全局概览（进度/成本/风险）",
            docs: "日报、缺陷统计、往来邮件、审批文件",
          },
          {
            title: "Behördenvertreter / Gutachter 监管方/审查人员",
            context: "办公室 · Desktop",
            zone: "office",
            photo: "/images/personas/behoerdenvertreter.jpg",
            painPoint: "需要能追溯所有变更，以保证审查结论准确",
            goal: "快速访问相关数据",
          },
        ],
      },
      systemDesign: {
        heading: "系统设计概览",
        intro: [
          "PR 要同时服务的，是一群工作方式完全不同的人。",
          "坐在办公室里的项目负责人需要看全局、管权限、追版本；戴着安全帽在工地上的工长，可能只有几十秒时间，用平板打开一张图纸核对现场情况。同一份文档，要在两种完全不同的使用场景里都“好用”——这是 PR 系统设计上最核心的约束。",
          "下面这张图是我们梳理的角色协作流程：项目负责人（PL）、现场负责人（Bauleiter）、建筑师/规划师（Architekt）、分包商（Subunternehmer）、行政助理（Sekretariat）等角色，各自在什么节点介入、文档如何从一个角色流向下一个角色。",
        ],
        storyMapIntro:
          "理清协作流程之后，我们把整个模块要做的事情用 User Story Map 拆解成 Activities → Steps → Details 三层，再按 P0/P1/P2 分成三个 Release 逐步交付——这也是下面“分阶段交付”这个判断背后具体的规划方式。",
        storyMapImage: "/images/pr-user-story-map.jpg",
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
          {
            title: "权限：方向定了，特意不做",
            description:
              "业主、分包商这类外部角色只应该看到部分文档——这一点在角色梳理阶段就很明确。权限的设计方向也在早期讨论清楚了：按过滤器把权限绑定给角色，多个条件之间用“或”连接。但把权限系统真正做出来，被主动排进了 v1 范围之外，先把核心的文档流转和交付节奏做稳，这也是一种克制。",
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
          {
            name: "筛选与搜索 Filter & Search",
            description: "多维度组合筛选（AND/OR），支持全文搜索及在当前筛选结果内二次搜索",
          },
          { name: "Dashboard", description: "项目文档总览、按类型/公司筛选统计" },
          { name: "文件夹结构 Folder", description: "自定义文件夹树，支持拖拽整理" },
          {
            name: "标记删除 Delete",
            description: "v1 只做标记删除、不做真删除，给误删留一道安全垫",
          },
          {
            name: "跨模块集成",
            description: "与 AppBuilder、PX 等模块打通，文档自动同步",
          },
        ],
        closing:
          "跨模块集成不是一句“做了 API 对接”就能说清楚的。比如 AppBuilder 里现场检查添加的照片同步到 PR 时，“谁上传的”“谁创建的”这两个字段在跨模块场景下要怎么定义都需要单独澄清——细节多到超出这个板块要展开的范围，只在这里点一句。",
      },
      roles: {
        heading: "这套系统对谁改变了什么",
        intro:
          "上面的协作流程图，展示的是内部角色之间文档怎么流转。但 PR 还要服务两类容易被产品设计忽略的角色——项目之外的人。",
        items: [
          {
            title: "Bauherr（业主/发包方）",
            description:
              "作为外部投资方，Bauherr 没有工程背景，只想清楚地知道进度、成本、风险是否可控，不想被拽进内部协作的细节里。“只给业主看该看的部分”这个诉求，在角色梳理阶段就很明确——也是上面“权限：方向定了，特意不做”这个判断的直接来源：方向已经定了，只是还没上线。",
          },
          {
            title: "Behördenvertreter / Gutachter（监管方/审查人员）",
            description:
              "审查人员最在意的是所有变更能不能追溯，好让审查结论站得住脚。这个需求 PR 已经在用——每份文档的详情面板里都带着一组不可编辑的时间与操作人字段（上传/创建/最后修改的时间和人，以及文档版本）。这套字段设计当初不是专门为审查场景做的，却直接回应了这个角色最核心的诉求。",
          },
        ],
      },
      deepDive: {
        heading: "深度案例主线 —— Upload 可用性测试迭代",
        sheet: "05",
        label: "Case Study",
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
      systemsThinking: {
        heading: "系统性思维佐证",
        intro:
          "好的界面设计，不只是把元素摆对位置，还要经得起“各种屏幕配置组合起来还合理吗”这种追问。",
        panelWidths: {
          paragraph:
            "PR 的工作区可以同时打开文件夹树、文档表格、筛选面板、文件预览——面板数量和组合是可变的。为此我们为每个面板都定义了最小宽度和默认占比：文档列表区（Records area）最小 422px，详情面板（Detail view）最小 400px、默认占工作区三分之一，筛选面板（Filter area）默认占四分之一，文件预览（File viewer）最小 560px。不是“看起来差不多就行”，而是有明确的数值约束，保证任意面板组合下界面都不会挤坏。",
          images: [
            {
              src: "/images/pr-panel-widths-default.png",
              caption: "默认三栏布局：Filter area / Records area / Detail view 的最小宽度与默认占比",
            },
            {
              src: "/images/pr-panel-widths-fileviewer.png",
              caption: "打开文件预览（File viewer）时，各面板的最小宽度约束",
            },
          ],
        },
        structure: {
          paragraph:
            "另一处系统性思维的体现，是文件夹结构的信息架构：Abschnitt（区段）→ House（栋）→ Floor（楼层）的三级树状结构，直接贴合建筑工程项目本身的空间层级，而不是套用一个通用的“文件夹/子文件夹”模板。",
          image: "/images/pr-structure-tree.png",
          caption: "Structure 树状结构：Abschnitt → House → Floor，贴合建筑工程项目的空间层级",
        },
      },
      impact: {
        heading: "影响力与结果",
        items: [
          {
            title: "定性信号",
            description:
              "2026 年 7 月，客户方 Wolfgang Schmid 主动写信给 Herr Ripperda，申请提前使用 PR 的早鸟资格——在产品还处于分阶段交付节奏里的时候，已经有真实客户主动来要。",
          },
          {
            title: "可用性提升",
            description:
              "Upload 流程经过两轮测试迭代，从第一轮多个参与者卡在属性填写和上传流程，到第二轮 4/4 参与者顺利完成核心任务（具体数据见「深度案例主线」板块）。",
          },
        ],
        note: "后续可补充的量化数据（暂不在本轮案例里，留作以后有产品埋点数据后再加）：文档处理/查找时间缩短了多少、上线后的采用率。",
      },
    },
  },
  {
    slug: "jf",
    title: "JF —— 会议纪要",
    category: "产品界面",
    year: "2025-今",
    cover: "/images/jf-hero.png",
    summary:
      "施工/工程监理场景里的用户早就习惯了用 Excel 记会议纪要。JF 不是又一个数字化的 Excel，而是重新设计了一套结构化的记录方式。",
    caseStudy: {
      hero: {
        tagline:
          "JF —— mydocma 生态里为施工/工程监理项目打造的会议纪要（Protokoll）模块。",
        subtitle:
          "这个场景里的人早就习惯了用 Excel 记会议纪要。JF 不是又一个“数字化的 Excel”，而是重新设计了一套结构化的记录方式——这个案例讲的大部分是“为什么这么设计”，而不是“整合了哪些系统”。",
        keyInfo: [
          "团队：产品经理 + 设计师（我）+ 开发，三人小队",
          "平台：Desktop 优先，Tablet/Mobile 陆续跟进",
          "交付：分阶段上线，History 等模块是 v1 之后才追加的",
        ],
        imageCaption:
          "Blockstruktur 插入菜单 —— 层级编号（Erdgeschoss → Ist-Zustand → 纪要点）+ Überschrift / Protokollpunkt / Absatz / Bilder 四种块类型",
      },
      background: {
        heading: "背景与挑战",
        paragraphs: [
          "施工/工程监理项目里，会议纪要是责任和证据的载体：谁提出了什么、谁认领了任务、出问题时能不能查到当时的决定。但记录方式长期以来就是一件事——打开 Excel，按行按列手动记。这不是因为没有更好的工具，而是 Excel 已经变成了这些用户的肌肉记忆。",
          "JF 面对的不是数据迁移问题，是习惯/学习曲线问题——挑战是让用惯 Excel 的人愿意并且能快速上手 JF。设计的着力点不是“怎么把旧数据搬进来”，而是“怎么让新工具的心智模型贴近他们已经熟悉的那一套”。",
        ],
      },
      decisionOverview: {
        heading: "设计决策总览——从习惯到结构",
        paragraphs: [
          "Excel 心智模型本质上是“表格 + 手动编号”：一行一条纪要点，编号、格式都自己排。照搬成通用文档编辑器（像 Notion 那样自由排版）反而会更乱——没有了 Excel“填进格子就有结构”的安全感。",
          "JF 的核心设计赌注：不做通用编辑器，而是把 Excel 用户依赖的“格子感”翻译成一套**受约束的层级块结构**——标题、纪要点、段落、图片各自能挂在什么下面、不能做什么，规则写死在编辑器里。",
        ],
        legacyExample: {
          intro:
            "这是客户此前手动维护多年的真实会议纪要范例——左边是图例与议程规则，右边是实际填写的内容。",
          images: [
            {
              src: "/images/jf-legacy-legend.jpg",
              caption:
                "图例与议程规则——手动维护的层级编号约定（如 1.8.2：章节 / 协议序号 / 子条目序号），以及 I.F.A.（Information / Festlegung / Aufgabe）分类",
            },
            {
              src: "/images/jf-legacy-example.jpg",
              caption:
                "实际填写内容——编号（如 12.56.1）与议程结构一一对应，同一条目按日期滚动追加备注",
            },
          ],
          connection:
            "这套编号规则，客户在 Excel 时代已经手动维护了很多年。JF 没有重新发明一套东西，而是把层级编号交给系统自动生成——插入、删除或调整顺序时不用再手动重新编号，省掉这块最容易出错的手工活。",
        },
        tracksIntro: "这个赌注怎么落地，分三条子线往下讲：",
        tracks: [
          {
            title: "会议与纪要 / 起始页面",
            description:
              "所有会议的入口，也是打开 Editor 的地方。起始页面怎么设计，以及一个会议下的多份纪要之间是什么关系：接着上一份继续写，还是重新开一份。",
          },
          {
            title: "Editor / Blockstruktur 结构化编辑器",
            description:
              "层级块结构本身怎么设计、为什么是这几种块类型和这套嵌套规则。",
          },
          {
            title: "History / 历史记录",
            description:
              "把内容锁进结构化规则之后，随之而来的新问题是“谁改了什么、能不能追溯或恢复”，这条线讲的是怎么解决这个衍生的信任问题。",
          },
        ],
        image: "/images/jf-blockstruktur-hierarchy.png",
        imageCaption:
          "Blockstruktur 层级结构示意图 —— Überschrift 1/2、Protokollpunkt 各自的嵌套规则，以及 Absatz / Horizontale Linie / Bilder 的插入位置",
      },
      meetingRelation: {
        heading: "会议与纪要 —— 从起始页面说起",
        sheet: "03",
        label: "Besprechung",
        intro:
          "会议（Besprechung）是 JF 的起点：先有会议，再在会议下建纪要，点开纪要才进入 Editor。会议和纪要是一对多的关系，起始页面要做的，是会议和纪要越积越多时仍然能一眼找到、随手切换。",
        startPage: {
          heading: "起始页面",
          intro: "几个值得一提的设计点：",
          highlights: [
            {
              title: "列表 + 详情，不跳页",
              description:
                "左边是会议卡片，选中一张，右边直接展开这个会议的详情和全部纪要（Details / Teilnehmer / Protokolle / Optionen），查看、新建纪要都在同一屏完成。",
            },
            {
              title: "卡片随宽度自适应",
              description:
                "会议卡片的列数随可用宽度从 3 列 → 2 列 → 1 列，右侧详情内容在宽面板里居中，不会被拉得松散。",
            },
            {
              title: "纪要进度一眼可见",
              description:
                "每份纪要都是 PDF 缩略图 + 状态标签 + 参会人 / 决定事项 / 任务三个计数。纪要只有草稿和完成两种状态：草稿用彩色，已完成的灰掉，注意力自然落在还没完成的纪要上。",
            },
            {
              title: "会议卡片可以自己“上色”",
              description:
                "每个会议可选颜色和图标，卡片上直接列出开会周期、首份和最近一份纪要的日期、最近的纪要编号，右上角的小角标显示这个会议下有几份纪要。",
            },
          ],
          images: [
            {
              src: "/images/jf-start-layout-1.jpg",
              caption: "起始页面 —— 左侧会议卡片（3 列），右侧选中会议的纪要列表",
            },
            {
              src: "/images/jf-start-layout-2.jpg",
              caption: "可用宽度变窄 —— 卡片变为 2 列",
            },
            {
              src: "/images/jf-start-layout-3.jpg",
              caption: "继续变窄 —— 卡片变为 1 列，右侧内容居中",
            },
            {
              src: "/images/jf-start-icon-picker.jpg",
              caption: "为会议卡片选择颜色（Farbe）和图标（Symbol）",
            },
          ],
          closing: "点开任意一份纪要，就进入下一节的 Editor。",
        },
        relationHeading: "会议与纪要的关系 —— 接着写，还是重新写",
        scenario:
          "新建纪要时，它和上一份是什么关系？以一个周会为例：第一周的纪要是纪要 1，第二周的是纪要 2。纪要 2 有两种写法，对应用户在意的两件不同的事。",
        modes: [
          {
            label: "做法一",
            title: "接着纪要 1 继续写",
            description:
              "不再区分哪次会议写了什么，所有纪要项列在一起，只区分状态：已完成的项变浅并用绿色标记，未完成或处于其他状态的项都照常列出，一视同仁。",
            fit: "适合关心“事项现在是什么状态”的用户——对他们来说，每一项的状态才是最重要的，哪天商讨的、哪天被记录下来的并不重要。",
          },
          {
            label: "做法二",
            title: "新建一份纪要",
            description:
              "纪要 2 是一份全新的纪要，每次会议的内容各自独立。",
            fit: "适合在意“每次会议讲了什么”的用户——需要清楚知道哪一次会议讨论了哪些内容。",
          },
        ],
        switching: {
          heading: "切换方式",
          paragraph:
            "切换的方式很轻：每次新建纪要时，都会出现一个提示框，问要不要接着上一份纪要继续写。两种做法都保留，由用户在新建的当下按需求选择。",
        },
      },
      deepDive: {
        heading: "深潜一 —— Editor / Blockstruktur 结构化编辑器",
        sheet: "04",
        label: "Editor",
        decisionFigStart: 8,
        intro:
          "从会议页点开任意一份纪要，就进入 Editor。层级块结构已经解决了“怎么记录”的问题，但不代表每个能力都会被自然发现。下面这个真实反馈，正好出在这条缝隙里。",
        problem: {
          heading: "问题",
          paragraphs: [
            "JF beta 上线后，客服收集的一手反馈里提到：不少用户并不知道可以通过“段落（Absatz）”把一个纪要点下的任务分给多个负责人——这个能力当时已经在编辑器里，只是没有被发现。",
          ],
        },
        decision: {
          heading: "优化前 → 优化后",
          paragraphs: [
            "问题不是要不要支持多责任人分配——Absatz 本来就是为这件事设计的——而是这个用法藏得太深，正常操作路径里根本看不到它的存在。",
            "这部分的界面优化目前还在设计中，这里先留出前后对比的位置，方案确定后再补上实际截图。",
          ],
          images: [
            { caption: "优化前 —— 待补充" },
            { caption: "优化后 —— 待补充" },
          ],
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
