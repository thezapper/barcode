import { useState, useEffect } from 'react'
import './App.css'
import JsBarcode from 'jsbarcode'

interface codeProps {
  text: string;
  id:number;
}
function Code(props: codeProps)
{
  useEffect(
    () => {
      JsBarcode(
        "#bc"+props.id, 
        props.text, 
        {
          height:50,
          margin:0
        });
    });

  return (
    <div className="barcode">
      <div className='barcode-number'>
        <span>{props.id + 1}</span>
      </div>
      <div className='barcode-image'>
        <svg id={"bc"+props.id}></svg>
      </div>
    </div>
  )
}

function App() {
  const [codeList, setCodes] = useState<string[]>([]);
  const [numLines, setNumLines] = useState(0);
  
  useEffect(
    () => {
      
    });

  
  const onChangeText = (val: string) => 
  {
    const codeStrings = val.split('\n');
    setNumLines(codeStrings.length);
    setCodes(codeStrings);
  }

  return (
    <div className="App">

    <div className='line-numbers'>
        <span></span>
    </div>

    <textarea 
      className='text-area no-print' 
      placeholder="Add values here..."
      onChange={e => onChangeText(e.target.value)}>
    </textarea>

    <div>{numLines} codes entered</div>

      <div className='code-grid'>
        {
          codeList.map( (val, idx) => val != '' ? <Code key={idx} text={val} id={idx}/> : null)
        }
      </div>
    </div>
  )
}

export default App
