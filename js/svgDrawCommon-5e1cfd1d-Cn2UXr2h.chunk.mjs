/*! third party licenses: js/vendor.LICENSE.txt */
import{n as x,m as o}from"./mermaid.core-DhR9OPh9.chunk.mjs";const i=(e,t)=>{const a=e.append("rect");if(a.attr("x",t.x),a.attr("y",t.y),a.attr("fill",t.fill),a.attr("stroke",t.stroke),a.attr("width",t.width),a.attr("height",t.height),t.name&&a.attr("name",t.name),t.rx!==void 0&&a.attr("rx",t.rx),t.ry!==void 0&&a.attr("ry",t.ry),t.attrs!==void 0)for(const r in t.attrs)a.attr(r,t.attrs[r]);return t.class!==void 0&&a.attr("class",t.class),a},l=(e,t)=>{const a={x:t.startx,y:t.starty,width:t.stopx-t.startx,height:t.stopy-t.starty,fill:t.fill,stroke:t.stroke,class:"rect"};i(e,a).lower()},h=(e,t)=>{const a=t.text.replace(x," "),r=e.append("text");r.attr("x",t.x),r.attr("y",t.y),r.attr("class","legend"),r.style("text-anchor",t.anchor),t.class!==void 0&&r.attr("class",t.class);const s=r.append("tspan");return s.attr("x",t.x+t.textMargin*2),s.text(a),r},y=(e,t,a,r)=>{const s=e.append("image");s.attr("x",t),s.attr("y",a);const n=o(r);s.attr("xlink:href",n)},d=(e,t,a,r)=>{const s=e.append("use");s.attr("x",t),s.attr("y",a);const n=o(r);s.attr("xlink:href","#".concat(n))},p=()=>({x:0,y:0,width:100,height:100,fill:"#EDF2AE",stroke:"#666",anchor:"start",rx:0,ry:0}),f=()=>({x:0,y:0,width:100,height:100,"text-anchor":"start",style:"#666",textMargin:0,rx:0,ry:0,tspan:!0});export{l as a,f as b,d as c,i as d,y as e,h as f,p as g};