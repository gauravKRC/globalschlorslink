import { Link } from 'react-router-dom';
import { ModeToggle } from '@/components/mode-toggle';
import logo from '@/assets/logo.svg';
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar";

function Header() {
    return (
        <header className="bg-grey dark:bg-primary-foreground shadow-sm p-2 flex items-center justify-between w-full rounded-lg">
            {/* Logo and Company Name */}
            <div className="flex items-center">
                <img src={logo} alt="Company Logo" className="h-8 w-8 mr-2" />
                <span className="font-semibold text-xl dark:text-red-700">ApexAbroad</span>
            </div>

            {/* Navigation Links (Hidden on Mobile) */}
            <nav className="md:flex space-x-4 gap-40 hidden">
                <Link to="/" className="text-gray-700 hover:text-gray-900 dark:text-red-700 dark:hover:text-red-900 text-sm font-bold">Home</Link>
                <Link to="/universities" className="text-gray-700 hover:text-gray-900 dark:text-red-700 dark:hover:text-red-900 text-sm font-bold">Universities</Link>
                <Link to="/visa-services" className="text-gray-700 hover:text-gray-900 dark:text-red-700 dark:hover:text-red-900 text-sm font-bold">Visa Services</Link>
                <Link to="/services" className="text-gray-700 hover:text-gray-900 dark:text-red-700 dark:hover:text-red-900 text-sm font-bold">Services</Link>
            </nav>

            {/* Mobile Menu (Shadcn Menubar) */}
            <div className="md:hidden">
                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger>
                            <svg className="h-5 w-5 text-gray-700 dark:text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>
                                <Link to="/" className="text-gray-700 hover:text-gray-900 dark:text-red-700 dark:hover:text-red-900 text-sm font-bold">Home</Link>
                            </MenubarItem>
                            <MenubarItem>
                                <Link to="/universities" className="text-gray-700 hover:text-gray-900 dark:text-red-700 dark:hover:text-red-900 text-sm font-bold">Universities</Link>
                            </MenubarItem>
                            <MenubarItem>
                                <Link to="/visa-services" className="text-gray-700 hover:text-gray-900 dark:text-red-700 dark:hover:text-red-900 text-sm font-bold">Visa Services</Link>
                            </MenubarItem>
                            <MenubarItem>
                                <Link to="/services" className="text-gray-700 hover:text-gray-900 dark:text-red-700 dark:hover:text-red-900 text-sm font-bold">Services</Link>
                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>
                                <div className="flex justify-center">
                                    <ModeToggle />
                                </div>
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div>

            {/* Mode Toggle (Hidden on Mobile, Visible on Desktop) */}
            <div className="hidden md:flex items-center">
                <ModeToggle />
            </div>
        </header>
    );
}

export default Header;






