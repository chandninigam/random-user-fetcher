import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyCard from "./MyCard";

import Axios from "axios";

function App() {
	const [details, setDetails] = useState(undefined);

	const fetchDetail = async () => {
		const { data } = await Axios.get("https://randomuser.me/api/");
		console.log("Response:", data);

		const details = data.results[0];
		setDetails(details);
	};

	useEffect(() => {
		fetchDetail();
	}, []);

	if (details !== undefined) {
		console.log();
		return (
			<Container fluid className="p-4bg-primary App">
				<Row>
					<Col md={4} className="offset-md-4 mt-20">
						<MyCard details={details} />
					</Col>
				</Row>
			</Container>
		);
	} else {
		return <h1>Loading...</h1>;
	}
}

export default App;
