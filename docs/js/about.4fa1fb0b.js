"use strict";(self["webpackChunkformulaone"]=self["webpackChunkformulaone"]||[]).push([[443],{7575:function(a,t,n){n.r(t),n.d(t,{default:function(){return v}});var e=n(3396),l=n(7139),s=n(9858);const u=(0,e._)("h1",null,"Gagnant",-1),r={class:"d-flex justify-center"},d={class:"tableau-result"},c=(0,e._)("td",null,"Nom",-1),i=(0,e._)("td",null,"Ecurie",-1),o=(0,e._)("td",null,"Grille de départ",-1),g=(0,e._)("td",null,"Laps",-1),_=(0,e._)("td",null,"Points gagnés",-1);function h(a,t,n,h,R,f){return(0,e.wg)(),(0,e.iD)("div",null,[u,(0,e._)("div",r,[(0,e._)("div",d,[(0,e.Wm)(s.Y,{height:"300px"},{default:(0,e.w5)((()=>[(0,e._)("tbody",null,[(0,e._)("tr",null,[c,(0,e._)("td",null,(0,l.zw)(R.gagnant?.Driver.givenName)+" "+(0,l.zw)(R.gagnant?.Driver.familyName),1)]),(0,e._)("tr",null,[i,(0,e._)("td",null,(0,l.zw)(R.gagnant?.Constructor.name),1)]),(0,e._)("tr",null,[o,(0,e._)("td",null,(0,l.zw)(R.gagnant?.grid),1)]),(0,e._)("tr",null,[g,(0,e._)("td",null,(0,l.zw)(R.gagnant?.laps),1)]),(0,e._)("tr",null,[_,(0,e._)("td",null,(0,l.zw)(R.gagnant?.points),1)])])])),_:1})])])])}var R=n(4161),f={components:{},data(){return{circuit:[],resultats:[],gagnant:null,infoGlobale:[],nomGrandPrix:"",annee:""}},methods:{getLastResult(){var a={method:"get",url:"https://ergast.com/api/f1/current/last/results.json",headers:{}};(0,R.Z)(a).then((a=>{this.nomGrandPrix=a.data.MRData.RaceTable.Races[0].raceName,this.resultats=a.data.MRData.RaceTable.Races[0].Results,this.gagnant=a.data.MRData.RaceTable.Races[0].Results[0],this.annee=a.data.MRData.RaceTable.Races[0].season})).catch((function(a){console.log(a)}))}},created(){this.getLastResult()}},m=n(89);const p=(0,m.Z)(f,[["render",h]]);var v=p}}]);
//# sourceMappingURL=about.4fa1fb0b.js.map