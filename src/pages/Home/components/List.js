import Item from "./Item";

const List = (props) => {
    return <div className="list">
        {props.listData.map(item => {
            const {note, date, time, id} = item
            return <Item key={id} id={id} note={note} date={date} time={time} deleteData={props.deleteData} submittingData={props.submittingData}/>
        })}
    </div>
}

export default List
