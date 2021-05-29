import React from 'react';

export default class CoursesCard extends React.Component {
    render() { 
        const {id,price,image,teacher,title} = this.props
        return (
            <article className="card" id={id}>
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <p>{teacher}</p>
                <span>$ {price} USD</span>
            </article>
        )

    }
}
 