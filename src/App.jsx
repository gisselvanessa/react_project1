import { useState } from 'react';
import './App.css'

import quotes from './json/quotes.json'
import colors from './json/colors.json'
import QuoteBox from './QuoteBox';


function App() {
	// console.log(quotes);

	const randomElement=(arr)=>{
		const random=Math.floor(Math.random()*arr.length);
		return arr[random];
	}
	const [QuoteRandom, setQuoteRandom] = useState(randomElement(quotes))
	// console.log(QuoteRandom);
	const [colorRandom, setcolorRandom] = useState(randomElement(colors))

	const handleClick=()=>{
		setQuoteRandom(randomElement(quotes));
		setcolorRandom(randomElement(colors));
	}
	
	
	return (
		<div style={{backgroundColor: colorRandom}} className="App">
			<QuoteBox 
			quoteRandom={QuoteRandom}
			handleClick={handleClick}
			colorRandom={colorRandom}
			/>
			
			
		</div>
	)
}

export default App
