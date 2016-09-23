/* 基本图文组件对象 */

var H5ComponentBase=function(name,cfg){
	var cfg=cfg||{};
	//为每个组件设置唯一的ID
	var id=('h5_c_'+Math.random()).replace('.','_');
	//把当前的组件类型添加到样式中进行标记
	var cls='h5_component_'+cfg.type;
	var component=$('<div class="h5_component '+cls+' h5_component_name_'+name+'" id="'+id+'">');
	//如果cfg里面有text参数，则把此参数文本写进去
	cfg.text && component.text(cfg.text);
	
	cfg.width&& component.width(cfg.width/2);
	cfg.height&&component.height(cfg.height/2);

	cfg.css&& component.css(cfg.css);
	cfg.bg&&component.css('backgroundImage','url('+cfg.bg+')');

	if(cfg.center===true){
		component.css({
			marginLeft:(cfg.width/4*-1)+'px',
			left:'50%'
			})
		}
	//...很多字定义的参数
	
	if(typeof cfg.onclick==='function'){
		component.on('click',cfg.onclick);
		
		}
	component.on('onLoad',function(){//component为当前的组件对象，可以触发一些事件
		setTimeout(function(){
			//不确定图文组件的展现方式，因此先标记当前组件(增加load事件，并删除上次执行的leave事件)
			component.addClass(cls+'_load').removeClass(cls+'_leave');
			
			cfg.animateIn&&component.animate(cfg.animateIn);//animate为jQuery的方法，可执行相应的一些动画
			},cfg.delay||0)
		return false;//此事件执行完不再向上传播（DOM事件传播属于无限循环）
		})
	component.on('onLeave',function(){
		setTimeout(function(){
			//增加leave事件，并删除上次执行的load事件
		component.addClass(cls+'_leave').removeClass(cls+'_load');
		
		cfg.animateOut&&component.animate(cfg.animateOut);
			},cfg.delay||0)
		return false;
		})
			
	return component;
	
	}