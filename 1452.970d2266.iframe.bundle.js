"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1452],{"./node_modules/@codemirror/legacy-modes/mode/pascal.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{pascal:()=>pascal});var keywords=function words(str){for(var obj={},words=str.split(" "),i=0;i<words.length;++i)obj[words[i]]=!0;return obj}("absolute and array asm begin case const constructor destructor div do downto else end file for function goto if implementation in inherited inline interface label mod nil not object of operator or packed procedure program record reintroduce repeat self set shl shr string then to type unit until uses var while with xor as class dispinterface except exports finalization finally initialization inline is library on out packed property raise resourcestring threadvar try absolute abstract alias assembler bitpacked break cdecl continue cppdecl cvar default deprecated dynamic enumerator experimental export external far far16 forward generic helper implements index interrupt iocheck local message name near nodefault noreturn nostackframe oldfpccall otherwise overload override pascal platform private protected public published read register reintroduce result safecall saveregisters softfloat specialize static stdcall stored strict unaligned unimplemented varargs virtual write"),atoms={null:!0},isOperatorChar=/[+\-*&%=<>!?|\/]/;function tokenBase(stream,state){var ch=stream.next();if("#"==ch&&state.startOfLine)return stream.skipToEnd(),"meta";if('"'==ch||"'"==ch)return state.tokenize=function tokenString(quote){return function(stream,state){for(var next,escaped=!1,end=!1;null!=(next=stream.next());){if(next==quote&&!escaped){end=!0;break}escaped=!escaped&&"\\"==next}return!end&&escaped||(state.tokenize=null),"string"}}(ch),state.tokenize(stream,state);if("("==ch&&stream.eat("*"))return state.tokenize=tokenComment,tokenComment(stream,state);if("{"==ch)return state.tokenize=tokenCommentBraces,tokenCommentBraces(stream,state);if(/[\[\]\(\),;\:\.]/.test(ch))return null;if(/\d/.test(ch))return stream.eatWhile(/[\w\.]/),"number";if("/"==ch&&stream.eat("/"))return stream.skipToEnd(),"comment";if(isOperatorChar.test(ch))return stream.eatWhile(isOperatorChar),"operator";stream.eatWhile(/[\w\$_]/);var cur=stream.current();return keywords.propertyIsEnumerable(cur)?"keyword":atoms.propertyIsEnumerable(cur)?"atom":"variable"}function tokenComment(stream,state){for(var ch,maybeEnd=!1;ch=stream.next();){if(")"==ch&&maybeEnd){state.tokenize=null;break}maybeEnd="*"==ch}return"comment"}function tokenCommentBraces(stream,state){for(var ch;ch=stream.next();)if("}"==ch){state.tokenize=null;break}return"comment"}const pascal={name:"pascal",startState:function(){return{tokenize:null}},token:function(stream,state){if(stream.eatSpace())return null;var style=(state.tokenize||tokenBase)(stream,state);return style},languageData:{indentOnInput:/^\s*[{}]$/,commentTokens:{block:{open:"(*",close:"*)"}}}}}}]);