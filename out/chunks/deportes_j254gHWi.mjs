globalThis.process ??= {};
globalThis.process.env ??= {};
import { _ as createRenderInstruction, g as addAttribute, i as renderComponent, m as maybeRenderHead, s as renderSlot, t as spreadAttributes, u as renderTemplate, w as createAstro } from "./server_BJRdJ6PM.mjs";
import { t as createComponent } from "./compiler_DX3pyeFk.mjs";
import { t as $$Layout } from "./Layout_BQ-cj7lB.mjs";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region node_modules/lucide-astro/dist/.Layout.astro
createAstro("https://comprariptv.com");
var $$Component = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Component;
	const size = Astro.props.size;
	const cls = Astro.props.class;
	const name = Astro.props.iconName;
	delete Astro.props.size;
	delete Astro.props.class;
	delete Astro.props.iconName;
	const props = Object.assign({
		"xmlns": "http://www.w3.org/2000/svg",
		"stroke-width": 2,
		"width": size ?? 24,
		"height": size ?? 24,
		"stroke": "currentColor",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"fill": "none",
		"viewBox": "0 0 24 24"
	}, Astro.props);
	return renderTemplate`${maybeRenderHead($$result)}<svg${spreadAttributes(props)}${addAttribute([
		"lucide",
		{ [`lucide-${name}`]: name },
		cls
	], "class:list")}>${renderSlot($$result, $$slots["default"])}</svg>`;
}, "/Users/Mc/Documents/antigravity/comprar-iptv/node_modules/lucide-astro/dist/.Layout.astro", void 0);
//#endregion
//#region node_modules/lucide-astro/dist/Activity.astro
createAstro("https://comprariptv.com");
var $$Activity = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Activity;
	return renderTemplate`${renderComponent($$result, "Layout", $$Component, {
		"iconName": "activity",
		...Astro.props
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>` })}`;
}, "/Users/Mc/Documents/antigravity/comprar-iptv/node_modules/lucide-astro/dist/Activity.astro", void 0);
//#endregion
//#region src/components/LiveScores.astro
var $$LiveScores = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="py-24 relative min-h-screen"><div class="max-container relative z-10"><div class="text-center mb-16"><div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 mb-6 animate-pulse-gentle">${renderComponent($$result, "Activity", $$Activity, { "class": "w-4 h-4 text-red-500" })}<span class="text-xs font-bold uppercase tracking-widest text-red-400">Live API</span></div><h2 class="text-4xl md:text-5xl font-black mb-4 tracking-tighter">Deportes en <span class="text-gradient">Vivo</span></h2><p class="text-gray-400">Resultados y partidos en tiempo real, impulsados por ESPN.</p></div><!-- League Selector --><div class="flex flex-wrap justify-center gap-4 mb-12 max-w-4xl mx-auto"><button class="league-btn active btn-primary px-6 py-2" data-url="https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard">Fútbol Inglés de Primera</button><button class="league-btn glass px-6 py-2 hover:bg-white/5 transition-colors rounded-full font-bold text-sm" data-url="https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/scoreboard">Primera División Española</button><button class="league-btn glass px-6 py-2 hover:bg-white/5 transition-colors rounded-full font-bold text-sm" data-url="https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/scoreboard">Fútbol Italiano</button><button class="league-btn glass px-6 py-2 hover:bg-white/5 transition-colors rounded-full font-bold text-sm" data-url="https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/scoreboard">Bundesliga</button><button class="league-btn glass px-6 py-2 hover:bg-white/5 transition-colors rounded-full font-bold text-sm" data-url="https://site.api.espn.com/apis/site/v2/sports/soccer/fra.1/scoreboard">Ligue 1</button><button class="league-btn glass px-6 py-2 hover:bg-white/5 transition-colors rounded-full font-bold text-sm" data-url="https://site.api.espn.com/apis/site/v2/sports/soccer/gre.1/scoreboard">Greek Super League</button><button class="league-btn glass px-6 py-2 hover:bg-white/5 transition-colors rounded-full font-bold text-sm" data-url="https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.champions/scoreboard">Fútbol Europeo de Élite</button><button class="league-btn glass px-6 py-2 hover:bg-white/5 transition-colors rounded-full font-bold text-sm" data-url="https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard">NBA</button><button class="league-btn glass px-6 py-2 hover:bg-white/5 transition-colors rounded-full font-bold text-sm" data-url="https://site.api.espn.com/apis/site/v2/sports/basketball/euroleague/scoreboard">Euroleague</button><button class="league-btn glass px-6 py-2 hover:bg-white/5 transition-colors rounded-full font-bold text-sm text-red-400 border-red-500/20" data-url="https://site.api.espn.com/apis/site/v2/sports/mma/ufc/scoreboard" data-type="mma">UFC</button></div><!-- Loader --><div id="scores-loader" class="flex justify-center py-12"><div class="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div></div><!-- Scores Grid --><div id="scores-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 hidden"><!-- Dynamic Content Will Be Injected Here --></div></div></section>${renderScript($$result, "/Users/Mc/Documents/antigravity/comprar-iptv/src/components/LiveScores.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/Mc/Documents/antigravity/comprar-iptv/src/components/LiveScores.astro", void 0);
//#endregion
//#region src/pages/deportes.astro
var deportes_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Deportes,
	file: () => $$file,
	url: () => $$url
});
var $$Deportes = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Resultados y Partidos en Vivo | Mejor Proveedor de Comprar IPTV",
		"description": "Sigue los resultados deportivos, partidos y puntajes en tiempo real. No te pierdas ni un segundo de la acción con los canales deportivos en 4K del mejor proveedor de Comprar IPTV.",
		"lang": "es"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="relative pt-32 pb-16 overflow-hidden border-b border-white/5"><div class="absolute inset-0 z-0 bg-primary/5"><div class="absolute inset-0 bg-gradient-to-b from-bg-dark/80 via-bg-dark/90 to-bg-dark"></div></div><div class="max-container relative z-10 text-center max-w-4xl"><h1 class="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Centro de <span class="text-gradient">Partidos en Vivo</span> | Comprar IPTV</h1><p class="text-xl text-gray-400">Mantente al día con los resultados en vivo de las mejores ligas del mundo. Mira todos estos partidos en vivo y en 4K con la mejor suscripción a Comprar IPTV.</p></div></section>${renderComponent($$result, "LiveScores", $$LiveScores, {})}<section class="py-12 bg-white/2"><div class="max-container max-w-4xl text-center"><div class="glass p-12 rounded-3xl border border-primary/20 bg-primary/5"><h3 class="text-3xl font-black mb-4">¿Quieres ver estos partidos en vivo?</h3><p class="text-gray-300 text-lg mb-8">Obtén acceso a todos los canales deportivos del mundo en verdadero 4K sin interrupciones.</p><a href="/#section-pricing" class="btn-primary inline-flex px-8 py-4 text-lg font-bold">Ver Planes Premium</a></div></div></section>` })}`;
}, "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/deportes.astro", void 0);
var $$file = "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/deportes.astro";
var $$url = "/deportes";
//#endregion
//#region \0virtual:astro:page:src/pages/deportes@_@astro
var page = () => deportes_exports;
//#endregion
export { page, __exportAll as t };
