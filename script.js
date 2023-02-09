const inputEl=document.querySelector("#password"),upperCaseCheckEl=document.querySelector("#uppercase-check"),symbolCheckEl=document.querySelector("#symbol-check"),numberCheckEl=document.querySelector("#number-check"),securityIndicatorBarEl=document.querySelector("#security-indicator-bar");let passwordlength=20;function generatePassword(){let a="abcdefghjklmnpqrstuvwxyz";upperCaseCheckEl.checked&&(a+="ABCDEFGHJKLMNPQRSTUVWXYZ"),symbolCheckEl.checked&&(a+=".+-[]*~_@#:?!()"),numberCheckEl.checked&&(a+="123456789");let b="";for(i=0;i<passwordlength;i++){const c=Math.floor(Math.random()*a.length);b+=a.substring(c,c+1)}inputEl.value=b,calculateQualitySecurity(),calculateFontSize()}function calculateQualitySecurity(){const a=Math.round(.25*(100*(passwordlength/60))+(upperCaseCheckEl.checked?15:0)+(symbolCheckEl.checked?35:0)+(numberCheckEl.checked?25:0));securityIndicatorBarEl.style.width=`${a}%`,69<a?(securityIndicatorBarEl.classList.remove("critical"),securityIndicatorBarEl.classList.remove("warning"),securityIndicatorBarEl.classList.add("safe")):50<a?(securityIndicatorBarEl.classList.remove("critical"),securityIndicatorBarEl.classList.add("warning"),securityIndicatorBarEl.classList.remove("safe")):(securityIndicatorBarEl.classList.add("critical"),securityIndicatorBarEl.classList.remove("warning"),securityIndicatorBarEl.classList.remove("safe")),100<=a?securityIndicatorBarEl.classList.add("completed"):securityIndicatorBarEl.classList.remove("completed")}function calculateFontSize(){45<passwordlength?(inputEl.classList.remove("font-sm"),inputEl.classList.remove("font-xs"),inputEl.classList.add("font-xxs")):32<passwordlength?(inputEl.classList.remove("font-sm"),inputEl.classList.add("font-xs"),inputEl.classList.remove("font-xxs")):22<passwordlength?(inputEl.classList.add("font-sm"),inputEl.classList.remove("font-xs"),inputEl.classList.remove("font-xxs")):(inputEl.classList.remove("font-sm"),inputEl.classList.remove("font-xs"),inputEl.classList.remove("font-xxs"))}function copy(){navigator.clipboard.writeText(inputEl.value)}const passwordlengthEL=document.querySelector("#password-length");passwordlengthEL.addEventListener("input",function(){passwordlength=passwordlengthEL.value,document.querySelector("#passoword-lenght-text").innerText=passwordlength,generatePassword()}),upperCaseCheckEl.addEventListener("click",generatePassword),symbolCheckEl.addEventListener("click",generatePassword),numberCheckEl.addEventListener("click",generatePassword),document.querySelector("#renew").addEventListener("click",generatePassword),document.querySelector("#copy-1").addEventListener("click",copy),document.querySelector("#copy-2").addEventListener("click",copy),generatePassword();