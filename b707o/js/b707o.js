function setElementSizeInMM(element, sizeInMM) {
	const dpi = window.devicePixelRatio * 96; // 获取设备的 DPI
	const mmInPx = sizeInMM * (dpi / 25.4);  // 1 inch = 25.4 mm
	element.style.width = `${mmInPx}px`;
}

setElementSizeInMM(document.getElementById("ar_img"), 50);

function toggleDisplay(elements, isVisible) {
	elements.forEach(el => {
		document.getElementById(el).style.display = isVisible ? "inline-block" : "none";
	});
}

function showHint(message) {
	document.getElementById("hint").innerHTML = `<p>${message}</p>`;
}

const touchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const supportsXR = !!navigator.xr;

if (isSafari) {
	if (!touchScreen) {
		showHint("当前设备不支持 AR 卡片，请使用 iPhone 或 iPad 打开该页面以体验。不过，你仍然可以：");
		toggleDisplay(["ar_entry"], false);
		toggleDisplay(["usdz_model", "usdz_001_model", "webxr_entry"], true);
		toggleDisplay(["glb_model", "glb_001_model"], false);
		console.log("macOS Safari detected, enabling USDZ and WebXR entry, disabling AR entry.");
	} else {
		showHint("请点击下方按钮打开 AR 体验，然后将相机对准上面的卡片。你也可以查看 1:1 比例的 3D 模型（当然，你会需要一片非常宽阔的场地）和 1:100 模型（其实这个也不小）。如果网络不佳，可以尝试 WebXR 体验。");
		toggleDisplay(["ar_entry", "usdz_model", "usdz_001_model", "webxr_entry"], true);
		toggleDisplay(["glb_model", "glb_001_model"], false);
		document.getElementById("sheet_preview").style.display = "none";
		document.getElementById("sheet_preview").insertAdjacentHTML("afterend", "<p>当前设备不支持在页面内预览 PDF 文件，请点击上方链接预览/下载。</p>");
		console.log("iOS Safari detected, enabling AR image display, enabling AR entry, disabling GLB model entry.");
	}
} else if (supportsXR) {
	showHint("当前设备设备仅支持 WebXR，无法识别 AR 卡片，但仍可以在 AR 模式下查看飞机模型。若要获得完整体验，建议使用 iPhone 或 iPad 的 Safari 浏览器打开。你现在可以：");
	toggleDisplay(["ar_entry", "usdz_model", "usdz_001_model"], false);
	toggleDisplay(["webxr_entry", "glb_model", "glb_001_model"], true);
	console.log("WebXR supported, enabling WebXR entry, disabling AR entry.");
} else {
	showHint("请使用 iPhone、iPad 的 Safari 浏览器或支持 WebXR 的设备打开该页面以体验增强现实（AR）卡片。不过，你仍然可以：");
	toggleDisplay(["ar_entry", "usdz_model", "usdz_001_model"], false);
	toggleDisplay(["webxr_entry", "glb_model", "glb_001_model"], true);
	console.log("No ARKit or WebXR support detected, enabling WebXR 3D entry, disabling AR entry.");
}

function addModelClickListener(id, href, hintMessage) {
	document.getElementById(id).addEventListener("click", function () {
		showHint(hintMessage);
		let a = document.createElement("a");
		a.href = href;
		a.rel = "ar";
		a.click();
	});
}

addModelClickListener("ar_entry", "https://cdn.idealclover.cn/Projects/chilichill/B707o.reality", "正在加载 AR 体验……模型约 3 MB，请耐心等待。如果弹出下载窗口，则可以打开下载的 B707o.reality 文件进行体验。");
addModelClickListener("usdz_model", "https://cdn.idealclover.cn/Projects/chilichill/B707o.usdz", "正在加载 3D 模型……模型约 3 MB，请耐心等待。如果弹出下载窗口，则可以打开下载的 B707o.usdz 文件进行体验。");
addModelClickListener("usdz_001_model", "https://cdn.idealclover.cn/Projects/chilichill/B707o_001.usdz", "正在加载 3D 模型……模型约 3 MB，请耐心等待。如果弹出下载窗口，则可以打开下载的 B707o_001.usdz 文件进行体验。");
addModelClickListener("webxr_entry", "https://8th.io/fazgz", "正在跳转到 WebXR 体验……由 8th Wall 提供托管，加载需要时间，请耐心等待。");
addModelClickListener("glb_model", "https://cdn.idealclover.cn/Projects/chilichill/B707o.glb", "正在加载 3D 模型……模型约 3 MB，请耐心等待。如果弹出下载窗口，则可以打开下载的 https://cdn.idealclover.cn/Projects/chilichill/B707o.glb 文件进行体验。");
addModelClickListener("glb_001_model", "https://cdn.idealclover.cn/Projects/chilichill/B707o_001.glb", "正在加载 3D 模型……模型约 3 MB，请耐心等待。如果弹出下载窗口，则可以打开下载的 B707o_001.glb 文件进行体验。");