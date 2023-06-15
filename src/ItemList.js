const Item = ({name,isPacked})=>{
    return(<><li>{isPacked?name+'✔️':name}</li></>);
}

export default function ItemList(){
    const item = [{id:0,name:"Sunglasses",isPacked:true},
                 {id:1,name:"Towel",isPacked:false},
                 {id:2,name:"Powerbank",isPacked:true},
                 {id:3,name:"Shampoo",isPacked:true}];
    const listItem = item.map(i => <Item id = {i.id} name={i.name} isPacked={i.isPacked}/>)
    const fillterItem = item.filter(i=> i.name.includes("S"))
    const filterItemList = fillterItem.map(i => <Item id = {i.id} name={i.name}/>)
    return(<>
        
        <h1>Item Filter</h1>
        <ul>
        {filterItemList}
        </ul>
        <h1>To pack list</h1>
        <ul>
            {listItem}
        </ul>
    </>
    );
}