
import { ImFire } from "react-icons/im";
import { Link } from "react-router-dom";
const SubCategory = ({item}) => {
    return (
        <Link to={`/item/${item.category}`} data-aos="zoom-in" data-aos-duration="1000">
            <section>
	<div >
		<div className="col-md-4 col-sm-6 col-xs-12">
			<div className="cards ">
				<div className="cover rounded-xl"style={{ 
                                    backgroundImage: `url(${item.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center center'
                                }} >
					<h1 className="text-2xl lg:text-4xl">{item.category}</h1>
					<span className="price ">{item.trending==='yes'?<ImFire className="text-yellow-400 border rounded-full p-2 text-5xl border-yellow-300" />:<></>}</span>
					<div className="cards-back">
						
						<a className="btn btn-outline" href="/all">View ALL</a>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</section>
        </Link>
    );
};

export default SubCategory;