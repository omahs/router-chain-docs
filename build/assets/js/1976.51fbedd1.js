"use strict";(self.webpackChunkrouter_docs=self.webpackChunkrouter_docs||[]).push([[1976],{21976:(e,t,s)=>{s.r(t),s.d(t,{dyte_webinar_stage_toggle:()=>o});var i=s(94196),n=s(7147),a=s(61070),r=s(79781);s(55752);const o=class{constructor(e){(0,i.r)(this,e),this.requestToJoinAcceptedListener=()=>{this.stageStatus="ACCEPTED"},this.requestToJoinRejectedListener=()=>{this.stageStatus="DENIED"},this.stageJoinedListener=()=>{this.stageStatus="ACCEPTED"},this.removeFromStageListener=()=>{this.stageStatus="NOT_REQUESTED"},this.variant="button",this.iconPack=n.d,this.t=(0,a.u)(),this.stageStatus="NOT_REQUESTED",this.requestProduce=!1,this.activeJoinStageChanged=e=>{e||(this.stageStatus="NOT_REQUESTED")},this.stageCallback=async()=>{var e;const t=null===(e=this.meeting)||void 0===e?void 0:e.self;if(null!=t&&this.requestProduce){if("ACCEPTED"===this.stageStatus)return await t.leaveStage(),void(this.stageStatus="NOT_REQUESTED");await t.requestToJoinStage(),this.stageStatus="PENDING"}}}connectedCallback(){this.meetingChanged(this.meeting),this.meeting.self.addListener("joinStageRequestAccepted",this.requestToJoinAcceptedListener),this.meeting.self.addListener("joinStageRequestRejected",this.requestToJoinRejectedListener),this.meeting.self.addListener("stageJoined",this.stageJoinedListener),this.meeting.self.addListener("removedFromStage",this.removeFromStageListener),(0,r.o)("activeJoinStage",(e=>this.activeJoinStageChanged(e)))}disconnectedCallback(){this.meeting.self.removeListener("joinStageRequestAccepted",this.requestToJoinAcceptedListener),this.meeting.self.removeListener("joinStageRequestRejected",this.requestToJoinRejectedListener),this.meeting.self.removeListener("removedFromStage",this.removeFromStageListener),this.meeting.self.removeListener("stageJoined",this.stageJoinedListener)}meetingChanged(e){null!=e&&(this.requestProduce=e.self.permissions.requestProduce)}getState(){let e="",t="",s="",i={},n=!1;return"PENDING"===this.stageStatus?(t=this.t("stage_request.approval_pending"),e=this.t("stage_request.pending_tip"),s=this.iconPack.join_stage,i["red-icon"]=!1,n=!0):"ACCEPTED"===this.stageStatus?(t=this.t("stage_request.leave_stage"),e=this.t("stage_request.leave_tip"),s=this.iconPack.leave_stage,i["red-icon"]=!1,n=!1):"DENIED"===this.stageStatus?(t=this.t("stage_request.denied"),e=this.t("stage_request.denied_tip"),s=this.iconPack.join_stage,i["red-icon"]=!1,n=!0):(t=this.t("stage_request.request"),e=this.t("stage_request.request_tip"),s=this.iconPack.join_stage,n=!1),{tooltipLabel:e,label:t,icon:s,classList:i,disabled:n}}render(){if(!this.requestProduce)return null;const{tooltipLabel:e,label:t,icon:s,classList:n,disabled:a}=this.getState();return(0,i.h)(i.H,{title:t},(0,i.h)("dyte-tooltip",{placement:"top",kind:"block",label:e,delay:600,part:"tooltip"},(0,i.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,variant:this.variant,label:t,icon:s,class:n,onClick:this.stageCallback,disabled:a,showWarning:!1})))}static get watchers(){return{meeting:["meetingChanged"]}}};o.style=":host{display:block;font-family:var(--dyte-font-family, sans-serif)}"},61070:(e,t,s)=>{s.d(t,{g:()=>n,u:()=>a});var i=s(55752);const n=async e=>{if(null==e||"en"===e||""===e.trim())return i.d;try{const t=await fetch(`http://localhost:5000/${e}.json`);return t.ok?Object.assign({},i.d,await t.json()):i.d}catch(t){return i.d}},a=(e=i.d)=>t=>{var s;return null!==(s=e[t])&&void 0!==s?s:t}},79781:(e,t,s)=>{s.d(t,{o:()=>c,s:()=>o});var i=s(94196);const n=e=>!("isConnected"in e)||e.isConnected,a=((e,t)=>{let s;return(...i)=>{s&&clearTimeout(s),s=setTimeout((()=>{s=0,e(...i)}),t)}})((e=>{for(let t of e.keys())e.set(t,e.get(t).filter(n))}),2e3),r=(e,t)=>{const s=e.indexOf(t);s>=0&&(e[s]=e[e.length-1],e.length--)},{state:o,onChange:c}=((e,t)=>{const s=((e,t=((e,t)=>e!==t))=>{let s=new Map(Object.entries(null!=e?e:{}));const i={dispose:[],get:[],set:[],reset:[]},n=()=>{s=new Map(Object.entries(null!=e?e:{})),i.reset.forEach((e=>e()))},a=e=>(i.get.forEach((t=>t(e))),s.get(e)),o=(e,n)=>{const a=s.get(e);t(n,a,e)&&(s.set(e,n),i.set.forEach((t=>t(e,n,a))))},c="undefined"==typeof Proxy?{}:new Proxy(e,{get:(e,t)=>a(t),ownKeys:e=>Array.from(s.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>s.has(t),set:(e,t,s)=>(o(t,s),!0)}),h=(e,t)=>(i[e].push(t),()=>{r(i[e],t)});return{state:c,get:a,set:o,on:h,onChange:(t,s)=>{const i=h("set",((e,i)=>{e===t&&s(i)})),n=h("reset",(()=>s(e[t])));return()=>{i(),n()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(h("set",t.set)),t.get&&e.push(h("get",t.get)),t.reset&&e.push(h("reset",t.reset)),t.dispose&&e.push(h("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{i.dispose.forEach((e=>e())),n()},reset:n,forceUpdate:e=>{const t=s.get(e);i.set.forEach((s=>s(e,t,t)))}}})(e,t);return s.use((()=>{if("function"!=typeof i.a)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const s=(0,i.a)();s&&((e,t,s)=>{const i=e.get(t);i?i.includes(s)||i.push(s):e.set(t,[s])})(e,t,s)},set:t=>{const s=e.get(t);s&&e.set(t,s.filter(i.f)),a(e)},reset:()=>{e.forEach((e=>e.forEach(i.f))),a(e)}}})()),s})({})}}]);