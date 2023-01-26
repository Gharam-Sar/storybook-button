
export default function Button({ color: { R, G,B },title,state, Size }) {
  const c="rgb("+R+","+G+","+B+")";
  return (
    <div className="sizeDisplay">
      <div className={`list-item ${state}`}
    style={{backgroundColor: state =="Primary"? c:"white",
    border: state =="Text"? "none":"1px solid "+c,
    color:state =="Secondary"? c:"black",
    width:Size=="Small"?"15%":(Size=="Medium"?"20%":"30%")
  }} onClick={console.log(Size+" clicky was clicked")}
   >{title}</div>
    
      
    </div>
  );
}