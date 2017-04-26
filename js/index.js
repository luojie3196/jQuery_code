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


	$('#but').click(function () {
		alert('我的第一次点击来自模拟！');
	}).trigger('click');

	$('#but').click(function (e, data1, data2) {
		alert(data1 + ',' + data2);
	}).trigger('click', ['abc', '123']);


	$('#but').click(function(event, dat1, dat2) {
		alert(dat1.a + ',' + dat2[1]);
	}).trigger('click', [{'a': '1', 'b': '2'}, ['123', 456]]);


	$('#but').bind('myEvent', function(event) {
		alert(event.type);
	}).trigger('myEvent');

.trigger()方法提供了简写方案，只要想让某个事件执行模拟用户行为，直接再调用一个
空的同名事件即可。
	$('#but').click(function () {
		alert('我的第一次点击来自模拟！');
	}).click(); //空的click()执行的是trigger()
支持简写的事件：
blur focusin mousedown resize
change focusout mousenter scroll
click keydown mouseleave select
dblclick keypress mousemove submit
error keyup mouseout unload
focus load mouseover

1..triggerHandler()方法并不会触发事件的默认行为，而.trigger()会。
$('form').trigger('submit'); //模拟用户执行提交，并跳转到执行页面
$('form').triggerHandler('submit'); //模拟用户执行提交，并阻止的默认行为
如果我们希望使用.trigger()来模拟用户提交，并且阻止事件的默认行为，则需要这么写：
$('form').submit(function (e) {
e.preventDefault(); //阻止默认行为
}).trigger('submit');

2..triggerHandler()方法只会影响第一个匹配到的元素，而.trigger()会影响所有。

3..triggerHandler()方法会返回当前事件执行的返回值，如果没有返回值，则返回
undefined；而.trigger()则返回当前包含事件触发元素的jQuery 对象(方便链式连缀调用)。
alert($('input').click(function () {
return 123;
}).triggerHandler('click')); //返回123，没有return 返回

	alert($('#but').click(function () {
		console.log('click but');
		return 123;
	}).trigger('click'));    //jQuery对象

4..trigger()在创建事件的时候，会冒泡。但这种冒泡是自定义事件才能体现出来，是
jQuery 扩展于DOM 的机制，并非DOM 特性。而.triggerHandler()不会冒泡。
var index = 1;
$('div').bind('myEvent',function(){
alert('自定义事件' + index);
index++;
});
$('.div3').trigger("myEvent");	

二．命名空间
有时，我们想对事件进行移除。但对于同名同元素绑定的事件移除往往比较麻烦，这个
时候，可以使用事件的命名空间解决。
$('input').bind('click.abc', function () {
alert('abc');
});
$('input').bind('click.xyz', function () {
alert('xyz');
});
$('input').unbind('click.abc'); //移除click 实践中命名空间为abc 的

三．事件委托
在jQuery 中，我们通过事件冒泡的特性，让子元素绑定的事件冒泡到父元素(或祖先元素)
上，然后再进行相关处理即可。
	$('.xbutton').on('click', function (e) {
		console.log(e.currentTarget);
		alert('替代.bind()');
	});

事件委托的好处
万一子元素非常多，给每个子元素都添加一个事件，会影响到性能；
为动态添加的元素也能绑上指定事件；

on(events,[selector],[data],fn)
demo1:
点击相应的li弹出里面内容,这里把on换成bind是一样的没有区别.也就是说on不使用selector属性与bind并无区别 
<ul>
 <li>1</li>
 <li>2</li>
 <li>3</li>
</ul>
<script>
 $(function () {
  $('ul li').on('click',function(){
   alert($(this).text())
  }); 
 })
</script>

demo2:
<script>
 // 这种情况你会发现点击第四个不具备事件.也就是不具备动态绑定事件能力
 $(function () {
  $('ul li').bind('click',function(){
   alert($(this).text())
  }); 
  var ok = $('<li>4</li>');
  $('ul').last().append(ok);
 
 })
</script>

demo3:
<script>
 // 换成on的写法,添加selector属性,就是通过事件冒泡,进行了事件委托,把li的事件委托给其父元素,点击后面加入的li就默认绑定了事件
 $(function () {
  $('ul').on('click','li',function(){
   alert($(this).text())
  }); 
  var ok = $('<li>4</li>');
  $('ul').last().append(ok);
 })
</script>

jQuery 还提供了三种预设速度参数字符串：slow、
normal 和fast，分别对应600 毫秒、400 毫秒和200 毫秒。

	$('.show').click(function(){
		$("#xbox").show(1000);
	});

	$('.show').click(function () {
		$('#xbox').show('slow', function () {
			alert('动画持续完毕后，执行我！');
		});
	});	

	$('.hide').click(function(){
		$("#xbox").hide('normal');
	});

	$('.show').click(function () {
		$('#ul_id').first().show(2000, function showSpan() {
			$(this).next().show(2000, showSpan);
		});
	});	

Ajax:
1.JavaScript，通过用户或其他与浏览器相关事件捕获交互行为；
2.XMLHttpRequest 对象，通过这个对象可以在不中断其它浏览器任务的情况下向服务
器发送请求；
3.服务器上的文件，以XML、HTML 或JSON 格式保存文本数据；
4.其它JavaScript，解释来自服务器的数据（比如PHP 从MySQL 获取的数据）并将其
呈现到页面上。

	$('#input_ajax').click(function(event) {
		$('#box_ajax').load('test.html');
	});	

	//get方式
	$('#input_ajax').click(function(event) {
		$('#box_ajax').load('test.php?url=baidu');
	});


	//post方式
	$('#input_ajax').click(function () {
		$('#box_ajax').load('test.php', {
			url : 'baidu'
		}, function(response, status, xhr){
			alert('Return value: ' + response + 
				', Status: ' + status + 
				', XHR: ' + xhr.statusText);
		});
	});	

XMLHttpRequest对象属于JavaScript 范畴，可以调用一些属性如下：
属性名说明
responseText 作为响应主体被返回的文本
responseXML
如果响应主体内容类型是"text/xml"或"application/xml"，
则返回包含响应数据的XML DOM 文档
status 响应的HTTP 状态
statusText HTTP 状态的说明	

1.GET 请求是通过URL 提交的，而POST 请求则是HTTP 消息实体提交的；
2.GET 提交有大小限制（2KB），而POST 方式不受限制；
3.GET 方式会被缓存下来，可能有安全性问题，而POST 没有这个问题；
4.GET 方式通过$_GET[]获取，POST 方式通过$_POST[]获取。



	//使用$.get()异步返回html 类型
	$('#input_ajax').click(function () {
		$.get('test.php', {
			url : 'baidu'
		}, function (response, status, xhr) {
			if (status == 'success') {
				console.log(response);
				$('#box_ajax').html(response);
			}
		}) //type 自动转为html
	});

	//使用$.get()异步返回html 类型
	$('#input_ajax').click(function () {
		$.post('test.php', {
			url : 'baidu'
		}, function (response, status, xhr) {
			if (status == 'success') {
				console.log(response);
				$('#box_ajax').html(response);
			}
		}) //type 自动转为html
	});	

	$('#input_ajax').click(function(event) {
		$.ajax({
			url: 'test.php',
			type: 'POST',
			dataType: 'html',
			data: {url: 'baidu'},
		})
		.done(function(response, status, xhr) {
			console.log("success");
			$('#box_ajax').html(response);
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
	});	


	$('form input[type=button]').click(function(event) {
		$.ajax({
			url: 'test.php',
			type: 'POST',
			data: $('form').serialize(),
		})
		.done(function(response, status, xhr) {
			console.log("success");
			console.log($('form').serialize());
			alert(response);
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
	});


	$(':radio').click(function () {
		$('#box_ajax').html(decodeURIComponent($(this).serialize()));
	});


	$(':radio').click(function () {
		console.log($(this).serializeArray());
		var json = $(this).serializeArray();
		$('#box_ajax').html(json[0].value);
	});

	//使用$.param()方法将对象转换为字符串键值对格式。
	var obj = {a : 1, b : 2, c : 3};
	var form = $.param(obj);
	alert(form);

	$('.loading').hide();

	$(document).ajaxStart(function() {
		$('.loading').show();
	}).ajaxStop(function() {
		$('.loading').hide();
	});
	
	$(document).ajaxSuccess(function(event, xhr, settings) {
		for (var i in settings){
			$('#box_ajax').html($('#box_ajax').html() + i + '<br/>');
		}
	});

	$('form input[type=button]').click(function(event) {
		$.ajax({
			url: 'test.php',
			type: 'POST',
			data: $('form').serialize(),
		})
		.done(function(response, status, xhr) {
			console.log("success");
			console.log($('form').serialize());
			//$('#box_ajax').html(response);
			console.log(response);
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
	});

	$('#input_ajax').click(function(){
		$.ajax({
			url: 'test.json',
			type: 'POST',
			//dataType: 'json',
		})
		.done(function(response, status, xhr) {
			//console.log("success");
			console.log(response);
			//alert(response[0].url);
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
	});

	var jqXHR = $.ajax({
		type : 'POST',
		url : 'test.php',
		data : $('form').serialize()
	});
	for (var i in jqXHR) {
	document.write(i + '<br />');
	}


	var str='      jquery    ';
	alert(str);
	alert($.trim(str));

	//$.each()遍历数组
	var arr = ['张三', '李四', '王五', '马六'];
	$.each(arr, function (index, value) {
		$('#box_ajax').html($('#box_ajax').html() + index + '.' + value + '<br />');
	});

	//$.each()遍历对象
	$.each($.ajax(), function (name, fn) {
		$('#box_ajax').html($('#box_ajax').html() + name + '.' + '<br /><br />');
	})

	//$.grep()数据筛选
	var arr = [5,2,9,4,11,57,89,1,23,8];
	var arrGrep = $.grep(arr, function (element, index) {
		return element < 6 && index < 5;
	});
	alert(arrGrep);


//$.map()修改数据
	var arr = [5,2,9,4,11,57,89,1,23,8];
	var arrMap = $.map(arr, function (element, index) {
		if (element < 6 && index < 5) {
			return element + 1;
		}
	});
	alert(arrMap);


	//$.inArray()获取查找到元素的下标
	var arr = [5,2,9,4,11,57,89,1,23,8];
	var arrInArray = $.inArray(1, arr);
	alert(arrInArray);	


	//$.merge()合并两个数组
	var arr = [5,2,9,4,11,57,89,1,23,8];
	var arr2 = [23,2,89,3,6,7];
	alert($.merge(arr, arr2));


	//$.unique()删除重复的DOM 元素
	var divs = $('div').get();
	divs = divs.concat($('.box').get());
	alert($(divs).size());
	$.unique(divs);
	alert($(divs).size());

	//.toArray()合并多个DOM 元素组成数组
	alert($('li').toArray());

测试工具函数
$.isArray(obj) 判断是否为数组对象，是返回true
$.isFunction(obj) 判断是否为函数，是返回true
$.isEmptyObject(obj) 判断是否为空对象，是返回true
$.isPlainObjet(obj) 判断是否为纯粹对象，是返回true
$.contains(obj) 判断DOM 节点是否含另一个DOM 节点，是返回true
$.type(data) 判断数据类型
$.isNumeric(data) 判断数据是否为数值
$.isWindow(data) 判断数据是否为window 对象

URL 操作
：$.param()，将对象的键值对转化为URL 键值对字符串形式。	
	var obj = {
		name : 'Lee',
		age : 100
	};
	alert($.param(obj));

$.proxy()可以解决诸如外部事件触发调用对象方法时this的指向问题。	
*/

	$('#val_form').validate();

	$('#dialog').dialog({
		'title': 'Login',
		'buttons': {
			'Submit': function(){
				//alert('Submit');
				$(this).submit();
			},
			'Cancel': function(){
				$(this).dialog('close');
			},
		},
		'width': 400,
		'height': 320,
		'show': false,
		'hide': false,
		'modal': true,
		'resizable': false,
		'draggable': true,
		'closeText': 'Close dialog',
		//'autoOpen': false,
		'closeOnEscape': false,
		//submitHandler: function(form){
			// $(form).ajaxSubmit({
			// 	url: 'test.php',
			// 	type: 'POST',
			// });
		//	alert('Submit success!');
		//},

	});

	$('#reg_a').click(function(){
		$('#dialog').dialog('open');
	});

	$('#reg_a').button();
	$('#login_a').button();

	$('#dialog').submit(function () {
		$(this).ajaxSubmit({
			url: 'test.php',
			type: 'POST',
			//target: '#dialog_box',
			dataType : null,  //xml,json,script,默认为 null
			//clearForm : true, //成功提交后,清空表单
			//resetForm : true,

			beforeSubmit : function (formData, jqForm, options) {
				//alert(formData[0].name);//得到传递表单元素的 name
				//alert(formData[0].value);//得到传递表单元素的 value
				//alert(jqForm);//得到 form 的 jquery 对象
				//alert(options);//得到目前 options 设置的属性
				//alert('正在提交中!!!');
				$.each(formData, function(index, value){
					console.log(index + ': ' + value.name + '=' + value.value);
				})
				return true;
			},

			success : function (responseText, statusText, xhr) {
				console.log(responseText + statusText + xhr);  //成功后回调
			},
		});

		return false;
	});

	//$('#dialog').buttonset();
	$('#date').datepicker();
	$('#dialog').validate();
	$('#dialog input[title]').tooltip();





});