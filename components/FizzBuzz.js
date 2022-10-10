import { useState } from "react";
import { debounce } from "lodash";

const FizzBuzz = () => {
  const [results, setResults] = useState();
  // User can enter a number
  // Program will iterate through each number until it get's to the users input number.

  // Fizz - Multiple of 3
  // Buzz - Multiple of 5
  // FizzBuzz - Multiple of BOTH 3 and 5.

  const handleChange = (e) => {
    setResults(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fizzBuzzArray = [];

    for (let i = 1; i <= results; i++) {
      if (i % 5 === 0 && i % 3 === 0) {
        fizzBuzzArray[i] = "FizzBuzz";
      } else if (i % 5 === 0) {
        fizzBuzzArray[i] = "Buzz";
      } else if (i % 3 === 0) {
        fizzBuzzArray[i] = "Fizz";
      } else fizzBuzzArray[i] = i;
    }
    console.log(fizzBuzzArray);
  };

  return (
    <>
      <form>
        <div class="mb-6">
          <label
            htmlFor="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Enter a number
          </label>
          <input
            type="number"
            id="user-input-number"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="12345"
            onChange={handleChange}
            required=""
          />
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default FizzBuzz;
