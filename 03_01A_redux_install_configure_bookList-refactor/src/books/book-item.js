import AuthEnable from "../state/context/AuthEnable";

const BookItem = ({ item, addToList }) => {

    return (
        <div>
            <article className="card">
                <header>
                    <h3>{item.name}</h3>
                </header>
               
                <p> {item.description} </p>
                
                <footer>
                    <AuthEnable>
                        <button onClick={ () => addToList(item) }>Add</button>
                    </AuthEnable> 
                </footer>
            </article>
        </div>
    )
}

export default BookItem; 
