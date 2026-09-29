import { useEffect, useState } from "react";
import {
  Box,
  Search,
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Terminal,
  Rocket,
  Layers,
  Globe,
  Shield,
  Code2,
  ChevronRight,
  Copy,
  Check,
  Menu,
  X,
  MessageSquare,
  ThumbsUp,
} from "lucide-react";

const pages = [
  {
    id: "introduction",
    group: "开始使用",
    title: "产品介绍",
    icon: BookOpen,
    subtitle: "从第一个想法，到每一个用户。",
    description:
      "Nexus 是面向现代 Web 应用的轻量开发平台。这份文档将带你了解核心概念，完成本地开发，并将应用部署到全球边缘网络。",
  },
  {
    id: "quickstart",
    group: "开始使用",
    title: "快速开始",
    icon: Rocket,
    subtitle: "几分钟，让你的第一个应用运行起来。",
    description:
      "准备好 Node.js 22.12 或更高版本，克隆这个模板仓库，安装依赖并启动开发服务。所有步骤都可以在你的本地终端完成。",
  },
  {
    id: "structure",
    group: "开始使用",
    title: "项目结构",
    icon: Layers,
    subtitle: "简单的结构，为长期维护而设计。",
    description:
      "页面、样式和部署配置各司其职。你可以直接编辑 src/App.jsx 更新内容，不需要额外的内容管理服务。",
  },
  {
    id: "development",
    group: "构建与部署",
    title: "本地开发",
    icon: Code2,
    subtitle: "快速反馈，让每一次修改都顺畅。",
    description:
      "Vite 提供即时的热更新。修改 React 组件或 Tailwind 类名，浏览器会自动反映你的改动。",
  },
  {
    id: "deployment",
    group: "构建与部署",
    title: "部署到 ESA",
    icon: Globe,
    subtitle: "一次提交，把应用带到全球。",
    description:
      "在 ESA 函数和 Pages 中导入你的 Git 仓库，选择 main 分支，使用项目自带的 esa.jsonc 完成构建与静态资源托管。",
  },
  {
    id: "configuration",
    group: "构建与部署",
    title: "环境与配置",
    icon: Terminal,
    subtitle: "用明确的配置，让环境保持一致。",
    description:
      "Vite 通过 import.meta.env 读取构建时环境变量。以 VITE_ 开头的变量会进入浏览器产物，因此不能用于保存密钥或令牌。",
  },
  {
    id: "security",
    group: "进阶指南",
    title: "安全与最佳实践",
    icon: Shield,
    subtitle: "把可靠性，融入日常开发。",
    description:
      "从依赖管理到浏览器端数据处理，保持清晰的边界。这个模板不包含后端服务，也不会收集用户输入或发送遥测数据。",
  },
];
const snippets = {
  quickstart: "npm ci\nnpm run dev",
  structure:
    "src/\n  App.jsx       # 页面与文档内容\n  main.jsx      # React 入口\n  index.css     # Tailwind 入口\nesa.jsonc       # ESA 部署配置\nvite.config.js  # Vite 插件配置",
  development: "npm run dev\n\n# 检查生产构建\nnpm run build\nnpm run preview",
  deployment:
    '{\n  "installCommand": "npm ci",\n  "buildCommand": "npm run build",\n  "assets": {\n    "directory": "./dist",\n    "notFoundStrategy": "singlePageApplication"\n  }\n}',
  configuration:
    "# .env.local（不要提交真实密钥）\nVITE_APP_NAME=Nexus\n\n# React 中读取\nimport.meta.env.VITE_APP_NAME",
  security: "npm ci\nnpm audit\nnpm run build",
  introduction: "npm ci\nnpm run dev\n\n# 准备部署\nnpm run build",
};
function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-[#111827]">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 text-[10px] text-slate-400">
        <span className="flex items-center gap-2">
          <Terminal size={12} /> TERMINAL / CONFIG
        </span>
        <button
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(code);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            } catch {
              setCopied(false);
            }
          }}
          aria-label="复制代码"
          className="flex items-center gap-1.5 hover:text-white"
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          <span aria-live="polite">{copied ? "已复制" : "复制"}</span>
        </button>
      </div>
      <pre className="overflow-auto p-5 font-mono text-xs leading-7 text-emerald-200">
        <code>{code}</code>
      </pre>
    </div>
  );
}
export default function App() {
  const [id, setId] = useState(() => location.hash.slice(1) || "introduction"),
    [query, setQuery] = useState(""),
    [mobile, setMobile] = useState(false),
    [helpful, setHelpful] = useState(false);
  useEffect(() => {
    const update = () => {
      setId(location.hash.slice(1) || "introduction");
      setHelpful(false);
      setMobile(false);
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);
  const page = pages.find((p) => p.id === id) || pages[0],
    index = pages.indexOf(page);
  const results = pages.filter((p) =>
    (p.title + p.description).toLowerCase().includes(query.toLowerCase()),
  );
  const nav = (
    <>
      {["开始使用", "构建与部署", "进阶指南"].map((group) => (
        <div key={group} className="mb-8">
          <p className="mb-3 px-3 text-[10px] font-semibold tracking-wider text-slate-400">
            {group}
          </p>
          <div className="space-y-1">
            {pages
              .filter((p) => p.group === group)
              .map((p) => (
                <a
                  key={p.id}
                  href={"#" + p.id}
                  onClick={() => setMobile(false)}
                  aria-current={p.id === page.id ? "page" : undefined}
                  className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-xs transition ${p.id === page.id ? "bg-indigo-50 font-medium text-indigo-600" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"}`}
                >
                  <p.icon size={15} />
                  {p.title}
                  {p.id === "quickstart" && (
                    <span className="ml-auto rounded bg-indigo-100 px-1.5 py-0.5 text-[8px] text-indigo-600">
                      5 MIN
                    </span>
                  )}
                </a>
              ))}
          </div>
        </div>
      ))}
      <a
        href="https://help.aliyun.com/zh/edge-security-acceleration/esa/user-guide/build-pages"
        target="_blank"
        rel="noreferrer"
        className="mx-3 flex items-center gap-2 border-t border-slate-100 pt-5 text-xs text-slate-400"
      >
        ESA 官方部署文档 <ArrowUpRight size={13} />
      </a>
    </>
  );
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-lg">
        <div className="mx-auto flex h-18 max-w-[1440px] items-center justify-between gap-5 px-5 lg:px-9">
          <a
            href="#introduction"
            className="flex shrink-0 items-center gap-2.5 text-xl font-bold tracking-tight"
          >
            <Box className="text-indigo-600" size={26} />
            nexus
            <span className="ml-1 border-l border-slate-200 pl-3 text-sm font-normal text-slate-400">
              docs
            </span>
          </a>
          <div className="relative hidden w-full max-w-sm sm:block">
            <label className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-400">
              <Search size={15} />
              <input
                type="search"
                aria-label="搜索文档"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Escape" && setQuery("")}
                placeholder="搜索文档…"
                className="w-full bg-transparent text-xs text-slate-700 outline-none"
              />
              <span className="text-[9px]">SEARCH</span>
            </label>
            {query && (
              <div className="absolute top-12 z-50 w-full rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                {results.length ? (
                  results.map((p) => (
                    <a
                      key={p.id}
                      href={"#" + p.id}
                      onClick={() => setQuery("")}
                      className="block rounded-lg p-3 text-sm hover:bg-indigo-50"
                    >
                      <span className="font-medium">{p.title}</span>
                      <p className="mt-1 truncate text-xs text-slate-400">
                        {p.subtitle}
                      </p>
                    </a>
                  ))
                ) : (
                  <p className="p-4 text-xs text-slate-500">
                    没有找到相关文档，试试“部署”或“配置”。
                  </p>
                )}
              </div>
            )}
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-1 text-xs text-slate-500 md:flex"
            >
              GitHub <ArrowUpRight size={13} />
            </a>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] text-emerald-700">
              v1.0
            </span>
            <button
              className="lg:hidden"
              aria-label="打开文档导航"
              aria-expanded={mobile}
              onClick={() => setMobile(!mobile)}
            >
              {mobile ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[240px_minmax(0,1fr)_200px]">
        <aside className="sticky top-18 hidden h-[calc(100vh-72px)] overflow-auto border-r border-slate-100 px-5 py-9 lg:block">
          <div className="mb-8 flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-3 text-xs">
            <Box size={16} className="text-indigo-500" />
            Nexus Platform<span className="ml-auto text-slate-400">⌄</span>
          </div>
          {nav}
        </aside>
        {mobile && (
          <aside className="fixed inset-x-0 top-18 bottom-0 z-20 overflow-auto bg-white p-6 shadow-lg lg:hidden">
            {nav}
            <input
              aria-label="移动端搜索文档"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="搜索文档"
              className="mb-3 w-full rounded-lg border border-slate-200 p-3 text-sm"
            />
            {query &&
              results.map((p) => (
                <a
                  className="block p-3 text-sm text-indigo-600"
                  key={p.id}
                  href={"#" + p.id}
                  onClick={() => {
                    setQuery("");
                    setMobile(false);
                  }}
                >
                  {p.title}
                </a>
              ))}
          </aside>
        )}
        <main className="min-w-0 px-6 py-10 sm:px-10 lg:px-14 lg:py-12">
          <div className="mb-8 flex items-center gap-2 text-[11px] text-slate-400">
            <span>文档</span>
            <ChevronRight size={11} />
            <span>{page.group}</span>
            <ChevronRight size={11} />
            <span className="text-indigo-600">{page.title}</span>
          </div>
          <p className="mb-4 text-xs font-medium text-indigo-600">
            {page.group}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">
            {page.title}
          </h1>
          <p className="mt-5 text-lg text-slate-500">{page.subtitle}</p>
          <p className="mt-6 text-sm leading-8 text-slate-500">
            {page.description}
          </p>
          {page.id === "introduction" && (
            <div className="my-9 grid gap-4 sm:grid-cols-2">
              {[
                [Rocket, "quickstart", "快速开始", "创建并运行你的第一个项目"],
                [Globe, "deployment", "部署到边缘", "把你的应用交付给全球用户"],
              ].map(([Icon, target, t, d]) => (
                <a
                  key={target}
                  href={"#" + target}
                  className="group rounded-xl border border-slate-200 p-5 transition hover:border-indigo-300 hover:bg-indigo-50/30"
                >
                  <Icon
                    className="mb-5 text-indigo-600"
                    size={23}
                    strokeWidth={1.5}
                  />
                  <h2 className="flex items-center justify-between text-sm font-semibold">
                    {t}
                    <ArrowUpRight
                      size={15}
                      className="text-slate-400 group-hover:text-indigo-600"
                    />
                  </h2>
                  <p className="mt-2 text-xs text-slate-500">{d}</p>
                </a>
              ))}
            </div>
          )}
          <div className="my-8 flex gap-3 rounded-lg border border-indigo-100 bg-indigo-50/60 px-4 py-4">
            <BookOpen size={18} className="mt-0.5 shrink-0 text-indigo-500" />
            <div>
              <p className="text-xs font-medium text-indigo-900">
                轻量、开放，随时可以开始
              </p>
              <p className="mt-1.5 text-xs leading-6 text-indigo-800/70">
                本模板使用 React + Vite + Tailwind
                CSS。文档内容保存在源码中，无需数据库或额外服务。
              </p>
            </div>
          </div>
          <section id="guide">
            <h2 className="mb-4 mt-10 text-xl font-semibold">
              {page.id === "introduction"
                ? "从这里开始"
                : page.id === "structure"
                  ? "目录概览"
                  : "操作指南"}
            </h2>
            <p className="mb-5 text-sm leading-7 text-slate-500">
              {page.id === "deployment"
                ? "配置文件放在仓库根目录。导入仓库后，ESA 将根据这些配置安装依赖并构建页面。"
                : page.id === "configuration"
                  ? "以下为公开配置示例。修改环境变量后，需要重新构建才能生效。"
                  : page.id === "structure"
                    ? "保持文件职责清晰，按需要扩展，不必提前增加复杂的目录结构。"
                    : "在项目根目录打开终端，使用以下命令开始。首次安装请保留并使用仓库中的 package-lock.json。"}
            </p>
            <CodeBlock key={page.id} code={snippets[page.id]} />
          </section>
          <section id="concepts" className="mt-10">
            <h2 className="mb-5 text-xl font-semibold">
              {page.id === "security" ? "发布前检查" : "你需要知道的三件事"}
            </h2>
            <div className="space-y-5">
              {[
                [
                  "01",
                  "本地开发与生产构建",
                  "npm run dev 用于开发预览；npm run build 生成 dist 目录，交给 ESA 托管。",
                ],
                [
                  "02",
                  "清晰的配置优先级",
                  "esa.jsonc 声明安装命令、构建命令及静态目录。修改后提交到 Git，触发下一次部署。",
                ],
                [
                  "03",
                  "让内容成为你的",
                  "更新页面文案、品牌信息与链接。模板中的示例内容不代表真实产品或服务承诺。",
                ],
              ].map(([n, t, d]) => (
                <div key={n} className="flex gap-4">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full border border-slate-200 font-mono text-[10px] text-slate-400">
                    {n}
                  </span>
                  <div>
                    <h3 className="text-sm font-medium">{t}</h3>
                    <p className="mt-1.5 text-xs leading-7 text-slate-500">
                      {d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-y border-slate-100 py-5">
            <p className="text-xs text-slate-400">这篇文档对你有帮助吗？</p>
            <button
              aria-pressed={helpful}
              onClick={() => setHelpful(!helpful)}
              className={`flex items-center gap-2 rounded-md border px-3 py-2 text-xs ${helpful ? "border-indigo-200 bg-indigo-50 text-indigo-600" : "border-slate-200 text-slate-500"}`}
            >
              <ThumbsUp size={13} />
              {helpful ? "感谢你的反馈" : "有帮助"}
            </button>
          </div>
          <nav aria-label="文档翻页" className="mt-6 grid grid-cols-2 gap-4">
            {index > 0 ? (
              <a
                href={"#" + pages[index - 1].id}
                className="rounded-xl border border-slate-200 p-4 hover:border-indigo-300"
              >
                <p className="mb-2 text-[10px] text-slate-400">上一篇</p>
                <span className="flex items-center gap-2 text-xs">
                  <ArrowLeft size={13} />
                  {pages[index - 1].title}
                </span>
              </a>
            ) : (
              <div />
            )}
            {index < pages.length - 1 && (
              <a
                href={"#" + pages[index + 1].id}
                className="rounded-xl border border-slate-200 p-4 text-right hover:border-indigo-300"
              >
                <p className="mb-2 text-[10px] text-slate-400">下一篇</p>
                <span className="flex items-center justify-end gap-2 text-xs">
                  {pages[index + 1].title}
                  <ArrowRight size={13} />
                </span>
              </a>
            )}
          </nav>
          <footer className="mt-12 text-[10px] text-slate-400">
            © 2026 Nexus Docs · Built for clarity.
          </footer>
        </main>
        <aside className="sticky top-18 hidden h-fit px-4 py-14 xl:block">
          <p className="mb-5 text-[10px] font-semibold text-slate-400">
            本页内容
          </p>
          <div className="space-y-4 border-l border-slate-200 pl-4 text-xs text-slate-500">
            <button
              className="block text-indigo-600"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {page.title}
            </button>
            <button
              className="block hover:text-indigo-600"
              onClick={() =>
                document
                  .getElementById("guide")
                  .scrollIntoView({ behavior: "smooth", block: "center" })
              }
            >
              操作指南
            </button>
            <button
              className="block hover:text-indigo-600"
              onClick={() =>
                document
                  .getElementById("concepts")
                  .scrollIntoView({ behavior: "smooth", block: "center" })
              }
            >
              核心概念
            </button>
          </div>
          <div className="mt-10 rounded-lg bg-slate-50 p-4">
            <MessageSquare size={18} className="text-slate-400" />
            <p className="mt-3 text-xs font-medium">还需要帮助？</p>
            <a
              href="https://help.aliyun.com/zh/edge-security-acceleration/esa/"
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex items-center gap-1 text-[10px] text-indigo-600"
            >
              查看 ESA 文档 <ArrowUpRight size={11} />
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
