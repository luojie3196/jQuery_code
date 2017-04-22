$(document).ready(function() {
	// $('input[type=submit]').click(function(event) {
	// 	/* Act on the event */
	// 	alert('click me');
	// });
	// $('#box').css({
	// 	color: 'red',
	// 	'font-size': '16px',
	// });

	// jQuery('#box').append('<p>Some text</p>');
	// $('p').css({
	// 	color: 'green',
	// });

	//alert($('#box').get(0));
	//alert($('#box').width(200));

	//jQuery.noConflict();
	//var $$=jQuery;

	//alert($$('input').get(0));

	// $('.pox').css('color', '#ccc');

	//alert($('li').length);

	// $('#box > p').css('color', 'blue');

	// $('div').find('p').css('color', '#666');

	// $('div').children('p').css('color', 'red');

	// $('div').next('p').css('color', 'blue');

	// $('div').nextAll('p').css('color', 'green');

	// $('div').prev('p').css('font-size', '30px');

	//$('#box').siblings().css('color', 'red');

	//$('#box').prevUntil('p').css('color', 'red');

	//$('input[type=submit]').css('color', 'orange');

	//$('input[value]').css('color', 'orange');

	// $('li:first').css('color', 'orange');

	// $('li:last').css('color', 'red');

	//$('li:not(.red)').css('color', 'blue');

	// $('li:even').css('color', 'orange');
	// $('li:odd').css('color', 'green');
	// $('li:eq(2)').text(200);

	//$(':header').css('background-color', 'orange');

	// $('#box p:contains("jquery")').css('color', 'red');

	// $('ul:has(.red)').css('background-color', 'green');

	//$('li').parent().css('background-color', '#ccc');

	//$('li').parents().css('background-color', '#ccc');

	//alert($('p:hidden').length);

	//alert($('li').is('.red'));

	// alert($('.red').is(function(){
	// 	return $(this).attr('title') == '1';
	// }));

	//alert($('#cont').html());
	//$('#cont').html('<h2>abcdefg</h2>');
	//alert($('#cont').text('666666666'));

	//$('#cont').text('<em>www.baidu.com</em>');
	//$('#cont').html($('#cont').html() + '<em>www.baidu.com</em>');

	//alert($('#email').val('rogse'));

	//$('#select').attr('title', 'num');
	//alert($('#select').find('option').length);
	// $('#email').attr('title', function(){
	// 	return '请填写电子邮件！'
	// });

	// $('#select').find('option').attr('title', function(index, value){
	// 	return (index + 2)
	// });

	//alert($('#p_tag').css('display'));

	// var box = $('div').css(['color', 'height', 'width']); //得到多个CSS 样式的数组对象
	// for (var i in box) { //逐个遍历出来
	// 	alert(i + ':' + box[i]);
	// }

	// $('li').each(function (index, element) { //index 为索引，element 为元素DOM
	// 	alert(index + ':' + element);
	// });

	// $.each(box, function (attr, value) { //遍历JavaScript 原生态的对象数组
	// 	alert(attr + ':' + value);
	// });

	// var arr1 = [[1, 4, 3], [4, 6, 6], [7, 20, 9]]  
	// $.each(arr1, function(i, item){  
	//  	alert(i + ':'+item);  
	// }); 

	// $('li').each(function (index, element) { //index 为索引，element 为元素DOM
	// 	alert(index + ':' + element);
	// });

	// var obj = { one:1, two:2, three:3, four:4};  
	// $.each(obj, function(key, val) {  
 // 		alert(obj[key]);    
	// });
	// $('li').each(function(index, el) {
	// 	$(this).text(index + 10);
	// 	//alert(index + ': ' + el);
	// });

	// var count = 0;
	// $('#button').click(function () { //每点击两次切换一次red
	// 	// alert(count);
	// 	$(this).toggleClass('red', count++ % 3 == 0);
	// });

	 $('ul').hide();
	 $('#box').hide();

	//var extra = '<div id="dox">append新节点</div>'；
	// $('body').append('<div id="dox">append新节点</div>');

	// $('#insert').append(function(index, html){
	// 	return '<strong>节点</strong>'
	// });

	// $('span').appendTo('#insert');

	// $('#insert').prepend('<span>节点</span>');

	// $('#insert').after('<span>after节点</span>');
	// $('#insert').before('<span>before节点</span>');

	// $('span').insertAfter('#insert'); //将span 元素移到div 元素外部的后面
	// $('.pox').insertBefore('#insert');

	// $('#insert').wrap('<strong></strong>');

	// $('#insert').wrap('<strong><em></em></strong>');

	// $('#insert').wrap($('strong').get(0));
	// $('#insert').wrapInner('<strong></strong>');

	// $('body').append($('#button').clone(true));

	//$('#insert').remove();
	// $('div').remove('#box');只删除id=box 的div
	//$('div').empty(); //删除掉节点里的内容

	// $('#sub').click(function(event) {
	// 	 Act on the event 
	// 	alert($('input').eq(1).val());
	// });
	
	// $(':input').each(function(index, el) {
	// 	alert(index + ':' + el);	
	// });

	//表单选择器
	// :input 选取所有input、textarea、select 和button 元素
	// :text 选择所有单行文本框，即type=text
	//:password 选择所有密码框，即type=password
	//:radio 选择所有单选框，即type=radio
	//:checkbox 选择所有复选框，即type=checkbox
	//:submit 选取所有提交按钮，即type=submit
	//:reset 选取所有重置按钮，即type=reset
	//:image 选取所有图像按钮，即type=image
	//:button 选择所有普通按钮，即button 元素
	//:file 选择所有文件按钮，即type=file
	//:hidden 选择所有不可见字段，即type=hidden

	//表单过滤器
	//:enabled 选取所有可用元素
	//:disabled 选取所有不可用元素
	//:checked 选取所有被选中的元素，单选和复选字段
	//:selected 选取所有被选中的元素，下拉列表

	// $('#but').bind('click', function(event) {
	// 	/* Act on the event */
	// 	alert('被点击了');
	// });

	// $('#but').bind('click', fn);

	// function fn(){
	// 	alert('click now!');
	// }
/*
	$('#but').bind('mouseout mouseover', dat, function(event) {
		 //Act on the event 
		$('#stron').html(function(index, value){
			return value + '1';
		});
	});


	$('#but').bind({
		'mouseout': function(){
			alert('移出');
		},
		'mouseover': function(){
			alert('移入');
		}
	});

	$('#but').unbind('click'); //删除当前元素的click 事件

	function fn1() {
		alert('点击1');
	}
	function fn2() {
		alert('点击2');
	}
	$('#but').bind('click', fn1);
	$('#but').bind('click', fn2);
	$('#but').unbind('click', fn1);

click(fn) 鼠标触发每一个匹配元素的click(单击)事件
dblclick(fn) 鼠标触发每一个匹配元素的dblclick(双击)事件
mousedown(fn) 鼠标触发每一个匹配元素的mousedown(点击后)事件
mouseup(fn) 鼠标触发每一个匹配元素的mouseup(点击弹起)事件
mouseover(fn) 鼠标触发每一个匹配元素的mouseover(鼠标移入)事件
mouseout(fn) 鼠标触发每一个匹配元素的mouseout(鼠标移出)事件
mousemove(fn) 鼠标触发每一个匹配元素的mousemove(鼠标移动)事件
mouseenter(fn) 鼠标触发每一个匹配元素的mouseenter(鼠标穿过)事件
mouseleave(fn) 鼠标触发每一个匹配元素的mouseleave(鼠标穿出)事件
keydown(fn) 键盘触发每一个匹配元素的keydown(键盘按下)事件
keyup(fn) 键盘触发每一个匹配元素的keyup(键盘按下弹起)事件
keypress(fn) 键盘触发每一个匹配元素的keypress(键盘按下)事件
unload(fn) 文档当卸载本页面时绑定一个要执行的函数
resize(fn) 文档触发每一个匹配元素的resize(文档改变大小)事件
scroll(fn) 文档触发每一个匹配元素的scroll(滚动条拖动)事件
focus(fn) 表单触发每一个匹配元素的focus(焦点激活)事件
blur(fn) 表单触发每一个匹配元素的blur(焦点丢失)事件
focusin(fn) 表单触发每一个匹配元素的focusin(焦点激活)事件
focusout(fn) 表单触发每一个匹配元素的focusout(焦点丢失)事件
select(fn) 表单触发每一个匹配元素的select(文本选定)事件
change(fn) 表单触发每一个匹配元素的change(值改变)事件
submit(fn) 表单触发每一个匹配元素的submit(表单提交)事件


	$('#email').keydown(function (e) {
		alert(e.keyCode); //按下a 返回65
		$(this).empty();
	});

	$('#email').keypress(function (e) {
		alert(e.charCode); //按下a 返回97
	});


	//背景移入移出切换效果
	$('span').hover(function () {
		$(this).css('background', 'black'); //mouseenter 效果
	}, function () {
		$(this).css('background', 'red'); //mouseleave 效果，可省略
	});

	var flag=1;
	$('#cont').click(function() {
		if(flag == 1){
			$(this).css('color', 'blue');
			flag=2;
		}else if(flag == 2){
			$(this).css('color', 'green');
			flag++;
		}else if(flag == 3){
			$(this).css('color', 'red');
			flag=1;
		}
	});

event 对象的属性
type 获取这个事件的事件类型，例如：click
target 获取绑定事件的DOM 元素
data 获取事件调用时的额外数据
relatedTarget 获取移入移出目标点离开或进入的那个DOM 元素
currentTarget 获取冒泡前触发的DOM 元素，等同与this
pageX/pageY 获取相对于页面原点的水平/垂直坐标
screenX/screenY 获取显示器屏幕位置的水平/垂直坐标(非jQuery 封装)
clientX/clientY 获取相对于页面视口的水平/垂直坐标(非jQuery 封装)
result 获取上一个相同事件的返回值
timeStamp 获取事件触发的时间戳
which 获取鼠标的左中右键(1,2,3)，或获取键盘按键
altKey/shiftKey/
ctrlKey/metaKey
获取是否按下了alt、shift、ctrl(这三个非jQuery 封装)或
meta 键(IE 原生meta 键，jQuery 做了封装)	


	$('#but').click(function (e) {
		alert(e.type);
		alert(e.target);
	});


	$('#but').bind('click', '123', function(event) {
		alert(event.data);
	});
如果字符串就传递：'123'、如果是数组就传递：[123,'abc']，如果是对象就传递：
{user : 'Lee', age : 100}。数组的调用方式是：e.data[1]，对象的调用方式是：e.data.user或者e.data['user'].


	$('#but').mouseover(function (e) {
		alert(e.relatedTarget);
	});

	$('#but').mousedown(function (e) {
		alert(e.which);
	});


	//获取触发元素鼠标当前的位置
	$(document).click(function (e) {
		alert(e.screenY+ ',' + e.pageY + ',' + e.clientY);
	});

冒泡和默认行为
preventDefault() 取消某个元素的默认行为
isDefaultPrevented() 判断是否调用了preventDefault()方法
stopPropagation() 取消事件冒泡
isPropagationStopped() 判断是否调用了stopPropagation()方法
stopImmediatePropagation() 取消事件冒泡，并取消该事件的后续事件处理函数
isImmediatePropagationStopped() 判断是否调用了stopImmediatePropagation()方法

	$('a').click(function (e) {
		e.preventDefault();
	});	

	//禁止提交表单跳转
	$('form').submit(function (e) {
		e.preventDefault();
	});

如果想让上面的超链接同时阻止默认行为且禁止冒泡行为，可以把两个方法同时
写上：event.stopPropagation()和event.preventDefault()。这两个方法如果需要同时启用的时候，
还有一种简写方案代替，就是直接return false。
	$('a').click(function (e) {
		return false;
	});	
*/








});