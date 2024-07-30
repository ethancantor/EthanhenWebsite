interface imgCategoryProps {
	categoryName: string;
	imgs: string[];
    className?: string;
}

export function ImgCategory(props: imgCategoryProps) {
	return ( 
		<div className="flex item-center flex-col">
			<div className="flex items-center text-xl text-neutral-500 content-center justify-center">
				{props.categoryName}
			</div>
            <div className="flex flex-row item-center justify-center">
                {props.imgs && props.imgs.map(i => {
                    return (
                        <div className="size-72 m-4 cursor-pointer" key={'div ' + i}>
                            <img src={'/gallery/' + props.categoryName + '/' + i} alt={i} className="" key={i}/>
                        </div>
                    ) 
                })}
            </div>
		</div>
	)
}