import Figure from '../assets/landing_figure.png'

export default function LandingContents() {
    
    const executeScroll = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="flex absolute top-44 w-full">
            <div className="w-1/2 ml-44 mt-8 flex flex-col justify-center">
                <h1 className="text-6xl text-white font-open">Want to <em><strong>Exercise</strong></em><br />your math speed?<br />race our apps!</h1>
                <div>
                    <button onClick={() => executeScroll("menupicker_scroll")} className='flex items-center justify-center mt-12 self-center bg-white w-48 h-12 rounded-full text-lg shadow-lg border-2 border-white hover:bg-transparent hover:text-white duration-300 floating'>Take me there</button>
                    <div className="ml-20 chevron_container">
                        <div className="chevron"></div>
                        <div className="chevron"></div>
                        <div className="chevron"></div>
                    </div>
                </div>
            </div>
            <div className='w-1/2 mr-20'>
                <img src={Figure}></img>
            </div>
        </div>
    )
}