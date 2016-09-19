/**
 * @name Hermit
 * @version 1.9.3
 * @create 2014-02-07
 * @lastmodified 2015-10-06 14:32
 * @description Hermit Plugin
 * @author MuFeng (http://mufeng.me)
 * @url http://mufeng.me/hermit-for-wordpress.html
 **/
jQuery(document).ready(function(b){function n(c,a){if(d.array="","xiami"==c)switch(d.type){case "songlist":if((a=a.match(/song\/(\d+)/gi))&&0<a.length){var e=[];b.each(a,function(a,c){-1===b.inArray(c,e)&&e.push(c)});d.array=e.join(",").replace(/song\//g,"")}break;case "album":(a=a.match(/album\/(\d+)/gi))&&0<a.length&&(d.array=a[0].replace(/album\//g,""));break;case "collect":(a=a.match(/collect\/(\d+)/gi))&&0<a.length&&(d.array=a[0].replace(/collect\//g,""))}if("netease"==c)switch(d.type){case "netease_songs":(a=
a.match(/song\?id=(\d+)/gi))&&0<a.length&&(e=[],b.each(a,function(a,c){-1===b.inArray(c,e)&&e.push(c)}),d.array=e.join(",").replace(/song\?id=/g,""));break;case "netease_radio":(a=a.match(/djradio\?id=(\d+)/gi))&&0<a.length&&(d.array=a[0].replace(/djradio\?id=/g,""));break;case "netease_album":(a=a.match(/album\?id=(\d+)/gi))&&0<a.length&&(d.array=a[0].replace(/album\?id=/g,""));break;case "netease_playlist":(a=a.match(/playlist\?id=(\d+)/gi))&&0<a.length&&(d.array=a[0].replace(/playlist\?id=/g,""))}"remote"==
c&&(d.type="remote",d.array=a);d.array?b("#hermit-shell-insert").removeAttr("disabled"):b("#hermit-shell-insert").attr("disabled","disabled");k(c,d)}function k(c,a){l='[hermit auto="'+a.auto+'" loop="'+a.loop+'" unexpand="'+a.unexpand+'" fullheight="'+a.fullheight+'"]'+a.type+"#:"+a.array+"[/hermit]";b("#hermit-preview").text(l).addClass("texted")}void 0===window.send_to_editor&&(window.send_to_editor=function(b){var a,d="undefined"!=typeof tinymce,e="undefined"!=typeof QTags;if(wpActiveEditor)d&&
(a=tinymce.get(wpActiveEditor));else if(d&&tinymce.activeEditor)a=tinymce.activeEditor,wpActiveEditor=a.id;else if(!e)return!1;if(a&&!a.isHidden()?a.execCommand("mceInsertContent",!1,b):e?QTags.insertContent(b):document.getElementById(wpActiveEditor).value+=b,window.tb_remove)try{window.tb_remove()}catch(f){}});var f,l,h,r=b("#hermit-create"),e=b("body"),p=b("#hermit-template").html(),t=Handlebars.compile(p),p=b("#hermit-remote-template").html(),q=Handlebars.compile(p),d={type:"",array:"",auto:0,
loop:0,unexpand:0,fullheight:0},m=1,g=!1;r.length?r.click(function(){f="netease";d={type:"",array:"",auto:0,loop:0,unexpand:0,fullheight:0};l="";e.append(t());b("body").addClass("hermit-hidden")}):1==hermit.roles.length&&"contributor"==hermit.roles[0]&&(b("#wp-content-editor-tools").prepend('<div id="wp-content-media-buttons" class="wp-media-buttons"><a id="hermit-create" class="button" href="javascript:;" title="\u6dfb\u52a0\u97f3\u4e50"><img src="'+hermit.plugin_url+'/assets/images/logo@2x.png" width="16" height="16"> \u6dfb\u52a0\u97f3\u4e50</a></div>'),
b("#wp-content-editor-tools").on("click","#hermit-create",function(){f="netease";d={type:"",array:"",auto:0,loop:0,unexpand:0,fullheight:0};l="";e.append(t());b("body").addClass("hermit-hidden")}));e.on("click","#hermit-shell-close",function(){b("#hermit-shell").remove();b("body").removeClass("hermit-hidden")});e.on("click","#hermit-shell-insert",function(){"disabled"!=b(this).attr("disabled")&&(send_to_editor(l),b("#hermit-shell").remove());b("body").removeClass("hermit-hidden")});e.on("click","#hermit-remote-content ul li",
function(){var c=b(this),a=[];c.hasClass("selected")?c.removeClass("selected"):c.addClass("selected");b("#hermit-remote-content ul li.selected").each(function(){a.push(b(this).attr("data-id"))});a=a.join(",");n(f,a)});e.on("click",".media-router a",function(){var c=b(this),a=b(".media-router a").index(c);c.hasClass("active")||(b(".media-router a.active,.hermit-li.active").removeClass("active"),c.addClass("active"),b(".hermit-li").eq(a).addClass("active"),f=b(".hermit-li").eq(a).attr("data-type"),
"remote"==f&&(h?b("#hermit-remote-content ul").html(q(h)):b.ajax({url:hermit.ajax_url,data:{action:"hermit_source",type:"list",paged:1},beforeSend:function(){g=!0},success:function(a){g=!1;h=a;b("#hermit-remote-content ul").html(q(h));b("#hermit-remote-button").text("\u52a0\u8f7d\u66f4\u591a  (1/"+hermit.max_page+")").show()},error:function(){m=0;g=!1;b("#hermit-remote-button").text("\u52a0\u8f7d\u66f4\u591a  (0/"+hermit.max_page+")").show();alert("\u83b7\u53d6\u5931\u8d25, \u8bf7\u7a0d\u5019\u91cd\u8bd5")}})))});
e.on("click","#hermit-auto",function(){var c=b(this);d.auto=c.prop("checked")?1:0;k(f,d)});e.on("click","#hermit-loop",function(){var c=b(this);d.loop=c.prop("checked")?1:0;k(f,d)});e.on("change","#hermit-unexpand",function(){var c=b(this);d.unexpand=c.prop("checked")?1:0;k(f,d)});e.on("change","#hermit-fullheight",function(){var c=b(this);d.fullheight=c.prop("checked")?1:0;k(f,d)});e.on("change",".hermit-li.active input",function(){var c=b(".hermit-li.active .hermit-textarea").val();d.type=b(".hermit-li.active input:checked").val();
n(f,c)});e.on("focus keyup input paste",".hermit-textarea",function(){var c=b(this).val();d.type=b(".hermit-li.active input:checked").val();n(f,c)});e.on("click","#hermit-remote-button",function(){g||(m>=hermit.max_page?b(this).text("\u5df2\u662f\u6700\u540e\u4e00\u9875").fadeOut(1500,function(){b(this).hide()}):(g=!0,b(this).addClass("loading").text("\u52a0\u8f7d\u4e2d..."),b.ajax({url:hermit.ajax_url,data:{action:"hermit_source",type:"list",paged:m+1},success:function(c){h.data=h.data.concat(c.data);
b("#hermit-remote-content ul").append(q(c));m++;b("#hermit-remote-button").text("\u52a0\u8f7d\u66f4\u591a  ("+m+"/"+hermit.max_page+")");g=!1},error:function(){alert("\u83b7\u53d6\u5931\u8d25, \u8bf7\u7a0d\u5019\u91cd\u8bd5");g=!1}})))})});