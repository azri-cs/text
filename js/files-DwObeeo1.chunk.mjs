const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=[window.OC.filePath('text', '', 'js/PublicFilesEditor-oCJWK5lF.chunk.mjs'),window.OC.filePath('text', '', 'js/modulepreload-polyfill-DMTabKmO.chunk.mjs'),window.OC.filePath('text', '', 'js/emoji-picker-SoWZqoso.chunk.mjs'),window.OC.filePath('text', '', 'js/_plugin-vue2_normalizer-C-j_wn_C.chunk.mjs'),window.OC.filePath('text', '', 'js/vue.runtime.esm-DaLNuXGQ.chunk.mjs'),window.OC.filePath('text', '', 'js/NcNoteCard-CImn6F9p-9zf-u00P.chunk.mjs'),window.OC.filePath('text', '', 'css/NcNoteCard-CImn6F9p-BBud9Daj.chunk.css'),window.OC.filePath('text', '', 'js/index-CmPFnv9J.chunk.mjs'),window.OC.filePath('text', '', 'js/index-Ubm2itxG.chunk.mjs'),window.OC.filePath('text', '', 'js/index-DkzhscpN.chunk.mjs'),window.OC.filePath('text', '', 'css/_plugin-vue2_normalizer-B3zc_yip.chunk.css'),window.OC.filePath('text', '', 'js/RichWorkspace-C69j0D3g.chunk.mjs'),window.OC.filePath('text', '', 'js/_plugin-vue2_normalizer-CQ6iBklL-Bg3uNRyB.chunk.mjs'),window.OC.filePath('text', '', 'js/Editor.singleton-DGQxbCxR.chunk.mjs'),window.OC.filePath('text', '', 'js/RichTextReader-DCFTc4iW.chunk.mjs'),window.OC.filePath('text', '', 'js/BaseReader-BxCHXYje.chunk.mjs'),window.OC.filePath('text', '', 'js/RichText-CKHt-LX1.chunk.mjs'),window.OC.filePath('text', '', 'js/index-c3o_VCAX.chunk.mjs'),window.OC.filePath('text', '', 'js/MediaHandler.provider-DDtlCUKJ.chunk.mjs'),window.OC.filePath('text', '', 'js/logger-B4T8Bva5.chunk.mjs'),window.OC.filePath('text', '', 'css/RichText-VRU8piUn.chunk.css'),window.OC.filePath('text', '', 'css/BaseReader-BJvsPn00.chunk.css'),window.OC.filePath('text', '', 'css/RichTextReader-CpjsUkfz.chunk.css'),window.OC.filePath('text', '', 'css/RichWorkspace-DAC-32ZA.chunk.css')])))=>i.map(i=>d[i]);
/*! third party licenses: js/vendor.LICENSE.txt */
import{_ as f,g as _,e as O}from"./modulepreload-polyfill-DMTabKmO.chunk.mjs";import{g as E,s as g,a as F,p as b}from"./_plugin-vue2_normalizer-CQ6iBklL-Bg3uNRyB.chunk.mjs";import"./NcNoteCard-CImn6F9p-9zf-u00P.chunk.mjs";import{H as I,b as v,N as k,P as x,F as R}from"./index-DaRhCCeC.chunk.mjs";import{l as A}from"./index-Ubm2itxG.chunk.mjs";import{h as N,c as P}from"./index-CmPFnv9J.chunk.mjs";import{b as w}from"./mime-2222LIwa.chunk.mjs";import{s as T}from"./index-c3o_VCAX.chunk.mjs";import"./emoji-picker-SoWZqoso.chunk.mjs";import"./vue.runtime.esm-DaLNuXGQ.chunk.mjs";import"./index-DkzhscpN.chunk.mjs";const V='<svg xmlns="http://www.w3.org/2000/svg" id="mdi-text" viewBox="0 0 24 24"><path d="M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z" /></svg>',h="Edit with text app",j=()=>{const i={attach(e){const o=e.fileList;o.id!=="files"&&o.id!=="files.public"||e.addMenuEntry({id:"file",displayName:t("text","New text file"),templateName:t("text","New text file")+"."+A("text","default_file_extension"),iconClass:"icon-filetype-text",fileType:"file",actionLabel:t("text","Create new text file"),actionHandler(c){o.createFile(c).then(function(n,d){const s=new OCA.Files.FileInfoModel(d);typeof OCA.Viewer<"u"?OCA.Files.fileActions.triggerAction("view",s,o):typeof OCA.Viewer>"u"&&OCA.Files.fileActions.triggerAction(h,s,o)})}})}};OC.Plugins.register("OCA.Files.NewFileMenu",i)},z=()=>{const i=E(),e=document.querySelector("#preview table.files-filestable");if(!i||!e){const o=document.createElement("div");o.id="text-viewer-fallback",document.body.appendChild(o);const c=n=>OCA.Files.fileActions.register(n,h,OC.PERMISSION_UPDATE|OC.PERMISSION_READ,N("core","actions/rename"),d=>{const s=window.FileList.findFile(d);Promise.all([f(()=>import("./vue.runtime.esm-DaLNuXGQ.chunk.mjs").then(r=>r.x),[],import.meta.url),f(()=>import("./PublicFilesEditor-oCJWK5lF.chunk.mjs"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url)]).then(r=>{const a=window.FileList.getCurrentDirectory()+"/"+d,l=r[0].default;l.prototype.t=window.t,l.prototype.n=window.n,l.prototype.OCA=window.OCA;const u=r[1].default;new l({render:function(y){const C=this;return y(u,{props:{fileId:s?s.id:null,active:!0,shareToken:i,relativePath:a,mimeType:s.mimetype},on:{close:function(){C.$destroy()}}})}}).$mount(o)})},t("text","Edit"));for(let n=0;n<w.length;n++)c(w[n]),OCA.Files.fileActions.setDefault(w[n],h)}};let m=!1;const G=()=>{const i=t("text","Readme")+"."+A("text","default_file_extension");v({id:"rich-workspace-init",displayName:t("text","Add folder description"),category:k.Other,enabled(e){return Number(e.attributes["rich-workspace-file"])?!1:(e.permissions&x.CREATE)!==0},iconSvgInline:V,async handler(e,o){var a,l;const c=o.map(u=>u.basename);if(c.includes(i)){g(t("text",'"{name}" already exist!',{name:i}));return}const n=e.encodedSource+"/"+encodeURIComponent(i),d=await P({method:"PUT",url:n,headers:{Overwrite:"F"}}),s=parseInt(d.headers["oc-fileid"]),r=new R({source:e.source+"/"+i,id:s,mtime:new Date,mime:"text/markdown",owner:((a=_())==null?void 0:a.uid)||null,permissions:x.ALL,root:(e==null?void 0:e.root)||"/files/"+((l=_())==null?void 0:l.uid)});F(t("text",'Created "{name}"',{name:i})),c.length===0&&(m=r),O("files:node:created",r)}})};let p=null;const J=new I({id:"workspace",order:10,enabled(i,e){return e.id==="files"||e.id==="favorites"},async render(i,e,o){p&&(p.$destroy(),p=null);const c=!!e.attributes["rich-workspace-file"]||!!m,n=m?b.dirname(m.path):e.path,d=m?"":e.attributes["rich-workspace"];m=!1;const{default:s}=await f(async()=>{const{default:r}=await import("./RichWorkspace-C69j0D3g.chunk.mjs");return{default:r}},__vite__mapDeps([11,7,4,1,2,12,8,5,6,13,14,15,16,3,9,10,17,18,19,20,21,22,23]),import.meta.url);f(()=>import("./vue.runtime.esm-DaLNuXGQ.chunk.mjs").then(r=>r.x),[],import.meta.url).then(r=>{i.id="files-workspace-wrapper";const a=r.default;a.prototype.t=window.t,a.prototype.n=window.n,a.prototype.OCA=window.OCA;const l=a.extend(s);p=new l({propsData:{path:n,hasRichWorkspace:c,content:d},store:T}).$mount(i)})},updated(i,e){m=!1;const o=!!i.attributes["rich-workspace-file"];p.path=i.path,p.hasRichWorkspace=o,p.content=i.attributes["rich-workspace"]}});export{h as FILE_ACTION_IDENTIFIER,J as FilesWorkspaceHeader,G as addMenuRichWorkspace,z as registerFileActionFallback,j as registerFileCreate};