   /*
     * ���ƣ����ڣ�checkboxȫѡ����
     * ˵�������ȫѡǰ��checkbox��ȫѡָ��name=��������input[type=checkbox].checked=true
     * ������
     *      docheck��ȫѡǰ��checkbox�����ж����Ƿ�checked����ʵ��ȫѡ����ȫ��ѡ��this��
     *      checkname����Ӧ��ȫѡ��checkboxԪ�����ͳһname ���ַ�����
     * ���ã�zlzpUtils.checkAll(this,'checklist');
     * ���ߣ�chris.cai
     */
  var zlzpUtils={};
   zlzpUtils.checkAll = function(docheck,checkname) {
   var _form = $(docheck).closest('form'),
    _checks = $('input[name='+checkname+']',_form);
    _checks.attr('checked',docheck.checked);

 };
 

/*--------------------------------------------------��֤---------------------------------------------------*/
var tagNo = 1000;
function createErrTag(obj, msg, parent, btn){
  var tag = getErrTag(obj, parent);
  var pos = obj;
  parent = parent || 0;
  if (!tag){
    tag = $("<div id=\"tip-x-validate-"+(tagNo++)+"\" class=\"tip-x-validate-error\">"+msg+"</div>");    
    for (var i=0; i < parent; i++){
      pos = pos.parent();
    }
    tag.css({left: pos.offset().left, top: pos.offset().top});
    pos.after(tag);
    obj.bind("click", function(){
      if (obj[0].tagName.toLowerCase() === "input" && obj[0].type.toLowerCase() === "radio"){
        tag.show();
        for (var i=0; i<obj.length; i++){
          if (obj[i].checked){
            tag.hide();
          }
        }
      } else {
        tag.hide();
        obj.removeClass("input-x-validate-error");
      }
    });
    if (btn){
      btn.bind("click",function(){
        tag.hide();
        obj.removeClass("input-x-validate-error");
      });
    }
  } else {
	if (msg){
		tag.html(msg);
	}
    tag.show();
  }
  if (obj[0].tagName.toLowerCase() !== "input" || obj[0].type.toLowerCase() === "text" || obj[0].type.toLowerCase() === "textarea"){    
    obj.addClass("input-x-validate-error");
  }
  return tag; 
}
function getErrTag(obj, parent){
  var pos = obj;
  parent = parent || 0;
  for (var i=0; i < parent; i++){
    pos = pos.parent();
  }
  pos = pos.next("div");
  if (pos.hasClass("tip-x-validate-error")){
    return pos;
  } else {
    return null;
  }
}