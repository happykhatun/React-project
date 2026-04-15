

const ServiceCard = ({ icon, title, description }) => {
    return (
        <>
            <div className="flex flex-col justify-center text-center items-center w-85 bg-white hover:shadow-2xl hover:-translate-y-1 cursor-pointer transition duration-200 p-4">
                <div>
                    <img src={icon} alt="" />
                </div>
                <h3 className="font-semibold text-[28px] text-[#29313D] mt-9.5 mb-4">{title}</h3>
                <p className="text-[18px] font-normal text-[#29313D] leading-[200%]">{description}</p>
            </div>
        </>
    )
}

export default ServiceCard
