globalThis.process ??= {};
globalThis.process.env ??= {};
import { g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_BJRdJ6PM.mjs";
import { t as createComponent } from "./compiler_DX3pyeFk.mjs";
import { t as $$Layout } from "./Layout_BQ-cj7lB.mjs";
import { t as __exportAll } from "./deportes_j254gHWi.mjs";
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const brandName = "comprar iptv";
	const waLink = "https://wa.link/9ezhx6";
	const prices = [
		{
			name: "Plan Anual",
			price: "55€",
			duration: "12 Meses",
			features: [
				"1 Conexión Simultánea",
				"Calidad Ultra HD / 4K",
				"VOD Premium Actualizado",
				"Soporte VIP 24/7",
				"Ahorro del 50%"
			],
			popular: true,
			bonus: "Licencia de reproductor (12 meses incluido)",
			bonusIcon: "🎁"
		},
		{
			name: "Plan Semestral",
			price: "30€",
			duration: "6 Meses",
			features: [
				"1 Conexión Simultánea",
				"Calidad Ultra HD / 4K",
				"VOD Premium Actualizado",
				"Soporte Prioritario",
				"Mejor Valor"
			],
			popular: false
		},
		{
			name: "Plan Trimestral",
			price: "20€",
			duration: "3 Meses",
			features: [
				"1 Conexión Simultánea",
				"Calidad Full HD",
				"VOD Premium",
				"Soporte Estándar",
				"Pago Flexible"
			],
			popular: false
		},
		{
			name: "Plan Mensual",
			price: "8€",
			duration: "1 Mes",
			features: [
				"1 Conexión Simultánea",
				"Calidad Full HD",
				"Acceso Total",
				"Soporte Básico"
			],
			popular: false
		}
	];
	const testimonials = [
		{
			name: "Carlos M.",
			city: "Madrid",
			text: "La estabilidad es increíble. He probado muchos servicios y este es el único que no se corta durante los partidos de Champions. Muy recomendable.",
			rating: 5
		},
		{
			name: "Elena G.",
			city: "Barcelona",
			text: "El soporte por WhatsApp me ayudó a configurarlo en mi Smart TV en 5 minutos. El catálogo de películas es inmenso y en 4K.",
			rating: 5
		},
		{
			name: "Javier R.",
			city: "Sevilla",
			text: "Excelente relación calidad-precio. Llevo 6 meses con el plan anual y no he tenido ni un solo problema. Calidad 10/10.",
			rating: 5
		}
	];
	const cities = [
		"Madrid",
		"Barcelona",
		"Valencia",
		"Zaragoza",
		"Sevilla"
	];
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Comprar IPTV en España | IPTV Profesional y Estable",
		"description": "¿Buscas Comprar IPTV en España? Disfruta del mejor IPTV Profesional. Miles de canales, cine y series en 4K sin cortes. Solicita tu Prueba IPTV gratis hoy."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="fixed top-0 w-full z-50 glass border-b border-white/5 px-6 py-4"><div class="max-w-7xl mx-auto flex justify-between items-center"><a href="/" class="text-2xl font-bold tracking-tighter flex items-center gap-2"><span class="text-primary">Comprar</span><span class="text-secondary">IPTV</span></a><nav class="hidden lg:flex gap-8 items-center text-sm font-medium"><a href="#features" class="hover:text-secondary transition-colors">Características</a><a href="/deportes" class="hover:text-secondary transition-colors text-primary font-bold">Deportes en Vivo</a><a href="/devices" class="hover:text-secondary transition-colors">Dispositivos</a><a href="/blog" class="hover:text-secondary transition-colors">Blog</a><a href="#pricing" class="hover:text-secondary transition-colors">Precios</a><a href="/guides" class="hover:text-secondary transition-colors">Guías</a><a${addAttribute(waLink, "href")} class="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-full transition-all">Empieza Ya</a></nav><!-- Mobile Menu Button --><button id="menu-btn" class="lg:hidden text-white p-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button></div><!-- Mobile Menu Drawer --><div id="mobile-menu" class="fixed inset-0 bg-dark z-[60] flex flex-col p-8 translate-x-full transition-transform duration-300 lg:hidden"><div class="flex justify-between items-center mb-12"><span class="text-2xl font-bold">Menú</span><button id="close-menu" class="p-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="12"></line></svg></button></div><nav class="flex flex-col gap-6 text-xl font-bold"><a href="/" class="mobile-link">Inicio</a><a href="/deportes" class="mobile-link text-primary">Deportes en Vivo</a><a href="#features" class="mobile-link">Características</a><a href="/devices" class="mobile-link">Dispositivos</a><a href="/blog" class="mobile-link">Blog</a><a href="/glosario" class="mobile-link">Glosario</a><a href="#pricing" class="mobile-link">Precios</a><a href="/guides" class="mobile-link">Guías</a><a${addAttribute(waLink, "href")} class="bg-primary text-center py-4 rounded-xl mt-4">Comprar Ahora</a></nav></div></header><main><!-- Hero Section --><section class="relative pt-32 pb-24 px-6 overflow-hidden"><!-- Abstract Background --><div class="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -z-10"></div><div class="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] -z-10"></div><div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center animate-fade-up"><div class="text-center lg:text-left"><div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold mb-6"><span class="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>Disponibilidad Inmediata en España 🇪🇸</div><h1 class="text-5xl md:text-6xl xl:text-7xl font-bold mb-6 leading-tight"><span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Comprar IPTV</span> Profesional en España</h1><p class="text-lg md:text-xl text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0">Accede a miles de canales mundiales, cine de estreno y las mejores series con la estabilidad que te mereces. Calidad 4K garantizada.</p><div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"><a href="#pricing" class="px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-primary/20">Ver Planes y Precios</a><a${addAttribute(waLink, "href")} class="px-8 py-4 glass text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all border border-white/10">Solicitar Prueba Gratis</a></div></div><div class="relative group mt-12 lg:mt-0"><div class="absolute -inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl -z-10"></div><img src="/hero.png" alt="Comprar IPTV España - Disfruta del mejor fútbol en directo en calidad 4K en tu Smart TV con la suscripción más estable." class="w-full rounded-3xl shadow-2xl border border-white/10 object-cover aspect-[4/3] transform group-hover:scale-[1.02] transition-transform duration-500"></div></div></section><!-- Features Grid --><section id="features" class="py-24 px-6"><div class="max-w-7xl mx-auto grid md:grid-cols-3 gap-8"><div class="glass-card p-10 rounded-3xl group hover:border-primary/50 transition-all"><div class="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></div><h3 class="text-2xl font-bold mb-4">IPTV España: Estabilidad Total</h3><p class="text-slate-400 leading-relaxed">Servidores de alta gama con redundancia para asegurar que nunca te pierdas ni un segundo de tu contenido favorito.</p></div><div class="glass-card p-10 rounded-3xl group hover:border-secondary/50 transition-all"><div class="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="15" x="2" y="3" rx="2" ry="2"></rect><circle cx="12" cy="18" r="1"></circle></svg></div><h3 class="text-2xl font-bold mb-4">Contenido 4K / Ultra HD</h3><p class="text-slate-400 leading-relaxed">Disfruta de la mejor calidad de imagen disponible en el mercado. Compatible con todos los formatos modernos.</p></div><div class="glass-card p-10 rounded-3xl group hover:border-green-500/50 transition-all"><div class="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 text-green-500 group-hover:scale-110 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></div><h3 class="text-2xl font-bold mb-4">Soporte Técnico Real</h3><p class="text-slate-400 leading-relaxed">Equipo humano disponible por WhatsApp para ayudarte en la configuración de cualquier dispositivo.</p></div></div></section><!-- Pricing Table --><section id="pricing" class="py-24 px-6 bg-white/[0.02]"><div class="max-w-7xl mx-auto"><div class="text-center mb-16"><h2 class="text-4xl md:text-6xl font-bold mb-6">Tu IPTV Profesional sin cortes</h2><p class="text-slate-400">Planes de alta calidad con prueba IPTV de 24 horas disponible.</p></div><div class="grid lg:grid-cols-4 gap-8">${prices.map((plan) => renderTemplate`<div${addAttribute(`glass-card p-10 rounded-3xl relative flex flex-col transition-all hover:-translate-y-2 ${plan.popular ? "border-secondary/50 ring-1 ring-secondary/20 scale-105 z-10" : "border-white/10"}`, "class")}>${plan.popular && renderTemplate`<div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-dark px-6 py-1 rounded-full text-xs font-black uppercase tracking-widest">Más Popular</div>`}<div class="mb-8"><h3 class="text-xl font-bold mb-1">${plan.name}</h3><div class="text-sm text-slate-500">${plan.duration}</div></div><div class="flex items-baseline gap-1 mb-8"><span class="text-5xl font-bold">${plan.price}</span><span class="text-slate-400">/total</span></div><ul class="space-y-4 mb-10 flex-grow text-sm">${plan.features.map((f) => renderTemplate`<li class="flex items-start gap-3"><svg class="text-secondary mt-1 shrink-0" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><span class="text-slate-300">${f}</span></li>`)}${plan.bonus && renderTemplate`<li class="flex items-start gap-3 p-3 bg-secondary/10 rounded-xl border border-secondary/20"><span class="text-lg leading-none">${plan.bonusIcon}</span><span class="text-secondary font-bold">${plan.bonus}</span></li>`}</ul><a${addAttribute(waLink, "href")}${addAttribute(`block w-full py-4 rounded-xl font-bold text-center transition-all ${plan.popular ? "bg-secondary text-dark shadow-lg shadow-secondary/30" : "bg-white/5 hover:bg-white/10 border border-white/10"}`, "class")}>Seleccionar Plan</a></div>`)}</div></div></section><!-- Referral Section --><section class="py-24 px-6"><div class="max-w-5xl mx-auto glass-card p-12 rounded-[40px] border-primary/20 relative overflow-hidden"><div class="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"></div><div class="relative z-10 flex flex-col md:flex-row items-center gap-12"><div class="flex-1 text-center md:text-left"><div class="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-4 uppercase tracking-widest">Programa de Referidos</div><h2 class="text-3xl md:text-4xl font-bold mb-6">Recomienda nuestro IPTV y gana meses gratis</h2><p class="text-slate-400 text-lg leading-relaxed mb-8">Indica el número de WhatsApp de la persona que te recomendó al realizar tu pedido y **ambos recibiréis +1 Mes de regalo** totalmente gratis.</p><a${addAttribute(waLink, "href")} class="inline-block bg-primary text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform">Consultar con Soporte</a></div><div class="w-48 h-48 bg-white/5 rounded-3xl flex items-center justify-center border border-white/10 rotate-3"><span class="text-7xl">🤝</span></div></div></div></section><!-- Testimonials --><section class="py-24 px-6 bg-white/[0.02]"><div class="max-w-7xl mx-auto"><div class="text-center mb-16"><h2 class="text-4xl font-bold mb-4">Lo que dicen nuestros clientes</h2><p class="text-slate-400 text-lg">Más de 5.000 usuarios activos en toda España.</p></div><div class="grid md:grid-cols-3 gap-8">${testimonials.map((t) => renderTemplate`<div class="glass-card p-10 rounded-3xl flex flex-col"><div class="flex gap-1 text-secondary mb-6">${[...Array(t.rating)].map(() => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>`)}</div><p class="text-slate-300 italic mb-8 flex-grow leading-relaxed">"${t.text}"</p><div class="flex items-center gap-4"><div class="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center font-bold text-secondary border border-white/10">${t.name.charAt(0)}</div><div><div class="font-bold">${t.name}</div><div class="text-xs text-slate-500">${t.city}</div></div></div></div>`)}</div></div></section><!-- How to Activate --><section class="py-24 px-6"><div class="max-w-7xl mx-auto"><div class="text-center mb-16"><h2 class="text-4xl font-bold mb-4">¿Cómo activar tu suscripción IPTV?</h2><p class="text-slate-400 text-lg">Un proceso simple y rápido en 3 pasos.</p></div><div class="grid md:grid-cols-3 gap-8 relative"><div class="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 -z-10"></div><div class="glass-card p-10 rounded-3xl text-center relative bg-dark"><div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-6 shadow-[0_0_30px_rgba(var(--color-primary),0.3)]">1</div><h3 class="text-xl font-bold mb-4">Elige tu plan</h3><p class="text-slate-400">Selecciona la duración que mejor se adapte a ti: 1, 3, 6 o 12 meses según tus necesidades.</p></div><div class="glass-card p-10 rounded-3xl text-center relative bg-dark"><div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-6 shadow-[0_0_30px_rgba(var(--color-primary),0.3)]">2</div><h3 class="text-xl font-bold mb-4">Pago Seguro</h3><p class="text-slate-400">Realiza tu pago mediante nuestros métodos seguros. Recibirás una confirmación inmediata.</p></div><div class="glass-card p-10 rounded-3xl text-center relative bg-dark"><div class="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-6 shadow-[0_0_30px_rgba(var(--color-primary),0.3)]">3</div><h3 class="text-xl font-bold mb-4">Instalación Guiada</h3><p class="text-slate-400">Nuestros técnicos te acompañan paso a paso por WhatsApp para configurar la app en tu dispositivo.</p></div></div></div></section><!-- Catalog / Features List --><section class="py-24 px-6 bg-white/[0.02]"><div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16"><div class="flex-1"><h2 class="text-4xl font-bold mb-6 leading-tight">Miles de canales mundiales al alcance de tu mano</h2><p class="text-slate-400 text-lg mb-8">Nuestra <strong>suscripción IPTV</strong> te da acceso a un inmenso catálogo de canales internacionales. Ya seas fan del deporte, cine, documentales o contenido infantil, lo tenemos todo.</p><ul class="space-y-4"><li class="flex items-center gap-3 text-slate-300"><span class="w-2 h-2 rounded-full bg-secondary"></span> Deporte y Eventos en Directo</li><li class="flex items-center gap-3 text-slate-300"><span class="w-2 h-2 rounded-full bg-secondary"></span> Cine y Series Ilimitados</li><li class="flex items-center gap-3 text-slate-300"><span class="w-2 h-2 rounded-full bg-secondary"></span> Canales Españoles y Locales</li><li class="flex items-center gap-3 text-slate-300"><span class="w-2 h-2 rounded-full bg-secondary"></span> Documentales y Descubrimiento</li><li class="flex items-center gap-3 text-slate-300"><span class="w-2 h-2 rounded-full bg-secondary"></span> Canales Infantiles</li><li class="flex items-center gap-3 text-slate-300"><span class="w-2 h-2 rounded-full bg-secondary"></span> Eventos PPV (Pago por Visión)</li></ul></div><div class="flex-1 relative group"><div class="absolute -inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[40px] -z-10"></div><img src="/devices.png" alt="Prueba IPTV Profesional - Nuestro servicio premium es compatible con todos tus dispositivos: Smart TV, tabletas y smartphones para ver el mejor cine y series." class="w-full rounded-[40px] shadow-2xl border border-white/10"></div></div></section><!-- FAQ --><section class="py-24 px-6"><div class="max-w-4xl mx-auto"><div class="text-center mb-16"><h2 class="text-4xl font-bold mb-4">Preguntas Frecuentes</h2><p class="text-slate-400 text-lg">Resolvemos tus dudas principales sobre nuestro servicio.</p></div><div class="space-y-6"><div class="glass-card p-8 rounded-3xl"><h3 class="text-xl font-bold mb-3 text-white">¿Qué es una suscripción IPTV?</h3><p class="text-slate-400">El IPTV (Televisión por Protocolo de Internet) te permite ver televisión a través de tu conexión a internet en lugar de utilizar cables o satélites tradicionales, ofreciendo mayor variedad y calidad.</p></div><div class="glass-card p-8 rounded-3xl"><h3 class="text-xl font-bold mb-3 text-white">¿Qué dispositivos son compatibles?</h3><p class="text-slate-400">Nuestro servicio es compatible con Smart TV (Samsung, LG), Android Box, Amazon Firestick, Apple TV, Smartphones, Tablets y PC.</p></div><div class="glass-card p-8 rounded-3xl border-secondary/30 relative overflow-hidden"><div class="absolute top-0 right-0 bg-secondary text-dark text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">Recomendado</div><h3 class="text-xl font-bold mb-3 text-white">¿Es necesario o recomendable usar una VPN?</h3><p class="text-slate-400">Aunque nuestro servicio cuenta con protección Anti-Freeze avanzada, <strong>recomendamos fuertemente el uso de una VPN</strong> para garantizar tu privacidad total y evitar cualquier bloqueo preventivo de tu proveedor de internet durante partidos importantes. Te sugerimos <a href="https://protonvpn.com/" target="_blank" rel="nofollow noopener" class="text-secondary hover:underline font-semibold">ProtonVPN</a>, que ofrece una versión gratuita muy fiable y segura.</p></div><div class="glass-card p-8 rounded-3xl"><h3 class="text-xl font-bold mb-3 text-white">¿Puedo probar el servicio antes de comprar?</h3><p class="text-slate-400">Sí, ofrecemos pruebas de 24 horas para que puedas verificar la calidad de nuestros canales y el catálogo VOD antes de comprometerte.</p></div><div class="glass-card p-8 rounded-3xl"><h3 class="text-xl font-bold mb-3 text-white">¿Cómo se realiza la activación?</h3><p class="text-slate-400">Una vez confirmado el pago, la activación es generalmente instantánea o toma un máximo de 15 a 30 minutos.</p></div></div></div></section><!-- Local SEO Footer --><section class="py-16 px-6 glass mt-20"><div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"><div><h2 class="text-2xl font-bold mb-2">Presencia en toda España</h2><p class="text-slate-400 text-sm">Servicio optimizado para:${cities.map((city, index) => renderTemplate`<a${addAttribute(`/locations/${city.toLowerCase().replace("í", "i")}`, "href")} class="hover:text-secondary underline decoration-white/10 underline-offset-4 mx-1">${city}${index < cities.length - 1 ? "," : ""}</a>`)}y más.</p></div><div class="flex flex-wrap justify-center gap-3"><span class="px-4 py-2 bg-white/5 rounded-full text-[10px] uppercase font-bold border border-white/10">Fibra Óptica</span><span class="px-4 py-2 bg-white/5 rounded-full text-[10px] uppercase font-bold border border-white/10">4K Ready</span><span class="px-4 py-2 bg-white/5 rounded-full text-[10px] uppercase font-bold border border-white/10">Sin Antena</span></div></div></section></main><footer class="py-20 px-6 border-t border-white/5"><div class="max-w-7xl mx-auto grid md:grid-cols-4 gap-16"><div class="col-span-2"><a href="/" class="text-2xl font-bold tracking-tighter flex items-center gap-2 mb-8"><span class="text-primary">Comprar</span><span class="text-secondary">IPTV</span></a><p class="text-slate-400 leading-relaxed max-w-sm mb-8">El proveedor líder de IPTV profesional en España. Calidad inmejorable, estabilidad extrema y el catálogo más extenso del mercado.</p><div class="flex gap-4"><a href="https://t.me/castvera_com" class="p-3 bg-white/5 rounded-xl hover:bg-secondary/20 transition-colors border border-white/10"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg></a><a href="https://whatsapp.com/channel/0029VayVaLpD8SE3bf8wMY3v" class="p-3 bg-white/5 rounded-xl hover:bg-green-500/20 transition-colors border border-white/10"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg></a></div></div><div><h4 class="font-bold mb-6 text-sm uppercase tracking-widest text-slate-500">Recursos</h4><ul class="space-y-4 text-sm text-slate-400"><li><a href="/blog" class="hover:text-secondary transition-colors">Blog & Noticias</a></li><li><a href="/glosario" class="hover:text-secondary transition-colors">Glosario IPTV</a></li><li><a href="/devices" class="hover:text-secondary transition-colors">Dispositivos Compatibles</a></li><li><a href="/guides" class="hover:text-secondary transition-colors">Guías de Instalación</a></li></ul></div><div><h4 class="font-bold mb-6 text-sm uppercase tracking-widest text-slate-500">Legal</h4><ul class="space-y-4 text-sm text-slate-400"><li><a href="/terms" class="hover:text-secondary transition-colors">Términos de Servicio</a></li><li><a href="/privacy" class="hover:text-secondary transition-colors">Privacidad</a></li><li><a href="/terms#refund" class="hover:text-secondary transition-colors">Política de Reembolso</a></li><li><a href="/dmca" class="hover:text-secondary transition-colors">Aviso DMCA</a></li></ul></div></div><div class="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 text-center text-xs text-slate-600"><p class="mb-4 text-[10px] text-slate-500 max-w-4xl mx-auto">Descargo de responsabilidad: Este sitio web es un blog informativo y de reseñas. No alojamos, controlamos ni vendemos ninguno de los productos mencionados en este sitio. Todo el contenido es solo para fines educativos.</p>&copy; 2026 ${brandName}. Todos los derechos reservados. IPTV de alta calidad para usuarios exigentes.</div></footer><div class="fixed bottom-0 left-0 w-full z-40 bg-dark text-white py-3 px-6 transform translate-y-full transition-transform duration-500 border-t border-white/10" id="sticky-countdown"><div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4"><div class="flex items-center gap-3 text-sm font-bold"><span class="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>OFERTA FLASH: -10% EXTRA EN EL PLAN DE 12 MESES</div><div class="flex items-center gap-6"><div class="flex gap-4 text-center font-mono text-xl font-bold"><div><span id="hours">02</span><div class="text-[8px] uppercase tracking-widest opacity-50">Hrs</div></div><div><span id="minutes">45</span><div class="text-[8px] uppercase tracking-widest opacity-50">Min</div></div><div><span id="seconds">12</span><div class="text-[8px] uppercase tracking-widest opacity-50">Sec</div></div></div><a href="https://wa.link/9ezhx6" class="bg-primary text-white px-6 py-2 rounded-full text-xs font-black uppercase hover:scale-105 transition-transform">Aprovechar Ahora</a></div></div></div><script>
		// Mobile Menu Logic
		const menuBtn = document.getElementById('menu-btn');
		const closeMenu = document.getElementById('close-menu');
		const mobileMenu = document.getElementById('mobile-menu');
		const links = document.querySelectorAll('.mobile-link');

		menuBtn.addEventListener('click', () => {
			mobileMenu.classList.remove('translate-x-full');
		});

		const closeDrawer = () => {
			mobileMenu.classList.add('translate-x-full');
		};

		closeMenu.addEventListener('click', closeDrawer);
		links.forEach(l => l.addEventListener('click', closeDrawer));



		// Sticky Countdown
		setTimeout(() => {
			document.getElementById('sticky-countdown')?.classList.remove('translate-y-full');
		}, 3000);

		// Timer Logic
		let h = 2, m = 45, s = 12;
		setInterval(() => {
			s--;
			if (s < 0) { s = 59; m--; }
			if (m < 0) { m = 59; h--; }
			document.getElementById('hours').textContent = h.toString().padStart(2, '0');
			document.getElementById('minutes').textContent = m.toString().padStart(2, '0');
			document.getElementById('seconds').textContent = s.toString().padStart(2, '0');
		}, 1000);
	<\/script>` })}`;
}, "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/index.astro", void 0);
var $$file = "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
