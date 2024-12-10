import React from "react";
import { navLinks } from "../../../../utils";

const NavLinks = ({ isMobile }) => {
	return (
		<nav className={isMobile ? 'flex flex-col space-y-4' : 'absolute transition-all top-1/2 hidden xl:flex xl:left-[calc(35%+52px)] 2xl:left-1/2 -translate-x-1/2 -translate-y-1/2 gap-[30px]'}>
			{navLinks.map((navLink, i) => (
				<NavLink key={i} isMobile={isMobile}>{navLink.label}</NavLink>
			))}
		</nav>
	);
};

export default NavLinks;

const NavLink = ({ children, isMobile }) => {
	return (
		<div className={`h-auto overflow-hidden ${isMobile ? 'w-full' : ''}`}>
			<div className={`relative ${!isMobile ? 'group' : ''}`}>
				<a 
					className={`${
						isMobile 
							? 'text-lg font-medium block w-full py-2 hover:text-accent transition-colors'
							: 'text-sm font-[500] relative block transform transition-transform duration-300 group-hover:-translate-y-full'
					}`} 
					href="#"
				>
					{children}
				</a>
				
				{/* Add hidden duplicate text for hover effect (desktop only) */}
				{!isMobile && (
					<a 
						className="text-sm font-[500] text-accent absolute top-full left-0 transform transition-transform duration-300 group-hover:-translate-y-full"
						href="#"
					>
						{children}
					</a>
				)}
			</div>
		</div>
	);
};
