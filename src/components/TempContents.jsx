import ArrowRight from '../assets/icon_arrowright_blue.svg'
import { useState } from 'react'
import React from 'react'

export default function TempContents() {
    const [resultCara, setResultCara] = useState('Welcome to converter 3000\nResult steps will appear here');
    const [resultAngka, setResultAngka] = useState('');
    const [unitBefore, setUnitBefore] = useState('');
    const [unitBeforeDisplay, setUnitBeforeDisplay] = useState('');
    const [unitAfterDisplay, setUnitAfterDisplay] = useState('');
    const [loading, setLoading] = useState(false);

    const sleep = ms => new Promise(r => setTimeout(r, ms)); 

    const executeConvert = async() => {
        // unitAfter ga perlu update display real time, bisa tanpa useState
        // amount juga ga di useState biar ga kebanyakan useState
        const unitAfter = document.getElementById("dropdown_after").value;
        const amount = document.getElementById("number_input").value;
        
        if (unitBefore == unitAfter || unitBefore == "" || unitAfter == "" || amount == "") {
            if (unitBefore == "" || unitAfter == "") setResultCara("Unit has not been selected\nKindly select the units"); 
            else if (unitBefore == unitAfter) setResultCara("Conversion unit must be different\nKindly select a another unit");
            else if (amount == "") setResultCara("Input amount must be filled\nKindly insert a valid amount"); 
            setResultAngka("");
            setUnitAfterDisplay("");
            return;
        }
        
        setLoading(true);
        await sleep(400);

        // setResultCara aga panjang karna mau display minimal 2-3 step
        // semuanya di parsefloat supaya input berlebihan jadi "e"
        switch (unitBefore) {
            case "C":
                switch (unitAfter) {
                    case "K":
                        setResultCara(`= ${parseFloat(amount)} + 273.15\n= ${parseFloat(amount) + 273.15}`)
                        setResultAngka(`${(parseFloat(amount) + 273.15).toLocaleString(undefined, { maximumFractionDigits: 4 })}`);
                        break;
                    case "F":
                        setResultCara(`= (${parseFloat(amount)} x (9/5)) + 32\n= ${parseFloat(amount) * 1.8} + 32\n= ${(parseFloat(amount) * 1.8) + 32}`)
                        setResultAngka(`${(parseFloat(amount) * 1.8 + 32).toLocaleString(undefined, { maximumFractionDigits: 4 })}`);
                        break;
                    case "R":
                        setResultCara(`= (${parseFloat(amount)} x (9/5)) + 491.67\n= ${parseFloat(amount) * 1.8} + 491.67\n= ${(parseFloat(amount) * 1.8) + 491.67}`)
                        setResultAngka(`${((parseFloat(amount) * 1.8) + 491.67).toLocaleString(undefined, { maximumFractionDigits: 4 })}`);
                        break;
                }
            break;
            case "K":
                switch (unitAfter) {
                    case "C":
                        setResultCara(`= ${parseFloat(amount)} - 273.15\n= ${parseFloat(amount) - 273.15}`)
                        setResultAngka(`${(parseFloat(amount) - 273.15).toLocaleString(undefined, { maximumFractionDigits: 4 })}`);
                        break;
                    case "F":
                        setResultCara(`= (${parseFloat(amount)} x (9/5)) - 459.67\n= ${parseFloat(amount) * 1.8} - 459.67\n= ${(parseFloat(amount) * 1.8) - 459.67}`)
                        setResultAngka(`${((parseFloat(amount) * 1.8) - 459.67).toLocaleString(undefined, { maximumFractionDigits: 4 })}`);
                        break;
                    case "R":
                        setResultCara(`= ${parseFloat(amount)} × (9/5)\n= ${parseFloat(amount)} x 1.8\n= ${parseFloat(amount) * 1.8}`)
                        setResultAngka(`${(parseFloat(amount) * 1.8).toLocaleString(undefined, { maximumFractionDigits: 4 })}`);
                        break;
                }
            break;
            case "F":
                switch (unitAfter) {
                    case "C":
                        setResultCara(`= (${parseFloat(amount)} - 32) x (5/9)\n= ${parseFloat(amount) - 32} x (5/9)\n= ${(parseFloat(amount) - 32) * 5/9}`)
                        setResultAngka(`${((parseFloat(amount) - 32) * 5/9).toLocaleString(undefined, { maximumFractionDigits: 4 })}`);  
                        break;
                    case "K":
                        setResultCara(`= (${parseFloat(amount)} + 459.67) x (5/9)\n= ${parseFloat(amount) + 459.67} x (5/9)\n= ${(parseFloat(amount) + 459.67) * 5/9}`)
                        setResultAngka(`${((parseFloat(amount) + 459.67) * 5/9).toLocaleString(undefined, { maximumFractionDigits: 4 })}`);
                        break;
                    case "R":
                        setResultCara(`= ${parseFloat(amount)} + 459.67\n= ${parseFloat(amount) + 459.67}`)
                        setResultAngka(`${(parseFloat(amount) + 459.67).toLocaleString(undefined, { maximumFractionDigits: 4 })}`);
                        break;
                }
            break;
            case "R":
                switch (unitAfter) {
                    case "C":
                        setResultCara(`= (${parseFloat(amount)} - 491.67) x (5/9)\n= ${parseFloat(amount) - 491.67} x (5/9)\n= ${(parseFloat(amount) - 491.67) * 5/9}`)
                        setResultAngka(`${((parseFloat(amount) - 491.67) * 5/9).toLocaleString(undefined, { maximumFractionDigits: 4 })}`);
                        break;
                    case "K":
                        setResultCara(`= ${parseFloat(amount)} × (5/9)\n= ${parseFloat(amount)} x 0.556\n= ${parseFloat(amount) * 5/9}`)
                        setResultAngka(`${(parseFloat(amount) * 5/9).toLocaleString(undefined, { maximumFractionDigits: 4 })}`);
                        break;
                    case "F":
                        setResultCara(`= ${parseFloat(amount)} - 459.67\n= ${parseFloat(amount) - 459.67}`)
                        setResultAngka(`${(parseFloat(amount) - 459.67).toLocaleString(undefined, { maximumFractionDigits: 4 })}`);
                        break;
                }
        }

        setUnitAfterDisplay(`°${unitAfter}`);
        setLoading(false);
    }

    return (
        <div className="flex flex-col absolute top-32 w-full">
            <div className="flex justify-center h-20">
                <h1 className="text-4xl text-white font-poppins">
                    <strong>Temperature Converter 3000®</strong>
                </h1>
            </div>
            <div className="flex flex-row">
                <div className="px-12 py-8 flex flex-col w-3/5 custom_glow ml-40 mr-8 h-96 shadow-xl bg-white rounded-xl border_1 border-gray-300">
                    <h2 className="font-open text-xl">Configure Conversion</h2>
                    <div className="flex justify-between flex-row mt-6">
                        <div className="flex flex-col width_45">
                            <label className="font-open text-gray-600" htmlFor="dropdown_before">Base Unit</label>
                            <select defaultValue="" onChange={(event) => {setUnitBefore(event.target.value); setUnitBeforeDisplay(`°${event.target.value}`); }} id="dropdown_before" className="w-full h-12 pr-8 pl-2 font-poppins rounded-md border_1 border-gray-300 shadow-md focus:outline-none focus:border-blue-500">
                                <option value="" disabled>Select base unit</option>
                                <option value="C">°C - Celsius</option>
                                <option value="K">°K - Kelvin</option>
                                <option value="F">°F - Fahrenheit</option>
                                <option value="R">°R - Rankine</option>
                            </select>
                        </div>
                        <img className="w-8 mt-6" src={ArrowRight}></img>
                        <div className="flex flex-col width_45">
                            <label className="font-open text-gray-600" htmlFor="dropdown_after">Target Unit</label>
                            <select defaultValue="" id="dropdown_after" className="w-full h-12 pr-8 pl-2 font-poppins rounded-md border_1 border-gray-300 shadow-md focus:outline-none focus:border-blue-500">
                                <option value="" disabled>Select target unit</option>
                                <option value="C">°C - Celsius</option>
                                <option value="K">°K - Kelvin</option>
                                <option value="F">°F - Fahrenheit</option>
                                <option value="R">°R - Rankine</option>
                            </select>
                        </div>
                    </div>
                    <label className="mt-6 font-open text-gray-600" htmlFor="div_amount">Temperature</label>
                    <div id="div_amount" className='flex flex-row justify-between m-0 p-o rounded-md border_1 border-gray-300 shadow-md w-full h-12'>
                        <input id="number_input" type='number' inputMode='numeric' className=' flex align-center pl-2 text-md font-poppins rounded-md resize-none w-full h-full border-none focus:outline-none focus:border-blue-500' />
                        <div className='bg-gray-100 h-full w-16 rounded-md border-l rounded-tl-none rounded-bl-none border-gray-300 font-poppins text-md flex items-center justify-center select-text'>{unitBeforeDisplay}</div>
                    </div>
                    <button onClick={() => executeConvert()} className='shadow-md hover:bg-blue-600 duration-500 rounded-lg text-white font-open mt-8 h-12 self-center bg-blue-800 w-52'>Convert</button>
                </div>
                <div className='flex flex-col w-2/5 mr-20 ml-8 h-96 px-12 py-8 custom_glow bg-white rounded-xl border_1 border-gray-300'>
                    <h2 className="font-open text-xl">Result and Steps</h2>
                    <label className="mt-6 font-open text-gray-600" htmlFor="div_result">Conversion Steps</label>
                    <div id="div_steps" className={`whitespace-pre-wrap font-poppins text-md w-full h-32 select-text text-left px-2 py-2 bg-white rounded-md border_1 border-gray-300 shadow-md duration-200 ${loading? "text-gray-300" : "text-black"}`}>{resultCara}</div>
                    <label className="mt-6 font-open text-gray-600" htmlFor="div_result">Conversion Result</label>
                    <div id="div_result" className='flex flex-row justify-between m-0 p-o rounded-md border_1 border-gray-300 shadow-md w-full h-12'>
                        <div className={`flex items-center pl-2 text-md select-text font-poppins rounded-md resize-none w-full h-full border-none focus:outline-none focus:border-blue-500 duration-200 ${loading? "text-gray-300" : "text-black"}`}>{resultAngka}</div>
                        <div className={`loader mt-2 mx-2 ${loading? "opacity-100" : "opacity-0"}`} ></div>
                        <div className='bg-gray-100 h-full w-16 rounded-md border-l rounded-tl-none rounded-bl-none border-gray-300 font-poppins text-md flex items-center justify-center select-text'>{unitAfterDisplay}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}