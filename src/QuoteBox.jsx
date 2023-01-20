import React from 'react'
import ButtonBox from './ButtonBox';
const QuoteBox = ({quoteRandom, handleClick, colorRandom}) => {

	
	// console.log(quoteRandom);
	return (
		<article style={{color: colorRandom}}  className='box'>
			<div className='box__header'>
				<i className='bx bxs-quote-left'></i>
				<p className='box__quote'>{quoteRandom.quote}</p>
			</div>
			<h1 className='box__author'>{quoteRandom.author}</h1>
			<ButtonBox
			handleClick={handleClick}
			colorRandom={colorRandom}
			/>
		</article>
	)
}

export default QuoteBox