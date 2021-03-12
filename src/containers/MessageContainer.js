import React, { Component } from 'react'
import { connect } from 'react-redux'
import Message from '../components/Message/Message'
import PropTypes from 'prop-types'

class MessageContainer extends Component {
	render() {
		const { message } = this.props
		return (
			<div>
				<Message message={message}/>
			</div>
		)
	}
}

MessageContainer.propTypes = {
	message: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
	return {
		message: state.message
	}
}

export default connect(mapStateToProps, null)(MessageContainer)
