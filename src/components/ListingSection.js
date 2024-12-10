import React from "react";

const ListingSection = () => {
	return (
		<div className="w-full bg-white">
		<div className="w-[90%] flex-col max-w-[1110px] py-[151px] mx-auto flex justify-center items-center bg-white text-accent">
			<h2 className="heading text-center">Why You Should Work With Us</h2>
			<p className="mt-[5px] text-sm md:text-lg text-pretty">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</p>
			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-auto mx-auto mt-[60px] gap-[30px]">
				{listings.map((listing, index) => (
					<div key={index} className="flex text-center flex-col gap-[15px] items-center">
						<img src={listing.icon} alt={listing.text} />
						<p className="text-lg md:text-xl text-pretty font-[500]">{listing.text}</p>
						<p className="text-xs md:text-sm text-pretty">{listing.subtext}</p>
					</div>
				))}
			</div>
		</div>
		</div>
	);
};

export default ListingSection;

const listings = [
	{
		text: "Wide Range of Properties",
		subtext: "We offer expert legal help for all related property items in Dubai.",
		icon: "/images/icons/properties.svg",
	},
	{
		text: "Wide Range of Properties",
		subtext: "We offer expert legal help for all related property items in Dubai.",
		icon: "/images/icons/rents.svg",
	},
	{
		text: "Trusted by Thousands",
		subtext: "We offer you free consultancy to get a loan for your new home.",
		icon: "/images/icons/trusted.svg",
	},
];
