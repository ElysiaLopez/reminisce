function MemoryCard({date, text, onClick})
{
    return (
        <div className="card" onClick={onClick}>
          <div className="container">
            <h4 style={{margin: "10px"}}><b>{date}</b></h4>
            <div className="test">
                <p className="cardtext nopic">{text}</p>
            </div>
          </div>    
        </div>
      );
}

export default MemoryCard;