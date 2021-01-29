import React, {useState} from 'react';
import './index.css'
import {firstRow, secondRow, thirdRow} from './keycaps'
const Keyboard = () => {
    const [color, setColor] = useState({Q:'pink'});

    console.log(color)
    return (
        <div className='keyboard-base'>
            <div className=' keyboard-inner'>
                <div className="keyboard-row row-1">
                    {Object.keys(firstRow).map((key, index) => (
                        <div id="key-q" className="key">
                            <div className="key-inner" style={{backgroundColor : color[Object.keys(firstRow)[index]]}}>
                                <input
                                    type="color"
                                    name={Object.keys(firstRow)[index]}
                                    className={'color-input'}
                                    value={key}
                                    onChange={e => setColor({...color, [Object.keys(firstRow)[index]]: e.target.value})}/>
                                <span>{Object.keys(firstRow)[index]}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="keyboard-row row-2">
                    {Object.keys(secondRow).map((key, index) => (
                        <div id="key-q" className="key">
                            <div className="key-inner" style={{backgroundColor : color[Object.keys(secondRow)[index]]}}>
                                <input
                                    type="color"
                                    name={Object.keys(secondRow)[index]}
                                    className={'color-input'}
                                    value={key}
                                    onChange={e => setColor({...color, [Object.keys(secondRow)[index]]: e.target.value})}/>
                                <span>{Object.keys(secondRow)[index]}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="keyboard-row row-e">
                    {Object.keys(thirdRow).map((key, index) => (
                        <div id="key-q" className="key">
                            <div className="key-inner" style={{backgroundColor : color[Object.keys(thirdRow)[index]]}}>
                                <input
                                    type="color"
                                    name={Object.keys(thirdRow)[index]}
                                    className={'color-input'}
                                    value={key}
                                    onChange={e => setColor({...color, [Object.keys(thirdRow)[index]]: e.target.value})}/>
                                <span>{Object.keys(thirdRow)[index]}</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Keyboard;
