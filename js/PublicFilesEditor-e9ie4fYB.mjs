const __vite__fileDeps=[OC.filePath('text', '', 'js/Editor-CxFxOrNI.mjs'),OC.filePath('text', '', 'js/modulepreload-polyfill-CtIajbZu.mjs'),OC.filePath('text', '', 'js/vue.runtime.esm-ZT8iQ3G4.mjs'),OC.filePath('text', '', 'js/index-vg7q3Iku.mjs'),OC.filePath('text', '', 'js/index-CmjhVArF.mjs'),OC.filePath('text', '', 'js/index-Y_Oyg-XB.mjs'),OC.filePath('text', '', 'js/index-Ubm2itxG.mjs'),OC.filePath('text', '', 'js/RichText-By_3Pjqk.mjs'),OC.filePath('text', '', 'js/NcTextArea-XCi8a16Y-QQlxOwUr.mjs'),OC.filePath('text', '', 'js/NcNoteCard-e7-Bxio8-D0g8rzVg.mjs'),OC.filePath('text', '', 'js/index-BAt6szDS.mjs'),OC.filePath('text', '', 'js/MediaHandler.provider-OHfqkW9k.mjs'),OC.filePath('text', '', 'js/logger-C7d0ySTj.mjs'),OC.filePath('text', '', 'js/_plugin-vue2_normalizer-BWKvF6pj.mjs'),OC.filePath('text', '', 'js/Wrapper-0Td4MS7g.mjs'),OC.filePath('text', '', 'js/_commonjs-dynamic-modules-CSduYUN4.mjs')],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
/*! third party licenses: js/vendor.LICENSE.txt */
import{_ as i}from"./modulepreload-polyfill-CtIajbZu.mjs";import"./NcTextArea-XCi8a16Y-QQlxOwUr.mjs";import{b as l}from"./NcNoteCard-e7-Bxio8-D0g8rzVg.mjs";import"./index-Y_Oyg-XB.mjs";import{n as r}from"./_plugin-vue2_normalizer-BWKvF6pj.mjs";import"./vue.runtime.esm-ZT8iQ3G4.mjs";import"./index-vg7q3Iku.mjs";import"./index-BAt6szDS.mjs";import"./index-CmjhVArF.mjs";import"./index-Ubm2itxG.mjs";const o={name:"PublicFilesEditor",components:{NcModal:l,Editor:()=>i(()=>import("./Editor-CxFxOrNI.mjs"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]),import.meta.url)},props:{fileId:{type:Number,default:null},relativePath:{type:String,default:null},active:{type:Boolean,default:!1},shareToken:{type:String,default:null},mimeType:{type:String,default:null}},computed:{fileName(){return this.relativePath.substring(this.relativePath.lastIndexOf("/")+1)}},methods:{close(){this.$emit("close")}}};var a=function(){var t=this,e=t._self._c;return t.active?e("NcModal",{attrs:{name:t.fileName},on:{close:t.close}},[e("Editor",{attrs:{"file-id":t.fileId,"relative-path":t.relativePath,active:t.active,"share-token":t.shareToken,mime:t.mimeType}})],1):t._e()},m=[],n=r(o,a,m,!1,null,null,null,null);const P=n.exports;export{P as default};