import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "../../components/Header";
import { useState, useEffect } from "react";

export default function Home() {
	const [data, setData] = useState(null);
	const [load, setLoad] = useState(true);

	// https://dog.ceo/api/breeds/image/random

	useEffect(() => {
        const fetchData = async () => {
			const res = await fetch("https://dog.ceo/api/breeds/image/random");
			const data = await res.json();
			setData(data);
			setLoad(true);
		};

        fetchData();
	}, []);

	return (
		<>
			<Head>
				<title>Accueil</title>
			</Head>

			<Header />

			<h1>Accueil</h1>

			{load ? (<img src={data?.message} />) : (<p>Chargement...</p>)}
		</>
	);
}
