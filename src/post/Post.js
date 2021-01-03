import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAngleDown, faCheckCircle, faCircle, faComment, faRetweet, faHeart, faUpload } from '@fortawesome/free-solid-svg-icons'


const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const content = "WTF? Who is Ray? Why she is Skywalker? Luke...?";
const date = "26 февр."

const Post = (props) => {
	return (
	<div className="blockGray">
		<div>
			<div className="blockFlecs">
				<img className="anakinImage" src = {props.photo} />
				<div>
					<div className="infoFleks">
						<p className="name">{props.name} <FontAwesomeIcon icon={faCheckCircle} /></p>
						<p className="nickname">{props.nickname} <FontAwesomeIcon icon={faCircle} style={{ fontSize: 3 }} transform="right-10 up-10" /></p>
						<p className="date">{date}</p>
					</div>
					<p className="content">{content}</p>
				</div>
				<p><FontAwesomeIcon icon={faAngleDown} transform="grow-2 right-160 up-25" /></p>
			</div>
			<div className="rayImage">
				<img src = {RAY_IMAGE} />
				<div className="iconFlex">
					<p><FontAwesomeIcon icon={faComment} /> <span>482</span></p>
					<p><FontAwesomeIcon icon={faRetweet} /> <span>146</span></p>
					<p><FontAwesomeIcon icon={faHeart} /> <span>887</span></p>
					<p><FontAwesomeIcon icon={faUpload} /> </p>
				</div>
			</div>
		</div>
	</div>
	)
}

export default Post;