(function(D,O){typeof exports=="object"&&typeof module<"u"?O(exports):typeof define=="function"&&define.amd?define(["exports"],O):(D=typeof globalThis<"u"?globalThis:D||self,O(D.BrazilianDates={}))})(this,function(D){"use strict";function O(e){return e?e instanceof Date?e=e.getFullYear():typeof e=="string"&&(e=parseInt(e,10)):e=new Date().getFullYear(),e}function L(e,t){t=t||2;const a="0000"+e;return a.substr(a.length-t,t)}class ie{constructor(t,a,r){this.year=t,this.month=a,this.day=r}toString(){return[L(this.year,4),L(this.month),L(this.day)].join("-")}}function oe(e,t,a){e=O(e);const r=Math.floor(e/100);let n=15+Math.floor((3*r+3)/4)-Math.floor((8*r+13)/25),i=2-Math.floor((3*r+3)/4);t&&(n=15,i=0);const o=e%19,s=(19*o+n)%30,l=Math.floor((s+o/11)/29),u=21+s-l,v=7-Math.floor(e+e/4+i)%7,c=7-(u-v)%7;let f=u+c;a&&(f=f+Math.floor(e/100)-Math.floor(e/400)-2);const h=[0,31,28,31,30,31,30,31,31];let g=f,b;for(b=3;b<8&&!(g<=h[b]);b++)g-=h[b];return new ie(e,b,g)}function de(e){return oe(e)}const se=de;function S(e){if(e===null||e===!0||e===!1)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function U(e){"@babel/helpers - typeof";return U=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(e)}function m(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function w(e){m(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||U(e)==="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function q(e,t){m(2,arguments);var a=w(e),r=S(t);return isNaN(r)?new Date(NaN):(r&&a.setDate(a.getDate()+r),a)}function X(e){m(1,arguments);var t=w(e);return t.setHours(0,0,0,0),t}function j(e,t){m(2,arguments);var a=X(e),r=X(t);return a.getTime()===r.getTime()}const ue=e=>{const t=se(e);return new Date(t.year,t.month-1,t.day)},le=e=>q(e,60),ce=e=>q(e,-47),me=e=>q(e,-2),fe=e=>{const t=ue(e),a=le(t),r=ce(t),n=me(t);return[{date:t,description:"Páscoa ou Domingo da Ressurreição é uma festividade religiosa e um feriado que celebra a ressurreição de Jesus ocorrida três dias depois da sua crucificação no Calvário, conforme o relato do Novo Testamento."},{date:a,description:"Corpus Christi (expressão latina que significa Corpo de Cristo), generalizada em Portugal como Corpo de Deus é um evento baseado em tradições católicas realizado na quinta-feira seguinte ao domingo da Santíssima Trindade, que, por sua vez, acontece no domingo seguinte ao de Pentecostes."},{date:r,description:"Carnaval é um festival do cristianismo ocidental que ocorre antes da estação litúrgica da Quaresma. Os principais eventos ocorrem tipicamente durante fevereiro ou início de março, durante o período historicamente conhecido como Tempo da Septuagésima (ou pré-quaresma)."},{date:n,description:"Sexta-feira Santa ou Sexta-Feira da Paixão é uma data religiosa cristã que relembra a crucificação de Jesus Cristo e sua morte no Calvário. O feriado é observado sempre na sexta-feira que antecede o Domingo de Páscoa."},{date:new Date(`${String(e)}-01-01`),description:"O Dia da Fraternidade Universal ou Dia da Confraternização Universal é um feriado nacional no Brasil, comemorado no dia 1 de janeiro. Foi instituído por lei em 1935, por Getúlio Vargas."},{date:new Date(`${String(e)}-04-21`),description:"Joaquim José da Silva Xavier, o Tiradentes, foi um dentista, tropeiro, minerador, comerciante, militar e ativista político que atuou no Brasil. O dia de sua execução, 21 de abril, é feriado nacional."},{date:new Date(`${String(e)}-05-01`),description:"O Dia do Trabalhador, Dia do Trabalho ou Dia Internacional dos Trabalhadores é celebrado anualmente no dia 1º de maio em numerosos países do mundo, sendo feriado no Brasil, em Portugal, Angola, Moçambique e outros países."},{date:new Date(`${String(e)}-09-07`),description:"Independência do Brasil é um processo que se estende de 1821 a 1825 e coloca em violenta oposição o Reino do Brasil e o Reino de Portugal, dentro do Reino Unido de Portugal, Brasil e Algarves."},{date:new Date(`${String(e)}-10-12`),description:"Nossa Senhora da Conceição Aparecida, popularmente chamada de Nossa Senhora Aparecida, é a padroeira do Brasil. Sua festa litúrgica é celebrada em 12 de outubro, um feriado nacional no Brasil desde 1980."},{date:new Date(`${String(e)}-11-02`),description:"Dia dos Fiéis Defuntos ou Dia de Finados (conhecido ainda como Dia dos Mortos no México) é celebrado pela Igreja Católica no dia 2 de novembro."},{date:new Date(`${String(e)}-11-15`),description:"A Proclamação da República Brasileira foi um levante político-militar ocorrido em 15 de novembro de 1889 que instaurou a forma republicana federativa presidencialista do governo no Brasil, derrubando a monarquia constitucional parlamentarista do Império do Brasil e, por conseguinte, pondo fim à soberania do imperador D. Pedro II. Foi, então, proclamada a República do Brasil."},{date:new Date(`${String(e)}-12-25`),description:"Natal ou Dia de Natal é um feriado e festival religioso cristão comemorado anualmente em 25 de dezembro. A data é o centro das festas de fim de ano e da temporada de férias, sendo, no cristianismo, o marco inicial do Ciclo do Natal, que dura doze dias."}]},he=e=>fe(e.getFullYear()).some(a=>j(a.date,e)),ve=(e,t)=>{const a=[{state:"SP",date:new Date(`${String(e)}-07-09`),description:"Revolução Constitucionalista de 1932, também conhecida como Revolução de 1932 ou Guerra Paulista, foi o movimento armado ocorrido nos estados de São Paulo, Mato Grosso do Sul e Rio Grande do Sul, entre julho e outubro de 1932, que tinha por objetivo derrubar o governo provisório de Getúlio Vargas e convocar uma Assembleia Nacional Constituinte."},{state:"SE",date:new Date(`${String(e)}-07-08`),description:"Dia da Emancipação do Estado de Sergipe"},{state:"RR",date:new Date(`${String(e)}-10-05`),description:"Feriado no estado de Roraima — aniversário da elevação a estado."},{state:"RS",date:new Date(`${String(e)}-09-20`),description:"Em 1835 foi desencadeada a Revolução Farroupilha, que manifestava o descontentamento da Província de São Pedro do Rio Grande, a mais meridional do Império, com o governo regencial do Império do Brasil."},{state:"RN",date:new Date(`${String(e)}-10-03`),description:"Feriado dos Mártires de Cunhaú e Uruaçu, Rio Grande do Norte"},{state:"PI",date:new Date(`${String(e)}-10-19`),description:"Dia do Piauí que é Piauí é uma das 27 unidades federativas do Brasil. Localiza-se no noroeste da Região Nordeste."},{state:"PR",date:new Date(`${String(e)}-12-19`),description:"A emancipação política do Paraná foi um acontecimento pelo qual o Paraná desmembrou-se da Província de São Paulo, transformando-se na mais nova província do Brasil Império, em 19 de dezembro de 1853. Foi marcante para a história do Paraná a sua emancipação política, que ocorreu em 1853, quando se desmembrou da Província de São Paulo."},{state:"PA",date:new Date(`${String(e)}-08-15`),description:"Adesão do Pará à independência do Brasil (data magna) - Lei estadual nº 5.999/1996"},{state:"MG",date:new Date(`${String(e)}-04-21`),description:"Data magna do estado - Art. 256 da constituição estadual[43]; coincide com o feriado nacional de Tiradentes"},{state:"MS",date:new Date(`${String(e)}-10-11`),description:"Criação do estado - Lei estadual nº 10/1979"},{state:"MT",date:new Date(`${String(e)}-11-20`),description:"Dia da Consciência Negra - Lei estadual nº 7.879/2002"},{state:"MA",date:new Date(`${String(e)}-07-28`),description:"Adesão do Maranhão à independência do Brasil - Lei estadual nº 2.457/1964"},{state:"BA",date:new Date(`${String(e)}-07-02`),description:"Independência da Bahia (Data magna do estado) - Art. 6º, § 3º da Constituição estadual"},{state:"TO",date:new Date(`${String(e)}-10-05`),description:"Criação do estado - Lei estadual nº 98/1989"},{state:"TO",date:new Date(`${String(e)}-03-18`),description:"Autonomia do Estado (criação da Comarca do Norte) - Lei estadual nº 960/1998"},{state:"TO",date:new Date(`${String(e)}-09-08`),description:"Padroeira do Estado (Nossa Senhora da Natividade) - Lei estadual nº 627/1993"},{state:"RO",date:new Date(`${String(e)}-01-04`),description:"Criação do estado - Lei estadual nº 2291/2010"},{state:"RO",date:new Date(`${String(e)}-06-18`),description:"Dia do evangélico - Lei estadual nº 1.026/2001"},{state:"PE",date:new Date(`${String(e)}-03-06`),description:"Revolução Pernambucana de 1817 - Lei estadual nº 13.835/2009"},{state:"PE",date:new Date(`${String(e)}-06-24`),description:"Festa de São João (Festa Junina) - Feriado Estadual"},{state:"PE",date:new Date(`${String(e)}-07-16`),description:"Dia de Nossa Senhora do Carmo (Padroeira da Cidade do Recife) - Feriado religioso"},{state:"PE",date:new Date(`${String(e)}-12-08`),description:"Dia de Nossa Senhora da Conceição (santa de grande devoção pela população da cidade do Recife) - Feriado religioso"},{state:"PB",date:new Date(`${String(e)}-07-26`),description:"Homenagem à memória do ex-presidente João Pessoa - Lei Estadual 3.489/67, Art. 2º"},{state:"PB",date:new Date(`${String(e)}-08-05`),description:"Fundação do Estado em 1585 e dia da sua padroeira, Nossa Senhora das Neves - Lei Estadual 3.489/1967"},{state:"AL",date:new Date(`${String(e)}-06-24`),description:"São João - Lei estadual nº 5.508/1993"},{state:"AL",date:new Date(`${String(e)}-06-29`),description:"São Pedro - Lei estadual nº 5.509/1993"},{state:"AL",date:new Date(`${String(e)}-09-16`),description:"Emancipação política"},{state:"AL",date:new Date(`${String(e)}-11-20`),description:"Morte de Zumbi dos Palmares - Lei estadual nº 5.724/1995"},{state:"CE",date:new Date(`${String(e)}-03-19`),description:"Dia de São José (Padroeiro do Ceará) - Lei Federal nº 9.093/1995"},{state:"CE",date:new Date(`${String(e)}-03-25`),description:"Data magna do estado (data da abolição da escravidão no Ceará) - Art. 18, parágrafo único da constituição estadual"},{state:"CE",date:new Date(`${String(e)}-08-15`),description:"Dia de Nossa Senhora da Assunção (Padroeira de Fortaleza) - Lei Federal nº 9.093/1995"},{state:"DF",date:new Date(`${String(e)}-04-21`),description:"Fundação de Brasília - Coincide com o feriado nacional de Tiradentes"},{state:"DF",date:new Date(`${String(e)}-11-30`),description:"Dia do evangélico - Lei distrital nº 963/1995"},{state:"AM",date:new Date(`${String(e)}-09-05`),description:"Elevação do Amazonas à categoria de província - Lei estadual nº 25/1977"},{state:"AM",date:new Date(`${String(e)}-11-20`),description:"Dia da Consciência Negra - Lei estadual nº 84/2010"},{state:"AM",date:new Date(`${String(e)}-12-08`),description:"Nossa Senhora da Conceição"},{state:"AP",date:new Date(`${String(e)}-03-19`),description:"Dia de São José, santo padroeiro do Estado do Amapá - Lei estadual nº 667, de 16 de abril de 2002"},{state:"AP",date:new Date(`${String(e)}-09-13`),description:"Criação do Território Federal (Data Magna do estado) - Art. 335 da Constituição estadual"},{state:"SC",date:new Date(`${String(e)}-08-11`),description:"Dia de Santa Catarina (criação da capitania, separando-se de São Paulo)"},{state:"SC",date:new Date(`${String(e)}-11-25`),description:"Dia de Santa Catarina de Alexandria"},{state:"AC",date:new Date(`${String(e)}-01-23`),description:"Dia do evangélico"},{state:"AC",date:new Date(`${String(e)}-03-08`),description:"Alusivo ao Dia Internacional da Mulher"},{state:"AC",date:new Date(`${String(e)}-06-15`),description:"Aniversário do estado"},{state:"AC",date:new Date(`${String(e)}-09-05`),description:"Dia da Amazônia"},{state:"AC",date:new Date(`${String(e)}-11-17`),description:"Assinatura do Tratado de Petrópolis"}];return t?a.filter(r=>r.state===t.toUpperCase()):[]},ge=(e,t)=>ve(e.getFullYear(),t).some(r=>j(r.date,e));function J(e){return m(1,arguments),e instanceof Date||U(e)==="object"&&Object.prototype.toString.call(e)==="[object Date]"}function we(e){m(1,arguments);var t=w(e),a=t.getDay();return a===0||a===6}function pe(e){if(m(1,arguments),!J(e)&&typeof e!="number")return!1;var t=w(e);return!isNaN(Number(t))}function be(e,t){m(2,arguments);var a=w(e).getTime(),r=S(t);return new Date(a+r)}function De(e,t){m(2,arguments);var a=S(t);return be(e,-a)}var Se=864e5;function Ce(e){m(1,arguments);var t=w(e),a=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),n=a-r;return Math.floor(n/Se)+1}function N(e){m(1,arguments);var t=1,a=w(e),r=a.getUTCDay(),n=(r<t?7:0)+r-t;return a.setUTCDate(a.getUTCDate()-n),a.setUTCHours(0,0,0,0),a}function V(e){m(1,arguments);var t=w(e),a=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(a+1,0,4),r.setUTCHours(0,0,0,0);var n=N(r),i=new Date(0);i.setUTCFullYear(a,0,4),i.setUTCHours(0,0,0,0);var o=N(i);return t.getTime()>=n.getTime()?a+1:t.getTime()>=o.getTime()?a:a-1}function Te(e){m(1,arguments);var t=V(e),a=new Date(0);a.setUTCFullYear(t,0,4),a.setUTCHours(0,0,0,0);var r=N(a);return r}var ye=6048e5;function Pe(e){m(1,arguments);var t=w(e),a=N(t).getTime()-Te(t).getTime();return Math.round(a/ye)+1}var Me={};function F(){return Me}function Y(e,t){var a,r,n,i,o,s,l,u;m(1,arguments);var v=F(),c=S((a=(r=(n=(i=t==null?void 0:t.weekStartsOn)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.weekStartsOn)!==null&&n!==void 0?n:v.weekStartsOn)!==null&&r!==void 0?r:(l=v.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&a!==void 0?a:0);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=w(e),h=f.getUTCDay(),g=(h<c?7:0)+h-c;return f.setUTCDate(f.getUTCDate()-g),f.setUTCHours(0,0,0,0),f}function K(e,t){var a,r,n,i,o,s,l,u;m(1,arguments);var v=w(e),c=v.getUTCFullYear(),f=F(),h=S((a=(r=(n=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&n!==void 0?n:f.firstWeekContainsDate)!==null&&r!==void 0?r:(l=f.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&a!==void 0?a:1);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var g=new Date(0);g.setUTCFullYear(c+1,0,h),g.setUTCHours(0,0,0,0);var b=Y(g,t),P=new Date(0);P.setUTCFullYear(c,0,h),P.setUTCHours(0,0,0,0);var x=Y(P,t);return v.getTime()>=b.getTime()?c+1:v.getTime()>=x.getTime()?c:c-1}function Oe(e,t){var a,r,n,i,o,s,l,u;m(1,arguments);var v=F(),c=S((a=(r=(n=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&n!==void 0?n:v.firstWeekContainsDate)!==null&&r!==void 0?r:(l=v.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&a!==void 0?a:1),f=K(e,t),h=new Date(0);h.setUTCFullYear(f,0,c),h.setUTCHours(0,0,0,0);var g=Y(h,t);return g}var $e=6048e5;function ke(e,t){m(1,arguments);var a=w(e),r=Y(a,t).getTime()-Oe(a,t).getTime();return Math.round(r/$e)+1}function d(e,t){for(var a=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return a+r}var xe={y:function(t,a){var r=t.getUTCFullYear(),n=r>0?r:1-r;return d(a==="yy"?n%100:n,a.length)},M:function(t,a){var r=t.getUTCMonth();return a==="M"?String(r+1):d(r+1,2)},d:function(t,a){return d(t.getUTCDate(),a.length)},a:function(t,a){var r=t.getUTCHours()/12>=1?"pm":"am";switch(a){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(t,a){return d(t.getUTCHours()%12||12,a.length)},H:function(t,a){return d(t.getUTCHours(),a.length)},m:function(t,a){return d(t.getUTCMinutes(),a.length)},s:function(t,a){return d(t.getUTCSeconds(),a.length)},S:function(t,a){var r=a.length,n=t.getUTCMilliseconds(),i=Math.floor(n*Math.pow(10,r-3));return d(i,a.length)}};const C=xe;var M={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Ee={G:function(t,a,r){var n=t.getUTCFullYear()>0?1:0;switch(a){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"});case"GGGGG":return r.era(n,{width:"narrow"});case"GGGG":default:return r.era(n,{width:"wide"})}},y:function(t,a,r){if(a==="yo"){var n=t.getUTCFullYear(),i=n>0?n:1-n;return r.ordinalNumber(i,{unit:"year"})}return C.y(t,a)},Y:function(t,a,r,n){var i=K(t,n),o=i>0?i:1-i;if(a==="YY"){var s=o%100;return d(s,2)}return a==="Yo"?r.ordinalNumber(o,{unit:"year"}):d(o,a.length)},R:function(t,a){var r=V(t);return d(r,a.length)},u:function(t,a){var r=t.getUTCFullYear();return d(r,a.length)},Q:function(t,a,r){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(a){case"Q":return String(n);case"QQ":return d(n,2);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})}},q:function(t,a,r){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(a){case"q":return String(n);case"qq":return d(n,2);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})}},M:function(t,a,r){var n=t.getUTCMonth();switch(a){case"M":case"MM":return C.M(t,a);case"Mo":return r.ordinalNumber(n+1,{unit:"month"});case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})}},L:function(t,a,r){var n=t.getUTCMonth();switch(a){case"L":return String(n+1);case"LL":return d(n+1,2);case"Lo":return r.ordinalNumber(n+1,{unit:"month"});case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})}},w:function(t,a,r,n){var i=ke(t,n);return a==="wo"?r.ordinalNumber(i,{unit:"week"}):d(i,a.length)},I:function(t,a,r){var n=Pe(t);return a==="Io"?r.ordinalNumber(n,{unit:"week"}):d(n,a.length)},d:function(t,a,r){return a==="do"?r.ordinalNumber(t.getUTCDate(),{unit:"date"}):C.d(t,a)},D:function(t,a,r){var n=Ce(t);return a==="Do"?r.ordinalNumber(n,{unit:"dayOfYear"}):d(n,a.length)},E:function(t,a,r){var n=t.getUTCDay();switch(a){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"});case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})}},e:function(t,a,r,n){var i=t.getUTCDay(),o=(i-n.weekStartsOn+8)%7||7;switch(a){case"e":return String(o);case"ee":return d(o,2);case"eo":return r.ordinalNumber(o,{unit:"day"});case"eee":return r.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(i,{width:"short",context:"formatting"});case"eeee":default:return r.day(i,{width:"wide",context:"formatting"})}},c:function(t,a,r,n){var i=t.getUTCDay(),o=(i-n.weekStartsOn+8)%7||7;switch(a){case"c":return String(o);case"cc":return d(o,a.length);case"co":return r.ordinalNumber(o,{unit:"day"});case"ccc":return r.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(i,{width:"narrow",context:"standalone"});case"cccccc":return r.day(i,{width:"short",context:"standalone"});case"cccc":default:return r.day(i,{width:"wide",context:"standalone"})}},i:function(t,a,r){var n=t.getUTCDay(),i=n===0?7:n;switch(a){case"i":return String(i);case"ii":return d(i,a.length);case"io":return r.ordinalNumber(i,{unit:"day"});case"iii":return r.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(n,{width:"short",context:"formatting"});case"iiii":default:return r.day(n,{width:"wide",context:"formatting"})}},a:function(t,a,r){var n=t.getUTCHours(),i=n/12>=1?"pm":"am";switch(a){case"a":case"aa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,a,r){var n=t.getUTCHours(),i;switch(n===12?i=M.noon:n===0?i=M.midnight:i=n/12>=1?"pm":"am",a){case"b":case"bb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,a,r){var n=t.getUTCHours(),i;switch(n>=17?i=M.evening:n>=12?i=M.afternoon:n>=4?i=M.morning:i=M.night,a){case"B":case"BB":case"BBB":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,a,r){if(a==="ho"){var n=t.getUTCHours()%12;return n===0&&(n=12),r.ordinalNumber(n,{unit:"hour"})}return C.h(t,a)},H:function(t,a,r){return a==="Ho"?r.ordinalNumber(t.getUTCHours(),{unit:"hour"}):C.H(t,a)},K:function(t,a,r){var n=t.getUTCHours()%12;return a==="Ko"?r.ordinalNumber(n,{unit:"hour"}):d(n,a.length)},k:function(t,a,r){var n=t.getUTCHours();return n===0&&(n=24),a==="ko"?r.ordinalNumber(n,{unit:"hour"}):d(n,a.length)},m:function(t,a,r){return a==="mo"?r.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):C.m(t,a)},s:function(t,a,r){return a==="so"?r.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):C.s(t,a)},S:function(t,a){return C.S(t,a)},X:function(t,a,r,n){var i=n._originalDate||t,o=i.getTimezoneOffset();if(o===0)return"Z";switch(a){case"X":return ee(o);case"XXXX":case"XX":return y(o);case"XXXXX":case"XXX":default:return y(o,":")}},x:function(t,a,r,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(a){case"x":return ee(o);case"xxxx":case"xx":return y(o);case"xxxxx":case"xxx":default:return y(o,":")}},O:function(t,a,r,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(a){case"O":case"OO":case"OOO":return"GMT"+Z(o,":");case"OOOO":default:return"GMT"+y(o,":")}},z:function(t,a,r,n){var i=n._originalDate||t,o=i.getTimezoneOffset();switch(a){case"z":case"zz":case"zzz":return"GMT"+Z(o,":");case"zzzz":default:return"GMT"+y(o,":")}},t:function(t,a,r,n){var i=n._originalDate||t,o=Math.floor(i.getTime()/1e3);return d(o,a.length)},T:function(t,a,r,n){var i=n._originalDate||t,o=i.getTime();return d(o,a.length)}};function Z(e,t){var a=e>0?"-":"+",r=Math.abs(e),n=Math.floor(r/60),i=r%60;if(i===0)return a+String(n);var o=t||"";return a+String(n)+o+d(i,2)}function ee(e,t){if(e%60===0){var a=e>0?"-":"+";return a+d(Math.abs(e)/60,2)}return y(e,t)}function y(e,t){var a=t||"",r=e>0?"-":"+",n=Math.abs(e),i=d(Math.floor(n/60),2),o=d(n%60,2);return r+i+a+o}const We=Ee;var te=function(t,a){switch(t){case"P":return a.date({width:"short"});case"PP":return a.date({width:"medium"});case"PPP":return a.date({width:"long"});case"PPPP":default:return a.date({width:"full"})}},ae=function(t,a){switch(t){case"p":return a.time({width:"short"});case"pp":return a.time({width:"medium"});case"ppp":return a.time({width:"long"});case"pppp":default:return a.time({width:"full"})}},Ue=function(t,a){var r=t.match(/(P+)(p+)?/)||[],n=r[1],i=r[2];if(!i)return te(t,a);var o;switch(n){case"P":o=a.dateTime({width:"short"});break;case"PP":o=a.dateTime({width:"medium"});break;case"PPP":o=a.dateTime({width:"long"});break;case"PPPP":default:o=a.dateTime({width:"full"});break}return o.replace("{{date}}",te(n,a)).replace("{{time}}",ae(i,a))},Ne={p:ae,P:Ue};const Fe=Ne;function Ye(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var _e=["D","DD"],Ae=["YY","YYYY"];function Le(e){return _e.indexOf(e)!==-1}function qe(e){return Ae.indexOf(e)!==-1}function re(e,t,a){if(e==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(a,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(a,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(a,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(a,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Be={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Re=function(t,a,r){var n,i=Be[t];return typeof i=="string"?n=i:a===1?n=i.one:n=i.other.replace("{{count}}",a.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+n:n+" ago":n};const He=Re;function B(e){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth,r=e.formats[a]||e.formats[e.defaultWidth];return r}}var Ie={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Ge={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ze={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Qe={date:B({formats:Ie,defaultWidth:"full"}),time:B({formats:Ge,defaultWidth:"full"}),dateTime:B({formats:ze,defaultWidth:"full"})};const Xe=Qe;var je={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Je=function(t,a,r,n){return je[t]};const Ve=Je;function $(e){return function(t,a){var r=a!=null&&a.context?String(a.context):"standalone",n;if(r==="formatting"&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=a!=null&&a.width?String(a.width):i;n=e.formattingValues[o]||e.formattingValues[i]}else{var s=e.defaultWidth,l=a!=null&&a.width?String(a.width):e.defaultWidth;n=e.values[l]||e.values[s]}var u=e.argumentCallback?e.argumentCallback(t):t;return n[u]}}var Ke={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Ze={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},et={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},tt={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},at={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},rt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},nt=function(t,a){var r=Number(t),n=r%100;if(n>20||n<10)switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},it={ordinalNumber:nt,era:$({values:Ke,defaultWidth:"wide"}),quarter:$({values:Ze,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:$({values:et,defaultWidth:"wide"}),day:$({values:tt,defaultWidth:"wide"}),dayPeriod:$({values:at,defaultWidth:"wide",formattingValues:rt,defaultFormattingWidth:"wide"})};const ot=it;function k(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.width,n=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(n);if(!i)return null;var o=i[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(s)?st(s,function(c){return c.test(o)}):dt(s,function(c){return c.test(o)}),u;u=e.valueCallback?e.valueCallback(l):l,u=a.valueCallback?a.valueCallback(u):u;var v=t.slice(o.length);return{value:u,rest:v}}}function dt(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function st(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}function ut(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.match(e.matchPattern);if(!r)return null;var n=r[0],i=t.match(e.parsePattern);if(!i)return null;var o=e.valueCallback?e.valueCallback(i[0]):i[0];o=a.valueCallback?a.valueCallback(o):o;var s=t.slice(n.length);return{value:o,rest:s}}}var lt=/^(\d+)(th|st|nd|rd)?/i,ct=/\d+/i,mt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ft={any:[/^b/i,/^(a|c)/i]},ht={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},vt={any:[/1/i,/2/i,/3/i,/4/i]},gt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},wt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},pt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},bt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Dt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},St={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Ct={ordinalNumber:ut({matchPattern:lt,parsePattern:ct,valueCallback:function(t){return parseInt(t,10)}}),era:k({matchPatterns:mt,defaultMatchWidth:"wide",parsePatterns:ft,defaultParseWidth:"any"}),quarter:k({matchPatterns:ht,defaultMatchWidth:"wide",parsePatterns:vt,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:k({matchPatterns:gt,defaultMatchWidth:"wide",parsePatterns:wt,defaultParseWidth:"any"}),day:k({matchPatterns:pt,defaultMatchWidth:"wide",parsePatterns:bt,defaultParseWidth:"any"}),dayPeriod:k({matchPatterns:Dt,defaultMatchWidth:"any",parsePatterns:St,defaultParseWidth:"any"})},Tt={code:"en-US",formatDistance:He,formatLong:Xe,formatRelative:Ve,localize:ot,match:Ct,options:{weekStartsOn:0,firstWeekContainsDate:1}};const yt=Tt;var Pt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Mt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ot=/^'([^]*?)'?$/,$t=/''/g,kt=/[a-zA-Z]/;function xt(e,t,a){var r,n,i,o,s,l,u,v,c,f,h,g,b,P,x,H,I,G;m(2,arguments);var Ft=String(t),E=F(),W=(r=(n=a==null?void 0:a.locale)!==null&&n!==void 0?n:E.locale)!==null&&r!==void 0?r:yt,z=S((i=(o=(s=(l=a==null?void 0:a.firstWeekContainsDate)!==null&&l!==void 0?l:a==null||(u=a.locale)===null||u===void 0||(v=u.options)===null||v===void 0?void 0:v.firstWeekContainsDate)!==null&&s!==void 0?s:E.firstWeekContainsDate)!==null&&o!==void 0?o:(c=E.locale)===null||c===void 0||(f=c.options)===null||f===void 0?void 0:f.firstWeekContainsDate)!==null&&i!==void 0?i:1);if(!(z>=1&&z<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var Q=S((h=(g=(b=(P=a==null?void 0:a.weekStartsOn)!==null&&P!==void 0?P:a==null||(x=a.locale)===null||x===void 0||(H=x.options)===null||H===void 0?void 0:H.weekStartsOn)!==null&&b!==void 0?b:E.weekStartsOn)!==null&&g!==void 0?g:(I=E.locale)===null||I===void 0||(G=I.options)===null||G===void 0?void 0:G.weekStartsOn)!==null&&h!==void 0?h:0);if(!(Q>=0&&Q<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!W.localize)throw new RangeError("locale must contain localize property");if(!W.formatLong)throw new RangeError("locale must contain formatLong property");var _=w(e);if(!pe(_))throw new RangeError("Invalid time value");var Yt=Ye(_),_t=De(_,Yt),At={firstWeekContainsDate:z,weekStartsOn:Q,locale:W,_originalDate:_},Lt=Ft.match(Mt).map(function(p){var T=p[0];if(T==="p"||T==="P"){var A=Fe[T];return A(p,W.formatLong)}return p}).join("").match(Pt).map(function(p){if(p==="''")return"'";var T=p[0];if(T==="'")return Et(p);var A=We[T];if(A)return!(a!=null&&a.useAdditionalWeekYearTokens)&&qe(p)&&re(p,t,String(e)),!(a!=null&&a.useAdditionalDayOfYearTokens)&&Le(p)&&re(p,t,String(e)),A(_t,p,W.localize,At);if(T.match(kt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+T+"`");return p}).join("");return Lt}function Et(e){var t=e.match(Ot);return t?t[1].replace($t,"'"):e}function R(e){const t=e instanceof Date&&J(e);return t||console.error(new Error("Invalid date")),t}const ne=(e,t)=>R(e)?he(e)||ge(e,t):!1,Wt=(e,t)=>R(e)?!(we(e)||ne(e,t)):!1,Ut=e=>R(e)?xt(e,"dd/MM/yyyy"):"",Nt=e=>{const[t,a,r]=e.split("/").map(Number);return new Date(r,a-1,t)};D.formatToBrazilianDate=Ut,D.isBrazilianBusinessDay=Wt,D.isBrazilianHoliday=ne,D.parseFromBrazilianDate=Nt,Object.defineProperty(D,Symbol.toStringTag,{value:"Module"})});
