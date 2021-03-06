import React from 'react';
import NewsItem from './news_list_item';

const NewsList = (props) => {
    const items = props.news.map((item)=>{
        return (
            <NewsItem key={item.id} article={item}/>
        )
    });

    return(
        <div>
            {props.children}
            {items}
        </div>
    )
}

export default NewsList;