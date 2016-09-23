/* 柱图组件对象 */

var H5ComponentBar=function(name,cfg){
	var component=new H5ComponentBase(name,cfg);	
	$.each(cfg.data,function(idx,item){
				
		var line=$('<div class="line">');
		var name=$('<div class="name">');
		var rate=$('<div class="rate">');
		var per=$('<div class="per">');
		
		var width=item[1]*100+'%';
		
		var bgStyle='';
		if(item[1]){
			bgStyle='style="background-color:'+item[2]+'"';
			}
		rate.html('<div class="bg"'+bgStyle+'></div>');//bg负责展现生长动画
		rate.css('width',width);
		
		name.text(item[0]);
		line.append(name).append(rate).append(per);
		per.text(width);
		component.append(line);
		});
	
	
	return component;
	
	}