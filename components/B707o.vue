<template>

	<div class="b707o-container">
		<div ref="hint" id="hint">
			<p>{{ hintMessage }}</p>
		</div>

		<div id="button-container">
			<button v-show="showAREntry" id="ar_entry" @click="handleModelClick('ar_entry')">打开 AR 体验</button>
			<button v-show="showUSDZ" id="usdz_model" @click="handleModelClick('usdz_model')">查看 3D 模型 (USDZ 格式,
				1:1)</button>
			<button v-show="showUSDZ" id="usdz_001_model" @click="handleModelClick('usdz_001_model')">查看 3D 模型 (USDZ 格式,
				1:100)</button>
			<button v-show="showWebXR" id="webxr_entry" @click="handleModelClick('webxr_entry')">打开 WebXR 体验</button>
			<button id="in_browser_model" @click="handleModelClick('in_browser_model')">在浏览器中查看 3D 模型 (Beta)</button>
			<button v-show="showGLB" id="glb_model" @click="handleModelClick('glb_model')">查看 3D 模型 (GLB 格式,
				1:1)</button>
			<button v-show="showGLB" id="glb_001_model" @click="handleModelClick('glb_001_model')">查看 3D 模型 (GLB 格式,
				1:100)</button>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const hintMessage = ref('')
const showAREntry = ref(false)
const showUSDZ = ref(false)
const showWebXR = ref(false)
const showGLB = ref(false)

const modelUrls = {
	ar_entry: 'https://cdn.idealclover.cn/Projects/chilichill/B707o.reality',
	usdz_model: 'https://cdn.idealclover.cn/Projects/chilichill/B707o.usdz',
	usdz_001_model: 'https://cdn.idealclover.cn/Projects/chilichill/B707o_001.usdz',
	webxr_entry: 'https://8th.io/fazgz',
	in_browser_model: '3d_view.html',
	glb_model: 'https://cdn.idealclover.cn/Projects/chilichill/B707o.glb',
	glb_001_model: 'https://cdn.idealclover.cn/Projects/chilichill/B707o_001.glb'
}

const modelHints = {
	ar_entry: '正在加载 AR 体验……模型约 8 MB，请耐心等待。如果弹出下载窗口，则可以打开下载的 B707o.reality 文件进行体验。',
	usdz_model: '正在加载 3D 模型……模型约 3 MB，请耐心等待。如果弹出下载窗口，则可以打开下载的 B707o.usdz 文件进行体验。',
	usdz_001_model: '正在加载 3D 模型……模型约 3 MB，请耐心等待。如果弹出下载窗口，则可以打开下载的 B707o_001.usdz 文件进行体验。',
	webxr_entry: '正在跳转到 WebXR 体验……由 8th Wall 提供托管，加载需要时间，请耐心等待。',
	in_browser_model: '正在加载 3D 模型……模型约 3 MB，请耐心等待。如果加载不出，请考虑使用代理。',
	glb_model: '正在加载 3D 模型……模型约 3 MB，请耐心等待。如果弹出下载窗口，则可以打开下载的 B707o.glb 文件进行体验。',
	glb_001_model: '正在加载 3D 模型……模型约 3 MB，请耐心等待。如果弹出下载窗口，则可以打开下载的 B707o_001.glb 文件进行体验。'
}

const handleModelClick = (modelId) => {
	hintMessage.value = modelHints[modelId]
	const a = document.createElement('a')
	a.href = modelUrls[modelId]
	a.rel = 'ar'
	a.click()
}

onMounted(() => {
	const touchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
	const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
	const supportsXR = !!navigator.xr

	if (isSafari) {
		if (!touchScreen) {
			hintMessage.value = '当前设备不支持 AR 卡片，请使用 iPhone 或 iPad 打开该页面以体验。不过，你仍然可以：'
			showAREntry.value = false
			showUSDZ.value = true
			showWebXR.value = true
			showGLB.value = false
			console.log('macOS Safari detected, enabling USDZ and WebXR entry, disabling AR entry.')
		} else {
			hintMessage.value = '请点击下方按钮打开 AR 体验（如果弹出下载窗口，请选择"显示"，也可以下载到本地后体验），然后将相机对准上面的卡片。你也可以查看 1:1 比例的 3D 模型（当然，你会需要一片非常宽阔的场地）和 1:100 模型（其实这个也不小）。如果网络不佳，可以尝试 WebXR 体验。'
			showAREntry.value = true
			showUSDZ.value = true
			showWebXR.value = true
			showGLB.value = false
			console.log('iOS Safari detected, enabling AR image display, enabling AR entry, disabling GLB model entry.')
		}
	} else if (supportsXR) {
		hintMessage.value = '当前设备设备仅支持 WebXR，无法识别 AR 卡片，但仍可以在 AR 模式下查看飞机模型。若要获得完整体验，建议使用 iPhone 或 iPad 的 Safari 浏览器打开。你现在可以：'
		showAREntry.value = false
		showUSDZ.value = false
		showWebXR.value = true
		showGLB.value = true
		console.log('WebXR supported, enabling WebXR entry, disabling AR entry.')
	} else {
		hintMessage.value = '请使用 iPhone、iPad 的 Safari 浏览器或支持 WebXR 的设备打开该页面以体验增强现实（AR）卡片。不过，你仍然可以：'
		showAREntry.value = false
		showUSDZ.value = false
		showWebXR.value = true
		showGLB.value = true
		console.log('No ARKit or WebXR support detected, enabling WebXR 3D entry, disabling AR entry.')
	}

	// 设置图片尺寸
	const arImg = document.getElementById('ar_img')
	if (arImg) {
		const dpi = window.devicePixelRatio * 96
		const mmInPx = 50 * (dpi / 25.4)
		arImg.style.width = `${mmInPx}px`
	}
})
</script>

<style scoped>
button {
	background-color: #4CAF50;
	border: none;
	border-radius: 999px;
	color: white;
	padding: 12px 16px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 4px 2px;
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
	cursor: pointer;
	transition: ease-in-out 150ms;
}

button:hover {
	background-color: #50bb54;
	padding: 14px 18px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}

button:active {
	background-color: #3e8e41;
	padding: 10px 14px;
	box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.4);
}

#button-container {
	display: flex !important;
	flex-wrap: wrap;
	justify-content: center !important;
}
</style>