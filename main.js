const bills = document.querySelector("#bill");
const tip = document.querySelector("#option");
const waiter = document.querySelector("tipwaiter");
const btn = document.querySelector("#btn");
const answers = document.querySelector("#answer");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const results = bills.value / tip.value / tipwaiter.value;
  console.log(results);
  answers.textContent = results;
});

// const bill = document.querySelector("#bill");
// const options = document.querySelector("#option");
// const btn = document.querySelector("#btn");
// const ans = document.querySelector("#answer");

// btn.addEventListener("click", () => {
//   console.log(bill.value);
//   console.log(options.value);

//   const result = bill.value * options.value;
//   console.log(result);
//   ans.textContent = result;
// });
