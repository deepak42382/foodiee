import Foodcard from "./Foodcard";
import FoodData from "../fooddata/FoodData";
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from "react-redux";

const Fooditems = ()=>{
    const handleToast =(name)=>toast.success(`added ${name}`);
    const category = useSelector((state)=>state.category.category);
    const search = useSelector((state)=>state.search.search);
    return(
        <>
        <Toaster position="top-center"reverseOrder={false}/>
        <div className="flex flex-wrap gap-10 my-10 justify-center lg:justify-start">
            {
                FoodData.filter((food)=>{
                    if(category==="All"){
                        return food.name.toLowerCase().includes(search.toLowerCase());
                    }
                    else{
                         return category===food.category&&food.name.toLowerCase().includes(search.toLowerCase());
                    }
                }).map((food)=>{
                return(
                    <Foodcard key={food.id}
                    name={food.name}
                    id={food.id}
                    rating={food.rating}
                    desc={food.desc}
                    img={food.img}
                    price={food.price}
                    handleToast={handleToast}
                    />
                )
            })
        }
             
        </div>
        </>
    )
}
export default Fooditems;