globalThis.process ??= {};
globalThis.process.env ??= {};
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_BJRdJ6PM.mjs";
import { t as createComponent } from "./compiler_DX3pyeFk.mjs";
import { t as __exportAll } from "./deportes_j254gHWi.mjs";
import { t as $$LegalLayout } from "./LegalLayout_CXzteW6A.mjs";
//#region src/pages/privacy.astro
var privacy_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Privacy,
	file: () => $$file,
	url: () => $$url
});
var $$Privacy = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "LegalLayout", $$LegalLayout, { "title": "Política de Privacidad" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<p>Última actualización: 8 de mayo de 2026</p><h2>1. Información que recopilamos</h2><p>En Comprar IPTV, valoramos tu privacidad. No almacenamos registros de actividad ni datos personales sensibles fuera de lo necesario para gestionar tu suscripción (email y contacto de WhatsApp).</p><h2>2. Uso de la información</h2><p>La información recopilada se utiliza exclusivamente para:</p><ul><li>Entrega de credenciales de servicio.</li><li>Soporte técnico personalizado.</li><li>Notificaciones sobre el estado del servidor.</li></ul><h2>3. Protección de datos</h2><p>Implementamos medidas de seguridad avanzadas para proteger tus datos contra el acceso no autorizado. No compartimos información con terceros bajo ninguna circunstancia.</p>` })}`;
}, "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/privacy.astro", void 0);
var $$file = "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/privacy.astro";
var $$url = "/privacy";
//#endregion
//#region \0virtual:astro:page:src/pages/privacy@_@astro
var page = () => privacy_exports;
//#endregion
export { page };
