"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7861],{"./src/stories/PaginationView.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ContentPerPage30:()=>ContentPerPage30,Default:()=>Default,FilteredByLang:()=>FilteredByLang,MiddleOfPagination:()=>MiddleOfPagination,default:()=>PaginationView_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),head=__webpack_require__("./node_modules/next/head.js"),head_default=__webpack_require__.n(head),next_router=__webpack_require__("./node_modules/next/router.js"),chunk_6CSUKJP7=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),chunk_7NLW6UB6=__webpack_require__("./node_modules/@chakra-ui/color-mode/dist/chunk-7NLW6UB6.mjs"),chunk_MPFPK3CX=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-MPFPK3CX.mjs"),useTranslation=__webpack_require__("./node_modules/next-translate/lib/esm/useTranslation.js"),react_masonry_css_module=__webpack_require__("./node_modules/react-masonry-css/dist/react-masonry-css.module.js"),utils=__webpack_require__("./src/utils/index.js"),Heading=__webpack_require__("./src/common/components/Heading.jsx"),NextChakraLink=__webpack_require__("./src/common/components/NextChakraLink.jsx"),TagCapsule=__webpack_require__("./src/common/components/TagCapsule.jsx"),Text=__webpack_require__("./src/common/components/Text.jsx"),Icon=__webpack_require__("./src/common/components/Icon/index.jsx"),useStyle=__webpack_require__("./src/common/hooks/useStyle.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),chunk_E3YVMML4=__webpack_require__("./node_modules/@chakra-ui/image/dist/chunk-E3YVMML4.mjs"),_excluded=["width","height"],__jsx=react.createElement;function LoaderScreen(_ref){var width=_ref.width,height=_ref.height,rest=(0,objectWithoutProperties.Z)(_ref,_excluded),backgroundColor=(0,useStyle.Z)().backgroundColor;return __jsx(chunk_6CSUKJP7.xu,(0,esm_extends.Z)({display:"flex",alignItems:"center",position:"absolute",background:backgroundColor,justifyContent:"center",width:"100%",height:"100%",style:{zIndex:50},top:"0px",left:"0px"},rest),__jsx(chunk_E3YVMML4.E,{src:"/static/images/loader.gif",width,height,alt:"loader"}))}LoaderScreen.displayName="LoaderScreen",LoaderScreen.propTypes={width:prop_types_default().string,height:prop_types_default().string},LoaderScreen.defaultProps={width:"200px",height:"200px"},LoaderScreen.__docgenInfo={description:"",methods:[],displayName:"LoaderScreen",props:{width:{defaultValue:{value:"'200px'",computed:!1},description:"",type:{name:"string"},required:!1},height:{defaultValue:{value:"'200px'",computed:!1},description:"",type:{name:"string"},required:!1}}};const components_LoaderScreen=LoaderScreen;var requests=__webpack_require__("./src/utils/requests.js"),ProjectList_jsx=react.createElement,ProjectList=(0,react.forwardRef)((function(_ref,ref){var projects=_ref.projects,projectPath=_ref.projectPath,pathWithDifficulty=_ref.pathWithDifficulty,withoutImage=_ref.withoutImage,isLoading=_ref.isLoading,withoutDifficulty=_ref.withoutDifficulty,isDynamic=_ref.isDynamic,notFoundMessage=_ref.notFoundMessage,t=(0,useTranslation.Z)("common").t,_useStyle=(0,useStyle.Z)(),featuredColor=_useStyle.featuredColor,fontColor2=_useStyle.fontColor2,getAssetPath=function getAssetPath(asset){var _asset$category,_asset$category2,_asset$asset_type,_asset$asset_type2,_asset$asset_type3;return"how-to"===(null==asset||null===(_asset$category=asset.category)||void 0===_asset$category?void 0:_asset$category.slug)||"como"===(null==asset||null===(_asset$category2=asset.category)||void 0===_asset$category2?void 0:_asset$category2.slug)?"how-to":"LESSON"===(null==asset||null===(_asset$asset_type=asset.asset_type)||void 0===_asset$asset_type?void 0:_asset$asset_type.toUpperCase())?"lesson":"EXERCISE"===(null==asset||null===(_asset$asset_type2=asset.asset_type)||void 0===_asset$asset_type2?void 0:_asset$asset_type2.toUpperCase())?"interactive-exercise":"PROJECT"===(null==asset||null===(_asset$asset_type3=asset.asset_type)||void 0===_asset$asset_type3?void 0:_asset$asset_type3.toUpperCase())?"interactive-coding-tutorial":"lesson"},getDifficultyColors=function getDifficultyColors(currDifficulty){return{bg:{beginner:"featuredLight",easy:"featuredLight",intermediate:"yellow.100",hard:"red.light"}[currDifficulty],color:{beginner:"blue.default",easy:"blue.default",intermediate:"#FFB718",hard:"danger"}[currDifficulty]}};return ProjectList_jsx(react.Fragment,null,ProjectList_jsx(react_masonry_css_module.Z,{breakpointCols:{default:3,1100:3,700:2,500:1},className:"masonry-grid",columnClassName:"masonry-grid_column"},projects.map((function(ex){var _ex$technologies,isLesson=isDynamic&&"lesson"===getAssetPath(ex),isExercise=isDynamic&&"interactive-exercise"===getAssetPath(ex),isProject=isDynamic&&"interactive-coding-tutorial"===getAssetPath(ex),isHowTo=isDynamic&&"how-to"===getAssetPath(ex),technologies=(null==ex||null===(_ex$technologies=ex.technologies)||void 0===_ex$technologies?void 0:_ex$technologies.length)>0?function getArrayOfTechnologies(technologies){return technologies.map((function(tech){return null==tech?void 0:tech.title}))}(ex.technologies):[],lang="us"===(null==ex?void 0:ex.lang)?"":"/".concat(null==ex?void 0:ex.lang);return ProjectList_jsx(chunk_6CSUKJP7.xu,{ref:ref||null,key:"".concat(ex.slug,"-").concat(ex.difficulty),border:(0,chunk_7NLW6UB6.ff)("1px solid #DADADA","none"),className:"card pointer masonry-brick",bg:(0,chunk_7NLW6UB6.ff)("white","gray.800"),borderRadius:"16px",padding:"21px 22px 22px 22px"},ProjectList_jsx(chunk_6CSUKJP7.xu,{display:{base:"flex",md:"inline-block"},gridGap:"15px",flexDirection:{base:withoutImage?"column":"row",md:"row"},role:"group",w:"full",zIndex:1,borderRadius:"10px",className:"masonry-content"},ProjectList_jsx(chunk_6CSUKJP7.xu,{display:"flex",flexDirection:"column"},technologies.length>=1&&ProjectList_jsx(TagCapsule.Z,{tags:technologies.slice(0,3),variant:"rounded",borderRadius:"10px",marginY:"8px",style:{padding:"4px 10px",margin:"0"},gap:"10px",paddingX:"0",key:"".concat(ex.slug,"-").concat(ex.difficulty)}),ProjectList_jsx(Heading.Z,{size:"m",textAlign:"left",wordBreak:"break-word",width:"100%",fontFamily:"body",fontWeight:700},ex.title||t("no-title")),!withoutDifficulty&&ProjectList_jsx(chunk_MPFPK3CX.k,{alignItems:"center",justifyContent:"space-between"},ProjectList_jsx(chunk_6CSUKJP7.xu,null,ProjectList_jsx(TagCapsule.Z,{tags:[ex.difficulty],background:getDifficultyColors(ex.difficulty).bg,color:getDifficultyColors(ex.difficulty).color,fontWeight:700})),(null==ex?void 0:ex.solution_video_url)&&ProjectList_jsx(chunk_6CSUKJP7.xu,{background:featuredColor,borderRadius:"15px",padding:"6px 12px"},ProjectList_jsx(Icon.Z,{icon:"camera",width:"22px",height:"22px"}))),(null==ex?void 0:ex.description)&&ProjectList_jsx(Text.Z,{color:fontColor2,textAlign:"left",width:"100%",size:"l"},ex.description),ProjectList_jsx(NextChakraLink.Z,{variant:"buttonDefault",mt:"13px",width:"fit-content",href:function getLink(){return isLesson?"".concat(lang,"/lesson/").concat(ex.slug):isExercise?"".concat(lang,"/interactive-exercise/").concat(ex.slug):isProject?"".concat(lang,"/interactive-coding-tutorial/").concat(ex.slug):isHowTo?"".concat(lang,"/how-to/").concat(ex.slug):"/".concat(projectPath).concat(function checkIsPathDifficulty(thisDifficulty){return pathWithDifficulty?"/".concat(thisDifficulty):""}(ex.difficulty),"/").concat(ex.slug)}(),display:"inline-block",zIndex:1,padding:"6px 15px",fontSize:"15px",letterSpacing:"0.05em",onClick:function onClick(){(0,requests._1)({dataLayer:{event:"select_content",asset_slug:ex.slug,asset_title:ex.title,asset_lang:ex.lang,asset_category:ex.category.slug}})}},function getButtonTitle(asset){var _asset$category3,_asset$category4;return"how-to"===(null==asset||null===(_asset$category3=asset.category)||void 0===_asset$category3?void 0:_asset$category3.slug)||"como"===(null==asset||null===(_asset$category4=asset.category)||void 0===_asset$category4?void 0:_asset$category4.slug)?(0,utils.fp)(t("asset-button.article")):(0,utils.fp)(t("asset-button.".concat(asset.asset_type.toLowerCase())))}(ex)))))}))),isLoading&&ProjectList_jsx(chunk_6CSUKJP7.xu,{display:"flex",justifyContent:"center",mt:"2rem",mb:"10rem",position:"relative"},ProjectList_jsx(components_LoaderScreen,{width:"80px",height:"80px"})),0===projects.length&&ProjectList_jsx(chunk_6CSUKJP7.xu,{height:"50vh",width:"100%"},ProjectList_jsx(Text.Z,{size:"20px",padding:"30px 0",textAlign:"center",fontWeight:500},notFoundMessage||t("search-not-found"))))}));ProjectList.propTypes={notFoundMessage:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().node]),projects:prop_types_default().arrayOf(prop_types_default().objectOf(prop_types_default().oneOfType([prop_types_default().any]))).isRequired,projectPath:prop_types_default().string,pathWithDifficulty:prop_types_default().bool,withoutImage:prop_types_default().bool,isLoading:prop_types_default().bool,withoutDifficulty:prop_types_default().bool,isDynamic:prop_types_default().bool},ProjectList.defaultProps={notFoundMessage:"",projectPath:"",pathWithDifficulty:!1,withoutImage:!1,isLoading:!1,withoutDifficulty:!1,isDynamic:!0},ProjectList.__docgenInfo={description:"",methods:[],displayName:"ProjectList",props:{notFoundMessage:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1},projectPath:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},pathWithDifficulty:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},withoutImage:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isLoading:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},withoutDifficulty:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},isDynamic:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},projects:{description:"",type:{name:"arrayOf",value:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}}},required:!0}}};const projects_ProjectList=ProjectList;var chunk_Z47J5YMH=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-Z47J5YMH.mjs"),chunk_NAA7TEES=__webpack_require__("./node_modules/@chakra-ui/button/dist/chunk-NAA7TEES.mjs"),PageIndexes_excluded=["currentPage","pages","handlePageChange"],PageIndexes_jsx=react.createElement;function PageIndexes(_ref){var currentPage=_ref.currentPage,pages=_ref.pages,handlePageChange=_ref.handlePageChange,rest=(0,objectWithoutProperties.Z)(_ref,PageIndexes_excluded),totalPages=(null==pages?void 0:pages.length)||0,pageIndices=[1],start=Math.max(2,currentPage-2),end=Math.min(totalPages-1,currentPage+2);start>2&&pageIndices.push("...");for(var i=start;i<=end;i+=1)pageIndices.push(i);return end<totalPages-1&&pageIndices.push("..."),pageIndices.push(totalPages),currentPage&&PageIndexes_jsx(chunk_Z47J5YMH.QI,(0,esm_extends.Z)({display:"flex",justifyContent:"center",gridGap:"16px"},rest),pageIndices.map((function(pageIndex){return pages[pageIndex-1]&&currentPage!==pageIndex?PageIndexes_jsx(chunk_Z47J5YMH.HC,{display:"inherit",key:"".concat(pageIndex," - ").concat(pages[pageIndex-1])},null!==handlePageChange?PageIndexes_jsx(chunk_NAA7TEES.z,{variant:"default",onClick:function onClick(){return handlePageChange({path:pages[pageIndex-1],page:pageIndex})},padding:"8px 14px",minHeight:"auto",height:"auto"},pageIndex):PageIndexes_jsx(NextChakraLink.Z,{variant:"buttonDefault",colorScheme:"blue.default",padding:"8px 14px",minHeight:"auto",_hover:{background:"blue.600"},height:"auto",href:pages[pageIndex-1]},pageIndex)):PageIndexes_jsx(chunk_NAA7TEES.z,{variant:"default",background:"gray.800",cursor:"default",padding:"8px 14px",minHeight:"auto",height:"auto"},currentPage===pageIndex?pageIndex:"...")})))}PageIndexes.propTypes={currentPage:prop_types_default().number.isRequired,pages:prop_types_default().arrayOf(prop_types_default().oneOfType([prop_types_default().any])).isRequired,handlePageChange:prop_types_default().func},PageIndexes.defaultProps={handlePageChange:null},PageIndexes.__docgenInfo={description:"",methods:[],displayName:"PageIndexes",props:{handlePageChange:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1},currentPage:{description:"",type:{name:"number"},required:!0},pages:{description:"",type:{name:"arrayOf",value:{name:"union",value:[{name:"any"}]}},required:!0}}};const PaginationView_PageIndexes=PageIndexes;var Skeleton=__webpack_require__("./src/common/components/Skeleton.jsx"),variables=__webpack_require__("./src/utils/variables.js"),PaginationView_jsx=react.createElement;function PaginatedView(_ref){var _pageProps$pagesArray4,_pageProps$pagesArray5,_pageProps$pagesArray6,_data$results,storyConfig=_ref.storyConfig,renderComponent=_ref.renderComponent,handlePageChange=_ref.handlePageChange,queryFunction=_ref.queryFunction,options=_ref.options,_useState=(0,react.useState)([]),data=_useState[0],setData=_useState[1],_useState2=(0,react.useState)({}),pageProps=_useState2[0],setPageProps=_useState2[1],router=(0,next_router.useRouter)(),locales=router.locales,locale=(null==storyConfig?void 0:storyConfig.locale)||(null==router?void 0:router.locale)||"en",page=(null==storyConfig?void 0:storyConfig.page)||(0,utils.Wz)("page",1),contentPerPage=(null==options?void 0:options.contentPerPage)||20,listToTop=(null==options?void 0:options.listToTop)||!1,listToBottom=(null==options?void 0:options.listToBottom)||!0,pagePath=(null==options?void 0:options.pagePath)||"/",disableLangFilter=(null==options?void 0:options.disableLangFilter)||!1,locationLang={us:"en",en:"en",es:"es"},handlePaginationProps=function(){var _ref2=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(){var respData,pages,pagesArray;return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,queryFunction();case 2:respData=_context.sent,pages=Math.ceil(respData.count/contentPerPage),pagesArray=Array.from(Array(pages).keys()).map((function(item){return"".concat(pagePath,"?page=").concat(item+1)})),page&&(setPageProps({pages,currentPage:parseInt(page,10),pagesArray}),setData(respData));case 6:case"end":return _context.stop()}}),_callee)})));return function handlePaginationProps(){return _ref2.apply(this,arguments)}}();(0,react.useEffect)((function(){handlePaginationProps()}),[page,queryFunction]);var currentPageIndex=parseInt(page,10),pageIndexes=function getPageIndexes(){var _pageProps$pagesArray,_pageProps$pagesArray2,_pageProps$pagesArray3,pageIndexes=[];(pageIndexes.push(currentPageIndex),currentPageIndex>0&&pageIndexes.unshift(currentPageIndex-1),currentPageIndex<(null==pageProps||null===(_pageProps$pagesArray=pageProps.pagesArray)||void 0===_pageProps$pagesArray?void 0:_pageProps$pagesArray.length)-1&&pageIndexes.push(currentPageIndex+1),pageIndexes[0]>0&&pageIndexes.unshift(0),pageIndexes[pageIndexes.length-1]<(null==pageProps||null===(_pageProps$pagesArray2=pageProps.pagesArray)||void 0===_pageProps$pagesArray2?void 0:_pageProps$pagesArray2.length)-1)&&pageIndexes.push((null==pageProps||null===(_pageProps$pagesArray3=pageProps.pagesArray)||void 0===_pageProps$pagesArray3?void 0:_pageProps$pagesArray3.length)-1);return pageIndexes}(),nextPagePath=null==pageProps||null===(_pageProps$pagesArray4=pageProps.pagesArray)||void 0===_pageProps$pagesArray4?void 0:_pageProps$pagesArray4[currentPageIndex],currentPagePath=null==pageProps||null===(_pageProps$pagesArray5=pageProps.pagesArray)||void 0===_pageProps$pagesArray5?void 0:_pageProps$pagesArray5[currentPageIndex-1],prevPagePath=null==pageProps||null===(_pageProps$pagesArray6=pageProps.pagesArray)||void 0===_pageProps$pagesArray6?void 0:_pageProps$pagesArray6[currentPageIndex-2],indexPageExists=prevPagePath||nextPagePath,langs={en:"en",us:"en"},resultsFilteredByLang=!disableLangFilter&&(null==data||null===(_data$results=data.results)||void 0===_data$results?void 0:_data$results.length)>0?data.results.filter((function(asset){return(langs[null==asset?void 0:asset.lang]||(null==asset?void 0:asset.lang))===locale})):data.results;return(0,utils.hj)(null==pageProps?void 0:pageProps.currentPage)?PaginationView_jsx(chunk_6CSUKJP7.xu,null,PaginationView_jsx(head_default(),null,PaginationView_jsx("link",{rel:"canonical",href:"".concat(variables.fh).concat(pagePath)}),prevPagePath&&PaginationView_jsx("link",{rel:"prev",href:prevPagePath}),nextPagePath&&PaginationView_jsx("link",{rel:"next",href:nextPagePath}),locales.map((function(lang){return["default","en"].includes(lang)?PaginationView_jsx(react.Fragment,{key:"".concat(lang," - ").concat(currentPagePath)},PaginationView_jsx("link",{rel:"alternate",hrefLang:"x-default",href:"https://4geeks.com".concat(currentPagePath)}),PaginationView_jsx("link",{rel:"alternate",hrefLang:locationLang[lang],href:"https://4geeks.com".concat(currentPagePath)})):PaginationView_jsx("link",{key:"".concat(lang," - ").concat(currentPagePath," alternate"),rel:"alternate",hrefLang:locationLang[lang],href:"https://4geeks.com/".concat(lang).concat(currentPagePath)})}))),indexPageExists&&listToTop&&(null==pageProps?void 0:pageProps.pages)>0&&(null==pageIndexes?void 0:pageIndexes.length)>1&&(null==pageProps?void 0:pageProps.currentPage)&&PaginationView_jsx(PaginationView_PageIndexes,{pages:null==pageProps?void 0:pageProps.pagesArray,currentPage:null==pageProps?void 0:pageProps.currentPage,handlePageChange,margin:"0 0 3rem 0"}),"function"==typeof renderComponent&&(null==resultsFilteredByLang?void 0:resultsFilteredByLang.length)>0?resultsFilteredByLang.map((function(item,index){return PaginationView_jsx(chunk_6CSUKJP7.xu,{key:index},renderComponent(item))})):PaginationView_jsx(projects_ProjectList,{projects:resultsFilteredByLang||[],withoutDifficulty:!0,contextFilter:null==options?void 0:options.contextFilter}),indexPageExists&&listToBottom&&(null==pageProps?void 0:pageProps.pages)>1&&(null==pageIndexes?void 0:pageIndexes.length)>1&&(null==pageProps?void 0:pageProps.currentPage)&&PaginationView_jsx(PaginationView_PageIndexes,{pages:null==pageProps?void 0:pageProps.pagesArray,currentPage:null==pageProps?void 0:pageProps.currentPage,handlePageChange,margin:"4rem 0 0 0"})):PaginationView_jsx(Skeleton.q4,{quantity:6})}PaginatedView.propTypes={storyConfig:prop_types_default().objectOf(prop_types_default().oneOfType([prop_types_default().any])),renderComponent:prop_types_default().func,queryFunction:prop_types_default().func.isRequired,options:prop_types_default().objectOf(prop_types_default().oneOfType([prop_types_default().any])),handlePageChange:prop_types_default().func},PaginatedView.defaultProps={storyConfig:{},renderComponent:null,options:{},handlePageChange:null},PaginatedView.__docgenInfo={description:"",methods:[],displayName:"PaginatedView",props:{storyConfig:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}},required:!1},renderComponent:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1},options:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}},required:!1},handlePageChange:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1},queryFunction:{description:"",type:{name:"func"},required:!0}}};const PaginationView=PaginatedView;var _Default$parameters,_Default$parameters2,_ContentPerPage30$par,_ContentPerPage30$par2,_MiddleOfPagination$p,_MiddleOfPagination$p2,_FilteredByLang$param,_FilteredByLang$param2,console=__webpack_require__("./node_modules/console-browserify/index.js"),PaginationView_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const PaginationView_stories={title:"Components/PaginatedView",component:PaginationView,argTypes:{page:{control:{type:"number",min:1,max:60}}}};var Component=function Component(args){var page=(null==args?void 0:args.page)||getQueryString("page",1),contentPerPage=(null==args?void 0:args.contentPerPage)||5,startIndex=(page-1)*contentPerPage,queryFunction=function(){var _ref=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(){var lessonResp,data;return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,fetch("https://breathecode-test.herokuapp.com/v1/registry/asset?asset_type=lesson&limit=".concat(contentPerPage,"&offset=").concat(startIndex));case 2:return lessonResp=_context.sent,_context.next=5,lessonResp.json();case 5:return data=_context.sent,_context.abrupt("return",data);case 7:case"end":return _context.stop()}}),_callee)})));return function queryFunction(){return _ref.apply(this,arguments)}}();return PaginationView_stories_jsx(PaginationView,{storyConfig:args,queryFunction,options:{projectPath:(null==args?void 0:args.projectPath)||"lesson",pagePath:(null==args?void 0:args.pagePath)||"/",contentPerPage,disableLangFilter:null==args?void 0:args.disableLangFilter},handlePageChange:function handlePageChange(props){console.log("handlePageChange:",props)}})};Component.displayName="Component";var Default=Component.bind({});Default.args={page:1,projectPath:"lesson",pagePath:"/",contentPerPage:5,disableLangFilter:!0};var ContentPerPage30=Component.bind({});ContentPerPage30.args={page:1,projectPath:"lesson",pagePath:"/",contentPerPage:30,disableLangFilter:!0};var MiddleOfPagination=Component.bind({});MiddleOfPagination.args={page:5,projectPath:"lesson",pagePath:"/",contentPerPage:20,disableLangFilter:!0};var FilteredByLang=Component.bind({});FilteredByLang.args={page:1,projectPath:"lesson",pagePath:"/",contentPerPage:20,disableLangFilter:!1},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => {\n  const page = args?.page || getQueryString('page', 1);\n  const handlePageChange = props => {\n    console.log('handlePageChange:', props);\n  };\n  const contentPerPage = args?.contentPerPage || 5;\n  const startIndex = (page - 1) * contentPerPage;\n  const queryFunction = async () => {\n    const lessonResp = await fetch(`https://breathecode-test.herokuapp.com/v1/registry/asset?asset_type=lesson&limit=${contentPerPage}&offset=${startIndex}`);\n    const data = await lessonResp.json();\n    return data;\n  };\n  return <PaginatedView storyConfig={args} queryFunction={queryFunction} options={{\n    projectPath: args?.projectPath || 'lesson',\n    pagePath: args?.pagePath || '/',\n    contentPerPage,\n    disableLangFilter: args?.disableLangFilter\n  }} handlePageChange={handlePageChange} />;\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),ContentPerPage30.parameters=_objectSpread(_objectSpread({},ContentPerPage30.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ContentPerPage30$par=ContentPerPage30.parameters)||void 0===_ContentPerPage30$par?void 0:_ContentPerPage30$par.docs),{},{source:_objectSpread({originalSource:"args => {\n  const page = args?.page || getQueryString('page', 1);\n  const handlePageChange = props => {\n    console.log('handlePageChange:', props);\n  };\n  const contentPerPage = args?.contentPerPage || 5;\n  const startIndex = (page - 1) * contentPerPage;\n  const queryFunction = async () => {\n    const lessonResp = await fetch(`https://breathecode-test.herokuapp.com/v1/registry/asset?asset_type=lesson&limit=${contentPerPage}&offset=${startIndex}`);\n    const data = await lessonResp.json();\n    return data;\n  };\n  return <PaginatedView storyConfig={args} queryFunction={queryFunction} options={{\n    projectPath: args?.projectPath || 'lesson',\n    pagePath: args?.pagePath || '/',\n    contentPerPage,\n    disableLangFilter: args?.disableLangFilter\n  }} handlePageChange={handlePageChange} />;\n}"},null===(_ContentPerPage30$par2=ContentPerPage30.parameters)||void 0===_ContentPerPage30$par2||null===(_ContentPerPage30$par2=_ContentPerPage30$par2.docs)||void 0===_ContentPerPage30$par2?void 0:_ContentPerPage30$par2.source)})}),MiddleOfPagination.parameters=_objectSpread(_objectSpread({},MiddleOfPagination.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_MiddleOfPagination$p=MiddleOfPagination.parameters)||void 0===_MiddleOfPagination$p?void 0:_MiddleOfPagination$p.docs),{},{source:_objectSpread({originalSource:"args => {\n  const page = args?.page || getQueryString('page', 1);\n  const handlePageChange = props => {\n    console.log('handlePageChange:', props);\n  };\n  const contentPerPage = args?.contentPerPage || 5;\n  const startIndex = (page - 1) * contentPerPage;\n  const queryFunction = async () => {\n    const lessonResp = await fetch(`https://breathecode-test.herokuapp.com/v1/registry/asset?asset_type=lesson&limit=${contentPerPage}&offset=${startIndex}`);\n    const data = await lessonResp.json();\n    return data;\n  };\n  return <PaginatedView storyConfig={args} queryFunction={queryFunction} options={{\n    projectPath: args?.projectPath || 'lesson',\n    pagePath: args?.pagePath || '/',\n    contentPerPage,\n    disableLangFilter: args?.disableLangFilter\n  }} handlePageChange={handlePageChange} />;\n}"},null===(_MiddleOfPagination$p2=MiddleOfPagination.parameters)||void 0===_MiddleOfPagination$p2||null===(_MiddleOfPagination$p2=_MiddleOfPagination$p2.docs)||void 0===_MiddleOfPagination$p2?void 0:_MiddleOfPagination$p2.source)})}),FilteredByLang.parameters=_objectSpread(_objectSpread({},FilteredByLang.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_FilteredByLang$param=FilteredByLang.parameters)||void 0===_FilteredByLang$param?void 0:_FilteredByLang$param.docs),{},{source:_objectSpread({originalSource:"args => {\n  const page = args?.page || getQueryString('page', 1);\n  const handlePageChange = props => {\n    console.log('handlePageChange:', props);\n  };\n  const contentPerPage = args?.contentPerPage || 5;\n  const startIndex = (page - 1) * contentPerPage;\n  const queryFunction = async () => {\n    const lessonResp = await fetch(`https://breathecode-test.herokuapp.com/v1/registry/asset?asset_type=lesson&limit=${contentPerPage}&offset=${startIndex}`);\n    const data = await lessonResp.json();\n    return data;\n  };\n  return <PaginatedView storyConfig={args} queryFunction={queryFunction} options={{\n    projectPath: args?.projectPath || 'lesson',\n    pagePath: args?.pagePath || '/',\n    contentPerPage,\n    disableLangFilter: args?.disableLangFilter\n  }} handlePageChange={handlePageChange} />;\n}"},null===(_FilteredByLang$param2=FilteredByLang.parameters)||void 0===_FilteredByLang$param2||null===(_FilteredByLang$param2=_FilteredByLang$param2.docs)||void 0===_FilteredByLang$param2?void 0:_FilteredByLang$param2.source)})})},"./src/common/components/TagCapsule.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/color-mode/dist/chunk-7NLW6UB6.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-O5CRURSQ.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),prop_types__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__),next_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/router.js"),_Text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/common/components/Text.jsx"),_NextChakraLink__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/common/components/NextChakraLink.jsx"),_excluded=["tags","separator","background","color","variant","paddingX","marginY","gap","style","fontSize","containerStyle","fontWeight","isLink","href","borderRadius","lineHeight"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function TagCapsule(_ref){var tags=_ref.tags,separator=_ref.separator,background=_ref.background,color=_ref.color,variant=_ref.variant,paddingX=_ref.paddingX,marginY=_ref.marginY,gap=_ref.gap,style=_ref.style,fontSize=_ref.fontSize,containerStyle=_ref.containerStyle,fontWeight=_ref.fontWeight,isLink=_ref.isLink,borderRadius=(_ref.href,_ref.borderRadius),lineHeight=_ref.lineHeight,rest=(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref,_excluded),router=((0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.If)().colorMode,(0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)()),langPrefix="en"===router.locale?"":"".concat(router.locale,"/");return(null==tags?void 0:tags.length)>0&&__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.K,(0,_home_runner_work_app_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_7__.Z)({bg:"rounded"===variant?"none":background,as:"ul",flexWrap:"wrap",direction:"row",height:"auto",style:containerStyle,my:marginY,width:"fit-content",px:paddingX,borderRadius:"15px",gridGap:gap},rest),tags.map((function(tag,i){var isPublicTechnology="PUBLIC"===(null==tag?void 0:tag.visibility),tagSlug=(null==tag?void 0:tag.slug)||tag,tagTitle=(null==tag?void 0:tag.title)||(null==tag?void 0:tag.name);return isPublicTechnology&&isLink?__jsx(_NextChakraLink__WEBPACK_IMPORTED_MODULE_3__.Z,{href:"/".concat(langPrefix,"technology/").concat(tagSlug),display:"flex",locale:router.locale,cursor:isLink?"pointer":"default",bg:"rounded"===variant?background:"none",direction:"row",padding:"rounded"===variant?"0 10px":"0",style,rounded:"rounded"===variant?borderRadius:"none",key:tagTitle||"".concat(tag,"-").concat(i),lineHeight:"22px",color:"black"},__jsx(_Text__WEBPACK_IMPORTED_MODULE_2__.Z,{margin:"0",alignSelf:"center",letterSpacing:"0.05em",textAlign:"center",size:fontSize,fontWeight,color:"black",textTransform:"uppercase"},tagTitle||tag),"slash"===variant&&i<tags.length-1&&__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.xu,{as:"span",alignSelf:"center",userSelect:"none",fontSize:"15px",mx:"0.5rem"},separator)):__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.xu,{as:"li",display:"flex",bg:"rounded"===variant?background:"none",direction:"row",padding:"rounded"===variant?"0 10px":"0",style,rounded:"rounded"===variant?borderRadius:"none",key:tagTitle||"".concat(tag,"-").concat(i),lineHeight,color:"black"},"slash"===variant&&0!==i&&__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.xu,{as:"span",alignSelf:"center",userSelect:"none",fontSize:"15px",mx:"0.5rem"},separator),__jsx(_Text__WEBPACK_IMPORTED_MODULE_2__.Z,{margin:"0",alignSelf:"center",letterSpacing:"0.05em",textAlign:"center",size:fontSize,fontWeight,color,textTransform:"uppercase"},tagTitle||tag))})))}TagCapsule.propTypes={tags:prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,prop_types__WEBPACK_IMPORTED_MODULE_9___default().array]).isRequired,fontSize:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,separator:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,containerStyle:prop_types__WEBPACK_IMPORTED_MODULE_9___default().objectOf(prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default().any])),background:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,variant:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,paddingX:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,marginY:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,gap:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,style:prop_types__WEBPACK_IMPORTED_MODULE_9___default().shape({}),fontWeight:prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,prop_types__WEBPACK_IMPORTED_MODULE_9___default().number]),isLink:prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool,href:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,borderRadius:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,color:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string,lineHeight:prop_types__WEBPACK_IMPORTED_MODULE_9___default().string},TagCapsule.defaultProps={separator:"/",background:"yellow.light",containerStyle:{},fontSize:"11px",variant:"slash",paddingX:"20px",marginY:"18px",fontWeight:500,gap:"0",style:{margin:"0"},isLink:!1,href:"#",borderRadius:"15px",color:"black",lineHeight:"22px"},TagCapsule.__docgenInfo={description:"",methods:[],displayName:"TagCapsule",props:{separator:{defaultValue:{value:"'/'",computed:!1},description:"",type:{name:"string"},required:!1},background:{defaultValue:{value:"'yellow.light'",computed:!1},description:"",type:{name:"string"},required:!1},containerStyle:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"objectOf",value:{name:"union",value:[{name:"any"}]}},required:!1},fontSize:{defaultValue:{value:"'11px'",computed:!1},description:"",type:{name:"string"},required:!1},variant:{defaultValue:{value:"'slash'",computed:!1},description:"",type:{name:"string"},required:!1},paddingX:{defaultValue:{value:"'20px'",computed:!1},description:"",type:{name:"string"},required:!1},marginY:{defaultValue:{value:"'18px'",computed:!1},description:"",type:{name:"string"},required:!1},fontWeight:{defaultValue:{value:"500",computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},gap:{defaultValue:{value:"'0'",computed:!1},description:"",type:{name:"string"},required:!1},style:{defaultValue:{value:"{\n  margin: '0',\n}",computed:!1},description:"",type:{name:"shape",value:{}},required:!1},isLink:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},href:{defaultValue:{value:"'#'",computed:!1},description:"",type:{name:"string"},required:!1},borderRadius:{defaultValue:{value:"'15px'",computed:!1},description:"",type:{name:"string"},required:!1},color:{defaultValue:{value:"'black'",computed:!1},description:"",type:{name:"string"},required:!1},lineHeight:{defaultValue:{value:"'22px'",computed:!1},description:"",type:{name:"string"},required:!1},tags:{description:"",type:{name:"union",value:[{name:"string"},{name:"array"}]},required:!0}}};const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(TagCapsule)}}]);