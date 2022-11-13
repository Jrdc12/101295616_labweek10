import React from "react";

const USER_LABELS = [
	{
		label: "Email",
		value: "email",
	},
	{
		label: "Full Name",
		value: "fullName",
	},
	{
		label: "Address",
		value: "address",
	},
	{
		label: "Address 2",
		value: "address2",
	},
	{
		label: "City",
		value: "city",
	},
	{
		label: "Province",
		value: "province",
	},
	{
		label: "Postal Code",
		value: "postalCode",
	},
];

export const UserInfoView = ({ userInfo = {} }) => {
	return (
		<div
			style={{
				outline: "1px solid black",
				margin: "40px",
				color: "green",
			}}
		>
			{/* {JSON.stringify(userInfo)} */}
			{USER_LABELS.map(({ value, label }) => {
				return (
					<div
            key={value}
						style={{
							display: "flex",
						}}
					>
						<div
							style={{
								flex: "0 1 50%",
								outline: "1px solid",
								textAlign: "right",
								padding: "15px",
								fontWeight: "bold",
								fontSize: "24px",
							}}
						>
							{label}
						</div>
						<div
							style={{
								flex: "0 1 50%",
								outline: "1px solid",
								textAlign: "left",
								padding: "15px",
								fontWeight: "bold",
								fontSize: "24px",
							}}
						>
							{userInfo[value]}
						</div>
					</div>
				);
			})}

			{/* <div style={{ outline: "1px solid green" }}>
					{USER_LABELS.map(({ label }) => {
						return (
							<div
								style={{
									outline: "1px solid black",
									textAlign: "right",
									padding: "15px",
									fontWeight: "bold",
									fontSize: "24px",
								}}
							>
								{label}
							</div>
						);
					})}
				</div>

				<div style={{ outline: "1px solid green" }}>
          {USER_LABELS.map(({ value }) => {
              return (
                <div
                  style={{
                    outline: "1px solid black",
                    textAlign: "right",
                    padding: "15px",
                    fontWeight: "bold",
                    fontSize: "24px",
                  }}
                >
                  {userInfo[value]}
                </div>
              );
            })}
        </div> */}
		</div>
	);
};
