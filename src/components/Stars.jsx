export default function Stars({value}){return <div className="stars"><span>{'★'.repeat(Math.floor(value))}{value%1?'½':''}</span><small>{value}/5</small></div>}
