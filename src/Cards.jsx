import React from 'react';

export default class Card extends React.Component {
    constructor({title,teacher,img,price}){
        super()
        this.title = title;
        this.teacher = teacher;
        this.img = img;
        this.price = price;
    }

    render() {
        return (
            <article key={this.key}>
                <img src={this.img} alt="" />
                <div className="card-info">
                    <h2>{this.title}</h2>
                    <p>{this.teacher}</p>
                    <span>$ {this.price} USD</span>
                </div>
            </article>
        )
    }  

}

