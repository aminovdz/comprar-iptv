globalThis.process ??= {};
globalThis.process.env ??= {};
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_BJRdJ6PM.mjs";
import { t as createComponent } from "./compiler_DX3pyeFk.mjs";
import { t as $$Layout } from "./Layout_BQ-cj7lB.mjs";
import { t as __exportAll } from "./deportes_j254gHWi.mjs";
//#region src/pages/blog/iptv-movil-guia.astro
var iptv_movil_guia_exports = /* @__PURE__ */ __exportAll({
	default: () => $$IptvMovilGuia,
	file: () => $$file,
	url: () => $$url
});
var $$IptvMovilGuia = createComponent(($$result, $$props, $$slots) => {
	const title = "IPTV en el móvil: Cómo llevar tu televisión a todas partes";
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": title,
		"description": "Guía para configurar tu suscripción de IPTV en tu smartphone Android o iPhone."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="pt-32 pb-24 px-6"><article class="max-w-3xl mx-auto glass-card p-8 md:p-12 rounded-[40px] border-white/10"><header class="mb-12 text-center"><div class="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-6 uppercase tracking-widest">Guía</div><h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">${title}</h1></header><div class="prose prose-invert prose-lg max-w-none text-slate-300"><p>¿Quieres ver el partido en el tren o en el bus? Es muy fácil:</p><h2>1. Descarga la App</h2><p>Instala 'IPTV Smarters' desde la App Store o Play Store.</p><h2>2. Carga tu Lista</h2><p>Usa tus credenciales (Usuario, Contraseña y URL) para acceder a todo el contenido desde la palma de tu mano.</p></div></article></div>` })}`;
}, "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/blog/iptv-movil-guia.astro", void 0);
var $$file = "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/blog/iptv-movil-guia.astro";
var $$url = "/blog/iptv-movil-guia";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/iptv-movil-guia@_@astro
var page = () => iptv_movil_guia_exports;
//#endregion
export { page };
