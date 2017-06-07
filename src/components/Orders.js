import React from 'react';

const DisplayOrder = (props) => {
	//eventually there will be multiple orders, so it should be an array of orders which this component will map over into a <ul>.
	return (
		<div className="display-order">
			<div>{props.firstname}</div>
		</div>
	)
}

export default DisplayOrder;