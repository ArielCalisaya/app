"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6477],{"./src/stories/upgradeAccessModal.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>upgradeAccessModal_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),chunk_MG6WC47T=__webpack_require__("./node_modules/@chakra-ui/media-query/dist/chunk-MG6WC47T.mjs"),chunk_UUGUEMMH=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-UUGUEMMH.mjs"),chunk_OWW5MU75=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-OWW5MU75.mjs"),chunk_66WFFNY3=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-66WFFNY3.mjs"),chunk_PVJ72NKC=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-PVJ72NKC.mjs"),chunk_YLPWWAYV=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-YLPWWAYV.mjs"),chunk_MPFPK3CX=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-MPFPK3CX.mjs"),chunk_6CSUKJP7=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),chunk_SMHKDLMK=__webpack_require__("./node_modules/@chakra-ui/image/dist/chunk-SMHKDLMK.mjs"),chunk_NAA7TEES=__webpack_require__("./node_modules/@chakra-ui/button/dist/chunk-NAA7TEES.mjs"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),next_router=__webpack_require__("./node_modules/next/router.js"),Text=__webpack_require__("./src/common/components/Text.jsx"),useStyle=__webpack_require__("./src/common/hooks/useStyle.js"),Heading=__webpack_require__("./src/common/components/Heading.jsx"),Icon=__webpack_require__("./src/common/components/Icon/index.jsx"),en_finance=__webpack_require__("./public/locales/en/finance.json"),es_finance=__webpack_require__("./public/locales/es/finance.json"),utils=__webpack_require__("./src/utils/index.js"),__jsx=react.createElement;function UpgradeAccessModal(_ref){var _router$query,_storySettings$plans,_storySettings$plans2,_selectedItem$bullets,_finance$button,storySettings=_ref.storySettings,isOpen=_ref.isOpen,onClose=_ref.onClose,_useState=(0,react.useState)(0),selectedIndex=_useState[0],setSelectedIndex=_useState[1],_useState2=(0,react.useState)({}),selectedProps=_useState2[0],setSelectedProps=_useState2[1],_useMediaQuery=(0,chunk_MG6WC47T.a)("(max-width: 768px)"),isBelowTablet=(0,slicedToArray.Z)(_useMediaQuery,1)[0],router=(0,next_router.useRouter)(),courseQuery=null==router||null===(_router$query=router.query)||void 0===_router$query?void 0:_router$query.course,finance="en"===((null==storySettings?void 0:storySettings.locale)||(null==router?void 0:router.locale))?en_finance:es_finance,currentCourse=courseQuery||"coding-introduction",_useStyle=(0,useStyle.Z)(),featuredColor=_useStyle.featuredColor,backgroundColor2=_useStyle.backgroundColor2,hexColor=_useStyle.hexColor,selectedItem=(null==storySettings||null===(_storySettings$plans=storySettings.plans)||void 0===_storySettings$plans?void 0:_storySettings$plans[selectedIndex])||finance.plans[selectedIndex],financePlans=(null==storySettings||null===(_storySettings$plans2=storySettings.plans)||void 0===_storySettings$plans2?void 0:_storySettings$plans2.length)>0?null==storySettings?void 0:storySettings.plans.filter((function(l){return"trial"!==l.type&&"schoolarship-trial"!==l.type})):finance.plans.filter((function(l){return"trial"!==l.type&&"schoolarship-trial"!==l.type}));return __jsx(chunk_UUGUEMMH.u_,{isOpen:(null==storySettings?void 0:storySettings.isOpen)||isOpen,onClose,closeOnOverlayClick:!1},__jsx(chunk_OWW5MU75.Z,null),__jsx(chunk_66WFFNY3.h,{style:{maxWidth:"72rem"}},__jsx(chunk_PVJ72NKC.f,null,__jsx(chunk_YLPWWAYV.o,{top:isBelowTablet?1:4,right:isBelowTablet?1:5}),__jsx(chunk_MPFPK3CX.k,{flexDirection:{base:"column",lg:"row"},gridGap:"35px",padding:{base:"0",md:"55px"}},__jsx(chunk_6CSUKJP7.xu,{display:"flex",flexDirection:"column",flex:1,gridGap:"10px"},__jsx(chunk_6CSUKJP7.xu,{w:"100%",position:"relative"},__jsx(chunk_SMHKDLMK.E,{src:(null==storySettings?void 0:storySettings.image)||"/static/images/meeting.png",style:{aspectRatio:"12/8"},margin:"0 auto",w:"auto",h:"auto",layout:"fill",zIndex:10,top:"0",left:"0"}),__jsx(chunk_6CSUKJP7.xu,{w:"10px",h:"10px",borderRadius:"40px",background:"#EB5757",position:"absolute",top:"4.3rem",left:"0.6rem"}),__jsx(chunk_6CSUKJP7.xu,{w:"31px",h:"31px",borderRadius:"40px",background:"blue.default",position:"absolute",bottom:"5rem",left:"0"}),__jsx(chunk_6CSUKJP7.xu,{w:"76.4px",h:"76.4px",borderRadius:"40px",background:"blue.light",position:"absolute",top:"4.4rem",left:"0",zIndex:-1}),__jsx(chunk_6CSUKJP7.xu,{w:"54px",h:"54px",borderRadius:"40px",background:"blue.default",position:"absolute",top:"0",right:"3.8rem",zIndex:-1}),__jsx(chunk_6CSUKJP7.xu,{w:"116px",h:"116px",borderRadius:"50%",background:"yellow.light",position:"absolute",bottom:"0",right:"2.8rem",zIndex:-1}),__jsx(Icon.Z,{icon:"cursorTooltip",width:isBelowTablet?"28px":"36px",height:"auto",text:"April",color:hexColor.yellowDefault,style:{position:"absolute",top:"5.2rem",right:"3.1rem",zIndex:1}}),__jsx(Icon.Z,{icon:"cursorTooltip",width:isBelowTablet?"28px":"36px",height:"auto",text:"April",color:"#F2994A",style:{position:"absolute",top:"4.3rem",left:"7rem",zIndex:1}}),__jsx(Icon.Z,{icon:"cursorTooltip",width:isBelowTablet?"28px":"36px",height:"auto",text:"Tori",color:hexColor.blueDefault,style:{position:"absolute",bottom:"2.5rem",left:"3.2rem",zIndex:1}}),__jsx(Icon.Z,{icon:"cursorTooltip",width:isBelowTablet?"28px":"36px",height:"auto",text:"Tori",color:hexColor.green,style:{position:"absolute",bottom:"4rem",right:"3rem",zIndex:1}}),__jsx(Icon.Z,{icon:"cursorTooltip",width:isBelowTablet?"28px":"36px",height:"auto",color:"#9B51E0",style:{position:"absolute",bottom:"2rem",right:"9rem",zIndex:1}})),__jsx(Text.Z,{size:"18px",color:"blue.default",textAlign:"center",fontWeight:700},null==finance?void 0:finance.description),__jsx(chunk_6CSUKJP7.xu,{as:"ul",style:{listStyle:"none"},display:"flex",flexDirection:"column",gridGap:"12px",margin:"18px 0 0 2.6rem"},null==selectedItem||null===(_selectedItem$bullets=selectedItem.bullets)||void 0===_selectedItem$bullets||null===(_selectedItem$bullets=_selectedItem$bullets.list)||void 0===_selectedItem$bullets?void 0:_selectedItem$bullets.map((function(bullet){return __jsx(chunk_6CSUKJP7.xu,{as:"li",key:null==bullet?void 0:bullet.title,display:"flex",flexDirection:"row",lineHeight:"24px",gridGap:"14px"},__jsx(Icon.Z,{icon:"checked2",color:"#38A56A",width:"16px",height:"13px",style:{margin:"6px 0 0 0"}}),__jsx(chunk_6CSUKJP7.xu,{fontSize:"14px",fontWeight:"600",letterSpacing:"0.05em",dangerouslySetInnerHTML:{__html:null==bullet?void 0:bullet.title}}))})))),__jsx(chunk_6CSUKJP7.xu,{display:"flex",flex:1,background:featuredColor,flexDirection:"column",gridGap:"24px",borderRadius:"17px",minH:"490px",padding:"33px 28px"},financePlans.map((function(item,i){return __jsx(react.Fragment,{key:"".concat(item.title," ").concat(null==item?void 0:item.price)},__jsx(chunk_6CSUKJP7.xu,{key:item.title,display:"flex",onClick:function onClick(){return function handleSelect(dataProps,index){setSelectedProps(dataProps),setSelectedIndex(index)}(item,i)},flexDirection:{base:"column",md:"row"},width:"100%",justifyContent:"space-between",p:{base:"16px 20px",md:selectedIndex===i?"22px 18px":"26px 22px"},gridGap:{base:"5px",lg:"24px"},cursor:"pointer",background:backgroundColor2,border:selectedIndex===i&&"4px solid #0097CD",borderRadius:"8px",minH:"118px"},__jsx(chunk_6CSUKJP7.xu,{display:"flex",flex:1,flexDirection:"column",gridGap:{base:"0",lg:"12px"},minWidth:{base:"100%",md:"288px"},height:"fit-content",fontWeight:"400"},__jsx(chunk_6CSUKJP7.xu,{fontSize:"18px",fontWeight:"700"},(0,utils.fp)(null==item?void 0:item.title)),"pro"!==item.type&&__jsx(Text.Z,{size:"md",fontWeight:"500",mb:"6px",dangerouslySetInnerHTML:{__html:null==item?void 0:item.payment}})),__jsx(chunk_6CSUKJP7.xu,{display:"flex",alignItems:"center",gridGap:"10px"},__jsx(Heading.Z,{as:"span",size:"l",lineHeight:"1",textTransform:"uppercase",color:"blue.default"},null==item?void 0:item.price))))})),__jsx(chunk_NAA7TEES.z,{w:"fit-content",variant:"default",textTransform:"uppercase",onClick:function onClick(){router.push({pathname:"/checkout",query:{course:currentCourse,plan:null==selectedProps?void 0:selectedProps.type}})}},null==finance||null===(_finance$button=finance.button)||void 0===_finance$button?void 0:_finance$button.title))))))}UpgradeAccessModal.displayName="UpgradeAccessModal",UpgradeAccessModal.propTypes={storySettings:prop_types_default().objectOf(prop_types_default().oneOfType([prop_types_default().any])),isOpen:prop_types_default().bool,onClose:prop_types_default().func},UpgradeAccessModal.defaultProps={storySettings:{isOpen:!1},isOpen:!1,onClose:function onClose(){}},UpgradeAccessModal.__docgenInfo={description:"",methods:[],displayName:"UpgradeAccessModal",props:{storySettings:{defaultValue:{value:"{\n  isOpen: false,\n}",computed:!1},description:"",type:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}},required:!1},isOpen:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onClose:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1}}};const components_UpgradeAccessModal=UpgradeAccessModal;var _Default$parameters,_Default$parameters2,upgradeAccessModal_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const upgradeAccessModal_stories={title:"Components/UpgradeAccessModal",component:components_UpgradeAccessModal,argTypes:{isOpen:{control:"boolean"}}};var Component=function Component(args){return upgradeAccessModal_stories_jsx(components_UpgradeAccessModal,{storySettings:_objectSpread({},args)})};Component.displayName="Component";var Default=Component.bind({});Default.args={isOpen:!0,plans:[{type:"pro",show:!0,title:"One time payment",price:"$199",lastPrice:"<s>$399</s>",offerTitle:"Limited offer",payment:"One time payment",description:"Full access to all features for the duration of the course",bullets:{title:"What you will get",list:[{title:"Unlimited access to group masterclasses"},{title:"Unlimited access to workshops"},{title:"Unlimited access to course content"},{title:"Certificate endorsed by industry leaders"}]}},{type:"schoolarship-t1",show:!0,title:"scholarship level 1",price:"$70",payment:"3 months",highlightText:"",description:"Full access to all features for the duration of the course.",bullets:{title:"What you will get",list:[{title:"scholarship level 1 - featured 1"},{title:"scholarship level 1 - featured 2"},{title:"scholarship level 1 - featured 3"},{title:"scholarship level 1 - featured 4"}]}},{type:"schoolarship-t2",show:!0,title:"scholarship level 2",price:"$50",payment:"5 months",highlightText:"",description:"Full access to all features for the duration of the course.",bullets:{title:"What you will get",list:[{title:"scholarship level 2 - featured 1"},{title:"scholarship level 2 - featured 2"},{title:"scholarship level 2 - featured 3"},{title:"scholarship level 2 - featured 4"}]}}],image:"static/images/meeting.png"},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <UpgradeAccessModal storySettings={{\n  ...args\n}} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})},"./src/common/components/Heading.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-B2MGPQRJ.mjs"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),_excluded=["children","size"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,sizes={xxl:"var(--heading-xxl)",xl:"var(--heading-xl)",l:"var(--heading-l)",m:"var(--heading-m)",sm:"var(--heading-sm)",xsm:"var(--heading-xsm)"};function Heading(_ref){var children=_ref.children,size=_ref.size,rest=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.X,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({fontSize:sizes[size]||size},rest),children)}Heading.displayName="Heading",Heading.propTypes={size:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,prop_types__WEBPACK_IMPORTED_MODULE_4___default().object]),children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node},Heading.defaultProps={size:"l",children:null},Heading.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{size:{defaultValue:{value:"'l'",computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Heading},"./src/common/components/Text.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/tooltip/dist/chunk-HEDGDMHJ.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-P74GIWPW.mjs"),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),_excluded=["children","size","maxWidth","letterSpacing","withLimit","label","withTooltip"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,sizes={l:"15px",md:"14px",sm:"12px",xs:"10px"};function Text(_ref){var children=_ref.children,size=_ref.size,maxWidth=_ref.maxWidth,letterSpacing=_ref.letterSpacing,withLimit=_ref.withLimit,label=_ref.label,withTooltip=_ref.withTooltip,rest=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return withLimit?__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.u,{label:withTooltip?label:children,hasArrow:!0,placement:"top-start",openDelay:500},__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.x,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({className:"text",letterSpacing,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",fontSize:sizes[size]||size,width:maxWidth||withTooltip?"auto":"13em",border:"0px"},rest),children&&children)):__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.x,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({letterSpacing,maxWidth,fontSize:sizes[size]||size},rest),children&&children)}Text.propTypes={size:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,prop_types__WEBPACK_IMPORTED_MODULE_5___default().object]),letterSpacing:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,maxWidth:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_5___default().node,withLimit:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,withTooltip:prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool,label:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string},Text.defaultProps={letterSpacing:"0.05em",size:"sm",maxWidth:"",children:null,withLimit:!1,withTooltip:!1,label:""},Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{letterSpacing:{defaultValue:{value:"'0.05em'",computed:!1},description:"",type:{name:"string"},required:!1},size:{defaultValue:{value:"'sm'",computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1},maxWidth:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},withLimit:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},withTooltip:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},label:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Text},"./src/common/hooks/useStyle.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@chakra-ui/color-mode/dist/chunk-7NLW6UB6.mjs");const __WEBPACK_DEFAULT_EXPORT__=function useStyle(){var navbarBackground=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("white","gray.800"),backgroundColor=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("white","darkTheme"),backgroundColor2=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("white","gray.700"),backgroundColor3=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("gray.light2","gray.800"),borderColor=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("gray.200","gray.700"),borderColor2=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("gray.200","gray.500"),borderColorStrong=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("gray.400","gray.500"),disabledBackgroundColor=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("gray.250","gray.600"),disabledColor=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("gray.500","gray.350"),disabledColor2=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("gray.default","#CACACA"),featuredColor=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("featuredLight","featuredDark"),fontColor=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("black","white"),fontColor2=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("gray.dark","gray.250"),fontColor3=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("gray.700","gray.300"),reverseFontColor=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("white","gray.900"),lightColor=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("gray.600","gray.200"),tooltipBackground=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("gray.dark","gray.dark"),featuredLight=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("gray.light3","featuredDark"),colorMode=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("light","dark"),reverseColorMode=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("dark","light"),featuredCard={background:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("white","#181a1b"),blueDark:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("#01455E","#27b1e4"),blue:{background:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("blue.default","#157497"),featured:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("blue.light","#092835")},yellow:{background:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("yellow.default","rgb(135 97 20)"),featured:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("yellow.light","#332508")}};return{backgroundColor,backgroundColor2,backgroundColor3,borderColor,borderColor2,borderColorStrong,disabledBackgroundColor,disabledColor,disabledColor2,featuredColor,fontColor,fontColor2,fontColor3,hexColor:{black:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("#000000","#ffffff"),fontColor3:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("#606060","#EBEBEB"),borderColor:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("#DADADA","#4A5568"),backgroundColor:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("#ffffff","#17202A"),featuredColor:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("#EEF9FE","#283340"),lightColor:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("#F5F5F5","#4A5568"),lightColor2:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("#F5F5F5","#283340"),white2:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("#ffffff","#283340"),danger:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("#CD0000","#e26161"),blueDefault:"#0097CD",yellowDefault:"#FFB718",green:"#38A56A",greenLight:"#25BF6C",fontColor2:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("#3A3A3A","#EBEBEB")},input:{borderColor:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("gray.default","#CACACA")},lightColor,modal:{featuredBackground:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("featuredLight","darkTheme"),background:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("white","featuredDark"),background2:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("white","gray.900"),background3:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("white","gray.800"),hoverBackground:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ff)("featuredLight","gray.700")},reverseFontColor,tooltipBackground,featuredLight,navbarBackground,featuredCard,colorMode,reverseColorMode}}}}]);