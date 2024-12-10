"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const Preloader = () => {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsLoaded(true);
		}, 1300);
	}, []);

	return (
		<motion.div
			initial={{ opacity: 1 }}
			animate={{ opacity: isLoaded ? 0 : 1 }}
			className="fixed flex-col gap-[20px] pointer-events-none inset-0 bg-white z-50 flex justify-center items-center"
		>
			<svg width="81" height="103" viewBox="0 0 31 43" fill="none" xmlns="http://www.w3.org/2000/svg">
				<motion.path
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					clipRule="evenodd"
					d="M18.3353 11.5518L18.3265 42.0333L21.5809 42.0242L21.5719 31.3844L27.3211 31.3754L27.312 42.0242H30.7184V0.675293L27.3029 2.93996L27.2987 28.1603L21.6076 28.1414L21.6122 5.93603L0 18.4376L0.0290845 35.5741L3.44454 35.5834L3.44896 20.3336L18.3353 11.5518Z"
					stroke="#1A1A1A"
					strokeWidth="1"
					fill="none"
					transition={{ duration: 1 }}
				/>

				<motion.path
					initial={{ pathLength: 0 }}
					animate={{ pathLength: 1 }}
					d="M12.4252 41.8816V18.7256L9.0642 20.6955L9.13515 38.737L0.0515139 38.6656L0.00661469 41.8636L12.4252 41.8816Z"
					fill="none"
					stroke="#1A1A1A"
					strokeWidth="1"
					transition={{ duration: 1 }}
				/>
			</svg>
			<div style={{ width: "100px", height: "3px", backgroundColor: "#e0e0e0", borderRadius: "5px" }}>
				<motion.div
					initial={{ width: "0%" }}
					animate={{ width: "100%" }}
					transition={{ duration: 1 }}
					style={{
						height: "100%",
						backgroundColor: "#000",
						borderRadius: "5px",
					}}
				/>
			</div>
		</motion.div>
	);
};

export default Preloader;
