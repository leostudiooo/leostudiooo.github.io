<template>
	<div>
		<div class="input-container">
			<label for="min">Minimum:</label>
			<input type="number" v-model="min" id="min" name="min">
		</div>
		
		<div class="input-container">
			<label for="max">Maximum:</label>
			<input type="number" v-model="max" id="max" name="max">
		</div>
		
		<div class="button-container" >
			<button @click="generateRandomNumber">Generate</button>
		</div>
		
		<p id="result">{{ result }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			min: null,
			max: null,
			result: '',
			intervalId: null
		};
	},
	methods: {
		generateRandomNumber() {
			if (isNaN(this.min) || isNaN(this.max)) {
				alert("Please enter valid numbers for the range.");
				return;
			}
			
			this.intervalId = setInterval(() => {
				const randomNumber = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
				this.result = `${randomNumber}`;
			}, 50);

			setTimeout(() => {
				clearInterval(this.intervalId);
			}, 2000);
		}
	},
	mounted() {
		document.addEventListener("keyup", (event) => {
			if (event.key === "Enter") {
				this.generateRandomNumber();
			}
		});
	}
};
</script>

<style scoped>
#result {
	font-size: 72px;
	font-weight: bold;
	text-align: center;
}

.input-container {
	margin-bottom: 10px;
}

.input-container label {
	display: block;
	margin-bottom: 5px;
}

.input-container input {
	padding: 5px;
	border: 1px solid #ccc;
	border-radius: 4px;
	text-align: center;
}

.button-container {
	margin-top: 10px;
}

.button-container button {
	padding: 10px 20px;
	background-color: #4CAF50;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
}

.button-container button:hover {
	background-color: #45a049;
}
</style>