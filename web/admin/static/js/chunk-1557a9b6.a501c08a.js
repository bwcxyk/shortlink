(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1557a9b6"],{9406:function(o,t,n){"use strict";n.r(t);var e=function(){var o=this,t=o.$createElement,n=o._self._c||t;return n("el-main",[n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{span:7}},[n("el-card",[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[o._v("短链接域名\n          "),n("el-popover",{attrs:{placement:"bottom",width:"300",trigger:"hover"}},[n("p",[o._v("\n                配置短链接域名后，可以在短链接列表快速拷贝完整的短链接。"),n("br"),o._v("\n                示例：http://t.anmuji.com/"),n("br"),o._v(" "),n("strong",[o._v('注意：以 "/" 结尾。')])]),o._v(" "),n("i",{staticClass:"el-icon-question",attrs:{slot:"reference"},slot:"reference"})])],1),o._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:2===o.role,expression:"role === 2"}],staticStyle:{float:"right"}},[n("el-button",{attrs:{icon:"el-icon-refresh",size:"mini",circle:""},on:{click:function(t){return o.getConfig("landingHostsForm")}}}),o._v(" "),n("el-button",{attrs:{icon:"el-icon-plus",size:"mini",circle:""},on:{click:function(t){return o.addLandingHost()}}}),o._v(" "),n("el-button",{attrs:{icon:"el-icon-check",size:"mini",circle:""},on:{click:function(t){return o.updateLadingHosts()}}})],1)]),o._v(" "),n("el-form",{ref:"landingHostsForm",attrs:{model:o.landingHostsForm,"label-position":"left","label-width":"0px",size:"mini"}},o._l(o.landingHostsForm.hosts,(function(t,e){return n("el-form-item",{key:t.key,attrs:{prop:"hosts."+e+".value",rules:o.landingHostRules}},[n("el-input",{staticStyle:{width:"90%"},attrs:{readonly:2!==o.role,placeholder:"示例：http://anmuji.com/t/ 以 / 结尾"},model:{value:t.value,callback:function(n){o.$set(t,"value",n)},expression:"host.value"}}),o._v(" "),n("el-button",{directives:[{name:"show",rawName:"v-show",value:o.landingHostsForm.hosts.length>1&&2===o.role,expression:"landingHostsForm.hosts.length > 1 && role === 2"}],staticStyle:{padding:"1px"},attrs:{icon:"el-icon-minus",size:"mini",type:"danger",circle:""},on:{click:function(t){return o.removeLandingHost(e)}}})],1)})),1)],1)],1),o._v(" "),n("el-col",{attrs:{span:10}},[n("el-card",[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[o._v("随机 ID 长度设置\n            "),n("el-popover",{attrs:{placement:"bottom",width:"300",trigger:"hover"}},[n("p",[o._v("默认长度即随机生成 ID 的长度，"),n("br"),o._v("最小长度 <= 默认长度 <= 最大长度")]),o._v(" "),n("i",{staticClass:"el-icon-question",attrs:{slot:"reference"},slot:"reference"})])],1),o._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:2===o.role,expression:"role === 2"}],staticStyle:{float:"right"}},[n("el-button",{attrs:{icon:"el-icon-refresh",size:"mini",circle:""},on:{click:function(t){return o.getConfig("idConfigForm")}}}),o._v(" "),n("el-button",{attrs:{icon:"el-icon-check",size:"mini",circle:""},on:{click:function(t){return o.updateIdLengthConfig()}}})],1)]),o._v(" "),n("el-form",{ref:"idConfigForm",attrs:{model:o.idConfigForm,size:"mini","label-position":"top",inline:!0}},[n("el-form-item",{attrs:{prop:"idMinimumLength",label:"最小长度"}},[n("el-input-number",{attrs:{size:"mini",disabled:2!==o.role},model:{value:o.idConfigForm.idMinimumLength,callback:function(t){o.$set(o.idConfigForm,"idMinimumLength",t)},expression:"idConfigForm.idMinimumLength"}})],1),o._v(" "),n("el-form-item",{attrs:{prop:"idLength",label:"默认长度"}},[n("el-input-number",{attrs:{size:"mini",disabled:2!==o.role},model:{value:o.idConfigForm.idLength,callback:function(t){o.$set(o.idConfigForm,"idLength",t)},expression:"idConfigForm.idLength"}})],1),o._v(" "),n("el-form-item",{attrs:{prop:"idMaximumLength",label:"最大长度"}},[n("el-input-number",{attrs:{size:"mini",disabled:2!==o.role},model:{value:o.idConfigForm.idMaximumLength,callback:function(t){o.$set(o.idConfigForm,"idMaximumLength",t)},expression:"idConfigForm.idMaximumLength"}})],1)],1)],1)],1),o._v(" "),n("el-col",{attrs:{span:7}},[n("el-card",[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[o._v("短链接 404 处理\n            "),n("el-popover",{attrs:{placement:"bottom",width:"320",trigger:"hover"}},[n("p",[o._v("展示文案：当访问的短链接找不到时，展示设定的文案")]),o._v(" "),n("p",[o._v("URL跳转：当访问的短链接找不到时，跳转到设定的URL")]),o._v(" "),n("i",{staticClass:"el-icon-question",attrs:{slot:"reference"},slot:"reference"})])],1),o._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:2===o.role,expression:"role === 2"}],staticStyle:{float:"right"}},[n("el-button",{attrs:{icon:"el-icon-refresh",size:"mini",circle:""},on:{click:function(t){return o.getConfig("shortLinkNotFoundConfigForm")}}}),o._v(" "),n("el-button",{attrs:{icon:"el-icon-check",size:"mini",circle:""},on:{click:function(t){return o.updateShortLinkNotFoundConfig()}}})],1)]),o._v(" "),n("el-form",{ref:"shortLinkNotFoundConfigForm",attrs:{model:o.shortLinkNotFoundConfigForm,size:"mini","label-position":"top"}},[n("el-form-item",{attrs:{prop:"mode",label:"模式"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:o.shortLinkNotFoundConfigForm.mode,callback:function(t){o.$set(o.shortLinkNotFoundConfigForm,"mode",t)},expression:"shortLinkNotFoundConfigForm.mode"}},o._l(o.shortLinkNotFoundModeOptions,(function(o){return n("el-option",{key:o.value,attrs:{label:o.label,value:o.value}})})),1)],1),o._v(" "),n("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"content"===o.shortLinkNotFoundConfigForm.mode,expression:"shortLinkNotFoundConfigForm.mode === 'content'"}],attrs:{prop:"value",label:"文案",rules:o.shortLinkNotFoundConfigRules}},[n("el-input",{attrs:{type:"textarea",placeholder:"你访问的页面不存在哦"},model:{value:o.shortLinkNotFoundConfigForm.value,callback:function(t){o.$set(o.shortLinkNotFoundConfigForm,"value",t)},expression:"shortLinkNotFoundConfigForm.value"}})],1),o._v(" "),n("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"redirect"===o.shortLinkNotFoundConfigForm.mode,expression:"shortLinkNotFoundConfigForm.mode === 'redirect'"}],attrs:{prop:"value",label:"URL",rules:o.shortLinkNotFoundConfigRules}},[n("el-input",{attrs:{placeholder:"示例：https://github.com/jwma/jump-jump"},model:{value:o.shortLinkNotFoundConfigForm.value,callback:function(t){o.$set(o.shortLinkNotFoundConfigForm,"value",t)},expression:"shortLinkNotFoundConfigForm.value"}})],1)],1)],1)],1)],1)],1)},i=[],r=(n("ac6a"),n("db72")),s=n("da71"),a=n("61f7"),l=n("2f62"),d={name:"Dashboard",data:function(){var o=this,t=function(o,t,n){if(""===t)n(new Error("请输入域名/IP地址"));else{if(!Object(a["b"])(t))return void n(new Error("这不是一个合法的域名/IP地址"));n()}},n=function(t,n,e){if(""===n)"content"===o.shortLinkNotFoundConfigForm.mode?e(new Error("请输入展示文案")):e(new Error("请输入URL"));else{if("redirect"===o.shortLinkNotFoundConfigForm.mode&&!Object(a["b"])(n))return void e(new Error("这不是一个合法的URL"));e()}};return{landingHostsForm:{hosts:[]},landingHostRules:{required:!0,validator:t,trigger:"blur"},idConfigForm:{idMinimumLength:0,idLength:0,idMaximumLength:0},shortLinkNotFoundModeOptions:[{label:"展示文案",value:"content"},{label:"URL 跳转",value:"redirect"}],shortLinkNotFoundConfigForm:{mode:null,value:null},shortLinkNotFoundConfigRules:{required:!0,validator:n,trigger:"blur"}}},computed:Object(r["a"])({},Object(l["b"])(["role"])),created:function(){this.getConfig("all")},methods:{getConfig:function(o){var t=this;Object(s["a"])().then((function(n){"landingHostsForm"!==o&&"all"!==o||(t.landingHostsForm.hosts=[],n.data.config.landingHosts.forEach((function(o,n){t.landingHostsForm.hosts.push({value:o,key:Date.now()+n})})),0===n.data.config.landingHosts.length&&t.addLandingHost()),"idConfigForm"!==o&&"all"!==o||(t.idConfigForm.idMinimumLength=n.data.config.idConfig.idMinimumLength,t.idConfigForm.idLength=n.data.config.idConfig.idLength,t.idConfigForm.idMaximumLength=n.data.config.idConfig.idMaximumLength),"shortLinkNotFoundConfigForm"!==o&&"all"!==o||(t.shortLinkNotFoundConfigForm.mode=n.data.config.shortLinkNotFoundConfig.mode,t.shortLinkNotFoundConfigForm.value=n.data.config.shortLinkNotFoundConfig.value)}))},addLandingHost:function(){this.landingHostsForm.hosts.push({value:"",key:Date.now()})},removeLandingHost:function(o){this.landingHostsForm.hosts.splice(o,1)},updateLadingHosts:function(){var o=this;this.$refs["landingHostsForm"].validate((function(t){if(!t)return!1;var n=[];o.landingHostsForm.hosts.forEach((function(o){n.push(o.value)})),Object(s["c"])({hosts:n}).then((function(t){o.$notify({title:"更新成功",message:"成功更新短链接域名",type:"success"})}))}))},updateIdLengthConfig:function(){var o=this;Object(s["b"])(this.idConfigForm).then((function(t){o.$notify({title:"更新成功",message:"成功更新随机 ID 长度",type:"success"})}))},updateShortLinkNotFoundConfig:function(){var o=this;this.$refs["shortLinkNotFoundConfigForm"].validate((function(t){if(!t)return!1;Object(s["d"])(o.shortLinkNotFoundConfigForm).then((function(t){o.$notify({title:"更新成功",message:"短链接 404 处理配置",type:"success"})}))}))}}},u=d,c=(n("f8a7"),n("2877")),m=Object(c["a"])(u,e,i,!1,null,null,null);t["default"]=m.exports},acf4:function(o,t,n){},da71:function(o,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"d",(function(){return a}));var e=n("b775");function i(){return Object(e["a"])({url:"/v1/config",method:"get"})}function r(o){return Object(e["a"])({url:"/v1/config/landing-hosts",method:"patch",data:o})}function s(o){return Object(e["a"])({url:"/v1/config/id-length",method:"patch",data:o})}function a(o){return Object(e["a"])({url:"/v1/config/short-link-404-handling",method:"patch",data:o})}},f8a7:function(o,t,n){"use strict";var e=n("acf4"),i=n.n(e);i.a}}]);