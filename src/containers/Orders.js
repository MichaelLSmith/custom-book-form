import React from 'react';
import { connect } from 'react-redux';

//It will be a container that receives state from the store to be displayed in an <ul>



const Orders = (props) => {
	console.log('props in Orders', props);
	//eventually there will be multiple orders, so it should be an array of orders which this component will map over into a <ul>.
	return (
		<div className="display-order">
			<h1>Orders</h1>
			<div>{props.firstname}</div>
		</div>
	)
}

// export default DisplayOrder;

function mapStateToProps(state) {
	return { orders: state.orders }
}

export default connect(
	state => state.orders
)(Orders);