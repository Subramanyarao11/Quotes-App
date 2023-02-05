
<template>
  <div
    class="
      min-w-screen min-h-screen
      bg-cover bg-no-repeat bg-fixed bg-center
      flex flex-col
      items-center
      justify-center
      px-5
      py-5
    "
    :style="[
      imageUrl
        ? { backgroundImage: `url(${imageUrl})` }
        : {
            backgroundImage: `url(https://images.unsplash.com/photo-1497561813398-8fcc7a37b567?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`,
          },
    ]"
  >
    <Header title="Quote Generator" />
    <Quote :quote="quote" />
    <div class="button-container flex justify-center py-0 px-8 my-4 mx-auto">
      <div
        @click="
          getImage();
          fetchQuote();
        "
        class="
          mt-4
          inline-flex
          items-center
          justify-center
          px-5
          py-3
          text-base
          font-medium
          text-center text-indigo-100
          border border-indigo-500
          rounded-lg
          shadow-sm
          cursor-pointer
          hover:text-white
          bg-gradient-to-br
          from-purple-500
          via-indigo-500
          to-indigo-500
        "
      >
        <svg
          class="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          ></path>
        </svg>
        <span class="relative">Generate Quote</span>
      </div>
    </div>
    <QuoteList :quotes="quotes" />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Quote from "./Quote.vue";
import QuoteList from "./QuoteList.vue";
export default {
  name: "Home",
  components: {
    Header,
    Quote,
    QuoteList,
  },
  data() {
    return {
        imageUrl: "",
      quote: {
        content: "",
        author: "",
      },
      quotes: [],
    };
  },
  created() {
    this.fetchQuote();
  },
  methods: {
    async getImage() {
      this.imageUrl = await fetch(
        "https://source.unsplash.com/random/?blur"
      ).then((res) => res.url);
    },
    async fetchQuote() {
      const data = await fetch("https://api.quotable.io/random").then((res) =>
        res.json()
      );
      if (this.quote.content) {
        this.quotes = [...this.quotes, this.quote];
      }
      this.quote = {
        content: data.content,
        author: data.author,
      };
    },
  },
};
</script>
