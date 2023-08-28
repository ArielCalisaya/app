"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3008],{"./modifyEnv.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _src_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/index.js"),process=__webpack_require__("./node_modules/process/browser.js");const __WEBPACK_DEFAULT_EXPORT__=function modifyEnv(_ref2){var _ref2$queryString=_ref2.queryString,queryString=void 0===_ref2$queryString?"host":_ref2$queryString,_ref2$env=_ref2.env,host=function handleEnv(_ref){var queryString=_ref.queryString,env=_ref.env,modifiedEnv=env;if(_src_utils__WEBPACK_IMPORTED_MODULE_0__.FJ){var urlHost=new URLSearchParams(window.location.search).get(queryString);"production"!==process.env.VERCEL_ENV&&(urlHost&&"/"===urlHost[urlHost.length-1]&&urlHost.slice(0,-1),urlHost&&localStorage.setItem(queryString,urlHost),localStorage.getItem(queryString)&&(modifiedEnv=localStorage.getItem(queryString)),"reset"===modifiedEnv&&(modifiedEnv=env),"production"===modifiedEnv&&(modifiedEnv="https://breathecode.herokuapp.com"))}return modifiedEnv}({queryString,env:void 0===_ref2$env?process.env.BREATHECODE_HOST:_ref2$env});return host}},"./src/stories/MktSideRecommendedCourses.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>MktSideRecommendedCourses_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),chunk_7NLW6UB6=__webpack_require__("./node_modules/@chakra-ui/color-mode/dist/chunk-7NLW6UB6.mjs"),chunk_YTV6DHKL=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-YTV6DHKL.mjs"),chunk_6CSUKJP7=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),chunk_SMHKDLMK=__webpack_require__("./node_modules/@chakra-ui/image/dist/chunk-SMHKDLMK.mjs"),useTranslation=__webpack_require__("./node_modules/next-translate/lib/esm/useTranslation.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),next_router=__webpack_require__("./node_modules/next/router.js"),Heading=__webpack_require__("./src/common/components/Heading.jsx"),Text=__webpack_require__("./src/common/components/Text.jsx"),Icon=__webpack_require__("./src/common/components/Icon/index.jsx"),Skeleton=__webpack_require__("./src/common/components/Skeleton.jsx"),modifyEnv=__webpack_require__("./modifyEnv.js"),TagCapsule=__webpack_require__("./src/common/components/TagCapsule.jsx"),utils=__webpack_require__("./src/utils/index.js"),useStyle=__webpack_require__("./src/common/hooks/useStyle.js"),url=__webpack_require__("./src/utils/url.js"),process=__webpack_require__("./node_modules/process/browser.js"),console=__webpack_require__("./node_modules/console-browserify/index.js"),_excluded=["course","courses","borderRadius","children"],_excluded2=["title","endpoint","containerPadding"],__jsx=react.createElement;function Container(_ref){var course=_ref.course,courses=_ref.courses,borderRadius=_ref.borderRadius,children=_ref.children,rest=(0,objectWithoutProperties.Z)(_ref,_excluded),router=(0,next_router.useRouter)(),fontColor=(0,useStyle.Z)().fontColor,bgColor=(0,chunk_7NLW6UB6.ff)("gray.light3","featuredDark"),langConnector="en"===router.locale?"":"/".concat(router.locale);return(0,utils.tF)().width<768?__jsx(chunk_YTV6DHKL.r,(0,esm_extends.Z)({href:"https://4geeks.com".concat(langConnector,"/").concat(null==course?void 0:course.slug),_hover:{textDecoration:"none"},minWidth:{base:(null==courses?void 0:courses.length)>1?"285px":"100%",md:"auto"},justifyContent:"space-between",display:"flex",flexDirection:{base:"row",md:"column"},gridGap:"10px",background:bgColor,color:fontColor,borderRadius},rest),children):__jsx(chunk_6CSUKJP7.xu,(0,esm_extends.Z)({minWidth:{base:(null==courses?void 0:courses.length)>1?"285px":"100%",md:"auto"},justifyContent:"space-between",display:"flex",flexDirection:{base:"row",md:"column"},gridGap:"10px",background:bgColor,color:fontColor,borderRadius},rest),children)}function MktSideRecommendedCourses(_ref2){var title=_ref2.title,endpoint=_ref2.endpoint,containerPadding=_ref2.containerPadding,rest=(0,objectWithoutProperties.Z)(_ref2,_excluded2),_useTranslation=(0,useTranslation.Z)("common"),t=_useTranslation.t,lang=_useTranslation.lang,_useState=(0,react.useState)(!0),isLoading=_useState[0],setIsLoading=_useState[1],BREATHECODE_HOST=(0,modifyEnv.Z)({queryString:"host",env:process.env.BREATHECODE_HOST}),_useState2=(0,react.useState)([]),courses=_useState2[0],setCourses=_useState2[1],router=(0,next_router.useRouter)(),langConnector="en"===router.locale?"":"/".concat(router.locale),qs=(0,url.parseQuerys)({academy:utils.G7,featured:!0}),headers={"Accept-Language":lang},fetchCourses=function(){var _ref3=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(){var res,data;return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.prev=0,_context.next=3,fetch("".concat(BREATHECODE_HOST).concat(endpoint).concat(qs),{headers});case 3:return res=_context.sent,_context.next=6,res.json();case 6:data=_context.sent,(null==res?void 0:res.status)<400&&data.length>0&&(setIsLoading(!1),setCourses(null==data?void 0:data.filter((function(course){return course.course_translation})).slice(0,1))),_context.next=13;break;case 10:_context.prev=10,_context.t0=_context.catch(0),console.log(_context.t0);case 13:case"end":return _context.stop()}}),_callee,null,[[0,10]])})));return function fetchCourses(){return _ref3.apply(this,arguments)}}();return(0,react.useEffect)((function(){fetchCourses()}),[]),__jsx(chunk_6CSUKJP7.xu,(0,esm_extends.Z)({minWidth:{base:"100%",md:"214px"},width:"auto",padding:"8px",margin:"0 auto"},rest),title&&__jsx(Heading.Z,{size:"18px",lineHeight:"21px",m:"10px 0 20px 0"},title||t("continue-learning-course")),!isLoading&&(null==courses?void 0:courses.length)>0?__jsx(chunk_6CSUKJP7.xu,{display:"flex",flexDirection:{base:"row",md:"column"},overflow:"auto",gridGap:"14px"},courses.map((function(course){var _course$course_transl,_course$course_transl2,_course$course_transl3,tags=["Free course"];return __jsx(Container,{key:null==course?void 0:course.slug,course,courses,borderRadius:rest.borderRadius,padding:containerPadding},__jsx(TagCapsule.Z,{tags,background:"green.light",color:"green.500",fontWeight:700,fontSize:"13px",marginY:"0",paddingX:"0",variant:"rounded",gap:"10px",display:{base:"none",md:"inherit"}}),__jsx(chunk_6CSUKJP7.xu,{display:"flex",flexDirection:{base:"column",md:"row"},gridGap:"8px"},__jsx(TagCapsule.Z,{tags,background:"green.light",color:"green.500",fontWeight:700,fontSize:"13px",marginY:"0",paddingX:"0",variant:"rounded",gap:"10px",display:{base:"inherit",md:"none"}}),__jsx(chunk_SMHKDLMK.E,{display:{base:"none",md:"inherit"},src:null==course?void 0:course.icon_url,width:"46px",height:"46px",borderRadius:"8px",background:"green.400"}),__jsx(Heading.Z,{size:"18px"},null==course||null===(_course$course_transl=course.course_translation)||void 0===_course$course_transl?void 0:_course$course_transl.title)),__jsx(Text.Z,{display:{base:"none",md:"inherit"},fontSize:"12px",lineHeight:"14px",padding:"0 20px"},(null==course||null===(_course$course_transl2=course.course_translation)||void 0===_course$course_transl2?void 0:_course$course_transl2.short_description)||(null==course||null===(_course$course_transl3=course.course_translation)||void 0===_course$course_transl3?void 0:_course$course_transl3.description)),__jsx(chunk_YTV6DHKL.r,{display:{base:"none",md:"flex"},variant:"buttonDefault",href:"https://4geeks.com".concat(langConnector,"/").concat(null==course?void 0:course.slug),alignItems:"center",colorScheme:"success",width:"auto",gridGap:"10px",margin:"0 20px"},t("learn-more"),__jsx(Icon.Z,{icon:"longArrowRight",width:"24px",height:"10px",color:"currentColor"})),__jsx(chunk_YTV6DHKL.r,{display:{base:"flex",md:"none"},href:"https://4geeks.com".concat(langConnector,"/").concat(null==course?void 0:course.slug),alignItems:"center",width:"auto",color:"green.light",gridGap:"10px",margin:"0 20px"},__jsx(Icon.Z,{icon:"longArrowRight",width:"24px",height:"10px",color:"currentColor"})))}))):__jsx(Skeleton.q4,{withoutContainer:!0,quantity:1,height:rest.skeletonHeight,borderRadius:rest.skeletonBorderRadius}))}Container.displayName="Container",MktSideRecommendedCourses.displayName="MktSideRecommendedCourses",MktSideRecommendedCourses.propTypes={title:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().bool]),endpoint:prop_types_default().string,containerPadding:prop_types_default().string},MktSideRecommendedCourses.defaultProps={title:"",endpoint:"/v1/marketing/course",containerPadding:"9px 8px"},Container.propTypes={course:prop_types_default().objectOf(prop_types_default().oneOfType([prop_types_default().objectOf(prop_types_default().any),prop_types_default().string])),courses:prop_types_default().arrayOf(prop_types_default().oneOfType([prop_types_default().objectOf(prop_types_default().any),prop_types_default().string])),children:prop_types_default().node.isRequired,borderRadius:prop_types_default().string},Container.defaultProps={course:{},courses:[],borderRadius:"8px"},MktSideRecommendedCourses.__docgenInfo={description:"",methods:[],displayName:"MktSideRecommendedCourses",props:{title:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"bool"}]},required:!1},endpoint:{defaultValue:{value:"'/v1/marketing/course'",computed:!1},description:"",type:{name:"string"},required:!1},containerPadding:{defaultValue:{value:"'9px 8px'",computed:!1},description:"",type:{name:"string"},required:!1}}};const components_MktSideRecommendedCourses=MktSideRecommendedCourses;var _Default$parameters,_Default$parameters2,_Default$parameters2$,MktSideRecommendedCourses_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const MktSideRecommendedCourses_stories={title:"Components/MktSideRecommendedCourses",component:components_MktSideRecommendedCourses,argTypes:{}};var Component=function Component(args){return MktSideRecommendedCourses_stories_jsx(chunk_6CSUKJP7.xu,{width:args.width},MktSideRecommendedCourses_stories_jsx(components_MktSideRecommendedCourses,args))};Component.displayName="Component";var Default=Component.bind({});Default.args={width:"350px",title:"Title",endpoint:"/v1/marketing/course"},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => {\n  return <Box width={args.width}>\n      <MktSideRecommendedCourses {...args} />\n    </Box>;\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})})},"./src/common/components/Heading.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-B2MGPQRJ.mjs"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),_excluded=["children","size"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,sizes={xxl:"var(--heading-xxl)",xl:"var(--heading-xl)",l:"var(--heading-l)",m:"var(--heading-m)",sm:"var(--heading-sm)",xsm:"var(--heading-xsm)"};function Heading(_ref){var children=_ref.children,size=_ref.size,rest=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.X,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({fontSize:sizes[size]||size},rest),children)}Heading.displayName="Heading",Heading.propTypes={size:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,prop_types__WEBPACK_IMPORTED_MODULE_4___default().object]),children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node},Heading.defaultProps={size:"l",children:null},Heading.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{size:{defaultValue:{value:"'l'",computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Heading},"./src/common/components/TagCapsule.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/color-mode/dist/chunk-7NLW6UB6.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-O5CRURSQ.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),prop_types__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__),_Text__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/common/components/Text.jsx"),_NextChakraLink__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/common/components/NextChakraLink.jsx"),_excluded=["tags","separator","background","color","variant","paddingX","marginY","gap","style","fontSize","containerStyle","fontWeight","isLink","href","borderRadius","lineHeight"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function TagCapsule(_ref){var tags=_ref.tags,separator=_ref.separator,background=_ref.background,color=_ref.color,variant=_ref.variant,paddingX=_ref.paddingX,marginY=_ref.marginY,gap=_ref.gap,style=_ref.style,fontSize=_ref.fontSize,containerStyle=_ref.containerStyle,fontWeight=_ref.fontWeight,isLink=_ref.isLink,href=_ref.href,borderRadius=_ref.borderRadius,lineHeight=_ref.lineHeight,rest=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded);(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.If)().colorMode;return 0!==tags.length&&__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.K,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_6__.Z)({bg:"rounded"===variant?"none":background,as:"ul",flexWrap:"wrap",direction:"row",height:"auto",style:containerStyle,my:marginY,width:"fit-content",px:paddingX,borderRadius:"15px",gridGap:gap},rest),tags.map((function(tag,i){return isLink?__jsx(_NextChakraLink__WEBPACK_IMPORTED_MODULE_2__.Z,{href:"".concat(href,"/technology/").concat(tag),display:"flex",cursor:isLink?"pointer":"default",bg:"rounded"===variant?background:"none",direction:"row",padding:"rounded"===variant?"0 10px":"0",style,rounded:"rounded"===variant?borderRadius:"none",key:(null==tag?void 0:tag.name)||"".concat(tag,"-").concat(i),lineHeight:"22px",color:"black"},__jsx(_Text__WEBPACK_IMPORTED_MODULE_1__.Z,{margin:"0",alignSelf:"center",letterSpacing:"0.05em",textAlign:"center",size:fontSize,fontWeight,color:"black",textTransform:"uppercase"},(null==tag?void 0:tag.name)||tag),"slash"===variant&&i<tags.length-1&&__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.xu,{as:"span",alignSelf:"center",userSelect:"none",fontSize:"15px",mx:"0.5rem"},separator)):__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.xu,{as:"li",display:"flex",bg:"rounded"===variant?background:"none",direction:"row",padding:"rounded"===variant?"0 10px":"0",style,rounded:"rounded"===variant?borderRadius:"none",key:(null==tag?void 0:tag.name)||"".concat(tag,"-").concat(i),lineHeight,color:"black"},"slash"===variant&&0!==i&&__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.xu,{as:"span",alignSelf:"center",userSelect:"none",fontSize:"15px",mx:"0.5rem"},separator),__jsx(_Text__WEBPACK_IMPORTED_MODULE_1__.Z,{margin:"0",alignSelf:"center",letterSpacing:"0.05em",textAlign:"center",size:fontSize,fontWeight,color,textTransform:"uppercase"},(null==tag?void 0:tag.name)||tag))})))}TagCapsule.propTypes={tags:prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default().string,prop_types__WEBPACK_IMPORTED_MODULE_8___default().array]).isRequired,fontSize:prop_types__WEBPACK_IMPORTED_MODULE_8___default().string,separator:prop_types__WEBPACK_IMPORTED_MODULE_8___default().string,containerStyle:prop_types__WEBPACK_IMPORTED_MODULE_8___default().objectOf(prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default().any])),background:prop_types__WEBPACK_IMPORTED_MODULE_8___default().string,variant:prop_types__WEBPACK_IMPORTED_MODULE_8___default().string,paddingX:prop_types__WEBPACK_IMPORTED_MODULE_8___default().string,marginY:prop_types__WEBPACK_IMPORTED_MODULE_8___default().string,gap:prop_types__WEBPACK_IMPORTED_MODULE_8___default().string,style:prop_types__WEBPACK_IMPORTED_MODULE_8___default().shape({}),fontWeight:prop_types__WEBPACK_IMPORTED_MODULE_8___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default().string,prop_types__WEBPACK_IMPORTED_MODULE_8___default().number]),isLink:prop_types__WEBPACK_IMPORTED_MODULE_8___default().bool,href:prop_types__WEBPACK_IMPORTED_MODULE_8___default().string,borderRadius:prop_types__WEBPACK_IMPORTED_MODULE_8___default().string,color:prop_types__WEBPACK_IMPORTED_MODULE_8___default().string,lineHeight:prop_types__WEBPACK_IMPORTED_MODULE_8___default().string},TagCapsule.defaultProps={separator:"/",background:"yellow.light",containerStyle:{},fontSize:"11px",variant:"slash",paddingX:"20px",marginY:"18px",fontWeight:500,gap:"0",style:{margin:"0"},isLink:!1,href:"#",borderRadius:"15px",color:"black",lineHeight:"22px"},TagCapsule.__docgenInfo={description:"",methods:[],displayName:"TagCapsule",props:{separator:{defaultValue:{value:"'/'",computed:!1},description:"",type:{name:"string"},required:!1},background:{defaultValue:{value:"'yellow.light'",computed:!1},description:"",type:{name:"string"},required:!1},containerStyle:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}},required:!1},fontSize:{defaultValue:{value:"'11px'",computed:!1},description:"",type:{name:"string"},required:!1},variant:{defaultValue:{value:"'slash'",computed:!1},description:"",type:{name:"string"},required:!1},paddingX:{defaultValue:{value:"'20px'",computed:!1},description:"",type:{name:"string"},required:!1},marginY:{defaultValue:{value:"'18px'",computed:!1},description:"",type:{name:"string"},required:!1},fontWeight:{defaultValue:{value:"500",computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},gap:{defaultValue:{value:"'0'",computed:!1},description:"",type:{name:"string"},required:!1},style:{defaultValue:{value:"{\n  margin: '0',\n}",computed:!1},description:"",type:{name:"shape",value:{}},required:!1},isLink:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},href:{defaultValue:{value:"'#'",computed:!1},description:"",type:{name:"string"},required:!1},borderRadius:{defaultValue:{value:"'15px'",computed:!1},description:"",type:{name:"string"},required:!1},color:{defaultValue:{value:"'black'",computed:!1},description:"",type:{name:"string"},required:!1},lineHeight:{defaultValue:{value:"'22px'",computed:!1},description:"",type:{name:"string"},required:!1},tags:{description:"",type:{name:"union",value:[{name:"string"},{name:"array"}]},required:!0}}};const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(TagCapsule)},"./src/common/components/Text.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/tooltip/dist/chunk-HEDGDMHJ.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-P74GIWPW.mjs"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),_excluded=["children","size","maxWidth","letterSpacing","withLimit","label","withTooltip"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,sizes={l:"15px",md:"14px",sm:"12px",xs:"10px"};function Text(_ref){var children=_ref.children,size=_ref.size,maxWidth=_ref.maxWidth,letterSpacing=_ref.letterSpacing,withLimit=_ref.withLimit,label=_ref.label,withTooltip=_ref.withTooltip,rest=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return withLimit?__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.u,{label:withTooltip?label:children,hasArrow:!0,placement:"top-start",openDelay:500},__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.x,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({className:"text",letterSpacing,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",fontSize:sizes[size]||size,width:maxWidth||withTooltip?"auto":"13em",border:"0px"},rest),children&&children)):__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.x,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({letterSpacing,maxWidth,fontSize:sizes[size]||size},rest),children&&children)}Text.propTypes={size:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,prop_types__WEBPACK_IMPORTED_MODULE_5___default().object]),letterSpacing:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,maxWidth:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_5___default().node,withLimit:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,withTooltip:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,label:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string},Text.defaultProps={letterSpacing:"0.05em",size:"sm",maxWidth:"",children:null,withLimit:!1,withTooltip:!1,label:""},Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{letterSpacing:{defaultValue:{value:"'0.05em'",computed:!1},description:"",type:{name:"string"},required:!1},size:{defaultValue:{value:"'sm'",computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1},maxWidth:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},withLimit:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},withTooltip:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},label:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Text},"./src/common/hooks/useStyle.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@chakra-ui/color-mode/dist/chunk-7NLW6UB6.mjs");const __WEBPACK_DEFAULT_EXPORT__=function useStyle(){var navbarBackground=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("white","gray.800"),backgroundColor=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("white","darkTheme"),backgroundColor2=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("white","gray.700"),backgroundColor3=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("gray.light2","gray.800"),borderColor=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("gray.200","gray.700"),borderColor2=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("gray.200","gray.500"),borderColorStrong=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("gray.400","gray.500"),disabledBackgroundColor=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("gray.250","gray.600"),disabledColor=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("gray.500","gray.350"),disabledColor2=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("gray.default","#CACACA"),featuredColor=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("featuredLight","featuredDark"),fontColor=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("black","white"),fontColor2=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("gray.dark","gray.250"),fontColor3=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("gray.700","gray.300"),reverseFontColor=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("white","gray.900"),lightColor=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("gray.600","gray.200"),tooltipBackground=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("gray.dark","gray.dark"),featuredLight=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("gray.light3","featuredDark");return{backgroundColor,backgroundColor2,backgroundColor3,borderColor,borderColor2,borderColorStrong,disabledBackgroundColor,disabledColor,disabledColor2,featuredColor,fontColor,fontColor2,fontColor3,hexColor:{black:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("#000000","#ffffff"),fontColor3:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("#606060","#EBEBEB"),backgroundColor:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("#ffffff","#17202A"),featuredColor:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("#EEF9FE","#283340"),lightColor:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("#F5F5F5","#4A5568"),lightColor2:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("#F5F5F5","#283340"),white2:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("#ffffff","#283340"),danger:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("#CD0000","#e26161"),blueDefault:"#0097CD",yellowDefault:"#FFB718",green:"#38A56A",greenLight:"#25BF6C",fontColor2:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("#3A3A3A","#EBEBEB")},input:{borderColor:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("gray.default","#CACACA")},lightColor,modal:{featuredBackground:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("featuredLight","darkTheme"),background:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("white","featuredDark"),background2:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("white","gray.900"),background3:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("white","gray.800"),hoverBackground:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("featuredLight","gray.700")},reverseFontColor,tooltipBackground,featuredLight,navbarBackground}}}}]);