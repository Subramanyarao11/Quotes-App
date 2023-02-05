<template>
	    <div
      class="
        w-full
        mx-auto
        rounded-lg
        bg-white
        shadow-lg
        px-5
        pt-5
        pb-10
        text-gray-800
      "
      style="max-width: 500px"
    >
      <div class="w-full pb-5 "></div>
      <div class="w-full mb-4">
        <div class="text-3xl text-indigo-500 text-left leading-tight h-3">
          “
        </div>
        <p class="text-sm text-gray-600 text-center px-5">
            {{ quote.content }}
        </p>
        <div
          class="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3"
        >
          ”
        </div>
      </div>
      <div class="w-full">
        <p class="text-md text-indigo-500 font-bold text-center">
          {{ quote.author }}
        </p>
      </div>
    </div>
</template>

<script>
export default {
	props: ['quote']
}
</script>
