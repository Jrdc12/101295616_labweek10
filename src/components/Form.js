import { useState } from "react";
import { useForm, useFormState } from "react-hook-form";
//import "./Form.css";

import { PROVINCES } from "./constants";

import { UserInfoView } from "./UserInfoView";

function Form() {
	const { register, handleSubmit } = useForm();
	// 	{
	// 	defaultValues: {
	// 		fullName: 'default name',
	// 	}
	// }
	const [userInfo, setUserInfo] = useState();

	// const onSubmit = (data) => {
	// 	console.log(JSON.stringify(data))
	// };

	const onSubmit = (values) => {
		setUserInfo(values);
	};

	return (
		<>
			<div className="form">
				<div className="title">Enter Details</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="input-container ic1">
						<input
							type="text"
							className="input"
							placeholder="Enter email"
							{...register("email")}
						/>
						<div class="cut"></div>
					</div>
					<div className="input-container ic2">
						<input
							type="text"
							className="input"
							placeholder="Enter Full Name"
							{...register("fullName")}
						/>
						<div class="cut"></div>
					</div>
					<div className="input-container ic2">
						<input
							type="text"
							className="input"
							placeholder="Enter Address"
							{...register("address")}
						/>
						<div class="cut"></div>
					</div>
					<div className="input-container ic2">
						<input
							type="text"
							className="input"
							placeholder="Apartment, studio, or floor"
							{...register("address2")}
						/>
						<div class="cut"></div>
					</div>
					<div className="input-container ic2">
						<input
							type="text"
							className="input"
							placeholder="City"
							{...register("city")}
						/>
						<div class="cut"></div>
					</div>
					<div className="input-container ic2">
						<select className="input" {...register("province")}>
							<option value="" disabled selected>
								Select your province
							</option>
							{PROVINCES.map((province) => (
								<option
									key={province.value}
									value={province.value}
								>
									{province.label}
								</option>
							))}
						</select>
					</div>
					<div className="input-container ic2">
						<input
							type="text"
							className="input"
							placeholder="Postal Code"
							{...register("postalCode")}
						/>
					</div>
					<input type="submit" className="submit" />
				</form>
			</div>

			{true && <UserInfoView userInfo={userInfo}></UserInfoView>}

			{/* <div className="data">
				{data}
			</div> */}
		</>
	);
}

export default Form;
