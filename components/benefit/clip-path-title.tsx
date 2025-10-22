import clsx from "clsx";

interface IProps {
    title: string,
    className?: string,
    bgColor: string,
    titleColor: string
    id: string
}
const ClipPathTitle = ({ className, bgColor, title, titleColor, id }: IProps) => {
    return (
        <div className="text-5xl md:text-8xl 2xl:text-[8.5rem] font-bold uppercase leading-[9vw] tracking-[-.35vw]">
            <div id={id} style={{
                clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }} className={clsx("border-[.5vw] text-nowrap opacity-0", className)}>
                <div style={{
                    backgroundColor: `${bgColor}`
                }} className="pb-5 md:px-14 px-3 md:pt-0 pt-3">
                    <h2 style={{
                        color: titleColor
                    }}>
                        {title}
                    </h2>
                </div>
            </div>
        </div>
    )
};

export default ClipPathTitle;