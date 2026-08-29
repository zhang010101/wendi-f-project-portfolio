import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects
    .filter((p) => p.slug === "pr")
    .map((p) => ({ slug: p.slug }));
}

const DIAGRAM_STYLES = `
  .workflow-map-scope {
    --wm-bg: #17140f;
    --wm-surface: #211d17;
    --wm-ink: #ece6da;
    --wm-muted: #a99f8c;
    --wm-line: #423b30;
    --wm-line-strong: #6e6350;
    --wm-shadow: 0 1px 2px rgba(0,0,0,0.3), 0 6px 16px rgba(0,0,0,0.35);

    --wm-pl: #d97c65;
    --wm-bl: #55a89d;
    --wm-arch: #cfa53c;
    --wm-admin: #d68f4f;
    --wm-sub: #7ba869;
    --wm-foreman: #6f92c4;
    --wm-owner: #a488c9;
    --wm-auditor: #8b98a3;

    --wm-tag-new-bg: #2a2419;
    --wm-tag-new-border: #6e6350;

    --wm-status-bg: #16262a;
    --wm-status-border: #3d6b73;
    --wm-status-ink: #8fc4cd;

    background: var(--wm-bg);
    color: var(--wm-ink);
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
  }

  .workflow-map-scope * { box-sizing: border-box; }

  .workflow-map-scope .wm-page { max-width: 1820px; margin: 0 auto; }

  .workflow-map-scope .wm-header { max-width: 720px; margin-bottom: 28px; }

  .workflow-map-scope .eyebrow {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--wm-muted);
  }

  .workflow-map-scope h1 {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: 32px;
    letter-spacing: -0.01em;
    margin: 8px 0 10px;
    text-wrap: balance;
    color: var(--wm-ink);
  }

  .workflow-map-scope .lede {
    font-size: 15px;
    line-height: 1.65;
    color: var(--wm-muted);
    margin: 0 0 14px;
  }

  .workflow-map-scope .lede b { color: var(--wm-ink); font-weight: 600; }

  .workflow-map-scope .legend {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 12px;
    color: var(--wm-muted);
    align-items: center;
  }

  .workflow-map-scope .legend-item { display: flex; align-items: center; gap: 8px; }

  .workflow-map-scope .legend-line { width: 28px; height: 0; border-top: 2px solid var(--wm-line-strong); display: inline-block; }
  .workflow-map-scope .legend-line.dashed { border-top-style: dashed; }

  .workflow-map-scope .legend-swatch {
    width: 12px; height: 12px; border-radius: 3px;
    background: var(--wm-tag-new-bg);
    border: 1px dashed var(--wm-tag-new-border);
  }

  .workflow-map-scope .legend-swatch.status {
    background: var(--wm-status-bg);
    border: 1px solid var(--wm-status-border);
  }

  .workflow-map-scope .canvas-break {
    width: 100vw;
    position: relative;
    left: 50%;
    margin-left: -50vw;
    display: flex;
    justify-content: center;
  }

  .workflow-map-scope .canvas { position: relative; width: 1504px; height: 1220px; flex: none; }

  .workflow-map-scope svg.connectors {
    position: absolute;
    inset: 0;
    width: 1504px;
    height: 1220px;
    pointer-events: none;
  }

  .workflow-map-scope .lane-label {
    position: absolute;
    left: 0;
    width: 210px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .workflow-map-scope .lane-chip { width: 6px; align-self: stretch; border-radius: 3px; flex-shrink: 0; }

  .workflow-map-scope .lane-name {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 600;
    font-size: 15px;
    line-height: 1.3;
  }

  .workflow-map-scope .lane-sub {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    color: var(--wm-muted);
    letter-spacing: 0.04em;
    margin-top: 2px;
  }

  .workflow-map-scope .lane-divider {
    position: absolute;
    left: 0;
    width: 1504px;
    height: 0;
    border-top: 1px dashed var(--wm-line);
  }

  .workflow-map-scope .new-tag {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.08em;
    padding: 2px 6px;
    border-radius: 4px;
    background: var(--wm-tag-new-bg);
    border: 1px solid var(--wm-tag-new-border);
    color: var(--wm-muted);
    white-space: nowrap;
  }

  .workflow-map-scope .status-tag {
    position: absolute;
    top: -9px;
    right: -8px;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 8.5px;
    letter-spacing: 0.04em;
    padding: 2px 6px;
    border-radius: 8px;
    background: var(--wm-status-bg);
    border: 1px solid var(--wm-status-border);
    color: var(--wm-status-ink);
    white-space: nowrap;
    box-shadow: var(--wm-shadow);
  }

  .workflow-map-scope .box {
    position: absolute;
    width: 200px;
    height: 64px;
    background: var(--wm-surface);
    border: 1px solid var(--wm-line);
    border-left: 3px solid var(--wm-line-strong);
    border-radius: 6px;
    box-shadow: var(--wm-shadow);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 6px 12px;
    font-size: 12.5px;
    line-height: 1.35;
    color: var(--wm-ink);
  }

  .workflow-map-scope .box.q {
    border-left: 3px dashed var(--wm-line-strong);
    border-style: dashed;
    color: var(--wm-muted);
    background: transparent;
    box-shadow: none;
  }

  .workflow-map-scope .note {
    position: absolute;
    width: 236px;
    background: var(--wm-tag-new-bg);
    border: 1px dashed var(--wm-tag-new-border);
    border-radius: 6px;
    padding: 10px 12px;
    font-size: 11.5px;
    line-height: 1.5;
    color: var(--wm-muted);
  }

  .workflow-map-scope .note .note-tag {
    display: inline-block;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.08em;
    color: var(--wm-owner);
    margin-bottom: 4px;
  }

  .workflow-map-scope .note b { color: var(--wm-ink); font-weight: 600; }

  .workflow-map-scope .variant-header { max-width: 720px; margin: 72px 0 28px; }

  .workflow-map-scope .variant-header h2 {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: 24px;
    letter-spacing: -0.01em;
    margin: 8px 0 10px;
    color: var(--wm-ink);
  }

  .workflow-map-scope .stage-axis { position: relative; width: 1504px; height: 56px; margin-bottom: 14px; }

  .workflow-map-scope .stage-pill {
    position: absolute;
    top: 0;
    width: 200px;
    height: 40px;
    border-radius: 20px;
    background: var(--wm-status-bg);
    border: 1px solid var(--wm-status-border);
    color: var(--wm-status-ink);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 10px;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.02em;
  }

  .workflow-map-scope .stage-arrow {
    position: absolute;
    top: 8px;
    font-size: 16px;
    color: var(--wm-line-strong);
  }

  /* 探索版（下方带阶段轴的第二张图）专用的更紧凑卡片尺寸和横向布局，只在 .canvas-v2 内生效 */
  .workflow-map-scope .canvas-v2 { width: 1280px; }
  .workflow-map-scope .canvas-v2 svg.connectors { width: 1280px; height: 1048px; }
  .workflow-map-scope .canvas-v2 .lane-divider { width: 1280px; }
  .workflow-map-scope .canvas-v2 .stage-axis { width: 1280px; }
  .workflow-map-scope .canvas-v2 .stage-pill { width: 190px; }

  .workflow-map-scope .canvas-v2 .box {
    width: 190px;
    height: 52px;
    padding: 4px 6px;
    font-size: 12px;
    line-height: 1.28;
  }
`;

// 上面这张图：保持本次改动之前的原始内容/坐标/尺寸不变，
// 唯一改动是把连接线 <svg> 的 viewBox 宽度从 1780 改成 1504（跟画布实际宽度一致），
// 修掉此前箭头因 viewBox/画布宽度不匹配而产生的轻微偏移。
function laneContentOriginal(markerId: string) {
  return `
      <svg class="connectors" viewBox="0 0 1504 1220" role="img" aria-label="8 个角色之间的文档流转路径，虚线为本次新增的连接">
        <defs>
          <marker id="${markerId}" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto" markerUnits="userSpaceOnUse">
            <polygon points="0,0 8,4 0,8" fill="var(--wm-line-strong)" />
          </marker>
        </defs>
        <g fill="none" stroke="var(--wm-line-strong)" stroke-width="1.6">
          <path d="M852,257 L852,303" marker-end="url(#${markerId})" />
          <path d="M706,442 L852,442 L852,483" marker-end="url(#${markerId})" />
          <path d="M706,528 L852,528 L852,515" marker-end="url(#${markerId})" />
          <path d="M952,515 L998,515" marker-end="url(#${markerId})" />
          <path d="M1098,547 L1098,663" marker-end="url(#${markerId})" />
          <path d="M706,442 L730,442 L730,925 L752,925" marker-end="url(#${markerId})" />
          <path d="M1344,837 L1344,893" marker-end="url(#${markerId})" />
        </g>
        <g fill="none" stroke="var(--wm-line-strong)" stroke-width="1.6" stroke-dasharray="2 5" stroke-linecap="round">
          <path d="M852,257 L852,272 L480,272 L480,975 L590,975 L590,993" marker-end="url(#${markerId})" />
          <path d="M1098,727 L1098,745 L960,745 L960,978 L622,978 L622,993" marker-end="url(#${markerId})" />
          <path d="M1098,547 L1098,565 L978,565 L978,1085 L852,1085 L852,1103" marker-end="url(#${markerId})" />
          <path d="M1344,957 L1344,978 L480,978 L480,1085 L606,1085 L606,1103" marker-end="url(#${markerId})" />
          <path d="M1344,257 L1344,280" marker-end="url(#${markerId})" />
          <path d="M1362,370 L1362,390 L975,390 L975,745 L852,745 L852,773" marker-end="url(#${markerId})" />
        </g>
      </svg>

      <div class="lane-divider" style="top:170px;"></div>
      <div class="lane-label" style="top:170px; height:110px;">
        <div class="lane-chip" style="background:var(--wm-pl);"></div>
        <div>
          <div class="lane-name" style="color:var(--wm-pl);">Projektleiter</div>
          <div class="lane-sub">项目负责人 (PL)</div>
        </div>
      </div>
      <div class="box" style="left:260px; top:193px; border-left-color:var(--wm-pl);">权限、设置</div>
      <div class="box" style="left:506px; top:193px; border-left-color:var(--wm-pl);">搜索文档</div>
      <div class="box" style="left:752px; top:193px; border-left-color:var(--wm-pl);">分发文档</div>

      <div class="lane-divider" style="top:280px;"></div>
      <div class="lane-label" style="top:280px; height:110px;">
        <div class="lane-chip" style="background:var(--wm-bl);"></div>
        <div>
          <div class="lane-name" style="color:var(--wm-bl);">Bauleiter</div>
          <div class="lane-sub">工地主管 (BL)</div>
        </div>
      </div>
      <div class="box" style="left:506px; top:303px; border-left-color:var(--wm-bl);">录入专业模块数据</div>
      <div class="box" style="left:752px; top:303px; border-left-color:var(--wm-bl);">审核文档<br>（文档预览）</div>

      <div class="lane-divider" style="top:390px;"></div>
      <div class="lane-label" style="top:390px; height:250px;">
        <div class="lane-chip" style="background:var(--wm-arch);"></div>
        <div>
          <div class="lane-name" style="color:var(--wm-arch);">Architekt / Planer</div>
          <div class="lane-sub">建筑师 / 专业规划师</div>
        </div>
      </div>
      <div class="box" style="left:260px; top:410px; border-left-color:var(--wm-arch);"><span class="status-tag">草稿</span>创建图纸<br>（在专业应用中）</div>
      <div class="box" style="left:506px; top:410px; border-left-color:var(--wm-arch);">上传图纸<br>（在 PR 中）</div>
      <div class="box" style="left:260px; top:496px; border-left-color:var(--wm-arch);"><span class="status-tag">草稿</span>创建文档<br>（在专业应用中）</div>
      <div class="box" style="left:506px; top:496px; border-left-color:var(--wm-arch);">上传文档<br>（在 PR 中）</div>
      <div class="box" style="left:752px; top:483px; border-left-color:var(--wm-arch);"><span class="status-tag">内部处理中</span>批量处理<br>（ZIP · 自动填写）</div>
      <div class="box" style="left:998px; top:483px; border-left-color:var(--wm-arch);"><span class="status-tag">待审批</span>审核新文档版本</div>
      <div class="note" style="left:998px; top:561px;">
        <span class="note-tag">研究补充 · 版本控制</span>
        <b>旧版本自动标记为已取代，不删除</b>，保留可追溯——建筑/基建行业文档控制的标准做法，防止现场用错版本导致返工。
      </div>

      <div class="lane-divider" style="top:640px;"></div>
      <div class="lane-label" style="top:640px; height:110px;">
        <div class="lane-chip" style="background:var(--wm-admin);"></div>
        <div>
          <div class="lane-name" style="color:var(--wm-admin);">Sekretariat</div>
          <div class="lane-sub">秘书处 / 助理（项目管理）</div>
        </div>
      </div>
      <div class="box" style="left:998px; top:663px; border-left-color:var(--wm-admin);"><span class="status-tag">已生效</span>归档文档</div>
      <div class="box" style="left:1244px; top:663px; border-left-color:var(--wm-admin);">维护文件</div>

      <div class="lane-divider" style="top:750px;"></div>
      <div class="lane-label" style="top:750px; height:110px;">
        <div class="lane-chip" style="background:var(--wm-sub);"></div>
        <div>
          <div class="lane-name" style="color:var(--wm-sub);">Subunternehmer</div>
          <div class="lane-sub">分包商 / 承包商</div>
        </div>
      </div>
      <div class="box" style="left:752px; top:773px; border-left-color:var(--wm-sub);">接收任务</div>
      <div class="box" style="left:998px; top:773px; border-left-color:var(--wm-sub);">上传文档</div>
      <div class="box" style="left:1244px; top:773px; border-left-color:var(--wm-sub);">分发文档</div>

      <div class="lane-divider" style="top:860px;"></div>
      <div class="lane-label" style="top:860px; height:110px;">
        <div class="lane-chip" style="background:var(--wm-foreman);"></div>
        <div>
          <div class="lane-name" style="color:var(--wm-foreman);">Polier</div>
          <div class="lane-sub">工长</div>
        </div>
      </div>
      <div class="box" style="left:752px; top:893px; border-left-color:var(--wm-foreman);">打开图纸</div>
      <div class="box" style="left:1244px; top:893px; border-left-color:var(--wm-foreman);">记录在专业模块中</div>

      <div class="lane-divider" style="top:970px;"></div>
      <div class="lane-label" style="top:970px; height:110px;">
        <div class="lane-chip" style="background:var(--wm-owner);"></div>
        <div>
          <div class="lane-name" style="color:var(--wm-owner);">Bauherr <span class="new-tag">补充</span></div>
          <div class="lane-sub">业主 / 发包方</div>
        </div>
      </div>
      <div class="box" style="left:506px; top:993px; border-left-color:var(--wm-owner);">接收概览通知</div>
      <div class="box" style="left:752px; top:993px; border-left-color:var(--wm-owner);">查看项目全局概览<br>进度 · 成本 · 风险（只读）</div>
      <div class="box" style="left:998px; top:993px; border-left-color:var(--wm-owner);">审批文件<br>签署往来审批件</div>

      <div class="lane-divider" style="top:1080px;"></div>
      <div class="lane-label" style="top:1080px; height:110px;">
        <div class="lane-chip" style="background:var(--wm-auditor);"></div>
        <div>
          <div class="lane-name" style="color:var(--wm-auditor);">Behördenvertreter <span class="new-tag">补充</span></div>
          <div class="lane-sub">监管方 / 审查人员</div>
        </div>
      </div>
      <div class="box" style="left:506px; top:1103px; border-left-color:var(--wm-auditor);">访问相关数据<br>只读 · 按项目过滤</div>
      <div class="box" style="left:752px; top:1103px; border-left-color:var(--wm-auditor);">查看审计记录<br>时间 · 操作人 · 版本历史</div>
      <div class="box" style="left:998px; top:1103px; border-left-color:var(--wm-auditor);"><span class="status-tag">已批准 / 驳回</span>审核合规性并给出结论<br>批准 · 附条件批准 · 驳回</div>
      <div class="lane-divider" style="top:1190px;"></div>

      <div class="box q" style="left:1244px; top:193px;">谁可以创建任务？</div>
      <div class="note" style="left:1244px; top:280px;">
        <span class="note-tag">研究补充 · RFI 路由</span>
        现场角色（BL / 工长 / 分包商）发起 → 路由给建筑师 / PL 处理 → <b>结果记录留痕</b>。参考行业 RFI（Request for Information）模式：问题统一路由给对应审核人，全程可追踪、超时自动升级。
      </div>
`;
}

// 下面「方案二 · 探索版」：这次补齐了原始功能图里缺失的内容（PL 审批链、BL 日志质检、
// Architekt 图纸会审/设计变更通知、Sekretariat 收发文登记、分包商报审竣工、Polier 日志巡检整改），
// 并把原图独立的「监理工程师」泳道并入 Behördenvertreter 作为补充行，同时把卡片做得更紧凑。
function laneContentV2(markerId: string) {
  return `
      <svg class="connectors" viewBox="0 0 1280 1048" role="img" aria-label="8 个角色之间的文档流转路径，虚线为本次新增的连接">
        <defs>
          <marker id="${markerId}" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto" markerUnits="userSpaceOnUse">
            <polygon points="0,0 8,4 0,8" fill="var(--wm-line-strong)" />
          </marker>
        </defs>
        <g fill="none" stroke="var(--wm-line-strong)" stroke-width="1.6">
          <path d="M741,150 L741,186" marker-end="url(#${markerId})" />
          <path d="M626,300 L741,300 L741,406" marker-end="url(#${markerId})" />
          <path d="M626,366 L741,366 L741,450" marker-end="url(#${markerId})" />
          <path d="M836,432 L856,432" marker-end="url(#${markerId})" />
          <path d="M951,458 L951,560" marker-end="url(#${markerId})" />
          <path d="M626,300 L636,300 L636,762 L646,762" marker-end="url(#${markerId})" />
          <path d="M741,700 L741,720 L1161,720 L1161,736" marker-end="url(#${markerId})" />
        </g>
        <g fill="none" stroke="var(--wm-line-strong)" stroke-width="1.6" stroke-dasharray="2 5" stroke-linecap="round">
          <path d="M741,150 L741,160 L426,160 L426,824 L511,824" marker-end="url(#${markerId})" />
          <path d="M951,612 L951,622 L846,622 L846,824 L551,824" marker-end="url(#${markerId})" />
          <path d="M951,432 L951,452 L854,452 L854,970 L741,970 L741,978" marker-end="url(#${markerId})" />
          <path d="M1161,788 L1161,798 L426,798 L426,970 L531,970 L531,978" marker-end="url(#${markerId})" />
        </g>
      </svg>

      <div class="box q" style="left:646px; top:10px;">谁可以创建任务？</div>

      <div class="lane-divider" style="top:80px;"></div>
      <div class="lane-label" style="top:80px; height:88px;">
        <div class="lane-chip" style="background:var(--wm-pl);"></div>
        <div>
          <div class="lane-name" style="color:var(--wm-pl);">Projektleiter</div>
          <div class="lane-sub">项目负责人 (PL)</div>
        </div>
      </div>
      <div class="box" style="left:226px; top:98px; border-left-color:var(--wm-pl);">权限、设置</div>
      <div class="box" style="left:436px; top:98px; border-left-color:var(--wm-pl);">搜索文档</div>
      <div class="box" style="left:646px; top:98px; border-left-color:var(--wm-pl);">分发文档</div>
      <div class="box" style="left:856px; top:98px; border-left-color:var(--wm-pl);">审批文档</div>
      <div class="box" style="left:1066px; top:98px; border-left-color:var(--wm-pl);">发起变更令</div>

      <div class="lane-divider" style="top:168px;"></div>
      <div class="lane-label" style="top:168px; height:88px;">
        <div class="lane-chip" style="background:var(--wm-bl);"></div>
        <div>
          <div class="lane-name" style="color:var(--wm-bl);">Bauleiter</div>
          <div class="lane-sub">工地主管 (BL)</div>
        </div>
      </div>
      <div class="box" style="left:436px; top:186px; border-left-color:var(--wm-bl);">录入专业模块数据</div>
      <div class="box" style="left:646px; top:186px; border-left-color:var(--wm-bl);">审核文档<br>（文档预览）</div>
      <div class="box" style="left:856px; top:186px; border-left-color:var(--wm-bl);">编写施工日志</div>
      <div class="box" style="left:1066px; top:186px; border-left-color:var(--wm-bl);">质量检查报告</div>

      <div class="lane-divider" style="top:256px;"></div>
      <div class="lane-label" style="top:256px; height:286px;">
        <div class="lane-chip" style="background:var(--wm-arch);"></div>
        <div>
          <div class="lane-name" style="color:var(--wm-arch);">Architekt / Planer</div>
          <div class="lane-sub">建筑师 / 专业规划师</div>
        </div>
      </div>
      <div class="box" style="left:226px; top:274px; border-left-color:var(--wm-arch);"><span class="status-tag">草稿</span>创建图纸<br>（在专业应用中）</div>
      <div class="box" style="left:436px; top:274px; border-left-color:var(--wm-arch);">上传图纸<br>（在 PR 中）</div>
      <div class="box" style="left:226px; top:340px; border-left-color:var(--wm-arch);"><span class="status-tag">草稿</span>创建文档<br>（在专业应用中）</div>
      <div class="box" style="left:436px; top:340px; border-left-color:var(--wm-arch);">上传文档<br>（在 PR 中）</div>
      <div class="box" style="left:646px; top:406px; border-left-color:var(--wm-arch);"><span class="status-tag">内部处理中</span>批量处理<br>（ZIP · 自动填写）</div>
      <div class="box" style="left:856px; top:406px; border-left-color:var(--wm-arch);"><span class="status-tag">待审批</span>审核新文档版本</div>
      <div class="box" style="left:1066px; top:406px; border-left-color:var(--wm-arch);">图纸会审</div>
      <div class="box" style="left:1066px; top:472px; border-left-color:var(--wm-arch);">设计变更通知</div>

      <div class="lane-divider" style="top:542px;"></div>
      <div class="lane-label" style="top:542px; height:88px;">
        <div class="lane-chip" style="background:var(--wm-admin);"></div>
        <div>
          <div class="lane-name" style="color:var(--wm-admin);">Sekretariat</div>
          <div class="lane-sub">秘书处 / 助理（项目管理）</div>
        </div>
      </div>
      <div class="box" style="left:226px; top:560px; border-left-color:var(--wm-admin);">文档编号登记</div>
      <div class="box" style="left:436px; top:560px; border-left-color:var(--wm-admin);">收发文登记</div>
      <div class="box" style="left:646px; top:560px; border-left-color:var(--wm-admin);">合规性检查</div>
      <div class="box" style="left:856px; top:560px; border-left-color:var(--wm-admin);"><span class="status-tag">已生效</span>归档文档</div>
      <div class="box" style="left:1066px; top:560px; border-left-color:var(--wm-admin);">维护文件</div>

      <div class="lane-divider" style="top:630px;"></div>
      <div class="lane-label" style="top:630px; height:88px;">
        <div class="lane-chip" style="background:var(--wm-sub);"></div>
        <div>
          <div class="lane-name" style="color:var(--wm-sub);">Subunternehmer</div>
          <div class="lane-sub">分包商 / 承包商</div>
        </div>
      </div>
      <div class="box" style="left:226px; top:648px; border-left-color:var(--wm-sub);">接收任务</div>
      <div class="box" style="left:436px; top:648px; border-left-color:var(--wm-sub);">上传文档</div>
      <div class="box" style="left:646px; top:648px; border-left-color:var(--wm-sub);">分发文档</div>
      <div class="box" style="left:856px; top:648px; border-left-color:var(--wm-sub);">提交材料报审</div>
      <div class="box" style="left:1066px; top:648px; border-left-color:var(--wm-sub);">编写竣工资料</div>

      <div class="lane-divider" style="top:718px;"></div>
      <div class="lane-label" style="top:718px; height:88px;">
        <div class="lane-chip" style="background:var(--wm-foreman);"></div>
        <div>
          <div class="lane-name" style="color:var(--wm-foreman);">Polier</div>
          <div class="lane-sub">工长</div>
        </div>
      </div>
      <div class="box" style="left:226px; top:736px; border-left-color:var(--wm-foreman);">填写施工日志</div>
      <div class="box" style="left:436px; top:736px; border-left-color:var(--wm-foreman);">质量巡检记录</div>
      <div class="box" style="left:646px; top:736px; border-left-color:var(--wm-foreman);">打开图纸</div>
      <div class="box" style="left:856px; top:736px; border-left-color:var(--wm-foreman);">整改回复</div>
      <div class="box" style="left:1066px; top:736px; border-left-color:var(--wm-foreman);">记录在专业模块中</div>

      <div class="lane-divider" style="top:806px;"></div>
      <div class="lane-label" style="top:806px; height:88px;">
        <div class="lane-chip" style="background:var(--wm-owner);"></div>
        <div>
          <div class="lane-name" style="color:var(--wm-owner);">Bauherr <span class="new-tag">补充</span></div>
          <div class="lane-sub">业主 / 发包方</div>
        </div>
      </div>
      <div class="box" style="left:436px; top:824px; border-left-color:var(--wm-owner);">接收概览通知</div>
      <div class="box" style="left:646px; top:824px; border-left-color:var(--wm-owner);">查看项目全局概览<br>进度 · 成本 · 风险（只读）</div>
      <div class="box" style="left:856px; top:824px; border-left-color:var(--wm-owner);">审批文件<br>签署往来审批件</div>

      <div class="lane-divider" style="top:894px;"></div>
      <div class="lane-label" style="top:894px; height:154px;">
        <div class="lane-chip" style="background:var(--wm-auditor);"></div>
        <div>
          <div class="lane-name" style="color:var(--wm-auditor);">Behördenvertreter <span class="new-tag">补充</span></div>
          <div class="lane-sub">监管方 / 审查人员</div>
        </div>
      </div>
      <div class="new-tag" style="position:absolute; left:226px; top:896px;">监理工程师职能并入本泳道 ↓</div>
      <div class="box" style="left:226px; top:912px; border-left-color:var(--wm-auditor);">审核施工方案</div>
      <div class="box" style="left:436px; top:912px; border-left-color:var(--wm-auditor);">签发监理通知</div>
      <div class="box" style="left:646px; top:912px; border-left-color:var(--wm-auditor);">质量验收</div>
      <div class="box" style="left:856px; top:912px; border-left-color:var(--wm-auditor);">旁站记录</div>
      <div class="box" style="left:1066px; top:912px; border-left-color:var(--wm-auditor);">审核工程量</div>
      <div class="box" style="left:436px; top:978px; border-left-color:var(--wm-auditor);">访问相关数据<br>只读 · 按项目过滤</div>
      <div class="box" style="left:646px; top:978px; border-left-color:var(--wm-auditor);">查看审计记录<br>时间 · 操作人 · 版本历史</div>
      <div class="box" style="left:856px; top:978px; border-left-color:var(--wm-auditor);"><span class="status-tag">已批准 / 驳回</span>审核合规性并给出结论<br>批准 · 附条件批准 · 驳回</div>
      <div class="lane-divider" style="top:1048px;"></div>
`;
}

const STAGE_AXIS = `
    <div class="stage-axis">
      <div class="stage-pill" style="left:226px;">01 · 创建 / 起草</div>
      <span class="stage-arrow" style="left:426px;">→</span>
      <div class="stage-pill" style="left:436px;">02 · 上传 / 内部处理</div>
      <span class="stage-arrow" style="left:636px;">→</span>
      <div class="stage-pill" style="left:646px;">03 · 共享 / 协调</div>
      <span class="stage-arrow" style="left:846px;">→</span>
      <div class="stage-pill" style="left:856px;">04 · 审核 / 放行</div>
      <span class="stage-arrow" style="left:1056px;">→</span>
      <div class="stage-pill" style="left:1066px;">05 · 生效 / 归档 / 现场使用</div>
    </div>
`;

const DIAGRAM_BODY = `
<div class="wm-page">
  <header class="wm-header">
    <p class="eyebrow">PR · Document Workflow</p>
    <h1>角色协作全景图</h1>
    <p class="lede">
      在原有的 6 条内部角色泳道基础上，补充了 <b>Bauherr（业主/发包方）</b>与
      <b>Behördenvertreter / Gutachter（监管方/审查人员）</b>两条外部角色泳道，
      并结合建筑/基建行业文档管理的标准实践，为两处流程缺口加了研究支撑的注释。
      泳道结构与原图保持一致，仅补充内容与视觉呈现做了重新设计。
      Behördenvertreter 补上了 Personas 原文里明确写着的审批权（此前误画成纯只读）；
      另外用一组状态标签串起了几个角色分别提到的版本/状态诉求，不再各说各话。
    </p>
    <div class="legend">
      <span class="legend-item"><span class="legend-line"></span>原有流程</span>
      <span class="legend-item"><span class="legend-line dashed"></span>本次研究新增</span>
      <span class="legend-item"><span class="legend-swatch"></span>补充注释</span>
      <span class="legend-item"><span class="legend-swatch status"></span>文档状态标签</span>
    </div>
  </header>

  <div class="canvas-break">
    <div class="canvas">
      ${laneContentOriginal("wm-arrow")}
    </div>
  </div>

  <div class="variant-header">
    <p class="eyebrow">方案二 · 探索版</p>
    <h2>加入阶段参考轴</h2>
    <p class="lede">
      上面这张图保持不变。这一版尝试吸收 10.2（Codex）那张图的思路——在顶部加一条阶段参考轴，
      把 PL"数据碎片化/版本追踪"、Architekt"Versionierung 挑战"、Gutachter"Nachverfolgbarkeit von Änderungen"
      这几条分散在不同角色 persona 里的诉求串成一条线。这条轴是<b>近似对齐</b>：
      同一列下面的卡片大致处在同一个阶段，但不是每条泳道的每一步都严格卡在对应列上——
      比如"搜索文档""打开图纸"这类查找/使用类动作本身就不完全属于"创建→归档"这条流水线，
      放在最贴近的阶段列，不代表精确对应。标注出这一点，是不想让"轴"看起来比它实际能保证的更精确。
      这一版还额外做了两件事：对照原始功能图补齐了此前遗漏的内容——PL 的审批链（审批文档/发起变更令）、
      BL 的日志与质检、Architekt 的图纸会审/设计变更通知、Sekretariat 的收发文登记、
      分包商的报审竣工与工长的日志巡检整改；原图独立的「监理工程师」泳道，因其职能与
      Behördenvertreter 的现场质检/放行高度重叠，合并作为该泳道的补充行，而非另开一条泳道。
      同时把卡片和间距做得更紧凑，容纳这些新增内容的同时不让图变得更臃肿。
    </p>
  </div>

  <div class="canvas-break">
    <div class="canvas canvas-v2" style="height:1104px;">
      <div style="position:absolute; top:0; left:0; width:1280px;">
        ${STAGE_AXIS}
      </div>
      <div style="position:absolute; top:56px; left:0; width:1280px; height:1048px;">
        ${laneContentV2("wm-arrow2")}
      </div>
    </div>
  </div>
</div>
`;

export default async function WorkflowMapPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project || slug !== "pr") notFound();

  return (
    <div className="workflow-map-scope">
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');" +
            DIAGRAM_STYLES,
        }}
      />
      <Header />
      <main className="content-wrap py-24 md:py-36">
        <Link
          href={`/work/${slug}`}
          className="font-mono text-sm hover:underline"
          style={{ color: "var(--wm-owner)" }}
        >
          ← 返回案例
        </Link>
        <div className="mt-8" dangerouslySetInnerHTML={{ __html: DIAGRAM_BODY }} />
      </main>
      <Footer />
    </div>
  );
}
