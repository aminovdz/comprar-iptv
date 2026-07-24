globalThis.process ??= {};
globalThis.process.env ??= {};
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_BJRdJ6PM.mjs";
import { t as createComponent } from "./compiler_DX3pyeFk.mjs";
import { t as $$Layout } from "./Layout_BQ-cj7lB.mjs";
import { t as __exportAll } from "./deportes_j254gHWi.mjs";
//#region src/pages/blog/guia-iptv-smarters-pro.astro
var guia_iptv_smarters_pro_exports = /* @__PURE__ */ __exportAll({
	default: () => $$GuiaIptvSmartersPro,
	file: () => $$file,
	url: () => $$url
});
var $$GuiaIptvSmartersPro = createComponent(($$result, $$props, $$slots) => {
	const title = "Guía Completa de IPTV Smarters Pro: Configuración Paso a Paso";
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": title,
		"description": "Aprende a configurar IPTV Smarters Pro, la aplicación más popular para ver listas M3U y códigos Xtream en cualquier dispositivo."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="pt-32 pb-24 px-6"><article class="max-w-3xl mx-auto glass-card p-8 md:p-12 rounded-[40px] border-white/10"><header class="mb-12 text-center"><div class="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-6 uppercase tracking-widest">Tutorial</div><h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">${title}</h1></header><div class="prose prose-invert prose-lg max-w-none text-slate-300"><p>IPTV Smarters Pro es la aplicación favorita de los usuarios por su facilidad de uso y diseño intuitivo. Aquí te enseñamos a ponerla en marcha.</p><h2>Paso 1: Descarga la App</h2><p>Disponible en Play Store, App Store y sitios oficiales para Windows o Firestick.</p><h2>Paso 2: Introduce tus Credenciales</h2><p>Puedes usar 'Load your Playlist or File/URL' para archivos M3U o 'Login with Xtream Codes API' para un acceso más profesional con usuario y contraseña.</p><h2>Paso 3: Disfruta del Contenido</h2><p>Una vez cargada, tendrás secciones separadas para Live TV, Movies y Series, además de control parental y multi-pantalla.</p></div></article></div>` })}`;
}, "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/blog/guia-iptv-smarters-pro.astro", void 0);
var $$file = "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/blog/guia-iptv-smarters-pro.astro";
var $$url = "/blog/guia-iptv-smarters-pro";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/guia-iptv-smarters-pro@_@astro
var page = () => guia_iptv_smarters_pro_exports;
//#endregion
export { page };
