globalThis.process ??= {};
globalThis.process.env ??= {};
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_BJRdJ6PM.mjs";
import { t as createComponent } from "./compiler_DX3pyeFk.mjs";
import { t as $$Layout } from "./Layout_BQ-cj7lB.mjs";
import { t as __exportAll } from "./deportes_j254gHWi.mjs";
//#region src/pages/blog/comprar-iptv-seguro.astro
var comprar_iptv_seguro_exports = /* @__PURE__ */ __exportAll({
	default: () => $$ComprarIptvSeguro,
	file: () => $$file,
	url: () => $$url
});
var $$ComprarIptvSeguro = createComponent(($$result, $$props, $$slots) => {
	const title = "¿Es seguro comprar IPTV? Todo lo que necesitas saber sobre privacidad";
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": title,
		"description": "Aprende a identificar proveedores de IPTV seguros y cómo proteger tu privacidad en línea."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="pt-32 pb-24 px-6"><article class="max-w-3xl mx-auto glass-card p-8 md:p-12 rounded-[40px] border-white/10"><header class="mb-12 text-center"><div class="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-6 uppercase tracking-widest">Seguridad</div><h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">${title}</h1></header><div class="prose prose-invert prose-lg max-w-none text-slate-300"><p>La seguridad es la prioridad número uno. Aquí te explicamos cómo comprar de forma segura:</p><h2>1. Proveedores con Reputación</h2><p>Evita ofertas demasiado buenas para ser verdad en sitios desconocidos.</p><h2>2. Uso de VPN</h2><p>Siempre recomendamos el uso de una VPN para cifrar tu conexión y proteger tu anonimato.</p><h2>3. Pagos Seguros</h2><p>Busca métodos de pago protegidos y soporte directo por WhatsApp o Telegram.</p></div></article></div>` })}`;
}, "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/blog/comprar-iptv-seguro.astro", void 0);
var $$file = "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/blog/comprar-iptv-seguro.astro";
var $$url = "/blog/comprar-iptv-seguro";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/comprar-iptv-seguro@_@astro
var page = () => comprar_iptv_seguro_exports;
//#endregion
export { page };
