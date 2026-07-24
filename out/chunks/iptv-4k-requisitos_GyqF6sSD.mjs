globalThis.process ??= {};
globalThis.process.env ??= {};
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_BJRdJ6PM.mjs";
import { t as createComponent } from "./compiler_DX3pyeFk.mjs";
import { t as $$Layout } from "./Layout_BQ-cj7lB.mjs";
import { t as __exportAll } from "./deportes_j254gHWi.mjs";
//#region src/pages/blog/iptv-4k-requisitos.astro
var iptv_4k_requisitos_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Iptv4kRequisitos,
	file: () => $$file,
	url: () => $$url
});
var $$Iptv4kRequisitos = createComponent(($$result, $$props, $$slots) => {
	const title = "IPTV 4K: Requisitos de internet para una reproducción fluida";
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": title,
		"description": "¿Cuántos megas necesitas para ver IPTV en 4K sin cortes? Te lo explicamos aquí."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="pt-32 pb-24 px-6"><article class="max-w-3xl mx-auto glass-card p-8 md:p-12 rounded-[40px] border-white/10"><header class="mb-12 text-center"><div class="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-6 uppercase tracking-widest">Tecnología</div><h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">${title}</h1></header><div class="prose prose-invert prose-lg max-w-none text-slate-300"><p>Para disfrutar de contenido en 4K Ultra HD sin buffering, necesitas una conexión estable:</p><h2>1. Velocidad mínima</h2><p>Recomendamos al menos 25-30 Mbps dedicados exclusivamente al streaming del IPTV.</p><h2>2. Conexión por Cable</h2><p>Siempre que sea posible, conecta tu dispositivo por cable Ethernet en lugar de WiFi para evitar interferencias.</p></div></article></div>` })}`;
}, "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/blog/iptv-4k-requisitos.astro", void 0);
var $$file = "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/blog/iptv-4k-requisitos.astro";
var $$url = "/blog/iptv-4k-requisitos";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/iptv-4k-requisitos@_@astro
var page = () => iptv_4k_requisitos_exports;
//#endregion
export { page };
