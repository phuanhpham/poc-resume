(function(){
  const key = "site_lang";
  function setLang(lang){
    try{ localStorage.setItem(key, lang); }catch(e){}
    document.documentElement.setAttribute("data-lang", lang);
    const jp = document.getElementById("btn-jp");
    const en = document.getElementById("btn-en");
    if(jp && en){
      jp.setAttribute("aria-pressed", lang==="jp" ? "true":"false");
      en.setAttribute("aria-pressed", lang==="en" ? "true":"false");
    }
  }
  function getLang(){
    const urlLang = new URL(location.href).searchParams.get("lang");
    if(urlLang === "jp" || urlLang === "en") return urlLang;
    try{
      const saved = localStorage.getItem(key);
      if(saved === "jp" || saved === "en") return saved;
    }catch(e){}
    return "jp";
  }
  window.addEventListener("DOMContentLoaded", function(){
    setLang(getLang());
    const y = document.getElementById("y");
    if(y) y.textContent = new Date().getFullYear();
    const jp = document.getElementById("btn-jp");
    const en = document.getElementById("btn-en");
    if(jp) jp.addEventListener("click", ()=> setLang("jp"));
    if(en) en.addEventListener("click", ()=> setLang("en"));
  });
})();
