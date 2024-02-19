"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8110],{"./src/stories/EventCard.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Started:()=>Started,default:()=>EventCard_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),chunk_MPFPK3CX=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-MPFPK3CX.mjs"),chunk_6CSUKJP7=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),chunk_E3YVMML4=__webpack_require__("./node_modules/@chakra-ui/image/dist/chunk-E3YVMML4.mjs"),chunk_YTV6DHKL=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-YTV6DHKL.mjs"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),useTranslation=__webpack_require__("./node_modules/next-translate/lib/esm/useTranslation.js"),intervalToDuration=__webpack_require__("./node_modules/date-fns/esm/intervalToDuration/index.js"),Icon=__webpack_require__("./src/common/components/Icon/index.jsx"),Heading=__webpack_require__("./src/common/components/Heading.jsx"),TagCapsule=__webpack_require__("./src/common/components/TagCapsule.jsx"),Text=__webpack_require__("./src/common/components/Text.jsx"),utils=__webpack_require__("./src/utils/index.js"),useStyle=__webpack_require__("./src/common/hooks/useStyle.js"),_excluded=["id","language","slug","title","ignoreDynamicHandler","description","host","startingAt","endingAt","technologies","stTranslation","isSmall"],__jsx=react.createElement;function EventCard(_ref){_ref.id;var _stTranslation$lang12,_stTranslation$lang13,language=_ref.language,slug=_ref.slug,title=_ref.title,ignoreDynamicHandler=_ref.ignoreDynamicHandler,description=_ref.description,host=_ref.host,startingAt=_ref.startingAt,endingAt=_ref.endingAt,technologies=_ref.technologies,stTranslation=_ref.stTranslation,isSmall=_ref.isSmall,rest=(0,objectWithoutProperties.Z)(_ref,_excluded),_useTranslation=(0,useTranslation.Z)("live-event"),t=_useTranslation.t,lang=_useTranslation.lang,_useState=(0,react.useState)(""),date=_useState[0],setDate=_useState[1],_useStyle=(0,useStyle.Z)(),lightColor=_useStyle.lightColor,disabledColor2=_useStyle.disabledColor2,featuredColor=_useStyle.featuredColor,startedButRemain=(null==date?void 0:date.started)&&!1===(null==date?void 0:date.ended),startingAtDate=(0,utils.qb)(startingAt)&&new Date(startingAt),endingAtDate=(0,utils.qb)(endingAt)&&new Date(endingAt),intervalDurationDate=startingAtDate&&endingAtDate&&(0,intervalToDuration.Z)({start:startingAtDate,end:endingAtDate}),languageConnector="us"===language||"en"===language||null===language?"":"/".concat(language),formatTimeString=function formatTimeString(start){var duration=(0,utils.qb)(start)&&(0,intervalToDuration.Z)({end:new Date,start}),formated=function formatDurationString(){var _stTranslation$lang,_stTranslation$lang2,_stTranslation$lang3,_stTranslation$lang4,_stTranslation$lang5,_stTranslation$lang6,_stTranslation$lang7,_stTranslation$lang8,months=duration.months,days=duration.days,hours=duration.hours,minutes=duration.minutes,averageHour=hours>=1&&minutes>0?hours+1:hours;return months>=1?months>1?(null==stTranslation||null===(_stTranslation$lang=stTranslation[lang])||void 0===_stTranslation$lang||null===(_stTranslation$lang=_stTranslation$lang["live-event"])||void 0===_stTranslation$lang||null===(_stTranslation$lang=_stTranslation$lang["start-months"])||void 0===_stTranslation$lang?void 0:_stTranslation$lang.replace("{{time}}",months))||t("start-months",{time:months}):(null==stTranslation||null===(_stTranslation$lang2=stTranslation[lang])||void 0===_stTranslation$lang2||null===(_stTranslation$lang2=_stTranslation$lang2["live-event"])||void 0===_stTranslation$lang2||null===(_stTranslation$lang2=_stTranslation$lang2["start-month"])||void 0===_stTranslation$lang2?void 0:_stTranslation$lang2.replace("{{time}}",months))||t("start-month",{time:months}):days>=1&&0===months?days>1?(null==stTranslation||null===(_stTranslation$lang3=stTranslation[lang])||void 0===_stTranslation$lang3||null===(_stTranslation$lang3=_stTranslation$lang3["live-event"])||void 0===_stTranslation$lang3||null===(_stTranslation$lang3=_stTranslation$lang3["start-days"])||void 0===_stTranslation$lang3?void 0:_stTranslation$lang3.replace("{{time}}",days))||t("start-days",{time:days}):(null==stTranslation||null===(_stTranslation$lang4=stTranslation[lang])||void 0===_stTranslation$lang4||null===(_stTranslation$lang4=_stTranslation$lang4["live-event"])||void 0===_stTranslation$lang4||null===(_stTranslation$lang4=_stTranslation$lang4["start-day"])||void 0===_stTranslation$lang4?void 0:_stTranslation$lang4.replace("{{time}}",days))||t("start-day",{time:days}):hours>=1&&0===days&&0===months?hours>1?(null==stTranslation||null===(_stTranslation$lang5=stTranslation[lang])||void 0===_stTranslation$lang5||null===(_stTranslation$lang5=_stTranslation$lang5["live-event"])||void 0===_stTranslation$lang5||null===(_stTranslation$lang5=_stTranslation$lang5["start-hours"])||void 0===_stTranslation$lang5?void 0:_stTranslation$lang5.replace("{{time}}",averageHour))||t("start-hours",{time:averageHour||0}):(null==stTranslation||null===(_stTranslation$lang6=stTranslation[lang])||void 0===_stTranslation$lang6||null===(_stTranslation$lang6=_stTranslation$lang6["live-event"])||void 0===_stTranslation$lang6||null===(_stTranslation$lang6=_stTranslation$lang6["start-hour"])||void 0===_stTranslation$lang6?void 0:_stTranslation$lang6.replace("{{time}}",averageHour))||t("start-hour",{time:averageHour||0}):minutes>=1&&0===hours&&0===days&&0===months?minutes>1?(null==stTranslation||null===(_stTranslation$lang7=stTranslation[lang])||void 0===_stTranslation$lang7||null===(_stTranslation$lang7=_stTranslation$lang7["live-event"])||void 0===_stTranslation$lang7||null===(_stTranslation$lang7=_stTranslation$lang7["start-minutes"])||void 0===_stTranslation$lang7?void 0:_stTranslation$lang7.replace("{{time}}",minutes))||t("start-minutes",{time:minutes||0}):(null==stTranslation||null===(_stTranslation$lang8=stTranslation[lang])||void 0===_stTranslation$lang8||null===(_stTranslation$lang8=_stTranslation$lang8["live-event"])||void 0===_stTranslation$lang8||null===(_stTranslation$lang8=_stTranslation$lang8["start-minute"])||void 0===_stTranslation$lang8?void 0:_stTranslation$lang8.replace("{{time}}",minutes))||t("start-minute",{time:minutes||0}):""}();return""===formated?stTranslation?stTranslation[lang]["live-event"]["few-seconds"]:t("few-seconds"):formated},textTime=function textTime(_ref2){var _stTranslation$lang11,formatedTime,_stTranslation$lang9,_stTranslation$lang10,start=_ref2.start,started=_ref2.started,end=_ref2.end;return _ref2.ended?(formatedTime=formatTimeString(end),stTranslation?null==stTranslation||null===(_stTranslation$lang9=stTranslation[lang])||void 0===_stTranslation$lang9?void 0:_stTranslation$lang9["live-event"].ended.replace("{{time}}",formatedTime):t("ended",{time:formatedTime})):(formatedTime=formatTimeString(start),started?stTranslation?null==stTranslation||null===(_stTranslation$lang10=stTranslation[lang])||void 0===_stTranslation$lang10?void 0:_stTranslation$lang10["live-event"].started.replace("{{time}}",formatedTime):t("started",{time:formatedTime}):stTranslation?null==stTranslation||null===(_stTranslation$lang11=stTranslation[lang])||void 0===_stTranslation$lang11?void 0:_stTranslation$lang11["live-event"]["will-start"].replace("{{time}}",formatedTime):t("will-start",{time:formatedTime}))},formatedTime=function formatedTime(start,end){var started=start-new Date<=30,ended=end-new Date<=0;return{text:textTime({start,started,end,ended}),started,ended}};return(0,react.useEffect)((function(){setDate(formatedTime(startingAtDate,endingAtDate)),(0,utils.zb)((function(){setDate(formatedTime(startingAtDate,endingAtDate))}))}),[]),__jsx(chunk_MPFPK3CX.k,(0,esm_extends.Z)({flexDirection:"column",gridGap:"16px",width:isSmall?"310px":"auto",maxWidth:{base:"260px",sm:"310px"},borderRadius:"12px",padding:"16px",border:startedButRemain?"2px solid":"1px solid",borderColor:startedButRemain?"blue.default":"gray.350",background:startedButRemain?featuredColor:"inherit"},rest),__jsx(chunk_MPFPK3CX.k,{justifyContent:"space-between",alignItems:"center"},__jsx(chunk_6CSUKJP7.xu,{color:startedButRemain?"blue.default":lightColor,display:"flex",alignItems:"center",gridGap:"8px"},__jsx(Icon.Z,{icon:"chronometer",color:"currentColor",width:"20px",height:"20px"}),__jsx(Text.Z,{size:"12px",fontWeight:700},(null==intervalDurationDate?void 0:intervalDurationDate.hours)>0&&((null==stTranslation||null===(_stTranslation$lang12=stTranslation[lang])||void 0===_stTranslation$lang12||null===(_stTranslation$lang12=_stTranslation$lang12["live-event"])||void 0===_stTranslation$lang12||null===(_stTranslation$lang12=_stTranslation$lang12["time-duration"])||void 0===_stTranslation$lang12?void 0:_stTranslation$lang12.replace("{{time}}","".concat(null==intervalDurationDate?void 0:intervalDurationDate.hours).concat((null==intervalDurationDate?void 0:intervalDurationDate.hours)>1?"hrs":"hr")))||t("time-duration",{time:"".concat(null==intervalDurationDate?void 0:intervalDurationDate.hours).concat((null==intervalDurationDate?void 0:intervalDurationDate.hours)>1?"hrs":"hr")})),0===(null==intervalDurationDate?void 0:intervalDurationDate.hours)&&(null==intervalDurationDate?void 0:intervalDurationDate.minutes)>0&&((null==stTranslation||null===(_stTranslation$lang13=stTranslation[lang])||void 0===_stTranslation$lang13||null===(_stTranslation$lang13=_stTranslation$lang13["live-event"])||void 0===_stTranslation$lang13||null===(_stTranslation$lang13=_stTranslation$lang13["time-duration"])||void 0===_stTranslation$lang13?void 0:_stTranslation$lang13.replace("{{time}}","".concat(null==intervalDurationDate?void 0:intervalDurationDate.minutes).concat((null==intervalDurationDate?void 0:intervalDurationDate.minutes)>1?"mins":"min")))||t("time-duration",{time:"".concat(null==intervalDurationDate?void 0:intervalDurationDate.minutes).concat((null==intervalDurationDate?void 0:intervalDurationDate.minutes)>1?"mins":"min")})))),startedButRemain?__jsx(chunk_6CSUKJP7.xu,{display:"flex",alignItems:"center",height:isSmall?"24px":"auto",gridGap:"8px",padding:"4px 10px",color:"danger",background:"red.light",borderRadius:"18px"},__jsx(Icon.Z,{icon:"dot",color:"currentColor",width:"9px",height:"9px"}),__jsx(Text.Z,{size:"12px",fontWeight:700,lineHeight:"14.4px"},stTranslation?stTranslation[lang]["live-event"]["live-now"]:t("live-now"))):__jsx(Text.Z,{size:"12px",color:lightColor,fontWeight:700},null==date?void 0:date.text)),__jsx(Heading.Z,{size:isSmall?"14px":"24px",letterSpacing:isSmall&&"0.05em",fontWeight:700,style:{margin:"0"}},title),(null==technologies?void 0:technologies.length)>0&&__jsx(TagCapsule.Z,{tags:technologies,fontSize:"13px",lineHeight:"15.6px",borderRadius:"20px",fontWeight:700,padding:"8px 16px",margin:"-5px 0 0 0"}),description&&__jsx(Text.Z,{size:isSmall?"12px":"14px"},description),null!=host&&host.length>5&&!isSmall&&("string"==typeof host?__jsx(Heading.Z,{as:"span",fontWeight:700,style:{fontSize:"14px"}},host):__jsx(chunk_MPFPK3CX.k,{gridGap:"8px"},__jsx(chunk_6CSUKJP7.xu,{width:"35px",height:"35px"},__jsx(chunk_E3YVMML4.E,{src:null!=host&&host.image?null==host?void 0:host.image:"/static/images/4geeks.png",alt:"teacher",width:"100%",height:"100%",borderRadius:"50px"})),__jsx(chunk_6CSUKJP7.xu,null,__jsx(Heading.Z,{size:"14px",fontWeight:700},null==host?void 0:host.full_name),__jsx(Text.Z,{size:"12px",fontWeight:700},null==host?void 0:host.job_title)))),ignoreDynamicHandler||startedButRemain?__jsx(chunk_YTV6DHKL.r,{margin:"auto 0 0 0",href:"".concat(languageConnector,"/workshops/").concat(slug),color:"blue.default",target:"_blank",rel:"noopener noreferrer",display:"flex",alignItems:"center",justifyContent:"center",gridGap:"10px"},stTranslation?stTranslation[lang]["live-event"]["join-event"]:t("join-event"),__jsx(Icon.Z,{icon:"longArrowRight",width:"24px",height:"10px",color:"currentColor"})):__jsx(Text.Z,{margin:"auto 0 0 0",size:"18px",color:disabledColor2,textAlign:"center",fontWeight:700},stTranslation?stTranslation[lang]["live-event"]["will-start-soon"]:t("will-start-soon")))}EventCard.displayName="EventCard",EventCard.propTypes={title:prop_types_default().string.isRequired,description:prop_types_default().string,startingAt:prop_types_default().string,endingAt:prop_types_default().string,technologies:prop_types_default().arrayOf(prop_types_default().string),host:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().objectOf(prop_types_default().any)]),stTranslation:prop_types_default().objectOf(prop_types_default().oneOfType([prop_types_default().any])),id:prop_types_default().number.isRequired,slug:prop_types_default().string.isRequired,ignoreDynamicHandler:prop_types_default().bool,language:prop_types_default().string,isSmall:prop_types_default().bool},EventCard.defaultProps={description:"Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsa.",startingAt:"",endingAt:"",technologies:[],host:"",stTranslation:null,ignoreDynamicHandler:!1,language:"",isSmall:!1},EventCard.__docgenInfo={description:"",methods:[],displayName:"EventCard",props:{description:{defaultValue:{value:"'Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsa.'",computed:!1},description:"",type:{name:"string"},required:!1},startingAt:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},endingAt:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},technologies:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1},host:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"objectOf",value:{name:"any"}}]},required:!1},stTranslation:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}},required:!1},ignoreDynamicHandler:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},language:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},isSmall:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},title:{description:"",type:{name:"string"},required:!0},id:{description:"",type:{name:"number"},required:!0},slug:{description:"",type:{name:"string"},required:!0}}};const components_EventCard=EventCard;var _Default$parameters,_Default$parameters2,_Started$parameters,_Started$parameters2,addHours=__webpack_require__("./node_modules/date-fns/esm/addHours/index.js"),subMinutes=__webpack_require__("./node_modules/date-fns/esm/subMinutes/index.js"),EventCard_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const EventCard_stories={title:"Components/EventCard",component:components_EventCard,argTypes:{startingAt:{control:{type:"date"}},endingAt:{control:{type:"date"}}}};var Template=function Template(args,context){return EventCard_stories_jsx(components_EventCard,{stTranslation:context.parameters.i18n.store.data,title:null==args?void 0:args.title,host:null==args?void 0:args.host,description:null==args?void 0:args.description,technologies:null==args?void 0:args.technologies,startingAt:new Date(null==args?void 0:args.startingAt),endingAt:new Date(null==args?void 0:args.endingAt)})};Template.displayName="Template";var Default=Template.bind({});Default.args={title:"How to use React icons in Next.js",description:"Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsa.",technologies:["Machine Learning"],startingAt:new Date((0,addHours.Z)(new Date,2)),endingAt:new Date((0,addHours.Z)(new Date,4)),host:{full_name:"John Doe",job_title:"Software Engineer",avatar:"https://via.placeholder.com/150"}};var Started=Template.bind({});Started.args={title:"How to use React icons in Next.js",description:"Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsa.",technologies:["Machine Learning"],startingAt:new Date((0,subMinutes.Z)(new Date,20)),endingAt:new Date((0,addHours.Z)(new Date,1)),host:{full_name:"John Doe",job_title:"Software Engineer",avatar:"https://via.placeholder.com/150"}},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"(args, context) => <EventCard stTranslation={context.parameters.i18n.store.data} title={args?.title} host={args?.host} description={args?.description} technologies={args?.technologies} startingAt={new Date(args?.startingAt)} endingAt={new Date(args?.endingAt)} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),Started.parameters=_objectSpread(_objectSpread({},Started.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Started$parameters=Started.parameters)||void 0===_Started$parameters?void 0:_Started$parameters.docs),{},{source:_objectSpread({originalSource:"(args, context) => <EventCard stTranslation={context.parameters.i18n.store.data} title={args?.title} host={args?.host} description={args?.description} technologies={args?.technologies} startingAt={new Date(args?.startingAt)} endingAt={new Date(args?.endingAt)} />"},null===(_Started$parameters2=Started.parameters)||void 0===_Started$parameters2||null===(_Started$parameters2=_Started$parameters2.docs)||void 0===_Started$parameters2?void 0:_Started$parameters2.source)})})},"./src/common/components/Heading.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-B2MGPQRJ.mjs"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),_excluded=["children","size"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,sizes={xxl:"var(--heading-xxl)",xl:"var(--heading-xl)",l:"var(--heading-l)",m:"var(--heading-m)",sm:"var(--heading-sm)",xsm:"var(--heading-xsm)"};function Heading(_ref){var children=_ref.children,size=_ref.size,rest=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.X,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({fontSize:sizes[size]||size},rest),children)}Heading.displayName="Heading",Heading.propTypes={size:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,prop_types__WEBPACK_IMPORTED_MODULE_4___default().object]),children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node},Heading.defaultProps={size:"l",children:null},Heading.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{size:{defaultValue:{value:"'l'",computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Heading},"./src/common/components/NextChakraLink.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_chakra_ui_next_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/next-js/dist/chunk-CFNWCCXK.mjs"),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),next_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/router.js"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/index.js"),_excluded=["href","as","replace","scroll","shallow","children","locale","redirectAfterLogin","onClick"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function NextChakraLink(_ref){var href=_ref.href,as=_ref.as,replace=_ref.replace,scroll=_ref.scroll,shallow=_ref.shallow,children=_ref.children,locale=_ref.locale,redirectAfterLogin=_ref.redirectAfterLogin,_onClick=_ref.onClick,chakraProps=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded),router=(0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();return __jsx(_chakra_ui_next_js__WEBPACK_IMPORTED_MODULE_4__.r,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__.Z)({onClick:function onClick(){redirectAfterLogin&&"string"==typeof href&&href.includes("/login")&&(0,_utils__WEBPACK_IMPORTED_MODULE_2__.Nh)("redirect",null==router?void 0:router.asPath),_onClick()},href,as,replace,locale:locale||(null==router?void 0:router.locale),scroll,shallow},chakraProps),children)}NextChakraLink.displayName="NextChakraLink",NextChakraLink.propTypes={href:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,locale:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,as:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,replace:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,scroll:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,shallow:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,children:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_6___default().node),prop_types__WEBPACK_IMPORTED_MODULE_6___default().node]).isRequired,redirectAfterLogin:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,onClick:prop_types__WEBPACK_IMPORTED_MODULE_6___default().func},NextChakraLink.defaultProps={locale:"",href:"",as:"a",replace:!1,scroll:!0,shallow:!1,redirectAfterLogin:!1,onClick:function onClick(){}},NextChakraLink.__docgenInfo={description:"",methods:[],displayName:"NextChakraLink",props:{locale:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},href:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},as:{defaultValue:{value:"'a'",computed:!1},description:"",type:{name:"string"},required:!1},replace:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},scroll:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},shallow:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},redirectAfterLogin:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},children:{description:"",type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]},required:!0}}};const __WEBPACK_DEFAULT_EXPORT__=NextChakraLink},"./src/common/components/TagCapsule.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/color-mode/dist/chunk-7NLW6UB6.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-O5CRURSQ.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),prop_types__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__),next_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/router.js"),_Text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/common/components/Text.jsx"),_NextChakraLink__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/common/components/NextChakraLink.jsx"),_excluded=["tags","separator","background","color","variant","paddingX","marginY","gap","style","fontSize","containerStyle","fontWeight","isLink","href","borderRadius","lineHeight","textTransform","whiteSpace"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function TagCapsule(_ref){var tags=_ref.tags,separator=_ref.separator,background=_ref.background,color=_ref.color,variant=_ref.variant,paddingX=_ref.paddingX,marginY=_ref.marginY,gap=_ref.gap,style=_ref.style,fontSize=_ref.fontSize,containerStyle=_ref.containerStyle,fontWeight=_ref.fontWeight,isLink=_ref.isLink,borderRadius=(_ref.href,_ref.borderRadius),lineHeight=_ref.lineHeight,textTransform=_ref.textTransform,whiteSpace=_ref.whiteSpace,rest=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref,_excluded),router=((0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.If)().colorMode,(0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)()),langPrefix="en"===router.locale?"":"".concat(router.locale,"/");return(null==tags?void 0:tags.length)>0&&__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.K,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_7__.Z)({bg:"rounded"===variant?"none":background,as:"ul",flexWrap:"wrap",direction:"row",height:"auto",style:containerStyle,my:marginY,width:"fit-content",px:paddingX,borderRadius:"15px",gridGap:gap},rest),tags.map((function(tag,i){var isPublicTechnology="PUBLIC"===(null==tag?void 0:tag.visibility),tagSlug=(null==tag?void 0:tag.slug)||tag,tagTitle=(null==tag?void 0:tag.title)||(null==tag?void 0:tag.name);return isPublicTechnology&&isLink?__jsx(_NextChakraLink__WEBPACK_IMPORTED_MODULE_3__.Z,{href:"/".concat(langPrefix,"technology/").concat(tagSlug),display:"flex",locale:router.locale,cursor:isLink?"pointer":"default",bg:"rounded"===variant?background:"none",direction:"row",padding:"rounded"===variant?"0 10px":"0",style,rounded:"rounded"===variant?borderRadius:"none",key:tagTitle||"".concat(tag,"-").concat(i),lineHeight:"22px",color:"black"},__jsx(_Text__WEBPACK_IMPORTED_MODULE_2__.Z,{margin:"0",alignSelf:"center",letterSpacing:"0.05em",textAlign:"center",size:fontSize,fontWeight,color:"black",textTransform,whiteSpace},tagTitle||tag),"slash"===variant&&i<tags.length-1&&__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.xu,{as:"span",alignSelf:"center",userSelect:"none",fontSize:"15px",mx:"0.5rem"},separator)):__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.xu,{as:"li",display:"flex",bg:"rounded"===variant?background:"none",direction:"row",padding:"rounded"===variant?"0 10px":"0",style,rounded:"rounded"===variant?borderRadius:"none",key:tagTitle||"".concat(tag,"-").concat(i),lineHeight,color:"black"},"slash"===variant&&0!==i&&__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.xu,{as:"span",alignSelf:"center",userSelect:"none",fontSize:"15px",mx:"0.5rem"},separator),__jsx(_Text__WEBPACK_IMPORTED_MODULE_2__.Z,{margin:"0",alignSelf:"center",letterSpacing:"0.05em",textAlign:"center",size:fontSize,fontWeight,color,textTransform,whiteSpace},tagTitle||tag))})))}TagCapsule.propTypes={tags:prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,prop_types__WEBPACK_IMPORTED_MODULE_9___default().array]).isRequired,fontSize:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,separator:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,containerStyle:prop_types__WEBPACK_IMPORTED_MODULE_9___default().objectOf(prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default().any])),background:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,variant:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,paddingX:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,marginY:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,gap:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,style:prop_types__WEBPACK_IMPORTED_MODULE_9___default().shape({}),fontWeight:prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,prop_types__WEBPACK_IMPORTED_MODULE_9___default().number]),isLink:prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool,href:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,borderRadius:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,color:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,lineHeight:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,textTransform:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,whiteSpace:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string},TagCapsule.defaultProps={separator:"/",background:"yellow.light",containerStyle:{},fontSize:"11px",variant:"slash",paddingX:"20px",marginY:"18px",fontWeight:500,gap:"0",style:{margin:"0"},isLink:!1,href:"#",borderRadius:"15px",color:"black",lineHeight:"22px",textTransform:"uppercase",whiteSpace:null},TagCapsule.__docgenInfo={description:"",methods:[],displayName:"TagCapsule",props:{separator:{defaultValue:{value:"'/'",computed:!1},description:"",type:{name:"string"},required:!1},background:{defaultValue:{value:"'yellow.light'",computed:!1},description:"",type:{name:"string"},required:!1},containerStyle:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}},required:!1},fontSize:{defaultValue:{value:"'11px'",computed:!1},description:"",type:{name:"string"},required:!1},variant:{defaultValue:{value:"'slash'",computed:!1},description:"",type:{name:"string"},required:!1},paddingX:{defaultValue:{value:"'20px'",computed:!1},description:"",type:{name:"string"},required:!1},marginY:{defaultValue:{value:"'18px'",computed:!1},description:"",type:{name:"string"},required:!1},fontWeight:{defaultValue:{value:"500",computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},gap:{defaultValue:{value:"'0'",computed:!1},description:"",type:{name:"string"},required:!1},style:{defaultValue:{value:"{\n  margin: '0',\n}",computed:!1},description:"",type:{name:"shape",value:{}},required:!1},isLink:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},href:{defaultValue:{value:"'#'",computed:!1},description:"",type:{name:"string"},required:!1},borderRadius:{defaultValue:{value:"'15px'",computed:!1},description:"",type:{name:"string"},required:!1},color:{defaultValue:{value:"'black'",computed:!1},description:"",type:{name:"string"},required:!1},lineHeight:{defaultValue:{value:"'22px'",computed:!1},description:"",type:{name:"string"},required:!1},textTransform:{defaultValue:{value:"'uppercase'",computed:!1},description:"",type:{name:"string"},required:!1},whiteSpace:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},tags:{description:"",type:{name:"union",value:[{name:"string"},{name:"array"}]},required:!0}}};const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(TagCapsule)},"./src/utils/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A$:()=>unSlugify,FJ:()=>isWindow,I4:()=>unSlugifyCapitalize,NV:()=>decodeBase64,Nh:()=>setStorageItem,Wz:()=>getQueryString,X6:()=>isDevMode,fp:()=>toCapitalize,hj:()=>isNumber,lV:()=>slugify,oR:()=>lengthOfString,qb:()=>isValidDate,qn:()=>getStorageItem,rV:()=>slugToTitle,rg:()=>removeURLParameter,sW:()=>cleanObject,tF:()=>getBrowserSize,td:()=>formatBytes,xh:()=>location,zb:()=>syncInterval});var process=__webpack_require__("./node_modules/process/browser.js"),isWindow=(__webpack_require__("./node_modules/console-browserify/index.js"),"undefined"!=typeof window),isDevMode=(!!isWindow&&localStorage.getItem("accessToken"),"production"!==process.env.VERCEL_ENV||!1),slugify=function slugify(str){return"string"==typeof str?str.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,""):""},unSlugify=function unSlugify(str){var capitalize=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return"string"==typeof str?str.replace(/-/g," ").replace(/\w\S*/g,(function(txt){return(capitalize?txt.charAt(0).toUpperCase():txt.charAt(0))+txt.substring(1).toLowerCase()})):""},unSlugifyCapitalize=function unSlugifyCapitalize(str){return"string"==typeof str?str.replace(/-/g," ").replace(/\w\S*/g,(function(txt){return txt.charAt(0).toUpperCase()+txt.substring(1).toLowerCase()})):""};function slugToTitle(slug){return void 0===slug?"":slug.split("-").map((function(word,i){return 0===i?word.charAt(0).toUpperCase()+word.slice(1):word.charAt(0)+word.slice(1)})).join(" ").replace(/([A-Z])/g," $1").trim()}var getStorageItem=function getStorageItem(key){return isWindow?localStorage.getItem(key):null},setStorageItem=(String(getStorageItem("accessToken")).length,function setStorageItem(key,value){return isWindow?localStorage.setItem(key,value):null});function removeURLParameter(url,parameter){var urlparts=url.split("?");if(urlparts.length>=2){for(var prefix="".concat(encodeURIComponent(parameter),"="),pars=urlparts[1].split(/[&;]/g),i=pars.length;i-- >0;)-1!==pars[i].lastIndexOf(prefix,0)&&pars.splice(i,1);return urlparts[0]+(pars.length>0?"?".concat(pars.join("&")):"")}return url}var toCapitalize=function toCapitalize(){var input=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return input.charAt(0).toUpperCase()+input.toLowerCase().slice(1)};function formatBytes(bytes){var decimals=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(!+bytes)return"0 Bytes";var dm=decimals<0?0:decimals,i=Math.floor(Math.log(bytes)/Math.log(1024));return"".concat(parseFloat((bytes/Math.pow(1024,i)).toFixed(dm))," ").concat(["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][i])}var isNumber=function isNumber(value){return Number.isFinite(Number(value))},isValidDate=function isValidDate(dateString){return!Number.isNaN(Date.parse(dateString))},getQueryString=function getQueryString(key,def){var urlParams=isWindow&&new URLSearchParams(window.location.search);return urlParams&&(urlParams.get(key)||def)},lengthOfString=function lengthOfString(string){return"string"==typeof string?null==string?void 0:string.replaceAll(/\s/g,"").length:0},syncInterval=function syncInterval(){var callback=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},secondsToNextMinute=60-(new Date).getSeconds();setTimeout((function(){callback(),setInterval(callback,6e4)}),1e3*secondsToNextMinute)};function getBrowserSize(){return isWindow?{width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}:{}}var location=isWindow&&window.location;isWindow&&new URL(window.location.href);function cleanObject(obj){var cleaned={};return Object.keys(obj).forEach((function(key){if(void 0!==obj[key]&&null!==obj[key]){if(Array.isArray(obj[key])&&0===obj[key].length)return;cleaned[key]=obj[key]}})),cleaned}function decodeBase64(encoded){return new TextDecoder("utf-8").decode(Uint8Array.from(atob(encoded),(function(c){return c.charCodeAt(0)}))).replace(/�/g,"")}}}]);