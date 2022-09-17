import Layout from "../components/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<div data-theme="winter">
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</div>
	);
}

export default MyApp;
