globalThis.process ??= {};
globalThis.process.env ??= {};
import { g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_BJRdJ6PM.mjs";
import { t as createComponent } from "./compiler_DX3pyeFk.mjs";
import { t as $$Layout } from "./Layout_BQ-cj7lB.mjs";
import { t as __exportAll } from "./deportes_j254gHWi.mjs";
//#region src/pages/guides/index.astro
var guides_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const guides = [{
		slug: "instalar-iptv-smart-tv",
		title: "Cómo instalar IPTV en Smart TV",
		category: "Tutoriales",
		time: "5 min"
	}, {
		slug: "mejor-app-iptv-android",
		title: "Mejores Apps IPTV Android 2026",
		category: "Reviews",
		time: "8 min"
	}];
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Centro de Guías y Tutoriales | Comprar IPTV",
		"description": "Aprende a configurar tu servicio IPTV en cualquier dispositivo. Guías paso a paso, reviews de apps y consejos de expertos."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="fixed top-0 w-full z-50 glass border-b border-white/5 px-6 py-4"><div class="max-w-7xl mx-auto flex justify-between items-center"><a href="/" class="text-2xl font-bold tracking-tighter flex items-center gap-2"><span class="text-primary">Comprar</span><span class="text-secondary">IPTV</span></a><nav class="flex gap-6 items-center text-sm font-medium"><a href="/" class="hover:text-secondary">Inicio</a><a href="https://wa.link/9ezhx6" class="bg-primary px-4 py-2 rounded-full text-white">Soporte</a></nav></div></header><main class="pt-32 pb-20 px-6"><div class="max-w-5xl mx-auto"><div class="mb-16 text-center"><h1 class="text-5xl font-bold mb-6">Guías y Tutoriales</h1><p class="text-slate-400 text-lg">Todo lo que necesitas saber para exprimir al máximo tu suscripción IPTV.</p></div><div class="grid md:grid-cols-2 gap-8">${guides.map((guide) => renderTemplate`<a${addAttribute(`/guides/${guide.slug}`, "href")} class="glass-card p-8 rounded-3xl border-white/5 hover:border-secondary/30 transition-all group"><div class="flex justify-between items-start mb-6"><span class="text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-3 py-1 rounded-full">${guide.category}</span><span class="text-xs text-slate-500 flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>${guide.time}</span></div><h2 class="text-2xl font-bold mb-4 group-hover:text-secondary transition-colors">${guide.title}</h2><p class="text-slate-400 text-sm mb-6 leading-relaxed">Descubre cómo configurar y optimizar tu servicio con esta guía detallada escrita por nuestros expertos.</p><div class="text-sm font-bold flex items-center gap-2 text-white">Leer más<span class="group-hover:translate-x-2 transition-transform">→</span></div></a>`)}</div></div></main>` })}`;
}, "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/guides/index.astro", void 0);
var $$file = "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/guides/index.astro";
var $$url = "/guides";
//#endregion
//#region \0virtual:astro:page:src/pages/guides/index@_@astro
var page = () => guides_exports;
//#endregion
export { page };
