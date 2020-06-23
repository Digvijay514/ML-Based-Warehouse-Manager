import React, { useState } from "react";
import { Paper, TextField, MenuItem, Button } from "@material-ui/core";
import useStyles from "../styles/PredictionForm.styles";

const PredictionForm = ({ data, setData }) => {
	const [ weekInput, setWeekInput ] = useState("");
	const [ centerIdInput, setCenterIdInput ] = useState("");
	const [ mealIdInput, setMealIdInput ] = useState("");
	const [ homepageInput, setHomepageInput ] = useState("");
	const [ emailerInput, setEmailerInput ] = useState("");
	const [ basePriceInput, setBasePriceInput ] = useState("");
	const [ checkoutPriceInput, setCheckoutPriceInput ] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newData = {
			week: weekInput,
			center_id: centerIdInput,
			meal_id: mealIdInput,
			base_price: basePriceInput,
			checkout_price: checkoutPriceInput,
			homepage_featured: homepageInput,
			emailer_for_promotion: emailerInput
		};
		setData([ ...data, newData ]);
	};

	const options = [ 0, 1 ];

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<form onSubmit={handleSubmit} className={classes.form}>
					<TextField
						label='week'
						margin='normal'
						variant='outlined'
						type='number'
						value={weekInput}
						onChange={(e) => setWeekInput(e.target.value)}
						style={{ width: 100 }}
					/>
					<TextField
						label='Center Id'
						margin='normal'
						variant='outlined'
						type='number'
						value={centerIdInput}
						onChange={(e) => setCenterIdInput(e.target.value)}
						style={{ width: 150 }}
					/>
					<TextField
						label='Meal Id'
						margin='normal'
						variant='outlined'
						type='number'
						value={mealIdInput}
						onChange={(e) => setMealIdInput(e.target.value)}
						style={{ width: 150 }}
					/>
					<TextField
						label='Base Price'
						margin='normal'
						variant='outlined'
						type='number'
						value={basePriceInput}
						onChange={(e) => setBasePriceInput(e.target.value)}
						style={{ width: 200 }}
					/>
					<TextField
						label='Checkout Price'
						margin='normal'
						variant='outlined'
						type='number'
						value={checkoutPriceInput}
						onChange={(e) => setCheckoutPriceInput(e.target.value)}
						style={{ width: 200 }}
					/>
					<TextField
						select
						label='Homepage Featured'
						value={homepageInput}
						onChange={(e) => setHomepageInput(e.target.value)}
						variant='outlined'
						margin='normal'
						style={{ width: 200 }}>
						{options.map((option) => (
							<MenuItem key={option} value={option}>
								{option}
							</MenuItem>
						))}
					</TextField>
					<TextField
						select
						label='Emailer for Promotion'
						value={emailerInput}
						onChange={(e) => setEmailerInput(e.target.value)}
						variant='outlined'
						margin='normal'
						style={{ width: 200 }}>
						{options.map((option) => (
							<MenuItem key={option} value={option}>
								{option}
							</MenuItem>
						))}
					</TextField>
					<Button
						type='submit'
						size='large'
						style={{ height: "53px", marginTop: "6px" }}
						color='primary'
						variant='contained'>
						Add
					</Button>
				</form>
			</Paper>
		</div>
	);
};

export default PredictionForm;
