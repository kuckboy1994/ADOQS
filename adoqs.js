/**
 * 【问卷存在的问题】：
 * 1、存在逻辑闭环（逻辑）
 * 2、清理无用数据效率上的问题（性能）
 *
 * 【题型】：
 * 1、单选 => 0
 * 2、多选 => 1
 * 3、矩阵 => 2
 * 4、文本 => 3
 * 5、滑块 => 4
 *
 * 【跳转类型】：
 * 1、无跳转
 * 2、一选项对一题
 * 3、多选项对一题
 * 4、一题对一题
 * 		4.1、矩阵：全部操作才跳转
 * 		4.2、滑块：操作才跳转
 * 		4.3、文本：输入才跳转
 *
 * 【多选题】：
 * 0、是否必填
 * 1、互斥
 * 2、至少/最多/等于 选几个
 * 3、多选项对一题，数据不清除
 * 
 * 【其他】：
 * 0、单选和多选 选项随机
 * 1、多个题目的选项指向同一题的时候，数据不清除
 * 2、数据清除方面的“节流操作”
 *
 * 【目标】：
 * 1、输入一个逻辑数组，调用相应的方法（传入sourceid【唯一】）
 * 	  清除无用的数据，操作（显示or隐藏）dom。
 */


// http://vote.10jqka.com.cn/webvote/route/959ccca670a87da63e12dd0f2b8c9953
// http://vote.10jqka.com.cn/webvote/api/show/959ccca670a87da63e12dd0f2b8c9953
var questions = [
	{
		qid: 1,
		type: 0,
		isneed: true,
		isdisplay: true,
		option_limit: 1
	}
];

var loop = [
	{	
		qid: 1,			// 问题id
		sourceid: 101,	// 选项id
		aimid: 3,		// 此选项指向的问题的id 
	},{
		qid: 1,
		sourceid: 102,
		aimid: 4,
	},{
		qid: 3,
		sourceid: 103,
		aimid: 5,
	}
];


var Vote = function () {
	
	this._init.apply(this, arguments);
};

Vote.prototype = {
	_init: function (params) {
		var self = this;
		for (var k in params) {
			self[k] = params[k];
		}
	}
}

var vote = new Vote({
	loop: loop,
	prefix: 'vote_'
});

console.dir(vote);