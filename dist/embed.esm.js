var i={site:"cryptologo",name:"CryptoLogo",domain:"crypto-logo.com",accent:"#F59E0B",attribute:"data-cryptologo",apiBase:"https://crypto-logo.com/api/v1/",searchPath:"/search/",entityName:"Coins",entitySlug:"coins"};var $="cryptologo_embed_";function P(e){try{let t=sessionStorage.getItem($+e);if(!t)return null;let r=JSON.parse(t);return Date.now()-r.ts>3e5?(sessionStorage.removeItem($+e),null):r.data}catch{return null}}function j(e,t){try{let r={data:t,ts:Date.now()};sessionStorage.setItem($+e,JSON.stringify(r))}catch{}}async function f(e,t){let r=t,a=P(r);if(a)return a;let n=e.endsWith("/")?e+t:e+"/"+t,s=await fetch(n,{headers:{Accept:"application/json"}});if(!s.ok)throw new Error(`API error: ${s.status} ${s.statusText}`);let p=await s.json();return j(r,p),p}function b(e){return e!=="auto"?e:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function x(e){if(typeof window>"u"||!window.matchMedia)return;window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",r=>{e(r.matches?"dark":"light")})}function m(e){return`
    :host { display: inline-block; max-width: 100%; }

    /* \u2500\u2500 Theme variables \u2500\u2500 */
    .cryptologo-widget[data-theme="light"] {
      --bg: #ffffff; --text: #1e293b; --border: #e2e8f0;
      --muted: #64748b; --surface: #f8fafc; --accent: ${e};
      --accent-light: ${e}1a; --link: ${e};
    }
    .cryptologo-widget[data-theme="dark"] {
      --bg: #1a1a1a; --text: #f3f4f6; --border: #374151;
      --muted: #9ca3af; --surface: #111827; --accent: ${e};
      --accent-light: ${e}33; --link: #fbbf24;
    }
    .cryptologo-widget[data-theme="sepia"] {
      --bg: #f5f0e8; --text: #3d3529; --border: #d4c5a9;
      --muted: #8b7d6b; --surface: #ede8df; --accent: ${e};
      --accent-light: ${e}1a; --link: #b45309;
    }

    /* \u2500\u2500 Size variants \u2500\u2500 */
    .cryptologo-widget[data-size="compact"] { max-width: 280px; font-size: 13px; }
    .cryptologo-widget[data-size="compact"] .cryptologo-body { padding: 12px; }
    .cryptologo-widget[data-size="default"] { max-width: 420px; font-size: 14px; }
    .cryptologo-widget[data-size="default"] .cryptologo-body { padding: 16px; }
    .cryptologo-widget[data-size="large"] { max-width: 720px; font-size: 15px; }
    .cryptologo-widget[data-size="large"] .cryptologo-body { padding: 20px; }

    /* \u2500\u2500 Base layout \u2500\u2500 */
    .cryptologo-widget {
      font-family: system-ui, -apple-system, sans-serif;
      color: var(--text); background: var(--bg);
      border: 1px solid var(--border); border-radius: 8px;
      overflow: hidden; line-height: 1.5; width: 100%;
      box-sizing: border-box;
    }
    .cryptologo-widget * { box-sizing: border-box; }

    .cryptologo-body { padding: 16px; }

    /* \u2500\u2500 Common elements \u2500\u2500 */
    .cryptologo-title {
      font-weight: 600; font-size: 1.1em; margin: 0 0 4px;
      color: var(--text); display: flex; align-items: center; gap: 8px;
    }
    .cryptologo-subtitle { color: var(--muted); font-size: 0.85em; margin: 0 0 8px; }
    .cryptologo-desc { color: var(--text); font-size: 0.9em; margin: 8px 0; line-height: 1.6; }
    .cryptologo-badge {
      display: inline-block; padding: 2px 8px; border-radius: 4px;
      font-size: 0.75em; font-weight: 600; letter-spacing: 0.03em;
      background: var(--accent-light); color: var(--accent);
    }
    .cryptologo-link {
      color: var(--link); text-decoration: none; font-size: 0.85em;
      display: inline-flex; align-items: center; gap: 4px;
    }
    .cryptologo-link:hover { text-decoration: underline; }

    /* \u2500\u2500 Powered by \u2500\u2500 */
    .cryptologo-powered {
      padding: 8px 16px; border-top: 1px solid var(--border);
      text-align: right; font-size: 0.7em;
    }
    .cryptologo-powered a {
      color: var(--muted); text-decoration: none;
    }
    .cryptologo-powered a:hover { text-decoration: underline; }

    /* \u2500\u2500 Loading skeleton \u2500\u2500 */
    .cryptologo-loading { padding: 16px; }
    .cryptologo-skeleton {
      background: linear-gradient(90deg, var(--surface) 25%, var(--border) 50%, var(--surface) 75%);
      background-size: 200% 100%;
      animation: cryptologo-shimmer 1.5s infinite;
      border-radius: 4px;
    }
    @keyframes cryptologo-shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }

    /* \u2500\u2500 Error \u2500\u2500 */
    .cryptologo-error {
      padding: 16px; color: #ef4444; font-size: 0.85em; text-align: center;
    }

    /* \u2500\u2500 Logo image \u2500\u2500 */
    .cryptologo-logo {
      width: 48px; height: 48px; border-radius: 50%;
      object-fit: contain; flex-shrink: 0;
      background: var(--surface); border: 1px solid var(--border);
    }

    /* \u2500\u2500 Copy button \u2500\u2500 */
    .cryptologo-copy-btn {
      background: none; border: 1px solid var(--border); border-radius: 4px;
      padding: 4px 6px; cursor: pointer; color: var(--muted);
      display: inline-flex; align-items: center;
    }
    .cryptologo-copy-btn:hover { background: var(--surface); color: var(--text); }

    /* \u2500\u2500 Header with accent bar \u2500\u2500 */
    .cryptologo-header {
      display: flex; align-items: center; gap: 12px;
    }
    .cryptologo-header-info { flex: 1; min-width: 0; }

    /* \u2500\u2500 Inline badge (for logo-badge widget) \u2500\u2500 */
    .cryptologo-inline-badge {
      display: inline-flex; align-items: center; gap: 4px;
      font-size: inherit; line-height: inherit;
    }
    .cryptologo-inline-badge img {
      width: 16px; height: 16px; border-radius: 50%;
      vertical-align: middle;
    }

    /* \u2500\u2500 Search \u2500\u2500 */
    .cryptologo-search-form {
      display: flex; gap: 8px;
    }
    .cryptologo-search-input {
      flex: 1; padding: 8px 12px; border: 1px solid var(--border);
      border-radius: 6px; font-size: 0.9em; background: var(--surface);
      color: var(--text); outline: none;
    }
    .cryptologo-search-input:focus { border-color: var(--accent); }
    .cryptologo-search-btn {
      padding: 8px 16px; border: none; border-radius: 6px;
      background: var(--accent); color: #fff; font-weight: 600;
      cursor: pointer; font-size: 0.9em;
    }
    .cryptologo-search-btn:hover { opacity: 0.9; }
  `}function w(e){return`
    /* Modern style: accent top bar + subtle shadow */
    .cryptologo-widget.cryptologo-style-modern {
      box-shadow: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06);
      border-top: 3px solid ${e};
    }
    .cryptologo-style-modern .cryptologo-title {
      font-size: 1.15em;
    }
    .cryptologo-style-modern .cryptologo-logo {
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    }
    .cryptologo-style-modern .cryptologo-badge {
      border-radius: 12px;
      padding: 2px 10px;
    }
  `}function v(){return`
    /* Minimal style: flat, no shadow, thin border */
    .cryptologo-widget.cryptologo-style-minimal {
      box-shadow: none;
      border-radius: 6px;
    }
    .cryptologo-style-minimal .cryptologo-title {
      font-size: 1em;
      font-weight: 500;
    }
    .cryptologo-style-minimal .cryptologo-logo {
      box-shadow: none;
      border: none;
      background: transparent;
    }
    .cryptologo-style-minimal .cryptologo-badge {
      background: transparent;
      border: 1px solid var(--border);
      color: var(--muted);
    }
    .cryptologo-style-minimal .cryptologo-powered {
      border-top: none;
      padding-top: 4px;
    }
  `}function l(e){let t=document.createElement("div");return t.appendChild(document.createTextNode(e)),t.innerHTML}function E(e,t){return e.length<=t?e:e.slice(0,t).trimEnd()+"\u2026"}function u(e,t){let r=e.attachShadow({mode:"open"}),a=document.createElement("style");return a.textContent=t,r.appendChild(a),r}function y(e){let t=document.createElement("div");return t.className=e,t}function k(){return`
    <div class="cryptologo-loading">
      <div class="cryptologo-skeleton" style="width:60%;height:16px;margin-bottom:8px"></div>
      <div class="cryptologo-skeleton" style="width:80%;height:12px;margin-bottom:6px"></div>
      <div class="cryptologo-skeleton" style="width:40%;height:12px"></div>
    </div>
  `}function S(e){return`<div class="cryptologo-error">${l(e)}</div>`}function T(e,t){return`
    <div class="cryptologo-powered">
      <a href="https://${e}/" target="_blank" rel="noopener">
        Powered by ${l(t)}
      </a>
    </div>
  `}function L(){return'<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>'}var q="data-cryptologo-snippet",D=new Set;function C(e,t){if(e.getAttribute("data-no-snippet")==="true")return;let r=t.url;if(D.has(r))return;D.add(r);let a={"@context":"https://schema.org","@type":"DefinedTerm",name:t.name,description:t.description,url:t.url,inDefinedTermSet:{"@type":"DefinedTermSet",name:"CryptoLogo Cryptocurrency Database",url:"https://crypto-logo.com/"}},n=document.createElement("script");n.type="application/ld+json",n.setAttribute(q,t.url),n.textContent=JSON.stringify(a),document.head.appendChild(n)}function B(){document.querySelectorAll(`[${i.attribute}="entity"]`).forEach(r=>M(r)),new MutationObserver(r=>{for(let a of r)a.addedNodes.forEach(n=>{n instanceof HTMLElement&&(n.getAttribute(i.attribute)==="entity"&&M(n),n.querySelectorAll?.(`[${i.attribute}="entity"]`).forEach(s=>{M(s)}))})}).observe(document.body,{childList:!0,subtree:!0})}function M(e){if(e.shadowRoot)return;let t=e.dataset.slug;if(!t){let o=u(e,m(i.accent)),d=y("cryptologo-widget");d.setAttribute("data-theme","light"),d.setAttribute("data-size","default"),d.innerHTML=S("Missing data-slug attribute"),o.appendChild(d);return}let r=e.dataset.theme||"auto",a=e.dataset.size||"default",n=e.dataset.styleVariant||"modern",s=m(i.accent)+w(i.accent)+v(),p=u(e,s),c=y(`cryptologo-widget cryptologo-style-${n}`);c.setAttribute("data-theme",b(r)),c.setAttribute("data-size",a),c.innerHTML=`<div class="cryptologo-body">${k()}</div>`,p.appendChild(c),r==="auto"&&x(o=>c.setAttribute("data-theme",o)),f(i.apiBase,`coins/${t}/`).then(o=>{let d=o.description?E(o.description,180):"",g=l(o.logo_url||""),h=`https://${i.domain}/coins/${l(o.slug)}/`;c.innerHTML=`
        <div class="cryptologo-body">
          <div class="cryptologo-header">
            ${g?`<img class="cryptologo-logo" src="${g}" alt="${l(o.name)} logo" loading="lazy">`:""}
            <div class="cryptologo-header-info">
              <h3 class="cryptologo-title">
                ${l(o.name)}
                <span class="cryptologo-badge">${l(o.symbol)}</span>
              </h3>
              ${o.category?`<p class="cryptologo-subtitle">${l(o.category)}</p>`:""}
            </div>
          </div>
          ${d?`<p class="cryptologo-desc">${l(d)}</p>`:""}
          <a class="cryptologo-link" href="${h}" target="_blank" rel="noopener">
            View on CryptoLogo ${L()}
          </a>
        </div>
        ${T(i.domain,i.name)}
      `,C(e,{name:o.name,description:o.description||`${o.name} (${o.symbol}) cryptocurrency logo and brand assets`,url:h})}).catch(o=>{c.innerHTML=`<div class="cryptologo-body">${S(o.message)}</div>`})}function _(){document.querySelectorAll(`[${i.attribute}="glossary"]`).forEach(r=>z(r)),new MutationObserver(r=>{for(let a of r)a.addedNodes.forEach(n=>{n instanceof HTMLElement&&(n.getAttribute(i.attribute)==="glossary"&&z(n),n.querySelectorAll?.(`[${i.attribute}="glossary"]`).forEach(s=>{z(s)}))})}).observe(document.body,{childList:!0,subtree:!0})}function z(e){if(e.shadowRoot)return;let t=e.dataset.slug;if(!t){let o=u(e,m(i.accent)),d=y("cryptologo-widget");d.setAttribute("data-theme","light"),d.setAttribute("data-size","default"),d.innerHTML=S("Missing data-slug attribute"),o.appendChild(d);return}let r=e.dataset.theme||"auto",a=e.dataset.size||"default",n=e.dataset.styleVariant||"modern",s=m(i.accent)+w(i.accent)+v(),p=u(e,s),c=y(`cryptologo-widget cryptologo-style-${n}`);c.setAttribute("data-theme",b(r)),c.setAttribute("data-size",a),c.innerHTML=`<div class="cryptologo-body">${k()}</div>`,p.appendChild(c),r==="auto"&&x(o=>c.setAttribute("data-theme",o)),f(i.apiBase,`glossary/${t}/`).then(o=>{let d=E(o.definition||"",250),g=`https://${i.domain}/glossary/${l(o.slug)}/`;c.innerHTML=`
        <div class="cryptologo-body">
          <h3 class="cryptologo-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
            ${l(o.term)}
          </h3>
          ${o.category?`<p class="cryptologo-subtitle">${l(o.category)}</p>`:""}
          <p class="cryptologo-desc">${l(d)}</p>
          <a class="cryptologo-link" href="${g}" target="_blank" rel="noopener">
            Full definition ${L()}
          </a>
        </div>
        ${T(i.domain,i.name)}
      `,C(e,{name:o.term,description:o.definition||"",url:g})}).catch(o=>{c.innerHTML=`<div class="cryptologo-body">${S(o.message)}</div>`})}function I(){document.querySelectorAll(`[${i.attribute}="search"]`).forEach(r=>H(r)),new MutationObserver(r=>{for(let a of r)a.addedNodes.forEach(n=>{n instanceof HTMLElement&&(n.getAttribute(i.attribute)==="search"&&H(n),n.querySelectorAll?.(`[${i.attribute}="search"]`).forEach(s=>{H(s)}))})}).observe(document.body,{childList:!0,subtree:!0})}function H(e){if(e.shadowRoot)return;let t=e.dataset.theme||"auto",r=e.dataset.size||"default",a=e.dataset.styleVariant||"modern",n=e.dataset.placeholder||"Search 413 cryptocurrency logos...",s=m(i.accent)+w(i.accent)+v(),p=u(e,s),c=y(`cryptologo-widget cryptologo-style-${a}`);c.setAttribute("data-theme",b(t)),c.setAttribute("data-size",r);let o=`https://${i.domain}${i.searchPath}`;c.innerHTML=`
    <div class="cryptologo-body">
      <h3 class="cryptologo-title">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        Search CryptoLogo
      </h3>
      <form class="cryptologo-search-form" action="${l(o)}" method="get" target="_blank">
        <input class="cryptologo-search-input" type="text" name="q" placeholder="${l(n)}" autocomplete="off">
        <button class="cryptologo-search-btn" type="submit">Search</button>
      </form>
    </div>
    ${T(i.domain,i.name)}
  `,p.appendChild(c),t==="auto"&&x(d=>c.setAttribute("data-theme",d))}var R=`
  :host { display: inline; }
  .cryptologo-inline-badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
  }
  .cryptologo-inline-badge:hover { text-decoration: underline; }
  .cryptologo-inline-badge img {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    vertical-align: middle;
    object-fit: contain;
  }
  .cryptologo-inline-badge .cryptologo-badge-symbol {
    font-size: 0.8em;
    opacity: 0.6;
    font-weight: 500;
  }
`;function W(){document.querySelectorAll(`[${i.attribute}="logo-badge"]`).forEach(r=>A(r)),new MutationObserver(r=>{for(let a of r)a.addedNodes.forEach(n=>{n instanceof HTMLElement&&(n.getAttribute(i.attribute)==="logo-badge"&&A(n),n.querySelectorAll?.(`[${i.attribute}="logo-badge"]`).forEach(s=>{A(s)}))})}).observe(document.body,{childList:!0,subtree:!0})}function A(e){if(e.shadowRoot)return;let t=e.dataset.slug;if(!t)return;let r=e.attachShadow({mode:"open"}),a=document.createElement("style");a.textContent=R,r.appendChild(a);let n=document.createElement("span");n.className="cryptologo-inline-badge",n.textContent=t,r.appendChild(n),f(i.apiBase,`coins/${t}/`).then(s=>{let p=`https://${i.domain}/coins/${l(s.slug)}/`,c=l(s.logo_url||"");n.innerHTML="";let o=document.createElement("a");if(o.className="cryptologo-inline-badge",o.href=p,o.target="_blank",o.rel="noopener",c){let h=document.createElement("img");h.src=c,h.alt=`${s.name} logo`,h.loading="lazy",o.appendChild(h)}let d=document.createElement("span");d.textContent=l(s.name),o.appendChild(d);let g=document.createElement("span");g.className="cryptologo-badge-symbol",g.textContent=` (${l(s.symbol)})`,o.appendChild(g),n.replaceWith(o)}).catch(()=>{n.textContent=t})}function N(){B(),_(),I(),W()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",N):N();export{B as initEntityWidgets,_ as initGlossaryWidgets,W as initLogoBadgeWidgets,I as initSearchWidgets};
