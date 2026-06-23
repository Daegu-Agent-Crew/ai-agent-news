(function () {
  "use strict";

  var CONFIG = {
    owner: "Daegu-Agent-Crew",
    repo: "ai-agent-news",
    branch: "main",
    recordsDir: "context/records",
    wikiDir: "context/wiki",
    cacheTtl: 60 * 60 * 1000,
    cacheKey: "ai-agent-news-cache-v5",
    settingsKey: "ai-agent-news-settings-v1"
  };

  var SAMPLE_NEWS = [
    {
      slug: "sample-openai-agents-platform",
      title: "OpenAI Agents 플랫폼 업데이트",
      category: "tool",
      source: "OpenAI",
      originalUrl: "https://example.com/openai-agents",
      publishedAt: "2026-06-20",
      collectedAt: "2026-06-21",
      collector: "대구루",
      tags: ["agent", "sdk", "workflow"],
      summary: "에이전트 실행, 관찰성, 도구 연결성을 강화한 플랫폼 업데이트.",
      translation: "OpenAI가 에이전트 워크플로를 더 쉽게 구성할 수 있도록 SDK와 런타임 기능을 확장했다.",
      analysis: "기술적으로는 도구 호출과 상태 관리의 표준화가 핵심이다. 업계적으로는 멀티툴 오케스트레이션 경쟁이 심화된다.",
      excerpt: "Agents platform introduces deeper tool execution and observability.",
      content: "에이전트 운영 관점에서 생산성과 재현성을 높이는 변경이다."
    },
    {
      slug: "sample-anthropic-model-context",
      title: "Anthropic 모델 컨텍스트 운영 전략",
      category: "model",
      source: "Anthropic",
      originalUrl: "https://example.com/anthropic-context",
      publishedAt: "2026-06-18",
      collectedAt: "2026-06-19",
      collector: "레노버",
      tags: ["model", "context", "safety"],
      summary: "장문 컨텍스트 활용과 안전성 균형에 대한 전략 문서.",
      translation: "긴 컨텍스트를 다루는 모델 운영에서 비용, 품질, 안전성의 트레이드오프를 강조했다.",
      analysis: "모델 레이어보다는 제품 레이어에서 컨텍스트 압축과 회수 전략이 더 중요해지고 있다.",
      excerpt: "Long context needs retrieval discipline, not just bigger windows.",
      content: "실전에서는 무한 확장보다 검색과 요약 계층 설계가 중요하다."
    },
    {
      slug: "sample-research-browser-agents",
      title: "브라우저 에이전트 연구 동향",
      category: "research",
      source: "arXiv",
      originalUrl: "https://example.com/browser-agents",
      publishedAt: "2026-06-14",
      collectedAt: "2026-06-15",
      collector: "대구루",
      tags: ["browser", "agent", "research"],
      summary: "웹 환경에서 장기 태스크를 수행하는 에이전트 벤치마크 비교.",
      translation: "브라우저 상호작용에서 계획과 복구 능력이 성능 차이를 만든다는 결과다.",
      analysis: "실서비스 적용 시 DOM 변화 내성과 실패 복구 루프가 가장 큰 분기점이다.",
      excerpt: "Recovery loops matter more than single-step accuracy.",
      content: "브라우저 에이전트는 단발성 정확도보다 누적 실행 안정성이 중요하다."
    }
  ];

  var SAMPLE_WIKI = [
    {
      slug: "frameworks-overview",
      title: "에이전트 프레임워크 개요",
      category: "frameworks",
      summary: "주요 프레임워크의 실행 모델과 강점을 비교한다.",
      relatedCount: 8,
      content: "LangGraph, AutoGen, CrewAI 등의 특성을 정리한 문서."
    },
    {
      slug: "model-ops-patterns",
      title: "모델 운영 패턴",
      category: "models",
      summary: "컨텍스트, 캐시, 라우팅을 포함한 모델 운영 패턴 컴파일.",
      relatedCount: 6,
      content: "성능 대비 비용 최적화에 필요한 운영 전략을 정리."
    },
    {
      slug: "tooling-landscape",
      title: "에이전트 도구 생태계",
      category: "tools",
      summary: "관찰성, 평가, 실행환경 도구를 분야별로 묶은 위키.",
      relatedCount: 5,
      content: "실무 적용에 필요한 도구 체인을 빠르게 파악할 수 있다."
    }
  ];

  var state = {
    route: { page: "home", slug: "" },
    settings: loadSettings(),
    records: [],
    wiki: [],
    recordsLoadedFrom: "sample",
    wikiLoadedFrom: "sample",
    loading: false,
    error: "",
    filters: {
      category: "all",
      collector: "all",
      query: "",
      sort: "latest"
    },
    wikiCategory: "all"
  };

  var app = document.getElementById("app");

  function init() {
    window.addEventListener("hashchange", handleRouteChange);
    app.addEventListener("click", handleClick);
    app.addEventListener("input", handleInput);
    app.addEventListener("change", handleChange);
    handleRouteChange();
    loadData();
  }

  function handleRouteChange() {
    state.route = parseRoute(location.hash);
    render();
  }

  function parseRoute(hash) {
    var raw = (hash || "#/").replace(/^#/, "");
    var clean = raw.replace(/^\/+/, "");
    var parts = clean.split("/").filter(Boolean);

    if (!parts.length) {
      return { page: "home", slug: "" };
    }

    if (parts[0] === "news" && parts[1]) {
      return { page: "news-detail", slug: decodeURIComponent(parts[1]) };
    }

    var pageMap = {
      news: "news",
      wiki: "wiki",
      stats: "stats",
      settings: "settings"
    };

    return {
      page: pageMap[parts[0]] || "home",
      slug: ""
    };
  }

  function loadSettings() {
    try {
      var raw = localStorage.getItem(CONFIG.settingsKey);
      if (!raw) {
        return {
          owner: CONFIG.owner,
          repo: CONFIG.repo,
          branch: CONFIG.branch,
          pat: ""
        };
      }
      return Object.assign(
        {
          owner: CONFIG.owner,
          repo: CONFIG.repo,
          branch: CONFIG.branch,
          pat: ""
        },
        JSON.parse(raw)
      );
    } catch (error) {
      return {
        owner: CONFIG.owner,
        repo: CONFIG.repo,
        branch: CONFIG.branch,
        pat: ""
      };
    }
  }

  function saveSettings() {
    localStorage.setItem(CONFIG.settingsKey, JSON.stringify(state.settings));
  }

  function getHeaders() {
    var headers = {
      Accept: "application/vnd.github+json"
    };
    if (state.settings.pat) {
      headers.Authorization = "Bearer " + state.settings.pat;
    }
    return headers;
  }

  function loadData(forceRefresh) {
    var cached = !forceRefresh && readCache();
    if (cached) {
      state.records = cached.records;
      state.wiki = cached.wiki;
      state.recordsLoadedFrom = cached.recordsLoadedFrom || "cache";
      state.wikiLoadedFrom = cached.wikiLoadedFrom || "cache";
      render();
      return Promise.resolve();
    }

    state.loading = true;
    state.error = "";
    render();

    return Promise.all([
      fetchMarkdownDirectory(CONFIG.recordsDir, "records"),
      fetchMarkdownDirectory(CONFIG.wikiDir, "wiki")
    ])
      .then(function (results) {
        state.records = results[0].items.length ? results[0].items : SAMPLE_NEWS;
        state.wiki = results[1].items.length ? results[1].items : deriveWikiFromRecords(state.records);
        state.recordsLoadedFrom = results[0].source;
        state.wikiLoadedFrom = results[1].source;
        writeCache({
          records: state.records,
          wiki: state.wiki,
          recordsLoadedFrom: state.recordsLoadedFrom,
          wikiLoadedFrom: state.wikiLoadedFrom
        });
      })
      .catch(function (error) {
        state.error = error && error.message ? error.message : "데이터를 불러오지 못했습니다.";
        state.records = SAMPLE_NEWS.slice();
        state.wiki = SAMPLE_WIKI.slice();
        state.recordsLoadedFrom = "sample";
        state.wikiLoadedFrom = "sample";
      })
      .finally(function () {
        state.loading = false;
        render();
      });
  }

  function readCache() {
    try {
      var raw = localStorage.getItem(CONFIG.cacheKey);
      if (!raw) {
        return null;
      }
      var parsed = JSON.parse(raw);
      if (Date.now() - parsed.savedAt > CONFIG.cacheTtl) {
        return null;
      }
      return parsed.payload;
    } catch (error) {
      return null;
    }
  }

  function writeCache(payload) {
    localStorage.setItem(
      CONFIG.cacheKey,
      JSON.stringify({
        savedAt: Date.now(),
        payload: payload
      })
    );
  }

  function clearCache() {
    localStorage.removeItem(CONFIG.cacheKey);
  }

  function fetchMarkdownDirectory(dir, type) {
    var apiUrl = [
      "https://api.github.com/repos",
      encodeURIComponent(state.settings.owner),
      encodeURIComponent(state.settings.repo),
      "contents",
      dir
    ].join("/");

    return fetch(apiUrl + "?ref=" + encodeURIComponent(state.settings.branch), {
      headers: getHeaders()
    })
      .then(checkResponse)
      .then(function (items) {
        if (!Array.isArray(items)) {
          return { items: [], source: "sample" };
        }
        var markdownFiles = items.filter(function (item) {
          return item.type === "file" && /\.md$/i.test(item.name);
        });
        if (!markdownFiles.length) {
          return { items: [], source: "sample" };
        }
        return Promise.all(markdownFiles.map(fetchMarkdownFile)).then(function (docs) {
          var parsed = docs.map(function (doc) {
            return type === "records" ? parseRecordMarkdown(doc) : parseWikiMarkdown(doc);
          });
          return {
            items: parsed.filter(Boolean),
            source: "github"
          };
        });
      });
  }

  function fetchMarkdownFile(file) {
    var url = file.download_url || buildRawUrl(file.path);
    return fetch(url, { headers: getHeaders() })
      .then(checkResponse)
      .then(function (text) {
        return {
          name: file.name,
          path: file.path,
          htmlUrl: file.html_url,
          text: text
        };
      });
  }

  function buildRawUrl(path) {
    return [
      "https://raw.githubusercontent.com",
      encodeURIComponent(state.settings.owner),
      encodeURIComponent(state.settings.repo),
      encodeURIComponent(state.settings.branch),
      path.split("/").map(encodeURIComponent).join("/")
    ].join("/");
  }

  function checkResponse(response) {
    if (!response.ok) {
      if (response.status === 404) {
        return Promise.resolve([]);
      }
      return response.text().then(function (text) {
        throw new Error("GitHub API 오류: " + response.status + " " + (text || response.statusText));
      });
    }
    var contentType = response.headers.get("content-type") || "";
    if (contentType.indexOf("application/json") >= 0) {
      return response.json();
    }
    return response.text();
  }

  function parseRecordMarkdown(doc) {
    var title = extractHeading(doc.text) || stripExtension(doc.name);
    var metadata = parseMetadataBlock(doc.text);
    var sections = splitSections(doc.text);
    var body = stripKnownSections(doc.text);
    var slug = metadata.slug || slugify(title);

    return {
      slug: slug,
      title: title,
      category: normalizeCategory(metadata.category || metadata["카테고리"] || "industry"),
      source: metadata.source || metadata["소스"] || "",
      originalUrl: metadata.original_url || metadata.url || metadata["원문 URL"] || "",
      publishedAt: metadata.published_at || metadata["발행일"] || "",
      collectedAt: metadata.collected_at || metadata["수집일"] || "",
      collector: metadata.collector || metadata["수집자"] || "",
      tags: parseTags(metadata.tags || metadata["태그"] || ""),
      importance: metadata.importance || metadata["중요도"] || "",
      freshness: metadata.freshness || metadata["신선도"] || "fresh",
      summary: sections["핵심 요약"] || sections["요약"] || metadata.summary || "",
      whyImportant: sections["왜 중요한가?"] || "",
      translation: sections["번역"] || sections["한국어 번역"] || "",
      analysis: sections["심층 분석"] || "",
      excerpt: sections["원문 발췌"] || "",
      content: body.trim(),
      htmlUrl: doc.htmlUrl,
      path: doc.path
    };
  }

  function parseWikiMarkdown(doc) {
    var title = extractHeading(doc.text) || stripExtension(doc.name);
    var metadata = parseMetadataBlock(doc.text);
    var sections = splitSections(doc.text);
    var summary = sections["요약"] || firstParagraph(doc.text) || metadata.summary || "";

    return {
      slug: metadata.slug || slugify(title),
      title: title,
      category: normalizeWikiCategory(metadata.category || metadata["카테고리"] || guessWikiCategory(title)),
      summary: summary,
      relatedCount: Number(metadata.related_count || metadata["관련 뉴스 수"] || 0) || 0,
      content: stripKnownSections(doc.text).trim(),
      htmlUrl: doc.htmlUrl
    };
  }

  function parseMetadataBlock(markdown) {
    var blockMatch = markdown.match(/##\s*메타데이터([\s\S]*?)(?=\n##\s+|$)/);
    if (!blockMatch) {
      return {};
    }
    var result = {};
    blockMatch[1]
      .split("\n")
      .map(function (line) {
        return line.trim();
      })
      .forEach(function (line) {
        var cleaned = line.replace(/^[-*]\s*/, "").replace(/\*\*/g, "");
        var pair = cleaned.match(/^([^:：]+)\s*[:：]\s*(.+)$/);
        if (pair) {
          result[toKey(pair[1].trim())] = pair[2].trim();
        }
      });
    return result;
  }

  function splitSections(markdown) {
    var sections = {};
    var matches = markdown.matchAll(/##\s+([^\n]+)\n([\s\S]*?)(?=\n##\s+|$)/g);
    for (var match of matches) {
      sections[match[1].trim()] = match[2].trim();
    }
    return sections;
  }

  function stripKnownSections(markdown) {
    return markdown
      .replace(/^#.*$/m, "")
      .replace(/##\s*메타데이터[\s\S]*?(?=\n##\s+|$)/g, "")
      .replace(/##\s*핵심 요약[\s\S]*?(?=\n##\s+|$)/g, "")
      .replace(/##\s*요약[\s\S]*?(?=\n##\s+|$)/g, "")
      .replace(/##\s*왜 중요한가\?[\s\S]*?(?=\n##\s+|$)/g, "")
      .replace(/##\s*번역[\s\S]*?(?=\n##\s+|$)/g, "")
      .replace(/##\s*한국어 번역[\s\S]*?(?=\n##\s+|$)/g, "")
      .replace(/##\s*심층 분석[\s\S]*?(?=\n##\s+|$)/g, "")
      .replace(/##\s*원문 발췌[\s\S]*?(?=\n##\s+|$)/g, "")
      .trim();
  }

  function extractHeading(markdown) {
    var match = markdown.match(/^#\s+(.+)$/m);
    return match ? match[1].trim() : "";
  }

  function firstParagraph(markdown) {
    var lines = markdown
      .split("\n")
      .map(function (line) {
        return line.trim();
      })
      .filter(Boolean);
    for (var i = 0; i < lines.length; i += 1) {
      if (!/^#/.test(lines[i]) && !/^[-*]\s/.test(lines[i])) {
        return lines[i];
      }
    }
    return "";
  }

  function parseTags(raw) {
    if (Array.isArray(raw)) {
      return raw;
    }
    return String(raw || "")
      .split(/[,\s/]+/)
      .map(function (tag) {
        return tag.trim();
      })
      .filter(Boolean);
  }

  function toKey(label) {
    var map = {
      "원문 URL": "original_url",
      "발행일": "published_at",
      "수집일": "collected_at",
      "수집자": "collector",
      "카테고리": "category",
      "태그": "tags",
      "소스": "source",
      "신선도": "freshness",
      "중요도": "importance",
      "관련 뉴스 수": "related_count"
    };
    return map[label] || label.toLowerCase().replace(/\s+/g, "_");
  }

  function normalizeCategory(value) {
    var v = String(value || "").toLowerCase();
    if (["framework", "frameworks"].indexOf(v) >= 0) return "framework";
    if (["model", "models"].indexOf(v) >= 0) return "model";
    if (["tool", "tools"].indexOf(v) >= 0) return "tool";
    if (["research"].indexOf(v) >= 0) return "research";
    return "industry";
  }

  function normalizeWikiCategory(value) {
    var v = String(value || "").toLowerCase();
    if (v.indexOf("framework") >= 0) return "frameworks";
    if (v.indexOf("model") >= 0) return "models";
    if (v.indexOf("tool") >= 0) return "tools";
    if (v.indexOf("research") >= 0) return "research";
    return "industry";
  }

  function guessWikiCategory(title) {
    return normalizeWikiCategory(title);
  }

  function slugify(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/[^a-z0-9가-힣]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function stripExtension(name) {
    return String(name || "").replace(/\.[^.]+$/, "");
  }

  function deriveWikiFromRecords(records) {
    if (!records.length) {
      return SAMPLE_WIKI.slice();
    }
    var groups = {
      frameworks: [],
      models: [],
      tools: [],
      industry: [],
      research: []
    };

    records.forEach(function (record) {
      var wikiCategory = record.category === "framework" ? "frameworks" : record.category + "s";
      if (!groups[wikiCategory]) {
        wikiCategory = "industry";
      }
      groups[wikiCategory].push(record);
    });

    return Object.keys(groups)
      .filter(function (key) {
        return groups[key].length > 0;
      })
      .map(function (key) {
        return {
          slug: key,
          title: key.toUpperCase(),
          category: key,
          summary: groups[key].slice(0, 2).map(function (item) { return item.title; }).join(" / "),
          relatedCount: groups[key].length,
          content: groups[key].map(function (item) { return "- " + item.title; }).join("\n")
        };
      });
  }

  function getFilteredRecords() {
    return state.records
      .filter(function (record) {
        if (state.filters.category !== "all" && record.category !== state.filters.category) {
          return false;
        }
        if (state.filters.collector !== "all" && record.collector !== state.filters.collector) {
          return false;
        }
        if (!state.filters.query) {
          return true;
        }
        var haystack = [
          record.title,
          record.content,
          record.summary,
          record.analysis,
          (record.tags || []).join(" ")
        ]
          .join(" ")
          .toLowerCase();
        return haystack.indexOf(state.filters.query.toLowerCase()) >= 0;
      })
      .sort(function (a, b) {
        var ad = new Date(a.collectedAt || a.publishedAt || 0).getTime();
        var bd = new Date(b.collectedAt || b.publishedAt || 0).getTime();
        return state.filters.sort === "oldest" ? ad - bd : bd - ad;
      });
  }

  function computeStats() {
    var records = state.records.slice();
    var categories = {
      framework: 0,
      model: 0,
      tool: 0,
      industry: 0,
      research: 0
    };
    var collectors = {};
    var sources = {};
    var months = {};
    var latest = "";

    records.forEach(function (record) {
      categories[record.category] = (categories[record.category] || 0) + 1;
      collectors[record.collector || "미지정"] = (collectors[record.collector || "미지정"] || 0) + 1;
      sources[record.source || "미지정"] = (sources[record.source || "미지정"] || 0) + 1;

      var date = record.collectedAt || record.publishedAt || "";
      if (date) {
        if (!latest || new Date(date) > new Date(latest)) {
          latest = date;
        }
        var month = date.slice(0, 7);
        months[month] = (months[month] || 0) + 1;
      }
    });

    return {
      total: records.length,
      latest: latest,
      categories: categories,
      collectors: collectors,
      sources: sources,
      months: months
    };
  }

  function handleClick(event) {
    var actionEl = event.target.closest("[data-action]");
    if (!actionEl) {
      return;
    }
    var action = actionEl.getAttribute("data-action");

    if (action === "refresh") {
      clearCache();
      loadData(true);
      return;
    }

    if (action === "save-settings") {
      saveSettings();
      clearCache();
      loadData(true);
      return;
    }

    if (action === "clear-pat") {
      state.settings.pat = "";
      saveSettings();
      render();
      return;
    }

    if (action === "set-wiki-category") {
      state.wikiCategory = actionEl.getAttribute("data-value") || "all";
      render();
      return;
    }
  }

  function handleInput(event) {
    var name = event.target.name;
    if (!name) {
      return;
    }

    if (name.indexOf("settings.") === 0) {
      state.settings[name.split(".")[1]] = event.target.value;
      return;
    }

    if (name === "query") {
      state.filters.query = event.target.value;
      render();
    }
  }

  function handleChange(event) {
    var name = event.target.name;
    if (!name) {
      return;
    }

    if (name === "category") {
      state.filters.category = event.target.value;
      render();
      return;
    }

    if (name === "collector") {
      state.filters.collector = event.target.value;
      render();
      return;
    }

    if (name === "sort") {
      state.filters.sort = event.target.value;
      render();
    }
  }

  function render() {
    var stats = computeStats();
    var filtered = getFilteredRecords();
    var currentRecord = state.records.find(function (item) {
      return item.slug === state.route.slug;
    });

    app.innerHTML = [
      '<div class="shell">',
      renderHeader(),
      '<main class="main">',
      state.loading ? '<div class="loading">GitHub API에서 데이터를 불러오는 중입니다...</div>' : "",
      state.error ? '<section class="panel"><strong>샘플 데이터로 표시 중</strong><p class="muted">' + escapeHtml(state.error) + "</p></section>" : "",
      renderPage(stats, filtered, currentRecord),
      '<p class="footer-note">records: ' + escapeHtml(state.recordsLoadedFrom) + " / wiki: " + escapeHtml(state.wikiLoadedFrom) + "</p>",
      "</main>",
      "</div>"
    ].join("");
  }

  function renderHeader() {
    var links = [
      { href: "#/", label: "홈", page: "home" },
      { href: "#/news", label: "뉴스 리스트", page: "news" },
      { href: "#/wiki", label: "위키", page: "wiki" },
      { href: "#/stats", label: "통계", page: "stats" },
      { href: "#/settings", label: "설정", page: "settings" }
    ];

    return [
      '<header class="topbar"><div class="topbar-inner">',
      '<a class="brand" href="#/"><span class="brand-mark">AI</span><span class="brand-copy"><strong>AI 에이전트 뉴스 아카이브</strong><span>GitHub Pages Vanilla JS SPA</span></span></a>',
      '<nav class="nav">',
      links.map(function (link) {
        var active = (state.route.page === link.page || (link.page === "home" && state.route.page === "news-detail")) ? "" : "";
        if (link.page === "home" && state.route.page === "home") active = " active";
        if (link.page !== "home" && state.route.page === link.page) active = " active";
        return '<a class="nav-link' + active + '" href="' + link.href + '">' + link.label + "</a>";
      }).join(""),
      "</nav></div></header>"
    ].join("");
  }

  function renderPage(stats, filtered, currentRecord) {
    switch (state.route.page) {
      case "news":
        return renderNewsList(filtered);
      case "news-detail":
        return renderNewsDetail(currentRecord);
      case "wiki":
        return renderWiki();
      case "stats":
        return renderStats(stats);
      case "settings":
        return renderSettings();
      default:
        return renderHome(stats, filtered);
    }
  }

  function renderHome(stats, filtered) {
    var top = filtered[0];
    return [
      '<section class="hero">',
      '<div class="hero-content">',
      '<span class="hero-eyebrow">AI Agent News Archive</span>',
      '<h1>AI 에이전트<br>뉴스 아카이브</h1>',
      '<p class="hero-lead">GitHub의 <code>context/records/</code>와 <code>context/wiki/</code>를 직접 읽어 와서 뉴스, 위키, 통계를 한 화면에서 관리하는 SPA입니다.</p>',
      '<div class="hero-actions"><a class="button primary" href="#/news">뉴스 보기</a><a class="button" href="#/wiki">위키 보기</a><button class="button" data-action="refresh" type="button">수동 새로고침</button></div>',
      '</div>',
      '<div class="hero-side">',
      '<div class="hero-stats">',
      '<div class="hero-stat"><div class="stat-label">전체 뉴스</div><strong>' + stats.total + '</strong></div>',
      '<div class="hero-stat"><div class="stat-label">최근 수집일</div><strong>' + escapeHtml(formatDate(stats.latest) || "-") + '</strong></div>',
      '<div class="hero-stat"><div class="stat-label">저장소</div><strong>' + escapeHtml(state.settings.owner + "/" + state.settings.repo) + '</strong></div>',
      '</div>',
      '</div></section>',
      top ? '<section class="section"><div class="section-head"><div><h2>최근 주목할 뉴스</h2><p>가장 최근 수집된 뉴스</p></div></div><div class="grid cols-3">' + renderSpotlightCard(top) + filtered.slice(1, 5).map(renderNewsCard).join("") + '</div></section>' : "",
      '<section class="section"><div class="section-head"><div><h2>카테고리 분포</h2><p>빠른 진입점</p></div></div><div class="chips">' + renderCategoryChips(stats.categories) + '</div></section>'
    ].join("");
  }

  function renderSpotlightCard(record) {
    return [
      '<article class="card spotlight-card">',
      '<div class="card-head"><span class="badge ' + escapeAttr(record.category) + '">' + escapeHtml(record.category) + '</span>' + (record.importance ? '<span class="importance-badge"><span class="importance-stars">' + escapeHtml(record.importance) + '</span></span>' : '') + '</div>',
      '<span class="card-kicker">최근 수집</span>',
      '<h3 class="card-title"><a href="#/news/' + encodeURIComponent(record.slug) + '">' + escapeHtml(record.title) + '</a></h3>',
      '<p class="spotlight-copy">' + escapeHtml(record.summary || record.whyImportant || "") + '</p>',
      '<div class="spotlight-footer">',
      '<div class="spotlight-meta"><span>' + escapeHtml(formatDate(record.collectedAt || record.publishedAt) || '-') + '</span><span class="dot"></span><span>' + escapeHtml(record.source || '-') + '</span></div>',
      '<a class="button ghost" href="#/news/' + encodeURIComponent(record.slug) + '">자세히</a>',
      '</div>',
      '</article>'
    ].join('');
  }

  function renderCategoryChips(categories) {
    return Object.keys(categories).map(function (key) {
      return '<a class="chip" href="#/news"><span class="badge ' + key + '">' + key + '</span><strong>' + categories[key] + "</strong></a>";
    }).join("");
  }

  function renderNewsList(filtered) {
    var collectors = uniqueValues(state.records.map(function (item) { return item.collector; }).filter(Boolean));

    return [
      '<section class="section"><div class="section-head"><div><h2>뉴스 리스트</h2><p>카드형 필터링 뷰</p></div><button class="button" data-action="refresh" type="button">새로고침</button></div>',
      '<div class="panel">',
      '<div class="toolbar">',
      '<input class="search-input" type="search" name="query" placeholder="제목, 내용, 태그 검색" value="' + escapeAttr(state.filters.query) + '">',
      '<select class="select" name="category">' + renderOptions([
        ["all", "전체 카테고리"],
        ["framework", "framework"],
        ["model", "model"],
        ["tool", "tool"],
        ["industry", "industry"],
        ["research", "research"]
      ], state.filters.category) + "</select>",
      '<select class="select" name="collector">' + renderOptions([["all", "전체 수집자"]].concat(collectors.map(function (value) {
        return [value, value];
      })), state.filters.collector) + "</select>",
      '<select class="select" name="sort">' + renderOptions([
        ["latest", "최신순"],
        ["oldest", "오래된순"]
      ], state.filters.sort) + "</select>",
      "</div>",
      filtered.length ? '<div class="grid cols-3">' + filtered.map(renderNewsCard).join("") + "</div>" : '<div class="empty">조건에 맞는 뉴스가 없습니다.</div>',
      "</div></section>"
    ].join("");
  }

  function renderNewsCard(record) {
    return [
      '<article class="wiki-card">',
      '<div class="card-head"><span class="badge ' + escapeAttr(record.category) + '">' + escapeHtml(record.category) + '</span>' + (record.importance ? '<span class="importance-badge"><span class="importance-stars">' + escapeHtml(record.importance) + '</span></span>' : '') + '</div>',
      '<h3 class="card-title"><a href="#/news/' + encodeURIComponent(record.slug) + '">' + escapeHtml(record.title) + "</a></h3>",
      '<p class="card-summary">' + escapeHtml(record.summary || record.content || "") + "</p>",
      '<div class="card-meta"><span>' + escapeHtml(formatDate(record.collectedAt || record.publishedAt) || "-") + '</span><span class=\"dot\"></span><span>' + escapeHtml(record.collector || "-") + '</span><span class=\"dot\"></span><span>' + escapeHtml(record.source || "-") + "</span></div>",
      '<div class="chips">' + (record.tags || []).slice(0, 4).map(function (tag) {
        return '<span class="chip">' + escapeHtml(tag) + "</span>";
      }).join("") + "</div>",
      "</article>"
    ].join("");
  }

  function renderNewsDetail(record) {
    if (!record) {
      return '<section class="empty"><h2>뉴스를 찾을 수 없습니다.</h2><p class="muted">슬러그를 확인하거나 리스트로 돌아가세요.</p><a class="button primary" href="#/news">뉴스 리스트</a></section>';
    }

    return [
      '<section class="detail-shell">',
      '<div class="section-head"><div><h2>' + escapeHtml(record.title) + '</h2><p>' + escapeHtml(record.summary || "") + '</p></div><div class="section-actions"><a class="button" href="#/news">목록으로</a>' + (record.originalUrl ? '<a class="button primary" target="_blank" rel="noreferrer" href="' + escapeAttr(record.originalUrl) + '">원문 보기</a>' : "") + '</div></div>',
      '<div class="meta-grid">',
      renderMetaItem("원문 URL", record.originalUrl ? '<a class="external" target="_blank" rel="noreferrer" href="' + escapeAttr(record.originalUrl) + '">' + escapeHtml(record.originalUrl) + "</a>" : "-"),
      renderMetaItem("소스", escapeHtml(record.source || "-")),
      renderMetaItem("발행일", escapeHtml(formatDate(record.publishedAt) || "-")),
      renderMetaItem("수집일", escapeHtml(formatDate(record.collectedAt) || "-")),
      renderMetaItem("수집자", escapeHtml(record.collector || "-")),
      renderMetaItem("카테고리", '<span class="badge ' + escapeAttr(record.category) + '">' + escapeHtml(record.category) + "</span>"),
      renderMetaItem("중요도", escapeHtml(record.importance || "-")),
      renderMetaItem("태그", (record.tags || []).map(function (tag) { return '<span class="chip">' + escapeHtml(tag) + "</span>"; }).join(" ") || "-"),
      "</div>",
      renderContentSection("핵심 요약", record.summary),
      renderContentSection("왜 중요한가?", record.whyImportant),
      renderContentSection("한국어 번역", record.translation),
      renderContentSection("심층 분석", record.analysis),
      renderContentSection("원문 발췌", record.excerpt),
      record.content ? renderContentSection("본문", record.content) : "",
      "</section>"
    ].join("");
  }

  function renderMetaItem(label, valueHtml) {
    return '<div class="meta-item"><small>' + label + "</small><div>" + valueHtml + "</div></div>";
  }

  function renderContentSection(title, content) {
    if (!content) {
      return "";
    }
    return '<section class="detail-section"><h3>' + escapeHtml(title) + '</h3><div class="content-block">' + markdownish(content) + "</div></section>";
  }

  function renderWiki() {
    var items = state.wiki.filter(function (item) {
      return state.wikiCategory === "all" || item.category === state.wikiCategory;
    });
    var tabs = ["all", "frameworks", "models", "tools", "industry", "research"];

    return [
      '<section class="section"><div class="section-head"><div><h2>위키</h2><p>주제별 컴파일 문서</p></div></div>',
      '<div class="tabs">' + tabs.map(function (tab) {
        return '<button type="button" class="tab' + (state.wikiCategory === tab ? ' active' : '') + '" data-action="set-wiki-category" data-value="' + tab + '">' + tab + "</button>";
      }).join("") + "</div>",
      items.length ? '<div class="grid cols-3">' + items.map(function (item) {
        return [
          '<article class="wiki-card">',
          '<div class="card-head"><span class="badge ' + escapeAttr(item.category === "frameworks" ? "framework" : item.category.replace(/s$/, "")) + '">' + escapeHtml(item.category) + "</span></div>",
          '<h3>' + escapeHtml(item.title) + "</h3>",
          '<p class="wiki-card-summary">' + escapeHtml(item.summary || "") + "</p>",
          '<div class="chip"><span>관련 뉴스</span><strong>' + escapeHtml(String(item.relatedCount || 0)) + "</strong></div>",
          item.content ? '<div class="wiki-card-content">' + markdownish(item.content) + "</div>" : "",
          "</article>"
        ].join("");
      }).join("") + "</div>" : '<div class="empty">표시할 위키 문서가 없습니다.</div>',
      "</section>"
    ].join("");
  }

  function renderStats(stats) {
    var monthEntries = Object.keys(stats.months).sort();
    var collectorEntries = toSortedEntries(stats.collectors);
    var sourceEntries = toSortedEntries(stats.sources);
    var total = Math.max(stats.total, 1);
    var c = stats.categories;
    var d1 = (c.framework / total) * 360;
    var d2 = d1 + (c.model / total) * 360;
    var d3 = d2 + (c.tool / total) * 360;
    var d4 = d3 + (c.industry / total) * 360;

    return [
      '<section class="section"><div class="section-head"><div><h2>통계</h2><p>월별 추이와 분포</p></div></div>',
      '<div class="stats-row">',
      renderStatCard("전체 뉴스", stats.total),
      renderStatCard("최근 수집일", formatDate(stats.latest) || "-"),
      renderStatCard("수집자 수", Object.keys(stats.collectors).length),
      renderStatCard("소스 수", Object.keys(stats.sources).length),
      "</div>",
      '<div class="grid cols-2 section">',
      '<section class="panel"><h3>시간별 수집 추이</h3><div class="chart-bars">' + (monthEntries.length ? monthEntries.map(function (month) {
        var value = stats.months[month];
        var width = Math.max(12, (value / total) * 100);
        return '<div class="bar-row"><span>' + escapeHtml(month) + '</span><div class="bar-track"><div class="bar-fill" style="width:' + width + '%"></div></div><strong>' + value + "</strong></div>";
      }).join("") : '<p class="muted">데이터 없음</p>') + "</div></section>",
      '<section class="panel"><h3>카테고리 분포</h3><div class="donut-wrap"><div class="donut-card"><div class="donut" style="--d1:' + d1 + "deg;--d2:" + d2 + "deg;--d3:" + d3 + "deg;--d4:" + d4 + 'deg"></div><div class="legend">' +
        renderLegend("framework", "#1f6feb", c.framework) +
        renderLegend("model", "#8b5cf6", c.model) +
        renderLegend("tool", "#2ea043", c.tool) +
        renderLegend("industry", "#d29922", c.industry) +
        renderLegend("research", "#db6d28", c.research) +
      "</div></div></section>",
      '<section class="panel"><h3>수집자별 기여</h3><div class="chart-bars">' + renderSimpleBars(collectorEntries, total) + "</div></section>",
      '<section class="panel"><h3>소스별 분포</h3><div class="chart-bars">' + renderSimpleBars(sourceEntries, total) + "</div></section>",
      "</div></section>"
    ].join("");
  }

  function renderStatCard(label, value) {
    return '<div class="stat-card"><div class="stat-label">' + escapeHtml(label) + "</div><strong>" + escapeHtml(String(value)) + "</strong></div>";
  }

  function renderLegend(label, color, value) {
    return '<div class="legend-item"><span class="legend-color" style="background:' + color + '"></span><span>' + escapeHtml(label) + "</span><strong>" + value + "</strong></div>";
  }

  function renderSimpleBars(entries, total) {
    if (!entries.length) {
      return '<p class="muted">데이터 없음</p>';
    }
    return entries.map(function (entry) {
      var width = Math.max(12, (entry[1] / Math.max(total, 1)) * 100);
      return '<div class="bar-row"><span>' + escapeHtml(entry[0]) + '</span><div class="bar-track"><div class="bar-fill" style="width:' + width + '%"></div></div><strong>' + entry[1] + "</strong></div>";
    }).join("");
  }

  function renderSettings() {
    return [
      '<section class="section"><div class="section-head"><div><h2>설정</h2><p>GitHub API 연결과 PAT 저장</p></div></div>',
      '<form class="settings-form" onsubmit="return false;">',
      '<div class="settings-block"><label>GitHub Owner</label><input class="text-input" name="settings.owner" value="' + escapeAttr(state.settings.owner) + '"></div>',
      '<div class="settings-block"><label>Repository</label><input class="text-input" name="settings.repo" value="' + escapeAttr(state.settings.repo) + '"></div>',
      '<div class="settings-block"><label>Branch</label><input class="text-input" name="settings.branch" value="' + escapeAttr(state.settings.branch) + '"></div>',
      '<div class="settings-block"><label>Personal Access Token</label><textarea class="textarea" name="settings.pat" placeholder="GitHub API rate limit 또는 private repo 접근용 PAT">' + escapeHtml(state.settings.pat) + '</textarea><p class="hint">PAT는 localStorage에 저장됩니다. 저장 후 캐시를 비우고 다시 fetch합니다.</p></div>',
      '<div class="settings-actions"><button class="button primary" type="button" data-action="save-settings">저장 및 재로딩</button><button class="button" type="button" data-action="clear-pat">PAT 지우기</button><button class="button" type="button" data-action="refresh">캐시 무시 새로고침</button></div>',
      "</form></section>"
    ].join("");
  }

  function renderOptions(options, selected) {
    return options.map(function (option) {
      return '<option value="' + escapeAttr(option[0]) + '"' + (selected === option[0] ? " selected" : "") + ">" + escapeHtml(option[1]) + "</option>";
    }).join("");
  }

  function markdownish(text) {
    var escaped = escapeHtml(text || "");
    var withLists = escaped
      .split("\n")
      .map(function (line) {
        if (/^-\s+/.test(line)) {
          return "<li>" + line.replace(/^-\s+/, "") + "</li>";
        }
        return "<p>" + line + "</p>";
      })
      .join("")
      .replace(/(<li>.*?<\/li>)+/g, function (match) {
        return "<ul>" + match + "</ul>";
      });

    return withLists
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/`(.+?)`/g, "<code>$1</code>");
  }

  function formatDate(value) {
    if (!value) {
      return "";
    }
    var date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return value;
    }
    return [
      date.getFullYear(),
      String(date.getMonth() + 1).padStart(2, "0"),
      String(date.getDate()).padStart(2, "0")
    ].join("-");
  }

  function uniqueValues(items) {
    return Array.from(new Set(items));
  }

  function toSortedEntries(obj) {
    return Object.keys(obj)
      .map(function (key) { return [key, obj[key]]; })
      .sort(function (a, b) { return b[1] - a[1]; });
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function escapeAttr(value) {
    return escapeHtml(value);
  }

  init();
})();
