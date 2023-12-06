import { getAllCategoris } from "@/utiles/getAllCategoris";

const CategoryList = async() => {
    const {data:categories} = await getAllCategoris()
    console.log(categories);

    return (
        <div>
            <h2>Category List: {categories.length} </h2>        
        </div>
    );
};

export default CategoryList;