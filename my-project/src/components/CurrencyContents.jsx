import ArrowRight from '../assets/icon_arrowright_blue.svg'
import { useState, useEffect } from 'react'
import FlagBTC from '../assets/flag_btc.png'
import FlagJPY from '../assets/flag_JPN.png'
import FlagUSD from '../assets/flag_USA.png'
import FlagIDR from '../assets/flag_IDN.png'
import ArrowRefresh from '../assets/icon_refresh.svg'   

export default function CurrencyContents() {
    const [duid, setDuid] = useState('0.00');
    const [CurrencyBefore, setCurrencyBefore] = useState ("");
    const [CurrencyAfter, setCurrencyAfter] = useState ("");
    const [FlagBefore, setFlagBefore] = useState ("");
    const [FlagAfter, setFlagAfter] = useState ("");

    
    useEffect(() => {
            setCurrencyBefore("IDR");
            setFlagBefore(eval("FlagIDR"));
            setCurrencyAfter("USD");
            setFlagAfter(eval("FlagUSD"));
    }, [])

    const handleFlagChange = (event) => {
        const selectedFlag = event.target.value;
        if (event.target.id == "dropdown_before") setFlagBefore(eval(`Flag${selectedFlag}`));
        else if (event.target.id == "dropdown_after") setFlagAfter(eval(`Flag${selectedFlag}`));
    }

    const handleDuidChange = (event) => {
        const value = event.target.value.replace(/[^0-9.,]/g, '');
        setDuid(value);
    };

    const handleDuidBlur = () => {
        let formattedDuid = parseFloat(duid).toFixed(2);
        if (isNaN(formattedDuid) || formattedDuid === '') formattedDuid = '0.00';
        setDuid(formattedDuid);
    };

    return (
        <div className="flex flex-col absolute top-32 w-full">
            <div className="flex justify-start h-20 flex-col items-center">
                <h1 className="text-4xl text-white font-poppins"><strong>Currency Converter 9000®</strong></h1>
            </div>
            <div className="flex flex-row">
                <div className="px-12 py-8 flex flex-col w-full custom_glow mx-64 h-92 shadow-xl bg-white rounded-xl border_1 border-gray-300">
                    <h2 className="font-open text-xl">Configure Conversion</h2>
                    <div className='flex flex-col mt-6 w-full'>
                        <label className="font-open text-gray-600" htmlFor="div_amount">Amount</label>
                        <div id="div_amount" className='flex flex-row justify-between m-0 p-o rounded-md border_1 border-gray-300 shadow-md w-full h-12'>
                            <div className='flex items-center pl-3 text-md font-bold font-poppins rounded-md bg-none border-none focus:outline-none'>Rp</div>
                            <input type='text' value={duid} onBlur={handleDuidBlur} onChange={handleDuidChange} inputMode='numeric' className=' flex align-center pl-1 text-md font-poppins rounded-md resize-none w-full h-full border-none focus:outline-none focus:border-blue-500' />
                            <div className='loader mt-2 mx-2'></div>
                        </div>
                    </div>
                    <div className="flex justify-between flex-row mt-4">
                        <div className='flex flex-col width_45'>
                            <label className="font-open text-gray-600" htmlFor="div_before">Origin</label>
                            <div id="div_before"className="flex h-12 flex-row rounded-md shadow-md w-full">
                                <div className='bg-gray-100 h-full w-16 rounded-md border_1 border-r-0 rounded-tr-none rounded-br-none border-gray-300 font-poppins text-md flex items-center justify-center'>
                                    <img className='w-7 border_1 border-gray-300 rounded-md' src={FlagBefore}></img>
                                </div>
                                <select onChange={handleFlagChange} id="dropdown_before" className="w-full h-full pr-8 pl-2 font-poppins rounded-tl-none rounded-bl-none rounded-md border_1 border-gray-300  focus:outline-none focus:border-blue-500">
                                    <option value="IDR">IDR - Indonesian Rupiah</option>
                                    <option value="BTC">BTC - Bitcoin</option>
                                    <option value="USD">USD - United States Dollar</option>
                                    <option value="JPY">JPY - Japanese Yen</option>
                                </select>
                            </div>
                        </div>
                        <img className="w-8 mt-6" src={ArrowRight}></img>
                        <div className='flex flex-col width_45'>
                            <label className="font-open text-gray-600" htmlFor="div_before">Convert To</label>
                            <div id="div_before"className="flex h-12 flex-row rounded-md shadow-md w-full">
                                <div className='bg-gray-100 h-full w-16 rounded-md border_1 border-r-0 rounded-tr-none rounded-br-none border-gray-300 font-poppins text-md flex items-center justify-center'>
                                    <img className='w-7 border_1 border-gray-300 rounded-md' src={FlagAfter}></img>
                                </div>
                                <select id="dropdown_after" onChange={handleFlagChange} className="w-full h-full pr-8 pl-2 font-poppins rounded-tl-none rounded-bl-none rounded-md border_1 border-gray-300  focus:outline-none focus:border-blue-500">
                                    <option value="USD">USD - United States Dollar</option>
                                    <option value="IDR">IDR - Indonesian Rupiah</option>
                                    <option value="BTC">BTC - Bitcoin</option>
                                    <option value="JPY">JPY - Japanese Yen</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row w-full mt-8 h-24'>
                        <div className='select-text flex flex-col width_65 mr-8'>
                            <p id="result_total" className="font-roboto bold text-3xl text-gray-500">= 0.000064008211 USD</p>
                            <p id="result_single"className="font-roboto bold text-md text-gray-500">1 IDR = 0.000064008211 USD</p>
                        </div>
                        <div className='flex flex-col justify-between w-2/5 select-text'>
                            <div className='flex flex-row w-full justify-between h-12 items-center'>
                                <button className=' flex justify-center items-center border-2 hover:bg-blue-100 bg-white border-blue-800 hover:border-blue-600 shadow-md duration-500 rounded-lg text-blue-800 hover:text-blue-600 text-sm font-open h-12 width_48'>API Provider</button>
                                <button className='text-sm flex justify-center items-center shadow-md hover:bg-blue-600 duration-500 rounded-lg text-white font-open h-12  bg-blue-800 width_48'>Refresh Rates
                                    <img src={ArrowRefresh} className='ml-2 w-4'></img>
                                </button>
                            </div>
                            <div className='text-gray-600 font-inter text-xs tracking-wider mb-1'>
                                <p>Real-time exchange rates provided by 
                                    <a className="pl-1 text-blue-800 underline hover:text-blue-600 duration-200" href='https://www.exchangerate-api.com/'>ERAPI</a></p>
                                <p>Last updated: Jan 23, 2024, 08:12 WIB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}