import type {JSX} from "react";

export const AcceptanceBanner:React.FC = (): JSX.Element =>{
    return(
        <div className="bg-primary-500 text-white text-center py-1 flex justify-center items-center">
            <div className="flex justify-center items-center relative ml-2 animate-pulse duration-500">
                <div className="w-5 h-5 bg-green-900 opacity-15 flex justify-center items-center rounded-full"/>
                <div className="w-3 h-3 bg-green-400  rounded-full absolute z-10"/>
            </div>
            <h6 className="text-sm font-bold">سفارش می پذیریم</h6>
        </div>
    )
};

