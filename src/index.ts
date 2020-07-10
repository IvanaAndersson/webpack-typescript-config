import { formData } from "./forms";

const form: HTMLFormElement | null = document.querySelector("form");

form?.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  const data = formData(form);

  console.log(data);
});
