globalThis.process ??= {};
globalThis.process.env ??= {};
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_BJRdJ6PM.mjs";
import { t as createComponent } from "./compiler_DX3pyeFk.mjs";
import { t as $$Layout } from "./Layout_BQ-cj7lB.mjs";
import { t as __exportAll } from "./deportes_j254gHWi.mjs";
//#region src/pages/blog/solucionar-buffering-iptv.astro
var solucionar_buffering_iptv_exports = /* @__PURE__ */ __exportAll({
	default: () => $$SolucionarBufferingIptv,
	file: () => $$file,
	url: () => $$url
});
var $$SolucionarBufferingIptv = createComponent(($$result, $$props, $$slots) => {
	const title = "Cómo solucionar problemas de buffering en IPTV: Trucos efectivos";
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": title,
		"description": "Di adiós a los cortes y parones. Aprende a optimizar tu conexión y configuración para un streaming de IPTV fluido."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="pt-32 pb-24 px-6"><article class="max-w-3xl mx-auto glass-card p-8 md:p-12 rounded-[40px] border-white/10"><header class="mb-12 text-center"><div class="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-6 uppercase tracking-widest">Soporte</div><h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">${title}</h1></header><div class="prose prose-invert prose-lg max-w-none text-slate-300"><p>El buffering es el enemigo número uno del streaming. Sigue estos consejos para eliminarlo por completo.</p><h2>1. Usa Cable Ethernet</h2><p>El Wi-Fi es inestable. Conectar tu dispositivo directamente al router mediante un cable garantiza una velocidad constante.</p><h2>2. Cambia el Formato de Salida</h2><p>Algunos reproductores permiten cambiar entre TS y M3U8. Prueba el formato que mejor se adapte a tu hardware.</p><h2>3. Reinicia tu Equipo</h2><p>A veces, un simple reinicio del router y de tu Smart TV o TV Box puede limpiar la memoria caché y mejorar el rendimiento notablemente.</p></div></article></div>` })}`;
}, "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/blog/solucionar-buffering-iptv.astro", void 0);
var $$file = "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/blog/solucionar-buffering-iptv.astro";
var $$url = "/blog/solucionar-buffering-iptv";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/solucionar-buffering-iptv@_@astro
var page = () => solucionar_buffering_iptv_exports;
//#endregion
export { page };
