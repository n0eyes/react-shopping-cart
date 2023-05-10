"use strict";(self.webpackChunkreact_shopping_cart=self.webpackChunkreact_shopping_cart||[]).push([[68],{"./src/components/ProductPage/ProductItem/ProductItem.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Sample:function(){return Sample},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return ProductItem_stories}});var _templateObject,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Flex=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  flex-direction: ",";\n\n  justify-content: ",";\n  align-items: ",";\n\n  width: ",";\n"])),(function(_ref){var _ref$dir=_ref.dir;return void 0===_ref$dir?"row":_ref$dir}),(function(_ref2){var _ref2$justify=_ref2.justify;return void 0===_ref2$justify?"start":_ref2$justify}),(function(_ref3){var _ref3$align=_ref3.align;return void 0===_ref3$align?"stretch":_ref3$align}),(function(_ref4){var _ref4$width=_ref4.width;return void 0===_ref4$width?"auto":_ref4$width})),common_Flex=Flex;try{Flex.displayName="Flex",Flex.__docgenInfo={description:"",displayName:"Flex",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},justify:{defaultValue:null,description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"space-between"'},{value:'"space-around"'},{value:'"space-evenly"'}]}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"stretch"'},{value:'"end"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},scroll:{defaultValue:null,description:"",name:"scroll",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Flex.tsx#Flex"]={docgenInfo:Flex.__docgenInfo,name:"Flex",path:"src/components/common/Flex.tsx#Flex"})}catch(__react_docgen_typescript_loader_error){}var _get,QuantityStepper_styles_templateObject,toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),es=__webpack_require__("./node_modules/recoil/es/index.js"),regeneratorRuntime=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),axios=__webpack_require__("./node_modules/axios/lib/axios.js"),cartState=(0,es.cn)({key:"cart",default:(0,es.nZ)({key:"getMockCart",get:(_get=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee(){var _yield$axios,data;return(0,regeneratorRuntime.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,(0,axios.Z)("/data/mockCart.json");case 2:return _yield$axios=_context.sent,data=_yield$axios.data,_context.abrupt("return",data.cart);case 5:case"end":return _context.stop()}}),_callee)}))),function get(){return _get.apply(this,arguments)})})}),hasItemInCart=(0,es.CG)({key:"hasItemInCart",get:function get(id){return function(_ref){return(0,_ref.get)(cartState).find((function(item){return item.id===id}))}}}),dist=__webpack_require__("./node_modules/react-tiny-dialog/dist/index.js"),Button_styles=__webpack_require__("./src/components/common/Button/Button.styles.tsx"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./src/components/common/Button/Button.tsx"),Quantity=styled_components_browser_esm.ZP.input(QuantityStepper_styles_templateObject||(QuantityStepper_styles_templateObject=(0,taggedTemplateLiteral.Z)(["\n  width: 4.1rem;\n  height: 3rem;\n  line-height: 2.8rem;\n\n  padding: 0;\n\n  border: 1px solid #bbbbbb;\n\n  font-size: 1.4rem;\n  text-align: center;\n"])));try{Quantity.displayName="Quantity",Quantity.__docgenInfo={description:"",displayName:"Quantity",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/QuantityStepper/QuantityStepper.styles.tsx#Quantity"]={docgenInfo:Quantity.__docgenInfo,name:"Quantity",path:"src/components/common/QuantityStepper/QuantityStepper.styles.tsx#Quantity"})}catch(__react_docgen_typescript_loader_error){}var ItemCartDialog_styles_templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),QuantityStepper=function QuantityStepper(_ref){var label=_ref.label,_useState=(0,react.useState)(1),_useState2=(0,slicedToArray.Z)(_useState,2),quantity=_useState2[0],setQuantity=_useState2[1];return(0,jsx_runtime.jsxs)(common_Flex,{children:[(0,jsx_runtime.jsx)(Button.Z,{size:"S",view:"white",onClick:function decrease(){setQuantity((function(prev){return prev>1?prev-1:prev}))},children:"▼"}),(0,jsx_runtime.jsx)(Quantity,{value:quantity,onChange:function onChange(){},name:label}),(0,jsx_runtime.jsx)(Button.Z,{size:"S",view:"white",onClick:function increase(){setQuantity((function(prev){return prev+1}))},children:"▲"})]})},QuantityStepper_QuantityStepper=QuantityStepper;try{QuantityStepper.displayName="QuantityStepper",QuantityStepper.__docgenInfo={description:"",displayName:"QuantityStepper",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/QuantityStepper/QuantityStepper.tsx#QuantityStepper"]={docgenInfo:QuantityStepper.__docgenInfo,name:"QuantityStepper",path:"src/components/common/QuantityStepper/QuantityStepper.tsx#QuantityStepper"})}catch(__react_docgen_typescript_loader_error){}var CartButton=styled_components_browser_esm.ZP.button(ItemCartDialog_styles_templateObject||(ItemCartDialog_styles_templateObject=(0,taggedTemplateLiteral.Z)(["\n  width: 2.5rem;\n  height: 2.2rem;\n  border: none;\n  background-color: white;\n  padding: 0;\n\n  cursor: pointer;\n"]))),CartImg=styled_components_browser_esm.ZP.img(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  width: 100%;\n"]))),Box=styled_components_browser_esm.ZP.form(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n\n  height: 50rem;\n\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n"]))),Thumbnail=styled_components_browser_esm.ZP.img(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  width: 80%;\n"]))),Name=styled_components_browser_esm.ZP.div(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n  font-size: 2rem;\n"]))),Price=styled_components_browser_esm.ZP.div(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n  font-size: 3rem;\n"])));try{CartButton.displayName="CartButton",CartButton.__docgenInfo={description:"",displayName:"CartButton",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProductPage/ItemCartDialog/ItemCartDialog.styles.tsx#CartButton"]={docgenInfo:CartButton.__docgenInfo,name:"CartButton",path:"src/components/ProductPage/ItemCartDialog/ItemCartDialog.styles.tsx#CartButton"})}catch(__react_docgen_typescript_loader_error){}try{CartImg.displayName="CartImg",CartImg.__docgenInfo={description:"",displayName:"CartImg",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLImageElement | null) => void) | RefObject<HTMLImageElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProductPage/ItemCartDialog/ItemCartDialog.styles.tsx#CartImg"]={docgenInfo:CartImg.__docgenInfo,name:"CartImg",path:"src/components/ProductPage/ItemCartDialog/ItemCartDialog.styles.tsx#CartImg"})}catch(__react_docgen_typescript_loader_error){}try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLFormElement | null) => void) | RefObject<HTMLFormElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProductPage/ItemCartDialog/ItemCartDialog.styles.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"src/components/ProductPage/ItemCartDialog/ItemCartDialog.styles.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}try{Thumbnail.displayName="Thumbnail",Thumbnail.__docgenInfo={description:"",displayName:"Thumbnail",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLImageElement | null) => void) | RefObject<HTMLImageElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProductPage/ItemCartDialog/ItemCartDialog.styles.tsx#Thumbnail"]={docgenInfo:Thumbnail.__docgenInfo,name:"Thumbnail",path:"src/components/ProductPage/ItemCartDialog/ItemCartDialog.styles.tsx#Thumbnail"})}catch(__react_docgen_typescript_loader_error){}try{Name.displayName="Name",Name.__docgenInfo={description:"",displayName:"Name",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProductPage/ItemCartDialog/ItemCartDialog.styles.tsx#Name"]={docgenInfo:Name.__docgenInfo,name:"Name",path:"src/components/ProductPage/ItemCartDialog/ItemCartDialog.styles.tsx#Name"})}catch(__react_docgen_typescript_loader_error){}try{Price.displayName="Price",Price.__docgenInfo={description:"",displayName:"Price",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProductPage/ItemCartDialog/ItemCartDialog.styles.tsx#Price"]={docgenInfo:Price.__docgenInfo,name:"Price",path:"src/components/ProductPage/ItemCartDialog/ItemCartDialog.styles.tsx#Price"})}catch(__react_docgen_typescript_loader_error){}var ProductItem_styles_templateObject,ProductItem_styles_templateObject2,ProductItem_styles_templateObject3,ProductItem_styles_templateObject4,ProductItem_styles_templateObject5,ProductItem_styles_templateObject6,_templateObject7,ItemCartDialog=function ItemCartDialog(props){var id=props.id,name=props.name,price=props.price,imageUrl=props.imageUrl,setCart=(0,es.Zl)(cartState),has=(0,es.sJ)(hasItemInCart(id));return(0,jsx_runtime.jsxs)(dist.V,{children:[(0,jsx_runtime.jsx)(dist.V.Trigger,{asChild:!0,children:(0,jsx_runtime.jsx)(CartButton,{children:(0,jsx_runtime.jsx)(CartImg,{alt:"cart",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAWCAYAAAA1vze2AAACaUlEQVR4Aa1Vy1HjQBDVyLLLt1UGiAjQRoA3AtiDvxdwBCwRLESAMwAOLv/LdgQrIlg5AuQImItv/vCea8Y1qEY2B3XVVKtnuvtNf6YlnBxpOBzegj2nthPPyZFc173abrezzWYzN/ZkriC73S5Yr9ePrVZr9gXcyYmm06kPkFAIEafPxGg0+o9D38mJarXaeXrPUwAx+GKPKsQFWAj59XATIe7AZthbUkaeL5kaU4f1QC2WNmAPhzHy+NZoNDrcGAwG13Aa1uv1B62ErrmBg9dmsxkpnQfoJKYOMnIJFtlAXHTDEkAXxq0TsFPpC3RUmlgPrNimLFRvP+mCqfSxgJHhoAIWY09qh2BSXehgg3oIG4iHNESFQoGdIdnTMHQQXahl5YQ8SYF8ATUvZSVE89HtdsMj8nuv16tkyePx+Lnf73ey/O/fCcMuFouhsc+IAiebAkQrtcBIIEdZyvscolte2LrsNMowqBBY5xwyOy425FuwmU4nZaT9HN2X2EA8dRM6uFG517cLUrq+2vNV9L4qOFeSBUByNQiYrFarv7jwPcft5oYs8Zbu+U1Op/qMelgL5wjtQcrlMkH8yWRypkDZWT+sBq7r67QpOfMRajr0NTuGynxk6dFijhXbGerxW0+DoyAYC08w/IPPBCvAkmqlSddBKp7YhqJJh/+JKuQLDNqIqoM8B5hn12kDNSH+rlarn0hziIc8dU6Q+T/xjQLGyPWZzUB1WNRutyUAdDTOtyJBXhdwfIeXS5E1iGwGfHRw/g96C0R/lTUUrZGUSqUODN4AxGGZIB33NgMWGHqP1OM7YdFPgXwCF/+LIUl/50sAAAAASUVORK5CYII="})})}),(0,jsx_runtime.jsxs)(dist.V.Portal,{children:[(0,jsx_runtime.jsx)(dist.V.BackDrop,{}),(0,jsx_runtime.jsx)(dist.V.Content,{children:(0,jsx_runtime.jsxs)(Box,{onSubmit:function addItemToCart(e){e.preventDefault();var form=e.currentTarget,formData=new FormData(form),fields=Object.fromEntries(formData),quantity=Number(fields["item-quantity"]);setCart((function(cart){return has?cart.map((function(item){return item.id===id?(0,objectSpread2.Z)((0,objectSpread2.Z)({},item),{},{quantity:item.quantity+quantity}):item})):[].concat((0,toConsumableArray.Z)(cart),[{id:id,quantity:quantity,product:{id:id,name:name,price:price,imageUrl:imageUrl}}])}))},children:[(0,jsx_runtime.jsx)(Thumbnail,{src:imageUrl,alt:name}),(0,jsx_runtime.jsx)(Name,{children:name}),(0,jsx_runtime.jsxs)(Price,{children:[price.toLocaleString()," 원"]}),(0,jsx_runtime.jsx)(QuantityStepper_QuantityStepper,{label:"item-quantity"}),(0,jsx_runtime.jsx)(dist.V.Close,{asChild:!0,children:(0,jsx_runtime.jsx)(Button_styles.z,{size:"M",view:"black",type:"submit",children:"추가하기"})})]})})]})]})},ItemCartDialog_ItemCartDialog=ItemCartDialog;try{ItemCartDialog.displayName="ItemCartDialog",ItemCartDialog.__docgenInfo={description:"",displayName:"ItemCartDialog",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"number"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},price:{defaultValue:null,description:"",name:"price",required:!0,type:{name:"number"}},imageUrl:{defaultValue:null,description:"",name:"imageUrl",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProductPage/ItemCartDialog/ItemCartDialog.tsx#ItemCartDialog"]={docgenInfo:ItemCartDialog.__docgenInfo,name:"ItemCartDialog",path:"src/components/ProductPage/ItemCartDialog/ItemCartDialog.tsx#ItemCartDialog"})}catch(__react_docgen_typescript_loader_error){}var Root=styled_components_browser_esm.ZP.article(ProductItem_styles_templateObject||(ProductItem_styles_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),ProductItem_styles_Thumbnail=styled_components_browser_esm.ZP.img(ProductItem_styles_templateObject2||(ProductItem_styles_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  width: 100%;\n  height: 80%;\n"]))),Info=(0,styled_components_browser_esm.ZP)(common_Flex)(ProductItem_styles_templateObject3||(ProductItem_styles_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  justify-content: space-between;\n  height: 20%;\n  padding-top: 1.8rem;\n"]))),ProductItem_styles_Name=styled_components_browser_esm.ZP.div(ProductItem_styles_templateObject4||(ProductItem_styles_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  font-size: 1.6rem;\n  color: #33333;\n"]))),ProductItem_styles_Price=styled_components_browser_esm.ZP.div(ProductItem_styles_templateObject5||(ProductItem_styles_templateObject5=(0,taggedTemplateLiteral.Z)(["\n  font-size: 2rem;\n  color: #33333;\n"]))),ProductItem_styles_CartButton=styled_components_browser_esm.ZP.button(ProductItem_styles_templateObject6||(ProductItem_styles_templateObject6=(0,taggedTemplateLiteral.Z)(["\n  width: 2.5rem;\n  height: 2.2rem;\n  border: none;\n  background-color: white;\n  padding: 0;\n"]))),ProductItem_styles_CartImg=styled_components_browser_esm.ZP.img(_templateObject7||(_templateObject7=(0,taggedTemplateLiteral.Z)(["\n  width: 100%;\n"])));try{Root.displayName="Root",Root.__docgenInfo={description:"",displayName:"Root",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLElement | null) => void) | RefObject<HTMLElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProductPage/ProductItem/ProductItem.styles.tsx#Root"]={docgenInfo:Root.__docgenInfo,name:"Root",path:"src/components/ProductPage/ProductItem/ProductItem.styles.tsx#Root"})}catch(__react_docgen_typescript_loader_error){}try{ProductItem_styles_Thumbnail.displayName="Thumbnail",ProductItem_styles_Thumbnail.__docgenInfo={description:"",displayName:"Thumbnail",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLImageElement | null) => void) | RefObject<HTMLImageElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProductPage/ProductItem/ProductItem.styles.tsx#Thumbnail"]={docgenInfo:ProductItem_styles_Thumbnail.__docgenInfo,name:"Thumbnail",path:"src/components/ProductPage/ProductItem/ProductItem.styles.tsx#Thumbnail"})}catch(__react_docgen_typescript_loader_error){}try{Info.displayName="Info",Info.__docgenInfo={description:"",displayName:"Info",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},justify:{defaultValue:null,description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"space-between"'},{value:'"space-around"'},{value:'"space-evenly"'}]}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"stretch"'},{value:'"end"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},scroll:{defaultValue:null,description:"",name:"scroll",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProductPage/ProductItem/ProductItem.styles.tsx#Info"]={docgenInfo:Info.__docgenInfo,name:"Info",path:"src/components/ProductPage/ProductItem/ProductItem.styles.tsx#Info"})}catch(__react_docgen_typescript_loader_error){}try{ProductItem_styles_Name.displayName="Name",ProductItem_styles_Name.__docgenInfo={description:"",displayName:"Name",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProductPage/ProductItem/ProductItem.styles.tsx#Name"]={docgenInfo:ProductItem_styles_Name.__docgenInfo,name:"Name",path:"src/components/ProductPage/ProductItem/ProductItem.styles.tsx#Name"})}catch(__react_docgen_typescript_loader_error){}try{ProductItem_styles_Price.displayName="Price",ProductItem_styles_Price.__docgenInfo={description:"",displayName:"Price",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProductPage/ProductItem/ProductItem.styles.tsx#Price"]={docgenInfo:ProductItem_styles_Price.__docgenInfo,name:"Price",path:"src/components/ProductPage/ProductItem/ProductItem.styles.tsx#Price"})}catch(__react_docgen_typescript_loader_error){}try{ProductItem_styles_CartButton.displayName="CartButton",ProductItem_styles_CartButton.__docgenInfo={description:"",displayName:"CartButton",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProductPage/ProductItem/ProductItem.styles.tsx#CartButton"]={docgenInfo:ProductItem_styles_CartButton.__docgenInfo,name:"CartButton",path:"src/components/ProductPage/ProductItem/ProductItem.styles.tsx#CartButton"})}catch(__react_docgen_typescript_loader_error){}try{ProductItem_styles_CartImg.displayName="CartImg",ProductItem_styles_CartImg.__docgenInfo={description:"",displayName:"CartImg",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLImageElement | null) => void) | RefObject<HTMLImageElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProductPage/ProductItem/ProductItem.styles.tsx#CartImg"]={docgenInfo:ProductItem_styles_CartImg.__docgenInfo,name:"CartImg",path:"src/components/ProductPage/ProductItem/ProductItem.styles.tsx#CartImg"})}catch(__react_docgen_typescript_loader_error){}var _Sample$parameters,_Sample$parameters2,_Sample$parameters2$d,ProductItem=function ProductItem(props){props.id;var name=props.name,price=props.price,imageUrl=props.imageUrl;return(0,jsx_runtime.jsxs)(Root,{children:[(0,jsx_runtime.jsx)(ProductItem_styles_Thumbnail,{alt:name,src:imageUrl}),(0,jsx_runtime.jsxs)(Info,{children:[(0,jsx_runtime.jsxs)(common_Flex,{dir:"column",children:[(0,jsx_runtime.jsx)(ProductItem_styles_Name,{children:name}),(0,jsx_runtime.jsxs)(ProductItem_styles_Price,{children:[price.toLocaleString()," 원"]})]}),(0,jsx_runtime.jsx)(ItemCartDialog_ItemCartDialog,(0,objectSpread2.Z)({},props))]})]})},ProductItem_ProductItem=ProductItem;try{ProductItem.displayName="ProductItem",ProductItem.__docgenInfo={description:"",displayName:"ProductItem",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"number"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},price:{defaultValue:null,description:"",name:"price",required:!0,type:{name:"number"}},imageUrl:{defaultValue:null,description:"",name:"imageUrl",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProductPage/ProductItem/ProductItem.tsx#ProductItem"]={docgenInfo:ProductItem.__docgenInfo,name:"ProductItem",path:"src/components/ProductPage/ProductItem/ProductItem.tsx#ProductItem"})}catch(__react_docgen_typescript_loader_error){}var ProductItem_stories={title:"Example/ProductItem",component:ProductItem_ProductItem,tags:["autodocs"],args:{id:9,name:"밀크티",price:9e3,imageUrl:"https://cdn.shopify.com/s/files/1/2806/9936/products/zws-essentials-sponge-cloth-set-of-4-zero-waste-sponge-cloth-swedish-dish-cloth-paper-towel-replacement-kitchen-sponge-31138620276847.jpg?v=1655836694&width=900"}},Sample={};Sample.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Sample.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Sample$parameters=Sample.parameters)||void 0===_Sample$parameters?void 0:_Sample$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{}"},null===(_Sample$parameters2=Sample.parameters)||void 0===_Sample$parameters2||null===(_Sample$parameters2$d=_Sample$parameters2.docs)||void 0===_Sample$parameters2$d?void 0:_Sample$parameters2$d.source)})});var __namedExportsOrder=["Sample"]},"./src/components/common/Button/Button.styles.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{z:function(){return Button}});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Button=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.button(_templateObject||(_templateObject=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n  padding: 0;\n\n  cursor: pointer;\n\n  ","\n\n  ","\n"])),(function(_ref){switch(_ref.size){case"SS":return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject2||(_templateObject2=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n          width: 2.4rem;\n          height: 1.4rem;\n        "])));case"S":return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject3||(_templateObject3=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n          width: 4.2rem;\n          height: 3rem;\n        "])));case"M":return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject4||(_templateObject4=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n          width: 9.8rem;\n          height: 3.5rem;\n\n          font-weight: 400;\n          font-size: 16px;\n        "])));case"L":return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject5||(_templateObject5=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n          width: 38.8rem;\n          height: 7.3rem;\n\n          font-weight: 400;\n          font-size: 24px;\n        "])))}}),(function(_ref2){switch(_ref2.view){case"white":return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject6||(_templateObject6=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n          background-color: white;\n          border: 1px solid #bbbbbb;\n          color: #bbbbbb;\n        "])));case"black":return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject7||(_templateObject7=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n          background-color: #333333;\n          border: 1px solid #333333;\n          color: white;\n        "])))}}));try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{view:{defaultValue:null,description:"",name:"view",required:!0,type:{name:"enum",value:[{value:'"white"'},{value:'"black"'}]}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"SS"'},{value:'"S"'},{value:'"M"'},{value:'"L"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Button/Button.styles.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/common/Button/Button.styles.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/Button/Button.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Button_styles__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/common/Button/Button.styles.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Button=function Button(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button_styles__WEBPACK_IMPORTED_MODULE_0__.z,(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({type:"button"},props),{},{children:props.children}))};__webpack_exports__.Z=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"SS"'},{value:'"S"'},{value:'"M"'},{value:'"L"'}]}},view:{defaultValue:null,description:"",name:"view",required:!0,type:{name:"enum",value:[{value:'"white"'},{value:'"black"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/common/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}}}]);