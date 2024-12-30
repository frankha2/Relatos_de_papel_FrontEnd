export const Cart = () => {
    
    return (
        <div className="fixed left-50 w-auto h-30rem bg-black bg-opacity-50 flex align-items-center justify-center border-round">
            <div className="bg-white p-4 rounded-lg">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl text-100">Carrito de compra</h1>
                    <button onClick={closeModal}>X</button>
                </div>
                <ul>
                    {globalList!.map(book => (
                        <li key={book.id} className="flex justify-between items-center">
                            <p>{book.title}</p>
                            <p>{book.cant}</p>
                            <p>${book.price}</p>
                            {/* <button onClick={() => remove(book.id)}>X</button> */}
                        </li>
                    ))}
                </ul>
                {/* <p>Total: ${total}</p> */}
            </div>
        </div>
    )
}