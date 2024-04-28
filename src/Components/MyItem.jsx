import SingleItem from "./SingleItem";


const MyItem = ({item,Delete,Update,itemData,setItemData}) => {
    return (
        <div>
            <SingleItem itemData={itemData} setItemData={setItemData} Delete={Delete} Update={Update} item={item}></SingleItem>
        </div>
    );
};

export default MyItem;