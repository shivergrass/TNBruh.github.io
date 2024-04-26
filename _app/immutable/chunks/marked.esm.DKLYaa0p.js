var xe=Object.defineProperty;var be=(a,e,t)=>e in a?xe(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var d=(a,e,t)=>(be(a,typeof e!="symbol"?e+"":e,t),t),me=(a,e,t)=>{if(!e.has(a))throw TypeError("Cannot "+t)};var j=(a,e,t)=>{if(e.has(a))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(a):e.set(a,t)};var C=(a,e,t)=>(me(a,e,"access private method"),t);import{i as we,e as ye,f as L,h as $e}from"./scheduler.CCkvOnEv.js";import{p as Te,t as ze,b as _e,d as Re}from"./index.CnQFu1FE.js";function pt(a,e){const t=e.token={};function n(i,r,s,l){if(e.token!==t)return;e.resolved=l;let o=e.ctx;s!==void 0&&(o=o.slice(),o[s]=l);const p=i&&(e.current=i)(o);let c=!1;e.block&&(e.blocks?e.blocks.forEach((u,h)=>{h!==r&&u&&(Te(),ze(u,1,1,()=>{e.blocks[h]===u&&(e.blocks[h]=null)}),_e())}):e.block.d(1),p.c(),Re(p,1),p.m(e.mount(),e.anchor),c=!0),e.block=p,e.blocks&&(e.blocks[r]=p),c&&$e()}if(we(a)){const i=ye();if(a.then(r=>{L(i),n(e.then,1,e.value,r),L(null)},r=>{if(L(i),n(e.catch,2,e.error,r),L(null),!e.hasCatch)throw r}),e.current!==e.pending)return n(e.pending,0),!0}else{if(e.current!==e.then)return n(e.then,1,e.value,a),!0;e.resolved=a}}function ut(a,e,t){const n=e.slice(),{resolved:i}=a;a.current===a.then&&(n[a.value]=i),a.current===a.catch&&(n[a.error]=i),a.block.p(n,t)}function F(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let z=F();function le(a){z=a}const oe=/[&<>"']/,Se=new RegExp(oe.source,"g"),ae=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Ie=new RegExp(ae.source,"g"),Ae={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},te=a=>Ae[a];function x(a,e){if(e){if(oe.test(a))return a.replace(Se,te)}else if(ae.test(a))return a.replace(Ie,te);return a}const Ee=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Ce(a){return a.replace(Ee,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const Le=/(^|[^\[])\^/g;function k(a,e){let t=typeof a=="string"?a:a.source;e=e||"";const n={replace:(i,r)=>{let s=typeof r=="string"?r:r.source;return s=s.replace(Le,"$1"),t=t.replace(i,s),n},getRegex:()=>new RegExp(t,e)};return n}function ne(a){try{a=encodeURI(a).replace(/%25/g,"%")}catch{return null}return a}const R={exec:()=>null};function se(a,e){const t=a.replace(/\|/g,(r,s,l)=>{let o=!1,p=s;for(;--p>=0&&l[p]==="\\";)o=!o;return o?"|":" |"}),n=t.split(/ \|/);let i=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(/\\\|/g,"|");return n}function q(a,e,t){const n=a.length;if(n===0)return"";let i=0;for(;i<n;){const r=a.charAt(n-i-1);if(r===e&&!t)i++;else if(r!==e&&t)i++;else break}return a.slice(0,n-i)}function qe(a,e){if(a.indexOf(e[1])===-1)return-1;let t=0;for(let n=0;n<a.length;n++)if(a[n]==="\\")n++;else if(a[n]===e[0])t++;else if(a[n]===e[1]&&(t--,t<0))return n;return-1}function ie(a,e,t,n){const i=e.href,r=e.title?x(e.title):null,s=a[1].replace(/\\([\[\]])/g,"$1");if(a[0].charAt(0)!=="!"){n.state.inLink=!0;const l={type:"link",raw:t,href:i,title:r,text:s,tokens:n.inlineTokens(s)};return n.state.inLink=!1,l}return{type:"image",raw:t,href:i,title:r,text:x(s)}}function ve(a,e){const t=a.match(/^(\s+)(?:```)/);if(t===null)return e;const n=t[1];return e.split(`
`).map(i=>{const r=i.match(/^\s+/);if(r===null)return i;const[s]=r;return s.length>=n.length?i.slice(n.length):i}).join(`
`)}class Z{constructor(e){d(this,"options");d(this,"rules");d(this,"lexer");this.options=e||z}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:q(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],i=ve(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:i}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){const i=q(n,"#");(this.options.pedantic||!i||/ $/.test(i))&&(n=i.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const n=q(t[0].replace(/^ *>[ \t]?/gm,""),`
`),i=this.lexer.state.top;this.lexer.state.top=!0;const r=this.lexer.blockTokens(n);return this.lexer.state.top=i,{type:"blockquote",raw:t[0],tokens:r,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const i=n.length>1,r={type:"list",raw:"",ordered:i,start:i?+n.slice(0,-1):"",loose:!1,items:[]};n=i?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=i?n:"[*+-]");const s=new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);let l="",o="",p=!1;for(;e;){let c=!1;if(!(t=s.exec(e))||this.rules.block.hr.test(e))break;l=t[0],e=e.substring(l.length);let u=t[2].split(`
`,1)[0].replace(/^\t+/,D=>" ".repeat(3*D.length)),h=e.split(`
`,1)[0],f=0;this.options.pedantic?(f=2,o=u.trimStart()):(f=t[2].search(/[^ ]/),f=f>4?1:f,o=u.slice(f),f+=t[1].length);let y=!1;if(!u&&/^ *$/.test(h)&&(l+=h+`
`,e=e.substring(h.length+1),c=!0),!c){const D=new RegExp(`^ {0,${Math.min(3,f-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),V=new RegExp(`^ {0,${Math.min(3,f-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),Y=new RegExp(`^ {0,${Math.min(3,f-1)}}(?:\`\`\`|~~~)`),ee=new RegExp(`^ {0,${Math.min(3,f-1)}}#`);for(;e;){const O=e.split(`
`,1)[0];if(h=O,this.options.pedantic&&(h=h.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),Y.test(h)||ee.test(h)||D.test(h)||V.test(e))break;if(h.search(/[^ ]/)>=f||!h.trim())o+=`
`+h.slice(f);else{if(y||u.search(/[^ ]/)>=4||Y.test(u)||ee.test(u)||V.test(u))break;o+=`
`+h}!y&&!h.trim()&&(y=!0),l+=O+`
`,e=e.substring(O.length+1),u=h.slice(f)}}r.loose||(p?r.loose=!0:/\n *\n *$/.test(l)&&(p=!0));let b=null,$;this.options.gfm&&(b=/^\[[ xX]\] /.exec(o),b&&($=b[0]!=="[ ] ",o=o.replace(/^\[[ xX]\] +/,""))),r.items.push({type:"list_item",raw:l,task:!!b,checked:$,loose:!1,text:o,tokens:[]}),r.raw+=l}r.items[r.items.length-1].raw=l.trimEnd(),r.items[r.items.length-1].text=o.trimEnd(),r.raw=r.raw.trimEnd();for(let c=0;c<r.items.length;c++)if(this.lexer.state.top=!1,r.items[c].tokens=this.lexer.blockTokens(r.items[c].text,[]),!r.loose){const u=r.items[c].tokens.filter(f=>f.type==="space"),h=u.length>0&&u.some(f=>/\n.*\n/.test(f.raw));r.loose=h}if(r.loose)for(let c=0;c<r.items.length;c++)r.items[c].loose=!0;return r}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(/\s+/g," "),i=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:i,title:r}}}table(e){const t=this.rules.block.table.exec(e);if(!t||!/[:|]/.test(t[2]))return;const n=se(t[1]),i=t[2].replace(/^\||\| *$/g,"").split("|"),r=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],s={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===i.length){for(const l of i)/^ *-+: *$/.test(l)?s.align.push("right"):/^ *:-+: *$/.test(l)?s.align.push("center"):/^ *:-+ *$/.test(l)?s.align.push("left"):s.align.push(null);for(const l of n)s.header.push({text:l,tokens:this.lexer.inline(l)});for(const l of r)s.rows.push(se(l,s.header.length).map(o=>({text:o,tokens:this.lexer.inline(o)})));return s}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:x(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const s=q(n.slice(0,-1),"\\");if((n.length-s.length)%2===0)return}else{const s=qe(t[2],"()");if(s>-1){const o=(t[0].indexOf("!")===0?5:4)+t[1].length+s;t[2]=t[2].substring(0,s),t[0]=t[0].substring(0,o).trim(),t[3]=""}}let i=t[2],r="";if(this.options.pedantic){const s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);s&&(i=s[1],r=s[3])}else r=t[3]?t[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(n)?i=i.slice(1):i=i.slice(1,-1)),ie(t,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const i=(n[2]||n[1]).replace(/\s+/g," "),r=t[i.toLowerCase()];if(!r){const s=n[0].charAt(0);return{type:"text",raw:s,text:s}}return ie(n,r,n[0],this.lexer)}}emStrong(e,t,n=""){let i=this.rules.inline.emStrongLDelim.exec(e);if(!i||i[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const s=[...i[0]].length-1;let l,o,p=s,c=0;const u=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,t=t.slice(-1*e.length+s);(i=u.exec(t))!=null;){if(l=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!l)continue;if(o=[...l].length,i[3]||i[4]){p+=o;continue}else if((i[5]||i[6])&&s%3&&!((s+o)%3)){c+=o;continue}if(p-=o,p>0)continue;o=Math.min(o,o+p+c);const h=[...i[0]][0].length,f=e.slice(0,s+i.index+h+o);if(Math.min(s,o)%2){const b=f.slice(1,-1);return{type:"em",raw:f,text:b,tokens:this.lexer.inlineTokens(b)}}const y=f.slice(2,-2);return{type:"strong",raw:f,text:y,tokens:this.lexer.inlineTokens(y)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," ");const i=/[^ ]/.test(n),r=/^ /.test(n)&&/ $/.test(n);return i&&r&&(n=n.substring(1,n.length-1)),n=x(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,i;return t[2]==="@"?(n=x(t[1]),i="mailto:"+n):(n=x(t[1]),i=n),{type:"link",raw:t[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}url(e){var n;let t;if(t=this.rules.inline.url.exec(e)){let i,r;if(t[2]==="@")i=x(t[0]),r="mailto:"+i;else{let s;do s=t[0],t[0]=((n=this.rules.inline._backpedal.exec(t[0]))==null?void 0:n[0])??"";while(s!==t[0]);i=x(t[0]),t[1]==="www."?r="http://"+t[0]:r=t[0]}return{type:"link",raw:t[0],text:i,href:r,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){let n;return this.lexer.state.inRawBlock?n=t[0]:n=x(t[0]),{type:"text",raw:t[0],text:n}}}}const Ze=/^(?: *(?:\n|$))+/,Pe=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,Be=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,A=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Qe=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,ce=/(?:[*+-]|\d{1,9}[.)])/,he=k(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,ce).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),U=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Me=/^[^\n]+/,X=/(?!\s*\])(?:\\.|[^\[\]\\])+/,De=k(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",X).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Oe=k(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,ce).getRegex(),M="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",G=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,je=k("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",G).replace("tag",M).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),pe=k(U).replace("hr",A).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",M).getRegex(),Ne=k(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",pe).getRegex(),W={blockquote:Ne,code:Pe,def:De,fences:Be,heading:Qe,hr:A,html:je,lheading:he,list:Oe,newline:Ze,paragraph:pe,table:R,text:Me},re=k("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",A).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",M).getRegex(),He={...W,table:re,paragraph:k(U).replace("hr",A).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",re).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",M).getRegex()},Fe={...W,html:k(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",G).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:R,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:k(U).replace("hr",A).replace("heading",` *#{1,6} *[^
]`).replace("lheading",he).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},ue=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Ue=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,fe=/^( {2,}|\\)\n(?!\s*$)/,Xe=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,E="\\p{P}\\p{S}",Ge=k(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,E).getRegex(),We=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,Je=k(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,E).getRegex(),Ke=k("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,E).getRegex(),Ve=k("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,E).getRegex(),Ye=k(/\\([punct])/,"gu").replace(/punct/g,E).getRegex(),et=k(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),tt=k(G).replace("(?:-->|$)","-->").getRegex(),nt=k("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",tt).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),P=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,st=k(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",P).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),ge=k(/^!?\[(label)\]\[(ref)\]/).replace("label",P).replace("ref",X).getRegex(),ke=k(/^!?\[(ref)\](?:\[\])?/).replace("ref",X).getRegex(),it=k("reflink|nolink(?!\\()","g").replace("reflink",ge).replace("nolink",ke).getRegex(),J={_backpedal:R,anyPunctuation:Ye,autolink:et,blockSkip:We,br:fe,code:Ue,del:R,emStrongLDelim:Je,emStrongRDelimAst:Ke,emStrongRDelimUnd:Ve,escape:ue,link:st,nolink:ke,punctuation:Ge,reflink:ge,reflinkSearch:it,tag:nt,text:Xe,url:R},rt={...J,link:k(/^!?\[(label)\]\((.*?)\)/).replace("label",P).getRegex(),reflink:k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",P).getRegex()},N={...J,escape:k(ue).replace("])","~|])").getRegex(),url:k(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},lt={...N,br:k(fe).replace("{2,}","*").getRegex(),text:k(N.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},v={normal:W,gfm:He,pedantic:Fe},_={normal:J,gfm:N,breaks:lt,pedantic:rt};class m{constructor(e){d(this,"tokens");d(this,"options");d(this,"state");d(this,"tokenizer");d(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||z,this.options.tokenizer=this.options.tokenizer||new Z,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:v.normal,inline:_.normal};this.options.pedantic?(t.block=v.pedantic,t.inline=_.pedantic):this.options.gfm&&(t.block=v.gfm,this.options.breaks?t.inline=_.breaks:t.inline=_.gfm),this.tokenizer.rules=t}static get rules(){return{block:v,inline:_}}static lex(e,t){return new m(t).lex(e)}static lexInline(e,t){return new m(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const n=this.inlineQueue[t];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(l,o,p)=>o+"    ".repeat(p.length));let n,i,r,s;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(l=>(n=l.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(r=e,this.options.extensions&&this.options.extensions.startBlock){let l=1/0;const o=e.slice(1);let p;this.options.extensions.startBlock.forEach(c=>{p=c.call({lexer:this},o),typeof p=="number"&&p>=0&&(l=Math.min(l,p))}),l<1/0&&l>=0&&(r=e.substring(0,l+1))}if(this.state.top&&(n=this.tokenizer.paragraph(r))){i=t[t.length-1],s&&i.type==="paragraph"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n),s=r.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&i.type==="text"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n);continue}if(e){const l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,i,r,s=e,l,o,p;if(this.tokens.links){const c=Object.keys(this.tokens.links);if(c.length>0)for(;(l=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)c.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(l=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(l=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,l.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(o||(p=""),o=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(c=>(n=c.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,s,p)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e))){e=e.substring(n.raw.length),t.push(n);continue}if(r=e,this.options.extensions&&this.options.extensions.startInline){let c=1/0;const u=e.slice(1);let h;this.options.extensions.startInline.forEach(f=>{h=f.call({lexer:this},u),typeof h=="number"&&h>=0&&(c=Math.min(c,h))}),c<1/0&&c>=0&&(r=e.substring(0,c+1))}if(n=this.tokenizer.inlineText(r)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(p=n.raw.slice(-1)),o=!0,i=t[t.length-1],i&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return t}}class B{constructor(e){d(this,"options");this.options=e||z}code(e,t,n){var r;const i=(r=(t||"").match(/^\S*/))==null?void 0:r[0];return e=e.replace(/\n$/,"")+`
`,i?'<pre><code class="language-'+x(i)+'">'+(n?e:x(e,!0))+`</code></pre>
`:"<pre><code>"+(n?e:x(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,t){return e}heading(e,t,n){return`<h${t}>${e}</h${t}>
`}hr(){return`<hr>
`}list(e,t,n){const i=t?"ol":"ul",r=t&&n!==1?' start="'+n+'"':"";return"<"+i+r+`>
`+e+"</"+i+`>
`}listitem(e,t,n){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){const n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){const i=ne(e);if(i===null)return n;e=i;let r='<a href="'+e+'"';return t&&(r+=' title="'+t+'"'),r+=">"+n+"</a>",r}image(e,t,n){const i=ne(e);if(i===null)return n;e=i;let r=`<img src="${e}" alt="${n}"`;return t&&(r+=` title="${t}"`),r+=">",r}text(e){return e}}class K{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class w{constructor(e){d(this,"options");d(this,"renderer");d(this,"textRenderer");this.options=e||z,this.options.renderer=this.options.renderer||new B,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new K}static parse(e,t){return new w(t).parse(e)}static parseInline(e,t){return new w(t).parseInline(e)}parse(e,t=!0){let n="";for(let i=0;i<e.length;i++){const r=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]){const s=r,l=this.options.extensions.renderers[s.type].call({parser:this},s);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(s.type)){n+=l||"";continue}}switch(r.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{const s=r;n+=this.renderer.heading(this.parseInline(s.tokens),s.depth,Ce(this.parseInline(s.tokens,this.textRenderer)));continue}case"code":{const s=r;n+=this.renderer.code(s.text,s.lang,!!s.escaped);continue}case"table":{const s=r;let l="",o="";for(let c=0;c<s.header.length;c++)o+=this.renderer.tablecell(this.parseInline(s.header[c].tokens),{header:!0,align:s.align[c]});l+=this.renderer.tablerow(o);let p="";for(let c=0;c<s.rows.length;c++){const u=s.rows[c];o="";for(let h=0;h<u.length;h++)o+=this.renderer.tablecell(this.parseInline(u[h].tokens),{header:!1,align:s.align[h]});p+=this.renderer.tablerow(o)}n+=this.renderer.table(l,p);continue}case"blockquote":{const s=r,l=this.parse(s.tokens);n+=this.renderer.blockquote(l);continue}case"list":{const s=r,l=s.ordered,o=s.start,p=s.loose;let c="";for(let u=0;u<s.items.length;u++){const h=s.items[u],f=h.checked,y=h.task;let b="";if(h.task){const $=this.renderer.checkbox(!!f);p?h.tokens.length>0&&h.tokens[0].type==="paragraph"?(h.tokens[0].text=$+" "+h.tokens[0].text,h.tokens[0].tokens&&h.tokens[0].tokens.length>0&&h.tokens[0].tokens[0].type==="text"&&(h.tokens[0].tokens[0].text=$+" "+h.tokens[0].tokens[0].text)):h.tokens.unshift({type:"text",text:$+" "}):b+=$+" "}b+=this.parse(h.tokens,p),c+=this.renderer.listitem(b,y,!!f)}n+=this.renderer.list(c,l,o);continue}case"html":{const s=r;n+=this.renderer.html(s.text,s.block);continue}case"paragraph":{const s=r;n+=this.renderer.paragraph(this.parseInline(s.tokens));continue}case"text":{let s=r,l=s.tokens?this.parseInline(s.tokens):s.text;for(;i+1<e.length&&e[i+1].type==="text";)s=e[++i],l+=`
`+(s.tokens?this.parseInline(s.tokens):s.text);n+=t?this.renderer.paragraph(l):l;continue}default:{const s='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return n}parseInline(e,t){t=t||this.renderer;let n="";for(let i=0;i<e.length;i++){const r=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]){const s=this.options.extensions.renderers[r.type].call({parser:this},r);if(s!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)){n+=s||"";continue}}switch(r.type){case"escape":{const s=r;n+=t.text(s.text);break}case"html":{const s=r;n+=t.html(s.text);break}case"link":{const s=r;n+=t.link(s.href,s.title,this.parseInline(s.tokens,t));break}case"image":{const s=r;n+=t.image(s.href,s.title,s.text);break}case"strong":{const s=r;n+=t.strong(this.parseInline(s.tokens,t));break}case"em":{const s=r;n+=t.em(this.parseInline(s.tokens,t));break}case"codespan":{const s=r;n+=t.codespan(s.text);break}case"br":{n+=t.br();break}case"del":{const s=r;n+=t.del(this.parseInline(s.tokens,t));break}case"text":{const s=r;n+=t.text(s.text);break}default:{const s='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return n}}class S{constructor(e){d(this,"options");this.options=e||z}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}}d(S,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var I,H,Q,de;class ot{constructor(...e){j(this,I);j(this,Q);d(this,"defaults",F());d(this,"options",this.setOptions);d(this,"parse",C(this,I,H).call(this,m.lex,w.parse));d(this,"parseInline",C(this,I,H).call(this,m.lexInline,w.parseInline));d(this,"Parser",w);d(this,"Renderer",B);d(this,"TextRenderer",K);d(this,"Lexer",m);d(this,"Tokenizer",Z);d(this,"Hooks",S);this.use(...e)}walkTokens(e,t){var i,r;let n=[];for(const s of e)switch(n=n.concat(t.call(this,s)),s.type){case"table":{const l=s;for(const o of l.header)n=n.concat(this.walkTokens(o.tokens,t));for(const o of l.rows)for(const p of o)n=n.concat(this.walkTokens(p.tokens,t));break}case"list":{const l=s;n=n.concat(this.walkTokens(l.items,t));break}default:{const l=s;(r=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&r[l.type]?this.defaults.extensions.childTokens[l.type].forEach(o=>{const p=l[o].flat(1/0);n=n.concat(this.walkTokens(p,t))}):l.tokens&&(n=n.concat(this.walkTokens(l.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const i={...n};if(i.async=this.defaults.async||i.async||!1,n.extensions&&(n.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){const s=t.renderers[r.name];s?t.renderers[r.name]=function(...l){let o=r.renderer.apply(this,l);return o===!1&&(o=s.apply(this,l)),o}:t.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const s=t[r.level];s?s.unshift(r.tokenizer):t[r.level]=[r.tokenizer],r.start&&(r.level==="block"?t.startBlock?t.startBlock.push(r.start):t.startBlock=[r.start]:r.level==="inline"&&(t.startInline?t.startInline.push(r.start):t.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(t.childTokens[r.name]=r.childTokens)}),i.extensions=t),n.renderer){const r=this.defaults.renderer||new B(this.defaults);for(const s in n.renderer){if(!(s in r))throw new Error(`renderer '${s}' does not exist`);if(s==="options")continue;const l=s,o=n.renderer[l],p=r[l];r[l]=(...c)=>{let u=o.apply(r,c);return u===!1&&(u=p.apply(r,c)),u||""}}i.renderer=r}if(n.tokenizer){const r=this.defaults.tokenizer||new Z(this.defaults);for(const s in n.tokenizer){if(!(s in r))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;const l=s,o=n.tokenizer[l],p=r[l];r[l]=(...c)=>{let u=o.apply(r,c);return u===!1&&(u=p.apply(r,c)),u}}i.tokenizer=r}if(n.hooks){const r=this.defaults.hooks||new S;for(const s in n.hooks){if(!(s in r))throw new Error(`hook '${s}' does not exist`);if(s==="options")continue;const l=s,o=n.hooks[l],p=r[l];S.passThroughHooks.has(s)?r[l]=c=>{if(this.defaults.async)return Promise.resolve(o.call(r,c)).then(h=>p.call(r,h));const u=o.call(r,c);return p.call(r,u)}:r[l]=(...c)=>{let u=o.apply(r,c);return u===!1&&(u=p.apply(r,c)),u}}i.hooks=r}if(n.walkTokens){const r=this.defaults.walkTokens,s=n.walkTokens;i.walkTokens=function(l){let o=[];return o.push(s.call(this,l)),r&&(o=o.concat(r.call(this,l))),o}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return m.lex(e,t??this.defaults)}parser(e,t){return w.parse(e,t??this.defaults)}}I=new WeakSet,H=function(e,t){return(n,i)=>{const r={...i},s={...this.defaults,...r};this.defaults.async===!0&&r.async===!1&&(s.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),s.async=!0);const l=C(this,Q,de).call(this,!!s.silent,!!s.async);if(typeof n>"u"||n===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(s.hooks&&(s.hooks.options=s),s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(n):n).then(o=>e(o,s)).then(o=>s.hooks?s.hooks.processAllTokens(o):o).then(o=>s.walkTokens?Promise.all(this.walkTokens(o,s.walkTokens)).then(()=>o):o).then(o=>t(o,s)).then(o=>s.hooks?s.hooks.postprocess(o):o).catch(l);try{s.hooks&&(n=s.hooks.preprocess(n));let o=e(n,s);s.hooks&&(o=s.hooks.processAllTokens(o)),s.walkTokens&&this.walkTokens(o,s.walkTokens);let p=t(o,s);return s.hooks&&(p=s.hooks.postprocess(p)),p}catch(o){return l(o)}}},Q=new WeakSet,de=function(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const i="<p>An error occurred:</p><pre>"+x(n.message+"",!0)+"</pre>";return t?Promise.resolve(i):i}if(t)return Promise.reject(n);throw n}};const T=new ot;function g(a,e){return T.parse(a,e)}g.options=g.setOptions=function(a){return T.setOptions(a),g.defaults=T.defaults,le(g.defaults),g};g.getDefaults=F;g.defaults=z;g.use=function(...a){return T.use(...a),g.defaults=T.defaults,le(g.defaults),g};g.walkTokens=function(a,e){return T.walkTokens(a,e)};g.parseInline=T.parseInline;g.Parser=w;g.parser=w.parse;g.Renderer=B;g.TextRenderer=K;g.Lexer=m;g.lexer=m.lex;g.Tokenizer=Z;g.Hooks=S;g.parse=g;g.options;g.setOptions;g.use;g.walkTokens;g.parseInline;w.parse;m.lex;export{pt as h,g as m,ut as u};