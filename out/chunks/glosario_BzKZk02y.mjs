globalThis.process ??= {};
globalThis.process.env ??= {};
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_BJRdJ6PM.mjs";
import { t as createComponent } from "./compiler_DX3pyeFk.mjs";
import { t as $$Layout } from "./Layout_BQ-cj7lB.mjs";
import { t as __exportAll } from "./deportes_j254gHWi.mjs";
//#region src/pages/glosario.astro
var glosario_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Glosario,
	file: () => $$file,
	url: () => $$url
});
var $$Glosario = createComponent(($$result, $$props, $$slots) => {
	const terms = [
		{
			term: "IPTV",
			definition: "Internet Protocol Television. Se refiere a la transmisión de contenido televisivo a través de redes de protocolo de internet (IP) en lugar de los formatos tradicionales de satélite o cable."
		},
		{
			term: "EPG",
			definition: "Electronic Program Guide. Es la guía electrónica de programación que muestra los horarios y detalles de los programas de televisión en tiempo real."
		},
		{
			term: "VOD",
			definition: "Video On Demand. Servicio que permite a los usuarios acceder a un amplio catálogo de películas y series para ver en cualquier momento, sin horarios fijos."
		},
		{
			term: "Xtream Codes",
			definition: "Un protocolo y sistema de gestión muy extendido en el mundo IPTV que permite la conexión mediante un servidor, un usuario y una contraseña."
		},
		{
			term: "M3U",
			definition: "Un formato de archivo de lista de reproducción que contiene los enlaces a los flujos multimedia. Es compatible con la mayoría de reproductores IPTV."
		},
		{
			term: "Anti-Freeze",
			definition: "Tecnología implementada en los servidores para minimizar los cortes y el buffering, garantizando una señal fluida incluso en eventos de máxima audiencia."
		},
		{
			term: "4K / Ultra HD",
			definition: "Resolución de imagen de 3840 x 2160 píxeles, que ofrece una nitidez cuatro veces superior al estándar de alta definición (Full HD)."
		},
		{
			term: "CDN",
			definition: "Content Delivery Network. Una red de servidores distribuidos geográficamente que ayuda a entregar el contenido de forma más rápida y estable según la ubicación del usuario."
		},
		{
			term: "Catch-up",
			definition: "Función de 'televisión a la carta' que permite ver programas que ya han sido emitidos en directo, normalmente hasta 3 o 7 días atrás."
		},
		{
			term: "Zapping",
			definition: "La acción de cambiar de canal. En el IPTV profesional, se busca que el tiempo de carga entre canales sea inferior a un segundo."
		}
	];
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Glosario IPTV: Términos y Conceptos Técnicos | Comprar IPTV",
		"description": "Aprende todo sobre el vocabulario IPTV: EPG, VOD, Xtream Codes, Listas M3U y más. Entiende la tecnología detrás de tu televisión."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="relative pt-40 pb-20 px-6 overflow-hidden"><div class="max-w-7xl mx-auto text-center"><h1 class="text-5xl md:text-7xl font-bold mb-6">Glosario <span class="text-secondary">IPTV</span></h1><p class="text-lg text-slate-400 max-w-2xl mx-auto">Conceptos clave explicados de forma sencilla para que entiendas cómo funciona tu servicio.</p></div></header><main class="pb-24 px-6"><div class="max-w-4xl mx-auto grid gap-6">${terms.map((t) => renderTemplate`<div class="glass-card p-10 rounded-[32px] border-white/5 hover:border-primary/20 transition-all group"><h2 class="text-2xl font-bold mb-4 group-hover:text-secondary transition-colors">${t.term}</h2><p class="text-slate-400 leading-relaxed">${t.definition}</p></div>`)}</div><!-- Help CTA --><div class="mt-20 max-w-4xl mx-auto glass-card p-12 rounded-[40px] text-center border-primary/20"><h2 class="text-3xl font-bold mb-6">¿Aún tienes dudas técnicas?</h2><p class="text-slate-400 mb-10">Nuestro equipo de soporte está disponible 24/7 para explicarte cualquier detalle y ayudarte con la configuración.</p><a href="https://wa.link/9ezhx6" class="inline-block bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-primary/20">Hablar con un Experto</a></div></main>` })}`;
}, "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/glosario.astro", void 0);
var $$file = "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/glosario.astro";
var $$url = "/glosario";
//#endregion
//#region \0virtual:astro:page:src/pages/glosario@_@astro
var page = () => glosario_exports;
//#endregion
export { page };
