<template>
	<section class="quote-list p-8 max-w-[720px] my-0 mx-auto">
		<div class="quote bg-white p-4 rounded-2xl mb-4" v-for="(quote, i) in quotes.slice().reverse()" :key="i">
			<div class="quote-header">
				{{ quote.content }}
			</div>
		</div>
	</section>
</template>


<script>
export default {
	props: ['quotes']
}
</script>
