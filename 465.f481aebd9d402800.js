"use strict";(self.webpackChunkAngularBase=self.webpackChunkAngularBase||[]).push([[465],{4465:(X,C,s)=>{s.r(C),s.d(C,{ClientModule:()=>G});var N=s(4833),u=s(7215),f=s(3189),e=s(8274),v=s(8498),A=s(805),D=s(5593),I=s(615);const y=function(){return{width:"100px"}};function w(n,i){1&n&&(e.TgZ(0,"a",3),e._UZ(1,"img",4),e.qZA()),2&n&&e.Akn(e.DdM(2,y))}function M(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"a",5),e.NdJ("click",function(){e.CHM(t);const p=e.oxw();return e.KtG(p.handleLogout())}),e.qZA()}}let O=(()=>{class n extends f.c{constructor(t,o){super(t),this.authService=o,this.visibleSidebar1=!1}ngOnInit(){this.items=[{label:"Dashboard",icon:"pi pi-fw pi-home",routerLink:"dashboard"},{label:"Accounts",icon:"pi pi-fw pi-user-edit",routerLink:"account"},{label:"Equipments",icon:"pi pi-fw pi-wrench",routerLink:"equipment"},{label:"Defected reports",icon:"pi pi-fw pi-bell",routerLink:"report"}]}handleLogout(){this.authService.logout(!0)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.zs3),e.Y36(v.$))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-client-layout-page"]],features:[e.qOj],decls:4,vars:3,consts:[[1,"justify-content-between",3,"model"],["pTemplate","start"],["pTemplate","end",3,"style"],["href","/clientpanel/employee",1,"text-white","text-decoration-none","d-flex"],["src","../../../assets/images/Final logo.png",1,"img-fluid","w-100"],["pButton","","pRipple","","type","button","label","Logout","icon","pi pi-sign-out",1,"p-button-raised","p-button-danger","fw-bold","text-start",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"p-menubar",0),e.YNc(1,w,2,3,"ng-template",1),e.YNc(2,M,1,0,"ng-template",2),e.qZA(),e._UZ(3,"router-outlet")),2&t&&(e.Q6J("model",o.items),e.xp6(2),e.Q6J("style",e.DdM(2,y)))},dependencies:[u.lC,A.jx,D.Hq,I.nm],styles:["[_nghost-%COMP%]     .p-menubar .p-menubar-end{margin-left:0!important}[_nghost-%COMP%]     .p-menubar{justify-content:space-around}"]}),n})();var r=s(1995),d=s(3794),m=s(4930);let P=(()=>{class n{constructor(t){this.accountService=t,this.cols=[],this.accounts=[],this.pageTitle="Account"}ngOnInit(){this.getAllAccounts()}getAllAccounts(){this.cols=[{field:"name",header:"Name",rowType:r.b.NORMAL},{field:"email",header:"Email",rowType:r.b.NORMAL},{field:"departmentName",header:"Department",rowType:r.b.NORMAL}],this.accountService.getAll("client/account").subscribe(t=>{t.success&&(this.accounts=t.result)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.I))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-account-client-page"]],decls:4,vars:4,consts:[[1,"header","d-flex","justify-content-between","p-3"],[3,"isActions","cols","data"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"h3"),e._uU(2),e.qZA()(),e._UZ(3,"app-data-table",1)),2&t&&(e.xp6(2),e.hij("",o.pageTitle," Page"),e.xp6(1),e.Q6J("isActions",!1)("cols",o.cols)("data",o.accounts))},dependencies:[m.Q]}),n})(),L=(()=>{class n{constructor(t){this.equipmentService=t,this.cols=[],this.equipments=[],this.pageTitle="Equipment"}ngOnInit(){this.getAllEquipments()}getAllEquipments(){this.cols=[{field:"clientName",header:"Client Name",rowType:r.b.NORMAL},{field:"categoryName",header:"Category Name",rowType:r.b.NORMAL},{field:"departmentName",header:"Department Name",rowType:r.b.NORMAL},{field:"installationName",header:"Installation Name",rowType:r.b.NORMAL},{field:"typeName",header:"Type Name",rowType:r.b.NORMAL}],this.equipmentService.getAll("client/equipment").subscribe(t=>{t.success&&(this.equipments=t.result)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.I))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-equipment-client-page"]],decls:4,vars:4,consts:[[1,"header","d-flex","justify-content-between","p-3"],[3,"isActions","cols","data"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"h3"),e._uU(2),e.qZA()(),e._UZ(3,"app-data-table",1)),2&t&&(e.xp6(2),e.hij("",o.pageTitle," Page"),e.xp6(1),e.Q6J("isActions",!1)("cols",o.cols)("data",o.equipments))},dependencies:[m.Q]}),n})();var a=s(8731),R=s(5648),g=s(6895),x=s(1493),T=s(2174),c=s(4006),b=s(364),h=s(850),_=s(9070);let Z=(()=>{class n{constructor(t){this.defectedReportsService=t,this.closeDialog=new e.vpe,this.defectLevel=b.I.LOW,this.defectedResponseFormGroup=new c.cw({clientName:new c.NI(null,[c.kI.required]),comment:new c.NI(null,[c.kI.required]),action:new c.NI(null,[c.kI.required])}),this.inputs=[{placeholder:"Client Name",formControlName:"clientName",type:"text",id:"clientName",errorMessage:"this field is required",element:h.Q.INPUT},{placeholder:"Comment",formControlName:"comment",type:"text",id:"comment",errorMessage:"this field is required",element:h.Q.INPUT},{placeholder:"Action",formControlName:"action",type:"text",id:"action",errorMessage:"this field is required",element:h.Q.DROPDOWM,dropdownOpt:{options:[]}}]}ngOnInit(){this.checkDefectLevel()}formSubmitted(t){let o={...t.value};this.callCrudApi(o)}callCrudApi(t){this.defectedReportsService.update(t,this.defectedReportId,"client/report/defect").subscribe(o=>{o.success&&this.closeDialog.emit()})}checkDefectLevel(){const t=this.defectedReports.find(p=>p._id===this.defectedReportId);t&&(this.defectLevel=t.priority),this.inputs.find(p=>"action"===p.formControlName).dropdownOpt.options=this.defectLevel==b.I.HIGH?[a.tz.QUARANTINED]:Object.values(a.tz)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.I))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-client-response-to-defected-dialog-content"]],inputs:{defectedReportId:"defectedReportId",defectedReports:"defectedReports"},outputs:{closeDialog:"closeDialog"},decls:1,vars:2,consts:[[3,"inputs","formControlFromParent","formSubmitted"]],template:function(t,o){1&t&&(e.TgZ(0,"app-input-form",0),e.NdJ("formSubmitted",function(l){return o.formSubmitted(l)}),e.qZA()),2&t&&e.Q6J("inputs",o.inputs)("formControlFromParent",o.defectedResponseFormGroup)},dependencies:[_.E]}),n})();const S=function(n){return{color:n}};function E(n,i){if(1&n&&(e.TgZ(0,"div",8)(1,"div",9)(2,"p",10),e._uU(3),e.qZA(),e.TgZ(4,"h3",11),e._uU(5),e.qZA()()()),2&n){const t=i.$implicit,o=e.oxw(2);e.xp6(3),e.Oqu(t),e.xp6(1),e.Q6J("ngStyle",e.VKq(3,S,o.reportInfo[t]?"initial":"red")),e.xp6(1),e.hij(" ",o.reportInfo[t]||"No Data"," ")}}function j(n,i){if(1&n&&(e.TgZ(0,"div",6),e.YNc(1,E,6,5,"div",7),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.reportInfoKeys)}}function q(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"app-client-response-to-defected-dialog-content",12),e.NdJ("closeDialog",function(){e.CHM(t);const p=e.oxw();return e.KtG(p.close())}),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("defectedReportId",t.defectedReportID)("defectedReports",t.reports)}}const Q=function(){return{width:"50vw"}},F=function(){return{"960px":"75vw","640px":"100vw"}};let U=(()=>{class n extends f.c{constructor(t,o){super(o),this.defectedReportService=t,this.reportId=this.route.snapshot.paramMap.get("reportID"),this.cols=[],this.defectedReportID="",this.reports=[],this.display=!1,this.action="new",this.pageTitle="Defcted Reports",this.defectReportAction=[{actionFunction:"changeResponse",icon:"pi pi-eject",isConditionalAction:!0,conditionalByRow:{data:"null",field:"status"},style:"p-button-rounded"}],this.reportInfoKeys=[]}ngOnInit(){this.getAllDefectedReports()}getAllDefectedReports(){this.cols=[{field:"name",header:"Name",rowType:r.b.NORMAL},{field:"priority",header:"Priority",rowType:r.b.ENUM,enumTdObj:{[a.Sh.LOW]:"bg-success rounded text-white p-2",[a.Sh.MEDIUM]:"bg-warning rounded text-white p-2",[a.Sh.HIGH]:"bg-danger rounded text-white p-2"}},{field:"description",header:"Description",rowType:r.b.NORMAL},{field:"status",header:"status",rowType:r.b.ENUM,enumTdObj:{[a.tz.FIXED]:"bg-success rounded text-white p-2",[a.tz.IGNORED]:"bg-warning rounded text-white p-2",[a.tz.QUARANTINED]:"bg-danger rounded text-white p-2"}},{field:"createdAt",header:"Created At",rowType:r.b.DATE}],this.defectedReportService.getByID(this.reportId,"client/report/defect").subscribe(t=>{t.success&&(this.reports=t.result.defect,this.reportInfo=t.result,delete this.reportInfo.defect,delete this.reportInfo.__v,delete this.reportInfo._id,this.reportInfo=(0,R.tU)(this.reportInfo),this.reportInfo=(0,R.g$)(this.reportInfo),this.reportInfoKeys=Object.keys(this.reportInfo))})}callAction(t){this.defectedReportID=t.id,this.display=!0}close(){this.display=!1,this.getAllDefectedReports()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.I),e.Y36(e.zs3))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-defected-reports-client-page"]],features:[e.qOj],decls:7,vars:14,consts:[[1,"m-2","p-2","pt-0"],["header","Report info"],["pTemplate","content"],[3,"isActions","isMainActions","cols","data","conditionalAction","actionClicked"],[3,"visible","dismissableMask","breakpoints","header","visibleChange"],[3,"defectedReportId","defectedReports","closeDialog",4,"ngIf"],[1,"col-12","d-flex","flex-wrap","gap-4"],["class","wrapper",4,"ngFor","ngForOf"],[1,"wrapper"],[1,"single-card","px-4","py-1","shadow"],[1,"m-0"],[1,"mt-1",3,"ngStyle"],[3,"defectedReportId","defectedReports","closeDialog"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"p-accordion")(2,"p-accordionTab",1),e.YNc(3,j,2,1,"ng-template",2),e.qZA()()(),e.TgZ(4,"app-data-table",3),e.NdJ("actionClicked",function(l){return o.callAction(l)}),e.qZA(),e.TgZ(5,"p-dialog",4),e.NdJ("visibleChange",function(l){return o.display=l}),e.YNc(6,q,1,2,"app-client-response-to-defected-dialog-content",5),e.qZA()),2&t&&(e.xp6(4),e.Q6J("isActions",!0)("isMainActions",!1)("cols",o.cols)("data",o.reports)("conditionalAction",o.defectReportAction),e.xp6(1),e.Akn(e.DdM(12,Q)),e.Q6J("visible",o.display)("dismissableMask",!0)("breakpoints",e.DdM(13,F))("header",o.action+" "+o.pageTitle),e.xp6(1),e.Q6J("ngIf",o.display))},dependencies:[g.sg,g.O5,g.PC,A.jx,x.V,T.UQ,T.US,m.Q,Z],styles:[".single-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:14px;font-weight:700}.single-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:10 px}.single-card[_ngcontent-%COMP%]{border-left-width:5px;border-left-color:#0069d9;border-left-style:solid}.wrapper[_ngcontent-%COMP%]{max-width:20%}"]}),n})(),J=(()=>{class n extends f.c{constructor(t,o){super(o),this.defectedReportService=t,this.cols=[],this.reportId="",this.reports=[],this.display=!1,this.action="new",this.pageTitle="Repotrs",this.goToDefectedAction=[{actionFunction:"goToDefected",icon:"pi pi-arrow-right",isConditionalAction:!0,style:"p-button-rounded p-button-info"}]}ngOnInit(){this.getAllReports()}getAllReports(){this.cols=[{field:"departmentName",header:"Department Name",rowType:r.b.NORMAL},{field:"serialNumber",header:"Serial Number",rowType:r.b.NORMAL},{field:"categoryName",header:"Category Name",rowType:r.b.NORMAL},{field:"typeName",header:"Type Name",rowType:r.b.NORMAL},{field:"location",header:"Location",rowType:r.b.NORMAL},{field:"reportName",header:"Report Name",rowType:r.b.NORMAL},{field:"createdAt",header:"Created At",rowType:r.b.DATE},{field:"defectLevel",header:"Defect Level",rowType:r.b.ENUM,enumTdObj:{[a.Sh.LOW]:"bg-success rounded text-white p-2",[a.Sh.MEDIUM]:"bg-warning rounded text-white p-2",[a.Sh.HIGH]:"bg-danger rounded text-white p-2"}},{field:"isClientRespond",header:"Did Client Respond",rowType:r.b.BOOLEAN},{field:"isInspectorRespond",header:"Did Inspector Respond",rowType:r.b.BOOLEAN}],this.defectedReportService.getAll("client/report/defect").subscribe(t=>{t.success&&(this.reports=t.result)})}callAction(t){this.reportId=t.id,this.goToDefected()}goToDefected(){this.router.navigate(["/clientpanel/defectedReport/"+this.reportId])}close(){this.display=!1,this.getAllReports()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.I),e.Y36(e.zs3))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-reports-client-page"]],features:[e.qOj],decls:4,vars:6,consts:[[1,"header","d-flex","justify-content-between","p-3"],[3,"isActions","isMainActions","cols","data","conditionalAction","actionClicked"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"h3"),e._uU(2),e.qZA()(),e.TgZ(3,"app-data-table",1),e.NdJ("actionClicked",function(l){return o.callAction(l)}),e.qZA()),2&t&&(e.xp6(2),e.hij("",o.pageTitle," Page"),e.xp6(1),e.Q6J("isActions",!0)("isMainActions",!1)("cols",o.cols)("data",o.reports)("conditionalAction",o.goToDefectedAction))},dependencies:[m.Q]}),n})();const B=[{path:"",component:O,children:[{path:"dashboard",component:s(2397).c},{path:"account",component:P},{path:"equipment",component:L},{path:"report",component:J},{path:"defectedReport/:reportID",component:U}]}];let z=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.Bz.forChild(B),u.Bz]}),n})();var H=s(2241);let G=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[N.h,H.L,z]}),n})()}}]);