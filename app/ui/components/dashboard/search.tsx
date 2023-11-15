"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    // console.log(`Searching... ${term}`);
    const params = new URLSearchParams(searchParams);

    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500
        dark:bg-gray-100 dark:text-black"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}

/* Notes
  Because this is a client component, the console logs show up in the client and not on the npm run dev. ...Which goes to confirm for a student the difference between client and server components. 
  I can actually replace 'query' by what I want, it's just a key. But just in case, I won't do it... now. (Google uses 'q' instead.)
  So, what we're doing here is from the client's input, we're updating the URL, and as the URL is updated we capture the params from the URL, so that the parent server component can make the request to the server, not the child client one. 
  With params.toString(), params are organized in their order of creation.
*/
