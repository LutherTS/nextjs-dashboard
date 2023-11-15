import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
        className,
      )}
    >
      {children}
    </button>
  );
}

/* Notes
Honestly I would have used a components folder in which I would have put: 
- the login-form file (which is a component)
/ the search file (which is a component)
/ the skeletons file (which is a component) 
- the customers folder (which only has components)
- the dashboard folder (which only has components)
- the invoices folder (which only has components)
/ its pagination file (which I use beyond invoices)
Just so they're not in the same places as fonts and the likes. 
In fact, I could do it as an exercise to change the structure.

Now I'm thinking about the inner structure of that components folder. 
I would have put the customers folder and the invoices folder inside the dashboard folder. Because the customers page and the invoices page they fulfill are "children" of the dashboard page. 
Then, I would even have made an overview folder, which I would even have called (overview) despite this only being supposed to make sense for pages, for all the components that are specific to /dashboard/(overview)/page.tsx, like:
// cards.tsx
// latest-invoices.tsx
// revenue-chart.tsx

(Which now makes me really want to change the structure as an exercice and to really make this project my own. And instead of moving files I'm just going to duplicate them in the new folder.)

ALL DONE.
*/
