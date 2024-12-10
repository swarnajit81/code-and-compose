"use client";

import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { useScroll, useTransform, motion } from "framer-motion";

const Footer = () => {
	const footerRef = React.useRef(null);
	const [isDesktop, setIsDesktop] = React.useState(false);

	React.useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth >= 1024);
		};

		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const { scrollYProgress } = useScroll({
		target: footerRef,
		offset: ["start end", "end end"],
	});

	const y = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);

	const followusStr = "followus";
	return (
		<div className="h-auto overflow-hidden">
			<motion.div style={{ y: isDesktop ? y : 0 }} ref={footerRef} className="w-full bg-primary text-white pb-[2rem]">
				<div className="w-[95%] max-w-[1600px]  mx-auto">
					<div className="flex flex-col sm:flex-row justify-between w-full border-b-[1px] border-gray-400/50 py-4">
						<div className="flex gap-[12.86px] items-center justify-center sm:justify-start mb-4 sm:mb-0">
							<img src="/images/icons/logo-white.svg" className="w-[30px]" alt="logo" />
							<p className="font-medium text-xl tracking-wider">JustHome</p>
						</div>
						<div className="flex gap-[105px] items-center">
							<div className=" hidden md:flex flex-col">
								{followusStr.split("").map((char, i) => (
									<p className="uppercase py-[2px] text-xs leading-[0.5em] md:text-sm" key={i}>
										{char}
									</p>
								))}
							</div>
							<div className="flex gap-[15px]  items-center">
								{socialLinks.map((link, i) => (
									<a
										key={i}
										href={link.link}
										target="_blank"
										rel="noopener noreferrer"
										className="w-[35px] h-[35px] rounded-full grid  place-items-center hover:bg-[rgba(0,0,0,0.1)]"
									>
										{link.icon}
									</a>
								))}
							</div>
						</div>
					</div>
					<div className="w-full mt-[45px] sm:mt-[90px] flex gap-[10px] gap-y-[40px] flex-wrap justify-between">
						<div className="w-full md:w-[48%] lg:w-[33.33%] xl:w-auto lg:max-w-[370px] flex flex-col gap-[25px]">
							<p className="text-sm lg:text-lg text-white/45 font-[500]">Subscribe</p>
							<div className="w-full border-b-white/45 border-b-[1px] p-[10px] relative">
								<input
									className="bg-transparent outline-none border-none placeholder:text-white h-full p]=-[1rem]"
									placeholder="Your e-mail"
								/>
								<div className="px-[31px] group gap-[5px] cursor-pointer hover:bg-white/15 transition-all  absolute right-0 top-0 py-[7px] rounded-[30px] bg-white/5 flex justify-center items-center">
									<p className="text-xs  w-max lg:text-sm">Send</p>
									<img
										className=" transition-all group-hover:translate-x-[5px]"
										src="/images/icons/arrow-right.svg"
									/>
								</div>
							</div>
							<p className="text-xs  w-max lg:text-sm">
								Subscribe to our newsletter to receive our weekly feed.
							</p>
						</div>
						{quickLinks.map((link, i) => (
							<div key={i} className="flex w-[48%] lg:w-[33.33%] xl:w-auto flex-col gap-[15px]">
								<p className="text-sm lg:text-lg text-white/45 font-[500]">{link.title}</p>
								<div className="flex mt-[15px]  flex-col gap-[10px]">
									{link.links.map((el, i) => (
										<p
											key={i}
											className="text-white cursor-pointer hover:underline text-start text-xs lg:text-sm"
										>
											{el}
										</p>
									))}
								</div>
							</div>
						))}
						<div className=" w-[48%] lg:w-[33.33%] xl:w-auto flex flex-col gap-[15px]">
							<p className="text-sm lg:text-lg text-white/45 font-[500]">Get the app</p>
							<div className="flex mt-[15px]  flex-col gap-[20px]">
								{playstore.map((link, i) => (
									<div
										key={i}
										className="px-[25px] rounded-[15px] w-max items-center  py-[10px] bg-white/5 flex gap-[20px]"
									>
										<div className="w-[25px]">{link.icon}</div>
										<div className="border-r-white/45 border-r-[1px] h-full"></div>
										{link.text}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default Footer;

const socialLinks = [
	{
		icon: <FaFacebookF />,
		link: "https://www.facebook.com/justhomeuk/",
	},
	{
		icon: <FaTwitter />,
		link: "https://www.facebook.com/justhomeuk/",
	},
	{
		icon: <FaInstagram />,
		link: "https://www.facebook.com/justhomeuk/",
	},
	{
		icon: <FaLinkedinIn />,
		link: "https://www.facebook.com/justhomeuk/",
	},
];

const quickLinks = [
	{
		title: "Discover",
		links: ["Miami", "New York", "Chicago", "Florida", "Los Angeles", "San Diego"],
	},
	{
		title: "Quick Links",
		links: ["About", "Contact", "FAQ’s", "Blog", "Pricing Plans", "Privacy Policy", "Terms & Conditions"],
	},
	{
		title: "Our Address",
		links: ["hi@justhome.com", "(123) 456-7890"],
	},
	{
		title: "Quick Links",
		links: ["99 Fifth Avenue, 3rd Floor", "San Francisco, CA 1980"],
	},
];

const playstore = [
	{
		icon: <img src="/images/icons/apple.svg" alt="playstore" />,
		link: "https://play.google.com/store/apps/details?id=com.justhomeuk",
		text: (
			<div className="flex flex-col">
				<p className="text-xs md:text-sm text-white">Download on the</p>
				<p className="text-sm md:text-lg text-white font-[500]">App Store</p>
			</div>
		),
	},
	{
		icon: <img src="/images/icons/play-store.svg" alt="playstore" />,
		link: "https://play.google.com/store/apps/details?id=com.justhomeuk",
		text: (
			<div className="flex flex-col">
				<p className="text-xs md:text-sm text-white">Download on the</p>
				<p className="text-sm md:text-lg text-white font-[500]">Play Store</p>
			</div>
		),
	},
];
