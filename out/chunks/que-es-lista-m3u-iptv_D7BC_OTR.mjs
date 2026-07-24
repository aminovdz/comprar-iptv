globalThis.process ??= {};
globalThis.process.env ??= {};
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_BJRdJ6PM.mjs";
import { t as createComponent } from "./compiler_DX3pyeFk.mjs";
import { t as $$Layout } from "./Layout_BQ-cj7lB.mjs";
import { t as __exportAll } from "./deportes_j254gHWi.mjs";
//#region src/pages/blog/que-es-lista-m3u-iptv.astro
var que_es_lista_m3u_iptv_exports = /* @__PURE__ */ __exportAll({
	default: () => $$QueEsListaM3uIptv,
	file: () => $$file,
	url: () => $$url
});
var $$QueEsListaM3uIptv = createComponent(($$result, $$props, $$slots) => {
	const title = "Qué es una lista M3U y cómo funciona realmente en el IPTV";
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": title,
		"description": "Desmitificamos el formato M3U. Aprende qué contiene este archivo y cómo cargarlo en tus dispositivos favoritos."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="pt-32 pb-24 px-6"><article class="max-w-3xl mx-auto glass-card p-8 md:p-12 rounded-[40px] border-white/10"><header class="mb-12 text-center"><div class="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-6 uppercase tracking-widest">Conceptos</div><h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">${title}</h1></header><div class="prose prose-invert prose-lg max-w-none text-slate-300"><p>Si eres nuevo en el mundo del IPTV, habrás oído hablar de las listas M3U constantemente. Aquí te explicamos qué son.</p><h2>Definición Técnica</h2><p>Un archivo M3U no es más que un archivo de texto plano que contiene las direcciones URL de los servidores de streaming de cada canal.</p><h2>Cómo se utiliza</h2><p>Los reproductores IPTV leen estas líneas de texto y conectan con el servidor correspondiente para mostrarte la imagen y el sonido.</p><h2>M3U vs M3U8</h2><p>El formato M3U8 es simplemente una versión de M3U codificada en UTF-8, permitiendo el uso de caracteres internacionales, siendo el estándar actual.</p></div></article></div>` })}`;
}, "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/blog/que-es-lista-m3u-iptv.astro", void 0);
var $$file = "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/blog/que-es-lista-m3u-iptv.astro";
var $$url = "/blog/que-es-lista-m3u-iptv";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/que-es-lista-m3u-iptv@_@astro
var page = () => que_es_lista_m3u_iptv_exports;
//#endregion
export { page };
