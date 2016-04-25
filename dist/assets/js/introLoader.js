!function(e){e.introLoader=function(n,o){var t={animation:{name:"simpleLoader",options:{exitFx:"fadeOut",ease:"linear",style:"light",delayBefore:500,delayAfter:0,exitTime:300,animationTime:300,customGif:!0,customGifBgColor:!1,progbarTime:300,progbarDelayAfter:300,loaderText:"Website is Ready!",lettersDelayTime:1,preventScroll:!1,fixed:!0,stop:!0,onAfter:function(){},onBefore:function(){}}},spinJs:{}},i=this;i.settings={};var n=(e(n),n);i.init=function(){i.settings=e.extend(!0,t,o);var s={lines:this.settings.spinJs.lines,length:this.settings.spinJs.length,width:this.settings.spinJs.width,radius:this.settings.spinJs.radius,corners:this.settings.spinJs.corners,rotate:this.settings.spinJs.rotate,direction:this.settings.spinJs.direction,color:this.settings.spinJs.color,speed:this.settings.spinJs.speed,trail:this.settings.spinJs.trail,shadow:this.settings.spinJs.shadow,hwaccel:this.settings.spinJs.hwaccel,className:this.settings.spinJs.className,zIndex:this.settings.spinJs.zIndex,top:this.settings.spinJs.top,left:this.settings.spinJs.left},d=i.settings.animation.name,c=i.settings.animation.options,s=i.settings.spinJs;switch(d){case"simpleLoader":i.spinner=new Spinner(s).spin(),l(n,c,s);break;case"doubleLoader":p(n,c);break;case"lettersLoader":i.spinner=new Spinner(s).spin(),u(n,c,s);break;case"counterLoader":i.spinner=new Spinner(s).spin(),v(n,c,s);break;case"gifLoader":a(n,c);break;case"cssLoader":r(n,c);break;default:i.spinner=new Spinner(s).spin(),l(n,c,s)}},i.stop=function(){switch(i.settings.animation.name){case"simpleLoader":c();break;case"doubleLoader":f();break;case"lettersLoader":m();break;case"counterLoader":h();break;case"gifLoader":d();break;case"cssLoader":s()}},i.destroy=function(){e(n).removeData()};var r=function(n,o){o.onBefore(),L(n,o,"cssLoader");var t="";t+='<div class="cssLoaderSpinner">',t+='   <div class="cssLoaderSpinner-inner"></div>',t+="</div>",e(n).html(t),e(n).show(),o.stop===!0&&e(window).on("load",function(){s()})},s=function(){var e=i.settings.animation.options;g(e,!1)},a=function(n,o){o.onBefore(),L(n,o,"gifLoader");var t="";t="background-image: url("+o.customGif+");",console.log(o.customGif);var i="";i+='<div id="introLoaderSpinner" class="gifLoaderInner" style="'+t+'">',i+="</div>",e(n).html(i),e(n).show(),o.stop===!0&&e(window).on("load",function(){d()})},d=function(){var e=i.settings.animation.options;g(e,!1)},l=function(n,o,t){o.onBefore(),L(n,o,"simpleLoader");var r="";r+='<div id="introLoaderSpinner" class="introLoaderInner">',r+="</div>",e(n).html(r),e(n).show();var s=document.getElementById("introLoaderSpinner");i.spinner.spin(s),o.stop===!0&&e(window).on("load",function(){c()})},c=function(){var e=i.settings.animation.options;g(e,!0)},p=function(n,o){o.onBefore(),L(n,o,"doubleLoader");var t="";t+='<div class="doubleLoaderTop"></div>',t+='<div class="doubleLoaderBottom"></div>',t+='<div class="doubleLoaderProgBar"><span></span></div>',e(n).html(t),e(n).show(),o.stop===!0&&e(window).on("load",function(){f()})},f=function(){function o(){setTimeout(function(){e(n).find(".doubleLoaderProgBar").hide(),e(n).find(".doubleLoaderTop, .doubleLoaderBottom").animate({height:0},t.exitTime,t.ease,function(){e(n).hide(),t.preventScroll===!0&&e("body").removeClass("introLoader_preventScroll")}),e(".doubleLoaderBottom").promise().done(function(){t.onAfter()})},t.progbarTime+t.progbarDelayAfter)}var t=i.settings.animation.options;setTimeout(function(){e(n).find(".doubleLoaderProgBar").find("span").animate({width:"100%"},t.progbarTime,t.ease,o())},t.delayBefore)},u=function(n,o,t){o.onBefore(),L(n,o,"lettersLoader");var r=w(o.loaderText,"lettersLoaderItem"),s="";s+='<div id="introLoaderSpinner" class="introLoaderInner"></div>',s+='<div id="lettersLoaderAnimation" class="lettersLoaderRow">',s+=r,s+="</div>",e(n).html(s),e(n).show();var a=document.getElementById("introLoaderSpinner");i.spinner.spin(a),o.stop===!0&&e(window).on("load",function(){m()})},m=function(){var o=i.settings.animation.options;setTimeout(function(){i.spinner.stop(),e(n).find(".lettersLoaderRow").show();var t=e(n).find(".lettersLoaderItem");t.each(function(n){var t=this;e(t).animate({opacity:1},o.animationTime*(n+o.lettersDelayTime),o.ease)}),t.promise().done(function(){o.delayBefore=o.delayAfter,g(o,!1)})},o.delayBefore)},v=function(n,o){o.onBefore(),L(n,o,"counterLoader");var t="";t+='<div class="counterLoaderBox">',t+='   <span id="counterLoader" class="counterLoader number">0</span><span class="counterLoader percent">%</span>',t+="</div>",e(n).html(t),e(n).show(),o.stop===!0&&e(window).on("load",function(){h()})},h=function(){var o=i.settings.animation.options;setTimeout(function(){e(n).find(".counterLoaderBox").fadeIn(),e(n).find(".counterLoaderBox").promise().done(function(){jQuery({Counter:0}).animate({Counter:100},{duration:o.animationTime,easing:"swing",step:function(){e("#counterLoader").text(Math.ceil(this.Counter))},done:function(){o.delayBefore=o.delayAfter,g(o,!1)}})})},o.delayBefore)},L=function(n,o,t){o.preventScroll===!0&&e("body").addClass("introLoader_preventScroll");var i="theme-"+o.style;o.fixed===!1&&(e(n).addClass("absolute"),e(n).parent().css({position:"relative",overflow:"hidden"})),e(n).addClass("introLoader "+t+" "+i)},g=function(o,t){setTimeout(function(){switch(o.exitFx){case"fadeOut":e(n).fadeOut(o.exitTime,o.ease,function(){t===!0&&e("#introLoaderSpinner").remove(),o.preventScroll===!0&&e("body").removeClass("introLoader_preventScroll"),o.onAfter()});break;case"slideUp":t===!0&&i.spinner.stop(),e(n).animate({bottom:e(window).height()},o.exitTime,o.ease,function(){e(n).hide(),e("#introLoaderSpinner").remove(),o.preventScroll===!0&&e("body").removeClass("introLoader_preventScroll"),o.onAfter()});break;case"slideDown":t===!0&&i.spinner.stop(),e(n).animate({top:e(window).height()},o.exitTime,o.ease,function(){e(n).hide(),e("#introLoaderSpinner").remove(),o.preventScroll===!0&&e("body").removeClass("introLoader_preventScroll"),o.onAfter()});break;case"slideLeft":t===!0&&i.spinner.stop(),e(n).animate({right:e(window).width(),left:"-100%"},o.exitTime,o.ease,function(){e(n).hide(),e("#introLoaderSpinner").remove(),o.preventScroll===!0&&e("body").removeClass("introLoader_preventScroll"),o.onAfter()});break;case"slideRight":t===!0&&i.spinner.stop(),e(n).animate({left:e(window).width(),right:"-100%"},o.exitTime,o.ease,function(){e(n).hide(),e("#introLoaderSpinner").remove(),o.preventScroll===!0&&e("body").removeClass("introLoader_preventScroll"),o.onAfter()});break;default:e(n).fadeOut(o.exitTime,o.ease,function(){t===!0&&e("#introLoaderSpinner").remove(),o.preventScroll===!0&&e("body").removeClass("introLoader_preventScroll"),o.onAfter()})}},o.delayBefore)},w=function(e,n){for(var o=e.split(""),t="",i=0;i<o.length;i++){var r=n;" "==o[i]&&(r=n+"-space",o[i]=" "),t+='<span class="'+r+'">'+o[i]+"</span>"}return t};i.init()},e.fn.introLoader=function(n){return this.each(function(){if(void 0==e(this).data("introLoader")){var o=new e.introLoader(this,n);e(this).data("introLoader",o)}else{e(this).removeData("introLoader");var o=new e.introLoader(this,n);e(this).data("introLoader",o)}})}}(jQuery);