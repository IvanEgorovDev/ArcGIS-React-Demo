const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./loader-_l-1gyCC.js","./index-S9cgEMoY.js","./index-DH7KspX6.css","./mat4f64-Dk4dwAN8.js","./quat-kYOzEOES.js","./mat3f64-q3fE-ZOt.js","./quatf64-aQ5IuZRd.js","./BufferView-DKR-QjAK.js","./resourceUtils-DCK-IlXn.js","./basicInterfaces-CZwQPxTp.js"])))=>i.map(i=>d[i]);
import{ld as ye,le as Te,j6 as J,jW as oe,aa as Q,kG as ae,P as be,f as ie,y as we,d9 as Y,hf as le,lb as D,s as ve,_ as $e,ae as Re,a9 as G,eK as Z,es as Ae,lf as X,eI as Me,aC as Be,jJ as Se,e7 as ue,lg as Ie,ht as Oe,hu as ee,hv as Pe}from"./index-S9cgEMoY.js";import{a as Ee}from"./devEnvironmentUtils-CnNDiFMM.js";import{t as W,e as ce}from"./mat3f64-q3fE-ZOt.js";import{e as Ce}from"./mat4f64-Dk4dwAN8.js";import{N as fe,f as me,n as N}from"./Geometry-Bpd7MU3u.js";import{i as de,c as pe,x as _e,L as ke,O as Fe,E as Ue}from"./BufferView-DKR-QjAK.js";import{r as je,n as Le,d as te,l as re}from"./vec3-kZ5cjluG.js";import{o as qe,d as se}from"./vec4-wsixCHeu.js";import{n as Ne,o as De,a as Ve}from"./indexUtils-CraBOi5u.js";import{n as z}from"./resourceUtils-DCK-IlXn.js";import{u as Ge}from"./memoryEstimations-CtqgxgT7.js";import{t as We}from"./NestedMap-GuqgquCN.js";import{o as ze}from"./Indices-D1dawiaF.js";import{t as He}from"./requestImageUtils-BekpyGek.js";import{t as F}from"./orientedBoundingBox-3b--QMUf.js";import{e as H,i as M,n as Ke}from"./basicInterfaces-CZwQPxTp.js";import{e as C}from"./VertexAttribute-Cq4MnHjR.js";import{z as V,n as Je,o as Qe,s as Ye,t as Ze}from"./DefaultMaterial-9Bb5u1PD.js";import{a as ne}from"./NormalAttribute.glsl-DyuG-0kQ.js";function j(t){if(t==null)return null;const e=t.offset!=null?t.offset:ye,n=t.rotation!=null?t.rotation:0,r=t.scale!=null?t.scale:Te,c=W(1,0,0,0,1,0,e[0],e[1],1),i=W(Math.cos(n),-Math.sin(n),0,Math.sin(n),Math.cos(n),0,0,0,1),o=W(r[0],0,0,0,r[1],0,0,0,1),l=ce();return J(l,i,o),J(l,c,l),l}class Xe{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class et{constructor(e,n,r){this.name=e,this.lodThreshold=n,this.pivotOffset=r,this.stageResources=new Xe,this.numberOfVertices=0}}const B=()=>we.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");class tt{constructor(e,n,r){this.resource=e,this.textures=n,this.cachedMemory=r}}async function rt(t,e){const n=await st(t,e),r=await lt(n.textureDefinitions??{},e);let c=0;for(const i in r)if(r.hasOwnProperty(i)){const o=r[i];c+=o!=null&&o.image?o.image.width*o.image.height*4:0}return new tt(n,r,c+Ge(n))}async function st(t,e){const n=e==null?void 0:e.streamDataRequester;if(n)return nt(t,n,e);const r=await ae(be(t,e));if(r.ok===!0)return r.value.data;ie(r.error),he(r.error)}async function nt(t,e,n){const r=await ae(e.request(t,"json",n));if(r.ok===!0)return r.value;ie(r.error),he(r.error.details.url)}function he(t){throw new ve("",`Request for object resource failed: ${t}`)}function ot(t){const e=t.params,n=e.topology;let r=!0;switch(e.vertexAttributes||(B().warn("Geometry must specify vertex attributes"),r=!1),e.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const i=e.faces;if(i){if(e.vertexAttributes)for(const o in e.vertexAttributes){const l=i[o];l!=null&&l.values?(l.valueType!=null&&l.valueType!=="UInt32"&&(B().warn(`Unsupported indexed geometry indices type '${l.valueType}', only UInt32 is currently supported`),r=!1),l.valuesPerElement!=null&&l.valuesPerElement!==1&&(B().warn(`Unsupported indexed geometry values per element '${l.valuesPerElement}', only 1 is currently supported`),r=!1)):(B().warn(`Indexed geometry does not specify face indices for '${o}' attribute`),r=!1)}}else B().warn("Indexed geometries must specify faces"),r=!1;break}default:B().warn(`Unsupported topology '${n}'`),r=!1}t.params.material||(B().warn("Geometry requires material"),r=!1);const c=t.params.vertexAttributes;for(const i in c)c[i].values||(B().warn("Geometries with externally defined attributes are not yet supported"),r=!1);return r}function at(t,e){var m,b;const n=new Array,r=new Array,c=new Array,i=new We,o=t.resource,l=oe.parse(o.version||"1.0","wosr");ct.validate(l);const s=o.model.name,a=o.model.geometries,u=o.materialDefinitions??{},f=t.textures;let p=0;const h=new Map;for(let g=0;g<a.length;g++){const y=a[g];if(!ot(y))continue;const R=ut(y),T=y.params.vertexAttributes,x=[],O=d=>{if(y.params.topology==="PerAttributeArray")return null;const v=y.params.faces;for(const w in v)if(w===d)return v[w].values;return null},U=T[C.POSITION],L=U.values.length/U.valuesPerElement;for(const d in T){const v=T[d],w=v.values,A=O(d)??ze(L);x.push([d,new F(w,A,v.valuesPerElement,!0)])}const S=R.texture,$=f&&f[S];if($&&!h.has(S)){const{image:d,parameters:v}=$,w=new fe(d,v);r.push(w),h.set(S,w)}const q=h.get(S),_=q?q.id:void 0,P=R.material;let I=i.get(P,S);if(I==null){const d=u[P.slice(P.lastIndexOf("/")+1)].params;d.transparency===1&&(d.transparency=0);const v=$&&$.alphaChannelUsage,w=d.transparency>0||v==="transparency"||v==="maskAndTransparency",A=$?xe($.alphaChannelUsage):void 0,K={ambient:Q(d.diffuse),diffuse:Q(d.diffuse),opacity:1-(d.transparency||0),transparent:w,textureAlphaMode:A,textureAlphaCutoff:.33,textureId:_,doubleSided:!0,cullFace:H.None,colorMixMode:d.externalColorMixMode||"tint",textureAlphaPremultiplied:($==null?void 0:$.parameters.preMultiplyAlpha)??!1};e!=null&&e.materialParameters&&Object.assign(K,e.materialParameters),I=new V(K,e),i.set(P,S,I)}c.push(I);const E=new me(I,x);p+=((b=(m=x.find(d=>d[0]===C.POSITION))==null?void 0:m[1])==null?void 0:b.indices.length)??0,n.push(E)}return{engineResources:[{name:s,stageResources:{textures:r,materials:c,geometries:n},pivotOffset:o.model.pivotOffset,numberOfVertices:p,lodThreshold:null}],referenceBoundingBox:it(n)}}function it(t){const e=le();return t.forEach(n=>{const r=n.boundingInfo;r!=null&&(D(e,r.bbMin),D(e,r.bbMax))}),e}async function lt(t,e){const n=new Array;for(const i in t){const o=t[i],l=o.images[0].data;if(!l){B().warn("Externally referenced texture data is not yet supported");continue}const s=o.encoding+";base64,"+l,a="/textureDefinitions/"+i,u=o.channels==="rgba"?o.alphaChannelUsage||"transparency":"none",f={noUnpackFlip:!0,wrap:{s:Y.REPEAT,t:Y.REPEAT},preMultiplyAlpha:xe(u)!==M.Opaque},p=e!=null&&e.disableTextures?Promise.resolve(null):He(s,e);n.push(p.then(h=>({refId:a,image:h,parameters:f,alphaChannelUsage:u})))}const r=await Promise.all(n),c={};for(const i of r)c[i.refId]=i;return c}function xe(t){switch(t){case"mask":return M.Mask;case"maskAndTransparency":return M.MaskBlend;case"none":return M.Opaque;default:return M.Blend}}function ut(t){const e=t.params;return{id:1,material:e.material,texture:e.texture,region:e.texture}}const ct=new oe(1,2,"wosr");async function ft(t,e){var f;const n=ge(Ee(t));if(n.fileType==="wosr"){const p=await(e.cache?e.cache.loadWOSR(n.url,e):rt(n.url,e)),{engineResources:h,referenceBoundingBox:m}=at(p,e);return{lods:h,referenceBoundingBox:m,isEsriSymbolResource:!1,isWosr:!0}}let r;if(e.cache)r=await e.cache.loadGLTF(n.url,e,!!e.usePBR);else{const{loadGLTF:p}=await $e(()=>import("./loader-_l-1gyCC.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url);r=await p(new Ne(e.streamDataRequester),n.url,e,e.usePBR)}const c=(f=r.model.meta)==null?void 0:f.ESRI_proxyEllipsoid,i=r.meta.isEsriSymbolResource&&c!=null&&r.meta.ESRI_webstyle==="EsriRealisticTreesStyle";i&&!r.customMeta.esriTreeRendering&&(r.customMeta.esriTreeRendering=!0,xt(r,c));const o=!!e.usePBR,l=r.meta.isEsriSymbolResource?{usePBR:o,isSchematic:!1,treeRendering:i,mrrFactors:Ye}:{usePBR:o,isSchematic:!1,treeRendering:!1,mrrFactors:Ze},s={...e.materialParameters,treeRendering:i},{engineResources:a,referenceBoundingBox:u}=mt(r,l,s,e,n.specifiedLodIndex);return{lods:a,referenceBoundingBox:u,isEsriSymbolResource:r.meta.isEsriSymbolResource,isWosr:!1}}function ge(t){const e=t.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return e?{fileType:"gltf",url:e[1],specifiedLodIndex:e[4]!=null?Number(e[4]):null}:t.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:t,specifiedLodIndex:null}:{fileType:"unknown",url:t,specifiedLodIndex:null}}function mt(t,e,n,r,c){const i=t.model,o=new Array,l=new Map,s=new Map,a=i.lods.length,u=le();return i.lods.forEach((f,p)=>{const h=r.skipHighLods===!0&&(a>1&&p===0||a>3&&p===1)||r.skipHighLods===!1&&c!=null&&p!==c;if(h&&p!==0)return;const m=new et(f.name,f.lodThreshold,[0,0,0]);f.parts.forEach(b=>{const g=h?new V({},r):dt(i,b,m,e,n,l,s,r),{geometry:y,vertexCount:R}=pt(b,g??new V({},r)),T=y.boundingInfo;T!=null&&p===0&&(D(u,T.bbMin),D(u,T.bbMax)),g!=null&&(m.stageResources.geometries.push(y),m.numberOfVertices+=R)}),h||o.push(m)}),{engineResources:o,referenceBoundingBox:u}}function dt(t,e,n,r,c,i,o,l){var R,T;const s=t.materials.get(e.material);if(s==null)return null;const{normal:a,color:u,texCoord0:f,tangent:p}=e.attributes,h=e.material+(a?"_normal":"")+(u?"_color":"")+(f?"_texCoord0":"")+(p?"_tangent":""),m=e.attributes.texCoord0!=null,b=e.attributes.normal!=null,g=ht(s.alphaMode);if(!i.has(h)){if(m){const E=(d,v=!1)=>{if(d!=null&&!o.has(d)){const w=t.textures.get(d);if(w){const A=w.data;o.set(d,new fe(z(A)?A.data:A,{...w.parameters,preMultiplyAlpha:!z(A)&&v,encoding:z(A)?A.encoding:void 0}))}}};E(s.colorTexture,g!==M.Opaque),E(s.normalTexture),E(s.occlusionTexture),E(s.emissiveTexture),E(s.metallicRoughnessTexture)}const x=1/ue,O=s.color[0]**x,U=s.color[1]**x,L=s.color[2]**x,S=s.emissiveFactor[0]**x,$=s.emissiveFactor[1]**x,q=s.emissiveFactor[2]**x,_=s.colorTexture!=null&&m?o.get(s.colorTexture):null,P=Je(s),I=((R=s.normalTextureTransform)==null?void 0:R.scale)!=null?(T=s.normalTextureTransform)==null?void 0:T.scale:Ie;i.set(h,new V({...r,transparent:g===M.Blend,customDepthTest:Ke.Lequal,textureAlphaMode:g,textureAlphaCutoff:s.alphaCutoff,diffuse:[O,U,L],ambient:[O,U,L],opacity:s.opacity,doubleSided:s.doubleSided,doubleSidedType:"winding-order",cullFace:s.doubleSided?H.None:H.Back,hasVertexColors:!!e.attributes.color,hasVertexTangents:!!e.attributes.tangent,normalType:b?ne.Attribute:ne.ScreenDerivative,castShadows:!0,receiveShadows:s.receiveShadows,receiveAmbientOcclusion:s.receiveAmbientOcclustion,textureId:_!=null?_.id:void 0,colorMixMode:s.colorMixMode,normalTextureId:s.normalTexture!=null&&m?o.get(s.normalTexture).id:void 0,textureAlphaPremultiplied:_!=null&&!!_.parameters.preMultiplyAlpha,occlusionTextureId:s.occlusionTexture!=null&&m?o.get(s.occlusionTexture).id:void 0,emissiveTextureId:s.emissiveTexture!=null&&m?o.get(s.emissiveTexture).id:void 0,metallicRoughnessTextureId:s.metallicRoughnessTexture!=null&&m?o.get(s.metallicRoughnessTexture).id:void 0,emissiveFactor:[S,$,q],mrrFactors:P?Qe:[s.metallicFactor,s.roughnessFactor,r.mrrFactors[2]],isSchematic:P,colorTextureTransformMatrix:j(s.colorTextureTransform),normalTextureTransformMatrix:j(s.normalTextureTransform),scale:[I[0],I[1]],occlusionTextureTransformMatrix:j(s.occlusionTextureTransform),emissiveTextureTransformMatrix:j(s.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:j(s.metallicRoughnessTextureTransform),...c},l))}const y=i.get(h);if(n.stageResources.materials.push(y),m){const x=O=>{O!=null&&n.stageResources.textures.push(o.get(O))};x(s.colorTexture),x(s.normalTexture),x(s.occlusionTexture),x(s.emissiveTexture),x(s.metallicRoughnessTexture)}return y}function pt(t,e){const n=t.attributes.position.count,r=De(t.indices||n,t.primitiveType),c=N(3*n),{typedBuffer:i,typedBufferStride:o}=t.attributes.position;je(c,i,t.transform,3,o);const l=[[C.POSITION,new F(c,r,3,!0)]];if(t.attributes.normal!=null){const a=N(3*n),{typedBuffer:u,typedBufferStride:f}=t.attributes.normal;Oe(k,t.transform),Le(a,u,k,3,f),ee(k)&&te(a,a),l.push([C.NORMAL,new F(a,r,3,!0)])}if(t.attributes.tangent!=null){const a=N(4*n),{typedBuffer:u,typedBufferStride:f}=t.attributes.tangent;Pe(k,t.transform),qe(a,u,k,4,f),ee(k)&&te(a,a,4),l.push([C.TANGENT,new F(a,r,4,!0)])}if(t.attributes.texCoord0!=null){const a=N(2*n),{typedBuffer:u,typedBufferStride:f}=t.attributes.texCoord0;Ve(a,u,2,f),l.push([C.UV0,new F(a,r,2,!0)])}const s=t.attributes.color;if(s!=null){const a=new Uint8Array(4*n);s.elementCount===4?s instanceof pe?se(a,s,1,255):(s instanceof _e||s instanceof ke)&&se(a,s,1/255,255):(a.fill(255),s instanceof de?re(a,s.typedBuffer,1,255,4,s.typedBufferStride):(t.attributes.color instanceof Fe||t.attributes.color instanceof Ue)&&re(a,s.typedBuffer,1/255,255,4,t.attributes.color.typedBufferStride)),l.push([C.COLOR,new F(a,r,4,!0)])}return{geometry:new me(e,l),vertexCount:n}}const k=ce();function ht(t){switch(t){case"BLEND":return M.Blend;case"MASK":return M.Mask;case"OPAQUE":case null:case void 0:return M.Opaque}}function xt(t,e){for(let n=0;n<t.model.lods.length;++n){const r=t.model.lods[n];for(const c of r.parts){const i=c.attributes.normal;if(i==null)return;const o=c.attributes.position,l=o.count,s=G(),a=G(),u=G(),f=new Float32Array(4*l),p=new Float32Array(3*l),h=Re(Ce(),c.transform);let m=0,b=0;for(let g=0;g<l;g++){o.getVec(g,a),i.getVec(g,s),Z(a,a,c.transform),Ae(u,a,e.center),X(u,u,e.radius);const y=u[2],R=Me(u),T=Math.min(.45+.55*R*R,1)**ue;X(u,u,e.radius),h!==null&&Z(u,u,h),Be(u,u),n+1!==t.model.lods.length&&t.model.lods.length>1&&Se(u,u,s,y>-1?.2:Math.min(-4*y-3.8,1)),p[m]=u[0],p[m+1]=u[1],p[m+2]=u[2],m+=3,f[b]=T,f[b+1]=T,f[b+2]=T,f[b+3]=1,b+=4}c.attributes.normal=new de(p),c.attributes.color=new pe(f)}}}const Ft=Object.freeze(Object.defineProperty({__proto__:null,fetch:ft,parseUrl:ge},Symbol.toStringTag,{value:"Module"}));export{ft as Y,Ft as o,j as s};
