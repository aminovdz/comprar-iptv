globalThis.process ??= {};
globalThis.process.env ??= {};
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_BJRdJ6PM.mjs";
import { t as createComponent } from "./compiler_DX3pyeFk.mjs";
import { t as $$Layout } from "./Layout_BQ-cj7lB.mjs";
import { t as __exportAll } from "./deportes_j254gHWi.mjs";
//#region src/pages/blog/instalar-iptv-consola.astro
var instalar_iptv_consola_exports = /* @__PURE__ */ __exportAll({
	default: () => $$InstalarIptvConsola,
	file: () => $$file,
	url: () => $$url
});
var $$InstalarIptvConsola = createComponent(($$result, $$props, $$slots) => {
	const title = "Cómo instalar IPTV en una Xbox o PlayStation en 2026";
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": title,
		"description": "Convierte tu consola de videojuegos en el centro de entretenimiento definitivo instalando tu lista IPTV."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="pt-32 pb-24 px-6"><article class="max-w-3xl mx-auto glass-card p-8 md:p-12 rounded-[40px] border-white/10"><header class="mb-12 text-center"><div class="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-6 uppercase tracking-widest">Consolas</div><h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">${title}</h1></header><div class="prose prose-invert prose-lg max-w-none text-slate-300"><p>Tus consolas de última generación tienen potencia de sobra para gestionar listas de canales de alta definición.</p><h2>IPTV en Xbox</h2><p>La opción más sencilla es descargar 'MyIPTV Player' desde la Microsoft Store integrada. Es gratuita y muy fácil de configurar.</p><h2>IPTV en PlayStation</h2><p>Aunque Sony es más restrictivo, puedes usar el navegador web para acceder a reproductores online o utilizar la app 'Plex' si tienes un servidor local configurado.</p><h2>Uso de Centros Multimedia</h2><p>Kodi también está disponible para Xbox, ofreciendo la experiencia de IPTV más completa posible en una consola.</p></div></article></div>` })}`;
}, "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/blog/instalar-iptv-consola.astro", void 0);
var $$file = "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/blog/instalar-iptv-consola.astro";
var $$url = "/blog/instalar-iptv-consola";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/instalar-iptv-consola@_@astro
var page = () => instalar_iptv_consola_exports;
//#endregion
export { page };
