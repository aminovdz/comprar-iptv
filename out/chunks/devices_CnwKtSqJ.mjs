globalThis.process ??= {};
globalThis.process.env ??= {};
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_BJRdJ6PM.mjs";
import { t as createComponent } from "./compiler_DX3pyeFk.mjs";
import { t as $$Layout } from "./Layout_BQ-cj7lB.mjs";
import { t as __exportAll } from "./deportes_j254gHWi.mjs";
//#region src/pages/devices.astro
var devices_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Devices,
	file: () => $$file,
	url: () => $$url
});
var $$Devices = createComponent(($$result, $$props, $$slots) => {
	const devices = [
		{
			name: "Smart TV",
			icon: "📺",
			details: "Compatible con Samsung (Tizen), LG (WebOS), Sony y Philips (Android TV).",
			apps: [
				"IBO Player",
				"IPTV Smarters",
				"Smart IPTV",
				"Nanomid"
			]
		},
		{
			name: "Amazon Firestick",
			icon: "🔥",
			details: "La opción más popular. Soporta todas las versiones: Lite, 4K y Max.",
			apps: [
				"Tivimate",
				"IPTV Smarters Pro",
				"XCIPTV"
			]
		},
		{
			name: "Android / iOS",
			icon: "📱",
			details: "Lleva tu televisión a cualquier parte en tu móvil o tablet.",
			apps: [
				"GSE Smart IPTV",
				"IPTV Expert",
				"Cloud Stream"
			]
		},
		{
			name: "PC / Laptop",
			icon: "💻",
			details: "Visualización directa en Windows, macOS o Linux sin hardware extra.",
			apps: [
				"VLC Player",
				"IPTV Smarters Desktop",
				"Web Player"
			]
		},
		{
			name: "Mag / Enigma2",
			icon: "📟",
			details: "Soporte completo para decodificadores dedicados y sistemas Linux.",
			apps: [
				"Portal Stalker",
				"M3U Playlist",
				"Xtream Codes"
			]
		},
		{
			name: "TV Box",
			icon: "📦",
			details: "Transforma cualquier televisión en una Smart TV de alta gama.",
			apps: [
				"Perfect Player",
				"OttPlayer",
				"Tivimate Premium"
			]
		}
	];
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Dispositivos Compatibles | Comprar IPTV",
		"description": "Descubre todos los dispositivos compatibles con nuestro servicio IPTV. Desde Smart TV hasta Firestick y móviles."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="fixed top-0 w-full z-50 glass border-b border-white/5 px-6 py-4"><div class="max-w-7xl mx-auto flex justify-between items-center"><a href="/" class="text-2xl font-bold tracking-tighter flex items-center gap-2"><span class="text-primary">Comprar</span><span class="text-secondary">IPTV</span></a><a href="/" class="text-sm font-medium hover:text-secondary">Volver al Inicio</a></div></header><main class="pt-40 pb-24 px-6"><div class="max-w-5xl mx-auto"><div class="text-center mb-16"><h1 class="text-5xl font-bold mb-6">Dispositivos Compatibles</h1><p class="text-slate-400 text-lg max-w-2xl mx-auto">Nuestro servicio es compatible con el 99% de los dispositivos modernos. No necesitas hardware costoso ni instalaciones complejas.</p></div><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">${devices.map((d) => renderTemplate`<div class="glass-card p-10 rounded-3xl border-white/5 hover:border-primary/30 transition-all group"><div class="text-5xl mb-6 group-hover:scale-110 transition-transform">${d.icon}</div><h2 class="text-2xl font-bold mb-4">${d.name}</h2><p class="text-slate-400 text-sm mb-8 leading-relaxed">${d.details}</p><div class="space-y-2"><div class="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">Apps Recomendadas</div><div class="flex flex-wrap gap-2">${d.apps.map((app) => renderTemplate`<span class="bg-white/5 px-3 py-1 rounded-full text-[10px] font-medium border border-white/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors">${app}</span>`)}</div></div></div>`)}</div><!-- Help CTA --><div class="mt-20 glass-card p-12 rounded-[40px] text-center border-secondary/20"><h2 class="text-3xl font-bold mb-4">¿No ves tu dispositivo en la lista?</h2><p class="text-slate-400 mb-8">No te preocupes, lo más probable es que sea compatible. Pregúntanos y te ayudaremos.</p><a href="https://wa.link/9ezhx6" class="inline-block bg-secondary text-dark px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform">Consultar Compatibilidad</a></div></div></main>` })}`;
}, "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/devices.astro", void 0);
var $$file = "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/devices.astro";
var $$url = "/devices";
//#endregion
//#region \0virtual:astro:page:src/pages/devices@_@astro
var page = () => devices_exports;
//#endregion
export { page };
