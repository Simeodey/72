
export default function Tags({tags}){

    return (<div className="tags">
       {(tags.map(el=><div className="tag">#{el}</div>) )}
       </div>);

};