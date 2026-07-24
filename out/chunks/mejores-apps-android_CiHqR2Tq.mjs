globalThis.process ??= {};
globalThis.process.env ??= {};
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_BJRdJ6PM.mjs";
import { t as createComponent } from "./compiler_DX3pyeFk.mjs";
import { t as $$Layout } from "./Layout_BQ-cj7lB.mjs";
import { t as __exportAll } from "./deportes_j254gHWi.mjs";
//#region src/pages/blog/mejores-apps-android.astro
var mejores_apps_android_exports = /* @__PURE__ */ __exportAll({
	default: () => $$MejoresAppsAndroid,
	file: () => $$file,
	url: () => $$url
});
var $$MejoresAppsAndroid = createComponent(($$result, $$props, $$slots) => {
	const title = "Las 5 mejores aplicaciones de IPTV para Android (Móvil y TV Box)";
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": title,
		"description": "Análisis de las mejores aplicaciones para dispositivos Android en 2026."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="pt-32 pb-24 px-6"><article class="max-w-3xl mx-auto glass-card p-8 md:p-12 rounded-[40px] border-white/10"><header class="mb-12 text-center"><div class="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-6 uppercase tracking-widest">Apps</div><h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">${title}</h1></header><div class="prose prose-invert prose-lg max-w-none text-slate-300"><p>Android es el sistema más flexible para el IPTV. Estas son las mejores opciones:</p><h2>1. TiViMate</h2><p>Para muchos, la mejor interfaz que simula un decodificador tradicional.</p><h2>2. OTT Navigator</h2><p>Muy ligera y altamente personalizable.</p><h2>3. GSE Smart IPTV</h2><p>Una opción sólida y compatible con multitud de formatos.</p></div></article></div>` })}`;
}, "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/blog/mejores-apps-android.astro", void 0);
var $$file = "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/blog/mejores-apps-android.astro";
var $$url = "/blog/mejores-apps-android";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/mejores-apps-android@_@astro
var page = () => mejores_apps_android_exports;
//#endregion
export { page };
