import { CompleteButton, DeleteButton } from "./VersionOne";

function TaskList({title, listing, onClick}) {
    return(
        <>
            <h2 className="text-3xl mb-9">{title}</h2>
            <ul className={`p-9 mb-12 rounded-xl flex flex-col gap-2 ${title === 'Pendings' ? 'bg-red-100' : 'bg-green-100'}`}>
                {listing.length > 0 ? (
                    listing.map((task, index) => 
                        <li key={index} className="flex p-2 bg-red-200 rounded-lg">
                            <span className="grow content-center pl-4">
                                {task}
                            </span>
                            
                            {title === 'Pendings' ? (
                                <CompleteButton onClick={() => onClick(index)}/>

                            ):(
                                <DeleteButton onClick={() => onClick(index)}/>
                            )}
                            
                        </li>
                    )
                ): (
                    <p className="text-2xl">No Data</p>
                )}
                
            </ul>
        </>
    );
}

export default TaskList;
