import SingleItem from "./SingleItem";


const MyItem = ({item,Delete,Update}) => {
    return (
        <div>
            <SingleItem Delete={Delete} Update={Update} item={item}></SingleItem>
        </div>
    );
};

export default MyItem;