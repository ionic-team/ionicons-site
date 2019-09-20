import{r as s,h as i,g as t}from"./p-d91dd0c5.js";const e=class{constructor(i){s(this,i),this.selectedIcon="",this.selectedIconType="md",this.isHeaderSearchVisible=!1,this.query=""}escListener(s){"Escape"===s.code&&this.selectedIcon.length&&(this.selectedIcon="")}handleBodyClicked(){this.selectedIcon.length&&(this.selectedIcon="")}handleClearToast(){this.selectedIcon=""}handleScroll(){requestAnimationFrame(this.checkScroll.bind(this))}checkScroll(){const s=this.el.querySelectorAll(".icon-list__header-bar");for(let i=0;i<s.length;i++){const t=s[i];t.getBoundingClientRect().top<67?t.classList.add("sticky"):t.classList.remove("sticky")}}filterIcons(){const s=this.query.trim().toLowerCase(),i={icon:[],logo:[]};return this.data.icons.forEach(t=>{(""===s||t.tags.some(i=>i.indexOf(s)>-1))&&t.icons.forEach(s=>{switch(s.substr(0,s.indexOf("-"))){case"ios":i.icon.push({name:t.name});break;case"logo":i.logo.push({name:t.name,icon:s});break;default:return}})}),i}handleIconMouseEnter(s){s.target.classList.remove("mouseOff"),s.target.classList.add("mouseOver")}handleIconMouseLeave(s){s.target.classList.remove("mouseOver"),s.target.classList.add("mouseOff")}handleIconClick(s,i){s.stopPropagation(),this.selectedIcon=i}handleToggleClick(s){s.stopPropagation(),this.selectedIconType="md"===this.selectedIconType?"ios":"md"}render(){const s=this.filterIcons(),t=this.data.icons.find(s=>s.name===this.selectedIcon);return s.icon.length||s.logo.length||!this.isHeaderSearchVisible||(document.documentElement.scrollTop=0),i("div",{class:"icon-list"},i("div",{class:"icon-list__search container--small"},i("icon-search",{query:this.query,size:"large",autofocus:"autofocus"})),s.icon.length?i("div",{class:"icon-list__wrapper"},i("div",{class:"icon-list__header-bar"},i("div",{class:"container--small"},i("h4",null,"App icons"),i("ul",{class:"toggle"},i("li",{class:`toggle__item ${"md"===this.selectedIconType?"active":""}`,onClick:s=>this.handleToggleClick(s)},"Material style"),i("li",{class:`toggle__item ${"ios"===this.selectedIconType?"active":""}`,onClick:s=>this.handleToggleClick(s)},"iOS style")))),i("div",{class:"container--small"},i("div",{class:"icon-results"},s.icon.map(s=>i("span",{class:`icon-results__cell ${this.selectedIcon===s.name?"active":""}`,onClick:i=>this.handleIconClick(i,s.name),onMouseEnter:s=>this.handleIconMouseEnter(s),onMouseLeave:s=>this.handleIconMouseLeave(s)},i("i",{class:`ion ion-${this.selectedIconType}-${s.name}`})))))):"",s.logo.length?i("div",{class:"icon-list__wrapper"},i("div",{class:"icon-list__header-bar"},i("div",{class:"container--small"},i("h4",null,"Logos"))),i("div",{class:"container--small"},i("div",{class:"icon-results"},s.logo.map(s=>i("span",{class:`icon-results__cell ${this.selectedIcon===s.name?"active":""}`,onClick:i=>this.handleIconClick(i,s.name),onMouseEnter:s=>this.handleIconMouseEnter(s),onMouseLeave:s=>this.handleIconMouseLeave(s)},i("i",{class:"ion ion-"+s.icon})))))):"",s.icon.length||s.logo.length?"":i("div",{class:"icon-results--empty container--small"},i("h2",null,'No results for "',this.query,'"'),i("p",null,"Not finding an icon that you want? ",i("a",{href:"https://github.com/ionic-team/ionicons/issues"},"File an issue")," and suggest a new icon.")),i("toast-bar",{selectedIcon:t,selectedIconType:this.selectedIconType}))}get el(){return t(this)}static get style(){return"icon-list .icon-list{margin-bottom:100px}icon-list .icon-list__search+.icon-list__wrapper{padding-top:90px}icon-list .icon-list__header-bar{-webkit-transition:-webkit-box-shadow .6s;transition:-webkit-box-shadow .6s;transition:box-shadow .6s;transition:box-shadow .6s,-webkit-box-shadow .6s;margin-bottom:14px;height:52px;background-color:#fff;-webkit-box-shadow:0;box-shadow:0;z-index:99}icon-list .icon-list__header-bar.sticky{position:-webkit-sticky;position:sticky;top:58px;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.06);box-shadow:0 2px 4px 0 rgba(0,0,0,.06)}icon-list .icon-list__header-bar .container--small{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}icon-list .icon-list__header-bar h4{margin-top:21px;margin-bottom:0}icon-list .icon-results{display:grid;grid-template-columns:repeat(auto-fill,minmax(70px,1fr));grid-auto-rows:minmax(70px,auto);grid-gap:.5em;padding-bottom:60px;margin-left:-20px;margin-right:-20px}icon-list .icon-results .ion,icon-list .icon-results__cell{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}icon-list .icon-results__cell{-webkit-transition:background-color .4s;transition:background-color .4s;cursor:pointer;border-radius:8px;border:2px solid transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-tap-highlight-color:rgba(236,240,246,.4)}icon-list .icon-results__cell .ion{width:42px;height:42px;font-size:32px;color:#373737}icon-list .icon-results__cell:not(.active).mouseOver{-webkit-animation-name:shadowIn;animation-name:shadowIn;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}\@-webkit-keyframes shadowIn{0%{-webkit-box-shadow:0;box-shadow:0}to{-webkit-box-shadow:0 3px 6px 0 rgba(0,0,0,.1),0 1px 3px 0 rgba(0,0,0,.08);box-shadow:0 3px 6px 0 rgba(0,0,0,.1),0 1px 3px 0 rgba(0,0,0,.08)}}\@keyframes shadowIn{0%{-webkit-box-shadow:0;box-shadow:0}to{-webkit-box-shadow:0 3px 6px 0 rgba(0,0,0,.1),0 1px 3px 0 rgba(0,0,0,.08);box-shadow:0 3px 6px 0 rgba(0,0,0,.1),0 1px 3px 0 rgba(0,0,0,.08)}}icon-list .icon-results__cell.active,icon-list .icon-results__cell:not(.active).mouseOff{-webkit-animation-name:shadowOut;animation-name:shadowOut;-webkit-animation-duration:.6s;animation-duration:.6s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}icon-list .icon-results__cell.active{-webkit-animation-duration:.3s;animation-duration:.3s}\@-webkit-keyframes shadowOut{0%{-webkit-box-shadow:0 3px 6px 0 rgba(0,0,0,.1),0 1px 3px 0 rgba(0,0,0,.08);box-shadow:0 3px 6px 0 rgba(0,0,0,.1),0 1px 3px 0 rgba(0,0,0,.08)}to{-webkit-box-shadow:0;box-shadow:0}}\@keyframes shadowOut{0%{-webkit-box-shadow:0 3px 6px 0 rgba(0,0,0,.1),0 1px 3px 0 rgba(0,0,0,.08);box-shadow:0 3px 6px 0 rgba(0,0,0,.1),0 1px 3px 0 rgba(0,0,0,.08)}to{-webkit-box-shadow:0;box-shadow:0}}icon-list .icon-results__cell.active{background-color:var(--color-catskill-white);cursor:default}icon-list .icon-results--empty{text-align:center;padding-top:70px}icon-list .icon-results--empty h2{margin-top:0}icon-list .toggle{list-style-type:none;display:-ms-flexbox;display:flex;margin-right:-4px;position:relative;bottom:-3px;margin-top:18px}icon-list .toggle__item{-webkit-transition:opacity .3s,padding-bottom .1s;transition:opacity .3s,padding-bottom .1s;opacity:.5;text-decoration:none;font-size:13px;font-weight:600;color:var(--color-dodger-blue);border-bottom:2px solid transparent}icon-list .toggle__item:not(.active){cursor:pointer}icon-list .toggle__item.active,icon-list .toggle__item:hover{opacity:1}icon-list .toggle__item.active{border-bottom:2px solid var(--color-dodger-blue);padding-bottom:2px}icon-list .toggle__item+.toggle__item{margin-left:20px}icon-list .icon-list__header-bar.sticky .toggle__item{padding-bottom:11px}\@media screen and (max-width:768px){icon-list .icon-results{margin-left:0;margin-right:0}icon-list .icon-list__search+.icon-list__wrapper{padding-top:40px}}\@media screen and (max-width:560px){icon-list .icon-results__cell.active,icon-list .icon-results__cell:not(.active).mouseOff,icon-list .icon-results__cell:not(.active).mouseOver{-webkit-animation-name:none;animation-name:none;-webkit-box-shadow:0;box-shadow:0}}"}};export{e as icon_list};