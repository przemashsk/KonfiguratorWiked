import pdf from "@/components/pdf.vue";
import filtry from "@/components/filtry.vue";
import switcher from "@/components/Switch.vue";
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from "./App.vue";

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {} &
{ 'top'?: boolean; } &
{ 'myrow'?: boolean; } &
{ 'myrow'?: boolean; } &
{ 'mycolumn'?: boolean; } &
{ 'mobilefilter'?: boolean; } &
{ 'mobilefilter'?: boolean; } &
{ 'active'?: boolean; } &
{ 'botom'?: boolean; } &
{ 'top-section'?: boolean; } &
{ 'mobiledet'?: boolean; } &
{ 'mobiledet2'?: boolean; } &
{ 'cenamobile'?: boolean; } &
{ 'cenamobile'?: boolean; } &
{ 'last'?: boolean; } &
{ 'cena'?: boolean; } &
{ 'cena'?: boolean; } &
{ 'protect'?: boolean; } &
{ 'card'?: boolean; } &
{ 'card'?: boolean; } &
{ 'card'?: boolean; } &
{ 'card'?: boolean; } &
{ 'card'?: boolean; } &
{ 'card'?: boolean; } &
{ 'flex-1'?: boolean; } &
{ 'bg-success'?: boolean; } &
{ 'lewy'?: boolean; } &
{ 'lewy'?: boolean; } &
{ 'ups'?: boolean; } &
{ 'Podsumowanie'?: boolean; } &
{ 'filtryinspiracje'?: boolean; } &
{ 'filtryinspiracjeitem'?: boolean; } &
{ 'filtryinspiracjeitem'?: boolean; } &
{ 'active'?: boolean; } &
{ 'filtryinspiracjeitem'?: boolean; } &
{ 'bottom'?: boolean; } &
{ 'klaudia'?: boolean; } &
{ 'klaudia'?: boolean; } &
{ 'dafid'?: boolean; } &
{ 'curent'?: boolean; };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'tabs', typeof __VLS_localComponents, "Tabs", "tabs", "tabs"> &
__VLS_WithComponent<'filtry', typeof __VLS_localComponents, "Filtry", "filtry", "filtry"> &
__VLS_WithComponent<'konfigurator', typeof __VLS_localComponents, "Konfigurator", "konfigurator", "konfigurator"> &
__VLS_WithComponent<'prezenter', typeof __VLS_localComponents, "Prezenter", "prezenter", "prezenter"> &
__VLS_WithComponent<'switcher', typeof __VLS_localComponents, "Switcher", "switcher", "switcher"> &
__VLS_WithComponent<'wizualizacja', typeof __VLS_localComponents, "Wizualizacja", "wizualizacja", "wizualizacja"> &
__VLS_WithComponent<'podsumowanie', typeof __VLS_localComponents, "Podsumowanie", "podsumowanie", "podsumowanie"> &
__VLS_WithComponent<'pdf', typeof __VLS_localComponents, "Pdf", "pdf", "pdf">;
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_components.Tabs; __VLS_components.Tabs; __VLS_components.tabs; __VLS_components.tabs;
// @ts-ignore
[tabs, tabs,];
__VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span;
__VLS_intrinsicElements.img; __VLS_intrinsicElements.img; __VLS_intrinsicElements.img; __VLS_intrinsicElements.img; __VLS_intrinsicElements.img; __VLS_intrinsicElements.img; __VLS_intrinsicElements.img; __VLS_intrinsicElements.img; __VLS_intrinsicElements.img; __VLS_intrinsicElements.img;
__VLS_intrinsicElements.br; __VLS_intrinsicElements.br; __VLS_intrinsicElements.br;
__VLS_components.Filtry; __VLS_components.Filtry; __VLS_components.filtry; __VLS_components.filtry;
// @ts-ignore
[filtry, filtry,];
__VLS_components.Konfigurator; __VLS_components.Konfigurator; __VLS_components.konfigurator; __VLS_components.konfigurator;
// @ts-ignore
[konfigurator, konfigurator,];
__VLS_components.Prezenter; __VLS_components.Prezenter; __VLS_components.prezenter; __VLS_components.prezenter;
// @ts-ignore
[prezenter, prezenter,];
__VLS_components.Switcher; __VLS_components.Switcher; __VLS_components.switcher; __VLS_components.switcher;
// @ts-ignore
[switcher, switcher,];
__VLS_components.Wizualizacja; __VLS_components.Wizualizacja; __VLS_components.wizualizacja; __VLS_components.wizualizacja;
// @ts-ignore
[wizualizacja, wizualizacja,];
__VLS_intrinsicElements.a; __VLS_intrinsicElements.a;
__VLS_components.Podsumowanie; __VLS_components.Podsumowanie; __VLS_components.podsumowanie; __VLS_components.podsumowanie;
// @ts-ignore
[podsumowanie, podsumowanie,];
__VLS_components.Pdf; __VLS_components.pdf;
// @ts-ignore
[pdf,];
__VLS_intrinsicElements.i; __VLS_intrinsicElements.i;
{
const __VLS_0 = __VLS_intrinsicElements["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, id: ("app"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, id: ("app"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = __VLS_intrinsicElements["div"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = ({} as 'Tabs' extends keyof typeof __VLS_ctx ? { 'tabs': typeof __VLS_ctx.Tabs; } : 'tabs' extends keyof typeof __VLS_ctx ? { 'tabs': typeof __VLS_ctx.tabs; } : typeof __VLS_resolvedLocalAndGlobalComponents).tabs;
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, style: ({}), }));
({} as { tabs: typeof __VLS_10; }).tabs;
({} as { tabs: typeof __VLS_10; }).tabs;
const __VLS_12 = __VLS_11({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
}
(__VLS_8.slots!).default;
}
if (__VLS_ctx.activeTab == 'protect') {
{
const __VLS_15 = __VLS_intrinsicElements["div"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
const __VLS_17 = __VLS_16({ ...{}, class: ("protect"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, class: ("protect"), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
{
const __VLS_20 = __VLS_intrinsicElements["div"];
const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
const __VLS_22 = __VLS_21({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
{
const __VLS_25 = __VLS_intrinsicElements["div"];
const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
const __VLS_27 = __VLS_26({ ...{ onClick: {} as any, }, class: ("card"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("card"), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
let __VLS_30 = { 'click': __VLS_pickEvent(__VLS_29['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_26, typeof __VLS_27>).onClick) };
__VLS_30 = {
click: $event => {
if (!((__VLS_ctx.activeTab == 'protect'))) return;

__VLS_ctx.product.protect = 'dom';
__VLS_ctx.handle('inspiracja');
;
// @ts-ignore
[activeTab, product, handle,];
}
};
{
const __VLS_31 = __VLS_intrinsicElements["div"];
const __VLS_32 = __VLS_elementAsFunctionalComponent(__VLS_31);
const __VLS_33 = __VLS_32({ ...{}, class: ("flex-1 text-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_31, typeof __VLS_33> & Record<string, unknown>) => void)({ ...{}, class: ("flex-1 text-center"), });
const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33)!;
let __VLS_35!: __VLS_NormalizeEmits<typeof __VLS_34.emit>;
{
const __VLS_36 = __VLS_intrinsicElements["span"];
const __VLS_37 = __VLS_elementAsFunctionalComponent(__VLS_36);
const __VLS_38 = __VLS_37({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_37));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_36, typeof __VLS_38> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38)!;
let __VLS_40!: __VLS_NormalizeEmits<typeof __VLS_39.emit>;
(__VLS_39.slots!).default;
}
(__VLS_34.slots!).default;
}
{
const __VLS_41 = __VLS_intrinsicElements["img"];
const __VLS_42 = __VLS_elementAsFunctionalComponent(__VLS_41);
const __VLS_43 = __VLS_42({ ...{}, alt: (""), src: ("/images/konfigurator/step1/dom.webp"), }, ...__VLS_functionalComponentArgsRest(__VLS_42));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_41, typeof __VLS_43> & Record<string, unknown>) => void)({ ...{}, alt: (""), src: ("/images/konfigurator/step1/dom.webp"), });
const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43)!;
let __VLS_45!: __VLS_NormalizeEmits<typeof __VLS_44.emit>;
}
(__VLS_28.slots!).default;
}
{
const __VLS_46 = __VLS_intrinsicElements["div"];
const __VLS_47 = __VLS_elementAsFunctionalComponent(__VLS_46);
const __VLS_48 = __VLS_47({ ...{ onClick: {} as any, }, class: ("card"), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_46, typeof __VLS_48> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("card"), });
const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48)!;
let __VLS_50!: __VLS_NormalizeEmits<typeof __VLS_49.emit>;
let __VLS_51 = { 'click': __VLS_pickEvent(__VLS_50['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_47, typeof __VLS_48>).onClick) };
__VLS_51 = {
click: $event => {
if (!((__VLS_ctx.activeTab == 'protect'))) return;

__VLS_ctx.product.protect = 'blok';
__VLS_ctx.product.seria = '60';
__VLS_ctx.handle('inspiracja');
;
// @ts-ignore
[product, product, handle,];
}
};
{
const __VLS_52 = __VLS_intrinsicElements["div"];
const __VLS_53 = __VLS_elementAsFunctionalComponent(__VLS_52);
const __VLS_54 = __VLS_53({ ...{}, class: ("flex-1 text-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_53));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_52, typeof __VLS_54> & Record<string, unknown>) => void)({ ...{}, class: ("flex-1 text-center"), });
const __VLS_55 = __VLS_pickFunctionalComponentCtx(__VLS_52, __VLS_54)!;
let __VLS_56!: __VLS_NormalizeEmits<typeof __VLS_55.emit>;
{
const __VLS_57 = __VLS_intrinsicElements["span"];
const __VLS_58 = __VLS_elementAsFunctionalComponent(__VLS_57);
const __VLS_59 = __VLS_58({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_58));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_57, typeof __VLS_59> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_60 = __VLS_pickFunctionalComponentCtx(__VLS_57, __VLS_59)!;
let __VLS_61!: __VLS_NormalizeEmits<typeof __VLS_60.emit>;
(__VLS_60.slots!).default;
}
(__VLS_55.slots!).default;
}
{
const __VLS_62 = __VLS_intrinsicElements["img"];
const __VLS_63 = __VLS_elementAsFunctionalComponent(__VLS_62);
const __VLS_64 = __VLS_63({ ...{}, alt: (""), src: ("/images/konfigurator/step1/mieszkanie.webp"), }, ...__VLS_functionalComponentArgsRest(__VLS_63));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_62, typeof __VLS_64> & Record<string, unknown>) => void)({ ...{}, alt: (""), src: ("/images/konfigurator/step1/mieszkanie.webp"), });
const __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_62, __VLS_64)!;
let __VLS_66!: __VLS_NormalizeEmits<typeof __VLS_65.emit>;
}
(__VLS_49.slots!).default;
}
(__VLS_23.slots!).default;
}
(__VLS_18.slots!).default;
}
}
if (__VLS_ctx.activeTab == 'inspiracja') {
{
const __VLS_67 = __VLS_intrinsicElements["div"];
const __VLS_68 = __VLS_elementAsFunctionalComponent(__VLS_67);
const __VLS_69 = __VLS_68({ ...{}, class: ("protect"), }, ...__VLS_functionalComponentArgsRest(__VLS_68));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_67, typeof __VLS_69> & Record<string, unknown>) => void)({ ...{}, class: ("protect"), });
const __VLS_70 = __VLS_pickFunctionalComponentCtx(__VLS_67, __VLS_69)!;
let __VLS_71!: __VLS_NormalizeEmits<typeof __VLS_70.emit>;
{
const __VLS_72 = __VLS_intrinsicElements["div"];
const __VLS_73 = __VLS_elementAsFunctionalComponent(__VLS_72);
const __VLS_74 = __VLS_73({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_72, typeof __VLS_74> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_75 = __VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74)!;
let __VLS_76!: __VLS_NormalizeEmits<typeof __VLS_75.emit>;
{
const __VLS_77 = __VLS_intrinsicElements["div"];
const __VLS_78 = __VLS_elementAsFunctionalComponent(__VLS_77);
const __VLS_79 = __VLS_78({ ...{ onClick: {} as any, }, class: ("card"), }, ...__VLS_functionalComponentArgsRest(__VLS_78));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_77, typeof __VLS_79> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("card"), });
const __VLS_80 = __VLS_pickFunctionalComponentCtx(__VLS_77, __VLS_79)!;
let __VLS_81!: __VLS_NormalizeEmits<typeof __VLS_80.emit>;
let __VLS_82 = { 'click': __VLS_pickEvent(__VLS_81['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_78, typeof __VLS_79>).onClick) };
__VLS_82 = {
click: $event => {
if (!((__VLS_ctx.activeTab == 'inspiracja'))) return;

__VLS_ctx.product.inspiracja = 'nie';
// handle('Model');
if (__VLS_ctx.product.protect != 'blok') {
__VLS_ctx.handle('plus');
} else {
__VLS_ctx.product.plus = 'nie';
__VLS_ctx.handle('Model');
}
__VLS_ctx.product.wzor = '01';
;
// @ts-ignore
[activeTab, product, product, handle, product, handle, product,];
}
};
{
const __VLS_83 = __VLS_intrinsicElements["div"];
const __VLS_84 = __VLS_elementAsFunctionalComponent(__VLS_83);
const __VLS_85 = __VLS_84({ ...{}, class: ("flex-1 text-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_84));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_83, typeof __VLS_85> & Record<string, unknown>) => void)({ ...{}, class: ("flex-1 text-center"), });
const __VLS_86 = __VLS_pickFunctionalComponentCtx(__VLS_83, __VLS_85)!;
let __VLS_87!: __VLS_NormalizeEmits<typeof __VLS_86.emit>;
{
const __VLS_88 = __VLS_intrinsicElements["span"];
const __VLS_89 = __VLS_elementAsFunctionalComponent(__VLS_88);
const __VLS_90 = __VLS_89({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_89));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_88, typeof __VLS_90> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_91 = __VLS_pickFunctionalComponentCtx(__VLS_88, __VLS_90)!;
let __VLS_92!: __VLS_NormalizeEmits<typeof __VLS_91.emit>;
{
const __VLS_93 = __VLS_intrinsicElements["br"];
const __VLS_94 = __VLS_elementAsFunctionalComponent(__VLS_93);
const __VLS_95 = __VLS_94({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_94));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_93, typeof __VLS_95> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_96 = __VLS_pickFunctionalComponentCtx(__VLS_93, __VLS_95)!;
let __VLS_97!: __VLS_NormalizeEmits<typeof __VLS_96.emit>;
}
(__VLS_91.slots!).default;
}
(__VLS_86.slots!).default;
}
if (__VLS_ctx.product.protect == 'dom') {
{
const __VLS_98 = __VLS_intrinsicElements["img"];
const __VLS_99 = __VLS_elementAsFunctionalComponent(__VLS_98);
const __VLS_100 = __VLS_99({ ...{}, alt: (""), src: ("/images/konfigurator/step2/drzwi.webp"), }, ...__VLS_functionalComponentArgsRest(__VLS_99));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_98, typeof __VLS_100> & Record<string, unknown>) => void)({ ...{}, alt: (""), src: ("/images/konfigurator/step2/drzwi.webp"), });
const __VLS_101 = __VLS_pickFunctionalComponentCtx(__VLS_98, __VLS_100)!;
let __VLS_102!: __VLS_NormalizeEmits<typeof __VLS_101.emit>;
}
// @ts-ignore
[product,];
}
else {
{
const __VLS_103 = __VLS_intrinsicElements["img"];
const __VLS_104 = __VLS_elementAsFunctionalComponent(__VLS_103);
const __VLS_105 = __VLS_104({ ...{}, alt: (""), src: ("/images/konfigurator/step2/zaprojektuj drzwi Protect.webp"), }, ...__VLS_functionalComponentArgsRest(__VLS_104));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_103, typeof __VLS_105> & Record<string, unknown>) => void)({ ...{}, alt: (""), src: ("/images/konfigurator/step2/zaprojektuj drzwi Protect.webp"), });
const __VLS_106 = __VLS_pickFunctionalComponentCtx(__VLS_103, __VLS_105)!;
let __VLS_107!: __VLS_NormalizeEmits<typeof __VLS_106.emit>;
}
}
(__VLS_80.slots!).default;
}
{
const __VLS_108 = __VLS_intrinsicElements["div"];
const __VLS_109 = __VLS_elementAsFunctionalComponent(__VLS_108);
const __VLS_110 = __VLS_109({ ...{ onClick: {} as any, }, class: ("card"), }, ...__VLS_functionalComponentArgsRest(__VLS_109));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_108, typeof __VLS_110> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("card"), });
const __VLS_111 = __VLS_pickFunctionalComponentCtx(__VLS_108, __VLS_110)!;
let __VLS_112!: __VLS_NormalizeEmits<typeof __VLS_111.emit>;
let __VLS_113 = { 'click': __VLS_pickEvent(__VLS_112['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_109, typeof __VLS_110>).onClick) };
__VLS_113 = {
click: $event => {
if (!((__VLS_ctx.activeTab == 'inspiracja'))) return;

__VLS_ctx.product.inspiracja = 'tak';
__VLS_ctx.product.inspiracjanr = __VLS_ctx.product.protect == 'blok' ? 'P1' : 't1';
__VLS_ctx.handle('Inspiracje');
;
// @ts-ignore
[product, product, product, handle,];
}
};
{
const __VLS_114 = __VLS_intrinsicElements["div"];
const __VLS_115 = __VLS_elementAsFunctionalComponent(__VLS_114);
const __VLS_116 = __VLS_115({ ...{}, class: ("flex-1 text-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_115));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_114, typeof __VLS_116> & Record<string, unknown>) => void)({ ...{}, class: ("flex-1 text-center"), });
const __VLS_117 = __VLS_pickFunctionalComponentCtx(__VLS_114, __VLS_116)!;
let __VLS_118!: __VLS_NormalizeEmits<typeof __VLS_117.emit>;
{
const __VLS_119 = __VLS_intrinsicElements["span"];
const __VLS_120 = __VLS_elementAsFunctionalComponent(__VLS_119);
const __VLS_121 = __VLS_120({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_120));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_119, typeof __VLS_121> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_122 = __VLS_pickFunctionalComponentCtx(__VLS_119, __VLS_121)!;
let __VLS_123!: __VLS_NormalizeEmits<typeof __VLS_122.emit>;
(__VLS_122.slots!).default;
}
(__VLS_117.slots!).default;
}
if (__VLS_ctx.product.protect == 'dom') {
{
const __VLS_124 = __VLS_intrinsicElements["img"];
const __VLS_125 = __VLS_elementAsFunctionalComponent(__VLS_124);
const __VLS_126 = __VLS_125({ ...{}, alt: (""), src: ("/images/konfigurator/step2/inpiracje.webp"), }, ...__VLS_functionalComponentArgsRest(__VLS_125));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_124, typeof __VLS_126> & Record<string, unknown>) => void)({ ...{}, alt: (""), src: ("/images/konfigurator/step2/inpiracje.webp"), });
const __VLS_127 = __VLS_pickFunctionalComponentCtx(__VLS_124, __VLS_126)!;
let __VLS_128!: __VLS_NormalizeEmits<typeof __VLS_127.emit>;
}
// @ts-ignore
[product,];
}
else {
{
const __VLS_129 = __VLS_intrinsicElements["img"];
const __VLS_130 = __VLS_elementAsFunctionalComponent(__VLS_129);
const __VLS_131 = __VLS_130({ ...{}, alt: (""), src: ("/images/konfigurator/step2/przejrzyj inspiracje protect.webp"), }, ...__VLS_functionalComponentArgsRest(__VLS_130));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_129, typeof __VLS_131> & Record<string, unknown>) => void)({ ...{}, alt: (""), src: ("/images/konfigurator/step2/przejrzyj inspiracje protect.webp"), });
const __VLS_132 = __VLS_pickFunctionalComponentCtx(__VLS_129, __VLS_131)!;
let __VLS_133!: __VLS_NormalizeEmits<typeof __VLS_132.emit>;
}
}
(__VLS_111.slots!).default;
}
(__VLS_75.slots!).default;
}
(__VLS_70.slots!).default;
}
}
if (__VLS_ctx.activeTab == 'plus') {
{
const __VLS_134 = __VLS_intrinsicElements["div"];
const __VLS_135 = __VLS_elementAsFunctionalComponent(__VLS_134);
const __VLS_136 = __VLS_135({ ...{}, class: ("protect"), }, ...__VLS_functionalComponentArgsRest(__VLS_135));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_134, typeof __VLS_136> & Record<string, unknown>) => void)({ ...{}, class: ("protect"), });
const __VLS_137 = __VLS_pickFunctionalComponentCtx(__VLS_134, __VLS_136)!;
let __VLS_138!: __VLS_NormalizeEmits<typeof __VLS_137.emit>;
{
const __VLS_139 = __VLS_intrinsicElements["div"];
const __VLS_140 = __VLS_elementAsFunctionalComponent(__VLS_139);
const __VLS_141 = __VLS_140({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_140));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_139, typeof __VLS_141> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_142 = __VLS_pickFunctionalComponentCtx(__VLS_139, __VLS_141)!;
let __VLS_143!: __VLS_NormalizeEmits<typeof __VLS_142.emit>;
{
const __VLS_144 = __VLS_intrinsicElements["div"];
const __VLS_145 = __VLS_elementAsFunctionalComponent(__VLS_144);
const __VLS_146 = __VLS_145({ ...{ onClick: {} as any, }, class: ("card"), }, ...__VLS_functionalComponentArgsRest(__VLS_145));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_144, typeof __VLS_146> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("card"), });
const __VLS_147 = __VLS_pickFunctionalComponentCtx(__VLS_144, __VLS_146)!;
let __VLS_148!: __VLS_NormalizeEmits<typeof __VLS_147.emit>;
let __VLS_149 = { 'click': __VLS_pickEvent(__VLS_148['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_145, typeof __VLS_146>).onClick) };
__VLS_149 = {
click: $event => {
if (!((__VLS_ctx.activeTab == 'plus'))) return;

__VLS_ctx.product.plus = 'nie';
__VLS_ctx.handle('Model');
__VLS_ctx.product.wzor = '01';
;
// @ts-ignore
[activeTab, product, handle, product,];
}
};
{
const __VLS_150 = __VLS_intrinsicElements["div"];
const __VLS_151 = __VLS_elementAsFunctionalComponent(__VLS_150);
const __VLS_152 = __VLS_151({ ...{}, class: ("flex-1 text-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_151));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_150, typeof __VLS_152> & Record<string, unknown>) => void)({ ...{}, class: ("flex-1 text-center"), });
const __VLS_153 = __VLS_pickFunctionalComponentCtx(__VLS_150, __VLS_152)!;
let __VLS_154!: __VLS_NormalizeEmits<typeof __VLS_153.emit>;
{
const __VLS_155 = __VLS_intrinsicElements["span"];
const __VLS_156 = __VLS_elementAsFunctionalComponent(__VLS_155);
const __VLS_157 = __VLS_156({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_156));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_155, typeof __VLS_157> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_158 = __VLS_pickFunctionalComponentCtx(__VLS_155, __VLS_157)!;
let __VLS_159!: __VLS_NormalizeEmits<typeof __VLS_158.emit>;
(__VLS_158.slots!).default;
}
(__VLS_153.slots!).default;
}
if (__VLS_ctx.product.protect == 'dom') {
{
const __VLS_160 = __VLS_intrinsicElements["img"];
const __VLS_161 = __VLS_elementAsFunctionalComponent(__VLS_160);
const __VLS_162 = __VLS_161({ ...{}, alt: (""), src: ("/images/konfigurator/step2/drzwi.webp"), }, ...__VLS_functionalComponentArgsRest(__VLS_161));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_160, typeof __VLS_162> & Record<string, unknown>) => void)({ ...{}, alt: (""), src: ("/images/konfigurator/step2/drzwi.webp"), });
const __VLS_163 = __VLS_pickFunctionalComponentCtx(__VLS_160, __VLS_162)!;
let __VLS_164!: __VLS_NormalizeEmits<typeof __VLS_163.emit>;
}
// @ts-ignore
[product,];
}
else {
{
const __VLS_165 = __VLS_intrinsicElements["img"];
const __VLS_166 = __VLS_elementAsFunctionalComponent(__VLS_165);
const __VLS_167 = __VLS_166({ ...{}, alt: (""), src: ("/images/konfigurator/step2/zaprojektuj drzwi Protect.webp"), }, ...__VLS_functionalComponentArgsRest(__VLS_166));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_165, typeof __VLS_167> & Record<string, unknown>) => void)({ ...{}, alt: (""), src: ("/images/konfigurator/step2/zaprojektuj drzwi Protect.webp"), });
const __VLS_168 = __VLS_pickFunctionalComponentCtx(__VLS_165, __VLS_167)!;
let __VLS_169!: __VLS_NormalizeEmits<typeof __VLS_168.emit>;
}
}
(__VLS_147.slots!).default;
}
{
const __VLS_170 = __VLS_intrinsicElements["div"];
const __VLS_171 = __VLS_elementAsFunctionalComponent(__VLS_170);
const __VLS_172 = __VLS_171({ ...{ onClick: {} as any, }, class: ("card"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_171));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_170, typeof __VLS_172> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("card"), style: ({}), });
const __VLS_173 = __VLS_pickFunctionalComponentCtx(__VLS_170, __VLS_172)!;
let __VLS_174!: __VLS_NormalizeEmits<typeof __VLS_173.emit>;
let __VLS_175 = { 'click': __VLS_pickEvent(__VLS_174['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_171, typeof __VLS_172>).onClick) };
__VLS_175 = {
click: $event => {
if (!((__VLS_ctx.activeTab == 'plus'))) return;

__VLS_ctx.product.plus = 'tak';
__VLS_ctx.product.seria = '23';
__VLS_ctx.product.wzor = '01';
__VLS_ctx.product.kolor = '04';
__VLS_ctx.handle('Model');
;
// @ts-ignore
[product, product, product, product, handle,];
}
};
{
const __VLS_176 = __VLS_intrinsicElements["div"];
const __VLS_177 = __VLS_elementAsFunctionalComponent(__VLS_176);
const __VLS_178 = __VLS_177({ ...{}, class: ("flex-1 text-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_177));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_176, typeof __VLS_178> & Record<string, unknown>) => void)({ ...{}, class: ("flex-1 text-center"), });
const __VLS_179 = __VLS_pickFunctionalComponentCtx(__VLS_176, __VLS_178)!;
let __VLS_180!: __VLS_NormalizeEmits<typeof __VLS_179.emit>;
{
const __VLS_181 = __VLS_intrinsicElements["span"];
const __VLS_182 = __VLS_elementAsFunctionalComponent(__VLS_181);
const __VLS_183 = __VLS_182({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_182));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_181, typeof __VLS_183> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_184 = __VLS_pickFunctionalComponentCtx(__VLS_181, __VLS_183)!;
let __VLS_185!: __VLS_NormalizeEmits<typeof __VLS_184.emit>;
(__VLS_184.slots!).default;
}
(__VLS_179.slots!).default;
}
if (__VLS_ctx.product.protect == 'dom') {
{
const __VLS_186 = __VLS_intrinsicElements["img"];
const __VLS_187 = __VLS_elementAsFunctionalComponent(__VLS_186);
const __VLS_188 = __VLS_187({ ...{}, alt: (""), src: ("/images/konfigurator/step2/plus.webp"), }, ...__VLS_functionalComponentArgsRest(__VLS_187));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_186, typeof __VLS_188> & Record<string, unknown>) => void)({ ...{}, alt: (""), src: ("/images/konfigurator/step2/plus.webp"), });
const __VLS_189 = __VLS_pickFunctionalComponentCtx(__VLS_186, __VLS_188)!;
let __VLS_190!: __VLS_NormalizeEmits<typeof __VLS_189.emit>;
}
// @ts-ignore
[product,];
}
{
const __VLS_191 = __VLS_intrinsicElements["div"];
const __VLS_192 = __VLS_elementAsFunctionalComponent(__VLS_191);
const __VLS_193 = __VLS_192({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_192));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_191, typeof __VLS_193> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_194 = __VLS_pickFunctionalComponentCtx(__VLS_191, __VLS_193)!;
let __VLS_195!: __VLS_NormalizeEmits<typeof __VLS_194.emit>;
{
const __VLS_196 = __VLS_intrinsicElements["img"];
const __VLS_197 = __VLS_elementAsFunctionalComponent(__VLS_196);
const __VLS_198 = __VLS_197({ ...{}, style: ({}), src: ("/images/konfigurator/step2/plus.png"), alt: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_197));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_196, typeof __VLS_198> & Record<string, unknown>) => void)({ ...{}, style: ({}), src: ("/images/konfigurator/step2/plus.png"), alt: (""), });
const __VLS_199 = __VLS_pickFunctionalComponentCtx(__VLS_196, __VLS_198)!;
let __VLS_200!: __VLS_NormalizeEmits<typeof __VLS_199.emit>;
}
(__VLS_194.slots!).default;
}
(__VLS_173.slots!).default;
}
(__VLS_142.slots!).default;
}
(__VLS_137.slots!).default;
}
}
{
const __VLS_201 = __VLS_intrinsicElements["div"];
const __VLS_202 = __VLS_elementAsFunctionalComponent(__VLS_201);
const __VLS_203 = __VLS_202({ ...{}, class: ("d-flex"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_202));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_201, typeof __VLS_203> & Record<string, unknown>) => void)({ ...{}, class: ("d-flex"), style: ({}), });
const __VLS_204 = __VLS_pickFunctionalComponentCtx(__VLS_201, __VLS_203)!;
let __VLS_205!: __VLS_NormalizeEmits<typeof __VLS_204.emit>;
(__VLS_ctx.activeTab == 'inspiracja' || __VLS_ctx.activeTab == 'protect' || __VLS_ctx.activeTab == 'plus' ? 'ups' : '');
__VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.activeTab != 'inspiracja' && __VLS_ctx.activeTab != 'protect'));
__VLS_styleScopedClasses = (activeTab == 'inspiracja' || activeTab == 'protect' || activeTab == 'plus' ? 'ups' : '');
{
const __VLS_206 = __VLS_intrinsicElements["div"];
const __VLS_207 = __VLS_elementAsFunctionalComponent(__VLS_206);
const __VLS_208 = __VLS_207({ ...{}, class: ("d-flex lewy"), }, ...__VLS_functionalComponentArgsRest(__VLS_207));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_206, typeof __VLS_208> & Record<string, unknown>) => void)({ ...{}, class: ("d-flex lewy"), });
const __VLS_209 = __VLS_pickFunctionalComponentCtx(__VLS_206, __VLS_208)!;
let __VLS_210!: __VLS_NormalizeEmits<typeof __VLS_209.emit>;
(__VLS_ctx.activeTab == 'inspiracja' || __VLS_ctx.activeTab == 'protect' ? 'ups' : '');
__VLS_styleScopedClasses = (activeTab == 'inspiracja' || activeTab == 'protect' ? 'ups' : '');
if (__VLS_ctx.activeTab != 'Podsumowanie') {
{
const __VLS_211 = __VLS_intrinsicElements["div"];
const __VLS_212 = __VLS_elementAsFunctionalComponent(__VLS_211);
const __VLS_213 = __VLS_212({ ...{}, class: ("d-flex flex-1"), }, ...__VLS_functionalComponentArgsRest(__VLS_212));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_211, typeof __VLS_213> & Record<string, unknown>) => void)({ ...{}, class: ("d-flex flex-1"), });
const __VLS_214 = __VLS_pickFunctionalComponentCtx(__VLS_211, __VLS_213)!;
let __VLS_215!: __VLS_NormalizeEmits<typeof __VLS_214.emit>;
if ((__VLS_ctx.activeTab == 'Model' && __VLS_ctx.product.protect == 'dom') || __VLS_ctx.product.inspiracja == 'tak') {
{
const __VLS_216 = ({} as 'Filtry' extends keyof typeof __VLS_ctx ? { 'filtry': typeof __VLS_ctx.Filtry; } : 'filtry' extends keyof typeof __VLS_ctx ? { 'filtry': typeof __VLS_ctx.filtry; } : typeof __VLS_resolvedLocalAndGlobalComponents).filtry;
const __VLS_217 = __VLS_asFunctionalComponent(__VLS_216, new __VLS_216({ ...{}, id: ("filtry"), onclick: ("$(this).attr('title','')"), }));
({} as { filtry: typeof __VLS_216; }).filtry;
({} as { filtry: typeof __VLS_216; }).filtry;
const __VLS_218 = __VLS_217({ ...{}, id: ("filtry"), onclick: ("$(this).attr('title','')"), }, ...__VLS_functionalComponentArgsRest(__VLS_217));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_216, typeof __VLS_218> & Record<string, unknown>) => void)({ ...{}, id: ("filtry"), onclick: ("$(this).attr('title','')"), });
const __VLS_219 = __VLS_pickFunctionalComponentCtx(__VLS_216, __VLS_218)!;
let __VLS_220!: __VLS_NormalizeEmits<typeof __VLS_219.emit>;
__VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.product.plus != 'tak'));
}
// @ts-ignore
[activeTab, activeTab, activeTab, activeTab, activeTab, activeTab, activeTab, activeTab, activeTab, product, product, product,];
}
if (__VLS_ctx.product.inspiracja === 'tak' && __VLS_ctx.product.protect === 'dom' && __VLS_ctx.activeTab === 'Inspiracje') {
{
const __VLS_221 = __VLS_intrinsicElements["div"];
const __VLS_222 = __VLS_elementAsFunctionalComponent(__VLS_221);
const __VLS_223 = __VLS_222({ ...{}, class: ("filtryinspiracje"), }, ...__VLS_functionalComponentArgsRest(__VLS_222));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_221, typeof __VLS_223> & Record<string, unknown>) => void)({ ...{}, class: ("filtryinspiracje"), });
const __VLS_224 = __VLS_pickFunctionalComponentCtx(__VLS_221, __VLS_223)!;
let __VLS_225!: __VLS_NormalizeEmits<typeof __VLS_224.emit>;
{
const __VLS_226 = __VLS_intrinsicElements["div"];
const __VLS_227 = __VLS_elementAsFunctionalComponent(__VLS_226);
const __VLS_228 = __VLS_227({ ...{ onClick: {} as any, }, class: ((__VLS_ctx.product.filtryinspiracjeitem === 'wszystkie' ? 'active' : '')), }, ...__VLS_functionalComponentArgsRest(__VLS_227));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_226, typeof __VLS_228> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ((__VLS_ctx.product.filtryinspiracjeitem === 'wszystkie' ? 'active' : '')), });
const __VLS_229 = __VLS_pickFunctionalComponentCtx(__VLS_226, __VLS_228)!;
let __VLS_230!: __VLS_NormalizeEmits<typeof __VLS_229.emit>;
__VLS_styleScopedClasses = (product.filtryinspiracjeitem === 'wszystkie' ? 'active' : '');
let __VLS_231 = { 'click': __VLS_pickEvent(__VLS_230['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_227, typeof __VLS_228>).onClick) };
__VLS_231 = {
click: $event => {
if (!((__VLS_ctx.activeTab != 'Podsumowanie'))) return;
if (!((__VLS_ctx.product.inspiracja === 'tak' && __VLS_ctx.product.protect === 'dom' && __VLS_ctx.activeTab === 'Inspiracje'))) return;

__VLS_ctx.handle('Inspiracje');
__VLS_ctx.product.filtryinspiracjeitem = 'wszystkie';
;
// @ts-ignore
[product, product, activeTab, product, product, handle, product,];
}
};
(__VLS_229.slots!).default;
}
{
const __VLS_232 = __VLS_intrinsicElements["div"];
const __VLS_233 = __VLS_elementAsFunctionalComponent(__VLS_232);
const __VLS_234 = __VLS_233({ ...{ onClick: {} as any, }, class: ((__VLS_ctx.product.filtryinspiracjeitem === 'bestsellery' ? 'active' : '')), }, ...__VLS_functionalComponentArgsRest(__VLS_233));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_232, typeof __VLS_234> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ((__VLS_ctx.product.filtryinspiracjeitem === 'bestsellery' ? 'active' : '')), });
const __VLS_235 = __VLS_pickFunctionalComponentCtx(__VLS_232, __VLS_234)!;
let __VLS_236!: __VLS_NormalizeEmits<typeof __VLS_235.emit>;
__VLS_styleScopedClasses = (product.filtryinspiracjeitem === 'bestsellery' ? 'active' : '');
let __VLS_237 = { 'click': __VLS_pickEvent(__VLS_236['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_233, typeof __VLS_234>).onClick) };
__VLS_237 = {
click: $event => {
if (!((__VLS_ctx.activeTab != 'Podsumowanie'))) return;
if (!((__VLS_ctx.product.inspiracja === 'tak' && __VLS_ctx.product.protect === 'dom' && __VLS_ctx.activeTab === 'Inspiracje'))) return;

__VLS_ctx.handle('Inspiracje');
__VLS_ctx.product.filtryinspiracjeitem = 'bestsellery';
;
// @ts-ignore
[product, product, handle, product,];
}
};
(__VLS_235.slots!).default;
}
{
const __VLS_238 = __VLS_intrinsicElements["div"];
const __VLS_239 = __VLS_elementAsFunctionalComponent(__VLS_238);
const __VLS_240 = __VLS_239({ ...{ onClick: {} as any, }, class: ((__VLS_ctx.product.filtryinspiracjeitem === 'tradycjonalisty' ? 'active' : '')), }, ...__VLS_functionalComponentArgsRest(__VLS_239));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_238, typeof __VLS_240> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ((__VLS_ctx.product.filtryinspiracjeitem === 'tradycjonalisty' ? 'active' : '')), });
const __VLS_241 = __VLS_pickFunctionalComponentCtx(__VLS_238, __VLS_240)!;
let __VLS_242!: __VLS_NormalizeEmits<typeof __VLS_241.emit>;
__VLS_styleScopedClasses = (product.filtryinspiracjeitem === 'tradycjonalisty' ? 'active' : '');
let __VLS_243 = { 'click': __VLS_pickEvent(__VLS_242['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_239, typeof __VLS_240>).onClick) };
__VLS_243 = {
click: $event => {
if (!((__VLS_ctx.activeTab != 'Podsumowanie'))) return;
if (!((__VLS_ctx.product.inspiracja === 'tak' && __VLS_ctx.product.protect === 'dom' && __VLS_ctx.activeTab === 'Inspiracje'))) return;

__VLS_ctx.handle('Inspiracje');
__VLS_ctx.product.filtryinspiracjeitem = 'tradycjonalisty';
;
// @ts-ignore
[product, product, handle, product,];
}
};
(__VLS_241.slots!).default;
}
{
const __VLS_244 = __VLS_intrinsicElements["div"];
const __VLS_245 = __VLS_elementAsFunctionalComponent(__VLS_244);
const __VLS_246 = __VLS_245({ ...{ onClick: {} as any, }, class: ((__VLS_ctx.product.filtryinspiracjeitem === 'indywidualisty' ? 'active' : '')), }, ...__VLS_functionalComponentArgsRest(__VLS_245));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_244, typeof __VLS_246> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ((__VLS_ctx.product.filtryinspiracjeitem === 'indywidualisty' ? 'active' : '')), });
const __VLS_247 = __VLS_pickFunctionalComponentCtx(__VLS_244, __VLS_246)!;
let __VLS_248!: __VLS_NormalizeEmits<typeof __VLS_247.emit>;
__VLS_styleScopedClasses = (product.filtryinspiracjeitem === 'indywidualisty' ? 'active' : '');
let __VLS_249 = { 'click': __VLS_pickEvent(__VLS_248['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_245, typeof __VLS_246>).onClick) };
__VLS_249 = {
click: $event => {
if (!((__VLS_ctx.activeTab != 'Podsumowanie'))) return;
if (!((__VLS_ctx.product.inspiracja === 'tak' && __VLS_ctx.product.protect === 'dom' && __VLS_ctx.activeTab === 'Inspiracje'))) return;

__VLS_ctx.handle('Inspiracje');
__VLS_ctx.product.filtryinspiracjeitem = 'indywidualisty';
;
// @ts-ignore
[product, product, handle, product,];
}
};
(__VLS_247.slots!).default;
}
{
const __VLS_250 = __VLS_intrinsicElements["div"];
const __VLS_251 = __VLS_elementAsFunctionalComponent(__VLS_250);
const __VLS_252 = __VLS_251({ ...{ onClick: {} as any, }, class: ((__VLS_ctx.product.filtryinspiracjeitem === 'minimalisty' ? 'active' : '')), }, ...__VLS_functionalComponentArgsRest(__VLS_251));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_250, typeof __VLS_252> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ((__VLS_ctx.product.filtryinspiracjeitem === 'minimalisty' ? 'active' : '')), });
const __VLS_253 = __VLS_pickFunctionalComponentCtx(__VLS_250, __VLS_252)!;
let __VLS_254!: __VLS_NormalizeEmits<typeof __VLS_253.emit>;
__VLS_styleScopedClasses = (product.filtryinspiracjeitem === 'minimalisty' ? 'active' : '');
let __VLS_255 = { 'click': __VLS_pickEvent(__VLS_254['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_251, typeof __VLS_252>).onClick) };
__VLS_255 = {
click: $event => {
if (!((__VLS_ctx.activeTab != 'Podsumowanie'))) return;
if (!((__VLS_ctx.product.inspiracja === 'tak' && __VLS_ctx.product.protect === 'dom' && __VLS_ctx.activeTab === 'Inspiracje'))) return;

__VLS_ctx.handle('Inspiracje');
__VLS_ctx.product.filtryinspiracjeitem = 'minimalisty';
;
// @ts-ignore
[product, product, handle, product,];
}
};
(__VLS_253.slots!).default;
}
{
const __VLS_256 = __VLS_intrinsicElements["div"];
const __VLS_257 = __VLS_elementAsFunctionalComponent(__VLS_256);
const __VLS_258 = __VLS_257({ ...{ onClick: {} as any, }, class: ((__VLS_ctx.product.filtryinspiracjeitem === 'wizjonera' ? 'active' : '')), }, ...__VLS_functionalComponentArgsRest(__VLS_257));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_256, typeof __VLS_258> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ((__VLS_ctx.product.filtryinspiracjeitem === 'wizjonera' ? 'active' : '')), });
const __VLS_259 = __VLS_pickFunctionalComponentCtx(__VLS_256, __VLS_258)!;
let __VLS_260!: __VLS_NormalizeEmits<typeof __VLS_259.emit>;
__VLS_styleScopedClasses = (product.filtryinspiracjeitem === 'wizjonera' ? 'active' : '');
let __VLS_261 = { 'click': __VLS_pickEvent(__VLS_260['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_257, typeof __VLS_258>).onClick) };
__VLS_261 = {
click: $event => {
if (!((__VLS_ctx.activeTab != 'Podsumowanie'))) return;
if (!((__VLS_ctx.product.inspiracja === 'tak' && __VLS_ctx.product.protect === 'dom' && __VLS_ctx.activeTab === 'Inspiracje'))) return;

__VLS_ctx.handle('Inspiracje');
__VLS_ctx.product.filtryinspiracjeitem = 'wizjonera';
;
// @ts-ignore
[product, product, handle, product,];
}
};
(__VLS_259.slots!).default;
}
{
const __VLS_262 = __VLS_intrinsicElements["div"];
const __VLS_263 = __VLS_elementAsFunctionalComponent(__VLS_262);
const __VLS_264 = __VLS_263({ ...{ onClick: {} as any, }, class: ((__VLS_ctx.product.filtryinspiracjeitem === 'kinomana' ? 'active' : '')), }, ...__VLS_functionalComponentArgsRest(__VLS_263));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_262, typeof __VLS_264> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ((__VLS_ctx.product.filtryinspiracjeitem === 'kinomana' ? 'active' : '')), });
const __VLS_265 = __VLS_pickFunctionalComponentCtx(__VLS_262, __VLS_264)!;
let __VLS_266!: __VLS_NormalizeEmits<typeof __VLS_265.emit>;
__VLS_styleScopedClasses = (product.filtryinspiracjeitem === 'kinomana' ? 'active' : '');
let __VLS_267 = { 'click': __VLS_pickEvent(__VLS_266['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_263, typeof __VLS_264>).onClick) };
__VLS_267 = {
click: $event => {
if (!((__VLS_ctx.activeTab != 'Podsumowanie'))) return;
if (!((__VLS_ctx.product.inspiracja === 'tak' && __VLS_ctx.product.protect === 'dom' && __VLS_ctx.activeTab === 'Inspiracje'))) return;

__VLS_ctx.handle('Inspiracje');
__VLS_ctx.product.filtryinspiracjeitem = 'kinomana';
;
// @ts-ignore
[product, product, handle, product,];
}
};
(__VLS_265.slots!).default;
}
(__VLS_224.slots!).default;
}
}
{
const __VLS_268 = ({} as 'Konfigurator' extends keyof typeof __VLS_ctx ? { 'konfigurator': typeof __VLS_ctx.Konfigurator; } : 'konfigurator' extends keyof typeof __VLS_ctx ? { 'konfigurator': typeof __VLS_ctx.konfigurator; } : typeof __VLS_resolvedLocalAndGlobalComponents).konfigurator;
const __VLS_269 = __VLS_asFunctionalComponent(__VLS_268, new __VLS_268({ ...{}, style: ({}), }));
({} as { konfigurator: typeof __VLS_268; }).konfigurator;
({} as { konfigurator: typeof __VLS_268; }).konfigurator;
const __VLS_270 = __VLS_269({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_269));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_268, typeof __VLS_270> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_271 = __VLS_pickFunctionalComponentCtx(__VLS_268, __VLS_270)!;
let __VLS_272!: __VLS_NormalizeEmits<typeof __VLS_271.emit>;
}
(__VLS_214.slots!).default;
}
}
{
const __VLS_273 = __VLS_intrinsicElements["div"];
const __VLS_274 = __VLS_elementAsFunctionalComponent(__VLS_273);
const __VLS_275 = __VLS_274({ ...{}, class: ((__VLS_ctx.activeTab == 'Podsumowanie' ? '' : 'ukryj')), style: ((__VLS_ctx.activeTab != 'Podsumowanie' ? 'min-width: 555px;' : '')), }, ...__VLS_functionalComponentArgsRest(__VLS_274));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_273, typeof __VLS_275> & Record<string, unknown>) => void)({ ...{}, class: ((__VLS_ctx.activeTab == 'Podsumowanie' ? '' : 'ukryj')), style: ((__VLS_ctx.activeTab != 'Podsumowanie' ? 'min-width: 555px;' : '')), });
const __VLS_276 = __VLS_pickFunctionalComponentCtx(__VLS_273, __VLS_275)!;
let __VLS_277!: __VLS_NormalizeEmits<typeof __VLS_276.emit>;
__VLS_directiveFunction(__VLS_ctx.vShow)((__VLS_ctx.product.inspiracja == 'nie' || (__VLS_ctx.product.inspiracja == 'tak' && __VLS_ctx.product.inspiracjanr != '')));
__VLS_styleScopedClasses = (activeTab == 'Podsumowanie' ? '' : 'ukryj');
{
const __VLS_278 = __VLS_intrinsicElements["div"];
const __VLS_279 = __VLS_elementAsFunctionalComponent(__VLS_278);
const __VLS_280 = __VLS_279({ ...{}, class: ((__VLS_ctx.activeTab == 'Podsumowanie' ? 'last' : 'podsumowanie2')), }, ...__VLS_functionalComponentArgsRest(__VLS_279));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_278, typeof __VLS_280> & Record<string, unknown>) => void)({ ...{}, class: ((__VLS_ctx.activeTab == 'Podsumowanie' ? 'last' : 'podsumowanie2')), });
const __VLS_281 = __VLS_pickFunctionalComponentCtx(__VLS_278, __VLS_280)!;
let __VLS_282!: __VLS_NormalizeEmits<typeof __VLS_281.emit>;
__VLS_styleScopedClasses = (activeTab == 'Podsumowanie' ? 'last' : 'podsumowanie2');
if (__VLS_ctx.activeTab == 'Podsumowanie') {
{
const __VLS_283 = ({} as 'Prezenter' extends keyof typeof __VLS_ctx ? { 'prezenter': typeof __VLS_ctx.Prezenter; } : 'prezenter' extends keyof typeof __VLS_ctx ? { 'prezenter': typeof __VLS_ctx.prezenter; } : typeof __VLS_resolvedLocalAndGlobalComponents).prezenter;
const __VLS_284 = __VLS_asFunctionalComponent(__VLS_283, new __VLS_283({ ...{}, class: ("mt-auto desktop"), }));
({} as { prezenter: typeof __VLS_283; }).prezenter;
({} as { prezenter: typeof __VLS_283; }).prezenter;
const __VLS_285 = __VLS_284({ ...{}, class: ("mt-auto desktop"), }, ...__VLS_functionalComponentArgsRest(__VLS_284));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_283, typeof __VLS_285> & Record<string, unknown>) => void)({ ...{}, class: ("mt-auto desktop"), });
const __VLS_286 = __VLS_pickFunctionalComponentCtx(__VLS_283, __VLS_285)!;
let __VLS_287!: __VLS_NormalizeEmits<typeof __VLS_286.emit>;
}
// @ts-ignore
[activeTab, activeTab, activeTab, activeTab, product, product, product, activeTab, activeTab, activeTab,];
}
{
const __VLS_288 = __VLS_intrinsicElements["div"];
const __VLS_289 = __VLS_elementAsFunctionalComponent(__VLS_288);
const __VLS_290 = __VLS_289({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_289));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_288, typeof __VLS_290> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_291 = __VLS_pickFunctionalComponentCtx(__VLS_288, __VLS_290)!;
let __VLS_292!: __VLS_NormalizeEmits<typeof __VLS_291.emit>;
{
const __VLS_293 = ({} as 'Switcher' extends keyof typeof __VLS_ctx ? { 'switcher': typeof __VLS_ctx.Switcher; } : 'switcher' extends keyof typeof __VLS_ctx ? { 'switcher': typeof __VLS_ctx.switcher; } : typeof __VLS_resolvedLocalAndGlobalComponents).switcher;
const __VLS_294 = __VLS_asFunctionalComponent(__VLS_293, new __VLS_293({ ...{}, id: ("sw"), style: ({}), class: ("ab"), }));
({} as { switcher: typeof __VLS_293; }).switcher;
({} as { switcher: typeof __VLS_293; }).switcher;
const __VLS_295 = __VLS_294({ ...{}, id: ("sw"), style: ({}), class: ("ab"), }, ...__VLS_functionalComponentArgsRest(__VLS_294));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_293, typeof __VLS_295> & Record<string, unknown>) => void)({ ...{}, id: ("sw"), style: ({}), class: ("ab"), });
const __VLS_296 = __VLS_pickFunctionalComponentCtx(__VLS_293, __VLS_295)!;
let __VLS_297!: __VLS_NormalizeEmits<typeof __VLS_296.emit>;
}
{
const __VLS_298 = ({} as 'Wizualizacja' extends keyof typeof __VLS_ctx ? { 'wizualizacja': typeof __VLS_ctx.Wizualizacja; } : 'wizualizacja' extends keyof typeof __VLS_ctx ? { 'wizualizacja': typeof __VLS_ctx.wizualizacja; } : typeof __VLS_resolvedLocalAndGlobalComponents).wizualizacja;
const __VLS_299 = __VLS_asFunctionalComponent(__VLS_298, new __VLS_298({ ...{}, style: ({}), class: ("fitCenter nomobile"), }));
({} as { wizualizacja: typeof __VLS_298; }).wizualizacja;
({} as { wizualizacja: typeof __VLS_298; }).wizualizacja;
const __VLS_300 = __VLS_299({ ...{}, style: ({}), class: ("fitCenter nomobile"), }, ...__VLS_functionalComponentArgsRest(__VLS_299));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_298, typeof __VLS_300> & Record<string, unknown>) => void)({ ...{}, style: ({}), class: ("fitCenter nomobile"), });
const __VLS_301 = __VLS_pickFunctionalComponentCtx(__VLS_298, __VLS_300)!;
let __VLS_302!: __VLS_NormalizeEmits<typeof __VLS_301.emit>;
}
(__VLS_291.slots!).default;
}
{
const __VLS_303 = __VLS_intrinsicElements["div"];
const __VLS_304 = __VLS_elementAsFunctionalComponent(__VLS_303);
const __VLS_305 = __VLS_304({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_304));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_303, typeof __VLS_305> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_306 = __VLS_pickFunctionalComponentCtx(__VLS_303, __VLS_305)!;
let __VLS_307!: __VLS_NormalizeEmits<typeof __VLS_306.emit>;
{
const __VLS_308 = __VLS_intrinsicElements["div"];
const __VLS_309 = __VLS_elementAsFunctionalComponent(__VLS_308);
const __VLS_310 = __VLS_309({ ...{}, class: ("cena bg-success text-center text-light"), }, ...__VLS_functionalComponentArgsRest(__VLS_309));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_308, typeof __VLS_310> & Record<string, unknown>) => void)({ ...{}, class: ("cena bg-success text-center text-light"), });
const __VLS_311 = __VLS_pickFunctionalComponentCtx(__VLS_308, __VLS_310)!;
let __VLS_312!: __VLS_NormalizeEmits<typeof __VLS_311.emit>;
if (__VLS_ctx.product.plus == 'tak') {
{
const __VLS_313 = __VLS_intrinsicElements["span"];
const __VLS_314 = __VLS_elementAsFunctionalComponent(__VLS_313);
const __VLS_315 = __VLS_314({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_314));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_313, typeof __VLS_315> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_316 = __VLS_pickFunctionalComponentCtx(__VLS_313, __VLS_315)!;
let __VLS_317!: __VLS_NormalizeEmits<typeof __VLS_316.emit>;
{
const __VLS_318 = __VLS_intrinsicElements["a"];
const __VLS_319 = __VLS_elementAsFunctionalComponent(__VLS_318);
const __VLS_320 = __VLS_319({ ...{}, class: ("text-light"), href: ("https://wiked.pl/gdzie-kupic/"), target: ("_blank"), }, ...__VLS_functionalComponentArgsRest(__VLS_319));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_318, typeof __VLS_320> & Record<string, unknown>) => void)({ ...{}, class: ("text-light"), href: ("https://wiked.pl/gdzie-kupic/"), target: ("_blank"), });
const __VLS_321 = __VLS_pickFunctionalComponentCtx(__VLS_318, __VLS_320)!;
let __VLS_322!: __VLS_NormalizeEmits<typeof __VLS_321.emit>;
(__VLS_321.slots!).default;
}
(__VLS_316.slots!).default;
}
// @ts-ignore
[product,];
}
else {
{
const __VLS_323 = __VLS_intrinsicElements["span"];
const __VLS_324 = __VLS_elementAsFunctionalComponent(__VLS_323);
const __VLS_325 = __VLS_324({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_324));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_323, typeof __VLS_325> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_326 = __VLS_pickFunctionalComponentCtx(__VLS_323, __VLS_325)!;
let __VLS_327!: __VLS_NormalizeEmits<typeof __VLS_326.emit>;
{
const __VLS_328 = __VLS_intrinsicElements["span"];
const __VLS_329 = __VLS_elementAsFunctionalComponent(__VLS_328);
const __VLS_330 = __VLS_329({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_329));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_328, typeof __VLS_330> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_331 = __VLS_pickFunctionalComponentCtx(__VLS_328, __VLS_330)!;
let __VLS_332!: __VLS_NormalizeEmits<typeof __VLS_331.emit>;
(parseInt(__VLS_ctx.priceAll));
(__VLS_331.slots!).default;
}
(__VLS_326.slots!).default;
}
// @ts-ignore
[priceAll,];
}
(__VLS_311.slots!).default;
}
{
const __VLS_333 = ({} as 'Podsumowanie' extends keyof typeof __VLS_ctx ? { 'podsumowanie': typeof __VLS_ctx.Podsumowanie; } : 'podsumowanie' extends keyof typeof __VLS_ctx ? { 'podsumowanie': typeof __VLS_ctx.podsumowanie; } : typeof __VLS_resolvedLocalAndGlobalComponents).podsumowanie;
const __VLS_334 = __VLS_asFunctionalComponent(__VLS_333, new __VLS_333({ ...{}, }));
({} as { podsumowanie: typeof __VLS_333; }).podsumowanie;
({} as { podsumowanie: typeof __VLS_333; }).podsumowanie;
const __VLS_335 = __VLS_334({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_334));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_333, typeof __VLS_335> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_336 = __VLS_pickFunctionalComponentCtx(__VLS_333, __VLS_335)!;
let __VLS_337!: __VLS_NormalizeEmits<typeof __VLS_336.emit>;
}
if (__VLS_ctx.activeTab == 'Podsumowanie') {
{
const __VLS_338 = __VLS_intrinsicElements["div"];
const __VLS_339 = __VLS_elementAsFunctionalComponent(__VLS_338);
const __VLS_340 = __VLS_339({ ...{}, class: ("cena"), hidden: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_339));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_338, typeof __VLS_340> & Record<string, unknown>) => void)({ ...{}, class: ("cena"), hidden: (true), });
const __VLS_341 = __VLS_pickFunctionalComponentCtx(__VLS_338, __VLS_340)!;
let __VLS_342!: __VLS_NormalizeEmits<typeof __VLS_341.emit>;
(__VLS_341.slots!).default;
}
// @ts-ignore
[activeTab,];
}
if (__VLS_ctx.activeTab == 'Podsumowanie') {
{
const __VLS_343 = ({} as 'Pdf' extends keyof typeof __VLS_ctx ? { 'pdf': typeof __VLS_ctx.Pdf; } : 'pdf' extends keyof typeof __VLS_ctx ? { 'pdf': typeof __VLS_ctx.pdf; } : typeof __VLS_resolvedLocalAndGlobalComponents).pdf;
const __VLS_344 = __VLS_asFunctionalComponent(__VLS_343, new __VLS_343({ ...{}, class: ("mt-3"), }));
({} as { pdf: typeof __VLS_343; }).pdf;
const __VLS_345 = __VLS_344({ ...{}, class: ("mt-3"), }, ...__VLS_functionalComponentArgsRest(__VLS_344));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_343, typeof __VLS_345> & Record<string, unknown>) => void)({ ...{}, class: ("mt-3"), });
const __VLS_346 = __VLS_pickFunctionalComponentCtx(__VLS_343, __VLS_345)!;
let __VLS_347!: __VLS_NormalizeEmits<typeof __VLS_346.emit>;
}
// @ts-ignore
[activeTab,];
}
{
const __VLS_348 = __VLS_intrinsicElements["div"];
const __VLS_349 = __VLS_elementAsFunctionalComponent(__VLS_348);
const __VLS_350 = __VLS_349({ ...{}, onclick: ("document.querySelector('#myModall').style.display = 'none'"), id: ("myModall"), role: ("dialog"), hidden: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_349));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_348, typeof __VLS_350> & Record<string, unknown>) => void)({ ...{}, onclick: ("document.querySelector('#myModall').style.display = 'none'"), id: ("myModall"), role: ("dialog"), hidden: (true), });
const __VLS_351 = __VLS_pickFunctionalComponentCtx(__VLS_348, __VLS_350)!;
let __VLS_352!: __VLS_NormalizeEmits<typeof __VLS_351.emit>;
{
const __VLS_353 = __VLS_intrinsicElements["div"];
const __VLS_354 = __VLS_elementAsFunctionalComponent(__VLS_353);
const __VLS_355 = __VLS_354({ ...{}, class: ("modal-dialog"), }, ...__VLS_functionalComponentArgsRest(__VLS_354));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_353, typeof __VLS_355> & Record<string, unknown>) => void)({ ...{}, class: ("modal-dialog"), });
const __VLS_356 = __VLS_pickFunctionalComponentCtx(__VLS_353, __VLS_355)!;
let __VLS_357!: __VLS_NormalizeEmits<typeof __VLS_356.emit>;
{
const __VLS_358 = __VLS_intrinsicElements["div"];
const __VLS_359 = __VLS_elementAsFunctionalComponent(__VLS_358);
const __VLS_360 = __VLS_359({ ...{}, class: ("modal-content"), }, ...__VLS_functionalComponentArgsRest(__VLS_359));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_358, typeof __VLS_360> & Record<string, unknown>) => void)({ ...{}, class: ("modal-content"), });
const __VLS_361 = __VLS_pickFunctionalComponentCtx(__VLS_358, __VLS_360)!;
let __VLS_362!: __VLS_NormalizeEmits<typeof __VLS_361.emit>;
{
const __VLS_363 = __VLS_intrinsicElements["div"];
const __VLS_364 = __VLS_elementAsFunctionalComponent(__VLS_363);
const __VLS_365 = __VLS_364({ ...{}, class: ("modal-header bg-info"), }, ...__VLS_functionalComponentArgsRest(__VLS_364));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_363, typeof __VLS_365> & Record<string, unknown>) => void)({ ...{}, class: ("modal-header bg-info"), });
const __VLS_366 = __VLS_pickFunctionalComponentCtx(__VLS_363, __VLS_365)!;
let __VLS_367!: __VLS_NormalizeEmits<typeof __VLS_366.emit>;
{
const __VLS_368 = __VLS_intrinsicElements["div"];
const __VLS_369 = __VLS_elementAsFunctionalComponent(__VLS_368);
const __VLS_370 = __VLS_369({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_369));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_368, typeof __VLS_370> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_371 = __VLS_pickFunctionalComponentCtx(__VLS_368, __VLS_370)!;
let __VLS_372!: __VLS_NormalizeEmits<typeof __VLS_371.emit>;
(__VLS_371.slots!).default;
}
{
const __VLS_373 = __VLS_intrinsicElements["div"];
const __VLS_374 = __VLS_elementAsFunctionalComponent(__VLS_373);
const __VLS_375 = __VLS_374({ ...{}, style: ({}), onclick: ("document.querySelector('#myModall').style.display = 'none'"), }, ...__VLS_functionalComponentArgsRest(__VLS_374));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_373, typeof __VLS_375> & Record<string, unknown>) => void)({ ...{}, style: ({}), onclick: ("document.querySelector('#myModall').style.display = 'none'"), });
const __VLS_376 = __VLS_pickFunctionalComponentCtx(__VLS_373, __VLS_375)!;
let __VLS_377!: __VLS_NormalizeEmits<typeof __VLS_376.emit>;
{
const __VLS_378 = __VLS_intrinsicElements["i"];
const __VLS_379 = __VLS_elementAsFunctionalComponent(__VLS_378);
const __VLS_380 = __VLS_379({ ...{}, class: ("fa fa-times"), "data-dismiss": ("modal"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_379));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_378, typeof __VLS_380> & Record<string, unknown>) => void)({ ...{}, class: ("fa fa-times"), "data-dismiss": ("modal"), style: ({}), });
const __VLS_381 = __VLS_pickFunctionalComponentCtx(__VLS_378, __VLS_380)!;
let __VLS_382!: __VLS_NormalizeEmits<typeof __VLS_381.emit>;
}
(__VLS_376.slots!).default;
}
(__VLS_366.slots!).default;
}
if (__VLS_ctx.activeTyp.artnr != 'D1N08') {
{
const __VLS_383 = __VLS_intrinsicElements["div"];
const __VLS_384 = __VLS_elementAsFunctionalComponent(__VLS_383);
const __VLS_385 = __VLS_384({ ...{}, class: ("modal-body"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_384));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_383, typeof __VLS_385> & Record<string, unknown>) => void)({ ...{}, class: ("modal-body"), style: ({}), });
const __VLS_386 = __VLS_pickFunctionalComponentCtx(__VLS_383, __VLS_385)!;
let __VLS_387!: __VLS_NormalizeEmits<typeof __VLS_386.emit>;
{
const __VLS_388 = __VLS_intrinsicElements["br"];
const __VLS_389 = __VLS_elementAsFunctionalComponent(__VLS_388);
const __VLS_390 = __VLS_389({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_389));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_388, typeof __VLS_390> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_391 = __VLS_pickFunctionalComponentCtx(__VLS_388, __VLS_390)!;
let __VLS_392!: __VLS_NormalizeEmits<typeof __VLS_391.emit>;
}
{
const __VLS_393 = __VLS_intrinsicElements["br"];
const __VLS_394 = __VLS_elementAsFunctionalComponent(__VLS_393);
const __VLS_395 = __VLS_394({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_394));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_393, typeof __VLS_395> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_396 = __VLS_pickFunctionalComponentCtx(__VLS_393, __VLS_395)!;
let __VLS_397!: __VLS_NormalizeEmits<typeof __VLS_396.emit>;
}
(__VLS_386.slots!).default;
}
// @ts-ignore
[activeTyp,];
}
if (__VLS_ctx.activeTyp.artnr == 'D1N08') {
{
const __VLS_398 = __VLS_intrinsicElements["div"];
const __VLS_399 = __VLS_elementAsFunctionalComponent(__VLS_398);
const __VLS_400 = __VLS_399({ ...{}, class: ("modal-body"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_399));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_398, typeof __VLS_400> & Record<string, unknown>) => void)({ ...{}, class: ("modal-body"), style: ({}), });
const __VLS_401 = __VLS_pickFunctionalComponentCtx(__VLS_398, __VLS_400)!;
let __VLS_402!: __VLS_NormalizeEmits<typeof __VLS_401.emit>;
(__VLS_401.slots!).default;
}
// @ts-ignore
[activeTyp,];
}
(__VLS_361.slots!).default;
}
(__VLS_356.slots!).default;
}
(__VLS_351.slots!).default;
}
(__VLS_306.slots!).default;
}
(__VLS_281.slots!).default;
}
(__VLS_276.slots!).default;
}
(__VLS_209.slots!).default;
}
(__VLS_204.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses["protect"];
__VLS_styleScopedClasses["card"];
__VLS_styleScopedClasses["flex-1"];
__VLS_styleScopedClasses["text-center"];
__VLS_styleScopedClasses["card"];
__VLS_styleScopedClasses["flex-1"];
__VLS_styleScopedClasses["text-center"];
__VLS_styleScopedClasses["protect"];
__VLS_styleScopedClasses["card"];
__VLS_styleScopedClasses["flex-1"];
__VLS_styleScopedClasses["text-center"];
__VLS_styleScopedClasses["card"];
__VLS_styleScopedClasses["flex-1"];
__VLS_styleScopedClasses["text-center"];
__VLS_styleScopedClasses["protect"];
__VLS_styleScopedClasses["card"];
__VLS_styleScopedClasses["flex-1"];
__VLS_styleScopedClasses["text-center"];
__VLS_styleScopedClasses["card"];
__VLS_styleScopedClasses["flex-1"];
__VLS_styleScopedClasses["text-center"];
__VLS_styleScopedClasses["d-flex"];
__VLS_styleScopedClasses["d-flex"];
__VLS_styleScopedClasses["lewy"];
__VLS_styleScopedClasses["d-flex"];
__VLS_styleScopedClasses["flex-1"];
__VLS_styleScopedClasses["filtryinspiracje"];
__VLS_styleScopedClasses["filtryinspiracjeitem"];
__VLS_styleScopedClasses["filtryinspiracjeitem"];
__VLS_styleScopedClasses["filtryinspiracjeitem"];
__VLS_styleScopedClasses["filtryinspiracjeitem"];
__VLS_styleScopedClasses["filtryinspiracjeitem"];
__VLS_styleScopedClasses["filtryinspiracjeitem"];
__VLS_styleScopedClasses["filtryinspiracjeitem"];
__VLS_styleScopedClasses["podsumowanie"];
__VLS_styleScopedClasses["mt-auto"];
__VLS_styleScopedClasses["desktop"];
__VLS_styleScopedClasses["ab"];
__VLS_styleScopedClasses["fitCenter"];
__VLS_styleScopedClasses["nomobile"];
__VLS_styleScopedClasses["cena"];
__VLS_styleScopedClasses["bg-success"];
__VLS_styleScopedClasses["text-center"];
__VLS_styleScopedClasses["text-light"];
__VLS_styleScopedClasses["text-light"];
__VLS_styleScopedClasses["cena"];
__VLS_styleScopedClasses["mt-3"];
__VLS_styleScopedClasses["modal-dialog"];
__VLS_styleScopedClasses["modal-content"];
__VLS_styleScopedClasses["modal-header"];
__VLS_styleScopedClasses["bg-info"];
__VLS_styleScopedClasses["fa"];
__VLS_styleScopedClasses["fa-times"];
__VLS_styleScopedClasses["modal-body"];
__VLS_styleScopedClasses["modal-body"];
}
var __VLS_slots!: {};
return __VLS_slots;
}
