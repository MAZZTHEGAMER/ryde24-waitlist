export default function Test() {
  return (
    <>
      <form
        name="contact"
        netlify
        class="max-w-md mx-auto p-4 bg-white rounded shadow-md"
        action="POST"
      >
        <p class="mb-4">
          <label for="name" class="block text-gray-700 font-semibold">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            class="w-full h-10 px-4 mt-1 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Your Name"
            required
          />
        </p>
        <p class="mb-4">
          <label for="email" class="block text-gray-700 font-semibold">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            class="w-full h-10 px-4 mt-1 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="you@example.com"
            required
          />
        </p>
        <p>
          <button
            type="submit"
            class="w-full h-12 px-6 mt-4 font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors duration-300"
          >
            Send
          </button>
        </p>
      </form>
    </>
  );
}
