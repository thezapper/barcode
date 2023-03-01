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
      JsBarcode("#bc"+props.id, props.text);
    });

  return (
    <div className="barcode">
      <svg id={"bc"+props.id}></svg>
    </div>
  )
}

function App() {
  const [codeList, setCodes] = useState<string[]>([]);
  
  useEffect(
    () => {
      
    });

  
  const onChangeText = (val: string) => 
  {
    const codeStrings = val.split('\n');
    console.dir(codeStrings);
    setCodes(codeStrings);
  }

  return (
    <div className="App">

    <textarea 
      className='text-area' 
      placeholder="Add values here..."
      onChange={e => onChangeText(e.target.value)}></textarea>
      
      <div>
        {
          codeList.map( (val, idx) => val != '' ? <Code key={idx} text={val} id={idx}/> : null)
        }
      </div>
    </div>
  )
}

export default App
