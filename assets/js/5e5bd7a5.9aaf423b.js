"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[9762],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>y});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},l=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(o),y=n,f=p["".concat(u,".").concat(y)]||p[y]||d[y]||r;return o?a.createElement(f,i(i({ref:t},l),{},{components:o})):a.createElement(f,i({ref:t},l))}));function y(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<r;s++)i[s]=o[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},8007:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var a=o(7462),n=(o(7294),o(3905));const r={title:"Two Factor Authentication",slug:"two-factor-authentication",hidden:!1,createdAt:"2021-08-13T17:42:26.363Z",updatedAt:"2021-08-13T20:45:38.933Z"},i="Two Factor Authentication for BaaS Users",c={unversionedId:"Developer/BaaS Portal Onboarding/two-factor-authentication",id:"Developer/BaaS Portal Onboarding/two-factor-authentication",title:"Two Factor Authentication",description:"Two-factor authentication is an extra layer of security for your BaaS user account designed to ensure that you're the only person that can access your account, even if someone knows your password.",source:"@site/docs/Developer/BaaS Portal Onboarding/two-factor-authentication.md",sourceDirName:"Developer/BaaS Portal Onboarding",slug:"/Developer/BaaS Portal Onboarding/two-factor-authentication",permalink:"/Developer/BaaS Portal Onboarding/two-factor-authentication",draft:!1,editUrl:"https://github.com/Topl/knowledge-base/edit/main/docs/Developer/BaaS Portal Onboarding/two-factor-authentication.md",tags:[],version:"current",frontMatter:{title:"Two Factor Authentication",slug:"two-factor-authentication",hidden:!1,createdAt:"2021-08-13T17:42:26.363Z",updatedAt:"2021-08-13T20:45:38.933Z"},sidebar:"developerSidebar",previous:{title:"Topl API Keys",permalink:"/Developer/BaaS Portal Onboarding/topl-api-keys"},next:{title:"User Settings",permalink:"/Developer/BaaS Portal Onboarding/user-settings"}},u={},s=[{value:"How it works",id:"how-it-works",level:2},{value:"Verification Codes",id:"verification-codes",level:2},{value:"Set up two-factor authentication for your BaaS account",id:"set-up-two-factor-authentication-for-your-baas-account",level:2},{value:"What to remember when you use two-factor authentication",id:"what-to-remember-when-you-use-two-factor-authentication",level:2},{value:"Manage your account",id:"manage-your-account",level:2},{value:"Frequently asked questions",id:"frequently-asked-questions",level:2},{value:"What if I forget my password?",id:"what-if-i-forget-my-password",level:3},{value:"If logged into BaaS",id:"if-logged-into-baas",level:4},{value:"From the login page",id:"from-the-login-page",level:4},{value:"What if I can&#39;t access my authenticator application?",id:"what-if-i-cant-access-my-authenticator-application",level:3},{value:"If I can&#39;t sign in, how do I regain access to my account?",id:"if-i-cant-sign-in-how-do-i-regain-access-to-my-account",level:3},{value:"Do I need to remember any security questions?",id:"do-i-need-to-remember-any-security-questions",level:3},{value:"Can I turn off two-factor authentication after I&#39;ve turned it on?",id:"can-i-turn-off-two-factor-authentication-after-ive-turned-it-on",level:3}],l={toc:s};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"two-factor-authentication-for-baas-users"},"Two Factor Authentication for BaaS Users"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Two-factor authentication is an extra layer of security for your BaaS user account designed to ensure that you're the only person that can access your account, even if someone knows your password.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.readme.io/295c98d-Screen_Shot_2021-08-13_at_1.55.38_PM.png",alt:"2fa"})),(0,n.kt)("h2",{id:"how-it-works"},"How it works"),(0,n.kt)("p",null,"With two-factor authentication, only you can access your account. When you want to sign into your BaaS account, you'll need to provide two pieces of information -- your password and the six-digit verification code that's automatically displayed on your authenticator application. By entering the code, you're verifying that it is you that is logging in."),(0,n.kt)("p",null,"Because your password alone is no longer enough to access your account, two-factor authentication dramatically improves the security of your BaaS user account and all of the information that you store with Topl."),(0,n.kt)("h2",{id:"verification-codes"},"Verification Codes"),(0,n.kt)("p",null,"A verification code is a temporary code generated by an authenticator application and is requested when you sign into BaaS."),(0,n.kt)("p",null,"Note that a verification code is different than your password."),(0,n.kt)("h2",{id:"set-up-two-factor-authentication-for-your-baas-account"},"Set up two-factor authentication for your BaaS account"),(0,n.kt)("p",null," You can follow these steps to turn on two-factor authentication for your account"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to Settings."),(0,n.kt)("li",{parentName:"ol"},'Click on "Enable two factor authentication"'),(0,n.kt)("li",{parentName:"ol"},"Download one of our supported authenticator apps",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Authy"),(0,n.kt)("li",{parentName:"ul"},"1Password"),(0,n.kt)("li",{parentName:"ul"},"Microsoft Authenticator"),(0,n.kt)("li",{parentName:"ul"},"Google Authenticator\nand use it to scan the QR code."))),(0,n.kt)("li",{parentName:"ol"},"Use the 6 digit code generated by the application to verify your application and turn on two factor authentication."),(0,n.kt)("li",{parentName:"ol"},"Save the recovery codes somewhere safe.")),(0,n.kt)("p",null,"This is a list of 20 codes generated during the configuration of 2FA. These codes are a single time use only. New recovery codes can be generated if needed, however previous recovery codes would not work after this step."),(0,n.kt)("h2",{id:"what-to-remember-when-you-use-two-factor-authentication"},"What to remember when you use two-factor authentication"),(0,n.kt)("p",null,"Two-factor authentication significantly improves the security of your BaaS account. After you turn it on, signing into your account will require both your password and access to your verified authenticator application. To keep your account as secure as possible and help ensure you never lose access, there are a few simple guidelines you should follow:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Remember your BaaS password."),(0,n.kt)("li",{parentName:"ul"},"Download the authenticator app on all of your devices and verify with all devices."),(0,n.kt)("li",{parentName:"ul"},"Keep your trusted device physically secure.")),(0,n.kt)("h2",{id:"manage-your-account"},"Manage your account"),(0,n.kt)("p",null,"You can manage your 2FA settings and other account information from your BaaS Account page."),(0,n.kt)("h2",{id:"frequently-asked-questions"},"Frequently asked questions"),(0,n.kt)("p",null,"Need help? You might find the answer to your question below."),(0,n.kt)("h3",{id:"what-if-i-forget-my-password"},"What if I forget my password?"),(0,n.kt)("p",null,"You can reset of change your password when you follow these steps."),(0,n.kt)("h4",{id:"if-logged-into-baas"},"If logged into BaaS"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to Settings"),(0,n.kt)("li",{parentName:"ol"},"Click on Change Password"),(0,n.kt)("li",{parentName:"ol"},"Type new password into the New Password and Confirm New Password fields")),(0,n.kt)("h4",{id:"from-the-login-page"},"From the login page"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'Click on "forgot your password"'),(0,n.kt)("li",{parentName:"ol"},"Type in the email for your account"),(0,n.kt)("li",{parentName:"ol"},"Click on the reset my password link that should be sent to your email.")),(0,n.kt)("h3",{id:"what-if-i-cant-access-my-authenticator-application"},"What if I can't access my authenticator application?"),(0,n.kt)("p",null,"If you're signing in and don't have your authenticator application handy that can display verification codes, you can then use the recovery codes that were generated when you enabled two-factor authentication.\nSimply click on \"Enter recovery code\" on the two-factor authentication screen, and enter one of your recovery codes."),(0,n.kt)("h3",{id:"if-i-cant-sign-in-how-do-i-regain-access-to-my-account"},"If I can't sign in, how do I regain access to my account?"),(0,n.kt)("p",null,"If you can't sign in, receive verification codes, or access your recovery codes, you can request account recovery to regain access to your account. Account recovery is our process designed to get you back into your account as quickly as possible while denying access to anyone who might be pretending to be you. It might take a few days, or longer, depending on what specific account information you can provide to verify your identity."),(0,n.kt)("p",null,"You can begin the account recovery process by emailing ",(0,n.kt)("a",{parentName:"p",href:"mailto:support@topl.me"},"support@topl.me")," with your BaaS username and a description of the issue. We will then reach out to you in the next couple of days to begin the manual recovery process."),(0,n.kt)("h3",{id:"do-i-need-to-remember-any-security-questions"},"Do I need to remember any security questions?"),(0,n.kt)("p",null,"No. With two-factor authentication, you don't need to remember any security questions. We verify your identity exclusively using your password and verification codes."),(0,n.kt)("h3",{id:"can-i-turn-off-two-factor-authentication-after-ive-turned-it-on"},"Can I turn off two-factor authentication after I've turned it on?"),(0,n.kt)("p",null,"If you already use two-factor authentication, you can turn it off. Just open your settings and click the disable button. Keep in mind, this makes your account less secure and means that you are potentially putting your information at higher risk."))}d.isMDXComponent=!0}}]);