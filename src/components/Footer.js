import { NavLink } from "react-router-dom"
export function Footer(){
  return (
    
    <footer className="bg-white dark:bg-gray-900 rounded-lg shadow border-t-2 ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <NavLink to="https://flowbite.com/" className="hover:underline">Flowbite™</NavLink>. All Rights Reserved.</span>
        </div>
    </footer>

  )
}