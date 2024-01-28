import ArrowRight from '../assets/icon_arrowright_blue.svg'
import { useState, useEffect } from 'react'
import FlagBTC from '../assets/flag_btc.png'
import FlagJPY from '../assets/flag_jpy.png'
import FlagUSD from '../assets/flag_usd.png'
import FlagIDR from '../assets/flag_idr.png'
import ArrowRefresh from '../assets/icon_refresh.svg'  
import axios from 'axios'

export default function CurrencyContents() {
    const [duid, setDuid] = useState('0.00');
    const [date, setDate] = useState('');
    const [currencyBefore, setCurrencyBefore] = useState('IDR');
    const [currencyAfter, setCurrencyAfter] = useState('USD');
    const [flagBefore, setFlagBefore] = useState(FlagIDR);
    const [flagAfter, setFlagAfter] = useState(FlagUSD);
    const [resultTotal, setResultTotal] = useState('= USD');
    const [resultSatuan, setResultSatuan] = useState('1 IDR = USD');
    const [satuanRate, setSatuanRate] = useState('');
    const [loading, setLoading] = useState(false);
    // kayaknya benyakan useState hehe
    
    const sleep = ms => new Promise(r => setTimeout(r, ms));  

    const handleDuidBlur = () => {
        let formattedDuid = parseFloat(duid).toFixed(2);
        if (isNaN(formattedDuid) || formattedDuid === '') formattedDuid = '0.00';
        setDuid(formattedDuid);
    };

    const refreshRates = async() => {
        setLoading(true);

        const currencyAPI = {
            method: 'GET',
            url: 'https://currency-converter-pro1.p.rapidapi.com/latest-rates',
            params: {
              base: `${currencyBefore}`,
              currencies: `${currencyAfter}`,
            },
            headers: {
              'X-RapidAPI-Key': '1a4ff51e51msh4504837aa4c7e7bp186622jsne3f7680d452d',
              'X-RapidAPI-Host': 'currency-converter-pro1.p.rapidapi.com'
            }
        };

        axios.request(currencyAPI)
        .then(function (response) {
            setSatuanRate(response.data.result[currencyAfter]);
            const timestampUnix = (response.data.timestamp);
            const formattedDate = new Date(timestampUnix).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
            const formattedTime = new Date(timestampUnix).toLocaleTimeString('en-US', { hour12: false  });
            setDate(`${formattedDate} ${formattedTime} WIB`);
        })
        .catch(function (error) {
            setResultTotal("Fetching rate failed");
            setResultSatuan("Retry by refreshing the page");
            console.log(error);
        });

        await sleep(300);
        setLoading(false);
    };

    useEffect(() => {
        if (currencyBefore == currencyAfter) {
            setResultTotal("Currencies must be different");
            setResultSatuan("Kindly select another currency");
            return;
        }

        refreshRates();
        handleDuidChange();
        disableButton();
    }, [currencyBefore, currencyAfter, satuanRate]);

    const handleDuidChange = () => {
        const input= document.getElementById("duid_id");  //tadinya mau pake (event) tapi gabisa karna ada handleDuitChange()
        const value = input.value.replace(/[^0-9.,]/g, '');
        setDuid(value); 

        let formattedResultTotal, formattedResultSatuan;
        if (currencyAfter == "BTC") {
            formattedResultTotal = (satuanRate * value).toLocaleString('en-US', {
                minimumFractionDigits: 8, maximumFractionDigits: 8,
            });
            formattedResultSatuan = (satuanRate).toLocaleString('en-US', {
                minimumFractionDigits: 3, maximumFractionDigits: 9,
            });
        } else if (currencyBefore == "BTC") {
            formattedResultTotal = (satuanRate * value).toLocaleString('en-US', {
                minimumFractionDigits: 3, maximumFractionDigits: 6,
            });
            formattedResultSatuan = (satuanRate).toLocaleString('en-US', {
                minimumFractionDigits: 3, maximumFractionDigits: 9,
            });
        } else {
            formattedResultTotal = (satuanRate * value).toLocaleString('en-US', {
                minimumFractionDigits: 3, maximumFractionDigits: 6,
            });
            formattedResultSatuan = (satuanRate).toLocaleString('en-US', {
                minimumFractionDigits: 6, maximumFractionDigits: 6,
            });
        }

        setResultTotal(`= ${formattedResultTotal} ${currencyAfter}`);
        setResultSatuan(`1 ${currencyBefore} = ${formattedResultSatuan} ${currencyAfter}`);
    };

    // refresh harus kasi delay biar ga cepet kena limit
    const disableButton = async() => {
        const button = document.getElementById("button_refresh");
        button.classList.add("button_disable");
        await sleep(4000);
        button.classList.remove("button_disable");
    }

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
                            <div className='flex items-center pl-3 text-md font-bold font-poppins rounded-md bg-none border-none focus:outline-none'>{currencyBefore}</div>
                            <input type='text' value={duid} id="duid_id" onBlur={handleDuidBlur} onChange={handleDuidChange} inputMode='numeric' className='flex align-center pl-2 text-md font-poppins rounded-md resize-none w-full h-full border-none focus:outline-none focus:border-blue-500' />
                            <div className={`loader mt-2 mx-2 ${loading? "opacity-100" : "opacity-0"}`} ></div>
                        </div>
                    </div>
                    <div className="flex justify-between flex-row mt-4">
                        <div className='flex flex-col width_45'>
                            <label className="font-open text-gray-600" htmlFor="div_before">Origin</label>
                            <div id="div_before"className="flex h-12 flex-row rounded-md shadow-md w-full">
                                <div className='bg-gray-100 h-full w-16 rounded-md border_1 border-r-0 rounded-tr-none rounded-br-none border-gray-300 font-poppins text-md flex items-center justify-center'>
                                    <img className='w-7 border_1 border-gray-300 rounded-md' src={flagBefore}></img>
                                </div>
                                <select onChange={(event) => { setFlagBefore(eval(`Flag${event.target.value}`)); setCurrencyBefore(event.target.value); }} id="dropdown_before" className="w-full h-full pr-8 pl-2 font-poppins rounded-tl-none rounded-bl-none rounded-md border_1 border-gray-300  focus:outline-none focus:border-blue-500">
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
                                    <img className='w-7 border_1 border-gray-300 rounded-md' src={flagAfter}></img>
                                </div>
                                <select id="dropdown_after" onChange={(event) => { setFlagAfter(eval(`Flag${event.target.value}`)); setCurrencyAfter(event.target.value); }} className="w-full h-full pr-8 pl-2 font-poppins rounded-tl-none rounded-bl-none rounded-md border_1 border-gray-300  focus:outline-none focus:border-blue-500">
                                    <option value="USD">USD - United States Dollar</option>
                                    <option value="IDR">IDR - Indonesian Rupiah</option>
                                    <option value="BTC">BTC - Bitcoin</option>
                                    <option value="JPY">JPY - Japanese Yen</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row w-full mt-8 h-24'>
                        <div className='select-text flex flex-col width_65 mr-8 overflow-x-hidden'>
                            <p id="result_total" className={`max-w-92 truncate font-roboto bold text-3xl transition-all duration-200 ${loading? "text-gray-300" : "text-gray-500"}`}>{resultTotal}</p>
                            <p id="result_single"className={`font-roboto bold text-md transition-all duration-200 ${loading? "text-gray-300" : "text-gray-500"}`}>{resultSatuan}</p>
                        </div>
                        <div className='flex flex-col justify-between w-2/5 select-text'>
                            <div className='flex flex-row w-full justify-between h-12 items-center'>
                                <button onClick={() => window.open("https://rapidapi.com/Dezento/api/currency-converter-pro1")} className=' flex justify-center items-center border-2 hover:bg-blue-100 bg-white border-blue-800 hover:border-blue-600 shadow-md duration-500 rounded-lg text-blue-800 hover:text-blue-600 text-sm font-open h-12 width_48'>API Provider</button>
                                <button id="button_refresh" onClick={() => setSatuanRate('')} className='text-sm flex justify-center items-center shadow-md hover:bg-blue-600 duration-500 rounded-lg text-white font-open h-12  bg-blue-800 width_48'>Refresh
                                    <img src={ArrowRefresh} className='ml-2 w-4'></img>
                                </button>
                            </div>
                            <div className='text-gray-600 font-inter flex flex-col justify-start items-start text-xs tracking-wider mt-3 responsive_text'>
                                <p>My free API's hard limit is 3000 requests<br />Updated {date}</p>
                                <div className='w-full h-1 flex flex-row'>
                                    <img className="w-1 h-1 opacity-0" src={FlagBTC}></img>
                                    <img className="w-1 h-1 opacity-0" src={FlagJPY}></img>
                                    <img className="w-1 h-1 opacity-0" src={FlagIDR}></img>
                                    <img className="w-1 h-1 opacity-0" src={FlagUSD}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}