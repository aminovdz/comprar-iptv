globalThis.process ??= {};
globalThis.process.env ??= {};
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_BJRdJ6PM.mjs";
import { t as createComponent } from "./compiler_DX3pyeFk.mjs";
import { t as $$Layout } from "./Layout_BQ-cj7lB.mjs";
import { t as __exportAll } from "./deportes_j254gHWi.mjs";
//#region src/pages/blog/configurar-iptv-firestick.astro
var configurar_iptv_firestick_exports = /* @__PURE__ */ __exportAll({
	default: () => $$ConfigurarIptvFirestick,
	file: () => $$file,
	url: () => $$url
});
var $$ConfigurarIptvFirestick = createComponent(($$result, $$props, $$slots) => {
	const title = "Guía completa: Cómo configurar IPTV en tu Amazon Firestick";
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": title,
		"description": "Paso a paso para instalar y configurar tu servicio de IPTV en cualquier Amazon Fire TV Stick."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="pt-32 pb-24 px-6"><article class="max-w-3xl mx-auto glass-card p-8 md:p-12 rounded-[40px] border-white/10"><header class="mb-12 text-center"><div class="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-6 uppercase tracking-widest">Tutorial</div><h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">${title}</h1></header><div class="prose prose-invert prose-lg max-w-none text-slate-300"><p>El Amazon Firestick es el dispositivo favorito por su potencia y bajo costo. Sigue estos pasos:</p><h2>1. Activar Orígenes Desconocidos</h2><p>Ve a Configuración > Mi Fire TV > Opciones de desarrollador y activa la instalación de apps desconocidas.</p><h2>2. Instalar Downloader</h2><p>Busca la app 'Downloader' en la tienda oficial de Amazon.</p><h2>3. Descargar la App de IPTV</h2><p>Usa Downloader para bajar el APK de tu aplicación favorita (como IPTV Smarters o IBO Player).</p></div></article></div>` })}`;
}, "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/blog/configurar-iptv-firestick.astro", void 0);
var $$file = "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/blog/configurar-iptv-firestick.astro";
var $$url = "/blog/configurar-iptv-firestick";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/configurar-iptv-firestick@_@astro
var page = () => configurar_iptv_firestick_exports;
//#endregion
export { page };
