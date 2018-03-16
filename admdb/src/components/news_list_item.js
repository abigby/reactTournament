import React from 'react';
import classes from '../css/styles.css';

const NewsItem = ({article}) => {
     return(
        <div className={classes.news_item}>
            <h3>{article.title}</h3>
            <div>{article.body}</div>
        </div>
    )
}

export default NewsItem;

 