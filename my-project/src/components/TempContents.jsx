import ArrowRight from '../assets/icon_arrowright_blue.svg'

export default function TempContents() {

    return (
        <div className="flex flex-col absolute top-32 w-full">
            <div className="flex justify-center h-20">
                <h1 className="text-4xl text-white font-poppins"><strong>Temperature Converter 3000®</strong></h1>
            </div>
            <div className="flex flex-row">
                <div className="px-12 py-8 flex flex-col w-3/5 custom_glow ml-40 mr-8 h-96 shadow-xl bg-white rounded-xl border_1 border-gray-300">
                    <h2 className="font-open text-xl">Configure Conversion</h2>
                    <div className="flex justify-between flex-row mt-6">
                        <div className="flex flex-col width_45">
                            <label className="font-open text-gray-600" htmlFor="dropdown_before">Base Unit</label>
                            <select id="dropdown_before" className="w-full h-12 pr-8 pl-2 font-poppins rounded-md border_1 border-gray-300 shadow-md focus:outline-none focus:border-blue-500">
                                <option>°C - Celsius</option>
                                <option>°F - Fahrenheit</option>
                                <option>°R - Rankine</option>
                                <option>°K - Kelvin</option>
                            </select>
                        </div>
                        <img className="w-8 mt-6" src={ArrowRight}></img>
                        <div className="flex flex-col width_45">
                            <label className="font-open text-gray-600" htmlFor="dropdown_after">Target Unit</label>
                            <select id="dropdown_after" className="w-full h-12 pr-8 pl-2 font-poppins rounded-md border_1 border-gray-300 shadow-md focus:outline-none focus:border-blue-500">
                                <option>°C - Celsius</option>
                                <option>°F - Fahrenheit</option>
                                <option>°R - Rankine</option>
                                <option>°K - Kelvin</option>
                            </select>
                        </div>
                    </div>
                    <label className="mt-6 font-open text-gray-600" htmlFor="div_amount">Temperature</label>
                    <div id="div_amount" className='flex flex-row justify-between m-0 p-o rounded-md border_1 border-gray-300 shadow-md w-full h-12'>
                        <input type='number' inputMode='numeric' className=' flex align-center pl-2 text-md font-poppins rounded-md resize-none w-full h-full border-none focus:outline-none focus:border-blue-500' />
                        <div className='bg-gray-100 h-full w-16 rounded-md border-l rounded-tl-none rounded-bl-none border-gray-300 font-poppins text-md flex items-center justify-center'>°C</div>
                    </div>
                    <button className='shadow-md hover:bg-blue-600 duration-500 rounded-lg text-white font-open mt-8 h-12 self-center bg-blue-800 w-52'>Convert</button>
                </div>
                <div className='flex flex-col w-2/5 mr-20 ml-8 h-96 px-12 py-8 custom_glow bg-white rounded-xl border_1 border-gray-300'>
                    <h2 className="font-open text-xl">Result and Steps</h2>
                    <div className='mt-4 font-poppins text-md w-full h-40 select-text text-left px-2 py-2 bg-white rounded-md border_1 border-gray-300 shadow-md'>= 200 x 5<br />= 500 + 10<br />= 610 / 2<br />= 305</div>
                    <label className="mt-6 font-open text-gray-600" htmlFor="div_result">Conversion Result</label>
                    <div id="div_result" className='flex flex-row justify-between m-0 p-o rounded-md border_1 border-gray-300 shadow-md w-full h-12'>
                        <div className=' flex align-center pl-2 text-md select-text font-poppins rounded-md resize-none w-full h-full border-none focus:outline-none focus:border-blue-500'></div>
                        <div className='bg-gray-100 h-full w-16 rounded-md border-l rounded-tl-none rounded-bl-none border-gray-300 font-poppins text-md flex items-center justify-center'>°F</div>
                    </div>
                </div>
            </div>
        </div>
    )
}