// 获取输入框
const input = document.querySelector(".email");

// 获取提示词
const prompt = document.querySelector(".prompt");

// 获取提交按钮
const submitBtn = document.querySelector(".submit");

// 获取表单
const form = document.querySelector("form");

// 实时监测 + 正则表达式 检查输入内容是否符合邮箱格式
function emailFormatCheck(email) {
	// check for correctness as an email
	// const reg = /^\w*(\-\w)?(\.\w*)?@\w*(-\w*)?\.\w{2,3}(\.\w{2,3})?$/;
	// check for correctness as an HKU email
	const reg = /[\w-]+@((connect.hku.hk)|(hku.hk))/;
	return reg.test(email);
}

// 为输入框绑定格式检查函数
input.addEventListener("input", (event) => {
	const email = event.target.value;
	const isFormatted = emailFormatCheck(email);
	if (isFormatted) {
		input.classList.remove("red");
		input.classList.add("green");
		// 启用按钮
		submitBtn.disabled = false;
	} else {
		input.classList.remove("green");
		input.classList.add("red");
		// 禁用按钮
		submitBtn.disabled = true;
	}
});

// 修复失去焦点时提示词和邮箱重叠问题
let tempEmail = "";
input.addEventListener("focus", () => {
	input.value = tempEmail;
});

input.addEventListener("blur", () => {
	// 失去焦点时保存临时输入, 并擦除输入框内容
	tempEmail = input.value;
	input.value = "";
});

// 提交函数
function submit(event) {
	// 阻止默认行为, 防止页面刷新
	event.preventDefault();
	// 获取邮箱
	// input.value在点击按钮时会被擦除, 所以使用tempEmail
	const email = tempEmail;
	// 获取UID
	const UID = email.substring(0, email.indexOf("@"));
	// 生成节点, 添加节点到DOM
	const node = document.createElement("div");
	node.innerText = UID;
	node.classList.add("UID"); // 添加样式
	form.appendChild(node);
	// 去除input框内容
	input.value = "";
	tempEmail = "";
}

// 绑定提交函数
submitBtn.addEventListener("click", submit);

// 提示词动画函数
input.addEventListener("focus", () => {
	prompt.classList.add("animation");
});

input.addEventListener("blur", () => {
	prompt.classList.remove("animation");
});
