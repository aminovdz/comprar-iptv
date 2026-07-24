globalThis.process ??= {};
globalThis.process.env ??= {};
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_BJRdJ6PM.mjs";
import { t as createComponent } from "./compiler_DX3pyeFk.mjs";
import { t as __exportAll } from "./deportes_j254gHWi.mjs";
import { t as $$LegalLayout } from "./LegalLayout_CXzteW6A.mjs";
//#region src/pages/terms.astro
var terms_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Terms,
	file: () => $$file,
	url: () => $$url
});
var $$Terms = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "LegalLayout", $$LegalLayout, { "title": "Términos y Condiciones" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section id="general"><h2>1. Aceptación de los términos</h2><p>Al acceder a nuestro sitio web y contratar nuestros servicios, el usuario acepta de manera íntegra y sin reservas los presentes términos y condiciones.</p></section><section id="usage"><h2>2. Uso del Servicio</h2><p>El servicio proporcionado por <strong>Comprar IPTV</strong> es estrictamente para uso personal y privado. Queda prohibida la redistribución, retransmisión o uso comercial de la señal sin consentimiento expreso por escrito.</p><p>El acceso se realiza mediante protocolos estándar y aplicaciones compatibles. El usuario es responsable de contar con el hardware y la conexión a internet necesarios para el correcto funcionamiento.</p></section><section id="refund"><h2>3. Política de Reembolso (Garantía de 7 Días)</h2><p>En Comprar IPTV priorizamos la satisfacción del cliente. Ofrecemos una <strong>garantía de reembolso de 7 días</strong> en las siguientes condiciones:</p><ul><li>El servicio presenta fallos técnicos persistentes imputables a nuestra red de servidores.</li><li>No se ha podido establecer conexión inicial tras seguir todas las guías de soporte.</li><li>La solicitud se realiza dentro de los primeros 7 días naturales tras la activación.</li></ul><p>Debido a la naturaleza digital del servicio, una vez transcurrido este periodo o si se detecta un uso abusivo del sistema, no se realizarán reembolsos.</p></section><section id="compliance"><h2>4. Responsabilidad y Contenido</h2><p>Proporcionamos acceso a miles de transmisiones globales y un extenso catálogo bajo demanda. No controlamos el contenido individual de cada transmisión y no nos hacemos responsables de cambios en la programación de terceros.</p></section><section id="support"><h2>5. Soporte y Comunicación</h2><p>El soporte técnico se presta exclusivamente a través de WhatsApp y Telegram en el horario indicado. No garantizamos tiempos de respuesta inmediatos durante eventos de alta demanda, aunque nuestro equipo trabaja 24/7 para mantener la estabilidad.</p></section>` })}`;
}, "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/terms.astro", void 0);
var $$file = "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/terms.astro";
var $$url = "/terms";
//#endregion
//#region \0virtual:astro:page:src/pages/terms@_@astro
var page = () => terms_exports;
//#endregion
export { page };
