"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2846],{"./src/common/components/NextChakraLink.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_chakra_ui_next_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/next-js/dist/chunk-CFNWCCXK.mjs"),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),next_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/router.js"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/index.js"),_excluded=["href","as","replace","scroll","shallow","children","locale","redirectAfterLogin","onClick"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function NextChakraLink(_ref){var href=_ref.href,as=_ref.as,replace=_ref.replace,scroll=_ref.scroll,shallow=_ref.shallow,children=_ref.children,locale=_ref.locale,redirectAfterLogin=_ref.redirectAfterLogin,_onClick=_ref.onClick,chakraProps=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded),router=(0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();return __jsx(_chakra_ui_next_js__WEBPACK_IMPORTED_MODULE_4__.r,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__.Z)({onClick:function onClick(){redirectAfterLogin&&"string"==typeof href&&href.includes("/login")&&(0,_utils__WEBPACK_IMPORTED_MODULE_2__.Nh)("redirect",null==router?void 0:router.asPath),_onClick()},href,as,replace,locale:locale||(null==router?void 0:router.locale),scroll,shallow},chakraProps),children)}NextChakraLink.displayName="NextChakraLink",NextChakraLink.propTypes={href:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,locale:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,as:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,replace:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,scroll:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,shallow:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,children:prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_6___default().node),prop_types__WEBPACK_IMPORTED_MODULE_6___default().node]).isRequired,redirectAfterLogin:prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool,onClick:prop_types__WEBPACK_IMPORTED_MODULE_6___default().func},NextChakraLink.defaultProps={locale:"",href:"",as:"a",replace:!1,scroll:!0,shallow:!1,redirectAfterLogin:!1,onClick:function onClick(){}},NextChakraLink.__docgenInfo={description:"",methods:[],displayName:"NextChakraLink",props:{locale:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},href:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},as:{defaultValue:{value:"'a'",computed:!1},description:"",type:{name:"string"},required:!1},replace:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},scroll:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},shallow:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},redirectAfterLogin:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onClick:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1},children:{description:"",type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]},required:!0}}};const __WEBPACK_DEFAULT_EXPORT__=NextChakraLink},"./src/common/components/Skeleton.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q4:()=>CardSkeleton});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/color-mode/dist/chunk-7NLW6UB6.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/skeleton/dist/chunk-QTKSMHLN.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/skeleton/dist/chunk-3GRGLNAR.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-5FO2ZLZM.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-MPFPK3CX.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@chakra-ui/skeleton/dist/chunk-OJ7ITIQ2.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@chakra-ui/avatar/dist/chunk-ZYO64PFG.mjs"),_hooks_useStyle__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/common/hooks/useStyle.js"),_excluded=["withoutContainer","quantity","templateColumns","gridGap","cardWidth","cardHeight","cardRadius"],_excluded2=["withText","quantity","templateColumns","gridAutoRows","gridGap"],_excluded3=["quantity"],_excluded4=["width","height"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function MDSkeleton(){var commonStartColor=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ff)("gray.300","gray.light"),commonEndColor=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ff)("gray.400","gray.400");return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.xu,{padding:"2",bg:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ff)("white","dark")},__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.N,{startColor:commonStartColor,endColor:commonEndColor,color:"white",width:"60%",mt:"6",noOfLines:1,spacing:"4"}),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.N,{startColor:commonStartColor,endColor:commonEndColor,width:"100%",mt:"8",noOfLines:4,spacing:"4"}),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.xu,{padding:"6",marginY:"8",borderRadius:"8px",bg:"black"},__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.N,{startColor:commonStartColor,endColor:commonEndColor,width:"100%",noOfLines:2,spacing:"4"})),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.N,{startColor:commonStartColor,endColor:commonEndColor,width:"100%",mt:"8",noOfLines:4,spacing:"4"}),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.xu,{padding:"6",marginY:"8",borderRadius:"8px",bg:"black"},__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.N,{startColor:commonStartColor,endColor:commonEndColor,width:"50%",noOfLines:1,spacing:"4"})),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.N,{startColor:commonStartColor,endColor:commonEndColor,width:"100%",mt:"14",ml:"0",noOfLines:3,spacing:"4"}),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.N,{startColor:commonStartColor,endColor:commonEndColor,width:"80%",mt:"8",ml:"10",noOfLines:4,spacing:"8"}))}function ModuleMapSkeleton(){var commonStartColor=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ff)("gray.300","gray.light"),commonEndColor=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ff)("gray.400","gray.400");return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.xu,{padding:"2",bg:(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ff)("white","dark")},__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.O,{startColor:commonStartColor,endColor:commonEndColor,height:"38px",color:"white",borderRadius:"10px",width:"100%",mt:"6"}),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.N,{startColor:commonStartColor,endColor:commonEndColor,width:"100%",mt:"8",noOfLines:3,spacing:"4"}),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.O,{startColor:commonStartColor,endColor:commonEndColor,height:"58px",color:"white",borderRadius:"10px",width:"100%",mt:"6"}),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.O,{startColor:commonStartColor,endColor:commonEndColor,height:"58px",color:"white",borderRadius:"10px",width:"100%",mt:"6"}),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.O,{startColor:commonStartColor,endColor:commonEndColor,height:"58px",color:"white",borderRadius:"10px",width:"100%",mt:"6"}),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.O,{startColor:commonStartColor,endColor:commonEndColor,height:"38px",color:"white",borderRadius:"10px",width:"100%",mt:"6"}),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.N,{startColor:commonStartColor,endColor:commonEndColor,width:"100%",mt:"8",noOfLines:3,spacing:"4"}),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.O,{startColor:commonStartColor,endColor:commonEndColor,height:"58px",color:"white",borderRadius:"10px",width:"100%",mt:"6"}),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.O,{startColor:commonStartColor,endColor:commonEndColor,height:"58px",color:"white",borderRadius:"10px",width:"100%",mt:"6"}),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.O,{startColor:commonStartColor,endColor:commonEndColor,height:"58px",color:"white",borderRadius:"10px",width:"100%",mt:"6"}))}function CardSkeleton(_ref){var withoutContainer=_ref.withoutContainer,quantity=_ref.quantity,templateColumns=_ref.templateColumns,gridGap=_ref.gridGap,cardWidth=_ref.cardWidth,cardHeight=_ref.cardHeight,cardRadius=_ref.cardRadius,rest=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_ref,_excluded),commonStartColor=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ff)("gray.300","gray.light"),commonEndColor=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ff)("gray.400","gray.400");return withoutContainer?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,Array(quantity).fill("l").map((function(_,i){var index=i;return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.O,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_7__.Z)({key:index,width:cardWidth,height:cardHeight,borderRadius:cardRadius,startColor:commonStartColor,endColor:commonEndColor},rest))}))):__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.r,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_7__.Z)({gridTemplateColumns:templateColumns,gridGap},rest),Array(quantity).fill("l").map((function(_,i){var index=i;return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.O,{key:index,width:cardWidth,height:cardHeight,borderRadius:cardRadius,startColor:commonStartColor,endColor:commonEndColor,opacity:1,zIndex:2})})))}function DottedTimelineSkeleton(){var commonStartColor=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ff)("gray.300","gray.light"),commonEndColor=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ff)("gray.400","gray.400"),_useStyle=(0,_hooks_useStyle__WEBPACK_IMPORTED_MODULE_8__.Z)(),borderColor=_useStyle.borderColor,backgroundColor2=_useStyle.backgroundColor2;return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.k,{flexDirection:"column",gridGap:"20px"},Array(3).fill("l").map((function(_,i){var index=i;return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.k,{key:index,borderRadius:"17px",flexDirection:"column",gridGap:"4px",width:"100%",padding:"20px 29px",border:"1px solid",borderColor,background:backgroundColor2},__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.k,{justifyContent:"space-between",fontWeight:700},__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.xu,{display:"flex",width:"100%",alignItems:"center",gridGap:"10px"},__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.s,{startColor:commonStartColor,endColor:commonEndColor,size:"25px"}),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.O,{minHeight:"14px",startColor:commonStartColor,endColor:commonEndColor,width:"200px",color:"white",borderRadius:"17px"})),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.O,{startColor:commonStartColor,endColor:commonEndColor,width:"15%",height:"14px",color:"white",borderRadius:"17px"})),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.O,{mt:"12px",startColor:commonStartColor,endColor:commonEndColor,width:"100%",height:"14px",color:"white",borderRadius:"17px"}))})))}function AvatarSkeleton(_ref2){var withText=_ref2.withText,quantity=_ref2.quantity,templateColumns=_ref2.templateColumns,gridAutoRows=_ref2.gridAutoRows,gridGap=_ref2.gridGap,chakraProps=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_ref2,_excluded2),commonStartColor=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ff)("gray.300","gray.light"),commonEndColor=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ff)("gray.400","gray.400"),arrOfCircles=new Array(quantity).fill(["circles"]);return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,withText&&__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.O,{startColor:commonStartColor,endColor:commonEndColor,width:"50%",height:"18px",color:"white",borderRadius:"10px",mt:"6"}),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.r,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},chakraProps,{pt:chakraProps.pt||"25px",alignItems:"center",justifyItems:"center",gridAutoRows,templateColumns,gridGap}),arrOfCircles.map((function(item,index){var indx=index;return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.s,{key:indx,startColor:commonStartColor,endColor:commonEndColor,size:"10"})}))),arrOfCircles.length>=15&&__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.xu,{padding:"14px 0 0 0"},__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.O,{startColor:commonStartColor,endColor:commonEndColor,height:"21px",width:"138px",color:"white",borderRadius:"10px",margin:"0 auto"})))}function AvatarSkeletonWrapped(_ref3){var quantity=_ref3.quantity,chakraProps=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_ref3,_excluded3),commonStartColor=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ff)("gray.300","gray.light"),commonEndColor=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ff)("gray.400","gray.400"),arrOfCircles=new Array(quantity).fill(["circles"]);return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.H,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_7__.Z)({max:(null==chakraProps?void 0:chakraProps.max)||4},chakraProps),null==arrOfCircles?void 0:arrOfCircles.map((function(c,i){var index=i;return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.s,{key:index,startColor:commonStartColor,endColor:commonEndColor,size:"10"})})))}function SimpleSkeleton(_ref4){var width=_ref4.width,height=_ref4.height,chakraProps=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_ref4,_excluded4),commonStartColor=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ff)("gray.300","gray.light"),commonEndColor=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ff)("gray.400","gray.400");return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.O,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},chakraProps,{width,height,startColor:commonStartColor,endColor:commonEndColor}))}MDSkeleton.displayName="MDSkeleton",ModuleMapSkeleton.displayName="ModuleMapSkeleton",DottedTimelineSkeleton.displayName="DottedTimelineSkeleton",AvatarSkeletonWrapped.displayName="AvatarSkeletonWrapped",SimpleSkeleton.displayName="SimpleSkeleton",CardSkeleton.propTypes={withoutContainer:prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool,quantity:prop_types__WEBPACK_IMPORTED_MODULE_12___default().number,templateColumns:prop_types__WEBPACK_IMPORTED_MODULE_12___default().string,cardWidth:prop_types__WEBPACK_IMPORTED_MODULE_12___default().string,cardHeight:prop_types__WEBPACK_IMPORTED_MODULE_12___default().string,gridGap:prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default().string,prop_types__WEBPACK_IMPORTED_MODULE_12___default().number]),cardRadius:prop_types__WEBPACK_IMPORTED_MODULE_12___default().string},CardSkeleton.defaultProps={withoutContainer:!1,quantity:3,templateColumns:"repeat(auto-fill, minmax(20rem, 1fr))",cardWidth:"100%",cardHeight:"240px",gridGap:"12px",cardRadius:"16px"},SimpleSkeleton.propTypes={width:prop_types__WEBPACK_IMPORTED_MODULE_12___default().string,height:prop_types__WEBPACK_IMPORTED_MODULE_12___default().string},SimpleSkeleton.defaultProps={width:"100%",height:"100%"},AvatarSkeleton.propTypes={withText:prop_types__WEBPACK_IMPORTED_MODULE_12___default().bool,quantity:prop_types__WEBPACK_IMPORTED_MODULE_12___default().number,templateColumns:prop_types__WEBPACK_IMPORTED_MODULE_12___default().string,gridAutoRows:prop_types__WEBPACK_IMPORTED_MODULE_12___default().string,gridGap:prop_types__WEBPACK_IMPORTED_MODULE_12___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_12___default().string,prop_types__WEBPACK_IMPORTED_MODULE_12___default().number])},AvatarSkeleton.defaultProps={withText:!1,quantity:3,templateColumns:"repeat(auto-fill, minmax(3.5rem, 1fr))",gridAutoRows:"3.4rem",gridGap:0},AvatarSkeletonWrapped.propTypes={quantity:prop_types__WEBPACK_IMPORTED_MODULE_12___default().number},AvatarSkeletonWrapped.defaultProps={quantity:3},MDSkeleton.__docgenInfo={description:"",methods:[],displayName:"MDSkeleton"},ModuleMapSkeleton.__docgenInfo={description:"",methods:[],displayName:"ModuleMapSkeleton"},CardSkeleton.__docgenInfo={description:"",methods:[],displayName:"CardSkeleton",props:{withoutContainer:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},quantity:{defaultValue:{value:"3",computed:!1},description:"",type:{name:"number"},required:!1},templateColumns:{defaultValue:{value:"'repeat(auto-fill, minmax(20rem, 1fr))'",computed:!1},description:"",type:{name:"string"},required:!1},cardWidth:{defaultValue:{value:"'100%'",computed:!1},description:"",type:{name:"string"},required:!1},cardHeight:{defaultValue:{value:"'240px'",computed:!1},description:"",type:{name:"string"},required:!1},gridGap:{defaultValue:{value:"'12px'",computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},cardRadius:{defaultValue:{value:"'16px'",computed:!1},description:"",type:{name:"string"},required:!1}}},DottedTimelineSkeleton.__docgenInfo={description:"",methods:[],displayName:"DottedTimelineSkeleton"},AvatarSkeleton.__docgenInfo={description:"",methods:[],displayName:"AvatarSkeleton",props:{withText:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},quantity:{defaultValue:{value:"3",computed:!1},description:"",type:{name:"number"},required:!1},templateColumns:{defaultValue:{value:"'repeat(auto-fill, minmax(3.5rem, 1fr))'",computed:!1},description:"",type:{name:"string"},required:!1},gridAutoRows:{defaultValue:{value:"'3.4rem'",computed:!1},description:"",type:{name:"string"},required:!1},gridGap:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1}}},AvatarSkeletonWrapped.__docgenInfo={description:"",methods:[],displayName:"AvatarSkeletonWrapped",props:{quantity:{defaultValue:{value:"3",computed:!1},description:"",type:{name:"number"},required:!1}}},SimpleSkeleton.__docgenInfo={description:"",methods:[],displayName:"SimpleSkeleton",props:{width:{defaultValue:{value:"'100%'",computed:!1},description:"",type:{name:"string"},required:!1},height:{defaultValue:{value:"'100%'",computed:!1},description:"",type:{name:"string"},required:!1}}}}}]);