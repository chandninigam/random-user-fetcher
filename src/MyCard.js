import React from "react";
import { Card, CardBody, CardText, CardTitle, Button } from "reactstrap";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const MyCard = ({ details }) => {
	return (
		<Card className="text-center mt-5 Mycard">
			<CardBody className="text-center">
				<img
					style={{ width: 100, height: 100 }}
					className="rounded-circle img-thumbnail border-danger"
					src={details.picture.large}
				/>
				<CardTitle className="text-center">
					<h1>
						<span className="space">{details.name.title}</span>
						<span className="space">{details.name.first}</span>
						<span class="space ">{details.name.last}</span>
					</h1>
				</CardTitle>
				<CardText>
					<FaMapMarkedAlt className="marrgin" />
					{details.location.city}
				</CardText>
				<CardText>
					<FaPhone className="marrgin" />
					{details.phone}
				</CardText>
				<CardText>
					<h5 className="email">
						<FaEnvelope className="marrgin " />
						{details.email}
					</h5>
					<p>
						<Button className="btn">{details.dob.age}</Button>
					</p>
				</CardText>
			</CardBody>
		</Card>
	);
};

export default MyCard;
