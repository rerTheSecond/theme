function f(e){window.enmity.plugins.registerPlugin(e)}var b="TimeDate",y="1.5.0",S="Check the worldwide time",B=[{name:"Fel1x",id:"499287211381096458"}],D={name:b,version:y,description:S,authors:B};function l(e,o,s,t){window.enmity.clyde.sendReply(e,o,s,t)}var c;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.Guild=1]="Guild",e[e.DM=2]="DM"})(c||(c={}));var u;(function(e){e[e.Chat=1]="Chat",e[e.User=2]="User",e[e.Message=3]="Message"})(u||(u={}));var d;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.BuiltInText=1]="BuiltInText",e[e.BuiltInIntegration=2]="BuiltInIntegration",e[e.Bot=3]="Bot",e[e.Placeholder=4]="Placeholder"})(d||(d={}));var a;(function(e){e[e.Role=1]="Role",e[e.User=2]="User"})(a||(a={}));var m;(function(e){e[e.SubCommand=1]="SubCommand",e[e.SubCommandGroup=2]="SubCommandGroup",e[e.String=3]="String",e[e.Integer=4]="Integer",e[e.Boolean=5]="Boolean",e[e.User=6]="User",e[e.Channel=7]="Channel",e[e.Role=8]="Role",e[e.Mentionnable=9]="Mentionnable",e[e.Number=10]="Number",e[e.Attachment=11]="Attachment"})(m||(m={}));var g;(function(e){e[e.ApplicationCommand=2]="ApplicationCommand",e[e.MessageComponent=3]="MessageComponent"})(g||(g={})),window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native,window.enmity.modules.common.React,window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token;const U=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;const M={id:"urban-dict",name:"urban",displayName:"urban",description:"Urban Dictionary it",displayDescription:"Urban Dictionary it",type:u.Chat,inputType:d.BuiltInText,options:[{name:"text",displayName:"text",description:"Text to define",displayDescription:"Text to define",type:m.String,required:!0},{name:"send",displayName:"send",description:"Do you want to send the output?",displayDescription:"Do you want to send the output?",type:m.Boolean,required:!1}],execute:async function(e,o){var s,t,i,r;let v=e[0].value,w=await U.get(`https://www.timeanddate.com/worldclock/${v}`),n=(t=(s=w.body)==null?void 0:s.list[0])==null?void 0:t.definition,h=((r=(i=w.body)==null?void 0:i.list[0])==null?void 0:r.permalink)||"Unknown";if(!n)return l(o.channel.id,"Could not find time for this place."),{};if(n=`Time in ${e[0].value}:
\`\`\`${n}
\`\`\`
link: <${h}>`,e.length==2&&e[1].value)return{content:n};l(o.channel.id,n)}},N=[M],x={...D,commands:[],onStart(){this.commands=N},onStop(){Patcher.unpatchAll()}};f(x);
