globalThis.process ??= {};
globalThis.process.env ??= {};
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_BJRdJ6PM.mjs";
import { t as createComponent } from "./compiler_DX3pyeFk.mjs";
import { t as $$Layout } from "./Layout_BQ-cj7lB.mjs";
import { t as __exportAll } from "./deportes_j254gHWi.mjs";
//#region src/pages/blog/evitar-cortes-iptv.astro
var evitar_cortes_iptv_exports = /* @__PURE__ */ __exportAll({
	default: () => $$EvitarCortesIptv,
	file: () => $$file,
	url: () => $$url
});
var $$EvitarCortesIptv = createComponent(($$result, $$props, $$slots) => {
	const title = "Cómo evitar los cortes en IPTV durante eventos deportivos";
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": title,
		"description": "Trucos y consejos para asegurar la máxima estabilidad en tu servicio de IPTV durante el fútbol."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="pt-32 pb-24 px-6"><article class="max-w-3xl mx-auto glass-card p-8 md:p-12 rounded-[40px] border-white/10"><header class="mb-12 text-center"><div class="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-6 uppercase tracking-widest">Tips</div><h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">${title}</h1></header><div class="prose prose-invert prose-lg max-w-none text-slate-300"><p>Los eventos deportivos en directo son los más exigentes. Sigue estos consejos:</p><h2>1. Reinicia tu Router</h2><p>Antes de un partido importante, reinicia tu router para limpiar la caché y mejorar la conexión.</p><h2>2. Cambia de Player</h2><p>Si una app te da problemas, prueba con otra. A veces el reproductor interno de la app influye en la estabilidad.</p></div></article></div>` })}`;
}, "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/blog/evitar-cortes-iptv.astro", void 0);
var $$file = "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/blog/evitar-cortes-iptv.astro";
var $$url = "/blog/evitar-cortes-iptv";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/evitar-cortes-iptv@_@astro
var page = () => evitar_cortes_iptv_exports;
//#endregion
export { page };
