import bgShorten from "../../images/bg-shorten-mobile.svg"

function InputLink() {
    return ( 
        <div className="mt-10 p-6 bg-[var(--Dark-Violet)] bg-[url('../../images/bg-shorten-mobile.svg')] bg-right-top bg-no-repeat rounded">
            <div className="flex flex-col ">
                <input 
                type="text"
                placeholder="Shorten a link here..."
                className="py-3 px-2 rounded text-base"
                />
                <button className="mt-5 text-white bg-[var(--Cyan)] py-2 font-bold rounded">Shorten it!</button>
            </div>
        </div>
     );
}

export default InputLink;