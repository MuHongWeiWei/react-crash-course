const Item = (props) => {

    function deleteItem() {
        props.submittingData.current = true
        props.deleteData(function (prev) {
            return prev.filter(item => item.id !== props.id)
        })
    }

    return <div className="item">Item
        <div>
            <p>{props.note}</p>
            <p>{`${props.date} ${props.time}`}</p>
        </div>
        <button onClick={deleteItem} className="remove">刪除</button>
    </div>
}


export default Item
