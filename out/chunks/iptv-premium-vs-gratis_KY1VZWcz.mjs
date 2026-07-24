globalThis.process ??= {};
globalThis.process.env ??= {};
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_BJRdJ6PM.mjs";
import { t as createComponent } from "./compiler_DX3pyeFk.mjs";
import { t as $$Layout } from "./Layout_BQ-cj7lB.mjs";
import { t as __exportAll } from "./deportes_j254gHWi.mjs";
//#region src/pages/blog/iptv-premium-vs-gratis.astro
var iptv_premium_vs_gratis_exports = /* @__PURE__ */ __exportAll({
	default: () => $$IptvPremiumVsGratis,
	file: () => $$file,
	url: () => $$url
});
var $$IptvPremiumVsGratis = createComponent(($$result, $$props, $$slots) => {
	const title = "Por qué el IPTV premium es mejor que las listas gratuitas";
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": title,
		"description": "La diferencia real entre un servicio de pago y las listas gratuitas que encuentras por internet."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="pt-32 pb-24 px-6"><article class="max-w-3xl mx-auto glass-card p-8 md:p-12 rounded-[40px] border-white/10"><header class="mb-12 text-center"><div class="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-6 uppercase tracking-widest">Informativo</div><h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">${title}</h1></header><div class="prose prose-invert prose-lg max-w-none text-slate-300"><p>Lo barato sale caro. Descubre por qué vale la pena invertir en un servicio premium:</p><h2>1. Estabilidad</h2><p>Las listas gratuitas se saturan y mueren en pocos días. Un servicio premium garantiza 99.9% de tiempo en línea.</p><h2>2. Calidad de Imagen</h2><p>Las gratuitas suelen ser en SD o HD de baja calidad. El premium te ofrece 4K real.</p></div></article></div>` })}`;
}, "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/blog/iptv-premium-vs-gratis.astro", void 0);
var $$file = "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/blog/iptv-premium-vs-gratis.astro";
var $$url = "/blog/iptv-premium-vs-gratis";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/iptv-premium-vs-gratis@_@astro
var page = () => iptv_premium_vs_gratis_exports;
//#endregion
export { page };
