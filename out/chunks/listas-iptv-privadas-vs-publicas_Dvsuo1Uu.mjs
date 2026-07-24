globalThis.process ??= {};
globalThis.process.env ??= {};
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_BJRdJ6PM.mjs";
import { t as createComponent } from "./compiler_DX3pyeFk.mjs";
import { t as $$Layout } from "./Layout_BQ-cj7lB.mjs";
import { t as __exportAll } from "./deportes_j254gHWi.mjs";
//#region src/pages/blog/listas-iptv-privadas-vs-publicas.astro
var listas_iptv_privadas_vs_publicas_exports = /* @__PURE__ */ __exportAll({
	default: () => $$ListasIptvPrivadasVsPublicas,
	file: () => $$file,
	url: () => $$url
});
var $$ListasIptvPrivadasVsPublicas = createComponent(($$result, $$props, $$slots) => {
	const title = "Ventajas de las Listas IPTV Privadas vs Públicas: ¿Por qué pagar?";
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": title,
		"description": "Entiende por qué las suscripciones IPTV de pago ofrecen una experiencia superior y más segura que las listas gratuitas de internet."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="pt-32 pb-24 px-6"><article class="max-w-3xl mx-auto glass-card p-8 md:p-12 rounded-[40px] border-white/10"><header class="mb-12 text-center"><div class="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-6 uppercase tracking-widest">Análisis</div><h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">${title}</h1></header><div class="prose prose-invert prose-lg max-w-none text-slate-300"><p>Aunque existen muchas listas gratuitas, la diferencia de calidad y seguridad con un servicio premium es abismal.</p><h2>Estabilidad y Cortes</h2><p>Las listas públicas suelen saturarse y dejar de funcionar en los momentos más importantes. Las privadas garantizan un uptime del 99.9%.</p><h2>Calidad de Imagen</h2><p>Solo los proveedores premium ofrecen canales reales en 4K y Full HD sin compresión excesiva, manteniendo una tasa de bits alta.</p><h2>Seguridad y Soporte</h2><p>Al contratar un servicio privado, cuentas con soporte técnico y la tranquilidad de que tus datos están protegidos.</p></div></article></div>` })}`;
}, "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/blog/listas-iptv-privadas-vs-publicas.astro", void 0);
var $$file = "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/blog/listas-iptv-privadas-vs-publicas.astro";
var $$url = "/blog/listas-iptv-privadas-vs-publicas";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/listas-iptv-privadas-vs-publicas@_@astro
var page = () => listas_iptv_privadas_vs_publicas_exports;
//#endregion
export { page };
