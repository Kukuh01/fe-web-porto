export default function Pagination() {
  return (
    <div className="flex justify-center">
      <nav
        aria-label="Page navigation example"
        className="flex flex-col lg:flex-row items-center gap-4"
      >
        <ul className="flex -space-x-px text-sm text-orange-600">
          <li>
            <a
              href="#"
              className="flex items-center justify-center text-body bg-neutral-secondary-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 rounded-s-base text-sm px-3 h-9 focus:outline-none"
            >
              Previous
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center text-body bg-neutral-secondary-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 text-sm w-9 h-9 focus:outline-non"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center text-body bg-neutral-secondary-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 text-sm w-9 h-9 focus:outline-none"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              className="flex items-center justify-center text-fg-brand bg-neutral-tertiary-medium box-border hover:text-fg-brand font-medium text-sm w-9 h-9 focus:outline-none"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center text-body bg-neutral-secondary-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 text-sm w-9 h-9 focus:outline-none"
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center text-body bg-neutral-secondary-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 text-sm w-9 h-9 focus:outline-none"
            >
              5
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center text-body bg-neutral-secondary-medium hover:bg-neutral-tertiary-medium hover:text-heading shadow-xs font-medium leading-5 rounded-e-base text-sm px-3 h-9 focus:outline-none"
            >
              Next
            </a>
          </li>
        </ul>
        <form className="w-32 mx-auto text-orange-600">
          <label for="countries" className="sr-only">
            Select an option
          </label>
          <select
            id="countries"
            className="block w-full px-3 py-2.5 bg-neutral-secondary-medium text-heading text-sm leading-4 rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
          >
            <option selected>10 per page</option>
            <option value="25">25 per page</option>
            <option value="50">50 per page</option>
            <option value="100">100 per page</option>
          </select>
        </form>
      </nav>
    </div>
  );
}
