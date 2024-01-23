"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[536],{"./src/stories/DirectAccessModal.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>DirectAccessModal_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),chunk_ENIANY67=__webpack_require__("./node_modules/@chakra-ui/toast/dist/chunk-ENIANY67.mjs"),chunk_UUGUEMMH=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-UUGUEMMH.mjs"),chunk_OWW5MU75=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-OWW5MU75.mjs"),chunk_66WFFNY3=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-66WFFNY3.mjs"),chunk_YLPWWAYV=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-YLPWWAYV.mjs"),chunk_PVJ72NKC=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-PVJ72NKC.mjs"),chunk_P74GIWPW=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-P74GIWPW.mjs"),chunk_6CSUKJP7=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),chunk_NAA7TEES=__webpack_require__("./node_modules/@chakra-ui/button/dist/chunk-NAA7TEES.mjs"),formik_esm=__webpack_require__("./node_modules/formik/dist/formik.esm.js"),index_esm=__webpack_require__("./node_modules/yup/index.esm.js"),useTranslation=__webpack_require__("./node_modules/next-translate/lib/esm/useTranslation.js"),next_router=__webpack_require__("./node_modules/next/router.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),useStyle=__webpack_require__("./src/common/hooks/useStyle.js"),utils=__webpack_require__("./src/utils/index.js"),__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var initialState={utm_placement:"",utm_medium:"",utm_source:"",utm_term:"",utm_content:"",conversion_url:"",landing_url:"",user_agent:"",internal_cta_placement:"",internal_cta_content:"",internal_cta_campaign:""},SessionContext=(0,react.createContext)(_objectSpread({},initialState));function SessionProvider(_ref){var children=_ref.children,_useState=(0,react.useState)(initialState),userSession=_useState[0],_setUserSession=_useState[1],router=(0,next_router.useRouter)();return(0,react.useEffect)((function(){!function handleUserSession(){if(utils.FJ){var conversionUrl,storedSession=JSON.parse(localStorage.getItem("userSession")),userAgent=window.navigator.userAgent,landingUrl=null!=storedSession&&storedSession.landing_url&&""!==(null==storedSession?void 0:storedSession.landing_url)?null==storedSession?void 0:storedSession.landing_url:window.location.pathname;conversionUrl=["/checkout","/pricing"].some((function(path){return window.location.pathname.includes(path)}))?null==storedSession?void 0:storedSession.conversion_url:window.location.pathname;var utm_placement=(0,utils.Wz)("utm_placement")||(null==storedSession?void 0:storedSession.utm_placement),utm_medium=(0,utils.Wz)("utm_medium")||(null==storedSession?void 0:storedSession.utm_medium),utm_source=(0,utils.Wz)("utm_source")||(null==storedSession?void 0:storedSession.utm_source),utm_term=(0,utils.Wz)("utm_term")||(null==storedSession?void 0:storedSession.utm_term),utm_content=(0,utils.Wz)("utm_content")||(null==storedSession?void 0:storedSession.utm_content),internal_cta_placement=(0,utils.Wz)("internal_cta_placement")||(null==storedSession?void 0:storedSession.internal_cta_placement),internal_cta_content=(0,utils.Wz)("internal_cta_content")||(null==storedSession?void 0:storedSession.internal_cta_content),internal_cta_campaign=(0,utils.Wz)("internal_cta_campaign")||(null==storedSession?void 0:storedSession.internal_cta_campaign),cleanedStore=_objectSpread(_objectSpread({},storedSession),{},{translations:void 0}),session=_objectSpread(_objectSpread({},cleanedStore),{},{user_agent:userAgent,landing_url:landingUrl,conversion_url:conversionUrl,utm_placement,utm_medium,utm_source,utm_term,utm_content,internal_cta_placement,internal_cta_content,internal_cta_campaign});_setUserSession(session),localStorage.setItem("userSession",JSON.stringify(session))}}()}),[router]),__jsx(SessionContext.Provider,{value:{userSession,setUserSession:function setUserSession(session){localStorage.setItem("userSession",JSON.stringify(session)),_setUserSession(_objectSpread(_objectSpread({},userSession),session))},setConversionUrl:function setConversionUrl(){if(utils.FJ){if(["/checkout","/pricing"].some((function(path){return window.location.pathname.includes(path)})))return;var session=_objectSpread(_objectSpread({},userSession),{},{conversion_url:window.location.pathname});_setUserSession(session),localStorage.setItem("userSession",JSON.stringify(session))}}}},children)}SessionProvider.displayName="SessionProvider",SessionProvider.propTypes={children:prop_types_default().node},SessionProvider.defaultProps={children:null},SessionProvider.__docgenInfo={description:"",methods:[],displayName:"SessionProvider",props:{children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1}}};const hooks_useSession=function useSession(){return(0,react.useContext)(SessionContext)};var FieldForm=__webpack_require__("./src/common/components/Forms/FieldForm.jsx"),Heading=__webpack_require__("./src/common/components/Heading.jsx"),modifyEnv=__webpack_require__("./modifyEnv.js"),logging=__webpack_require__("./src/utils/logging.js"),process=__webpack_require__("./node_modules/process/browser.js"),DirectAccessModal_jsx=react.createElement;function DirectAccessModal_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function DirectAccessModal_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?DirectAccessModal_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):DirectAccessModal_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function DirectAccessModal(_ref){var _stTranslation$common,storySettings=_ref.storySettings,title=_ref.title,modalIsOpen=_ref.modalIsOpen,t=(0,useTranslation.Z)("profile").t,userSession=hooks_useSession().userSession,modal=(0,useStyle.Z)().modal,router=(0,next_router.useRouter)(),locale=(null==router?void 0:router.locale)||(null==storySettings?void 0:storySettings.locale),stTranslation=(null==storySettings?void 0:storySettings.translation[locale])||{},BREATHECODE_HOST=(0,modifyEnv.Z)({queryString:"host",env:process.env.BREATHECODE_HOST}),toast=(0,chunk_ENIANY67.p)(),_useState=(0,react.useState)({first_name:"",last_name:"",email:""}),formProps=_useState[0],setFormProps=_useState[1],signupValidation=index_esm.Ry().shape({first_name:index_esm.Z_().min(2,t("common:validators.short-input")).max(50,t("common:validators.long-input")).required(t("common:validators.first-name-required")),last_name:index_esm.Z_().min(2,t("common:validators.short-input")).max(50,t("common:validators.long-input")).required(t("common:validators.last-name-required")),email:index_esm.Z_().email(t("common:validators.invalid-email")).required(t("common:validators.email-required"))}),handleSubmit=function(){var _ref2=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(actions,allValues){var resp,data;return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,fetch("".concat(BREATHECODE_HOST,"/v1/auth/subscribe/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(DirectAccessModal_objectSpread(DirectAccessModal_objectSpread({},allValues),{},{conversion_info:userSession}))});case 2:return resp=_context.sent,_context.next=5,resp.json();case 5:data=_context.sent,resp.status<400&&((0,utils.Nh)("subscriptionId",data.id),router.push("/thank-you")),resp.status>=400&&toast({position:"top",title:t("alert-message:email-already-subscribed"),status:"warning",duration:6e3,isClosable:!0}),actions.setSubmitting(!1);case 9:case"end":return _context.stop()}}),_callee)})));return function handleSubmit(_x,_x2){return _ref2.apply(this,arguments)}}();return DirectAccessModal_jsx(chunk_UUGUEMMH.u_,{isOpen:modalIsOpen,size:"xl",onClose:function onClose(){return(0,logging.cM)("clicked to close")}},DirectAccessModal_jsx(chunk_OWW5MU75.Z,null),DirectAccessModal_jsx(chunk_66WFFNY3.h,{background:modal.background,margin:"9rem 10px 0 10px"},DirectAccessModal_jsx(chunk_YLPWWAYV.o,null),DirectAccessModal_jsx(chunk_PVJ72NKC.f,{padding:{base:"26px 18px",md:"42px 36px"}},title&&DirectAccessModal_jsx(Heading.Z,{as:"p",size:"sm",fontWeight:"700",letterSpacing:"0.05em",textAlign:"center",padding:"0 0 14px 0"},title),DirectAccessModal_jsx(chunk_P74GIWPW.x,{fontSize:"14px",px:{base:"10px",md:"2rem"},mt:"10px",mb:"2rem",textAlign:"center"},(null==stTranslation||null===(_stTranslation$common=stTranslation.common)||void 0===_stTranslation$common||null===(_stTranslation$common=_stTranslation$common["modal-tech-description"])||void 0===_stTranslation$common?void 0:_stTranslation$common.replaceAll("{{title}}",title))||t("common:modal-tech-description",{title:(0,utils.fp)(title)})),DirectAccessModal_jsx(formik_esm.J9,{initialValues:{first_name:"",last_name:"",email:""},validateOnChange:!1,validateOnBlur:!1,onSubmit:function onSubmit(values,actions){var allValues=DirectAccessModal_objectSpread(DirectAccessModal_objectSpread({},values),{},{language:locale});handleSubmit(actions,allValues)},validationSchema:signupValidation},(function(_ref3){var _stTranslation$common2,_stTranslation$common3,_stTranslation$common4,isSubmitting=_ref3.isSubmitting;return DirectAccessModal_jsx(formik_esm.l0,null,DirectAccessModal_jsx(chunk_6CSUKJP7.xu,{display:"flex",flexDirection:"column",gridGap:"26px"},DirectAccessModal_jsx(FieldForm.Z,{type:"text",name:"first_name",label:(null==stTranslation||null===(_stTranslation$common2=stTranslation.common)||void 0===_stTranslation$common2?void 0:_stTranslation$common2["first-name"])||t("common:first-name"),formProps,setFormProps}),DirectAccessModal_jsx(FieldForm.Z,{type:"email",name:"email",label:(null==stTranslation||null===(_stTranslation$common3=stTranslation.common)||void 0===_stTranslation$common3?void 0:_stTranslation$common3.email)||t("common:email"),formProps,setFormProps}),DirectAccessModal_jsx(chunk_NAA7TEES.z,{variant:"default",isLoading:isSubmitting,onClick:function onClick(){(0,logging.cM)("test")},textTransform:"uppercase",fontSize:"13px"},(null==stTranslation||null===(_stTranslation$common4=stTranslation.common)||void 0===_stTranslation$common4?void 0:_stTranslation$common4.submit)||t("common:submit"))))})))))}DirectAccessModal.displayName="DirectAccessModal",DirectAccessModal.propTypes={modalIsOpen:prop_types_default().bool,title:prop_types_default().string,storySettings:prop_types_default().objectOf(prop_types_default().oneOfType([prop_types_default().any]))},DirectAccessModal.defaultProps={modalIsOpen:!1,title:"",storySettings:{}},DirectAccessModal.__docgenInfo={description:"",methods:[],displayName:"DirectAccessModal",props:{modalIsOpen:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},title:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},storySettings:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}},required:!1}}};const components_DirectAccessModal=DirectAccessModal;var _Default$parameters,_Default$parameters2,DirectAccessModal_stories_jsx=react.createElement;function DirectAccessModal_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function DirectAccessModal_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?DirectAccessModal_stories_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):DirectAccessModal_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const DirectAccessModal_stories={title:"Components/DirectAccessModal",component:components_DirectAccessModal,argTypes:{modalIsOpen:{control:"boolean"},title:{control:"text"}}};var Template=function Template(args,etc){return DirectAccessModal_stories_jsx(components_DirectAccessModal,(0,esm_extends.Z)({storySettings:{locale:args.locale,translation:null==args?void 0:args.translation}},args))};Template.displayName="Template";var Default=Template.bind({});Default.args={modalIsOpen:!0,title:"Python for beginners"},Default.parameters=DirectAccessModal_stories_objectSpread(DirectAccessModal_stories_objectSpread({},Default.parameters),{},{docs:DirectAccessModal_stories_objectSpread(DirectAccessModal_stories_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:DirectAccessModal_stories_objectSpread({originalSource:"(args, etc) => {\n  return <DirectAccessModal storySettings={{\n    locale: args.locale,\n    translation: args?.translation\n  }} {...args} />;\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})},"./src/utils/logging.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cM:()=>log,vU:()=>error});var _index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/index.js"),console=__webpack_require__("./node_modules/console-browserify/index.js");function log(){var _console;_index__WEBPACK_IMPORTED_MODULE_0__.X6&&(_console=console).log.apply(_console,arguments)}function error(){var _console3;_index__WEBPACK_IMPORTED_MODULE_0__.X6&&(_console3=console).error.apply(_console3,arguments)}}}]);