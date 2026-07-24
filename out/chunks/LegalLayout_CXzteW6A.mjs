globalThis.process ??= {};
globalThis.process.env ??= {};
import { i as renderComponent, m as maybeRenderHead, s as renderSlot, u as renderTemplate, w as createAstro } from "./server_BJRdJ6PM.mjs";
import { t as createComponent } from "./compiler_DX3pyeFk.mjs";
import { t as $$Layout } from "./Layout_BQ-cj7lB.mjs";
//#region src/layouts/LegalLayout.astro
createAstro("https://comprariptv.com");
var $$LegalLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$LegalLayout;
	const { title } = Astro.props;
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": `${title} | Comprar IPTV`,
		"description": `Legal information about ${title} on Comprar IPTV.`
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="pt-32 pb-10 text-center px-6"><h1 class="text-4xl font-bold mb-4">${title}</h1></header><main class="max-w-3xl mx-auto px-6 pb-24 prose prose-invert">${renderSlot($$result, $$slots["default"])}</main>` })}`;
}, "/Users/Mc/Documents/antigravity/comprar-iptv/src/layouts/LegalLayout.astro", void 0);
//#endregion
export { $$LegalLayout as t };
