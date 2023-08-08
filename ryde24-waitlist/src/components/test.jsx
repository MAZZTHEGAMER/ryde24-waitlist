// export default function Test() {
//   return (
//     <>
      {/* <form
        name="contact"
        data-netlify="true"

        class="max-w-md mx-auto p-4 bg-white rounded shadow-md"
        method="post"
      >
        <p class="mb-4">
          <label for="name" class="block text-gray-700 font-semibold">
            Name
            <br />
            <input type="hidden" name="form anme" value="constact"/>
          <input
            type="text"
            name="name"
            id="name"
            class="w-full h-10 px-4 mt-1 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Your Name"
            required
            />
            </label>
        </p>
        <p class="mb-4">
          <label for="email" class="block text-gray-700 font-semibold">
            Email
            <br />
          <input
            type="email"
            name="email"
            id="email"
            class="w-full h-10 px-4 mt-1 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="you@example.com"
            required
            />
            </label>
        </p>
        <p>
          <button
            type="submit"
            class="w-full h-12 px-6 mt-4 font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors duration-300"
          >
            Send
          </button>
        </p>
      </form> */}




// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function Test() {
  const [state, handleSubmit] = useForm("xwkdlppg");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} action='https://formspree.io/f/xwkdlppg'>
     
      <label htmlFor="email">
        Email Addressss
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
function Test() {
  return (
    <ContactForm />
  );
}
export default Test;

    // </>
//   );
// }
