import { CompleteButton, DeleteButton } from "./Form";

function TaskList({title, listing, onClick}) {
    return(
        <>
            <h2>{title}</h2>
            <ul>
                {listing.length > 0 ? (
                    listing.map((task, index) => 
                        <li key={index}>
                            {task}
                            {title === 'Pendings' ? (
                                <CompleteButton onClick={() => onClick(index)}/>

                            ):(
                                <DeleteButton onClick={() => onClick(index)}/>
                            )}
                            
                        </li>
                    )
                ): (
                    <p>No Data</p>
                )}
                
            </ul>
        </>
    );
}

export default TaskList;
