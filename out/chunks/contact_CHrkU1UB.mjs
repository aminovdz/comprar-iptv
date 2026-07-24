globalThis.process ??= {};
globalThis.process.env ??= {};
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_BJRdJ6PM.mjs";
import { t as createComponent } from "./compiler_DX3pyeFk.mjs";
import { t as $$Layout } from "./Layout_BQ-cj7lB.mjs";
import { t as __exportAll } from "./deportes_j254gHWi.mjs";
//#region src/pages/contact.astro
var contact_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Contact,
	file: () => $$file,
	url: () => $$url
});
var $$Contact = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Contacto | Comprar IPTV España",
		"description": "¿Tienes dudas? Contacta con el equipo de Comprar IPTV. Estamos disponibles 24/7 por WhatsApp, Telegram y Email."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="pt-32 pb-10 text-center px-6"><h1 class="text-5xl font-bold mb-4">Contacto</h1><p class="text-slate-400">Estamos aquí para ayudarte. Elige tu canal preferido.</p></header><main class="max-w-4xl mx-auto px-6 pb-24"><div class="grid md:grid-cols-3 gap-6"><a href="https://whatsapp.com/channel/0029VayVaLpD8SE3bf8wMY3v" target="_blank" rel="noopener noreferrer" class="glass-card p-8 rounded-3xl text-center hover:border-green-500/50 transition-all"><div class="text-3xl mb-4">💬</div><h2 class="font-bold mb-2">WhatsApp Channel</h2><p class="text-xs text-slate-500 mb-4">Únete a nuestra comunidad</p><span class="text-sm text-green-400 font-bold">Unirse Ahora</span></a><a href="https://t.me/castvera_com" target="_blank" rel="noopener noreferrer" class="glass-card p-8 rounded-3xl text-center hover:border-blue-500/50 transition-all"><div class="text-3xl mb-4">✈️</div><h2 class="font-bold mb-2">Telegram Channel</h2><p class="text-xs text-slate-500 mb-4">Únete a nuestra comunidad</p><span class="text-sm text-blue-400 font-bold">Unirse Ahora</span></a><a href="mailto:contact@comprariptv.com" class="glass-card p-8 rounded-3xl text-center hover:border-primary/50 transition-all"><div class="text-3xl mb-4">✉️</div><h2 class="font-bold mb-2">Email</h2><p class="text-xs text-slate-500 mb-4">Para consultas comerciales</p><span class="text-sm text-primary font-bold">Enviar Correo</span></a></div><div class="mt-16 glass-card p-10 rounded-3xl border-white/5"><h2 class="text-2xl font-bold mb-6">Nuestros Canales de Difusión</h2><p class="text-slate-400 mb-8">Únete para recibir noticias sobre nuevos canales, actualizaciones de servidores y ofertas exclusivas.</p><div class="flex flex-col sm:flex-row gap-4"><a href="https://whatsapp.com/channel/0029VayVaLpD8SE3bf8wMY3v" class="flex-1 py-4 glass rounded-xl text-center font-bold text-sm">Canal WhatsApp</a><a href="https://t.me/castvera_com" class="flex-1 py-4 glass rounded-xl text-center font-bold text-sm">Canal Telegram</a></div></div></main>` })}`;
}, "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/contact.astro", void 0);
var $$file = "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/contact.astro";
var $$url = "/contact";
//#endregion
//#region \0virtual:astro:page:src/pages/contact@_@astro
var page = () => contact_exports;
//#endregion
export { page };
