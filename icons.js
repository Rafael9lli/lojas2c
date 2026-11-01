'use strict';
const ruleIcons={
'inicio':'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z"/>',
'carencia':'<path d="M6 3h12M6 21h12M7 3v4l5 5-5 5v4M17 3v4l-5 5 5 5v4"/>',
'tfp':'<path d="M6 3h12v18l-3-2-3 2-3-2-3 2Z"/><path d="M9 7h6M9 11h6M9 15h3"/>',
'downgrade-mes':'<path d="M3 4v16h18M6 8l5 5 4-3 6 6m-5 0h5v-5"/>',
'suspensao':'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/>',
'mn':'<path d="M20 8a8 8 0 0 0-14-2L3 9m0-5v5h5M4 16a8 8 0 0 0 14 2l3-3m0 5v-5h-5"/>',
'reabilitacao':'<path d="M3 10a9 9 0 1 1 1 7M3 4v6h6M12 8v8M8 12h8"/>',
'inversao':'<circle cx="7" cy="6" r="3"/><circle cx="17" cy="18" r="3"/><path d="M2 15v-2a4 4 0 0 1 4-4h2M22 9v2a4 4 0 0 1-4 4h-2M13 4h8m-3-3 3 3-3 3M11 20H3m3-3-3 3 3 3"/>',
'permanencia':'<path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6Z"/><path d="m8 12 3 3 5-6"/>',
'md':'<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8" cy="10" r="2"/><path d="M5 16a3 3 0 0 1 6 0M14 9h4M14 13h4M14 16h2"/>',
'flexibilizacoes':'<path d="M4 5h12m-3-3 3 3-3 3M20 19H8m3-3-3 3 3 3M4 5v10a4 4 0 0 0 4 4M20 19V9a4 4 0 0 0-4-4"/>',
'descontos':'<path d="m3 3 9 0 9 9-9 9-9-9Z"/><circle cx="8" cy="8" r="1"/><path d="m10 16 6-6"/>',
'upgrade-fixa':'<path d="M4 18v3h16v-3M12 17V3m-5 5 5-5 5 5"/>',
'composicao-fixa':'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="m8 3 4 4 4-4M8 23h8"/>',
'realta':'<path d="m2 11 6-5 6 5M4 10v10h8V10M14 7l3-3 5 5M16 10v8h4v-9M7 20v-6h3v6"/>',
'materiais':'<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',
'atualizacoes':'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'
};
function outlineIcon(id){return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${ruleIcons[id]||ruleIcons.md}</svg>`}
