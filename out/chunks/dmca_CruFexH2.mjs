globalThis.process ??= {};
globalThis.process.env ??= {};
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_BJRdJ6PM.mjs";
import { t as createComponent } from "./compiler_DX3pyeFk.mjs";
import { t as __exportAll } from "./deportes_j254gHWi.mjs";
import { t as $$LegalLayout } from "./LegalLayout_CXzteW6A.mjs";
//#region src/pages/dmca.astro
var dmca_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Dmca,
	file: () => $$file,
	url: () => $$url
});
var $$Dmca = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "LegalLayout", $$LegalLayout, { "title": "Aviso DMCA" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<h2>Aviso DMCA y Descargo de Responsabilidad</h2><p>Este sitio web es un blog informativo y de reseñas. <strong>No alojamos, controlamos, proporcionamos ni vendemos</strong> ninguno de los productos, servicios o contenidos mencionados o reseñados en este sitio.</p><p>Todo el contenido, las guías y los artículos se proporcionan estrictamente con <strong>fines educativos e informativos</strong>.</p><p>No asumimos ninguna responsabilidad sobre cómo los usuarios puedan decidir usar la información aquí contenida. Los usuarios son responsables de cumplir con las leyes locales relativas al streaming y la protección de derechos de autor.</p><p>Si cree que algún contenido de este sitio infringe sus derechos de autor, comuníquese con nosotros y eliminaremos de inmediato cualquier enlace o referencia infractora.</p>` })}`;
}, "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/dmca.astro", void 0);
var $$file = "/Users/Mc/Documents/antigravity/comprar-iptv/src/pages/dmca.astro";
var $$url = "/dmca";
//#endregion
//#region \0virtual:astro:page:src/pages/dmca@_@astro
var page = () => dmca_exports;
//#endregion
export { page };
