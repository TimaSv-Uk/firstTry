import { useState } from 'react'
import './App.css'

function App() {
  return(
    <Randome />
  )
}

function Randome() {
  let arr = [
    {quote: "Stay Hungry. Stay Foolish.", author: "Steve Jobs"},
    {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela"},
    {quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney"},
    {quote: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs"},
    {quote: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt"},
    {quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.", author: "Oprah Winfrey"},
    {quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", author: "James Cameron"},
    {quote: "Life is what happens when you're busy making other plans.", author: "John Lennon"},
    {quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa"},
    {quote: "When you reach the end of your rope, tie a knot in it and hang on.", author: "Franklin D. Roosevelt"},
    {quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.", author: "Robert Louis Stevenson"},
    {quote: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
    {quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky"},
    {quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius"},
    {quote: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas A. Edison"},
    {quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt"},
    {quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.", author:"Jimmy Dean" },
    {quote:"The only place where success comes before work is in the dictionary.",author:"Vidal Sassoon" },
    {quote:"Success usually comes to those who are too busy to be looking for it",author:"Henry David Thoreau" },
    {quote:"Opportunities don't happen. You create them",author:"Chris Grosser" },
    {quote:"Don't watch the clock; do what it does. Keep going",author:"Sam Levenson" },
    {quote:"Success is walking from failure to failure with no loss of enthusiasm",author:"Winston Churchill" },
    {quote:"I have learned over the years that when one's mind is made up, this diminishes fear",author:"Rosa Parks" },
    {quote:"I didn't fail the test. I just found 100 ways to do it wrong",author:"Benjamin Franklin" },
    {quote:"You don't have to be great to start, but you have to start to be great",author:"Zig Ziglar" },
    {quote:"A person who never made a mistake never tried anything new",author:"Albert Einstein" },
    {quote:"The only thing we have to fear is fear itself",author:"Franklin D. Roosevelt" },
    {quote:"It's not whether you get knocked down, it's whether you get up",author:"Vince Lombardi" },
  ];
  let color = [
    {textColor: "#000000", backgroundQuoteContainer: "#FFFFFF"},
    {textColor:"#4B0082", backgroundQuoteContainer:"#D8BFD8"},
    {textColor:"#4B0082",backgroundQuoteContainer:"#D8BFD8"},
    {textColor:" #A52A2A ", backgroundQuoteContainer:" #FFDEAD "}
  ]
  let [num, numState] = useState(0);
  let quote;
  let author;
  let textCol;
  let quoteContainer;
    if(num === 0){
      quote = "hello world"
    }else {
      let count = Math.floor(Math.random() * color.length)
      quote = arr[Math.floor(Math.random() * arr.length)].quote
      author = arr[Math.floor(Math.random() * arr.length)].author
      textCol = color[count].textColor
      quoteContainer = color[count].backgroundQuoteContainer
    }
  return(
    <div className='container' style={
      {
        color:textCol,
        background:quoteContainer
      }
    }>
      <h2>{quote}</h2>
      <p>{author}</p>
      <button onClick={() => numState(num + 1)} >Click me</button>
    </div>
  )
}
export default App
